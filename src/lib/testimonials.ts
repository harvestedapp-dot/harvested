/**
 * Student reviews for the testimonials section on the home page.
 *
 * IMPORTANT: only add REAL feedback from real students here — never invented
 * quotes. Fake testimonials are prohibited by the FTC rule on consumer
 * reviews (16 CFR Part 465) and would undermine trust in the brand.
 *
 * The section renders nothing while this array is empty, so the site is safe
 * to ship as-is. As soon as the first real reviews arrive (e.g. from beta
 * students or Thinkific), fill in entries following the example below and
 * the section appears automatically — no layout changes needed.
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

export const testimonials: Testimonial[] = [
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
