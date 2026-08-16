/**
 * LAYER: Interface
 * Contains: i18n routing config
 * Rules: Declara locales y estrategia de prefijo. Sin lógica.
 */

import { defineRouting } from "next-intl/routing";

export const locales = ["es", "en", "pt"] as const;
export type Locale = (typeof locales)[number];

export const routing = defineRouting({
  locales,
  defaultLocale: "es",
  localePrefix: "as-needed",
});
