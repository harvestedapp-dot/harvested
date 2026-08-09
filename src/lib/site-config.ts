/**
 * Thinkific Free Preview link. When the LMS is connected, replace "#" with
 * the real Thinkific Free Preview URL — every free-preview CTA on the site
 * reads this single value through <FreePreviewCta />, so no page needs to
 * change.
 */
export const FREE_PREVIEW_URL = "#";

/** Number of lessons included in the free preview, used in CTA copy. */
export const FREE_PREVIEW_LESSON_COUNT = 2;

export const siteConfig = {
  name: "Harvested",
  url: "https://www.harvested.app",
  description:
    "Learn indoor gardening with a structured online course designed for beginners. Grow healthy plants at home — from seed and germination to light, watering, nutrition and harvest.",
  contactEmail: "hello@harvested.app",
  nav: [
    { label: "Home", href: "/#top" },
    { label: "Courses", href: "/#courses" },
    { label: "Guides", href: "/learn" },
    { label: "FAQ", href: "/#faq" },
    { label: "Contact", href: "/#contact" },
  ],
};
