/**
 * LAYER: Interface
 * Contains: Resolución de content por locale
 * Rules: Devuelve el content correcto, fallback a es.
 */

import type { Locale } from "@/i18n/routing";
import { en } from "./en";
import { es } from "./es";
import { pt } from "./pt";
import type { Content, ContentMap } from "./types";

const content: ContentMap = { es, en, pt };

export function getContent(locale: string): Content {
  return content[locale as Locale] ?? es;
}

export * from "./types";
