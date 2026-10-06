import Link from "next/link";
import { localePath, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/en";

/** Surface the existing policies beside enrollment, in the current language. */
export function PurchasePolicyLinks({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <nav aria-label={dict.footer.legal} className="mt-5 border-t border-border pt-4">
      <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-center text-[13px] text-muted-foreground">
        {dict.footer.links.map((link) => (
          <li key={link.href}>
            <Link
              href={localePath(locale, link.href)}
              className="underline underline-offset-2 hover:text-foreground"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
