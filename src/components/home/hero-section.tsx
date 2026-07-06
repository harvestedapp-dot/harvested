import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

const ACCENT = "#a8d878";

const trustItems = ["Beginner Friendly", "Any Device", "6 Modules"];

/** CSS-drawn burning joints: [height in px, tilt in deg, animation delay in ms]. */
const joints: Array<[number, number, number]> = [
  [124, -8, 0],
  [152, -2.5, 900],
  [133, 3, 1700],
  [143, 8.5, 500],
];

const insideItems = [
  { number: "01", title: "Germination & seedling care" },
  { number: "02", title: "Vegetative growth stage" },
  { number: "03", title: "Cannabis flowering stage" },
  { number: "04", title: "Harvest, drying & curing" },
];

function Joint({
  height,
  tilt,
  delay,
}: {
  height: number;
  tilt: number;
  delay: number;
}) {
  return (
    <span
      className="relative flex flex-col items-center"
      style={{ transform: `rotate(${tilt}deg)` }}
    >
      {/* rising smoke wisp */}
      <span
        aria-hidden
        className="hero-joint-smoke pointer-events-none absolute -top-10 h-8 w-[4px] rounded-full bg-white/55 blur-[2px]"
        style={{ animationDelay: `${delay}ms` }}
      />
      {/* glowing ember tip */}
      <span
        className="hero-joint-ember z-10 h-[10px] w-[22px] rounded-full bg-gradient-to-b from-[#ffb27a] via-[#ec9458] to-[#c9622f]"
        style={{ animationDelay: `${delay}ms` }}
      />
      {/* tapered paper cone: side-lit for roundness, charred band at the lit end */}
      <span
        className="-mt-px w-8"
        style={{
          height,
          background:
            "linear-gradient(180deg, rgba(60,40,25,0.35) 0%, rgba(60,40,25,0) 12%), linear-gradient(100deg, #faf5e9 0%, #ece4d0 52%, #c9bfa5 100%)",
          clipPath: "polygon(21% 0%, 79% 0%, 60% 100%, 40% 100%)",
        }}
      />
    </span>
  );
}

