/**
 * LAYER: Interface
 * Contains: Sample log data for the demo
 * Rules: Presentation concern only.
 */

export const SAMPLE_LOGS = [
  ...Array(120).fill("GET /health 200 OK"),
  ...Array(40).fill("GET /api/v1/items 200"),
  ...Array(25).fill("POST /api/v1/orders 201"),
  "WARN: memory usage at 91%",
  "ERROR: connect ECONNREFUSED 127.0.0.1:5432",
  "FATAL: database connection lost, retrying in 5s",
  "TypeError: Cannot read properties of undefined (reading 'id')",
].join("\n");
