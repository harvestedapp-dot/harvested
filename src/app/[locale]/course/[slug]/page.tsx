import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  FileText,
  Infinity as InfinityIcon,
  Layers,
  LineChart,
  Library,
  Lightbulb,
  Monitor,
  Play,
  RefreshCw,
  ShieldCheck,
  UserCheck,
  Video,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CountUp } from "@/components/count-up";
import { FreePreviewCta } from "@/components/free-preview-cta";
import { PaymentMarks } from "@/components/payment-marks";
import { PRICE_CURRENCY, formatAmd } from "@/lib/pricing";
import {
  FREE_PREVIEW_LESSON_COUNT,
  FREE_PREVIEW_URL,
} from "@/lib/site-config";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getAvailableCourseSlugs, getCourseBySlug } from "@/lib/courses";
import { siteConfig } from "@/lib/site-config";
import {
  getDictionary,
  isLocale,
  localePath,
  locales,
  localeTags,
} from "@/lib/i18n";

/** Icons for the "What's Included" cards, matched to the data order. */
const includedIcons = [
  Layers,
  Video,
  ClipboardCheck,
  LineChart,
  BookOpen,
  Library,
  Lightbulb,
  InfinityIcon,
  RefreshCw,
];

/** Photo strip: the indoor grow journey at a glance. Labels come from the
 *  dictionary so they follow the visitor's locale. */
const journeyImages = [
  {
    src: "https://images.unsplash.com/photo-1779622520933-79b2926a97dd?auto=format&fit=crop&w=800&h=800&q=80",
    alt: {
      en: "Tiny seedlings sprouting from soil in a labelled seed tray — the first stage covered in the indoor growing course",
      hy: "Փոքրիկ ծիլեր բուսնում են հողից՝ պիտակավորված սերմի սկուտեղում — դասընթացի առաջին փուլը",
    },
  },
  {
    src: "https://images.unsplash.com/photo-1783759935182-6317f3988b0f?auto=format&fit=crop&w=800&h=800&q=80",
    alt: {
      en: "Young plants growing indoors under a pink LED grow light",
      hy: "Երիտասարդ բույսեր աճում են ներսում՝ վարդագույն LED աճեցման լամպի տակ",
    },
  },
  {
    src: "https://images.unsplash.com/photo-1635774855717-0aec182f92cc?auto=format&fit=crop&w=800&h=800&q=80",
    alt: {
      en: "Basket of freshly harvested homegrown vegetables and salad leaves",
      hy: "Զամբյուղ՝ նոր հավաքված տնական բանջարեղենով և կանաչիով",
    },
  },
];

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getAvailableCourseSlugs().map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/course/[slug]">): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};

  const course = getCourseBySlug(locale, slug);
  if (!course || course.status !== "available") return {};

  const title =
    locale === "hy"
      ? `${course.title} | Տնային այգեգործության առցանց դասընթաց`
      : `${course.title} | Online Indoor Gardening Course`;
  const description = course.heroDescription ?? course.shortDescription;

  return {
    title,
    description,
    keywords:
      locale === "hy"
        ? [
            "տնային այգեգործության դասընթաց",
            "բույս աճեցնել տանը",
            "այգեգործություն սկսնակների համար",
            "սերմից մինչև բերք",
          ]
        : [
            "indoor gardening course",
            "indoor growing for beginners",
            "how to grow plants indoors",
            "indoor horticulture education",
            "seed to harvest",
          ],
    alternates: {
      canonical: `/${locale}/course/${course.slug}`,
      languages: {
        en: `/en/course/${course.slug}`,
        hy: `/hy/course/${course.slug}`,
        "x-default": `/en/course/${course.slug}`,
      },
    },
    openGraph: { title, description, type: "website" },
  };
}

