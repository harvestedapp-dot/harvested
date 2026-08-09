/**
 * Locale configuration shared by routing, metadata and the language switcher.
 *
 * `hy` is Western Armenian in classical orthography (արեւմտահայերէն,
 * դասական ուղղագրութիւն) — not the Eastern standard, so translations use
 * -ութիւն endings, կը/կ՚ for the present tense and պիտի for the future.
 */
export const locales = ["en", "hy"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Language names shown in the switcher, each written in its own language. */
export const localeNames: Record<Locale, string> = {
  en: "English",
  hy: "Հայերէն",
};

/** Short labels for the compact switcher control. */
export const localeShortNames: Record<Locale, string> = {
  en: "EN",
  hy: "ՀԱՅ",
};

/** BCP-47 tags for <html lang>, hreflang and Open Graph. */
export const localeTags: Record<Locale, string> = {
  en: "en-US",
  hy: "hy",
};

/**
 * Prefixes an app-relative path with its locale segment. Both locales are
 * prefixed (`/en/...`, `/hy/...`) so the two trees stay symmetrical; the
 * prefix-less URLs of the previous version redirect into `/en` via
 * next.config.ts.
 */
export function localePath(locale: Locale, path = "/"): string {
  if (path.startsWith("#")) return path;
  const normalized = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${normalized}`;
}
