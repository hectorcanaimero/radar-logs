/**
 * LAYER: Interface
 * Contains: Helpers de SEO (URLs localizadas, alternates)
 * Rules: Puros. Sin lógica de negocio.
 */

import { routing } from "@/i18n/routing";
import { siteUrl } from "@/infrastructure/config/site";

export function localizedUrl(locale: string, pathname: string): string {
  const clean = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
  return `${siteUrl}${prefix}${clean}`;
}

export function buildAlternates(pathname: string) {
  const languages = Object.fromEntries(
    routing.locales.map((locale) => [locale, localizedUrl(locale, pathname)]),
  );
  return {
    canonical: localizedUrl(routing.defaultLocale, pathname),
    languages: {
      ...languages,
      "x-default": localizedUrl(routing.defaultLocale, pathname),
    },
  };
}
