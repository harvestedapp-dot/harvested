import { Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { FREE_PREVIEW_URL, FREE_PREVIEW_LESSON_COUNT } from "@/lib/site-config";

type FreePreviewCtaVariant = "solid" | "outline" | "link" | "link-on-dark";

interface FreePreviewCtaProps {
  /**
   * solid — filled primary button, for sections where the free preview is
   *   the main action (e.g. the homepage "try before you buy" section).
   * outline — bordered secondary button, for placement next to a purchase
   *   CTA without competing with it (e.g. the course enroll card).
   * link — quiet inline text link for light surfaces (e.g. pricing card).
   * link-on-dark — inline text link for dark surfaces (e.g. hero).
   */
  variant?: FreePreviewCtaVariant;
  label?: string;
  className?: string;
}

const DEFAULT_LABEL = `Try ${FREE_PREVIEW_LESSON_COUNT} Free Lessons`;

/**
 * Single CTA for the Thinkific Free Preview. Every free-preview button and
 * link on the site renders through this component, so swapping
 * FREE_PREVIEW_URL in site-config.ts updates all of them at once.
 */
export function FreePreviewCta({
  variant = "outline",
  label = DEFAULT_LABEL,
  className,
}: FreePreviewCtaProps) {
  // Once the placeholder becomes a real Thinkific URL, open the LMS in a
  // new tab so visitors keep their place on the marketing site.
  const isExternal = FREE_PREVIEW_URL.startsWith("http");
  const externalProps = isExternal
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  if (variant === "link" || variant === "link-on-dark") {
    return (
      <a
        href={FREE_PREVIEW_URL}
        data-free-preview
        {...externalProps}
        className={cn(
          "inline-flex items-center gap-1.5 text-[15px] font-medium underline-offset-4 hover:underline",
          variant === "link"
            ? "text-primary"
            : "text-white/80 hover:text-white",
          className
        )}
      >
        <Play className="size-3.5 fill-current" aria-hidden />
        {label}
      </a>
    );
  }

  return (
    <a
      href={FREE_PREVIEW_URL}
      data-free-preview
      {...externalProps}
      className={cn(
        "inline-flex items-center justify-center gap-2.5 rounded-lg px-8 py-4 text-[17px] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
        variant === "solid"
          ? "bg-primary text-white hover:bg-[#254a2e]"
          : "border-[0.5px] border-primary/35 bg-card text-primary hover:bg-primary/[0.06]",
        className
      )}
    >
      <span
        aria-hidden
        className={cn(
          "flex size-6 shrink-0 items-center justify-center rounded-full",
          variant === "solid" ? "bg-white/15" : "bg-[#EAF3DE]"
        )}
      >
        <Play className="size-3 fill-current" />
      </span>
      {label}
    </a>
  );
}
