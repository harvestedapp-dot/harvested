import type { Article } from "@/lib/types";
import type { Locale } from "@/lib/i18n/config";
import { articlesEn } from "@/lib/content/articles-en";
import { articlesHy } from "@/lib/content/articles-hy";

/**
 * Backing data for the /learn guide library, per locale. The index page,
 * detail pages, sitemap and Article JSON-LD all read from here, so publishing
 * a new guide means adding one entry per locale.
 */
const library: Record<Locale, Article[]> = {
  en: articlesEn,
  hy: articlesHy,
};

export function getArticles(locale: Locale): Article[] {
  return library[locale];
}

export function getArticleBySlug(
  locale: Locale,
  slug: string
): Article | undefined {
  return library[locale].find((article) => article.slug === slug);
}

/** Slugs are locale-independent; used by generateStaticParams and sitemap. */
export function getArticleSlugs(): string[] {
  return articlesEn.map((article) => article.slug);
}

/** Publication dates are shared across locales. */
export function getArticlePublishedAt(slug: string): string | undefined {
  return articlesEn.find((article) => article.slug === slug)?.publishedAt;
}
