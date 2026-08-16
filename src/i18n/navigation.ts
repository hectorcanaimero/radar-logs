/**
 * LAYER: Interface
 * Contains: Navigation API con tipado de locale
 * Rules: Re-exporta helpers de next-intl. Sin lógica.
 */

import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
