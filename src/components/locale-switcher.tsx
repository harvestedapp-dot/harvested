"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  locales,
  localeNames,
  localeShortNames,
  localeTags,
  type Locale,
} from "@/lib/i18n/config";
import { cn } from "@/lib/utils";

/**
 * Swaps the locale segment of the current path so the visitor stays on the
 * page they were reading. Slugs are shared across locales, so
 * /en/learn/how-to-water-indoor-plants maps straight onto its /hy twin.
 */
function swapLocale(pathname: string, next: Locale) {
  const segments = pathname.split("/");
  // segments[0] is the empty string before the leading slash
  if (segments.length > 1 && (locales as readonly string[]).includes(segments[1])) {
    segments[1] = next;
    return segments.join("/") || "/";
  }
  return `/${next}${pathname === "/" ? "" : pathname}`;
}

export function LocaleSwitcher({
  locale,
  label,
  variant = "default",
  className,
}: {
  locale: Locale;
  label: string;
  /** `on-dark` is used over the hero photo, where the header is transparent. */
  variant?: "default" | "on-dark";
  className?: string;
}) {
  const pathname = usePathname() || "/";

  return (
    <div
      className={cn(
        "flex items-center gap-0.5 rounded-full border-[0.5px] p-0.5",
        variant === "on-dark"
          ? "border-white/20 bg-white/[0.08]"
          : "border-border bg-secondary",
        className
      )}
      role="group"
      aria-label={label}
    >
      {locales.map((option) => {
        const isActive = option === locale;
        return (
          <Link
            key={option}
            href={swapLocale(pathname, option)}
            hrefLang={localeTags[option]}
            aria-current={isActive ? "true" : undefined}
            title={localeNames[option]}
            className={cn(
              "rounded-full px-2.5 py-1 text-[13px] font-medium transition-colors",
              isActive
                ? variant === "on-dark"
                  ? "bg-white/90 text-[#0f2312]"
                  : "bg-primary text-white"
                : variant === "on-dark"
                  ? "text-white/70 hover:text-white"
                  : "text-muted-foreground hover:text-foreground"
            )}
          >
            <span className="sr-only">{localeNames[option]}</span>
            <span aria-hidden>{localeShortNames[option]}</span>
          </Link>
        );
      })}
    </div>
  );
}
