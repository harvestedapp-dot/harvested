import { CountUp } from "@/components/count-up";

const equipmentItems = [
  {
    emoji: "\u{1F4A1}",
    title: "Grow Lights",
    description:
      "Exclusive discounts on LED grow lights from our lighting partners",
  },
  {
    emoji: "\u{1F331}",
    title: "Nutrients & Soil",
    description:
      "Partner codes for premium cannabis nutrients and growing media",
  },
  {
    emoji: "⛺",
    title: "Tents & Equipment",
    description:
      "Discounts on grow tents, fans, filters, and environmental controls",
  },
];

export function PartnerDiscountsSection() {
  return (
    <section
      aria-label="Cannabis grow equipment discounts included with Harvested course"
      className="bg-[#1a3320] px-5 py-20 sm:px-10 sm:py-28"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
          <div data-reveal>
            <p className="mb-5 inline-block rounded-full border-[0.5px] border-white/20 bg-white/10 px-5 py-2.5 text-[17px] font-medium tracking-[0.06em] uppercase text-white/70">
              Exclusive Partner Discounts
            </p>
            <h2 className="mb-4 font-heading text-[36px] leading-[1.15] font-semibold text-white sm:text-[44px]">
              The course pays for itself.
            </h2>
            <p className="mb-8 text-[18px] leading-[1.7] text-white/65">
              Inside every module we&rsquo;ve included exclusive discount codes
              from our equipment partners. Students save an average of $200+ on
              grow lights, nutrients, tents, and more.
            </p>
            <p>
              <CountUp
                to={200}
                prefix="$"
                suffix="+"
                className="block font-heading text-[88px] leading-none font-semibold text-[#a8d878] sm:text-[112px]"
              />
              <span className="mt-4 block max-w-[280px] text-[16px] leading-[1.5] text-white/50">
                average savings on grow equipment for Harvested students
              </span>
            </p>
          </div>

          <ul
            data-reveal
            style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
          >
            {equipmentItems.map((item) => (
              <li
                key={item.title}
                className="group flex items-center gap-5 border-b-[0.5px] border-white/10 py-5 transition-transform duration-300 last:border-b-0 hover:translate-x-1"
              >
                <span
                  aria-hidden
                  className="flex size-13 shrink-0 items-center justify-center rounded-xl border-[0.5px] border-white/10 bg-white/[0.07] text-2xl transition-colors duration-300 group-hover:border-[rgba(168,216,120,0.4)] group-hover:bg-[rgba(168,216,120,0.12)]"
                >
                  {item.emoji}
                </span>
                <span>
                  <h3 className="mb-1 text-[18px] font-medium text-white">
                    {item.title}
                  </h3>
                  <p className="text-[16px] leading-[1.5] text-white/50">
                    {item.description}
                  </p>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 border-t-[0.5px] border-white/10 pt-8">
          <p className="text-center text-[15px] text-white/40">
            Partner discount codes are delivered inside the course modules
            &mdash; available immediately after enrollment.
          </p>
        </div>
      </div>
    </section>
  );
}
