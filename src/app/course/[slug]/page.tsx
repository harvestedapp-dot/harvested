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
import { getAvailableCourses, getCourseBySlug } from "@/lib/courses";
import { siteConfig } from "@/lib/site-config";

interface CoursePageProps {
  params: Promise<{ slug: string }>;
}

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

/** Photo strip: the indoor grow journey at a glance. */
const journeyImages = [
  {
    src: "https://images.unsplash.com/photo-1779622520933-79b2926a97dd?auto=format&fit=crop&w=800&h=800&q=80",
    alt: "Tiny seedlings sprouting from soil in a labelled seed tray — the first stage covered in the indoor growing course",
    label: "Seed & sprout",
  },
  {
    src: "https://images.unsplash.com/photo-1783759935182-6317f3988b0f?auto=format&fit=crop&w=800&h=800&q=80",
    alt: "Young plants growing indoors under a pink LED grow light",
    label: "Grow & feed",
  },
  {
    src: "https://images.unsplash.com/photo-1635774855717-0aec182f92cc?auto=format&fit=crop&w=800&h=800&q=80",
    alt: "Basket of freshly harvested homegrown vegetables and salad leaves",
    label: "Flower & harvest",
  },
];

export function generateStaticParams() {
  return getAvailableCourses().map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({
  params,
}: CoursePageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course || course.status !== "available") return {};

  return {
    title: `${course.title} | Online Indoor Gardening Course`,
    description: course.heroDescription ?? course.shortDescription,
    keywords: [
      "indoor gardening course",
      "indoor growing for beginners",
      "how to grow plants indoors",
      "indoor horticulture education",
      "seed to harvest",
    ],
    alternates: { canonical: `/course/${course.slug}` },
    openGraph: {
      title: `${course.title} | Online Indoor Gardening Course`,
      description: course.heroDescription ?? course.shortDescription,
      type: "website",
    },
  };
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course || course.status !== "available") {
    notFound();
  }

  const enrollHref = `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(
    `Enroll in ${course.title}`
  )}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.heroDescription ?? course.shortDescription,
    url: `${siteConfig.url}/course/${course.slug}`,
    inLanguage: "en-US",
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
          priceCurrency: "USD",
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
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Courses",
        item: `${siteConfig.url}/#courses`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: course.title,
        item: `${siteConfig.url}/course/${course.slug}`,
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
        href="/#courses"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-4" />
        Back to all courses
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
              First {FREE_PREVIEW_LESSON_COUNT} lessons free
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
            alt="Three young herb plants in pots on a tray, lit by sunlight indoors — beginner indoor gardening course from seed to harvest"
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
              { value: course.curriculum?.length ?? 0, label: "modules" },
              {
                value:
                  course.curriculum?.reduce(
                    (total, unit) => total + unit.lessons.length,
                    0
                  ) ?? 0,
                label: "video lessons",
              },
              {
                value: course.bonusResources?.length ?? 0,
                label: "bonus resources",
              },
              { value: "∞", label: "lifetime access" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-border bg-card px-4 py-4 text-center"
              >
                <p className="font-display text-[32px] leading-none font-semibold text-primary">
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
                What You&apos;ll Learn
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
                key={image.label}
                data-reveal
                style={
                  { "--reveal-delay": `${index * 90}ms` } as React.CSSProperties
                }
              >
                <span className="block overflow-hidden rounded-xl border border-border">
                  <img
                    src={image.src}
                    alt={image.alt}
                    width={800}
                    height={800}
                    loading="lazy"
                    className="aspect-square w-full object-cover transition duration-300 ease-out motion-safe:hover:scale-[1.04]"
                  />
                </span>
                <figcaption className="mt-2 text-center text-[13px] font-medium text-muted-foreground">
                  {image.label}
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
                What&apos;s Included
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
                  Course Curriculum
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  {course.curriculum.length} modules &middot;{" "}
                  {course.curriculum.reduce(
                    (total, unit) => total + unit.lessons.length,
                    0
                  )}{" "}
                  lessons &middot; {course.duration}
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
                          {module.lessons.length} lessons
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
                                    Free preview
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
              Still not sure?
            </h2>
            <p className="mx-auto mt-2 max-w-md text-[16px] text-muted-foreground">
              Start with the first {FREE_PREVIEW_LESSON_COUNT} lessons for
              free and experience the course before purchasing. No payment
              details required.
            </p>
            <FreePreviewCta
              variant="solid"
              label="Start Free Lessons"
              className="mt-6"
            />
          </section>

          {course.bonusResources && course.bonusResources.length > 0 && (
            <section
              className="mt-12 rounded-2xl bg-[#1a3320] p-6 sm:p-8"
              data-reveal
            >
              <p className="inline-block rounded-full border-[0.5px] border-[rgba(168,216,120,0.3)] bg-[rgba(168,216,120,0.12)] px-4 py-1.5 text-[13px] font-medium tracking-[0.06em] text-[#a8d878] uppercase">
                Included free
              </p>
              <h2 className="mt-4 font-heading text-2xl font-semibold text-white">
                Bonus learning resources
              </h2>
              <p className="mt-2 text-sm text-white/65">
                In addition to the video lessons, you get{" "}
                <span className="font-semibold text-[#a8d878]">
                  {course.bonusResources.length} practical resources
                </span>{" "}
                covering every stage of your indoor grow.
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
                Who This Course Is For
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
                Requirements
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
              <p className="text-4xl font-semibold text-foreground">
                <span className="font-display">${course.price}</span>
                <span className="ml-1.5 font-sans text-base font-normal text-muted-foreground">
                  one-time
                </span>
              </p>
            )}
            <Button
              size="lg"
              className="mt-5 w-full text-base transition duration-200 ease-out motion-safe:hover:scale-[1.02] motion-safe:active:scale-[0.99]"
              nativeButton={false}
              render={<a href={enrollHref} />}
            >
              Let&apos;s Grow
            </Button>
            <FreePreviewCta
              variant="outline"
              className="mt-3 w-full py-3 text-[15px]"
            />
            <p className="mt-2.5 text-center text-[13px] text-muted-foreground">
              Watch the first {FREE_PREVIEW_LESSON_COUNT} lessons free — no
              payment details required.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="size-4 text-primary" />
                Lifetime access to this course
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="size-4 text-primary" />
                Self-paced, learn on any device
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="size-4 text-primary" />
                No prior experience required
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="size-4 text-primary" />
                One-time payment, no subscription
              </li>
            </ul>
            <div className="mt-6 flex items-start gap-2.5 rounded-lg bg-secondary p-3.5">
              <ShieldCheck className="mt-0.5 size-4.5 shrink-0 text-primary" />
              <p className="text-[13px] leading-relaxed text-muted-foreground">
                <span className="font-medium text-foreground">
                  7-day money-back guarantee.
                </span>{" "}
                Full refund within 7 days if the course isn&rsquo;t for you.{" "}
                <Link
                  href="/refund-policy"
                  className="underline underline-offset-2 hover:text-foreground"
                >
                  Refund policy
                </Link>
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
