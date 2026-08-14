"use client";

import { useCallback, useEffect, useRef } from "react";

interface CountUpProps {
  to: number;
  prefix?: string;
  suffix?: string;
  /**
   * Groups thousands with commas, e.g. 70000 -> "70,000". Kept as a flag
   * rather than a formatter function because this component is rendered from
   * Server Components, which cannot pass functions across the boundary.
   */
  groupThousands?: boolean;
  durationMs?: number;
  className?: string;
}

/**
 * Counts from 0 to `to` when scrolled into view. Renders the final value in
 * the markup (SEO / no-JS safe) and only animates the displayed text.
 */
export function CountUp({
  to,
  prefix = "",
  suffix = "",
  groupThousands = false,
  durationMs = 1400,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const format = useCallback(
    (value: number) =>
      groupThousands ? value.toLocaleString("en-US") : String(value),
    [groupThousands]
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / durationMs, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = `${prefix}${format(Math.round(to * eased))}${suffix}`;
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [to, prefix, suffix, format, durationMs]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {format(to)}
      {suffix}
    </span>
  );
}
