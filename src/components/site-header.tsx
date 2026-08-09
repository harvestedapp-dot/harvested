"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "@/components/logo";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { localePath, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/en";
import { cn } from "@/lib/utils";

/** Client component: it receives plain strings, never the whole dictionary
 *  (which holds formatter functions and cannot cross the server boundary). */
export function SiteHeader({
  locale,
  nav,
  openMenuLabel,
  languageLabel,
}: {
  locale: Locale;
  nav: Dictionary["nav"];
  openMenuLabel: string;
  languageLabel: string;
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === localePath(locale);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-colors duration-200",
        isHome
          ? isScrolled
            ? "border-white/10 bg-[rgba(13,26,16,0.85)] backdrop-blur-md"
            : "border-transparent bg-transparent"
          : cn(
              "bg-background",
              isScrolled ? "border-border shadow-sm" : "border-transparent"
            )
      )}
    >
      <div className="relative mx-auto flex h-14 max-w-7xl items-center justify-between px-5 sm:px-10">
        <Logo locale={locale} className={isHome ? "text-white" : undefined} />

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={localePath(locale, item.href)}
              className={cn(
                "relative text-base font-medium transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100",
                isHome
                  ? "text-white/80 hover:text-white"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LocaleSwitcher
            locale={locale}
            label={languageLabel}
            variant={isHome ? "on-dark" : "default"}
            className="hidden sm:flex"
          />

          <Sheet>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    "md:hidden",
                    isHome && "text-white hover:bg-white/10 hover:text-white"
                  )}
                />
              }
            >
              <Menu className="size-5" />
              <span className="sr-only">{openMenuLabel}</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-xs">
              <SheetHeader>
                <SheetTitle>
                  <Logo locale={locale} />
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4">
                {nav.map((item) => (
                  <SheetClose
                    key={item.href}
                    nativeButton={false}
                    render={
                      <Link
                        href={localePath(locale, item.href)}
                        className="rounded-md px-3 py-3 text-base font-medium text-foreground hover:bg-muted"
                      />
                    }
                  >
                    {item.label}
                  </SheetClose>
                ))}
              </nav>
              <div className="mt-4 border-t border-border px-4 pt-4">
                <p className="mb-2.5 text-[13px] font-medium text-muted-foreground">
                  {languageLabel}
                </p>
                <LocaleSwitcher
                  locale={locale}
                  label={languageLabel}
                  className="w-fit"
                />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
