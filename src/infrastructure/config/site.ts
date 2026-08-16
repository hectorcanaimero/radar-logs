/**
 * LAYER: Infrastructure
 * Contains: Site config desde env
 * Rules: Lee variables de entorno. Sin lógica.
 */

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://radarlogs.guria.lat";

export const gtmId = process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-TFFMQLTK";

export const gscVerification = process.env.NEXT_PUBLIC_GSC_VERIFICATION;