export default async function CoursePage({ params }: PageProps<"/[locale]/course/[slug]">) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const course = getCourseBySlug(locale, slug);
  if (!course || course.status !== "available") {
    notFound();
  }

  const dict = getDictionary(locale);
  const copy = dict.coursePage;

  const enrollHref = `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(
    `Enroll in ${course.title}`
  )}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.heroDescription ?? course.shortDescription,
    url: `${siteConfig.url}/${locale}/course/${course.slug}`,
    inLanguage: localeTags[locale],
    educationalLevel: course.level,
    teaches: course.curriculum?.map((unit) => unit.title),
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "Online",
      courseWorkload: "PT8H",
    },
    offers: course.price
      ? {
          "@type": "Offer",
          price: course.price,
          priceCurrency: PRICE_CURRENCY,
          category: "Paid",
          availability: "https://schema.org/InStock",
        }
      : undefined,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: dict.nav[0].label,
        item: `${siteConfig.url}/${locale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: dict.nav[1].label,
        item: `${siteConfig.url}/${locale}/#courses`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: course.title,
        item: `${siteConfig.url}/${locale}/course/${course.slug}`,
      },
    ],
  };

  return (
    <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Link
        href={localePath(locale, "/#courses")}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-4" />
        {copy.backToCourses}
      </Link>

      <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_360px]">
        <div>
          <h1 className="hero-enter font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {course.title}
          </h1>
          {(course.overview ?? [course.heroDescription]).map((paragraph) => (
            <p
              key={paragraph}
              className="hero-enter mt-4 text-lg text-pretty text-muted-foreground"
              style={{ "--enter-delay": "80ms" } as React.CSSProperties}
            >
              {paragraph}
            </p>
          ))}

          <div
            className="hero-enter mt-6 flex flex-wrap items-center gap-x-4 gap-y-2.5 text-sm text-muted-foreground"
            style={{ "--enter-delay": "160ms" } as React.CSSProperties}
          >
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#EAF3DE] px-3.5 py-1.5 font-medium text-[#3B6D11]">
              <Play className="size-3 fill-current" aria-hidden />
              {copy.firstLessonsFree(FREE_PREVIEW_LESSON_COUNT)}
            </span>
            {course.level && (
              <span className="inline-flex items-center gap-1.5">
                <Layers className="size-4" />
                {course.level}
              </span>
            )}
            {course.duration && (
              <span className="inline-flex items-center gap-1.5">
                <Clock className="size-4" />
                {course.duration}
              </span>
            )}
            {course.format && (
              <span className="inline-flex items-center gap-1.5">
                <Monitor className="size-4" />
                {course.format}
              </span>
            )}
          </div>

          <img
            src="https://images.unsplash.com/photo-1638777922445-b17e22c87e70?auto=format&fit=crop&w=1200&h=675&q=80"
            alt={
              locale === "hy"
                ? "Երեք երիտասարդ համեմունքային բույս՝ ծաղկամաններում, սկուտեղի վրա, ներսի արևի լույսի տակ"
                : "Three young herb plants in pots on a tray, lit by sunlight indoors — beginner indoor gardening course from seed to harvest"
            }
            width={1200}
            height={675}
            className="hero-enter mt-8 aspect-[16/9] w-full rounded-2xl border border-border object-cover shadow-sm"
            style={{ "--enter-delay": "240ms" } as React.CSSProperties}
          />

          <div
            className="hero-enter mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4"
            style={{ "--enter-delay": "320ms" } as React.CSSProperties}
          >
            {[
              { value: course.curriculum?.length ?? 0, label: copy.stats.modules },
              {
                value:
                  course.curriculum?.reduce(
                    (total, unit) => total + unit.lessons.length,
                    0
                  ) ?? 0,
                label: copy.stats.lessons,
              },
              {
                value: course.bonusResources?.length ?? 0,
                label: copy.stats.bonus,
              },
              { value: "∞", label: copy.stats.lifetime },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-border bg-card px-4 py-4 text-center"
              >
                <p className="font-brand text-[32px] leading-none font-semibold text-primary">
                  {typeof stat.value === "number" ? (
                    <CountUp to={stat.value} />
                  ) : (
                    stat.value
                  )}
                </p>
                <p className="mt-1.5 text-[13px] text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {course.outcomes && course.outcomes.length > 0 && (
            <section className="mt-12" data-reveal>
              <h2 className="font-heading text-2xl font-semibold text-foreground">
                {copy.whatYouLearn}
              </h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {course.outcomes.map((outcome, index) => (
                  <li
                    key={outcome}
                    className="flex items-start gap-2.5 text-sm"
                    data-reveal
                    style={
                      {
                        "--reveal-delay": `${index * 60}ms`,
                      } as React.CSSProperties
                    }
                  >
                    <CheckCircle2 className="mt-0.5 size-4.5 shrink-0 text-primary" />
                    <span className="text-foreground">{outcome}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <div className="mt-12 grid grid-cols-3 gap-3">
            {journeyImages.map((image, index) => (
              <figure
                key={image.src}
                data-reveal
                style={
                  { "--reveal-delay": `${index * 90}ms` } as React.CSSProperties
                }
              >
                <span className="block overflow-hidden rounded-xl border border-border">
                  <img
                    src={image.src}
                    alt={image.alt[locale]}
                    width={800}
                    height={800}
                    loading="lazy"
                    className="aspect-square w-full object-cover transition duration-300 ease-out motion-safe:hover:scale-[1.04]"
                  />
                </span>
                <figcaption className="mt-2 text-center text-[13px] font-medium text-muted-foreground">
                  {copy.journeyLabels[index]}
                </figcaption>
              </figure>
            ))}
          </div>

          {course.included && course.included.length > 0 && (
            <section className="mt-12">
              <h2
                className="font-heading text-2xl font-semibold text-foreground"
                data-reveal
              >
                {copy.whatsIncluded}
              </h2>
              <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {course.included.map((item, index) => {
                  const Icon = includedIcons[index] ?? CheckCircle2;
                  return (
                    <li
                      key={item}
                      className="rounded-xl border border-border bg-card p-4 transition duration-300 ease-out motion-safe:hover:-translate-y-1 hover:border-primary/30"
                      data-reveal
                      style={
                        {
                          "--reveal-delay": `${index * 60}ms`,
                        } as React.CSSProperties
                      }
                    >
                      <span className="flex size-9 items-center justify-center rounded-lg bg-secondary">
                        <Icon className="size-4.5 text-primary" aria-hidden />
                      </span>
                      <p className="mt-3 text-sm leading-snug text-foreground">
                        {item}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </section>
          )}

          {course.curriculum && course.curriculum.length > 0 && (
            <section id="curriculum" className="mt-12 scroll-mt-24">
              <div data-reveal>
                <h2 className="font-heading text-2xl font-semibold text-foreground">
                  {copy.curriculum}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  {copy.curriculumMeta(
                    course.curriculum.length,
                    course.curriculum.reduce(
                      (total, unit) => total + unit.lessons.length,
                      0
                    ),
                    course.duration ?? ""
                  )}
                </p>
              </div>
              <Accordion className="mt-5 rounded-2xl border border-border bg-card px-6">
                {course.curriculum.map((module, index) => (
                  <AccordionItem
                    key={module.title}
                    value={`module-${index}`}
                    data-reveal
                    style={
                      {
                        "--reveal-delay": `${index * 70}ms`,
                      } as React.CSSProperties
                    }
                  >
                    <AccordionTrigger className="py-5 text-base">
                      <span className="flex w-full items-center">
                        <span className="mr-3.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-secondary text-[12px] font-bold text-primary">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        {module.title}
                        <span className="ml-auto pl-4 text-sm font-normal whitespace-nowrap text-muted-foreground">
                          {copy.lessonsCount(module.lessons.length)}
                        </span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ol className="space-y-2 text-muted-foreground">
                        {module.lessons.map((lesson, lessonIndex) => {
                          const isFreePreview =
                            index === 0 &&
                            lessonIndex < FREE_PREVIEW_LESSON_COUNT;
                          return (
                            <li key={lesson} className="flex gap-2.5">
                              <span className="w-5 shrink-0 text-right tabular-nums">
                                {lessonIndex + 1}.
                              </span>
                              {isFreePreview ? (
                                <a
                                  href={FREE_PREVIEW_URL}
                                  data-free-preview
                                  className="group/preview inline-flex flex-wrap items-center gap-2 font-medium text-foreground"
                                >
                                  <span className="underline-offset-2 group-hover/preview:underline">
                                    {lesson}
                                  </span>
                                  <span className="inline-flex items-center gap-1 rounded-full bg-[#EAF3DE] px-2.5 py-0.5 text-[12px] font-medium text-[#3B6D11]">
                                    <Play
                                      className="size-2.5 fill-current"
                                      aria-hidden
                                    />
                                    {dict.common.freePreviewBadge}
                                  </span>
                                </a>
                              ) : (
                                lesson
                              )}
                            </li>
                          );
                        })}
                      </ol>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          )}

          <section
            aria-label="Try the course for free"
            className="mt-12 rounded-2xl border-[0.5px] border-primary/20 bg-[#EAF3DE]/45 p-6 text-center sm:p-10"
            data-reveal
          >
            <span
              aria-hidden
              className="mx-auto flex size-12 items-center justify-center rounded-full bg-primary text-white"
            >
              <Play className="size-4.5 fill-current" />
            </span>
            <h2 className="mt-4 font-heading text-2xl font-semibold text-foreground">
              {copy.stillNotSure}
            </h2>
            <p className="mx-auto mt-2 max-w-md text-[16px] text-muted-foreground">
              {copy.stillNotSureBody(FREE_PREVIEW_LESSON_COUNT)}
            </p>
            <FreePreviewCta
              variant="solid"
              label={copy.startFreeLessons}
              className="mt-6"
            />
          </section>

          {course.bonusResources && course.bonusResources.length > 0 && (
            <section
              className="mt-12 rounded-2xl bg-[#1a3320] p-6 sm:p-8"
              data-reveal
            >
              <p className="inline-block rounded-full border-[0.5px] border-[rgba(168,216,120,0.3)] bg-[rgba(168,216,120,0.12)] px-4 py-1.5 text-[13px] font-medium tracking-[0.06em] text-[#a8d878] uppercase">
                {copy.bonusEyebrow}
              </p>
              <h2 className="mt-4 font-heading text-2xl font-semibold text-white">
                {copy.bonusHeading}
              </h2>
              <p className="mt-2 text-sm text-white/65">
                {copy.bonusBody.before}
                <span className="font-semibold text-[#a8d878]">
                  {copy.bonusBody.highlight(course.bonusResources.length)}
                </span>
                {copy.bonusBody.after}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {course.bonusResources.map((resource) => (
                  <li
                    key={resource}
                    className="inline-flex items-center gap-1.5 rounded-full border-[0.5px] border-white/10 bg-white/[0.07] px-3.5 py-1.5 text-[13px] text-white/85 transition-colors duration-200 hover:border-white/25 hover:bg-white/[0.15] hover:text-white"
                  >
                    <FileText
                      className="size-3.5 shrink-0 text-[#a8d878]"
                      aria-hidden
                    />
                    {resource}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {course.audience && course.audience.length > 0 && (
            <section className="mt-12" data-reveal>
              <h2 className="font-heading text-2xl font-semibold text-foreground">
                {copy.whoFor}
              </h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {course.audience.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 rounded-xl border border-border bg-card p-4 text-sm"
                  >
                    <UserCheck className="mt-0.5 size-4.5 shrink-0 text-primary" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {course.requirements && course.requirements.length > 0 && (
            <section className="mt-12" data-reveal>
              <h2 className="font-heading text-2xl font-semibold text-foreground">
                {copy.requirements}
              </h2>
              <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                {course.requirements.map((requirement) => (
                  <li key={requirement} className="flex items-start gap-2.5">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                    {requirement}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        <aside className="lg:sticky lg:top-24 lg:h-fit">
          <div
            id="enroll"
            className="hero-enter rounded-2xl border border-border bg-card p-6 shadow-sm"
            style={{ "--enter-delay": "200ms" } as React.CSSProperties}
          >
            {course.price && (
              <p className="text-3xl font-semibold text-foreground">
                <span className="font-brand whitespace-nowrap">
                  {formatAmd(course.price)}
                </span>
                <span className="ml-1.5 font-sans text-base font-normal text-muted-foreground">
                  {copy.oneTime}
                </span>
              </p>
            )}
            <Button
              size="lg"
              className="mt-5 w-full text-base transition duration-200 ease-out motion-safe:hover:scale-[1.02] motion-safe:active:scale-[0.99]"
              nativeButton={false}
              render={<a href={enrollHref} />}
            >
              {dict.common.letsGrow}
            </Button>
            <FreePreviewCta
              variant="outline"
              label={dict.common.freeLessonsCta}
              className="mt-3 w-full py-3 text-[15px]"
            />
            <p className="mt-2.5 text-center text-[13px] text-muted-foreground">
              {copy.watchFree(FREE_PREVIEW_LESSON_COUNT)}
            </p>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              {copy.perks.map((perk) => (
                <li key={perk} className="flex items-center gap-2.5">
                  <CheckCircle2 className="size-4 text-primary" />
                  {perk}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-start gap-2.5 rounded-lg bg-secondary p-3.5">
              <ShieldCheck className="mt-0.5 size-4.5 shrink-0 text-primary" />
              <p className="text-[13px] leading-relaxed text-muted-foreground">
                <span className="font-medium text-foreground">
                  {copy.guaranteeTitle}
                </span>{" "}
                {copy.guaranteeBody}{" "}
                <Link
                  href={localePath(locale, "/refund-policy")}
                  className="underline underline-offset-2 hover:text-foreground"
                >
                  {copy.refundLink}
                </Link>
              </p>
            </div>
            <PaymentMarks
              label={dict.common.paymentsAccepted}
              className="mt-6"
            />
          </div>
        </aside>
      </div>
    </div>
  );
}
