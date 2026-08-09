import { GraduationCap, Sprout, UserPlus } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/dictionaries/en";

const icons = [UserPlus, GraduationCap, Sprout];

export function HowItWorksSection({ dict }: { dict: Dictionary }) {
  const copy = dict.howItWorks;

  return (
    <section
      aria-label={copy.ariaLabel}
      className="border-t border-border bg-white py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center" data-reveal>
          <p className="mb-5 inline-block rounded-[20px] bg-[#EAF3DE] px-5 py-2.5 text-[17px] font-medium tracking-[0.06em] text-[#3B6D11] uppercase">
            {copy.eyebrow}
          </p>
          <h2 className="font-heading text-[36px] leading-[1.15] font-semibold tracking-tight text-foreground sm:text-[44px]">
            {copy.heading}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{copy.subheading}</p>
        </div>

        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          {copy.steps.map((step, index) => {
            const Icon = icons[index] ?? Sprout;
            return (
              <li
                key={step.title}
                className="group relative rounded-2xl border border-border bg-card p-8 transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-primary/30"
                data-reveal
                style={
                  { "--reveal-delay": `${index * 100}ms` } as React.CSSProperties
                }
              >
                <div className="flex items-center justify-between">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <span
                    aria-hidden
                    className="font-brand text-4xl font-semibold text-border transition-colors duration-300 group-hover:text-primary/25"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-5 text-[13px] font-semibold tracking-wide text-primary uppercase">
                  {copy.stepLabel} {index + 1}
                </p>
                <h3 className="mt-1.5 font-heading text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-[16px] leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
