import { COURSE_PRICE_AMD } from "@/lib/pricing";
import type { Course } from "@/lib/types";

/** Source-verified product facts; detailed curriculum awaits live-catalogue review. */
export const coursesEn: Course[] = [
  {
    slug: "basic-cannabis-cultivation",
    title: "Basic Cannabis Cultivation",
    shortDescription: "An introductory online course about cannabis cultivation for beginners.",
    status: "available",
    price: COURSE_PRICE_AMD,
    level: "Beginner",
    format: "English-language video lessons and supporting materials",
    moduleCount: 6,
    instructionLanguage: "en",
    heroDescription: "An introductory online course about cannabis cultivation for beginners.",
    overview: [
      "An introductory online course about cannabis cultivation for beginners.",
      "Six modules with video lessons and supporting learning materials. The primary language of instruction is English.",
      "Digital educational content. No physical products are included in the course purchase."
    ],
    included: [
      "Six course modules",
      "Video lessons",
      "Supporting learning materials"
    ],
    requirements: [
      "An internet-connected device",
      "Ability to follow English-language instruction"
    ],
    audience: [
      "Beginners looking for an introductory course about cannabis cultivation"
    ]
  },
  {
    slug: "pests-and-diseases",
    title: "Pests and Diseases",
    shortDescription:
      "Learn to prevent, identify, and treat the pests, molds, and diseases that threaten indoor plants.",
    status: "coming-soon",
  },
  {
    slug: "plant-nutrition-basics",
    title: "Plant Nutrition Basics",
    shortDescription:
      "Master nutrients, feeding schedules, pH and EC so your plants get exactly what they need at every stage.",
    status: "coming-soon",
  },
  {
    slug: "seed-starting-and-propagation",
    title: "Seed Starting & Propagation",
    shortDescription:
      "Go deeper into germination, seedlings, cuttings, and propagating new plants from the ones you already grow.",
    status: "coming-soon",
  },
  {
    slug: "hydroponics-for-beginners",
    title: "Hydroponics for Beginners",
    shortDescription:
      "Explore soil-free growing — from simple passive systems to nutrient solutions, pH control and root health.",
    status: "coming-soon",
  },
  {
    slug: "harvest-and-storage",
    title: "Harvest and Storage",
    shortDescription:
      "Master harvest timing, handling, drying and storage so nothing you grow indoors goes to waste.",
    status: "coming-soon",
  },
];
