import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { FreePreviewCta } from "@/components/free-preview-cta";
import { localePath, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/en";
import { cn } from "@/lib/utils";

const ACCENT = "#a8d878";

const GRADIENT_WORD =
  "bg-gradient-to-r from-[#d3f2a6] via-[#a8d878] to-[#8ec95f] bg-clip-text text-transparent drop-shadow-[0_0_26px_rgba(168,216,120,0.3)]";

function HeadlineWord({
  index,
  className,
  children,
}: {
  index: number;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn("hero-word", className)}
      style={{ "--word-delay": `${110 + index * 75}ms` } as React.CSSProperties}
    >
      {children}
    </span>
  );
}

/** SVG-drawn potted seedlings: [height in px, tilt in deg, sway delay in ms]. */
const sprouts: Array<[number, number, number]> = [
  [124, -4, 0],
  [152, -1.5, 900],
  [133, 2, 1700],
  [143, 5, 500],
];

function Sprout({
  height,
  tilt,
  delay,
  uid,
}: {
  height: number;
  tilt: number;
  delay: number;
  uid: number;
}) {
  const potTop = height - 24;
  const soilY = potTop + 2.5;
  const stemTop = 8;
  const id = (name: string) => `sprout-${uid}-${name}`;

  /** One leaf growing out of the stem at height `y`; dir -1 = left, 1 = right. */
  const leaf = (y: number, dir: 1 | -1, len: number) =>
    `M15 ${y} C ${15 + dir * len * 0.32} ${y - len * 0.52}, ${15 + dir * len * 0.9} ${y - len * 0.42}, ${15 + dir * len} ${y + 0.8} C ${15 + dir * len * 0.66} ${y + len * 0.34}, ${15 + dir * len * 0.24} ${y + len * 0.26}, 15 ${y}`;

  // Leaf pairs climb the stem; the lowest pair is the largest.
  const leafPairs = [0.28, 0.52, 0.76].map((t, i) => ({
    y: soilY - (soilY - stemTop) * t,
    len: 15.5 - i * 3.2,
  }));

  return (
    <span
      className="relative flex flex-col items-center"
      style={{ transform: `rotate(${tilt}deg)` }}
    >
      {/* soft grow-light pool falling on the leaves */}
      <span
        aria-hidden
        className="hero-sprout-glow pointer-events-none absolute -top-6 h-10 w-[26px] rounded-full bg-[#d3f2a6]/25 blur-[6px]"
        style={{ animationDelay: `${delay}ms` }}
      />
      <span
        className="hero-sprout-sway block origin-bottom"
        style={{ animationDelay: `${delay}ms` }}
      >
        <svg
          viewBox={`0 0 30 ${height}`}
          height={height}
          aria-hidden
          className="block h-auto w-[24px] sm:w-[30px]"
        >
          <defs>
            <linearGradient id={id("leaf")} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#d3f2a6" />
              <stop offset="55%" stopColor="#8ec95f" />
              <stop offset="100%" stopColor="#4e8a35" />
            </linearGradient>
            <linearGradient id={id("pot")} x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#d79a6d" />
              <stop offset="55%" stopColor="#bd7a4d" />
              <stop offset="100%" stopColor="#8a5433" />
            </linearGradient>
            <linearGradient id={id("soil")} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4a3423" />
              <stop offset="100%" stopColor="#2c1f14" />
            </linearGradient>
          </defs>

          {/* stem */}
          <path
            d={`M15 ${soilY} C 13.6 ${soilY - (soilY - stemTop) * 0.4}, 16.4 ${soilY - (soilY - stemTop) * 0.7}, 15 ${stemTop}`}
            stroke="#6faa46"
            strokeWidth="1.9"
            strokeLinecap="round"
            fill="none"
          />

          {/* leaves */}
          {leafPairs.map((pair, i) => (
            <g key={i}>
              <path d={leaf(pair.y, -1, pair.len)} fill={`url(#${id("leaf")})`} />
              <path d={leaf(pair.y, 1, pair.len)} fill={`url(#${id("leaf")})`} />
              <path
                d={`M15 ${pair.y} L ${15 - pair.len * 0.72} ${pair.y + 0.4}`}
                stroke="rgba(38,74,24,0.35)"
                strokeWidth="0.5"
              />
              <path
                d={`M15 ${pair.y} L ${15 + pair.len * 0.72} ${pair.y + 0.4}`}
                stroke="rgba(38,74,24,0.35)"
                strokeWidth="0.5"
              />
            </g>
          ))}

          {/* unfurling tip */}
          <path
            d={`M15 ${stemTop} C 12.6 ${stemTop - 1}, 12.2 ${stemTop - 5}, 15 ${stemTop - 6} C 17.8 ${stemTop - 5}, 17.4 ${stemTop - 1}, 15 ${stemTop}`}
            fill={`url(#${id("leaf")})`}
          />

          {/* soil surface */}
          <ellipse
            cx="15"
            cy={soilY}
            rx="9.6"
            ry="2.4"
            fill={`url(#${id("soil")})`}
          />
          <circle cx="11.4" cy={soilY - 0.4} r="0.5" fill="#6b4d33" />
          <circle cx="18.2" cy={soilY + 0.5} r="0.45" fill="#6b4d33" />

          {/* terracotta pot: rim + tapered body */}
          <rect
            x="3.6"
            y={potTop}
            width="22.8"
            height="5.2"
            rx="1.4"
            fill={`url(#${id("pot")})`}
          />
          <path
            d={`M5.4 ${potTop + 5.2} L24.6 ${potTop + 5.2} L21.6 ${height - 1} Q15 ${height + 1} 8.4 ${height - 1} Z`}
            fill={`url(#${id("pot")})`}
          />
          <path
            d={`M9.2 ${potTop + 7} L7.6 ${height - 3}`}
            stroke="rgba(255,255,255,0.22)"
            strokeWidth="0.9"
            strokeLinecap="round"
          />
        </svg>
      </span>
    </span>
  );
}

