import { COURSE_PRICE_AMD } from "@/lib/pricing";
import type { Course } from "@/lib/types";

/** English course catalogue. Slugs are shared across locales. */
export const coursesEn: Course[] = [
  {
    slug: "indoor-growing-for-beginners",
    title: "Indoor Growing for Beginners",
    shortDescription:
      "A complete foundation in indoor gardening, from seed to harvest, built for absolute beginners.",
    status: "available",
    price: COURSE_PRICE_AMD,
    level: "Beginner",
    duration: "6-8 hours of self-paced lessons",
    format: "On-demand video lessons and downloadable guides",
    heroDescription:
      "Indoor Growing for Beginners is a structured, step-by-step program for people who have never grown anything before. It takes you from understanding what plants actually need and setting up your first indoor grow space, all the way to flowering, fruiting and harvest.",
    overview: [
      "Indoor Growing for Beginners is a structured, step-by-step program for people who have never grown anything before. It takes you from understanding what plants actually need and setting up your first indoor grow space, all the way to flowering, fruiting and harvest.",
      "The course combines 32 structured video lessons with practical learning resources that help you apply every concept to real plants — herbs, leafy greens, tomatoes, peppers, strawberries or flowering houseplants.",
    ],
    included: [
      "6 comprehensive modules",
      "32 step-by-step lessons",
      "Downloadable checklists",
      "Visual diagrams and cheat sheets",
      "Practical indoor growing guides",
      "Reference materials for every stage",
      "Actionable tips and common mistake prevention",
      "Lifetime access",
      "Future course updates",
    ],
    outcomes: [
      "Understand the complete plant life cycle",
      "Build and organize an indoor grow space",
      "Choose suitable equipment, plants and seeds",
      "Create stable temperature, humidity and airflow",
      "Water and feed your plants correctly",
      "Recognize nutrient deficiencies and environmental problems",
      "Measure and understand pH and EC",
      "Prevent the mistakes that kill most first plants",
      "Carry plants through flowering and fruiting",
      "Harvest at the right time and plan your next grow",
    ],
    curriculum: [
      {
        title: "Before you start — what indoor growing really involves",
        description:
          "This module helps beginners understand what growing plants indoors actually takes before buying any equipment or seeds.",
        lessons: [
          "Welcome to indoor growing",
          "Time, cost and effort: a realistic look at your first indoor grow",
          "Choosing the right spot in your home",
          "Before you start: what plants actually need",
        ],
      },
      {
        title: "Getting ready for your first indoor grow",
        description:
          "Students learn how to prepare the entire indoor setup before planting a single seed.",
        lessons: [
          "How a plant grows: from seed to harvest",
          "Choosing plants and seeds for indoor growing",
          "Grow space: tent, cabinet, shelf or windowsill",
          "How to choose lighting for indoor growing",
          "Ventilation, fans and warm air",
          "Soil, substrate, pots and water",
          "Everything you need to buy and set up",
        ],
      },
      {
        title: "From germination to the first feeding",
        description:
          "Everything needed for healthy development from a germinating seed to a young, growing plant.",
        lessons: [
          "Germination: proven methods and common mistakes",
          "The first days after sprouting",
          "First pot, soil and transplanting your seedling",
          "Learning to read your plant's signals",
          "When and how to start feeding your plant",
        ],
      },
      {
        title: "Managing your indoor environment",
        description:
          "Students learn how to control growing conditions indoors and quickly identify problems.",
        lessons: [
          "Light: intensity, distance, duration and common problems",
          "Temperature and humidity",
          "Watering correctly",
          "Air movement and circulation",
          "pH and EC measurements",
        ],
      },
      {
        title: "Flowering, fruiting and plant health",
        description:
          "A complete guide to carrying plants through flowering and fruiting while avoiding common mistakes.",
        lessons: [
          "The switch to flowering and fruiting",
          "Growth control, training and supporting branches",
          "Feeding in the late stages",
          "Pollination and fruit set indoors",
          "Pests, diseases and mold",
          "Environmental stress: spotting it and fixing it",
        ],
      },
      {
        title: "Harvest and learning from your grow",
        description:
          "The final stage: knowing when plants are ready, harvesting well, and turning one grow into the next.",
        lessons: [
          "Knowing when your plants are ready",
          "Harvesting herbs, greens, fruit and flowers",
          "Keeping your harvest fresh and storing it well",
          "Your grow journal: learning from what went wrong",
          "Course wrap-up: planning your next grow",
        ],
      },
    ],
    bonusResources: [
      "Plant life cycle at a glance",
      "How to pick the right spot in your home",
      "How to choose a grow tent or cabinet",
      "DIY indoor grow space ideas",
      "How to turn a shelf into a simple grow space",
      "Plan your grow space",
      "Draw your setup",
      "Which plants are easiest to grow indoors?",
      "How to read a seed packet",
      "What light should you choose?",
      "How grow light distance works",
      "How to choose a fan",
      "How to choose a pot",
      "What soil or substrate should you choose?",
      "2 ways to start a seed",
      "The first days after sprouting",
      "How to transplant your seedling",
      "Read your plant's signals",
      "When to start feeding your plant",
      "Light problems: what to check",
      "Temperature and humidity balance",
      "When to water your plant",
      "Overwatering vs. underwatering",
      "Why your plant needs airflow",
      "pH and EC: what beginners need to know",
      "How to test your water",
      "Nutrient deficiency chart",
      "Training and supporting your plants",
      "Feeding during flowering and fruiting",
      "Hand pollination indoors",
      "Common indoor pests and how to stop them",
      "Mold and humidity control",
      "When to harvest",
      "Your grow journal template",
    ],
    requirements: [
      "No prior growing experience required",
      "A computer, tablet, or mobile device with internet access",
      "Willingness to learn and practice at your own pace",
    ],
    audience: [
      "Complete beginners planning their very first indoor grow",
      "Home growers who want to stop guessing and follow a proven process",
      "People whose first plants died and who want to understand why",
      "Anyone curious about indoor gardening who wants a structured overview before investing in equipment",
    ],
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
