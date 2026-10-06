import {
  COURSE_LIST_PRICE_AMD,
  COURSE_PRICE_AMD,
  PARTNER_SAVINGS_AMD,
  formatAmd,
  formatAmdPlus,
} from "@/lib/pricing";

/** Every price in the copy below is rendered from `@/lib/pricing`. */
const PRICE = formatAmd(COURSE_PRICE_AMD);
const LIST_PRICE = formatAmd(COURSE_LIST_PRICE_AMD);
const PARTNER_SAVINGS = formatAmdPlus(PARTNER_SAVINGS_AMD);

/**
 * English UI copy. This object is the shape every other locale must match —
 * `Dictionary` is inferred from it, so a missing key in another locale is a
 * TypeScript error rather than a blank spot on the page.
 */
export const en = {
  nav: [
    { label: "Home", href: "/#top" },
    { label: "Courses", href: "/#courses" },
    { label: "Guides", href: "/learn" },
    { label: "FAQ", href: "/#faq" },
    { label: "Contact", href: "/#contact" },
  ],

  common: {
    openMenu: "Open menu",
    languageLabel: "Language",
    enrollNow: "Enroll Now",
    letsGrow: "Let's Grow",
    freeLessonsCta: "Try 2 Free Lessons",
    freePreviewUnavailable: "Free preview is currently unavailable",
    freePreviewBadge: "Free preview",
    freeLessonsBadge: "2 Free Lessons",
    availableNow: "Available Now",
    comingSoon: "Coming Soon",
    learnMore: "Learn More",
    readGuide: "Read the guide",
    minRead: "min read",
    paymentsAccepted: "Payments accepted",
  },

  siteDescription:
    "Basic Cannabis Cultivation is an introductory online course about cannabis cultivation for beginners. Six modules with video lessons and supporting learning materials. The primary language of instruction is English.",

  hero: {
    badge: "Online Cannabis Course",
    headline: ["Basic", "Cannabis", "Cultivation"],
    /** Indexes of `headline` words painted in the accent gradient. */
    accentWords: [1],
    oldPrice: LIST_PRICE,
    price: PRICE,
    discount: "–61%",
    terms: "One-time payment · Lifetime access · 7-day money-back",
    perk: `✦ Includes exclusive discounts on indoor growing gear — students save ${PARTNER_SAVINGS} inside the course`,
    freePreviewLink: "Not ready? Try 2 free lessons first",
    trustItems: ["For Beginners", "Taught in English", "6 Modules"],
    equationLeftTitle: "Course format",
    equationLeftNote: "Digital educational content",
    equationRightTitle: "Instruction language",
    equationRightNote: "English",
    equationSummary: {
      before: "Explore ",
      highlightA: "Basic Cannabis Cultivation",
      middle: ", an ",
      highlightB: "introductory online course for beginners",
      after: ". No physical products are included in the course purchase.",
    },
    insideLabel: "About the course",
    insideItems: [
      "Cannabis cultivation is the course subject",
      "Six modules with video lessons",
      "Supporting learning materials",
      "Primary instruction language: English",
    ],
  },

  problems: {
    ariaLabel: "Key information about the Harvested cannabis course",
    eyebrow: "Before you enroll",
    heading: "Know what you're choosing.",
    subheading:
      "Review the course subject, format and language before purchasing.",
    painsTitle: "Questions to consider",
    solutionsTitle: "Course information",
    pains: [
      "What is the course called?",
      "What subject does it cover?",
      "Who is the course for?",
      "What language is used for teaching?",
      "How are the materials organized?",
      "Does the purchase include physical products?",
    ],
    solutions: [
      "Basic Cannabis Cultivation",
      "An introductory course about cannabis cultivation",
      "Beginners interested in the course subject",
      "The primary language of instruction is English",
      "Six modules with video lessons and supporting learning materials",
      "Digital educational content only; no physical products are included",
    ],
  },

  coursesSection: {
    eyebrow: "Course Library",
    heading: "Cannabis Education",
    subheading:
      "Explore Basic Cannabis Cultivation, an introductory online course for beginners, taught primarily in English.",
  },

  howItWorks: {
    ariaLabel: "How Harvested works",
    eyebrow: "How It Works",
    heading: "Choose your course and start learning",
    subheading:
      "Review the course details, enroll online and study the digital learning materials at your own pace.",
    stepLabel: "Step",
    steps: [
      {
        title: "Enroll in minutes",
        description:
          `One payment of ${PRICE} unlocks the full Basic Cannabis Cultivation course. No subscription, no upsells.`,
      },
      {
        title: "Learn at your own pace",
        description:
          "Work through six modules with video lessons and supporting learning materials on any device. Revisit any lesson as often as you need — access never expires.",
      },
      {
        title: "Study in English",
        description:
          "The primary language of instruction is English. The purchase provides digital educational content and includes no physical products.",
      },
    ],
  },

  about: {
    ariaLabel: "About Basic Cannabis Cultivation",
    eyebrow: "Online Cannabis Education",
    heading: "An introduction to the course subject.",
    body:
      "Basic Cannabis Cultivation is an introductory online course about cannabis cultivation for beginners. Six modules bring together video lessons and supporting learning materials. The primary language of instruction is English.",
    statCaption:
      "modules with video lessons and supporting materials",
  },

  partners: {
    ariaLabel:
      "Indoor growing equipment discounts included with the Harvested course",
    eyebrow: "Exclusive Partner Discounts",
    heading: "The course pays for itself.",
    body:
      `Inside every module we've included exclusive discount codes from our equipment partners. Students save an average of ${PARTNER_SAVINGS} on grow lights, nutrients, tents, meters, and more.`,
    statCaption: "average savings on indoor growing gear for Harvested students",
    note:
      "Partner discount codes are delivered inside the course modules — available immediately after enrollment.",
    items: [
      {
        title: "Grow Lights",
        description:
          "Exclusive discounts on LED grow lights from our lighting partners",
      },
      {
        title: "Nutrients, Soil & Substrates",
        description:
          "Partner codes for quality plant nutrients, soil and growing media",
      },
      {
        title: "Tents & Equipment",
        description:
          "Discounts on grow tents, fans, pots, meters, and environmental controls",
      },
    ],
  },

  testimonials: {
    ariaLabel: "Student reviews",
    eyebrow: "Student Reviews",
    heading: "What students say about growing with us",
    subheading:
      "Real feedback from real students — unedited, straight from their first indoor grows.",
    /** Shown only on translated locales; empty here because these are the originals. */
    translationNotice: "",
    emptyHeading: "Our first students are growing right now",
    emptyBody:
      "The course has just launched, and honest reviews take a full grow cycle to earn. As our first students finish their harvests, their real, unedited feedback will appear here — good and bad.",
    emptyNoteTitle: "Why no reviews yet?",
    emptyNoteBody:
      "We only publish verified feedback from real students — no purchased or invented testimonials, ever.",
    emptyCta: "Be first — try 2 free lessons",
    ratingLabel: (rating: number) => `Rated ${rating} out of 5 stars`,
    slideLabel: (index: number, total: number) =>
      `Go to review ${index} of ${total}`,
  },

  freePreview: {
    ariaLabel: "Try the course for free",
    eyebrow: "Try Before You Buy",
    heading: "Watch the first two lessons free",
    body:
      "Not sure if Basic Cannabis Cultivation is right for you? Try the course for free — no card, no commitment. Review the teaching style and English-language instruction before purchasing.",
    benefits: [
      "Full-length lessons from the real course — not a trailer",
      "No payment details required, just a free account",
      "Your progress carries over if you decide to enroll",
    ],
    browseCourses: "Browse All Courses",
    fineprint: "Free account · No credit card · Cancel anytime",
    moduleLabel: "Module 1",
    unlocksLabel: "Unlocks with enrollment",
    totalLessons: (total: number) =>
      `${total} lessons total · enroll once to unlock everything, forever`,
  },

  pricing: {
    ariaLabel: "Course pricing",
    eyebrow: "Simple, honest pricing",
    heading:
      "Basic Cannabis Cultivation: course access",
    body:
      "Purchase access to an introductory online course about cannabis cultivation for beginners. Digital educational content. No physical products are included in the course purchase.",
    included: [
      "Six course modules",
      "Video lessons for online study",
      "Supporting learning materials",
      "Primary instruction language: English",
      "Lifetime access, including all future course updates",
      "Works on desktop, tablet, and mobile",
    ],
    oneTime: "one-time payment",
    noSubscription: "No subscription. No hidden fees. Yours forever.",
    tryFirst: "or try 2 free lessons first",
    guaranteeTitle: "7-day money-back guarantee.",
    guaranteeBody:
      "If the course isn't for you, get a full refund within 7 days — no questions asked.",
    refundLink: "Refund policy",
  },

  faq: {
    eyebrow: "FAQ",
    heading: "Frequently Asked Questions",
    subheading: "Everything you need to know before you start learning.",
    items: [
      {
        question: "Is this course suitable for beginners?",
        answer:
          "Yes. Basic Cannabis Cultivation is an introductory online course about cannabis cultivation for beginners. The primary language of instruction is English.",
      },
      {
        question: "What is the subject of this course?",
        answer:
          "The course is specifically about cannabis cultivation. Its title is Basic Cannabis Cultivation.",
      },
      {
        question: "Can I try the course before buying?",
        answer:
          "Yes. The first two lessons of Basic Cannabis Cultivation are completely free. You can watch them start to finish before deciding whether to enroll — no payment details required.",
      },
      {
        question: "How many free lessons are included?",
        answer:
          "Two full lessons from Module 1 are free. They are lessons from Basic Cannabis Cultivation, presented in English.",
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
          `Nothing happens automatically — you'll never be charged without enrolling. If you enjoyed the lessons, you can unlock the rest of the course with a one-time ${PRICE} payment. If not, you simply walk away.`,
      },
      {
        question: "What language is the course taught in?",
        answer:
          "The primary language of instruction is English. The Armenian version of this website provides course information in Armenian.",
      },
      {
        question: "What format does the course use?",
        answer:
          "This is an online course with video lessons and supporting learning materials. Your purchase is for digital educational content.",
      },
      {
        question: "How is the course organized?",
        answer:
          "Basic Cannabis Cultivation is organized into six modules with video lessons and supporting learning materials.",
      },
      {
        question: "Can I study at my own pace?",
        answer:
          "Yes. The online course is self-paced, so you can work through the learning materials in your own time.",
      },
      {
        question: "How long do I have access to the course?",
        answer:
          "Once enrolled, you have lifetime access to Basic Cannabis Cultivation, including any future updates we make to the content.",
      },
      {
        question: "Are any physical products included?",
        answer:
          "No. The course purchase includes digital educational content only. It does not include physical products.",
      },
      {
        question: `Is the ${PRICE} payment one-time or recurring?`,
        answer:
          `It's a single one-time payment of ${PRICE}. There are no subscriptions or recurring charges for this course.`,
      },
      {
        question: "What if the course isn't for me?",
        answer:
          "Every enrollment is covered by a 7-day money-back guarantee. If you decide the course isn't a fit, email us within 7 days of purchase and we'll issue a full refund — no questions asked.",
      },
      {
        question: "How long does the course take to complete?",
        answer:
          "The course is self-paced. The time needed to complete its six modules will depend on your study schedule.",
      },
      {
        question: "Who is this course intended for?",
        answer:
          "It is an introductory course for beginners interested in cannabis cultivation who can study primarily in English.",
      },
      {
        question: "What is the course called?",
        answer:
          "The course title is Basic Cannabis Cultivation. The Armenian title on this website is Կանեփի աճեցման հիմունքներ.",
      },
      {
        question: "How do I access the course after enrolling?",
        answer:
          "Right after enrollment you get online access to all lessons and downloadable materials. The course works in any modern browser on desktop, tablet, and mobile — nothing to install.",
      },
      {
        question: "Will more courses be added in the future?",
        answer:
          "Yes. Basic Cannabis Cultivation is the first course in a growing library that will include Pests and Diseases, Plant Nutrition Basics, Seed Starting & Propagation, Hydroponics for Beginners, and Harvest and Storage.",
      },
    ],
  },

  contact: {
    eyebrow: "Contact",
    heading: "Get in Touch",
    body:
      "Questions about Basic Cannabis Cultivation, enrollment, or the platform? Send us a message and we'll get back to you within one business day.",
    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send Message",
    sending: "Sending...",
    sentTitle: "Message sent",
    sentBody:
      "Thanks for reaching out. We'll reply to your email as soon as possible.",
    error: "Something went wrong. Please try again or email us directly.",
    unavailable:
      "The contact form is currently unavailable. Your message has not been sent. Please use the email address or phone number below.",
    /** Trading address, shown next to the phone number and email. */
    address:
      "26A Khorenatsi Street, office 201, Kentron, 0010 Yerevan, Republic of Armenia",
  },

  footer: {
    explore: "Explore",
    legal: "Legal",
    contact: "Contact",
    rights: "All rights reserved.",
    disclaimer:
      "Educational content only. Growing results depend on your space, plants and care.",
    /**
     * Trading entity behind the site. Card acquirers require the merchant's
     * registered details to be visible on the site itself, not only inside
     * the legal documents.
     */
    legalEntity:
      "Individual Entrepreneur Ekaterina Lashko · State registration number 286.1471569 · TIN (HVHH) 40311316 · 26A Khorenatsi Street, office 201, Kentron, 0010 Yerevan, Republic of Armenia",
    /**
     * The same trading address as `legalEntity`, split for the contact column
     * so it is readable at body size rather than only in the fine print.
     */
    addressLines: [
      "26A Khorenatsi Street, office 201",
      "Kentron, 0010 Yerevan",
      "Republic of Armenia",
    ],
    links: [
      { label: "Privacy & Personal Data Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
      { label: "Refund Policy", href: "/refund-policy" },
    ],
  },

  coursePage: {
    backToCourses: "Back to all courses",
    firstLessonsFree: (count: number) => `First ${count} lessons free`,
    stats: {
      modules: "modules",
      lessons: "video lessons",
      bonus: "bonus resources",
      lifetime: "lifetime access",
    },
    whatYouLearn: "What You'll Learn",
    whatsIncluded: "What's Included",
    curriculum: "Course Curriculum",
    curriculumMeta: (modules: number, lessons: number, duration: string) =>
      `${modules} modules · ${lessons} lessons · ${duration}`,
    lessonsCount: (count: number) => `${count} lessons`,
    stillNotSure: "Still not sure?",
    stillNotSureBody: (count: number) =>
      `Start with the first ${count} lessons for free and experience the course before purchasing. No payment details required.`,
    startFreeLessons: "Start Free Lessons",
    bonusEyebrow: "Included free",
    bonusHeading: "Bonus learning resources",
    bonusBody: {
      before: "In addition to the video lessons, you get ",
      highlight: (count: number) => `${count} practical resources`,
      after: " to support your course study.",
    },
    whoFor: "Who This Course Is For",
    requirements: "Requirements",
    oneTime: "one-time",
    watchFree: (count: number) =>
      `Watch the first ${count} lessons free — no payment details required.`,
    perks: [
      "Lifetime access to this course",
      "Self-paced, learn on any device",
      "No prior experience required",
      "One-time payment, no subscription",
    ],
    guaranteeTitle: "7-day money-back guarantee.",
    guaranteeBody: "Full refund within 7 days if the course isn't for you.",
    refundLink: "Refund policy",
    journeyLabels: ["Course introduction", "Course modules", "Learning materials"],
  },

  learn: {
    eyebrow: "Free Guides",
    heading: "General Gardening Guides",
    subheading:
      "Explore free educational articles on general gardening topics.",
    ctaHeading: "Ready to go beyond free guides?",
    ctaBody:
      "Basic Cannabis Cultivation is an introductory online course about cannabis cultivation for beginners. Six modules with video lessons and supporting learning materials, taught primarily in English.",
    ctaButton: `Explore the Course — ${PRICE}`,
    allGuides: "All guides",
    articleCtaHeading: "Explore Basic Cannabis Cultivation",
    articleCtaBody:
      "Explore an introductory online course about cannabis cultivation for beginners. Six modules with video lessons and supporting learning materials, taught primarily in English, with lifetime access and a 7-day money-back guarantee.",
  },

  legalPage: {
    lastUpdated: "Last updated",
  },
};

/**
 * Inferred from the English copy without `as const`, so values widen to
 * `string`/`string[]` and other locales can supply their own wording while
 * still being checked for missing or misspelled keys.
 */
export type Dictionary = typeof en;
