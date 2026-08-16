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
import { LogRadar } from "@/interface/web/components/log-radar";
import { TrustPrivacy } from "@/interface/web/components/trust-privacy";
import { UseCases } from "@/interface/web/components/use-cases";
import { getContent } from "@/interface/web/content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const { brand, hero } = getContent(locale);
  return { title: `${brand} · ${hero.h1}`, description: hero.subtitle };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const content = getContent(locale);

  return (
    <>
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
