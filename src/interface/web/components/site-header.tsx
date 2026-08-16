/**
 * LAYER: Interface
 * Contains: Site header (shell)
 * Rules: Presentational. No logic.
 */

import { getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getContent } from "../content";
import { LocaleSwitcher } from "./locale-switcher";

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
