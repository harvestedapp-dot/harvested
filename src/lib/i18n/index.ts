import { en, type Dictionary } from "@/lib/i18n/dictionaries/en";
import { hy } from "@/lib/i18n/dictionaries/hy";
import type { Locale } from "@/lib/i18n/config";

const dictionaries: Record<Locale, Dictionary> = { en, hy };

/**
 * Dictionaries are plain modules rather than dynamic imports: they are small,
 * used by every route, and keeping them synchronous lets Server Components
 * read copy without awaiting.
 */
export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export type { Dictionary };
export * from "@/lib/i18n/config";
