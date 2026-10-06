/**
 * Verified course-platform free-preview URL. Leave null until the actual
 * destination is supplied. A placeholder must not render as a working link.
 * All preview CTAs share this value, independently of the platform vendor.
 */
export const FREE_PREVIEW_URL: string | null = null;

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
    "Basic Cannabis Cultivation: an introductory online course with six modules, English-language video lessons and supporting learning materials.",
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
