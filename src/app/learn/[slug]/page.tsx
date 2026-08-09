import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";
import { articles, getArticleBySlug } from "@/lib/articles";
import { siteConfig } from "@/lib/site-config";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) return {};

  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/learn/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.publishedAt,
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishedAt,
    inLanguage: "en-US",
    url: `${siteConfig.url}/learn/${article.slug}`,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  const publishedDate = new Date(`${article.publishedAt}T00:00:00Z`);

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <Link
        href="/learn"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-4" />
        All guides
      </Link>

      <article className="mt-8">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <p className="text-xs font-semibold tracking-wide text-primary uppercase">
            {article.category}
          </p>
          <p className="inline-flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="size-3.5" aria-hidden />
            {article.readingTime}
          </p>
          <time
            dateTime={article.publishedAt}
            className="text-xs text-muted-foreground"
          >
            {publishedDate.toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
              timeZone: "UTC",
            })}
          </time>
        </div>

        <h1 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl">
          {article.title}
        </h1>

        {article.heroImage && (
          <figure className="mt-8">
            <img
              src={article.heroImage.src}
              alt={article.heroImage.alt}
              width={1200}
              height={675}
              className="aspect-[16/9] w-full rounded-2xl border border-border object-cover shadow-sm"
            />
            {article.heroImage.caption && (
              <figcaption className="mt-2.5 text-center text-sm text-muted-foreground">
                {article.heroImage.caption}
              </figcaption>
            )}
          </figure>
        )}

        <div className="mt-8 space-y-4">
          {article.intro.map((paragraph) => (
            <p
              key={paragraph}
              className="text-lg leading-relaxed text-muted-foreground"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {article.sections.map((section) => (
          <section key={section.heading} className="mt-10">
            <h2 className="font-heading text-2xl font-semibold text-foreground">
              {section.heading}
            </h2>
            {section.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-4 leading-relaxed text-muted-foreground"
              >
                {paragraph}
              </p>
            ))}
            {section.list && (
              <ul className="mt-4 space-y-2.5">
                {section.list.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="leading-relaxed text-muted-foreground">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            )}
            {section.image && (
              <figure className="mt-6">
                <img
                  src={section.image.src}
                  alt={section.image.alt}
                  width={1200}
                  height={675}
                  loading="lazy"
                  className="aspect-[16/9] w-full rounded-2xl border border-border object-cover shadow-sm"
                />
                {section.image.caption && (
                  <figcaption className="mt-2.5 text-center text-sm text-muted-foreground">
                    {section.image.caption}
                  </figcaption>
                )}
              </figure>
            )}
          </section>
        ))}
      </article>

      <aside className="mt-14 rounded-2xl bg-primary p-8 text-white">
        <h2 className="font-heading text-xl font-semibold tracking-tight text-balance">
          Learn the whole process, in the right order
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-white/80">
          This guide covers one stage of the journey. Indoor Growing for
          Beginners walks you through all of them — 6 modules and 32 video
          lessons from seed to harvest, with lifetime access and a 7-day
          money-back guarantee.
        </p>
        <Link
          href="/course/indoor-growing-for-beginners"
          className="mt-5 inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-white/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Explore the Course — $69
        </Link>
      </aside>
    </div>
  );
}
