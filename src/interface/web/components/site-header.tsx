/**
 * LAYER: Interface
 * Contains: Site header (shell)
 * Rules: Presentational. No logic.
 */

import { getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getContent } from "../content";
import { LocaleSwitcher } from "./locale-switcher";

const GITHUB_URL = "https://github.com/hectorcanaimero/radar-logs";

export async function SiteHeader() {
  const locale = await getLocale();
  const { brand, nav } = getContent(locale);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-xs font-medium uppercase tracking-[0.28em] text-zinc-900"
        >
          {brand}
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#how"
            className="text-xs uppercase tracking-[0.18em] text-zinc-500 transition-colors hover:text-zinc-900"
          >
            {nav.how}
          </a>
          <a
            href="#casos"
            className="text-xs uppercase tracking-[0.18em] text-zinc-500 transition-colors hover:text-zinc-900"
          >
            {nav.cases}
          </a>
          <a
            href="#faq"
            className="text-xs uppercase tracking-[0.18em] text-zinc-500 transition-colors hover:text-zinc-900"
          >
            {nav.faq}
          </a>
        </nav>
        <div className="flex items-center gap-5">
          <LocaleSwitcher />
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-zinc-500 transition-colors hover:text-zinc-900"
          >
            <svg
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
            </svg>
          </a>
          <a
            href="#tool"
            className="rounded border border-zinc-300 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-zinc-900 transition-colors hover:border-zinc-900"
          >
            {nav.try}
          </a>
        </div>
      </div>
    </header>
  );
}
