/**
 * LAYER: Application
 * Contains: AnalyzeLogsResult DTO
 * Rules: Plain data. No logic.
 */

export interface AnalyzedLogLine {
  readonly text: string;
  readonly occurrences: number;
  readonly score: number;
}

export interface AnalyzeLogsResult {
  readonly lines: AnalyzedLogLine[];
  readonly totalLines: number;
  readonly uniqueLines: number;
}
