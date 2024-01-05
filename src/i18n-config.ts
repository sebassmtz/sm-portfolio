import { Pathnames } from "next-intl/navigation";

export const locales = ["en", "es"] as const;

export const pathnames = {
  "/": "/", // default
  "/about": {
    en: "/about",
    es: "/sobreMi",
  },
  "/contact": {
    en: "/contact",
    es: "/contacto",
  },
  "/projects": {
    en: "/projects",
    es: "/proyectos",
  },
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;
