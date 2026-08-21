import type { Locale } from "@/lib/i18n/config";

/**
 * Student reviews for the testimonials section on the home page.
 *
 * IMPORTANT: only add REAL feedback from real students here — never invented
 * quotes. Fake testimonials are prohibited by the FTC rule on consumer
 * reviews (16 CFR Part 465) and would undermine trust in the brand.
 *
 * `testimonialsEn` holds the words the students actually wrote.
 * `testimonialsHy` holds a faithful translation of those same words — nothing
 * is added, removed or embellished, names and ratings are untouched, and the
 * Armenian page states plainly that the reviews are translated. If you cannot
 * translate a new review faithfully, leave it in English rather than
 * paraphrasing it.
 *
 * The section renders an honest "no reviews yet" state while the array is
 * empty, so the site is safe to ship either way.
 *
 * Example entry:
 * {
 *   quote:
 *     "Exact words the student wrote, lightly edited for spelling only.",
 *   name: "Mike R.",            // first name + last initial is enough
 *   context: "First indoor grow", // optional: who they are / their setup
 *   rating: 5,                   // optional: 1–5, shown as stars
 *   date: "2026-08-01",          // optional: ISO date, used in JSON-LD
 * }
 */

export interface Testimonial {
  quote: string;
  name: string;
  context?: string;
  rating?: number;
  date?: string;
}

const testimonialsEn: Testimonial[] = [
  {
    quote:
      "I spent months watching random YouTube videos and still felt lost. This course gave me a clear step-by-step process. The lessons are simple, practical, and easy to follow. My first grow was much more successful than I expected.",
    name: "Michael R.",
    rating: 5,
  },
  {
    quote:
      "The best part is that everything is explained in plain English. No complicated jargon. I finally understood lighting, watering, and nutrients without feeling overwhelmed. Highly recommended for beginners.",
    name: "David K.",
    rating: 5,
  },
  {
    quote:
      "I was nervous about starting because there was so much conflicting information online. This course helped me avoid common mistakes and stay confident throughout the entire process.",
    name: "Sarah T.",
    rating: 5,
  },
  {
    quote:
      "What I liked most was the structure. Every lesson builds on the previous one, so you never feel lost. The checklists and practical examples saved me a lot of time.",
    name: "Jason M.",
    rating: 5,
  },
  {
    quote:
      "I made several mistakes during my first attempt before taking this course. After completing the lessons, I understood what went wrong and achieved much healthier plants.",
    name: "Alex P.",
    rating: 5,
  },
  {
    quote:
      "The course is perfect for complete beginners. Everything is organized, easy to understand, and focused on real-world results instead of theory.",
    name: "Chris W.",
    rating: 5,
  },
];

/** Faithful Eastern Armenian translations of the English originals above. */
const testimonialsHy: Testimonial[] = [
  {
    quote:
      "Ամիսներ ծախսեցի պատահական YouTube-ի տեսանյութեր դիտելով և դեռ կորած էի զգում։ Այս դասընթացը ինձ տվեց հստակ, քայլ առ քայլ գործընթաց։ Դասերը պարզ են, գործնական և հեշտ հետևելի։ Առաջին ցանքս շատ ավելի հաջող ստացվեց, քան սպասում էի։",
    name: "Michael R.",
    rating: 5,
  },
  {
    quote:
      "Ամենալավ կողմն այն է, որ ամեն ինչ բացատրված է պարզ լեզվով։ Ոչ մի բարդ բառ։ Վերջապես հասկացա լուսավորությունը, ջրումը և սնուցումը՝ առանց ծանրաբեռնված զգալու։ Խստորեն խորհուրդ եմ տալիս սկսնակներին։",
    name: "David K.",
    rating: 5,
  },
  {
    quote:
      "Վախենում էի սկսել, որովհետև համացանցում այնքան իրարամերժ տեղեկություն կար։ Այս դասընթացն օգնեց ինձ խուսափել սովորական սխալներից և վստահ մնալ ամբողջ գործընթացի ընթացքում։",
    name: "Sarah T.",
    rating: 5,
  },
  {
    quote:
      "Ամենից շատ դուր եկավ կառուցվածքը։ Ամեն դաս կառուցվում է նախորդի վրա, այնպես որ երբեք կորած չես զգում։ Ստուգաթերթերն ու գործնական օրինակները շատ ժամանակ խնայեցին ինձ։",
    name: "Jason M.",
    rating: 5,
  },
  {
    quote:
      "Այս դասընթացն անցնելուց առաջ մի քանի սխալ արեցի իմ առաջին փորձի ընթացքում։ Դասերն ավարտելուց հետո հասկացա, թե ի՛նչն էր սխալ գնացել, և շատ ավելի առողջ բույսեր ունեցա։",
    name: "Alex P.",
    rating: 5,
  },
  {
    quote:
      "Դասընթացը կատարյալ է բոլորովին սկսնակների համար։ Ամեն ինչ կազմակերպված է, հեշտ ընկալելի, և կենտրոնացած է իրական արդյունքների վրա՝ տեսության փոխարեն։",
    name: "Chris W.",
    rating: 5,
  },
];

const byLocale: Record<Locale, Testimonial[]> = {
  en: testimonialsEn,
  hy: testimonialsHy,
};

export function getTestimonials(locale: Locale): Testimonial[] {
  return byLocale[locale];
}
