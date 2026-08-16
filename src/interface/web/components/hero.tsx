/**
 * LAYER: Interface
 * Contains: Hero section
 * Rules: Presentational. No logic.
 */

import { getLocale } from "next-intl/server";
import { getContent } from "../content";

export async function Hero() {
  const locale = await getLocale();
  const { brand, hero } = getContent(locale);

  return (
    <section className="mx-auto max-w-4xl px-6 pb-8 pt-24 text-center">
      <p className="mb-5 text-xs uppercase tracking-[0.28em] text-zinc-400">
        {brand}
      </p>
      <h1 className="text-3xl font-semibold uppercase tracking-tight text-zinc-900 md:text-4xl">
        {hero.h1}
      </h1>
      <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-zinc-500">
        {hero.subtitle}
      </p>
    </section>
  );
}
