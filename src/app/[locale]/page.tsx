/**
 * LAYER: Interface
 * Contains: Home orchestrator (Wireframe A)
 * Rules: Compone las secciones en el orden del blueprint. Sin lógica.
 */

import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Faq } from "@/interface/web/components/faq";
import { Features } from "@/interface/web/components/features";
import { Hero } from "@/interface/web/components/hero";
import { HowItWorks } from "@/interface/web/components/how-it-works";
import { JsonLd } from "@/interface/web/components/json-ld";
import { LogRadar } from "@/interface/web/components/log-radar";
import { TrustPrivacy } from "@/interface/web/components/trust-privacy";
import { UseCases } from "@/interface/web/components/use-cases";
import { getContent } from "@/interface/web/content";
import { buildAlternates, localizedUrl } from "@/interface/web/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const { brand, hero } = getContent(locale);
  const title = `${brand} · ${hero.h1}`;

  return {
    title,
    description: hero.subtitle,
    alternates: buildAlternates(""),
    openGraph: {
      title,
      description: hero.subtitle,
      url: localizedUrl(locale, ""),
      siteName: brand,
      type: "website",
      locale,
    },
    twitter: { card: "summary", title, description: hero.subtitle },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const content = getContent(locale);
  const homeUrl = localizedUrl(locale, "");

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: content.brand,
      url: homeUrl,
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: content.brand,
      description: content.hero.subtitle,
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Any",
      url: homeUrl,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: content.faq.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <Hero />
      <section className="mx-auto max-w-4xl px-6 pb-24">
        <LogRadar tool={content.tool} />
      </section>
      <HowItWorks />
      <UseCases />
      <TrustPrivacy />
      <Faq title={content.faq.title} items={content.faq.items} />
      <Features />
    </>
  );
}
