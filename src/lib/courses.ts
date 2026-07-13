import type { Course } from "@/lib/types";

/**
 * Single source of truth for every course. The home page grid and the
 * /course/[slug] detail route both read from this array, so adding a new
 * course later never requires touching page components.
 */
export const courses: Course[] = [
  {
    slug: "basic-cannabis-cultivation",
    title: "Basic Cannabis Cultivation",
    shortDescription:
      "A complete foundation in cannabis cultivation, from seed to harvest, built for absolute beginners.",
    status: "available",
    price: 69,
    level: "Beginner",
    duration: "6-8 hours of self-paced lessons",
    format: "On-demand video lessons and downloadable guides",
    heroDescription:
      "The Complete Indoor Growing Course is a structured, step-by-step program designed for beginners. It takes students from understanding the basics and setting up their first grow space to harvesting, drying, curing, and storing the final product.",
    overview: [
      "The Complete Indoor Growing Course is a structured, step-by-step program designed for beginners. It takes students from understanding the basics and setting up their first grow space to harvesting, drying, curing, and storing the final product.",
      "The course combines 32 structured video lessons with practical learning resources that help students apply every concept in real life.",
    ],
    included: [
      "6 comprehensive modules",
      "32 step-by-step lessons",
      "Downloadable checklists",
      "Visual diagrams and cheat sheets",
      "Practical growing guides",
      "Reference materials for every stage",
      "Actionable tips and common mistake prevention",
      "Lifetime access",
      "Future course updates",
    ],
    outcomes: [
      "Understand the complete plant life cycle",
      "Build and organize an indoor grow space",
      "Choose suitable equipment and genetics",
      "Create the right environmental conditions",
      "Water and feed plants correctly",
      "Recognize nutrient deficiencies and environmental problems",
      "Prevent common beginner mistakes",
      "Successfully complete the flowering stage",
      "Harvest at the correct time",
      "Dry, cure, and store the final product properly",
    ],
    curriculum: [
      {
        title: "So you want to grow — what's the first step?",
        description:
          "This module helps beginners understand what indoor growing actually involves before buying any equipment or seeds.",
        lessons: [
          "Welcome to the course",
          "Why and what it costs: a realistic look at the first grow",
          "Laws: what you need to know before you start",
          "Before you start: what you need to know",
        ],
      },
      {
        title: "Everything you need before the first seed",
        description:
          "Students learn how to prepare the entire grow setup before planting.",
        lessons: [
          "How a plant grows: from seed to harvest",
          "How to choose or build your own grow box",
          "How to choose seeds",
          "How to choose lighting for indoor growing",
          "Filters, fans, and warm air",
          "Soil, pots, water",
          "Everything you need to buy and set up",
        ],
      },
      {
        title: "Growing up: the veg stage from start to finish",
        description:
          "Everything needed for healthy plant development during the vegetative stage.",
        lessons: [
          "Germination: proven methods and common mistakes",
          "The first days after sprouting",
          "Transplanting your seedling",
          "Learning to read your plant's signals",
          "When and how to start feeding your plant",
        ],
      },
      {
        title: "Creating the perfect environment",
        description:
          "Students learn how to control environmental conditions and quickly identify problems.",
        lessons: [
          "Light: stretching, burns, and weak growth",
          "Temperature and humidity",
          "Watering correctly",
          "Air circulation",
          "pH and EC measurements",
        ],
      },
      {
        title: "Flowering stage",
        description:
          "A complete guide to maximizing flower development while avoiding common mistakes.",
        lessons: [
          "Switching to flowering",
          "Stretch and growth control",
          "Feeding during flowering",
          "Mid-flowering: resin, buds, aroma",
          "Diseases and flowering risks",
          "When to harvest",
        ],
      },
      {
        title: "Harvest, drying and curing",
        description:
          "The final stage that determines quality, flavor, aroma, and preservation.",
        lessons: [
          "Harvest: cutting and drying",
          "Curing",
          "Mold during drying and storage",
          "Taste and effect",
          "Course wrap-up",
        ],
      },
    ],
    bonusResources: [
      "How to check local laws before you start",
      "Plant life cycle",
      "How to choose the right grow box",
      "DIY grow box ideas",
      "How to turn a wardrobe into a simple grow box",
      "Plan your grow box",
      "Draw your setup",
      "What seeds should you choose?",
      "How to read a seed product page",
      "What light should you choose?",
      "How a carbon filter works",
      "How to choose a fan",
      "How to choose a pot",
      "What soil should you choose?",
      "2 ways to start a seed",
      "The first days after sprouting",
      "How to transplant your seedling",
      "Read your plant's signals",
      "When to start feeding your plant",
      "Light problems: what to check",
      "Temperature and humidity balance",
      "When to water your plant",
      "Why your plant needs airflow",
      "pH and EC: what beginners need to know",
      "How to switch to flowering",
      "Stretch and growth control",
      "Feeding during flowering",
      "Mid-flowering: resin, buds and aroma",
      "Diseases and risks during flowering",
      "When to harvest",
      "Cut and drying",
      "Curing",
      "Mold prevention",
      "Taste and effect",
    ],
    requirements: [
      "No prior growing experience required",
      "A computer, tablet, or mobile device with internet access",
      "Willingness to learn and practice at your own pace",
    ],
    audience: [
      "Complete beginners planning their very first grow",
      "Home growers who want to stop guessing and follow a proven process",
      "Growers whose first attempts failed and who want to understand why",
      "Anyone curious about cultivation who wants a structured, science-based overview before investing in equipment",
    ],
  },
  {
    slug: "advanced-cannabis-cultivation",
    title: "Pests and Diseases",
    shortDescription:
      "Learn to prevent, identify, and treat the pests, molds, and diseases that threaten your cannabis plants.",
    status: "coming-soon",
  },
  {
    slug: "cannabis-diagnostics",
    title: "Cannabis Nutrition Basics",
    shortDescription:
      "Master nutrients, feeding schedules, and pH so your plants get exactly what they need at every stage.",
    status: "coming-soon",
  },
  {
    slug: "cannabis-genetics",
    title: "Cannabis Genetics",
    shortDescription:
      "Understand the fundamentals of cannabis genetics, phenotypes, and strain selection.",
    status: "coming-soon",
  },
  {
    slug: "cannabis-breeding",
    title: "Cannabis Breeding",
    shortDescription:
      "Explore the principles of breeding, crossbreeding, and developing stable cannabis genetics.",
    status: "coming-soon",
  },
  {
    slug: "post-harvest-mastery",
    title: "Post Harvest Mastery",
    shortDescription:
      "Master drying, curing, and storage techniques to maximize quality and potency after harvest.",
    status: "coming-soon",
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((course) => course.slug === slug);
}

export function getAvailableCourses(): Course[] {
  return courses.filter((course) => course.status === "available");
}
