/**
 * LAYER: Interface
 * Contains: Use cases section (grid → SEO landings)
 * Rules: Presentational. No logic.
 */

import { getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getContent } from "../content";

export async function UseCases() {
  const locale = await getLocale();
  const { useCases, landings } = getContent(locale);

  return (
    <section
      id="casos"
      className="mx-auto max-w-4xl scroll-mt-24 px-6 py-24 md:py-32"
    >
      <h2 className="text-center text-xs uppercase tracking-[0.28em] text-zinc-400">
        {useCases.title}
      </h2>
      <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden border border-zinc-100 bg-zinc-100 md:grid-cols-2">
        {landings.map((item) => (
          <Link
            key={item.slug}
            href={`/${item.slug}`}
            className="group bg-white p-8 transition-colors hover:bg-zinc-50"
          >
            <h3 className="text-sm font-medium text-zinc-900">
              {item.label}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-500">
              {item.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
