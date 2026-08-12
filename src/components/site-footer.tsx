import Link from "next/link";
import { Logo } from "@/components/logo";
import { siteConfig } from "@/lib/site-config";
import { localePath, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/en";

export function SiteFooter({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between md:gap-10">
          <div className="max-w-sm min-w-0 space-y-4">
            <Logo locale={locale} />
            <p className="text-[16px] leading-[1.6] text-muted-foreground">
              {dict.siteDescription}
            </p>
          </div>

          {/* The contact column sizes to its content so the email address,
              which has no break opportunities, never splits mid-word. */}
          <div className="grid min-w-0 grid-cols-2 gap-10 sm:grid-cols-[1fr_1fr_auto] sm:gap-10 lg:gap-14">
            <div className="space-y-4">
              <p className="font-heading text-[17px] font-semibold text-foreground">
                {dict.footer.explore}
              </p>
              <ul className="space-y-3 text-[16px] text-muted-foreground">
                {dict.nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={localePath(locale, item.href)}
                      className="transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <p className="font-heading text-[17px] font-semibold text-foreground">
                {dict.footer.legal}
              </p>
              <ul className="space-y-3 text-[16px] text-muted-foreground">
                {dict.footer.links.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={localePath(locale, item.href)}
                      className="transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <p className="font-heading text-[17px] font-semibold text-foreground">
                {dict.footer.contact}
              </p>
              <ul className="space-y-3 text-[16px] text-muted-foreground">
                <li>
                  <a
                    href={`mailto:${siteConfig.contactEmail}`}
                    className="break-words transition-colors hover:text-foreground"
                  >
                    {siteConfig.contactEmail}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-border pt-8 text-[14px] text-muted-foreground">
          <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between">
            <p>
              &copy; {year} {siteConfig.name}. {dict.footer.rights}
            </p>
            <p>{dict.footer.disclaimer}</p>
          </div>
          <p className="mt-5 text-[13px] leading-[1.6] text-muted-foreground/80">
            {dict.footer.legalEntity}
          </p>
        </div>
      </div>
    </footer>
  );
}
