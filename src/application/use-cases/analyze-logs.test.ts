/**
 * LAYER: Application
 * Contains: AnalyzeLogsUseCase tests (with a fake embedding provider)
 * Rules: Validates orchestration without the real ML model.
 */

import { describe, expect, it } from "vitest";
import { EmbeddingPort } from "../ports/embedding-port";
import { AnalyzeLogsUseCase } from "./analyze-logs";

class FakeEmbeddingProvider implements EmbeddingPort {
  async embed(texts: string[]): Promise<number[][]> {
    return texts.map((text) => (text.includes("err") ? [0, 1, 0] : [1, 0, 0]));
  }
}

describe("AnalyzeLogsUseCase", () => {
  it("counts occurrences and ranks anomalies first", async () => {
    const useCase = new AnalyzeLogsUseCase(new FakeEmbeddingProvider());
    const result = await useCase.execute({
      rawLogs: "ok\nok\nok\nerr",
    });

    expect(result.totalLines).toBe(4);
    expect(result.uniqueLines).toBe(2);
    expect(result.lines[0].text).toBe("err");
    expect(result.lines[0].occurrences).toBe(1);
    expect(result.lines[1].text).toBe("ok");
    expect(result.lines[1].occurrences).toBe(3);
    expect(result.lines[0].score).toBeGreaterThan(result.lines[1].score);
  });

  it("returns empty result for blank input", async () => {
    const useCase = new AnalyzeLogsUseCase(new FakeEmbeddingProvider());
    const result = await useCase.execute({ rawLogs: "   \n\n  " });

    expect(result.totalLines).toBe(0);
    expect(result.uniqueLines).toBe(0);
    expect(result.lines).toEqual([]);
  });
});
