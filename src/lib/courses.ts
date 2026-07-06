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
      "Learn the science and practice behind growing cannabis successfully. This course walks you through every stage of the plant's life cycle, step by step, so you can grow with confidence instead of guesswork.",
    outcomes: [
      "Understand the cannabis plant's life cycle from seed to harvest",
      "Set up a grow space suited to your budget and available space",
      "Germinate seeds and care for seedlings with confidence",
      "Apply the fundamentals of lighting, nutrients, and watering",
      "Recognize the signs that a plant is ready to move into flowering",
      "Harvest and begin curing your crop the right way",
    ],
    curriculum: [
      {
        title: "Introduction to Cannabis Cultivation",
        lessons: [
          "Understanding the Cannabis Plant",
          "Indoor vs. Outdoor Growing",
          "Setting Realistic Expectations",
        ],
      },
      {
        title: "Setting Up Your Grow Space",
        lessons: [
          "Choosing a Growing Method",
          "Lighting Fundamentals",
          "Ventilation and Climate Control",
        ],
      },
      {
        title: "Germination and Seedling Care",
        lessons: [
          "Germination Techniques",
          "Seedling Stage Essentials",
          "Common Early Mistakes to Avoid",
        ],
      },
      {
        title: "Vegetative Growth",
        lessons: [
          "Nutrient Basics: N-P-K Explained",
          "Watering Best Practices",
          "An Introduction to Training Techniques",
        ],
      },
      {
        title: "The Flowering Stage",
        lessons: [
          "Transitioning to Flower",
          "Light Cycles Explained",
          "Identifying Male vs. Female Plants",
        ],
      },
      {
        title: "Harvest and Curing Fundamentals",
        lessons: [
          "Knowing When to Harvest",
          "Drying Basics",
          "An Introduction to Curing",
        ],
      },
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
