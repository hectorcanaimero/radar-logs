# Log Radar

> A browser-only tool that highlights anomalies in container logs using embeddings — no labels, no supervision, no server.

Paste 500 lines from a container and 95% of it is the same `GET /health 200` repeated over and over. The one line that matters — the real error — is buried somewhere in the middle, and your eyes get tired of scanning.

**Log Radar** turns each unique line into an embedding, computes the frequency-weighted centroid (the "normal log"), and scores every line by cosine distance to that centroid. Lines that drift from the dominant pattern are, almost always, the ones worth reading. No need to tell the model what an error is — it emerges on its own.

## How it works

Unsupervised, no training, no labels:

1. **Parse** — split the paste into lines, dedupe them and count occurrences.
2. **Embed** — each unique line becomes a vector via [`Xenova/all-MiniLM-L6-v2`](https://huggingface.co/Xenova/all-MiniLM-L6-v2) (22M params, quantized to q8), running locally with [Transformers.js](https://huggingface.co/docs/transformers.js).
3. **Weigh** — compute the centroid weighted by frequency: the dominant pattern of the log.
4. **Score** — rank each line by cosine distance to the centroid. Highest = most anomalous.

## Tech stack

- **Next.js 16** (App Router) · **React 19** · **TypeScript**
- **Tailwind CSS v4**
- **Transformers.js** (`@huggingface/transformers`) — in-browser inference
- **next-intl** — i18n (es / en / pt) with browser detection
- **Vitest** — unit tests

## Architecture

The codebase follows [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) with four layers; dependencies always point inward.

```
src/
├── domain/           Entities + pure business logic (centroid, cosine distance)
├── application/      Use cases + ports (orchestration, no framework code)
├── infrastructure/   Embedding provider (Transformers.js adapter)
├── interface/        React UI, i18n, copy (presentation only)
├── i18n/             next-intl routing + locale resolution
└── app/              Next.js App Router routes
```

| Layer | Responsibility | Depends on |
|-------|---------------|------------|
| `domain` | `LogLine`, `AnomalyDetector` — pure math, fully unit-tested | nothing |
| `application` | `AnalyzeLogsUseCase`, `EmbeddingPort` | domain |
| `infrastructure` | `TransformersEmbeddingProvider` (implements `EmbeddingPort`) | application |
| `interface` | components, composition root (manual DI), content | application, infrastructure |

The anomaly-detection logic lives in `domain` with zero external dependencies, so it is testable without the ML model. The use case is covered by a unit test that injects a fake embedding provider.

## Getting started

```bash
pnpm install
pnpm dev
```

Open <http://localhost:3000>. The first analysis downloads the model once (~23 MB), then everything runs locally in your browser. Nothing is uploaded to any server.

## Scripts

```bash
pnpm dev        # start the dev server
pnpm build      # production build
pnpm test       # unit tests (Vitest)
pnpm lint       # ESLint
pnpm typecheck  # tsc --noEmit
```

## Validate the core without the browser

Run the real model + use case on a sample log in Node:

```bash
npx tsx scripts/validate-poc.ts
```

It loads `Xenova/all-MiniLM-L6-v2`, analyzes a sample container log, and prints the ranking (anomalies on top, the dominant `GET /health 200` pattern at the bottom).

## i18n

Spanish (default), English, and Portuguese, detected from the browser's `Accept-Language` header via the next-intl proxy. Slugs are stable across locales (`/en/errores`, `/pt/errores`).

## License

ISC
