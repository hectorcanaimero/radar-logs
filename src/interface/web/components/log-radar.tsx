/**
 * LAYER: Interface
 * Contains: LogRadar tool (núcleo interactivo)
 * Rules: Handles UI only. Calls use cases. Strings via props (i18n).
 */

"use client";

import { useState } from "react";
import type { AnalyzeLogsResult } from "@/application/dtos/analyze-logs-result";
import type { ToolStrings } from "../content";
import { getAnalyzeLogsUseCase } from "../composition";
import { SAMPLE_LOGS } from "../sample-logs";

type Status = "idle" | "loading-model" | "analyzing" | "done" | "error";

const STATUS_LABEL: Record<Exclude<Status, "idle" | "done" | "error">, keyof ToolStrings> = {
  "loading-model": "loadingModel",
  analyzing: "analyzing",
};

export function LogRadar({ tool }: { tool: ToolStrings }) {
  const [rawLogs, setRawLogs] = useState("");
  const [result, setResult] = useState<AnalyzeLogsResult | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function analyze() {
    setError(null);
    setResult(null);
    setStatus("loading-model");
    try {
      const useCase = await getAnalyzeLogsUseCase();
      setStatus("analyzing");
      setResult(await useCase.execute({ rawLogs }));
      setStatus("done");
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
      setStatus("error");
    }
  }

  const maxScore = result
    ? Math.max(...result.lines.map((line) => line.score), 0)
    : 0;
  const busy = status === "loading-model" || status === "analyzing";
  const statusText = busy ? tool[STATUS_LABEL[status]] : "";

  return (
    <section id="tool" className="scroll-mt-24">
      <div className="flex flex-col gap-3">
        <textarea
          value={rawLogs}
          onChange={(event) => setRawLogs(event.target.value)}
          placeholder={tool.placeholder}
          spellCheck={false}
          className="h-64 w-full rounded-md border border-zinc-200 bg-zinc-50 p-4 font-mono text-xs leading-relaxed text-zinc-700 focus:border-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-400"
        />
        <div className="flex items-center gap-3">
          <button
            onClick={analyze}
            disabled={!rawLogs.trim() || busy}
            className="rounded-md bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {tool.analyze}
          </button>
          <button
            onClick={() => setRawLogs(SAMPLE_LOGS)}
            className="rounded-md border border-zinc-200 px-5 py-2.5 text-sm text-zinc-600 transition-colors hover:border-zinc-400 hover:text-zinc-900"
          >
            {tool.loadSample}
          </button>
          {busy && <p className="text-xs text-zinc-500">{statusText}</p>}
        </div>
        {error && <p className="text-sm text-red-600">{error}</p>}
      </div>

      {result && result.lines.length > 0 && (
        <div className="mt-12">
          <div className="mb-6 flex items-baseline justify-between border-b border-zinc-200 pb-3">
            <h2 className="text-xs uppercase tracking-[0.28em] text-zinc-400">
              {tool.resultTitle}
            </h2>
            <p className="text-xs tabular-nums text-zinc-500">
              {tool.linesMeta
                .replace("{total}", String(result.totalLines))
                .replace("{unique}", String(result.uniqueLines))}
            </p>
          </div>

          <ol className="divide-y divide-zinc-100 border-y border-zinc-100">
            {result.lines.map((line) => {
              const t = maxScore > 0 ? line.score / maxScore : 0;
              const isAnomaly = t > 0.5;
              return (
                <li key={line.text} className="flex flex-col gap-2 py-3">
                  <div className="flex items-start justify-between gap-4">
                    <code className="break-all font-mono text-xs leading-relaxed text-zinc-700">
                      {line.text}
                    </code>
                    <span className="shrink-0 text-xs tabular-nums text-zinc-400">
                      ×{line.occurrences}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-1 flex-1 overflow-hidden rounded-full bg-zinc-100">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${Math.max(t * 100, 2)}%`,
                          backgroundColor: isAnomaly
                            ? "rgba(220, 38, 38, 0.85)"
                            : "rgba(161, 161, 170, 0.45)",
                        }}
                      />
                    </div>
                    <span
                      className={`text-xs tabular-nums ${
                        isAnomaly ? "font-medium text-red-600" : "text-zinc-400"
                      }`}
                    >
                      {line.score.toFixed(3)}
                    </span>
                  </div>
                </li>
              );
            })}
          </ol>

          <p className="mt-6 text-xs leading-relaxed text-zinc-400">
            {tool.footerNote}
          </p>
        </div>
      )}
    </section>
  );
}
