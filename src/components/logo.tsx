import Link from "next/link";
import { Sprout } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";
import { localePath, type Locale } from "@/lib/i18n/config";

export function Logo({
  locale,
  className,
}: {
  locale: Locale;
  className?: string;
}) {
  return (
    <Link
      href={localePath(locale)}
      className={cn(
        "flex items-center gap-2 font-brand text-lg font-semibold tracking-tight text-foreground",
        className
      )}
    >
      <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
        <Sprout className="size-4.5" strokeWidth={2.25} />
      </span>
      {siteConfig.name}
    </Link>
  );
}
