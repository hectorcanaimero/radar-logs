/**
 * LAYER: Interface
 * Contains: Middleware i18n (negociación de locale)
 * Rules: Detecta cookie/accept-language y redirige. Sin lógica de negocio.
 */

import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: "/((?!api|_next|_vercel|.*\\..*).*)",
};
