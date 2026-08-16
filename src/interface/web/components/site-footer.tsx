/**
 * LAYER: Interface
 * Contains: Site footer (shell)
 * Rules: Presentational. No logic.
 */

import { getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getContent } from "../content";

export async function SiteFooter() {
  const locale = await getLocale();
  const { brand, footer, landings } = getContent(locale);

  return (
    <footer className="border-t border-zinc-200">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 px-6 py-16 md:grid-cols-3">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-zinc-900">
            {brand}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-zinc-500">
            {footer.tagline}
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-zinc-400">
            {footer.casesTitle}
          </p>
          <ul className="mt-4 space-y-2">
            {landings.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/${item.slug}`}
                  className="text-sm text-zinc-600 transition-colors hover:text-zinc-900"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-zinc-400">
            {footer.resourcesTitle}
          </p>
          <ul className="mt-4 space-y-2">
            <li>
              <a
                href="#how"
                className="text-sm text-zinc-600 transition-colors hover:text-zinc-900"
              >
                {footer.how}
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="text-sm text-zinc-600 transition-colors hover:text-zinc-900"
              >
                {footer.faq}
              </a>
            </li>
            <li>
              <a
                href="#privacidad"
                className="text-sm text-zinc-600 transition-colors hover:text-zinc-900"
              >
                {footer.privacy}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
