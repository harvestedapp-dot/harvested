"use client";

import { useEffect, useRef } from "react";

interface CountUpProps {
  to: number;
  prefix?: string;
  suffix?: string;
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
  durationMs = 1400,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);

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
          el.textContent = `${prefix}${Math.round(to * eased)}${suffix}`;
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
  }, [to, prefix, suffix, durationMs]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {to}
      {suffix}
    </span>
  );
}
