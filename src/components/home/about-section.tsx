import { CountUp } from "@/components/count-up";
import type { Dictionary } from "@/lib/i18n/dictionaries/en";

export function AboutSection({ dict }: { dict: Dictionary }) {
  const copy = dict.about;

  return (
    <section
      aria-label={copy.ariaLabel}
      className="bg-[#0f1f12] px-5 py-20 sm:px-10 sm:py-28"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-14 text-center" data-reveal>
          <p className="mb-6 inline-block rounded-full border-[0.5px] border-[rgba(168,216,120,0.3)] bg-[rgba(168,216,120,0.12)] px-5 py-2.5 text-[17px] font-medium tracking-[0.06em] text-[#a8d878] uppercase">
            {copy.eyebrow}
          </p>
          <h2 className="mb-6 font-heading text-[36px] leading-[1.15] font-semibold text-white sm:text-[44px]">
            {copy.heading}
          </h2>
          <p className="mx-auto max-w-[720px] text-[18px] leading-[1.6] text-white/60">
            {copy.body}
          </p>
        </div>

        <p
          className="text-center"
          data-reveal
          style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
        >
          <CountUp
            to={32}
            className="block text-[72px] leading-none font-bold text-[#a8d878] sm:text-[96px]"
          />
          <span className="mt-4 block text-[18px] text-white/50">
            {copy.statCaption}
          </span>
        </p>
      </div>
    </section>
  );
}
