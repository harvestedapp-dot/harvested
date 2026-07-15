"use client";

import { useEffect, useRef, useState } from "react";
import { testimonials } from "@/lib/testimonials";
import { cn } from "@/lib/utils";

const AUTO_ADVANCE_MS = 5000;
const INTERACTION_PAUSE_MS = 9000;

/* Circular initials avatars cycle through brand tones so neighboring cards
   never repeat a color. */
const avatarTones = [
  { backgroundColor: "#1a3320", color: "#EAF3DE" },
  { backgroundColor: "#EAF3DE", color: "#3B6D11" },
  { backgroundColor: "#a8d878", color: "#1a3320" },
];

function initialsOf(name: string) {
  return name
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .replace(/[^A-Za-z]/g, "")
    .slice(0, 2)
    .toUpperCase();
}

/* Brandkit forbids icon libraries here, so stars are a plain inline SVG. */
function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden
      className={cn("size-4", filled ? "fill-primary" : "fill-border")}
    >
      <path d="M10 1.6l2.5 5.32 5.83.7-4.3 4 1.13 5.78L10 14.55 4.84 17.4l1.13-5.78-4.3-4 5.83-.7L10 1.6z" />
    </svg>
  );
}

/**
 * Review cards: swipeable auto-advancing slider on mobile (scroll-snap, dot
 * navigation, pauses on touch / hidden tab / reduced motion), static
 * 2-then-3-column grid from `sm` up.
 */
export function TestimonialsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedUntilRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);

  // Distance between two slides, including the flex gap.
  const slideStep = () => {
    const track = trackRef.current;
    if (!track || track.children.length < 2) return 0;
    const [first, second] = track.children as unknown as HTMLElement[];
    return second.offsetLeft - first.offsetLeft;
  };

  const scrollToSlide = (index: number) => {
    pausedUntilRef.current = Date.now() + INTERACTION_PAUSE_MS;
    trackRef.current?.scrollTo({ left: index * slideStep(), behavior: "smooth" });
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const isMobile = window.matchMedia("(max-width: 639px)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const pause = () => {
      pausedUntilRef.current = Date.now() + INTERACTION_PAUSE_MS;
    };
    track.addEventListener("pointerdown", pause);
    track.addEventListener("touchstart", pause, { passive: true });

    const timer = window.setInterval(() => {
      if (
        !isMobile.matches ||
        reducedMotion.matches ||
        document.hidden ||
        Date.now() < pausedUntilRef.current
      ) {
        return;
      }
      const step = slideStep();
      if (!step) return;
      const next = (Math.round(track.scrollLeft / step) + 1) % testimonials.length;
      track.scrollTo({ left: next * step, behavior: "smooth" });
    }, AUTO_ADVANCE_MS);

    return () => {
      window.clearInterval(timer);
      track.removeEventListener("pointerdown", pause);
      track.removeEventListener("touchstart", pause);
    };
  }, []);

  const handleScroll = () => {
    const track = trackRef.current;
    const step = slideStep();
    if (!track || !step) return;
    const index = Math.round(track.scrollLeft / step);
    setActiveIndex(Math.min(testimonials.length - 1, Math.max(0, index)));
  };

  return (
    <div className="mt-14">
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="no-scrollbar -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-6 px-6 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:p-0 lg:grid-cols-3"
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.name}
            data-reveal
            style={{ "--reveal-delay": `${index * 90}ms` } as React.CSSProperties}
            className="w-[85%] shrink-0 snap-start sm:w-auto"
          >
            <figure className="flex h-full flex-col rounded-xl border-[0.5px] border-border bg-card p-6 transition-[transform,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-[#c9c6ba]">
              <figcaption className="flex items-center gap-3.5">
                <span
                  aria-hidden
                  className="flex size-11 shrink-0 items-center justify-center rounded-full text-[15px] font-medium"
                  style={avatarTones[index % avatarTones.length]}
                >
                  {initialsOf(testimonial.name)}
                </span>
                <span>
                  <span className="block text-[15px] font-medium text-foreground">
                    {testimonial.name}
                  </span>
                  <span
                    className="mt-1 flex gap-0.5"
                    role="img"
                    aria-label={`Rated ${testimonial.rating ?? 0} out of 5 stars`}
                  >
                    {Array.from({ length: 5 }, (_, starIndex) => (
                      <StarIcon
                        key={starIndex}
                        filled={starIndex < (testimonial.rating ?? 0)}
                      />
                    ))}
                  </span>
                </span>
              </figcaption>
              <blockquote className="mt-4 flex-1 text-[15px] leading-[1.7] text-muted-foreground">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
            </figure>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-center gap-1 sm:hidden">
        {testimonials.map((testimonial, index) => (
          <button
            key={testimonial.name}
            type="button"
            aria-label={`Go to review ${index + 1} of ${testimonials.length}`}
            aria-current={index === activeIndex}
            onClick={() => scrollToSlide(index)}
            className="flex size-6 items-center justify-center"
          >
            <span
              className={cn(
                "size-2 rounded-full transition-colors duration-300",
                index === activeIndex ? "bg-primary" : "bg-border"
              )}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
