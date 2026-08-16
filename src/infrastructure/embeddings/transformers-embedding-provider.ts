/**
 * LAYER: Infrastructure
 * Contains: TransformersEmbeddingProvider
 * Rules: Implements EmbeddingPort. Can use any framework/library.
 */

import type { FeatureExtractionPipeline } from "@huggingface/transformers";
import { EmbeddingPort } from "@/application/ports/embedding-port";

export const EMBEDDING_MODEL = "Xenova/all-MiniLM-L6-v2";

export class TransformersEmbeddingProvider implements EmbeddingPort {
  private constructor(private readonly extractor: FeatureExtractionPipeline) {}

  static async create(): Promise<TransformersEmbeddingProvider> {
    const { pipeline } = await import("@huggingface/transformers");
    const extractor = await pipeline(
      "feature-extraction",
      EMBEDDING_MODEL,
      {
        dtype: "q8",
      },
    );
    return new TransformersEmbeddingProvider(extractor);
  }

  async embed(texts: string[]): Promise<number[][]> {
    const output = await this.extractor(texts, {
      pooling: "mean",
      normalize: true,
    });
    return output.tolist() as number[][];
  }
}
