import { defaultLocale, locales } from "./configs.ts";
import { translations } from "./translations.ts";

export type Locale = typeof locales[number];
export type Translations = Record<string, Record<Locale, string>>;

const isSupportedLocale = (maybeLocaleString: string): maybeLocaleString is Locale =>
  (locales as unknown as string[]).includes(maybeLocaleString);

export const useTranslations = (locale: string | undefined) => {
  const _locale = (locale && isSupportedLocale(locale)) ? locale : defaultLocale;
  return (key: keyof typeof translations): string => translations[key][_locale] || translations[key][defaultLocale];
};
