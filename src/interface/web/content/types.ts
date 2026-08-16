/**
 * LAYER: Interface
 * Contains: Tipos del content i18n
 * Rules: Solo tipos. Sin datos.
 */

import type { Locale } from "@/i18n/routing";

export interface FaqItem {
  readonly q: string;
  readonly a: string;
}

export interface Step {
  readonly title: string;
  readonly body: string;
}

export interface FeatureItem {
  readonly label: string;
  readonly body: string;
}

export interface LandingContent {
  readonly slug: string;
  readonly label: string;
  readonly description: string;
  readonly h1: string;
  readonly intro: readonly string[];
  readonly faq: readonly FaqItem[];
}

export interface ToolStrings {
  readonly placeholder: string;
  readonly analyze: string;
  readonly loadSample: string;
  readonly loadingModel: string;
  readonly analyzing: string;
  readonly resultTitle: string;
  readonly linesMeta: string;
  readonly footerNote: string;
}

export interface Content {
  readonly brand: string;
  readonly nav: {
    readonly how: string;
    readonly cases: string;
    readonly faq: string;
    readonly try: string;
  };
  readonly hero: { readonly h1: string; readonly subtitle: string };
  readonly howItWorks: { readonly title: string; readonly steps: readonly Step[] };
  readonly useCases: { readonly title: string };
  readonly trust: { readonly title: string; readonly body: string };
  readonly faq: { readonly title: string; readonly items: readonly FaqItem[] };
  readonly features: {
    readonly title: string;
    readonly items: readonly FeatureItem[];
  };
  readonly relatedTitle: string;
  readonly footer: {
    readonly tagline: string;
    readonly casesTitle: string;
    readonly resourcesTitle: string;
    readonly how: string;
    readonly faq: string;
    readonly privacy: string;
  };
  readonly tool: ToolStrings;
  readonly landings: readonly LandingContent[];
}

export const landingSlugs = [
  "errores",
  "seguridad",
  "rendimiento",
  "despliegues",
] as const;

export type ContentMap = Record<Locale, Content>;
