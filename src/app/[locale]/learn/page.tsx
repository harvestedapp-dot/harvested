import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock } from "lucide-react";
import { getArticles } from "@/lib/articles";
import { getDictionary, isLocale, localePath, locales } from "@/lib/i18n";

const pageCopy = {
  en: {
    title: "Indoor Gardening Guides | Free Growing Articles",
    description:
      "Free, practical indoor gardening guides from Harvested — seed starting, grow lights, watering, plant nutrition, pH and EC, and reading your plant's signals.",
  },
  hy: {
    title: "Տնային այգեգործության ուղեցույցներ | Անվճար հոդվածներ",
    description:
      "Անվճար, գործնական ուղեցույցներ Harvested-ից — սերմի ցանք, աճեցման լամպեր, ջրում, բույսի սնուցում, pH և EC, և բույսիդ նշանները կարդալ։",
  },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/learn">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const { title, description } = pageCopy[locale];

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/learn`,
      languages: {
        en: "/en/learn",
        hy: "/hy/learn",
        "x-default": "/en/learn",
      },
    },
    openGraph: { title, description },
  };
}

export default async function LearnIndexPage({
  params,
}: PageProps<"/[locale]/learn">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);
  const copy = dict.learn;
  const articles = getArticles(locale);

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <p className="text-xs font-semibold tracking-wide text-primary uppercase">
        {copy.eyebrow}
      </p>
      <h1 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {copy.heading}
      </h1>
      <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
        {copy.subheading}
      </p>

      <ul className="mt-12 grid gap-6 sm:grid-cols-2">
        {articles.map((article) => (
          <li key={article.slug}>
            <Link
              href={localePath(locale, `/learn/${article.slug}`)}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              {article.heroImage && (
                <div className="overflow-hidden border-b border-border">
                  <img
                    src={article.heroImage.src}
                    alt={article.heroImage.alt}
                    width={1200}
                    height={675}
                    loading="lazy"
                    className="h-44 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                  />
                </div>
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
                  {dict.common.readGuide} →
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-16 rounded-2xl bg-primary p-8 text-center text-white sm:p-10">
        <h2 className="font-heading text-2xl font-semibold tracking-tight text-balance">
          {copy.ctaHeading}
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-white/80">{copy.ctaBody}</p>
        <Link
          href={localePath(locale, "/course/indoor-growing-for-beginners")}
          className="mt-6 inline-flex items-center justify-center rounded-lg bg-white px-8 py-3.5 text-[15px] font-medium text-primary transition-colors hover:bg-white/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          {copy.ctaButton}
        </Link>
      </div>
    </div>
  );
}
