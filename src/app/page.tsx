import type { Metadata } from "next";
import { HeroSection } from "@/components/home/hero-section";
import { ProblemsSection } from "@/components/home/problems-section";
import { PartnerDiscountsSection } from "@/components/home/partner-discounts-section";
import { CoursesSection } from "@/components/home/courses-section";
import { HowItWorksSection } from "@/components/home/how-it-works-section";
import { AboutSection } from "@/components/home/about-section";
import { PricingSection } from "@/components/home/pricing-section";
import { FaqSection } from "@/components/home/faq-section";
import { ContactSection } from "@/components/home/contact-section";

const title =
  "Learn Cannabis Cultivation Online | Seed to Harvest Course | Harvested";
const description =
  "Master cannabis growing with a step-by-step online course designed for beginners in the US. Learn germination, vegetative growth, flowering, harvesting, drying, and curing — all at your own pace.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "cannabis cultivation course",
    "how to grow cannabis",
    "seed to harvest",
    "cannabis growing for beginners",
    "online cannabis course USA",
  ],
  openGraph: { title, description },
  twitter: { title, description },
};

const courseJsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Cannabis Cultivation: Seed to Harvest",
  description,
  url: "https://www.harvested.app/course/basic-cannabis-cultivation",
  provider: {
    "@type": "Organization",
    name: "Harvested",
    url: "https://www.harvested.app",
  },
  courseMode: "online",
  inLanguage: "en-US",
  educationalLevel: "Beginner",
  teaches: [
    "Germination",
    "Vegetative Growth",
    "Flowering Stage",
    "Harvest",
    "Drying",
    "Curing",
  ],
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

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />
      <div aria-hidden className="fixed inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1498671546682-94a232c26d17?w=1600&q=80"
          alt=""
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(6,18,9,0.85)]" />
      </div>
      <HeroSection />
      <div className="relative bg-background">
        <ProblemsSection />
        <CoursesSection />
        <HowItWorksSection />
        <AboutSection />
        <PartnerDiscountsSection />
        <PricingSection />
        <FaqSection />
        <ContactSection />
      </div>
    </>
  );
}
