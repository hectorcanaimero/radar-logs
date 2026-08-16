/**
 * LAYER: Application
 * Contains: AnalyzeLogsUseCase
 * Rules: Orchestrates domain. Depends only on Domain + ports. No frameworks.
 */

import { LogLine } from "@/domain/entities/log-line";
import { AnomalyDetector } from "@/domain/services/anomaly-detector";
import { AnalyzeLogsInput } from "../dtos/analyze-logs-input";
import { AnalyzeLogsResult } from "../dtos/analyze-logs-result";
import { EmbeddingPort } from "../ports/embedding-port";

export class AnalyzeLogsUseCase {
  constructor(private readonly embeddingProvider: EmbeddingPort) {}

  async execute(input: AnalyzeLogsInput): Promise<AnalyzeLogsResult> {
    const lines = this.splitIntoLines(input.rawLogs);
    const uniqueLines = this.countOccurrences(lines);
    if (uniqueLines.length === 0) {
      return { lines: [], totalLines: 0, uniqueLines: 0 };
    }

    const texts = uniqueLines.map((line) => line.text);
    const embeddings = await this.embeddingProvider.embed(texts);
    const scores = AnomalyDetector.score(uniqueLines, embeddings);

    return {
      lines: scores.map((entry) => ({
        text: entry.line.text,
        occurrences: entry.line.occurrences,
        score: entry.distance,
      })),
      totalLines: lines.length,
      uniqueLines: uniqueLines.length,
    };
  }

  private splitIntoLines(raw: string): string[] {
    return raw
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter((line) => line.length > 0);
  }

  private countOccurrences(lines: string[]): LogLine[] {
    const counts = new Map<string, number>();
    for (const line of lines) {
      counts.set(line, (counts.get(line) ?? 0) + 1);
    }
    return [...counts.entries()].map(
      ([text, occurrences]) => new LogLine(text, occurrences),
    );
  }
}
