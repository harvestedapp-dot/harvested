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
    freePreviewBadge: "Free preview",
    freeLessonsBadge: "2 Free Lessons",
    availableNow: "Available Now",
    comingSoon: "Coming Soon",
    learnMore: "Learn More",
    readGuide: "Read the guide",
    minRead: "min read",
  },

  siteDescription:
    "Learn indoor gardening with a structured online course designed for beginners. Grow healthy plants at home — from seed and germination to light, watering, nutrition and harvest.",

  hero: {
    badge: "Indoor Gardening Course",
    headline: [
      "Grow",
      "indoors",
      "with",
      "confidence",
      "—",
      "from",
      "the",
      "first seed",
      "on.",
    ],
    /** Indexes of `headline` words painted in the accent gradient. */
    accentWords: [3, 7],
    oldPrice: "$179",
    price: "$69",
    discount: "–61%",
    terms: "One-time payment · Lifetime access · 7-day money-back",
    perk:
      "✦ Includes exclusive discounts on indoor growing gear — students save $200+ inside the course",
    freePreviewLink: "Not ready? Try 2 free lessons first",
    trustItems: ["Beginner Friendly", "Any Device", "6 Modules"],
    equationLeftTitle: "4 months of store-bought herbs",
    equationLeftNote: "~$69 · gone every week",
    equationRightTitle: "this course",
    equationRightNote: "grow your own · season after season",
    equationSummary: {
      before: "For what you'd spend on ",
      highlightA: "a few months of supermarket herbs",
      middle: " you get a ",
      highlightB: "complete indoor growing education",
      after: " — step by step, at your own pace.",
    },
    insideLabel: "What's inside",
    insideItems: [
      "Seed starting & seedling care",
      "Light, temperature & humidity",
      "Watering, nutrients, pH & EC",
      "Flowering, fruiting & harvest",
    ],
  },

  problems: {
    ariaLabel: "Common indoor growing problems solved by the Harvested course",
    eyebrow: "Sound familiar?",
    heading: "Every new indoor grower hits these walls.",
    subheading:
      "If any of these sound like you — Harvested was built exactly for this.",
    painsTitle: "✗ Growing indoors without Harvested",
    solutionsTitle: "✓ Growing indoors with Harvested",
    pains: [
      "No idea where to start growing indoors — too much conflicting information online",
      "Yellowing, drooping, sick plants with no clear understanding of what went wrong",
      "Overwatered roots one week, bone-dry soil the next",
      "Money wasted on lights, pots and gear you never actually needed",
      "Leggy, stretched seedlings and no idea whether it's the light or the room",
      "Nutrients, pH and EC that feel like chemistry class instead of gardening",
    ],
    solutions: [
      "One clear path from seed to harvest — structured, sequential, practical",
      "Learn to read leaves, colour and growth so you catch problems early",
      "Know exactly when your plant needs water — and when it doesn't",
      "Equipment guide inside the course — spend only on what actually matters",
      "Set light distance, intensity and hours correctly from day one",
      "pH, EC and feeding explained in plain English, step by step",
    ],
  },

  coursesSection: {
    eyebrow: "Course Library",
    heading: "Indoor Gardening Courses",
    subheading:
      "Start growing your skills with our beginner course today. New indoor growing courses join the library as they're released.",
  },

  howItWorks: {
    ariaLabel: "How Harvested works",
    eyebrow: "How It Works",
    heading: "From enrollment to first harvest in three steps",
    subheading:
      "No prerequisites, no equipment needed to start — just a clear path from complete beginner to confident indoor grower.",
    stepLabel: "Step",
    steps: [
      {
        title: "Enroll in minutes",
        description:
          "One payment of $69 unlocks the full Indoor Growing for Beginners course — every module, every lesson, every guide. No subscription, no upsells.",
      },
      {
        title: "Learn at your own pace",
        description:
          "Work through 6 structured modules of video lessons and downloadable guides on any device. Revisit any lesson as often as you need — access never expires.",
      },
      {
        title: "Grow with confidence",
        description:
          "Apply what you learn to your first indoor grow, from germinating your first seed to harvesting herbs, greens, fruit or flowers you grew yourself.",
      },
    ],
  },

  about: {
    ariaLabel: "Why most first indoor plants fail and how Harvested fixes it",
    eyebrow: "Online Indoor Gardening Education",
    heading: "Most first indoor plants die. Here's how we fix that.",
    body:
      "The problem is not hard work — it's scattered advice. Tips arrive in no clear order, so beginners overwater, under-light and overfeed their way through a first grow. A step-by-step course fixes that.",
    statCaption:
      "structured lessons, in the right order — instead of a hundred contradictory tips",
  },

  partners: {
    ariaLabel:
      "Indoor growing equipment discounts included with the Harvested course",
    eyebrow: "Exclusive Partner Discounts",
    heading: "The course pays for itself.",
    body:
      "Inside every module we've included exclusive discount codes from our equipment partners. Students save an average of $200+ on grow lights, nutrients, tents, meters, and more.",
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
      "Not sure if an indoor growing course is right for you? Start Indoor Growing for Beginners for free — no card, no commitment. See the teaching style, the pace, and the production quality before you spend a dollar.",
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
      "Everything you need to grow, for less than a shelf of gear you didn't need",
    body:
      "One mistake with lighting, watering, or feeding can cost you a whole crop of plants and hundreds of dollars in equipment you never needed. Indoor Growing for Beginners teaches you to get it right the first time.",
    included: [
      "6 structured modules, from seed to harvest",
      "32 on-demand video lessons you can rewatch anytime",
      "Downloadable guides and checklists for every stage",
      "Equipment recommendations for every budget",
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
    ],
  },

  contact: {
    eyebrow: "Contact",
    heading: "Get in Touch",
    body:
      "Questions about the indoor gardening course, enrollment, or the platform? Send us a message and we'll get back to you within one business day.",
    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send Message",
    sending: "Sending...",
    sentTitle: "Message sent",
    sentBody:
      "Thanks for reaching out. We'll reply to your email as soon as possible.",
    error: "Something went wrong. Please try again or email us directly.",
  },

  footer: {
    explore: "Explore",
    legal: "Legal",
    contact: "Contact",
    rights: "All rights reserved.",
    disclaimer:
      "Educational content only. Growing results depend on your space, plants and care.",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
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
      after: " covering every stage of your indoor grow.",
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
    journeyLabels: ["Seed & sprout", "Grow & feed", "Flower & harvest"],
  },

  learn: {
    eyebrow: "Free Guides",
    heading: "Indoor Gardening Guides",
    subheading:
      "Practical guides on growing plants indoors — the same structured approach we teach in our courses, free to read.",
    ctaHeading: "Ready to go beyond free guides?",
    ctaBody:
      "Indoor Growing for Beginners covers the entire journey — 6 modules and 32 lessons from seed to harvest, in the right order.",
    ctaButton: "Explore the Course — $69",
    allGuides: "All guides",
    articleCtaHeading: "Learn the whole process, in the right order",
    articleCtaBody:
      "This guide covers one stage of the journey. Indoor Growing for Beginners walks you through all of them — 6 modules and 32 video lessons from seed to harvest, with lifetime access and a 7-day money-back guarantee.",
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
