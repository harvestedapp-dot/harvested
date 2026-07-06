export type CourseStatus = "available" | "coming-soon";

export interface CourseModule {
  title: string;
  lessons: string[];
}

export interface Course {
  /** URL slug, used at /course/[slug] */
  slug: string;
  title: string;
  shortDescription: string;
  status: CourseStatus;
  /** One-time price in USD. Only set for available courses. */
  price?: number;
  level?: string;
  duration?: string;
  format?: string;
  heroDescription?: string;
  outcomes?: string[];
  curriculum?: CourseModule[];
  requirements?: string[];
  /** "Who this course is for" bullets on the course detail page. */
  audience?: string[];
}

export interface ArticleSection {
  heading: string;
  paragraphs: string[];
  /** Optional bullet list rendered after the paragraphs. */
  list?: string[];
}

export interface Article {
  /** URL slug, used at /learn/[slug] */
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  /** ISO date, e.g. "2026-07-03" */
  publishedAt: string;
  readingTime: string;
  intro: string[];
  sections: ArticleSection[];
}
