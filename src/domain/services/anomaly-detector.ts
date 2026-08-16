/**
 * LAYER: Domain
 * Contains: AnomalyDetector domain service (centroid + cosine distance)
 * Rules: Pure math only. No external dependencies. No framework imports.
 */

import { LogLine } from "../entities/log-line";

export interface AnomalyScore {
  readonly line: LogLine;
  readonly distance: number;
}

export class AnomalyDetector {
  /**
   * Cosine similarity between two vectors of equal dimension.
   * Range [-1, 1]. 1 = same direction, 0 = orthogonal, -1 = opposite.
   */
  static cosineSimilarity(a: number[], b: number[]): number {
    if (a.length !== b.length) {
      throw new Error("Vectors must have the same dimension");
    }
    let dot = 0;
    let normA = 0;
    let normB = 0;
    for (let i = 0; i < a.length; i++) {
      dot += a[i] * b[i];
      normA += a[i] * a[i];
      normB += b[i] * b[i];
    }
    const denominator = Math.sqrt(normA) * Math.sqrt(normB);
    if (denominator === 0) {
      return 0;
    }
    return dot / denominator;
  }

  /**
   * Centroid of a set of embeddings weighted by frequency.
   * The dominant (most frequent) pattern pulls the centroid toward itself.
   */
  static weightedCentroid(embeddings: number[][], weights: number[]): number[] {
    if (embeddings.length === 0) {
      return [];
    }
    if (embeddings.length !== weights.length) {
      throw new Error("embeddings and weights must have the same length");
    }
    const totalWeight = weights.reduce((sum, w) => sum + w, 0);
    if (totalWeight <= 0) {
      throw new Error("Total weight must be positive");
    }
    const dimension = embeddings[0].length;
    const centroid = new Array<number>(dimension).fill(0);
    for (let i = 0; i < embeddings.length; i++) {
      const w = weights[i] / totalWeight;
      for (let d = 0; d < dimension; d++) {
        centroid[d] += embeddings[i][d] * w;
      }
    }
    return centroid;
  }

  /**
   * Scores each unique line by its cosine distance to the weighted centroid.
   * Lines far from the dominant pattern rank first (most anomalous).
   */
  static score(lines: LogLine[], embeddings: number[][]): AnomalyScore[] {
    if (lines.length !== embeddings.length) {
      throw new Error("lines and embeddings must have the same length");
    }
    if (lines.length === 0) {
      return [];
    }
    const weights = lines.map((line) => line.occurrences);
    const centroid = AnomalyDetector.weightedCentroid(embeddings, weights);
    const scored = lines.map((line, i) => ({
      line,
      distance: 1 - AnomalyDetector.cosineSimilarity(embeddings[i], centroid),
    }));
    return scored.sort((a, b) => b.distance - a.distance);
  }
}
