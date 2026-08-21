import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Inter, Noto_Sans_Armenian } from "next/font/google";
import localFont from "next/font/local";
import "../globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { RevealInit } from "@/components/reveal-init";
import { siteConfig } from "@/lib/site-config";
import {
  getDictionary,
  isLocale,
  locales,
  localeTags,
  type Locale,
} from "@/lib/i18n";

const inter = Inter({
  variable: "--font-latin",
  subsets: ["latin"],
  display: "swap",
});

/**
 * Inter has no Armenian coverage, so the Armenian locale needs its own text
 * face. Noto Sans Armenian carries the full range and matches Inter's
 * neutral, humanist tone closely enough to keep one design across locales.
 */
const notoArmenian = Noto_Sans_Armenian({
  variable: "--font-armenian",
  subsets: ["armenian"],
  display: "swap",
});

/**
 * Burlesk is the brand display face. It is Latin-only, so it stays on the
 * logo, prices and figures (`font-brand`) in every locale, and serves as the
 * hero display face (`font-display`) on English only.
 */
const burlesk = localFont({
  src: "../fonts/Burlesk-Regular.ttf",
  variable: "--font-burlesk",
  weight: "100 900",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const dict = getDictionary(locale);
  const title =
    locale === "hy"
      ? `${siteConfig.name} | Տնային այգեգործության դասընթաց սկսնակների համար`
      : `${siteConfig.name} | Indoor Gardening Course for Beginners`;

  const keywords =
    locale === "hy"
      ? [
          "տնային այգեգործություն",
          "բույս աճեցնել տանը",
          "այգեգործության դասընթաց",
          "բույսերի խնամք",
          "սերմից մինչև բերք",
          "աճեցման լամպ",
          "հայերեն առցանց դասընթաց",
        ]
      : [
          "indoor gardening course",
          "indoor growing for beginners",
          "how to grow plants indoors",
          "indoor horticulture education",
          "growing plants from seed",
          "indoor garden setup",
          "seed to harvest",
        ];

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: title,
      template: `%s | ${siteConfig.name}`,
    },
    description: dict.siteDescription,
    keywords,
    authors: [{ name: siteConfig.name }],
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        hy: "/hy",
        "x-default": "/en",
      },
    },
    openGraph: {
      type: "website",
      locale: localeTags[locale],
      url: `${siteConfig.url}/${locale}`,
      siteName: siteConfig.name,
      title,
      description: dict.siteDescription,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: dict.siteDescription,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

function organizationJsonLd(locale: Locale) {
  const dict = getDictionary(locale);
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: siteConfig.name,
    url: `${siteConfig.url}/${locale}`,
    description: dict.siteDescription,
    email: siteConfig.contactEmail,
    telephone: siteConfig.contactPhone,
    inLanguage: localeTags[locale],
    knowsAbout:
      locale === "hy"
        ? [
            "Տնային այգեգործություն",
            "Տանը բույս աճեցնել սկսնակների համար",
            "Սերմի ցանք և ծլում",
            "Աճեցման լամպեր և ներսի լուսավորություն",
            "Ջրում և բույսի սնուցում",
            "pH-ի և EC-ի չափում",
            "Ջերմաստիճան, խոնավություն և օդափոխություն",
            "Ծաղկում, պտղաբերում և բերքահավաք",
          ]
        : [
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
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);

  /**
   * Font routing per locale: Armenian pages run entirely on Noto Sans
   * Armenian (including the hero display headline, since Burlesk has no
   * Armenian glyphs), English keeps Inter + Burlesk.
   */
  const fontVars =
    locale === "hy"
      ? ({
          "--font-sans": "var(--font-armenian)",
          "--font-display": "var(--font-armenian)",
          "--font-brand": "var(--font-burlesk)",
        } as React.CSSProperties)
      : ({
          "--font-sans": "var(--font-latin)",
          "--font-display": "var(--font-burlesk)",
          "--font-brand": "var(--font-burlesk)",
        } as React.CSSProperties);

  return (
    <html
      lang={localeTags[locale]}
      className={`${inter.variable} ${notoArmenian.variable} ${burlesk.variable} h-full antialiased`}
      style={fontVars}
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd(locale)),
          }}
        />
        <RevealInit />
        <SiteHeader
          locale={locale}
          nav={dict.nav}
          openMenuLabel={dict.common.openMenu}
          languageLabel={dict.common.languageLabel}
        />
        <main className="flex-1">{children}</main>
        <SiteFooter locale={locale} dict={dict} />
      </body>
    </html>
  );
}