export function HeroSection({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const copy = dict.hero;
  const accent = new Set(copy.accentWords);

  return (
    <section id="top" className="relative">
      {/* left-side scrim so the copy never fights the photo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(4,14,7,0.65)_0%,rgba(4,14,7,0.3)_45%,transparent_72%)]"
      />

      {/* slow-drifting ambient glow so the dark backdrop never sits still */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <span className="hero-ambient absolute -top-24 right-[6%] size-[26rem] rounded-full bg-[#a8d878]/10 blur-3xl" />
        <span className="hero-ambient-slow absolute -bottom-32 left-[10%] size-[22rem] rounded-full bg-[#d3f2a6]/[0.07] blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 px-5 py-16 md:grid-cols-2 md:gap-14 md:px-8 md:py-24 lg:gap-16">
        <div>
          <p className="hero-enter mb-7 inline-flex items-center gap-2.5 rounded-full border-[0.5px] border-white/20 bg-white/[0.08] px-4.5 py-2 text-[14px] font-semibold tracking-[0.18em] text-white/90 uppercase backdrop-blur-sm">
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
            {copy.badge}
          </p>

          <h1 className="mb-10 font-display text-[clamp(34px,9vw,52px)] leading-[1.12] font-semibold tracking-tight text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.5)] sm:text-[64px]">
            {copy.headline.map((word, index) => (
              <HeadlineWord
                key={`${word}-${index}`}
                index={index}
                className={accent.has(index) ? GRADIENT_WORD : undefined}
              >
                {word}
              </HeadlineWord>
            )).reduce<React.ReactNode[]>((nodes, word, index) => {
              if (index > 0) nodes.push(" ");
              nodes.push(word);
              return nodes;
            }, [])}
          </h1>

          <p
            className="hero-enter flex flex-wrap items-baseline gap-x-3.5 gap-y-1"
            style={{ "--enter-delay": "160ms" } as React.CSSProperties}
          >
            <s className="font-brand text-2xl font-medium text-white/50 sm:text-3xl">
              {copy.oldPrice}
            </s>
            {/* The dram amount is a longer string than a dollar one, so it
                stays on one line and steps down a size on narrow screens. */}
            <span className="bg-gradient-to-b from-[#d3f2a6] to-[#93cc61] bg-clip-text font-brand text-[42px] leading-none font-bold tracking-tight whitespace-nowrap text-transparent drop-shadow-[0_0_24px_rgba(168,216,120,0.35)] sm:text-[56px] lg:text-[64px]">
              {copy.price}
            </span>
            <span
              className="self-center rounded-full border-[0.5px] px-4 py-1.5 text-[14px] font-bold tracking-wide"
              style={{
                color: ACCENT,
                borderColor: "rgba(168,216,120,0.6)",
                backgroundColor: "rgba(168,216,120,0.14)",
              }}
            >
              {copy.discount}
            </span>
          </p>

          <p
            className="hero-enter mt-4 text-[16px] font-medium tracking-wide text-white/65"
            style={{ "--enter-delay": "220ms" } as React.CSSProperties}
          >
            {copy.terms}
          </p>

          <p
            className="hero-enter mt-1.5 mb-9 text-[12px] font-medium"
            style={
              { color: ACCENT, "--enter-delay": "260ms" } as React.CSSProperties
            }
          >
            {copy.perk}
          </p>

          <Link
            href={localePath(locale, "/course/indoor-growing-for-beginners")}
            className="hero-enter group relative isolate mb-7 flex w-full items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-b from-[#bde692] to-[#9ecf6c] py-5 text-[18px] font-bold text-[#0f2312] shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_8px_32px_rgba(168,216,120,0.3)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_14px_44px_rgba(168,216,120,0.42)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            style={{ "--enter-delay": "320ms" } as React.CSSProperties}
          >
            {/* soft looping glow behind the button after it lands */}
            <span
              aria-hidden
              className="hero-cta-glow absolute -inset-1 -z-10 rounded-2xl bg-[#a8d878]/35 opacity-40 blur-lg"
            />
            {dict.common.letsGrow}
            <ArrowRight
              className="size-5.5 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden
            />
          </Link>

          <p
            className="hero-enter -mt-3 mb-7 text-center"
            style={{ "--enter-delay": "360ms" } as React.CSSProperties}
          >
            <FreePreviewCta
              variant="link-on-dark"
              label={copy.freePreviewLink}
            />
          </p>

          <ul
            className="hero-enter flex flex-wrap items-center gap-2"
            style={{ "--enter-delay": "400ms" } as React.CSSProperties}
          >
            {copy.trustItems.map((item) => (
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

        <div
          className="hero-enter relative overflow-hidden rounded-3xl border-[0.5px] border-white/15 bg-white/[0.07] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_24px_60px_rgba(0,0,0,0.35)] backdrop-blur-md sm:p-11"
          style={{ "--enter-delay": "200ms" } as React.CSSProperties}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 -right-20 size-64 rounded-full bg-[radial-gradient(closest-side,rgba(168,216,120,0.16),transparent_70%)] blur-2xl"
          />

          {/* The core hook, drawn as an equation: 4 supermarket herb pots ≈ the whole course */}
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 rounded-2xl border-[0.5px] border-white/10 bg-[#081408]/45 px-2.5 py-6 sm:gap-6 sm:px-5 sm:py-7">
            <div className="relative flex flex-col items-center">
              <span
                aria-hidden
                className="pointer-events-none absolute -inset-x-2 -top-4 bottom-2 rounded-full bg-[radial-gradient(closest-side,rgba(232,190,90,0.12),transparent_72%)]"
              />
              <div aria-hidden className="flex items-end gap-2 pt-5 sm:gap-3.5">
                {sprouts.map(([height, tilt, delay], index) => (
                  <Sprout
                    key={index}
                    height={height}
                    tilt={tilt}
                    delay={delay}
                    uid={index}
                  />
                ))}
              </div>
              <p className="mt-4.5 text-[16px] font-semibold text-white">
                {copy.equationLeftTitle}
              </p>
              <p className="mt-1 text-[14px] text-white/45">
                {copy.equationLeftNote}
              </p>
            </div>

            <span
              aria-hidden
              className="pb-9 font-heading text-2xl font-medium text-white/45 sm:pb-12 sm:text-4xl"
            >
              &asymp;
            </span>

            <div className="relative flex flex-col items-center">
              <span
                aria-hidden
                className="pointer-events-none absolute -inset-x-2 -top-4 bottom-2 rounded-full bg-[radial-gradient(closest-side,rgba(168,216,120,0.15),transparent_72%)]"
              />
              <p
                className="flex h-[120px] items-center font-brand text-[32px] leading-none font-bold tracking-tight whitespace-nowrap drop-shadow-[0_0_24px_rgba(168,216,120,0.35)] sm:h-[150px] sm:text-[48px]"
                style={{ color: ACCENT }}
              >
                {copy.price}
              </p>
              <p className="mt-4.5 text-[16px] font-semibold text-white">
                {copy.equationRightTitle}
              </p>
              <p className="mt-1 text-[14px] text-white/45">
                {copy.equationRightNote}
              </p>
            </div>
          </div>

          <p className="mt-6 text-[15px] leading-[1.65] text-white/70">
            {copy.equationSummary.before}
            <span className="font-semibold text-white">
              {copy.equationSummary.highlightA}
            </span>
            {copy.equationSummary.middle}
            <span className="font-semibold text-white">
              {copy.equationSummary.highlightB}
            </span>
            {copy.equationSummary.after}
          </p>

          <div className="mt-6 border-t-[0.5px] border-white/15 pt-5">
            <p className="mb-4 text-[13px] font-semibold tracking-[0.16em] text-white/55 uppercase">
              {copy.insideLabel}
            </p>
            <div className="space-y-2">
              {copy.insideItems.map((title, index) => (
                <h3
                  key={title}
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
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {title}
                </h3>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
