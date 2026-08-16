/**
 * LAYER: Interface
 * Contains: sitemap.xml
 * Rules: Lista rutas por locale. Sin lógica.
 */

import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { landingSlugs } from "@/interface/web/content";
import { siteUrl } from "@/infrastructure/config/site";

function urlFor(locale: string, slug = ""): string {
  const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
  const suffix = slug ? `/${slug}` : "";
  return `${siteUrl}${prefix}${suffix}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    entries.push({
      url: urlFor(locale),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    });

    for (const slug of landingSlugs) {
      entries.push({
        url: urlFor(locale, slug),
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return entries;
}
