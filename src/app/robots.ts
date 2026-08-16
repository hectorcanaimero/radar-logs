/**
 * LAYER: Interface
 * Contains: robots.txt
 * Rules: Sin lógica.
 */

import type { MetadataRoute } from "next";
import { siteUrl } from "@/infrastructure/config/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
