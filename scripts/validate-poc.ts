/**
 * LAYER: Infrastructure (dev tooling)
 * Contains: End-to-end validation script for the PoC
 * Rules: Runs the real model + use case in Node. Not part of the app.
 */

import { AnalyzeLogsUseCase } from "../src/application/use-cases/analyze-logs";
import { TransformersEmbeddingProvider } from "../src/infrastructure/embeddings/transformers-embedding-provider";
import { SAMPLE_LOGS } from "../src/interface/web/sample-logs";

async function main() {
  console.log("Cargando modelo (Xenova/all-MiniLM-L6-v2)…\n");
  const provider = await TransformersEmbeddingProvider.create();
  const useCase = new AnalyzeLogsUseCase(provider);

  const startedAt = Date.now();
  const result = await useCase.execute({ rawLogs: SAMPLE_LOGS });
  const elapsed = Date.now() - startedAt;

  console.log(
    `Total: ${result.totalLines} líneas · ${result.uniqueLines} únicas · ${elapsed}ms\n`,
  );
  for (const line of result.lines) {
    const bar = "#".repeat(Math.round(line.score * 40));
    console.log(
      `${line.score.toFixed(4)}  ×${String(line.occurrences).padStart(3)}  ${line.text}`,
    );
    console.log(`         ${bar}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
