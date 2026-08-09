import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { RevealInit } from "@/components/reveal-init";
import { siteConfig } from "@/lib/site-config";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

/**
 * Burlesk is a heavy condensed display face: legible as a short, large
 * statement, unreadable as running UI type. It is therefore exposed as
 * `font-display` and used only on poster-scale headlines and figures —
 * everything else (card titles, article headings, footer, legal pages)
 * runs on Inter through `font-heading`.
 */
const burlesk = localFont({
  src: "./fonts/Burlesk-Regular.ttf",
  variable: "--font-display",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Indoor Gardening Course for Beginners`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "indoor gardening course",
    "indoor growing for beginners",
    "how to grow plants indoors",
    "indoor horticulture education",
    "growing plants from seed",
    "indoor garden setup",
    "seed to harvest",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Indoor Gardening Course for Beginners`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Indoor Gardening Course for Beginners`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  email: siteConfig.contactEmail,
  knowsAbout: [
    "Indoor gardening",
    "Indoor horticulture",
    "Growing plants indoors for beginners",
    "Seed starting and germination",
    "Grow lights and indoor lighting",
    "Watering and plant nutrition",
    "pH and EC measurement",
    "Temperature, humidity and airflow",
    "Flowering, fruiting and harvest",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${burlesk.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <RevealInit />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
