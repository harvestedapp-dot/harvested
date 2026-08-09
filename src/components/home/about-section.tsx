import { CountUp } from "@/components/count-up";

export function AboutSection() {
  return (
    <section
      aria-label="Why most first indoor plants fail and how Harvested fixes it"
      className="bg-[#0f1f12] px-5 py-20 sm:px-10 sm:py-28"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-14 text-center" data-reveal>
          <p className="mb-6 inline-block rounded-full border-[0.5px] border-[rgba(168,216,120,0.3)] bg-[rgba(168,216,120,0.12)] px-5 py-2.5 text-[17px] font-medium tracking-[0.06em] text-[#a8d878] uppercase">
            Online Indoor Gardening Education
          </p>
          <h2 className="mb-6 font-heading text-[36px] leading-[1.15] font-semibold text-white sm:text-[44px]">
            Most first indoor plants die. Here&rsquo;s how we fix that.
          </h2>
          <p className="mx-auto max-w-[720px] text-[18px] leading-[1.6] text-white/60">
            The problem is not hard work &mdash; it&rsquo;s scattered advice.
            Tips arrive in no clear order, so beginners overwater, under-light
            and overfeed their way through a first grow. A step-by-step course
            fixes that.
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
            structured lessons, in the right order &mdash; instead of a hundred
            contradictory tips
          </span>
        </p>
      </div>
    </section>
  );
}
