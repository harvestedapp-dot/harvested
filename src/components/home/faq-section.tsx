import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is this course suitable for beginners?",
    answer:
      "Yes. Indoor Growing for Beginners is designed for people starting from zero — it walks you through every stage step by step, from choosing a spot in your home and germinating your first seed to flowering, fruiting and harvest.",
  },
  {
    question: "What plants can I grow indoors?",
    answer:
      "The principles apply to many indoor crops, including herbs like basil, leafy greens and lettuce, tomatoes, peppers, strawberries, compact fruiting plants and indoor flowering plants. The course teaches the system, and you choose the plant that fits your space and light.",
  },
  {
    question: "Can I try the course before buying?",
    answer:
      "Yes. The first two lessons of Indoor Growing for Beginners are completely free. You can watch them start to finish before deciding whether to enroll — no payment details required.",
  },
  {
    question: "How many free lessons are included?",
    answer:
      "Two full lessons from Module 1 are free: the course welcome and a realistic look at the time, cost and effort your first indoor grow involves. They're the same full-length lessons paying students get, not a trailer.",
  },
  {
    question: "Do I need to create an account to watch the free lessons?",
    answer:
      "Yes — you'll create a free account on our course platform to access the free lessons. It takes under a minute, requires no credit card, and there's nothing to cancel.",
  },
  {
    question: "Will my progress be saved if I decide to buy?",
    answer:
      "Yes. The free lessons live in the same course platform as the full course, so when you enroll with the same account, you pick up exactly where you left off.",
  },
  {
    question: "What happens after I finish the free lessons?",
    answer:
      "Nothing happens automatically — you'll never be charged without enrolling. If you enjoyed the lessons, you can unlock the remaining 30 lessons with a one-time $69 payment. If not, you simply walk away.",
  },
  {
    question: "Do I need expensive equipment?",
    answer:
      "No. The course explains what equipment is genuinely essential, what is optional, and what you can skip entirely — so you can start on a windowsill or a shelf and only upgrade when there's a reason to.",
  },
  {
    question: "Do I need a grow tent?",
    answer:
      "Not always. A tent helps you control light, temperature and humidity, but plenty of plants grow well on a shelf, in a cabinet or on a bright windowsill. The course walks through the different indoor setups and their trade-offs.",
  },
  {
    question: "Will I learn about lighting?",
    answer:
      "Yes. Lighting is one of the core topics: how to choose a grow light, how far to hang it, how many hours to run it, and how to recognize the signs of too much or too little light.",
  },
  {
    question: "Does the course cover watering and nutrients?",
    answer:
      "Yes. You'll learn when and how much to water, how to avoid overwatering and underwatering, how plant nutrition works, when to start feeding, and the basics of pH and EC for water and nutrient solutions.",
  },
  {
    question: "How long do I have access to the course?",
    answer:
      "Once enrolled, you have lifetime access to Indoor Growing for Beginners, including any future updates we make to the content.",
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
    question: "How much space do I need?",
    answer:
      "Less than most people expect. A single shelf, a corner of a room, a cabinet or a bright windowsill is enough for herbs, greens and compact plants. The course helps you pick the right spot in your home and match your plants to it.",
  },
  {
    question: "Will I learn how to diagnose plant problems?",
    answer:
      "Yes. A full part of the course is dedicated to reading your plant's signals — leaf colour, spots, curling, drooping, slow growth — and tracing them back to light, water, nutrients, temperature, humidity or pests.",
  },
  {
    question: "How do I access the course after enrolling?",
    answer:
      "Right after enrollment you get online access to all lessons and downloadable materials. The course works in any modern browser on desktop, tablet, and mobile — nothing to install.",
  },
  {
    question: "Will more courses be added in the future?",
    answer:
      "Yes. Indoor Growing for Beginners is the first course in a growing library that will include Pests and Diseases, Plant Nutrition Basics, Seed Starting & Propagation, Hydroponics for Beginners, and Harvest and Storage.",
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
