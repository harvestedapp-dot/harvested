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
      <div className="mx-auto max-w-6xl px-6 py-32 sm:py-44">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div className="max-w-sm space-y-4">
            <Logo />
            <p className="text-[19px] leading-[1.65] text-muted-foreground">
              {siteConfig.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 sm:gap-14">
            <div className="space-y-4">
              <p className="font-heading text-[21px] font-semibold text-foreground">
                Explore
              </p>
              <ul className="space-y-3.5 text-[19px] text-muted-foreground">
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
              <p className="font-heading text-[21px] font-semibold text-foreground">
                Legal
              </p>
              <ul className="space-y-3.5 text-[19px] text-muted-foreground">
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
              <p className="font-heading text-[21px] font-semibold text-foreground">
                Contact
              </p>
              <ul className="space-y-3.5 text-[19px] text-muted-foreground">
                <li>
                  <a
                    href={`mailto:${siteConfig.contactEmail}`}
                    className="transition-colors hover:text-foreground"
                  >
                    {siteConfig.contactEmail}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2.5 border-t border-border pt-8 text-[16px] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>Educational content only. Not intended for use by minors.</p>
        </div>
      </div>
    </footer>
  );
}
