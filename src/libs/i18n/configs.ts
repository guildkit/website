import type { Locale } from "./utils.ts";

export const locales = [ "en", "ja" ] as const satisfies string[];
export const localeNames = {
  en: "English",
  ja: "日本語",
} as const satisfies Record<Locale, string>;
export const defaultLocale = "en" as const satisfies Locale;
