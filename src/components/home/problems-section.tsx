import Link from "next/link";

const pains = [
  "No idea where to start growing indoors — too much conflicting information online",
  "Yellowing, drooping, sick plants with no clear understanding of what went wrong",
  "Overwatered roots one week, bone-dry soil the next",
  "Money wasted on lights, pots and gear you never actually needed",
  "Leggy, stretched seedlings and no idea whether it's the light or the room",
  "Nutrients, pH and EC that feel like chemistry class instead of gardening",
];

const solutions = [
  "One clear path from seed to harvest — structured, sequential, practical",
  "Learn to read leaves, colour and growth so you catch problems early",
  "Know exactly when your plant needs water — and when it doesn't",
  "Equipment guide inside the course — spend only on what actually matters",
  "Set light distance, intensity and hours correctly from day one",
  "pH, EC and feeding explained in plain English, step by step",
];

export function ProblemsSection() {
  return (
    <section
      aria-label="Common indoor growing problems solved by the Harvested course"
      className="bg-[#f5f4f0] px-5 py-10 sm:px-10 sm:py-20"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-10 text-center" data-reveal>
          <p className="mb-5 inline-block rounded-[20px] bg-[#EAF3DE] px-5 py-2.5 text-[17px] font-medium tracking-[0.06em] text-[#3B6D11] uppercase">
            Sound familiar?
          </p>
          <h2 className="mb-4 text-[36px] leading-[1.15] font-medium tracking-tight text-[#1a1a19] sm:text-[44px]">
            Every new indoor grower hits these walls.
          </h2>
          <p className="text-[16px] leading-[1.65] text-[#52514e]">
            If any of these sound like you &mdash; Harvested was built exactly
            for this.
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2">
          <div
            className="rounded-[12px] border-[0.5px] border-[#dddbd2] bg-white p-6 sm:p-8"
            data-reveal
          >
            <h3 className="mb-6 text-[14px] font-medium tracking-[0.06em] text-[#52514e] uppercase">
              &#10007; Growing indoors without Harvested
            </h3>
            <ul>
              {pains.map((pain) => (
                <li
                  key={pain}
                  className="flex items-start gap-4 border-b-[0.5px] border-[#dddbd2] py-4 last:border-b-0"
                >
                  <span
                    aria-hidden
                    className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#f0efea] text-[13px] text-[#FF3333]"
                  >
                    &#10007;
                  </span>
                  <span className="text-[16px] leading-[1.5] text-[#52514e]">
                    {pain}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="rounded-[12px] bg-[#1a3320] p-6 sm:p-8"
            data-reveal
            style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
          >
            <h3 className="mb-6 text-[14px] font-medium tracking-[0.06em] text-[#a8d878] uppercase">
              &#10003; Growing indoors with Harvested
            </h3>
            <ul>
              {solutions.map((solution) => (
                <li
                  key={solution}
                  className="flex items-start gap-4 border-b-[0.5px] border-white/10 py-4 last:border-b-0"
                >
                  <span
                    aria-hidden
                    className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[rgba(168,216,120,0.15)] text-[13px] text-[#AADD00]"
                  >
                    &#10003;
                  </span>
                  <span className="text-[16px] leading-[1.5] text-white/75">
                    {solution}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center" data-reveal>
          <Link
            href="/course/indoor-growing-for-beginners"
            className="inline-block w-full rounded-lg bg-[#1a3320] px-10 py-4 text-[17px] font-medium text-white transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-[#254a2e] sm:w-auto"
          >
            Enroll Now &mdash; $69
          </Link>
        </div>
      </div>
    </section>
  );
}
