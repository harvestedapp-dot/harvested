import type { Article } from "@/lib/types";

/**
 * Backing data for the /learn guide library. The index page, detail pages,
 * sitemap, and Article JSON-LD all read from this array, so publishing a new
 * guide only requires adding an entry here.
 */
export const articles: Article[] = [
  {
    slug: "how-to-start-seeds-indoors",
    title: "How to Start Seeds Indoors: A Step-by-Step Beginner's Guide",
    excerpt:
      "Germination is the first make-or-break moment of any indoor grow. Learn the paper towel method, direct sowing, and how to avoid the mistakes that kill seeds before they sprout.",
    category: "Seed Starting",
    publishedAt: "2026-07-03",
    readingTime: "6 min read",
    heroImage: {
      src: "https://images.unsplash.com/photo-1779622520933-79b2926a97dd?auto=format&fit=crop&w=1200&h=675&q=80",
      alt: "Tiny seedlings sprouting from soil in a labelled seed tray indoors",
      caption:
        "Seeds sown into a labelled tray — the first hands-on step of every indoor grow.",
    },
    intro: [
      "Every homegrown tomato, basil plant and lettuce head starts with a single germinated seed — and germination is where many first indoor grows quietly fail. Seeds that never crack, roots that snap during transplanting, seedlings that damp off in soggy soil: almost all of these losses are preventable with a little technique.",
      "This guide covers what a seed needs to germinate indoors, the two most reliable methods for beginners, and the early mistakes that cost new growers the most.",
    ],
    sections: [
      {
        heading: "What a seed needs to germinate",
        paragraphs: [
          "A viable seed needs only three things to wake up: moisture, warmth, and — for most common indoor crops — darkness. Water penetrates the seed coat and signals the embryo to start growing; temperatures between roughly 68–80°F (20–27°C) keep that process moving; and until the first root emerges, light plays no useful role.",
          "Notice what's not on the list: nutrients. Seeds carry their own energy reserves for the first stage of life. Adding fertilizer during germination does nothing helpful and can burn the emerging root. (A handful of seeds — lettuce and some herbs among them — germinate better with light, so it's always worth reading the packet.)",
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
          "Check daily and re-moisten if the towels start to dry. Most seeds crack within 2–7 days depending on the crop.",
          "Once the root reaches about half an inch, plant the seed root-down, roughly twice as deep as the seed is wide, in lightly moist medium.",
        ],
      },
      {
        heading: "Method 2: Sowing directly in the medium",
        paragraphs: [
          "Sowing seeds straight into their starting medium skips the riskiest step of the paper towel method: handling a fragile root. Bury the seed in pre-moistened, light seed-starting mix or a starter plug, cover loosely, and keep the surface damp — never waterlogged — until the seedling emerges.",
          "The trade-off is visibility. You won't know whether a seed failed or is simply slow until several days have passed. For beginners with a limited number of seeds, this method is the gentler option; the paper towel method is better when you want certainty fast.",
        ],
        image: {
          src: "https://images.unsplash.com/photo-1776604965126-86eed56418b9?auto=format&fit=crop&w=1200&h=675&q=80",
          alt: "Young tomato seedlings with their first true leaves growing in pots on a windowsill",
          caption:
            "Seedlings that germinated directly in their pots — no fragile root handling required.",
        },
      },
      {
        heading: "The mistakes that kill the most seeds",
        paragraphs: [
          "Nearly every failed germination traces back to one of a handful of errors:",
        ],
        list: [
          "Overwatering — a soaked medium suffocates the seed. Damp, not wet, always.",
          "Touching the root — it's the most fragile tissue in the plant's entire life. Handle seeds by the shell, ideally with clean tweezers.",
          "Planting too deep — a good rule is twice the seed's width; deeper than that and small seeds exhaust their reserves before reaching light.",
          "Cold temperatures — a chilly windowsill in early spring can stall germination entirely. A warm shelf beats a cold sill.",
          "Impatience — peppers can take two weeks. Don't dig seeds up to check on them.",
        ],
      },
      {
        heading: "What comes after germination",
        paragraphs: [
          "Once your seedling breaks the surface and opens its first pair of seed leaves, it enters the seedling stage — a period with its own rules for light, watering, and humidity. Light matters immediately here: without enough of it, seedlings stretch into pale, floppy stems within days.",
          "Getting those fundamentals right in order is exactly what a structured course is for: germination is lesson one of many, and each stage builds on the last.",
        ],
        image: {
          src: "https://images.unsplash.com/photo-1781231079074-7a5538b512b6?auto=format&fit=crop&crop=entropy&w=1200&h=675&q=80",
          alt: "Close-up of young seedlings growing in a seed tray under indoor lighting",
          caption:
            "A few weeks after germination: the seedling stage, where light and watering rules take over.",
        },
      },
    ],
  },
  {
    slug: "grow-lights-for-indoor-plants",
    title: "Grow Lights Explained: Intensity, Distance and Hours",
    excerpt:
      "Light is the single most important input in indoor growing. Understand how much light your plants need, how far to hang the lamp, how long to run it, and the light mistakes that ruin healthy plants.",
    category: "Light & Environment",
    publishedAt: "2026-07-03",
    readingTime: "7 min read",
    heroImage: {
      src: "https://images.unsplash.com/photo-1783759935182-6317f3988b0f?auto=format&fit=crop&crop=entropy&w=1200&h=675&q=80",
      alt: "Young plants growing indoors under a bright pink LED grow light",
      caption:
        "Indoors, your lamp and timer play the role of the sun — and the seasons.",
    },
    intro: [
      "Indoors, you are the weather. Nothing you control matters more than light: it powers photosynthesis, sets the pace of growth, and decides whether a seedling turns stocky and green or pale and stretched.",
      "This guide explains the three numbers that actually matter — intensity, distance and duration — plus the light problems beginners run into and how to read them off the plant itself.",
    ],
    sections: [
      {
        heading: "A windowsill is rarely as bright as it looks",
        paragraphs: [
          "Human eyes adapt so well that a room that feels bright to you can be nearly dark to a plant. Outdoor midday sun is enormously more intense than the light a few feet inside a window, and light falls off sharply with distance from the glass.",
          "That's why herbs on a windowsill often survive but never thrive, and why a modest LED grow light usually outperforms the sunniest sill in a home. Leafy greens and herbs are the most forgiving; fruiting plants like tomatoes, peppers and strawberries need considerably more light to actually set fruit.",
        ],
      },
      {
        heading: "Intensity: how much light your plants get",
        paragraphs: [
          "Intensity is how much usable light lands on the leaves. Watts on the box tell you what the lamp consumes, not what your plant receives — two lamps with the same wattage can deliver very different results.",
          "As a practical rule of thumb for beginners: leafy greens and herbs are happy with modest light, while fruiting crops want as much as you can reasonably give them. Rather than chasing numbers, watch the plant — it reports the result of your setup better than any spec sheet.",
        ],
        image: {
          src: "https://images.unsplash.com/photo-1784601758625-9dcefc5a2b71?auto=format&fit=crop&w=1200&h=675&q=80",
          alt: "Rows of lettuce and leafy greens growing indoors on vertical racks under artificial light",
          caption:
            "Compact, deep-green growth is the sign that intensity and distance are about right.",
        },
      },
      {
        heading: "Distance: the setting people get wrong most often",
        paragraphs: [
          "Light intensity drops sharply as the lamp moves away from the canopy — halve the distance and the plant receives dramatically more light. That makes lamp height the fastest, cheapest adjustment in your whole setup.",
          "Too far and plants stretch: long gaps between leaves, thin stems, seedlings that lean and fall over. Too close and you see bleaching, curled or taco-shaped leaves, and crispy edges on the tips nearest the lamp. Start with the manufacturer's recommended distance, then let the plant's response move the lamp up or down an inch at a time.",
        ],
      },
      {
        heading: "Duration: how many hours to run the light",
        paragraphs: [
          "Most common indoor crops do well with roughly 12–16 hours of light per day, and they genuinely need the dark period — plants use the night to move sugars around and grow. Running lights 24 hours a day is not a shortcut; for many plants it causes stress rather than faster growth.",
          "A cheap mechanical or smart timer is one of the highest-value purchases in indoor growing. Consistency matters more than perfection: the same hours, every day, beats an irregular schedule you keep adjusting by hand.",
        ],
        list: [
          "Seedlings and leafy greens: around 14–16 hours is a comfortable starting point.",
          "Herbs: 12–16 hours, depending on how fast you want them to fill in.",
          "Fruiting plants: long, bright days plus a genuine dark period every night.",
          "Flowering houseplants: some are day-length sensitive — check the specific species before changing their schedule.",
        ],
      },
      {
        heading: "Reading light problems off the plant",
        paragraphs: [
          "Your plants tell you what's wrong with the light long before they die of it. Watch for these:",
        ],
        list: [
          "Long, bare stems with widely spaced leaves — not enough light, or the lamp is too far away.",
          "Seedlings leaning hard toward a window — light is arriving from one side only; rotate the pot or add a lamp.",
          "Pale, washed-out or bleached patches on the top leaves — too much intensity, or the lamp is too close.",
          "Leaves curling upward or edges going crispy right under the lamp — heat and light stress; raise the fixture.",
          "Healthy growth that suddenly stalls — check whether the timer failed before you start changing nutrients.",
        ],
      },
      {
        heading: "Light is one piece of a bigger system",
        paragraphs: [
          "Light interacts with everything else in your indoor garden: more light means more water use, higher nutrient demand, and more heat to manage with airflow. Turning one dial without watching the others is how beginners chase problems in circles.",
          "Understanding each piece in sequence — rather than patching knowledge together from forum threads — is the difference between a stressful first grow and a confident one.",
        ],
      },
    ],
  },
  {
    slug: "how-to-water-indoor-plants",
    title: "How to Water Indoor Plants: Overwatering, Drainage and Timing",
    excerpt:
      "Overwatering kills more indoor plants than any pest. Learn how to tell when a plant actually needs water, how much to give, and why drainage matters more than schedules.",
    category: "Watering",
    publishedAt: "2026-07-03",
    readingTime: "6 min read",
    heroImage: {
      src: "https://images.unsplash.com/photo-1691290123815-cba16d4ed917?auto=format&fit=crop&crop=entropy&w=1200&h=675&q=80",
      alt: "Watering a healthy leafy houseplant indoors with a small white watering can",
      caption:
        "Water the substrate, not the calendar: the medium tells you when it's time.",
    },
    intro: [
      "Ask any experienced grower what kills the most beginner plants and the answer is rarely pests or disease — it's water. Specifically, too much of it, too often, in pots that can't drain.",
      "The good news: watering stops being guesswork the moment you stop watering on a schedule and start reading the substrate instead.",
    ],
    sections: [
      {
        heading: "Why overwatering is so dangerous",
        paragraphs: [
          "Roots need oxygen as much as they need water. Soil holds air in the gaps between its particles, and when those gaps stay filled with water, roots effectively suffocate. Constantly wet roots then rot, which is when the plant finally shows symptoms above the surface.",
          "The cruel twist: an overwatered plant droops, exactly like a thirsty one. Beginners see the droop, add more water, and speed up the collapse. Before you reach for the watering can, always check the medium first.",
        ],
      },
      {
        heading: "How to tell when a plant actually needs water",
        paragraphs: [
          "You don't need a moisture meter. Three simple checks tell you almost everything:",
        ],
        list: [
          "The finger test — push a finger 1–2 inches into the substrate. Dry at that depth for most plants means it's time; still damp means wait.",
          "Pot weight — lift the pot after watering and again a few days later. The difference between heavy and light becomes obvious fast.",
          "Surface colour — dry soil goes pale and pulls slightly away from the pot edge, though the top can look dry while the root zone is still wet.",
          "The plant itself — a slight droop just before watering is normal; a droop in wet soil is a warning sign, not thirst.",
        ],
      },
      {
        heading: "How much to give, and how",
        paragraphs: [
          "When you water, water thoroughly: pour slowly and evenly across the whole surface until water runs out of the drainage holes. Light, frequent sips wet only the top layer and encourage shallow roots that dry out constantly.",
          "Then let the excess drain away completely and empty the saucer. A pot standing in a puddle is an overwatered pot, however carefully you measured the water going in.",
        ],
        image: {
          src: "https://images.unsplash.com/photo-1638777922445-b17e22c87e70?auto=format&fit=crop&w=1200&h=675&q=80",
          alt: "Three potted herb plants standing together on a drainage tray indoors",
          caption:
            "Drainage holes plus an emptied saucer do more for root health than any watering schedule.",
        },
      },
      {
        heading: "Drainage and substrate do half the work",
        paragraphs: [
          "A pot without drainage holes makes overwatering almost inevitable — there is nowhere for excess water to go, so it sits at the bottom around the roots. Decorative pots are best used as outer covers for a plain nursery pot that drains freely.",
          "Substrate matters just as much. Dense, heavy soil stays wet for days; a light, airy mix with perlite or coco drains quickly and refills with air. Pot size counts too: a small seedling in a huge pot sits in wet substrate it can't use, which is why growers pot up gradually.",
        ],
      },
      {
        heading: "Reading the signals",
        paragraphs: [
          "Water problems announce themselves clearly once you know the pattern:",
        ],
        list: [
          "Yellowing lower leaves plus consistently damp soil — overwatering.",
          "Drooping that recovers within an hour of watering — genuine thirst.",
          "Drooping in wet soil, sometimes with a sour smell — root rot; let it dry out and check the roots.",
          "Crispy brown leaf edges with bone-dry, shrunken substrate — underwatering.",
          "Fungus gnats hovering around the pot — the surface is staying wet too long.",
        ],
      },
      {
        heading: "Watering connects to everything else",
        paragraphs: [
          "How often a plant drinks depends on light intensity, temperature, humidity, airflow, pot size and how big the plant has grown. That's why fixed schedules fail: the same plant might need water twice a week in winter and every day under strong light in summer.",
          "Learning to read the whole system — rather than following a rule someone posted online — is what a structured course is for, and watering is one of its most important lessons.",
        ],
      },
    ],
  },
  {
    slug: "ph-and-ec-for-beginners",
    title: "pH and EC Explained: Feeding Indoor Plants with Confidence",
    excerpt:
      "pH decides which nutrients your plants can actually absorb, and EC tells you how strong your feed is. Learn what both numbers mean, when they matter, and how to use them without turning gardening into chemistry.",
    category: "Nutrients",
    publishedAt: "2026-07-03",
    readingTime: "7 min read",
    heroImage: {
      src: "https://images.unsplash.com/photo-1778035121136-ecaefa3cac8f?auto=format&fit=crop&w=1200&h=675&q=80",
      alt: "Potted plant with a measuring indicator beside bottles of plant nutrients",
      caption:
        "Two cheap meters remove most of the guesswork from feeding indoor plants.",
    },
    intro: [
      "Sooner or later every indoor grower meets a plant with yellowing leaves that gets fed more, and more, and only gets worse. Nine times out of ten the nutrients were there all along — the plant simply couldn't take them up.",
      "That's what pH and EC are for. They're two simple readings that turn feeding from guesswork into something you can actually check.",
    ],
    sections: [
      {
        heading: "What pH actually means for your plants",
        paragraphs: [
          "pH measures how acidic or alkaline your water or substrate is, on a scale from 0 to 14, where 7 is neutral. Plants don't care about the number for its own sake — they care because pH controls which nutrients their roots can absorb.",
          "Push the pH too far in either direction and specific nutrients become chemically locked out, even though they're physically present in the pot. The plant shows a deficiency, the grower adds more fertilizer, and the problem gets worse instead of better.",
        ],
        list: [
          "Most plants in soil are happiest roughly between pH 6.0 and 7.0.",
          "Soilless mixes and hydroponic setups usually run slightly lower, around 5.5–6.5.",
          "Tap water is often alkaline; a cheap pH pen tells you where you're starting from.",
          "Correct pH with proper pH-up/pH-down products rather than kitchen remedies, which are unstable.",
        ],
      },
      {
        heading: "What EC tells you",
        paragraphs: [
          "EC — electrical conductivity — measures how many dissolved salts are in your water or nutrient solution. In practice, it's a strength reading: the higher the EC, the more concentrated the feed.",
          "EC doesn't tell you which nutrients are present, only how much total nutrition is dissolved. That's still enormously useful: it stops you feeding a delicate seedling the same strength solution as a heavy-fruiting tomato plant, which is one of the classic ways beginners burn young plants.",
        ],
        image: {
          src: "https://images.unsplash.com/photo-1536525357611-52585cdf7eaa?auto=format&fit=crop&w=1200&h=675&q=80",
          alt: "Hand pouring a liquid feed onto a potted plant indoors",
          caption:
            "Mix, measure, then feed — checking strength takes seconds and prevents nutrient burn.",
        },
      },
      {
        heading: "When measuring is actually worth it",
        paragraphs: [
          "You don't need meters to grow basil on a windowsill. They start earning their keep the moment you're feeding regularly, growing in a soilless mix, or troubleshooting a plant that isn't responding to care.",
          "A practical approach for beginners: measure your tap water once so you know your baseline, then check pH and EC whenever you mix a feed. That habit alone prevents most nutrient problems people spend weeks chasing.",
        ],
      },
      {
        heading: "Feeding without overdoing it",
        paragraphs: [
          "Seeds carry their own food, so young seedlings need nothing but water and light at first. Feeding starts gently once the first true leaves appear — typically at a fraction of the strength printed on the bottle — and increases gradually as the plant grows.",
          "Less is safer than more. Underfed plants recover within days of a feed; overfed plants can suffer root damage that takes weeks to grow out of, if they recover at all.",
        ],
        list: [
          "Start at roughly a quarter to half of the label strength for young plants.",
          "Feed on a schedule you can observe — then adjust based on the plant's response, not the calendar.",
          "Flush the substrate with plain, pH-corrected water if you see salt crust or signs of nutrient burn.",
          "Change one variable at a time so you know what actually worked.",
        ],
      },
      {
        heading: "Numbers support observation — they don't replace it",
        paragraphs: [
          "Meters are a diagnostic tool, not the goal. The best growers still make their first judgement with their eyes: leaf colour, new growth, how the plant holds itself. pH and EC then confirm or rule out a cause, quickly and cheaply.",
          "That combination — careful observation backed by two simple measurements — is exactly the process a structured course teaches, stage by stage, so feeding stops feeling like chemistry and starts feeling like gardening.",
        ],
      },
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}
