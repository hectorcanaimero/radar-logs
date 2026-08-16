/**
 * LAYER: Interface
 * Contains: Features section (compartida entre Home y SEO landings)
 * Rules: Presentational. No logic.
 */

import { getLocale } from "next-intl/server";
import { getContent } from "../content";

export async function Features() {
  const locale = await getLocale();
  const { features } = getContent(locale);

  return (
    <section className="mx-auto max-w-3xl px-6 py-24 md:py-32">
      <h2 className="text-center text-xs uppercase tracking-[0.28em] text-zinc-400">
        {features.title}
      </h2>
      <dl className="mt-12 divide-y divide-zinc-100 border-y border-zinc-100">
        {features.items.map((item) => (
          <div
            key={item.label}
            className="grid grid-cols-1 gap-2 py-8 md:grid-cols-[240px_1fr] md:gap-8"
          >
            <dt className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-900">
              {item.label}
            </dt>
            <dd className="text-sm leading-relaxed text-zinc-500">
              {item.body}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