export function HeroSection() {
  return (
    <section id="top" className="relative">
      {/* left-side scrim so the copy never fights the photo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(4,14,7,0.65)_0%,rgba(4,14,7,0.3)_45%,transparent_72%)]"
      />

      <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 px-5 py-16 md:grid-cols-2 md:gap-14 md:px-8 md:py-24 lg:gap-16">
        <div>
          <p className="mb-7 inline-flex items-center gap-2.5 rounded-full border-[0.5px] border-white/20 bg-white/[0.08] px-4.5 py-2 text-[14px] font-semibold tracking-[0.18em] text-white/90 uppercase backdrop-blur-sm">
            <span aria-hidden className="relative flex size-2.5">
              <span
                className="absolute inline-flex size-full rounded-full opacity-60 motion-safe:animate-ping"
                style={{ backgroundColor: ACCENT }}
              />
              <span
                className="relative inline-flex size-2.5 rounded-full"
                style={{ backgroundColor: ACCENT }}
              />
            </span>
            Cannabis Cultivation Course
          </p>

          <h1 className="mb-10 font-heading text-[52px] leading-[1.12] font-semibold tracking-tight text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.5)] sm:text-[72px]">
            Stop buying joints.
            <br />
            <span className="bg-gradient-to-r from-[#d3f2a6] via-[#a8d878] to-[#8ec95f] bg-clip-text text-transparent drop-shadow-[0_0_26px_rgba(168,216,120,0.3)]">
              Grow your own<span className="sr-only"> cannabis</span>
            </span>
            <br />
            &mdash; forever.
          </h1>

          <p className="flex flex-wrap items-baseline gap-x-3.5 gap-y-1">
            <s className="text-3xl font-medium text-white/50">$179</s>
            <span className="bg-gradient-to-b from-[#d3f2a6] to-[#93cc61] bg-clip-text font-heading text-[80px] leading-none font-bold tracking-tight text-transparent drop-shadow-[0_0_24px_rgba(168,216,120,0.35)]">
              $69
            </span>
            <span
              className="self-center rounded-full border-[0.5px] px-4 py-1.5 text-[14px] font-bold tracking-wide"
              style={{
                color: ACCENT,
                borderColor: "rgba(168,216,120,0.6)",
                backgroundColor: "rgba(168,216,120,0.14)",
              }}
            >
              &ndash;61%
            </span>
          </p>

          <p className="mt-4 text-[16px] font-medium tracking-wide text-white/65">
            One-time payment &middot; Lifetime access &middot; 30-day
            money-back
          </p>

          <p
            className="mt-1.5 mb-9 text-[12px] font-medium"
            style={{ color: ACCENT }}
          >
            &#10022; Includes exclusive discounts on grow equipment &mdash;
            students save $200+ inside the course
          </p>

          <Link
            href="/course/basic-cannabis-cultivation"
            className="group mb-7 flex w-full items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-b from-[#bde692] to-[#9ecf6c] py-5.5 text-[19px] font-bold text-[#0f2312] shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_8px_32px_rgba(168,216,120,0.3)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_14px_44px_rgba(168,216,120,0.42)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Enroll Now
            <ArrowRight
              className="size-5.5 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden
            />
          </Link>

          <ul className="flex flex-wrap items-center gap-2">
            {trustItems.map((item) => (
              <li
                key={item}
                className="inline-flex items-center gap-2 rounded-full border-[0.5px] border-white/15 bg-white/[0.07] px-4.5 py-2 text-[16px] font-medium text-white/90 backdrop-blur-sm"
              >
                <Check
                  className="size-4.5 shrink-0"
                  style={{ color: ACCENT }}
                  aria-hidden
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative overflow-hidden rounded-3xl border-[0.5px] border-white/15 bg-white/[0.07] p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_24px_60px_rgba(0,0,0,0.35)] backdrop-blur-md sm:p-11">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 -right-20 size-64 rounded-full bg-[radial-gradient(closest-side,rgba(168,216,120,0.16),transparent_70%)] blur-2xl"
          />

          {/* The core hook, drawn as an equation: 3–4 joints ≈ the whole course */}
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 rounded-2xl border-[0.5px] border-white/10 bg-[#081408]/45 px-5 py-7 sm:gap-6">
            <div className="relative flex flex-col items-center">
              <span
                aria-hidden
                className="pointer-events-none absolute -inset-x-2 -top-4 bottom-2 rounded-full bg-[radial-gradient(closest-side,rgba(232,147,90,0.14),transparent_72%)]"
              />
              <div aria-hidden className="flex items-end gap-3.5 pt-5">
                {joints.map(([height, tilt, delay], index) => (
                  <Joint
                    key={index}
                    height={height}
                    tilt={tilt}
                    delay={delay}
                  />
                ))}
              </div>
              <p className="mt-4.5 text-[16px] font-semibold text-white">
                3&ndash;4 joints
              </p>
              <p className="mt-1 text-[14px] text-white/45">
                ~$69 &middot; up in smoke
              </p>
            </div>

            <span
              aria-hidden
              className="pb-12 font-heading text-4xl font-medium text-white/45"
            >
              &asymp;
            </span>

            <div className="relative flex flex-col items-center">
              <span
                aria-hidden
                className="pointer-events-none absolute -inset-x-2 -top-4 bottom-2 rounded-full bg-[radial-gradient(closest-side,rgba(168,216,120,0.15),transparent_72%)]"
              />
              <p
                className="flex h-[162px] items-center font-heading text-[80px] leading-none font-bold tracking-tight drop-shadow-[0_0_24px_rgba(168,216,120,0.35)]"
                style={{ color: ACCENT }}
              >
                $69
              </p>
              <p className="mt-4.5 text-[16px] font-semibold text-white">
                this course
              </p>
              <p className="mt-1 text-[14px] text-white/45">
                grow your own &middot; forever
              </p>
            </div>
          </div>

          <p className="mt-6 text-[15px] leading-[1.65] text-white/70">
            For the price of{" "}
            <span className="font-semibold text-white">3&ndash;4 joints</span>{" "}
            you get a{" "}
            <span className="font-semibold text-white">
              complete cannabis growing education
            </span>{" "}
            &mdash; step by step, at your own pace.
          </p>

          <div className="mt-6 border-t-[0.5px] border-white/15 pt-5">
            <p className="mb-4 text-[13px] font-semibold tracking-[0.16em] text-white/55 uppercase">
              What&rsquo;s inside
            </p>
            <div className="space-y-2">
              {insideItems.map((item) => (
                <h3
                  key={item.number}
                  className="flex items-center gap-3 rounded-lg border-[0.5px] border-white/10 bg-white/[0.05] px-3.5 py-3 text-[16px] font-medium text-white/90"
                >
                  <span
                    className="flex size-6.5 shrink-0 items-center justify-center rounded-md border-[0.5px] text-[11px] font-bold"
                    style={{
                      color: ACCENT,
                      borderColor: "rgba(168,216,120,0.35)",
                      backgroundColor: "rgba(168,216,120,0.12)",
                    }}
                  >
                    {item.number}
                  </span>
                  {item.title}
                </h3>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
