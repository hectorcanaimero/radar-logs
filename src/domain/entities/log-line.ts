/**
 * LAYER: Domain
 * Contains: LogLine entity
 * Rules: No external dependencies. Pure business logic only.
 */

export class LogLine {
  constructor(
    public readonly text: string,
    public readonly occurrences: number,
  ) {
    if (text.trim().length === 0) {
      throw new Error("LogLine.text cannot be empty");
    }
    if (!Number.isInteger(occurrences) || occurrences < 1) {
      throw new Error("LogLine.occurrences must be a positive integer");
    }
  }
}
