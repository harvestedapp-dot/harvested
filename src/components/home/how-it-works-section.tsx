import { GraduationCap, Sprout, UserPlus } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    step: "Step 1",
    title: "Enroll in minutes",
    description:
      "One payment of $69 unlocks the full Indoor Growing for Beginners course — every module, every lesson, every guide. No subscription, no upsells.",
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
      "Apply what you learn to your first indoor grow, from germinating your first seed to harvesting herbs, greens, fruit or flowers you grew yourself.",
  },
];

export function HowItWorksSection() {
  return (
    <section
      aria-label="How Harvested works"
      className="border-t border-border bg-white py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center" data-reveal>
          <p className="mb-5 inline-block rounded-[20px] bg-[#EAF3DE] px-5 py-2.5 text-[17px] font-medium tracking-[0.06em] text-[#3B6D11] uppercase">
            How It Works
          </p>
          <h2 className="font-heading text-[36px] leading-[1.15] font-semibold tracking-tight text-foreground sm:text-[44px]">
            From enrollment to first harvest in three steps
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            No prerequisites, no equipment needed to start — just a clear
            path from complete beginner to confident indoor grower.
          </p>
        </div>

        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="group relative rounded-2xl border border-border bg-card p-8 transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-primary/30"
              data-reveal
              style={{ "--reveal-delay": `${index * 100}ms` } as React.CSSProperties}
            >
              <div className="flex items-center justify-between">
                <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                  <step.icon className="size-5" aria-hidden />
                </span>
                <span
                  aria-hidden
                  className="font-display text-4xl font-semibold text-border transition-colors duration-300 group-hover:text-primary/25"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="mt-5 text-[13px] font-semibold tracking-wide text-primary uppercase">
                {step.step}
              </p>
              <h3 className="mt-1.5 font-heading text-xl font-semibold text-foreground">
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
