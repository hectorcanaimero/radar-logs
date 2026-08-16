/**
 * LAYER: Interface
 * Contains: FAQ accordion (reusable: home + SEO landings)
 * Rules: Presentational. No logic.
 */

import type { FaqItem } from "../content";

export function Faq({ title, items }: { title: string; items: readonly FaqItem[] }) {
  return (
    <section id="faq" className="mx-auto max-w-3xl scroll-mt-24 px-6 py-24 md:py-32">
      <h2 className="text-center text-xs uppercase tracking-[0.28em] text-zinc-400">
        {title}
      </h2>
      <div className="mt-12 divide-y divide-zinc-100 border-y border-zinc-100">
        {items.map((item) => (
          <details key={item.q} className="group py-6">
            <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium text-zinc-900">
              {item.q}
              <span className="ml-4 shrink-0 text-zinc-400 transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-4 text-sm leading-relaxed text-zinc-500">
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
