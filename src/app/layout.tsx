/**
 * LAYER: Interface
 * Contains: Root layout (passthrough)
 * Rules: Delega html/body al layout por locale.
 */

import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
