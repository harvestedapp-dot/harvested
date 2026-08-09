import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { localeTags, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/en";

export function FaqSection({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const copy = dict.faq;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: localeTags[locale],
    mainEntity: copy.items.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section
      id="faq"
      className="border-t border-border bg-secondary/30 py-20 sm:py-28"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="text-center" data-reveal>
          <p className="mb-5 inline-block rounded-[20px] bg-[#EAF3DE] px-5 py-2.5 text-[17px] font-medium tracking-[0.06em] text-[#3B6D11] uppercase">
            {copy.eyebrow}
          </p>
          <h2 className="font-heading text-[36px] leading-[1.15] font-semibold tracking-tight text-foreground sm:text-[44px]">
            {copy.heading}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {copy.subheading}
          </p>
        </div>

        <Accordion
          className="mt-12 rounded-2xl border border-border bg-card px-8"
          multiple={false}
          data-reveal
          style={{ "--reveal-delay": "100ms" } as React.CSSProperties}
        >
          {copy.items.map((faq, index) => (
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
