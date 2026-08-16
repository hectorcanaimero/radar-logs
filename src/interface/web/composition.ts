/**
 * LAYER: Interface
 * Contains: Composition root (manual dependency injection)
 * Rules: Wires Infrastructure into Application. No domain/infrastructure logic here.
 */

import { AnalyzeLogsUseCase } from "@/application/use-cases/analyze-logs";
import { TransformersEmbeddingProvider } from "@/infrastructure/embeddings/transformers-embedding-provider";

let useCasePromise: Promise<AnalyzeLogsUseCase> | null = null;

export function getAnalyzeLogsUseCase(): Promise<AnalyzeLogsUseCase> {
  if (!useCasePromise) {
    useCasePromise = TransformersEmbeddingProvider.create().then(
      (provider) => new AnalyzeLogsUseCase(provider),
    );
  }
  return useCasePromise;
}
