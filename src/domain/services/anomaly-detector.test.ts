/**
 * LAYER: Domain
 * Contains: AnomalyDetector unit tests
 * Rules: Pure math, no mocks.
 */

import { describe, expect, it } from "vitest";
import { LogLine } from "../entities/log-line";
import { AnomalyDetector } from "./anomaly-detector";

describe("AnomalyDetector.cosineSimilarity", () => {
  it("returns 1 for identical vectors", () => {
    expect(AnomalyDetector.cosineSimilarity([1, 0], [1, 0])).toBeCloseTo(1);
  });

  it("returns 0 for orthogonal vectors", () => {
    expect(AnomalyDetector.cosineSimilarity([1, 0], [0, 1])).toBeCloseTo(0);
  });

  it("returns -1 for opposite vectors", () => {
    expect(AnomalyDetector.cosineSimilarity([1, 0], [-1, 0])).toBeCloseTo(-1);
  });

  it("throws when dimensions differ", () => {
    expect(() => AnomalyDetector.cosineSimilarity([1, 0], [1])).toThrow();
  });
});

describe("AnomalyDetector.weightedCentroid", () => {
  it("pulls the centroid toward the most frequent vector", () => {
    const centroid = AnomalyDetector.weightedCentroid(
      [
        [1, 0],
        [0, 1],
      ],
      [3, 1],
    );
    expect(centroid[0]).toBeCloseTo(0.75);
    expect(centroid[1]).toBeCloseTo(0.25);
  });
});

describe("AnomalyDetector.score", () => {
  it("ranks the rare, distant line as most anomalous", () => {
    const lines = [new LogLine("ok", 3), new LogLine("err", 1)];
    const embeddings = [
      [1, 0],
      [0, 1],
    ];
    const scores = AnomalyDetector.score(lines, embeddings);

    expect(scores[0].line.text).toBe("err");
    expect(scores[1].line.text).toBe("ok");
    expect(scores[0].distance).toBeGreaterThan(scores[1].distance);
  });

  it("returns an empty list for no lines", () => {
    expect(AnomalyDetector.score([], [])).toEqual([]);
  });
});
