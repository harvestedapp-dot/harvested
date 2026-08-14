import Link from "next/link";
import { localePath, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/en";

export function ProblemsSection({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const copy = dict.problems;

  return (
    <section
      aria-label={copy.ariaLabel}
      className="bg-[#f5f4f0] px-5 py-10 sm:px-10 sm:py-20"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-10 text-center" data-reveal>
          <p className="mb-5 inline-block rounded-[20px] bg-[#EAF3DE] px-5 py-2.5 text-[17px] font-medium tracking-[0.06em] text-[#3B6D11] uppercase">
            {copy.eyebrow}
          </p>
          <h2 className="mb-4 text-[36px] leading-[1.15] font-medium tracking-tight text-[#1a1a19] sm:text-[44px]">
            {copy.heading}
          </h2>
          <p className="text-[16px] leading-[1.65] text-[#52514e]">
            {copy.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2">
          <div
            className="rounded-[12px] border-[0.5px] border-[#dddbd2] bg-white p-6 sm:p-8"
            data-reveal
          >
            <h3 className="mb-6 text-[14px] font-medium tracking-[0.06em] text-[#52514e] uppercase">
              {copy.painsTitle}
            </h3>
            <ul>
              {copy.pains.map((pain) => (
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
              {copy.solutionsTitle}
            </h3>
            <ul>
              {copy.solutions.map((solution) => (
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
            href={localePath(locale, "/course/indoor-growing-for-beginners")}
            className="inline-block w-full rounded-lg bg-[#1a3320] px-10 py-4 text-[17px] font-medium text-white transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-[#254a2e] sm:w-auto"
          >
            {dict.common.enrollNow} &mdash; {dict.hero.price}
          </Link>
        </div>
      </div>
    </section>
  );
}
