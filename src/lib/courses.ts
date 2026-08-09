import type { Course } from "@/lib/types";
import type { Locale } from "@/lib/i18n/config";
import { coursesEn } from "@/lib/content/courses-en";
import { coursesHy } from "@/lib/content/courses-hy";

/**
 * Single source of truth for every course, per locale. Both catalogues share
 * slugs, prices and structure, so `/en/course/x` and `/hy/course/x` are the
 * same course in two languages.
 */
const catalogue: Record<Locale, Course[]> = {
  en: coursesEn,
  hy: coursesHy,
};

export function getCourses(locale: Locale): Course[] {
  return catalogue[locale];
}

export function getCourseBySlug(
  locale: Locale,
  slug: string
): Course | undefined {
  return catalogue[locale].find((course) => course.slug === slug);
}

export function getAvailableCourses(locale: Locale): Course[] {
  return catalogue[locale].filter((course) => course.status === "available");
}

/** Slugs are locale-independent; used by generateStaticParams and sitemap. */
export function getAvailableCourseSlugs(): string[] {
  return coursesEn
    .filter((course) => course.status === "available")
    .map((course) => course.slug);
}
