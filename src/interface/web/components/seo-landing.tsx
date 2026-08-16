/**
 * LAYER: Interface
 * Contains: SEO landing orchestrator (Wireframe B)
 * Rules: Compone H1 + tool + intro + FAQ + related + features. Sin forks visuales.
 */

import { getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { LandingContent } from "../content";
import { getContent } from "../content";
import { Faq } from "./faq";
import { Features } from "./features";
import { LogRadar } from "./log-radar";

export async function SeoLanding({ landing }: { landing: LandingContent }) {
  const locale = await getLocale();
  const content = getContent(locale);
  const related = content.landings.filter((item) => item.slug !== landing.slug);

  return (
    <>
      <section className="mx-auto max-w-3xl px-6 pb-8 pt-24 text-center">
        <h1 className="text-3xl font-semibold uppercase tracking-tight text-zinc-900 md:text-4xl">
          {landing.h1}
        </h1>
      </section>

      <section className="mx-auto max-w-3xl px-6">
        <LogRadar tool={content.tool} />
      </section>

      <section className="mx-auto max-w-2xl px-6 py-16 md:py-24">
        {landing.intro.map((paragraph) => (
          <p
            key={paragraph.slice(0, 24)}
            className="mb-5 text-sm leading-relaxed text-zinc-600 last:mb-0"
          >
            {paragraph}
          </p>
        ))}
      </section>

      <Faq title={content.faq.title} items={landing.faq} />

      <section className="mx-auto max-w-3xl px-6 py-24 md:py-32">
        <h2 className="text-center text-xs uppercase tracking-[0.28em] text-zinc-400">
          {content.relatedTitle}
        </h2>
        <ul className="mt-12 divide-y divide-zinc-100 border-y border-zinc-100">
          {related.map((item) => (
            <li key={item.slug}>
              <Link
                href={`/${item.slug}`}
                className="flex items-center justify-between py-5 text-sm text-zinc-700 transition-colors hover:text-zinc-900"
              >
                {item.label}
                <span className="text-zinc-400">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <Features />
    </>
  );
}
