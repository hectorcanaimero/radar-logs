/**
 * LAYER: Interface
 * Contains: SEO landing route (Wireframe B)
 * Rules: Resuelve el slug contra el registry. Sin lógica.
 */

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { SeoLanding } from "@/interface/web/components/seo-landing";
import { getContent, landingSlugs } from "@/interface/web/content";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    landingSlugs.map((slug) => ({ locale, slug })),
  );
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const { brand, landings } = getContent(locale);
  const landing = landings.find((item) => item.slug === slug);
  if (!landing) return {};
  return {
    title: `${landing.h1} · ${brand}`,
    description: landing.intro[0],
  };
}

export default async function LandingPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const { landings } = getContent(locale);
  const landing = landings.find((item) => item.slug === slug);
  if (!landing) notFound();
  return <SeoLanding landing={landing} />;
}
