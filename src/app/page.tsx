import type { Metadata } from "next";
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

const title =
  "Learn Indoor Gardening Online | Seed to Harvest Course | Harvested";
const description =
  "Learn how to grow healthy plants indoors with a step-by-step online course for beginners. Seed starting, grow lights, watering, nutrients, pH and EC, plant health, flowering and harvest — all at your own pace.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "indoor gardening course",
    "how to grow plants indoors",
    "seed to harvest",
    "indoor growing for beginners",
    "online indoor horticulture course",
  ],
  openGraph: { title, description },
  twitter: { title, description },
};

const courseJsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Indoor Growing for Beginners: Seed to Harvest",
  description,
  url: "https://www.harvested.app/course/indoor-growing-for-beginners",
  provider: {
    "@type": "Organization",
    name: "Harvested",
    url: "https://www.harvested.app",
  },
  courseMode: "online",
  inLanguage: "en-US",
  educationalLevel: "Beginner",
  teaches: [
    "Seed Starting and Germination",
    "Indoor Grow Space Setup",
    "Grow Lights and Environment",
    "Watering and Plant Nutrition",
    "pH and EC",
    "Plant Health and Problem Diagnosis",
    "Flowering, Fruiting and Harvest",
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
          src="https://images.unsplash.com/photo-1774291981971-ec2ec7a8cd0e?w=1600&q=80"
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
        <TestimonialsSection />
        <FreePreviewSection />
        <PricingSection />
        <FaqSection />
        <ContactSection />
      </div>
    </>
  );
}
