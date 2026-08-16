/**
 * LAYER: Application
 * Contains: EmbeddingPort
 * Rules: Interface only. Implemented by Infrastructure. No implementation here.
 */

export interface EmbeddingPort {
  embed(texts: string[]): Promise<number[][]>;
}
