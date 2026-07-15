import Link from "next/link";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { FreePreviewCta } from "@/components/free-preview-cta";

const included = [
  "6 structured modules, from germination to curing",
  "32 on-demand video lessons you can rewatch anytime",
  "Downloadable guides and checklists for every stage",
  "Equipment recommendations for every budget",
  "Lifetime access, including all future course updates",
  "Works on desktop, tablet, and mobile",
];

export function PricingSection() {
  return (
    <section
      id="pricing"
      aria-label="Course pricing"
      className="border-t border-border py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="overflow-hidden rounded-3xl bg-primary text-white" data-reveal>
          <div className="grid gap-10 p-8 sm:p-12 md:grid-cols-[1.2fr_1fr] md:items-center lg:p-16">
            <div>
              <p className="text-[14px] font-semibold tracking-wide text-white/70 uppercase">
                Simple, honest pricing
              </p>
              <h2 className="mt-3 font-heading text-[36px] leading-[1.15] font-semibold tracking-tight text-balance sm:text-[44px]">
                Everything you need to grow, for less than a single failed
                harvest
              </h2>
              <p className="mt-4 max-w-xl text-lg text-white/80">
                One mistake with lighting, watering, or timing can cost you an
                entire crop and hundreds of dollars in wasted equipment and
                seeds. Basic Cannabis Cultivation teaches you to get it right
                the first time.
              </p>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {included.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[16px]"
                  >
                    <CheckCircle2
                      className="mt-0.5 size-5 shrink-0 text-white/90"
                      aria-hidden
                    />
                    <span className="text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-white p-9 text-foreground sm:p-10">
              <p className="text-[16px] font-medium text-muted-foreground">
                Basic Cannabis Cultivation
              </p>
              <p className="mt-2 flex flex-wrap items-baseline gap-x-2.5 font-heading">
                <s className="text-[22px] font-normal text-muted-foreground/70">
                  $179
                </s>
                <span className="text-[48px] leading-none font-semibold">
                  $69
                </span>
                <span className="text-[17px] font-normal text-muted-foreground">
                  one-time payment
                </span>
              </p>
              <p className="mt-3 text-[15px] text-muted-foreground">
                No subscription. No hidden fees. Yours forever.
              </p>
              <Link
                href="/course/basic-cannabis-cultivation"
                className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-primary px-8 py-4 text-[17px] font-medium text-white transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-[#254a2e] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Let&apos;s Grow
              </Link>
              <p className="mt-3.5 text-center">
                <FreePreviewCta
                  variant="link"
                  label="or try 2 free lessons first"
                />
              </p>
              <div className="mt-6 flex items-start gap-2.5 rounded-lg bg-secondary p-4.5">
                <ShieldCheck
                  className="mt-0.5 size-4.5 shrink-0 text-primary"
                  aria-hidden
                />
                <p className="text-[14px] leading-relaxed text-muted-foreground">
                  <span className="font-medium text-foreground">
                    7-day money-back guarantee.
                  </span>{" "}
                  If the course isn&rsquo;t for you, get a full refund within
                  7 days — no questions asked.{" "}
                  <Link
                    href="/refund-policy"
                    className="underline underline-offset-2 hover:text-foreground"
                  >
                    Refund policy
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
