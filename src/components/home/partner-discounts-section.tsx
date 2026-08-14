import { CountUp } from "@/components/count-up";
import { PARTNER_SAVINGS_AMD, PRICE_CURRENCY } from "@/lib/pricing";
import type { Dictionary } from "@/lib/i18n/dictionaries/en";

const emojis = ["\u{1F4A1}", "\u{1F331}", "⛺"];

export function PartnerDiscountsSection({ dict }: { dict: Dictionary }) {
  const copy = dict.partners;

  return (
    <section
      aria-label={copy.ariaLabel}
      className="bg-[#1a3320] px-5 py-20 sm:px-10 sm:py-28"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
          <div data-reveal>
            <p className="mb-5 inline-block rounded-full border-[0.5px] border-white/20 bg-white/10 px-5 py-2.5 text-[17px] font-medium tracking-[0.06em] text-white/70 uppercase">
              {copy.eyebrow}
            </p>
            <h2 className="mb-4 font-heading text-[36px] leading-[1.15] font-semibold text-white sm:text-[44px]">
              {copy.heading}
            </h2>
            <p className="mb-8 text-[18px] leading-[1.7] text-white/65">
              {copy.body}
            </p>
            <p>
              <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <CountUp
                  to={PARTNER_SAVINGS_AMD}
                  groupThousands
                  suffix="+"
                  className="font-brand text-[64px] leading-none font-semibold text-[#a8d878] sm:text-[88px]"
                />
                <span className="font-brand text-[28px] leading-none font-semibold text-[#a8d878]/75 sm:text-[36px]">
                  {PRICE_CURRENCY}
                </span>
              </span>
              <span className="mt-4 block max-w-[280px] text-[16px] leading-[1.5] text-white/50">
                {copy.statCaption}
              </span>
            </p>
          </div>

          <ul
            data-reveal
            style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
          >
            {copy.items.map((item, index) => (
              <li
                key={item.title}
                className="group flex items-center gap-5 border-b-[0.5px] border-white/10 py-5 transition-transform duration-300 last:border-b-0 hover:translate-x-1"
              >
                <span
                  aria-hidden
                  className="flex size-13 shrink-0 items-center justify-center rounded-xl border-[0.5px] border-white/10 bg-white/[0.07] text-2xl transition-colors duration-300 group-hover:border-[rgba(168,216,120,0.4)] group-hover:bg-[rgba(168,216,120,0.12)]"
                >
                  {emojis[index]}
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
          <p className="text-center text-[15px] text-white/40">{copy.note}</p>
        </div>
      </div>
    </section>
  );
}
