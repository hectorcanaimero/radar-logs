/**
 * LAYER: Interface
 * Contains: Trust / privacy section
 * Rules: Presentational. No logic.
 */

import { getLocale } from "next-intl/server";
import { getContent } from "../content";

export async function TrustPrivacy() {
  const locale = await getLocale();
  const { trust } = getContent(locale);

  return (
    <section
      id="privacidad"
      className="mx-auto max-w-3xl scroll-mt-24 px-6 py-24 text-center md:py-32"
    >
      <h2 className="text-xs uppercase tracking-[0.28em] text-zinc-400">
        {trust.title}
      </h2>
      <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-zinc-500">
        {trust.body}
      </p>
    </section>
  );
}
