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
  /**
   * Canonical origin, used for canonical tags, hreflang, Open Graph, JSON-LD
   * and the sitemap. The apex is the primary address; www redirects to it.
   */
  url: "https://start-growing.com",
  description:
    "Learn indoor gardening with a structured online course designed for beginners. Grow healthy plants at home — from seed and germination to light, watering, nutrition and harvest.",
  contactEmail: "harvested.app@gmail.com",
  /**
   * Shown as written; `contactPhoneHref` is the same number without spaces
   * for `tel:` links. Card acquirers expect a reachable phone number on the
   * site, so it appears in the footer, the contact section and the legal
   * documents.
   */
  contactPhone: "+374 55 623 244",
  contactPhoneHref: "+37455623244",
  nav: [
    { label: "Home", href: "/#top" },
    { label: "Courses", href: "/#courses" },
    { label: "Guides", href: "/learn" },
    { label: "FAQ", href: "/#faq" },
    { label: "Contact", href: "/#contact" },
  ],
};
