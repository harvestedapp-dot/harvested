import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
import { getAvailableCourses } from "@/lib/courses";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/learn",
    "/privacy-policy",
    "/terms-of-service",
    "/refund-policy",
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
  }));

  const courseRoutes = getAvailableCourses().map((course) => ({
    url: `${siteConfig.url}/course/${course.slug}`,
    lastModified: new Date(),
  }));

  const articleRoutes = articles.map((article) => ({
    url: `${siteConfig.url}/learn/${article.slug}`,
    lastModified: new Date(article.publishedAt),
  }));

  return [...staticRoutes, ...courseRoutes, ...articleRoutes];
}
