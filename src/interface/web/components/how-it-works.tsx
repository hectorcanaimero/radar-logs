/**
 * LAYER: Interface
 * Contains: How it works section
 * Rules: Presentational. No logic.
 */

import { getLocale } from "next-intl/server";
import { getContent } from "../content";

export async function HowItWorks() {
  const locale = await getLocale();
  const { howItWorks } = getContent(locale);

  return (
    <section id="how" className="mx-auto max-w-3xl scroll-mt-24 px-6 py-24 md:py-32">
      <h2 className="text-center text-xs uppercase tracking-[0.28em] text-zinc-400">
        {howItWorks.title}
      </h2>
      <ol className="mt-12 divide-y divide-zinc-100 border-y border-zinc-100">
        {howItWorks.steps.map((step, index) => (
          <li key={step.title} className="flex gap-8 py-8">
            <span className="shrink-0 text-xs tabular-nums text-zinc-400">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="text-sm font-medium text-zinc-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                {step.body}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
