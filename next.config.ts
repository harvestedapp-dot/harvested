import type { NextConfig } from "next";

/**
 * Permanent redirects from the pre-2026-08 course/guide URLs to their indoor
 * gardening replacements, so links already in the wild (and in the search
 * index) land on the equivalent page instead of a 404.
 */
const legacyRedirects = [
  ["/course/basic-cannabis-cultivation", "/course/indoor-growing-for-beginners"],
  ["/course/advanced-cannabis-cultivation", "/#courses"],
  ["/course/cannabis-diagnostics", "/#courses"],
  ["/course/cannabis-genetics", "/#courses"],
  ["/course/cannabis-breeding", "/#courses"],
  ["/course/post-harvest-mastery", "/#courses"],
  ["/learn/how-to-germinate-cannabis-seeds", "/learn/how-to-start-seeds-indoors"],
  ["/learn/cannabis-light-cycles-explained", "/learn/grow-lights-for-indoor-plants"],
  ["/learn/when-to-harvest-cannabis", "/learn/how-to-water-indoor-plants"],
  ["/learn/how-to-dry-and-cure-cannabis", "/learn/ph-and-ec-for-beginners"],
] as const;

const nextConfig: NextConfig = {
  async redirects() {
    return legacyRedirects.map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },
};

export default nextConfig;
