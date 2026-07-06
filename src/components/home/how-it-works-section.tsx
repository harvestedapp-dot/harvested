import { GraduationCap, Sprout, UserPlus } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    step: "Step 1",
    title: "Enroll in minutes",
    description:
      "One payment of $69 unlocks the full Basic Cannabis Cultivation course — every module, every lesson, every guide. No subscription, no upsells.",
  },
  {
    icon: GraduationCap,
    step: "Step 2",
    title: "Learn at your own pace",
    description:
      "Work through 6 structured modules of video lessons and downloadable guides on any device. Revisit any lesson as often as you need — access never expires.",
  },
  {
    icon: Sprout,
    step: "Step 3",
    title: "Grow with confidence",
    description:
      "Apply what you learn to your first grow, from germinating your first seed to drying and curing a harvest you can be proud of.",
  },
];

export function HowItWorksSection() {
  return (
    <section
      aria-label="How Harvested works"
      className="border-t border-border bg-white py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-[44px] leading-[1.12] font-semibold tracking-tight text-foreground sm:text-[56px]">
            From enrollment to harvest in three steps
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            No prerequisites, no equipment needed to start — just a clear
            path from complete beginner to confident grower.
          </p>
        </div>

        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="relative rounded-2xl border border-border bg-card p-8"
            >
              <div className="flex items-center justify-between">
                <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <step.icon className="size-5" aria-hidden />
                </span>
                <span
                  aria-hidden
                  className="font-heading text-5xl font-semibold text-border"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="mt-5 text-[13px] font-semibold tracking-wide text-primary uppercase">
                {step.step}
              </p>
              <h3 className="mt-1.5 font-heading text-[22px] font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-[16px] leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
