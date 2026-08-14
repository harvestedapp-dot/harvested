export type CourseStatus = "available" | "coming-soon";

export interface CourseModule {
  title: string;
  /** Short summary shown at the top of the module in the curriculum. */
  description?: string;
  lessons: string[];
}

export interface Course {
  /** URL slug, used at /course/[slug] */
  slug: string;
  title: string;
  shortDescription: string;
  status: CourseStatus;
  /** One-time price in AMD. Only set for available courses. */
  price?: number;
  level?: string;
  duration?: string;
  format?: string;
  heroDescription?: string;
  /** Overview paragraphs shown under the title on the detail page. */
  overview?: string[];
  /** "What's included" bullets on the course detail page. */
  included?: string[];
  outcomes?: string[];
  curriculum?: CourseModule[];
  /** Flat list for the "Bonus learning resources" section. No extensions. */
  bonusResources?: string[];
  requirements?: string[];
  /** "Who this course is for" bullets on the course detail page. */
  audience?: string[];
}

export interface ArticleImage {
  src: string;
  alt: string;
  /** Optional caption rendered under the image. */
  caption?: string;
}

export interface ArticleSection {
  heading: string;
  paragraphs: string[];
  /** Optional bullet list rendered after the paragraphs. */
  list?: string[];
  /** Optional illustration rendered at the end of the section. */
  image?: ArticleImage;
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
  /** Lead image shown under the title and as the card thumbnail on /learn. */
  heroImage?: ArticleImage;
  intro: string[];
  sections: ArticleSection[];
}
