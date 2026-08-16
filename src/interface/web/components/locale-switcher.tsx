/**
 * LAYER: Interface
 * Contains: Locale switcher
 * Rules: Solo navegación. Sin lógica de negocio.
 */

"use client";

import { useParams } from "next/navigation";
import { Link, usePathname } from "@/i18n/navigation";
import { locales, type Locale } from "@/i18n/routing";

const LABELS: Record<Locale, string> = { es: "ES", en: "EN", pt: "PT" };

export function LocaleSwitcher() {
  const pathname = usePathname();
  const params = useParams();
  const current = (params.locale as Locale) ?? "es";

  return (
    <div className="flex items-center gap-3">
      {locales.map((locale) => (
        <Link
          key={locale}
          href={pathname}
          locale={locale}
          className={`text-xs uppercase tracking-[0.18em] transition-colors ${
            locale === current
              ? "font-medium text-zinc-900"
              : "text-zinc-400 hover:text-zinc-900"
          }`}
        >
          {LABELS[locale]}
        </Link>
      ))}
    </div>
  );
}
