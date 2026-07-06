const reasons = [
  {
    number: "01",
    title: "Everything in one place",
    description:
      "You don't need to collect advice from Reddit, YouTube, and forums anymore. You get one clear path — from day one to harvest day.",
  },
  {
    number: "02",
    title: "Made for people who have never grown before",
    description:
      "You don't need any experience. Every word and every method is explained from zero — growing cannabis made simple.",
  },
  {
    number: "03",
    title: "Cannabis growing methods based on real science",
    description:
      "Every method comes from real plant science, not random advice from forums. Light cycles, nutrients, plant biology — all explained in clear, simple words.",
  },
  {
    number: "04",
    title: "Guides and materials you can download",
    description:
      "You get more than video lessons — download grow guides, checklists, and other materials you can print and use right in your grow space.",
  },
];

export function WhyChooseSection() {
  return (
    <section
      aria-label="Why choose Harvested over YouTube or another cannabis course"
      className="bg-white px-5 py-20 sm:px-10 sm:py-24"
    >
      <div className="mx-auto max-w-5xl">
        <span className="inline-flex items-center rounded-full border-[0.5px] border-[#C0DD97] bg-[#EAF3DE] px-7 py-3 font-heading text-xl font-bold tracking-[0.12em] text-[#3B6D11] uppercase sm:text-2xl">
          Why Harvested
        </span>

        <div className="mt-6 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-xl font-heading text-4xl font-semibold tracking-tight text-balance text-[#1a1a19] sm:text-[44px] sm:leading-[1.1]">
            Not just another cannabis course.
          </h2>
          <p className="max-w-sm text-[15px] leading-[1.65] text-[#52514e] md:text-right">
            Most beginners lose their first harvest to simple mistakes.
            Harvested exists so that doesn&rsquo;t happen to you &mdash;
            here&rsquo;s what makes it different.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 md:grid-cols-2">
          {reasons.map((reason) => (
            <li
              key={reason.number}
              className="rounded-2xl border border-[#e5e3da] bg-[#faf9f6] p-6 sm:p-7"
            >
              <span
                aria-hidden
                className="inline-flex size-10 items-center justify-center rounded-xl border-[0.5px] border-[#C0DD97] bg-[#EAF3DE] font-heading text-sm font-bold text-[#3B6D11]"
              >
                {reason.number}
              </span>
              <h3 className="mt-5 font-heading text-lg font-semibold text-balance text-[#1a1a19] sm:text-xl">
                {reason.title}
              </h3>
              <p className="mt-2.5 max-w-lg text-[15px] leading-[1.65] text-[#52514e]">
                {reason.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
