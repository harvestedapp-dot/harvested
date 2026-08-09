import Link from "next/link";
import { Logo } from "@/components/logo";
import { siteConfig } from "@/lib/site-config";

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Refund Policy", href: "/refund-policy" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between md:gap-10">
          <div className="max-w-sm min-w-0 space-y-4">
            <Logo />
            <p className="text-[16px] leading-[1.6] text-muted-foreground">
              {siteConfig.description}
            </p>
          </div>

          <div className="grid min-w-0 grid-cols-2 gap-10 sm:grid-cols-3 sm:gap-10 lg:gap-14">
            <div className="space-y-4">
              <p className="font-heading text-[17px] font-semibold text-foreground">
                Explore
              </p>
              <ul className="space-y-3 text-[16px] text-muted-foreground">
                {siteConfig.nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
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
                Legal
              </p>
              <ul className="space-y-3 text-[16px] text-muted-foreground">
                {legalLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
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
                Contact
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

        <div className="mt-14 flex flex-col gap-2.5 border-t border-border pt-8 text-[14px] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>
            Educational content only. Growing results depend on your space,
            plants and care.
          </p>
        </div>
      </div>
    </footer>
  );
}
