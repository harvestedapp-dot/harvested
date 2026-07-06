import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CheckCircle2,
  Clock,
  Layers,
  Monitor,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
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
    title: `${course.title} | Beginner Cannabis Growing Course Online`,
    description: course.heroDescription ?? course.shortDescription,
    keywords: [
      "cannabis cultivation course",
      "cannabis growing for beginners",
      "learn to grow cannabis",
      "online cannabis education",
      "seed to harvest",
    ],
    alternates: { canonical: `/course/${course.slug}` },
    openGraph: {
      title: `${course.title} | Beginner Cannabis Growing Course Online`,
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
          <h1 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {course.title}
          </h1>
          <p className="mt-4 text-lg text-pretty text-muted-foreground">
            {course.heroDescription}
          </p>

          <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted-foreground">
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
            src="https://images.unsplash.com/photo-1598565296723-98537e27d824?auto=format&fit=crop&w=1200&h=675&q=80"
            alt="Healthy young cannabis seedling growing in a clay pot at home — beginner indoor cannabis growing course from seed to harvest"
            width={1200}
            height={675}
            className="mt-8 aspect-[16/9] w-full rounded-2xl border border-border object-cover shadow-sm"
          />

          {course.outcomes && course.outcomes.length > 0 && (
            <section className="mt-12">
              <h2 className="font-heading text-2xl font-semibold text-foreground">
                What You&apos;ll Learn
              </h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {course.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2 className="mt-0.5 size-4.5 shrink-0 text-primary" />
                    <span className="text-foreground">{outcome}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {course.curriculum && course.curriculum.length > 0 && (
            <section id="curriculum" className="mt-12 scroll-mt-24">
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
              <Accordion className="mt-5 rounded-2xl border border-border bg-card px-6">
                {course.curriculum.map((module, index) => (
                  <AccordionItem key={module.title} value={`module-${index}`}>
                    <AccordionTrigger className="py-5 text-base">
                      <span className="flex w-full items-baseline">
                        <span className="mr-2 text-muted-foreground">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        {module.title}
                        <span className="ml-auto pl-4 text-sm font-normal whitespace-nowrap text-muted-foreground">
                          {module.lessons.length} lessons
                        </span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 text-muted-foreground">
                        {module.lessons.map((lesson) => (
                          <li key={lesson}>{lesson}</li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          )}

          {course.audience && course.audience.length > 0 && (
            <section className="mt-12">
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
            <section className="mt-12">
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
          <div id="enroll" className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            {course.price && (
              <p className="font-heading text-4xl font-semibold text-foreground">
                ${course.price}
                <span className="ml-1.5 text-base font-normal text-muted-foreground">
                  one-time
                </span>
              </p>
            )}
            <Button
              size="lg"
              className="mt-5 w-full text-base"
              nativeButton={false}
              render={<a href={enrollHref} />}
            >
              Enroll Now
            </Button>
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
                  30-day money-back guarantee.
                </span>{" "}
                Full refund within 30 days if the course isn&rsquo;t for you.{" "}
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
