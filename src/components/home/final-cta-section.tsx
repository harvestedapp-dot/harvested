import Link from "next/link";

export function FinalCtaSection() {
  return (
    <section
      aria-label="Start learning today"
      className="border-t border-border bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-heading text-[44px] leading-[1.12] font-semibold tracking-tight text-balance text-foreground sm:text-[56px]">
          Your first harvest starts with the right foundation
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-xl text-muted-foreground">
          Stop piecing together conflicting forum advice. Learn cannabis
          cultivation the structured way — one lesson at a time, at your own
          pace.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/course/basic-cannabis-cultivation"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-9 py-4 text-[17px] font-medium text-white transition-colors hover:bg-[#254a2e] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Enroll Now — $69
          </Link>
          <Link
            href="/#faq"
            className="inline-flex items-center justify-center rounded-lg border border-border bg-card px-9 py-4 text-[17px] font-medium text-foreground transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Read the FAQ
          </Link>
        </div>
        <p className="mt-5 text-[15px] text-muted-foreground">
          Lifetime access &middot; 7-day money-back guarantee &middot; No
          subscription
        </p>
      </div>
    </section>
  );
}
