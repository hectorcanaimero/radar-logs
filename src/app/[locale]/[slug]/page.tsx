/**
 * LAYER: Interface
 * Contains: SEO landing route (Wireframe B)
 * Rules: Resuelve el slug contra el registry. Sin lógica.
 */

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { JsonLd } from "@/interface/web/components/json-ld";
import { SeoLanding } from "@/interface/web/components/seo-landing";
import { getContent, landingSlugs } from "@/interface/web/content";
import { buildAlternates, localizedUrl } from "@/interface/web/seo";

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

  const title = `${landing.h1} · ${brand}`;
  const description = landing.intro[0];

  return {
    title,
    description,
    alternates: buildAlternates(slug),
    openGraph: {
      title,
      description,
      url: localizedUrl(locale, slug),
      siteName: brand,
      type: "website",
      locale,
    },
    twitter: { card: "summary", title, description },
  };
}

export default async function LandingPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const { brand, landings } = getContent(locale);
  const landing = landings.find((item) => item.slug === slug);
  if (!landing) notFound();

  const landingUrl = localizedUrl(locale, slug);
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: landing.h1,
      url: landingUrl,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: brand,
          item: localizedUrl(locale, ""),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: landing.label,
          item: landingUrl,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: landing.faq.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <SeoLanding landing={landing} />
    </>
  );
}
