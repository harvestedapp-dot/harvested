import type { Metadata } from "next";
import Link from "next/link";
import { Clock } from "lucide-react";
import { articles } from "@/lib/articles";

const title = "Cannabis Growing Guides | Free Cultivation Articles";
const description =
  "Free, science-based cannabis cultivation guides from Harvested — germination, light cycles, harvest timing, drying and curing, and more.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/learn" },
  openGraph: { title, description },
};

export default function LearnIndexPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <p className="text-xs font-semibold tracking-wide text-primary uppercase">
        Free Guides
      </p>
      <h1 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Cannabis Growing Guides
      </h1>
      <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
        Practical, science-based guides on cannabis cultivation — the same
        structured approach we teach in our courses, free to read.
      </p>

      <ul className="mt-12 grid gap-6 sm:grid-cols-2">
        {articles.map((article) => (
          <li key={article.slug}>
            <Link
              href={`/learn/${article.slug}`}
              className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-md"
            >
              {article.heroImage && (
                <img
                  src={article.heroImage.src}
                  alt={article.heroImage.alt}
                  width={1200}
                  height={675}
                  loading="lazy"
                  className="h-44 w-full border-b border-border object-cover"
                />
              )}
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between gap-3">
                <p className="text-xs font-semibold tracking-wide text-primary uppercase">
                  {article.category}
                </p>
                <p className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="size-3.5" aria-hidden />
                  {article.readingTime}
                </p>
              </div>
              <h2 className="mt-3 font-heading text-lg font-semibold text-balance text-foreground">
                {article.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {article.excerpt}
              </p>
                <span className="mt-4 pt-2 text-sm font-semibold text-primary">
                  Read the guide →
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-16 rounded-2xl bg-primary p-8 text-center text-white sm:p-10">
        <h2 className="font-heading text-2xl font-semibold tracking-tight text-balance">
          Ready to go beyond free guides?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-white/80">
          Basic Cannabis Cultivation covers the entire journey — 6 modules and
          18 lessons from seed to cured harvest, in the right order.
        </p>
        <Link
          href="/course/basic-cannabis-cultivation"
          className="mt-6 inline-flex items-center justify-center rounded-lg bg-white px-8 py-3.5 text-[15px] font-medium text-primary transition-colors hover:bg-white/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Explore the Course — $69
        </Link>
      </div>
    </div>
  );
}
