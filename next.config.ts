import type { NextConfig } from "next";

/**
 * Redirects from the pre-2026-08 course/guide URLs to their indoor gardening
 * replacements, plus from the pre-i18n prefix-less URLs into the English
 * locale, so links already in the wild land on the equivalent page.
 */
const legacyTopicRedirects = [
  ["/course/basic-cannabis-cultivation", "/en/course/indoor-growing-for-beginners"],
  ["/course/advanced-cannabis-cultivation", "/en/#courses"],
  ["/course/cannabis-diagnostics", "/en/#courses"],
  ["/course/cannabis-genetics", "/en/#courses"],
  ["/course/cannabis-breeding", "/en/#courses"],
  ["/course/post-harvest-mastery", "/en/#courses"],
  ["/learn/how-to-germinate-cannabis-seeds", "/en/learn/how-to-start-seeds-indoors"],
  ["/learn/cannabis-light-cycles-explained", "/en/learn/grow-lights-for-indoor-plants"],
  ["/learn/when-to-harvest-cannabis", "/en/learn/how-to-water-indoor-plants"],
  ["/learn/how-to-dry-and-cure-cannabis", "/en/learn/ph-and-ec-for-beginners"],
] as const;

/** Prefix-less paths from before the EN/HY split. */
const preI18nRedirects = [
  ["/", "/en"],
  ["/learn", "/en/learn"],
  ["/learn/:slug", "/en/learn/:slug"],
  ["/course/:slug", "/en/course/:slug"],
  ["/privacy-policy", "/en/privacy-policy"],
  ["/terms-of-service", "/en/terms-of-service"],
  ["/refund-policy", "/en/refund-policy"],
] as const;

const nextConfig: NextConfig = {
  async redirects() {
    return [...legacyTopicRedirects, ...preI18nRedirects].map(
      ([source, destination]) => ({
        source,
        destination,
        permanent: true,
      })
    );
  },
};

export default nextConfig;
