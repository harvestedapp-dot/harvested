export function AboutSection() {
  return (
    <section
      aria-label="Why most cannabis growers fail and how Harvested fixes it"
      className="bg-[#0f1f12] px-10 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-14 text-center">
          <p className="mb-6 inline-block rounded-full border-[0.5px] border-[rgba(168,216,120,0.3)] bg-[rgba(168,216,120,0.12)] px-4 py-1.5 text-[14px] font-semibold tracking-[0.06em] text-[#a8d878] uppercase">
            Online Cannabis Education
          </p>
          <h2 className="mb-6 font-heading text-[36px] leading-[1.15] font-semibold text-white sm:text-[44px]">
            Most new cannabis growers fail. Here&rsquo;s how we fix that.
          </h2>
          <p className="mx-auto max-w-[720px] text-[18px] leading-[1.6] text-white/60">
            The problem is not hard work &mdash; it&rsquo;s bad advice. Online
            tips come in no clear order, so beginners make simple mistakes and
            lose their first harvest. A step-by-step course fixes that.
          </p>
        </div>

        <p className="text-center">
          <span className="block text-[72px] leading-none font-bold text-[#a8d878] sm:text-[96px]">
            67%
          </span>
          <span className="mt-4 block text-[18px] text-white/50">
            of first-time cannabis growers fail due to lack of structured
            guidance
          </span>
        </p>
      </div>
    </section>
  );
}
