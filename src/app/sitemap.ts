import type { MetadataRoute } from "next";
import { getArticlePublishedAt, getArticleSlugs } from "@/lib/articles";
import { getAvailableCourseSlugs } from "@/lib/courses";
import { siteConfig } from "@/lib/site-config";
import { locales } from "@/lib/i18n/config";

/**
 * Every path is listed once per locale, and each entry carries `alternates`
 * so search engines can pair the English and Armenian versions.
 */
function entry(path: string, lastModified: Date): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: `${siteConfig.url}/${locale}${path}`,
    lastModified,
    alternates: {
      languages: Object.fromEntries(
        locales.map((alt) => [alt, `${siteConfig.url}/${alt}${path}`])
      ),
    },
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    "",
    "/learn",
    "/privacy-policy",
    "/terms-of-service",
    "/refund-policy",
  ].flatMap((path) => entry(path, now));

  const courseRoutes = getAvailableCourseSlugs().flatMap((slug) =>
    entry(`/course/${slug}`, now)
  );

  const articleRoutes = getArticleSlugs().flatMap((slug) =>
    entry(
      `/learn/${slug}`,
      new Date(getArticlePublishedAt(slug) ?? now.toISOString())
    )
  );

  return [...staticRoutes, ...courseRoutes, ...articleRoutes];
}
