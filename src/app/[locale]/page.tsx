import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HeroSection } from "@/components/home/hero-section";
import { ProblemsSection } from "@/components/home/problems-section";
import { PartnerDiscountsSection } from "@/components/home/partner-discounts-section";
import { CoursesSection } from "@/components/home/courses-section";
import { HowItWorksSection } from "@/components/home/how-it-works-section";
import { AboutSection } from "@/components/home/about-section";
import { FreePreviewSection } from "@/components/home/free-preview-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { PricingSection } from "@/components/home/pricing-section";
import { FaqSection } from "@/components/home/faq-section";
import { ContactSection } from "@/components/home/contact-section";
import { siteConfig } from "@/lib/site-config";
import { getDictionary, isLocale, localeTags, type Locale } from "@/lib/i18n";

const pageCopy: Record<Locale, { title: string; description: string; keywords: string[] }> = {
  en: {
    title: "Learn Indoor Gardening Online | Seed to Harvest Course | Harvested",
    description:
      "Learn how to grow healthy plants indoors with a step-by-step online course for beginners. Seed starting, grow lights, watering, nutrients, pH and EC, plant health, flowering and harvest — all at your own pace.",
    keywords: [
      "indoor gardening course",
      "how to grow plants indoors",
      "seed to harvest",
      "indoor growing for beginners",
      "online indoor horticulture course",
    ],
  },
  hy: {
    title:
      "Սորվէ ներսի պարտիզպանութիւն առցանց | Սերմէն մինչեւ բերք | Harvested",
    description:
      "Սորվէ՛ ինչպէս ներսը առողջ բոյսեր աճեցնել՝ սկսնակներու համար քայլ առ քայլ առցանց դասընթացով։ Սերմի ցանք, աճի լոյսեր, ջրում, սնուցում, pH եւ EC, բոյսի առողջութիւն, ծաղկում եւ բերքահաւաք՝ քու արագութեամբդ։",
    keywords: [
      "ներսի պարտիզպանութեան դասընթաց",
      "ինչպէս ներսը բոյս աճեցնել",
      "սերմէն մինչեւ բերք",
      "պարտիզպանութիւն սկսնակներու համար",
      "առցանց դասընթաց հայերէն",
    ],
  },
};

export async function generateMetadata({
  params,
}: PageProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const { title, description, keywords } = pageCopy[locale];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `/${locale}`,
      languages: { en: "/en", hy: "/hy", "x-default": "/en" },
    },
    openGraph: { title, description },
    twitter: { title, description },
  };
}

export default async function Home({
  params,
}: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);
  const { description } = pageCopy[locale];

  const courseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name:
      locale === "hy"
        ? "Ներսի աճեցում սկսնակներու համար՝ սերմէն մինչեւ բերք"
        : "Indoor Growing for Beginners: Seed to Harvest",
    description,
    url: `${siteConfig.url}/${locale}/course/indoor-growing-for-beginners`,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    courseMode: "online",
    inLanguage: localeTags[locale],
    educationalLevel: "Beginner",
    teaches: dict.hero.insideItems,
    offers: {
      "@type": "Offer",
      price: 69,
      priceCurrency: "USD",
      category: "Paid",
      availability: "https://schema.org/InStock",
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "Online",
      courseWorkload: "PT8H",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />
      <div aria-hidden className="fixed inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1774291981971-ec2ec7a8cd0e?w=1600&q=80"
          alt=""
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(6,18,9,0.85)]" />
      </div>
      <HeroSection locale={locale} dict={dict} />
      <div className="relative bg-background">
        <ProblemsSection locale={locale} dict={dict} />
        <CoursesSection locale={locale} dict={dict} />
        <HowItWorksSection dict={dict} />
        <AboutSection dict={dict} />
        <PartnerDiscountsSection dict={dict} />
        <TestimonialsSection locale={locale} dict={dict} />
        <FreePreviewSection locale={locale} dict={dict} />
        <PricingSection locale={locale} dict={dict} />
        <FaqSection locale={locale} dict={dict} />
        <ContactSection copy={dict.contact} />
      </div>
    </>
  );
}
