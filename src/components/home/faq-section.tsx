import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do I need any prior growing experience?",
    answer:
      "No. Basic Cannabis Cultivation is a cannabis growing course built for complete beginners — it walks you through every stage of the process step by step, from germination to curing.",
  },
  {
    question: "Is this course legal to take?",
    answer:
      "Yes. Harvested provides educational content only. Cannabis laws vary by state and country, so it's your responsibility to understand and follow the regulations that apply to you.",
  },
  {
    question: "How long do I have access to the course?",
    answer:
      "Once enrolled, you have lifetime access to Basic Cannabis Cultivation, including any future updates we make to the content.",
  },
  {
    question: "What equipment do I need to get started?",
    answer:
      "None to begin learning. The course covers equipment options at every budget so you can decide what setup makes sense for you before you buy anything.",
  },
  {
    question: "Is the $69 payment one-time or recurring?",
    answer:
      "It's a single one-time payment of $69. There are no subscriptions or recurring charges for this course.",
  },
  {
    question: "What if the course isn't for me?",
    answer:
      "Every enrollment is covered by a 7-day money-back guarantee. If you decide the course isn't a fit, email us within 7 days of purchase and we'll issue a full refund — no questions asked.",
  },
  {
    question: "How long does the course take to complete?",
    answer:
      "The course includes roughly 8 hours of video lessons across 6 modules. Because it's fully self-paced, you can finish it in a focused weekend or spread it over several weeks alongside your first grow.",
  },
  {
    question: "Does the course cover indoor and outdoor growing?",
    answer:
      "Yes. The course covers the fundamentals that apply to both, then walks through the trade-offs of indoor and outdoor setups so you can choose the approach that fits your space, climate, and budget.",
  },
  {
    question: "How do I access the course after enrolling?",
    answer:
      "Right after enrollment you get online access to all lessons and downloadable materials. The course works in any modern browser on desktop, tablet, and mobile — nothing to install.",
  },
  {
    question: "Will more courses be added in the future?",
    answer:
      "Yes. Basic Cannabis Cultivation is the first course in a growing library that will include Advanced Cultivation, Diagnostics, Genetics, Breeding, and Post Harvest Mastery.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export function FaqSection() {
  return (
    <section id="faq" className="border-t border-border bg-secondary/30 py-20 sm:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="text-center" data-reveal>
          <p className="mb-5 inline-block rounded-[20px] bg-[#EAF3DE] px-5 py-2.5 text-[17px] font-medium tracking-[0.06em] text-[#3B6D11] uppercase">
            FAQ
          </p>
          <h2 className="font-heading text-[36px] leading-[1.15] font-semibold tracking-tight text-foreground sm:text-[44px]">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to know before you start learning.
          </p>
        </div>

        <Accordion
          className="mt-12 rounded-2xl border border-border bg-card px-8"
          multiple={false}
          data-reveal
          style={{ "--reveal-delay": "100ms" } as React.CSSProperties}
        >
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`faq-${index}`}>
              <AccordionTrigger className="py-6 text-[17px]">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[16px] leading-[1.65]">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
