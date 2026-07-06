import type { Article } from "@/lib/types";

/**
 * Backing data for the /learn guide library. The index page, detail pages,
 * sitemap, and Article JSON-LD all read from this array, so publishing a new
 * guide only requires adding an entry here.
 */
export const articles: Article[] = [
  {
    slug: "how-to-germinate-cannabis-seeds",
    title: "How to Germinate Cannabis Seeds: A Step-by-Step Beginner's Guide",
    excerpt:
      "Germination is the first make-or-break moment of any grow. Learn the paper towel method, direct planting, and how to avoid the mistakes that kill seeds before they sprout.",
    category: "Germination",
    publishedAt: "2026-07-03",
    readingTime: "6 min read",
    intro: [
      "Every successful harvest starts with a single germinated seed — and germination is where many first grows quietly fail. Seeds that never crack, taproots that snap during transplanting, seedlings that damp off in soggy soil: almost all of these losses are preventable with a little technique.",
      "This guide covers what a cannabis seed needs to germinate, the two most reliable methods for beginners, and the early mistakes that cost new growers the most.",
    ],
    sections: [
      {
        heading: "What a cannabis seed needs to germinate",
        paragraphs: [
          "A viable cannabis seed needs only three things to wake up: moisture, warmth, and darkness. Water penetrates the shell and signals the embryo to start growing; temperatures between roughly 70–85°F (21–29°C) keep that process moving; and until the taproot emerges, light plays no useful role.",
          "Notice what's not on the list: nutrients. Seeds carry their own energy reserves for the first stage of life. Adding fertilizer during germination does nothing helpful and can burn the emerging taproot.",
        ],
      },
      {
        heading: "Method 1: The paper towel method",
        paragraphs: [
          "The paper towel method is popular for a reason — it lets you see exactly what's happening, so you never waste weeks waiting on a dud seed.",
        ],
        list: [
          "Moisten two paper towels so they're damp but not dripping.",
          "Place your seeds on one towel, spaced an inch apart, and cover with the second.",
          "Slide the towels between two plates (or into an open zip bag) to hold humidity.",
          "Keep them somewhere warm and dark — the top of a refrigerator works well.",
          "Check daily and re-moisten if the towels start to dry. Most seeds crack within 24–72 hours; some take up to a week.",
          "Once the taproot reaches about half an inch, plant the seed root-down, about half an inch deep, in lightly moist medium.",
        ],
      },
      {
        heading: "Method 2: Planting directly in the medium",
        paragraphs: [
          "Planting seeds straight into their starting medium skips the riskiest step of the paper towel method: handling a fragile taproot. Bury the seed about half an inch deep in pre-moistened, light soil or a starter plug, cover loosely, and keep the surface damp — never waterlogged — until the seedling emerges.",
          "The trade-off is visibility. You won't know whether a seed failed or is simply slow until several days have passed. For beginners with a limited number of seeds, this method is the gentler option; the paper towel method is better when you want certainty fast.",
        ],
      },
      {
        heading: "The mistakes that kill the most seeds",
        paragraphs: [
          "Nearly every failed germination traces back to one of a handful of errors:",
        ],
        list: [
          "Overwatering — a soaked medium suffocates the seed. Damp, not wet, always.",
          "Touching the taproot — it's the most fragile tissue in the plant's entire life. Handle seeds by the shell, ideally with clean tweezers.",
          "Planting too deep — deeper than an inch and many seedlings exhaust their reserves before reaching light.",
          "Cold temperatures — a chilly windowsill in early spring can stall germination entirely.",
          "Impatience — some perfectly healthy seeds take 7–10 days. Don't dig them up to check.",
        ],
      },
      {
        heading: "What comes after germination",
        paragraphs: [
          "Once your seedling breaks the surface and opens its first round cotyledon leaves, it enters the seedling stage — a period with its own rules for light, watering, and humidity. Getting those fundamentals right is exactly what a structured course is for: germination is lesson one of many, and each stage builds on the last.",
        ],
      },
    ],
  },
  {
    slug: "cannabis-light-cycles-explained",
    title: "Cannabis Light Cycles Explained: 18/6, 12/12, and When to Switch",
    excerpt:
      "Light is the single most important input in cannabis cultivation. Understand photoperiods, why 12/12 triggers flowering, and the light mistakes that ruin otherwise healthy grows.",
    category: "Vegetative Growth",
    publishedAt: "2026-07-03",
    readingTime: "7 min read",
    intro: [
      "Cannabis is a photoperiod plant: it decides when to grow and when to flower based on how many hours of uninterrupted darkness it receives. That single fact explains most of what indoor growers do with their lights — and most of what goes wrong when a grow stalls or flowers too early.",
      "This guide explains the standard light cycles, what actually happens inside the plant when you change them, and how to avoid the light-related mistakes that cost beginners entire harvests.",
    ],
    sections: [
      {
        heading: "Why darkness, not light, controls flowering",
        paragraphs: [
          "It feels intuitive that more light equals more growth, but the flowering switch works the other way around. Cannabis measures the length of its nights. When darkness stretches past roughly 12 continuous hours, hormonal changes tell the plant that autumn is coming — time to reproduce, which for growers means time to produce buds.",
          "This is why indoor growers speak in ratios: 18/6 means eighteen hours of light and six of darkness, while 12/12 means an even split. It's also why a single light leak during the dark period can confuse a flowering plant badly enough to stress it back toward vegetative growth.",
        ],
      },
      {
        heading: "18/6 — the vegetative standard",
        paragraphs: [
          "During vegetative growth, most indoor growers run 18 hours of light and 6 of darkness. Long days keep the plant firmly in growth mode, building the roots, stems, and fan leaves that will later support heavy flowers.",
          "Some growers run 20/4 or even 24/0 to push faster growth, but 18/6 remains the beginner-friendly default: plants get a genuine rest period, electricity costs stay manageable, and heat is easier to control.",
        ],
      },
      {
        heading: "12/12 — the flowering trigger",
        paragraphs: [
          "Switching your timer to 12 hours on, 12 hours off is how indoor growers start flowering on demand. Within one to three weeks, plants show their sex and begin developing buds. From that point, the dark period is sacred: even brief interruptions from an unsealed tent zipper, an equipment LED, or an impatient peek with a flashlight can cause stress, delayed flowering, or hermaphroditism.",
          "Outdoors, nature moves the switch for you — plants begin flowering as nights lengthen in late summer. That's also why growing outdoors requires planning around your local season rather than a timer.",
        ],
      },
      {
        heading: "When should you switch?",
        paragraphs: [
          "There's no single right answer — plants roughly double in height during the flowering stretch, so the real question is how much finished height your space can handle. As a rule of thumb, beginners in a standard grow tent flip to 12/12 when plants reach about half of the height they can accommodate.",
          "Time matters too: most growers vegetate indoor plants for 4–8 weeks. Shorter veg means smaller plants and faster harvests; longer veg means bigger yields per plant but more time, water, and risk.",
        ],
      },
      {
        heading: "Common light cycle mistakes",
        paragraphs: ["Watch for these — each one is easily avoided:"],
        list: [
          "Light leaks during the dark period, the classic cause of stressed or hermaphroditic flowering plants.",
          "Cheap timers that drift or fail — a stuck timer can silently re-veg a flowering crop.",
          "Switching to 12/12 too late and running out of vertical space during the stretch.",
          "Forgetting that autoflowering strains ignore photoperiods entirely — they flower on age, not darkness, and are usually run at 18/6 from seed to harvest.",
        ],
      },
      {
        heading: "Light cycles are one piece of a bigger system",
        paragraphs: [
          "Photoperiod interacts with everything else in your grow: light intensity and distance, nutrient demands that change at the flip, training techniques that have to finish before stretch begins. Understanding each piece in sequence — rather than patching knowledge together from forum threads — is the difference between a stressful first grow and a confident one.",
        ],
      },
    ],
  },
  {
    slug: "when-to-harvest-cannabis",
    title: "When to Harvest Cannabis: Reading Trichomes and Pistils",
    excerpt:
      "Harvest a week early and you lose potency; a week late and the effect changes entirely. Learn to read trichomes and pistils so you pick the right window every time.",
    category: "Harvest",
    publishedAt: "2026-07-03",
    readingTime: "6 min read",
    intro: [
      "After months of care, the harvest decision comes down to a window of about one to two weeks. Cut too early and the buds haven't reached full potency; wait too long and the chemical profile shifts toward a heavier, sleepier effect with degraded THC.",
      "The good news: the plant tells you exactly when it's ready. You just need to know where to look — and a cheap magnifier to look with.",
    ],
    sections: [
      {
        heading: "Trichomes: the most reliable signal",
        paragraphs: [
          "Trichomes are the tiny, mushroom-shaped resin glands that coat mature buds and give them their frosty appearance. They're where cannabinoids are produced, and their color under magnification is the most accurate ripeness gauge available to a home grower.",
          "Using a 30–60x jeweler's loupe or a macro phone lens, check the trichomes on several buds — not just the top cola — and read them like this:",
        ],
        list: [
          "Clear trichomes — too early. Cannabinoid production is still ramping up.",
          "Mostly cloudy/milky — peak THC. Harvesting now gives the most potent, energetic effect profile.",
          "Cloudy with 10–30% amber — the classic harvest window for a balanced effect. This is where most growers aim.",
          "Majority amber — past peak. THC is degrading into CBN; expect a heavier, more sedative result.",
        ],
      },
      {
        heading: "Pistils: the quick visual check",
        paragraphs: [
          "Pistils — the hair-like strands covering the buds — offer a rougher signal you can read without magnification. Early in flower they're white and stand straight out. As the plant matures they darken to orange-brown and curl inward.",
          "A common rule of thumb: when 70–90% of pistils have darkened and curled, the plant is in or near its harvest window. Use pistils to know when to start checking trichomes, not as the final word — environmental stress can darken pistils early and mislead you.",
        ],
      },
      {
        heading: "Other signs the window is close",
        paragraphs: [
          "A few supporting signals tend to arrive alongside ripeness:",
        ],
        list: [
          "Fan leaves begin yellowing and dropping as the plant pulls stored nutrients into the buds.",
          "Bud growth stops swelling and calyxes look fully inflated.",
          "Aroma peaks — the terpene profile is at its strongest just before harvest.",
          "Breeder flowering times (e.g. \"8–9 weeks\") come due — treat these as an estimate that tells you when to start inspecting, not when to cut.",
        ],
      },
      {
        heading: "The most common harvest-timing mistakes",
        paragraphs: [
          "Impatience is the number one killer of otherwise excellent grows. After months of waiting, the urge to chop at the first sign of ripeness is strong — but a week of patience at the end can be the difference between mediocre and exceptional results.",
          "The second mistake is judging the whole plant by its top cola. Buds lower on the plant ripen days later than the tops. Some growers even harvest in two passes: tops first, lower buds a week later once they've caught up.",
        ],
      },
      {
        heading: "Harvest is only half the job",
        paragraphs: [
          "Cutting the plant at the perfect moment only pays off if you dry and cure it properly afterward — rush that stage and you can undo months of careful work in three days. Drying and curing deserve their own guide, and their own module in any serious cultivation course.",
        ],
      },
    ],
  },
  {
    slug: "how-to-dry-and-cure-cannabis",
    title: "How to Dry and Cure Cannabis: Preserving Quality After Harvest",
    excerpt:
      "Drying and curing determine whether a perfect harvest stays perfect. Learn the right temperature, humidity, and timeline — and why rushing this stage ruins more crops than any pest.",
    category: "Post-Harvest",
    publishedAt: "2026-07-03",
    readingTime: "7 min read",
    intro: [
      "More quality is lost in the two weeks after harvest than in any other stage of cultivation. A grower can do everything right for four months and still end up with harsh, hay-smelling buds — because drying and curing are where aroma, smoothness, and shelf life are actually decided.",
      "The process isn't difficult, but it punishes shortcuts. Here's how it works and how to get it right the first time.",
    ],
    sections: [
      {
        heading: "Why drying and curing matter",
        paragraphs: [
          "Freshly harvested cannabis is roughly 75–80% water. Drying removes most of that moisture slowly enough that the plant's enzymes can break down chlorophyll and sugars — the compounds responsible for the harsh, grassy taste of badly finished buds.",
          "Curing continues that chemical refinement in a controlled, slightly humid environment. Terpenes stabilize, remaining chlorophyll degrades, and the final aroma develops. Skip the cure and even well-grown flower tastes unfinished.",
        ],
      },
      {
        heading: "How to dry: slow and controlled",
        paragraphs: [
          "The goal is a slow, even dry over 7–14 days. Faster than that and you're trapping chlorophyll and evaporating terpenes; slower risks mold.",
        ],
        list: [
          "Hang whole branches (or lay trimmed buds on drying racks) in a dark room or tent.",
          "Hold the environment near 60°F (15–16°C) and 55–60% relative humidity.",
          "Keep air gently circulating with a fan pointed at a wall — never directly at the buds.",
          "Keep the space dark; light degrades THC.",
          "Test readiness with the snap test: small stems should snap rather than bend, typically after 7–14 days.",
        ],
      },
      {
        heading: "How to cure: patience in a jar",
        paragraphs: [
          "Once stems snap, trim the buds and place them loosely into airtight glass jars, filled about three-quarters full. Store the jars in a cool, dark place at roughly 58–62% relative humidity — small hygrometers that fit inside jars remove all the guesswork.",
          "For the first week, open each jar once or twice a day for a few minutes. This 'burping' releases moisture and replenishes oxygen. After that, burp every few days. A minimum cure is two weeks; most connoisseur growers cure four to eight, and the improvement in smoothness and aroma is unmistakable.",
        ],
      },
      {
        heading: "Warning signs to catch early",
        paragraphs: ["Check jars daily in the first week for these red flags:"],
        list: [
          "An ammonia smell when opening a jar — buds were jarred too wet and anaerobic bacteria are at work. Remove and re-dry immediately.",
          "Humidity readings above 65% — leave jars open for a few hours, then re-seal and re-check.",
          "Buds that feel crispy and read below 55% — the cure has stalled; a small humidity pack can rescue it.",
          "Any visible white fuzz — mold. Inspect closely and discard affected buds; mold is not worth the risk.",
        ],
      },
      {
        heading: "The finish line — and the full picture",
        paragraphs: [
          "Properly dried and cured cannabis, stored in sealed glass away from light and heat, keeps its quality for many months. Getting there consistently is a matter of process, not luck — the same environment targets, the same timeline, the same checks, every harvest.",
          "That process mindset is exactly what separates structured cultivation education from scattered internet advice: every stage, from germinating a seed to sealing a cured jar, done deliberately and in order.",
        ],
      },
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}
