"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Enables the scroll-reveal system: adds `reveal-ready` to <html> (the CSS
 * only hides `[data-reveal]` elements under that class, so content stays
 * visible without JS) and reveals elements as they enter the viewport.
 */
export function RevealInit() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    document.documentElement.classList.add("reveal-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    document
      .querySelectorAll<HTMLElement>("[data-reveal]:not(.is-revealed)")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
