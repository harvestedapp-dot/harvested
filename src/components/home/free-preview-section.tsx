import Link from "next/link";
import { CheckCircle2, Lock, Play } from "lucide-react";
import { FreePreviewCta } from "@/components/free-preview-cta";
import { getAvailableCourses } from "@/lib/courses";
import { FREE_PREVIEW_LESSON_COUNT } from "@/lib/site-config";

const benefits = [
  "Full-length lessons from the real course — not a trailer",
  "No payment details required, just a free account",
  "Your progress carries over if you decide to enroll",
];

export function FreePreviewSection() {
  const course = getAvailableCourses()[0];
  const firstModuleLessons = course?.curriculum?.[0]?.lessons ?? [];
  const previewLessons = firstModuleLessons.slice(
    0,
    FREE_PREVIEW_LESSON_COUNT
  );
  const lockedLesson = firstModuleLessons[FREE_PREVIEW_LESSON_COUNT];
  const totalLessons =
    course?.curriculum?.reduce(
      (total, unit) => total + unit.lessons.length,
      0
    ) ?? 0;

  return (
    <section
      id="free-preview"
      aria-label="Try the course for free"
      className="border-t border-border bg-white py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-[1.1fr_1fr] md:gap-16">
          <div data-reveal>
            <p className="mb-5 inline-block rounded-[20px] bg-[#EAF3DE] px-5 py-2.5 text-[17px] font-medium tracking-[0.06em] text-[#3B6D11] uppercase">
              Try Before You Buy
            </p>
            <h2 className="font-display text-[36px] leading-[1.15] font-semibold tracking-tight text-balance text-foreground sm:text-[44px]">
              Watch the first two lessons free
            </h2>
            <p className="mt-4 max-w-xl text-lg text-muted-foreground">
              Not sure if an indoor growing course is right for you? Start
              Indoor Growing for Beginners for free — no card, no commitment.
              See the teaching style, the pace, and the production quality
              before you spend a dollar.
            </p>

            <ul className="mt-7 space-y-3">
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-2.5 text-[16px] text-foreground"
                >
                  <CheckCircle2
                    className="mt-0.5 size-5 shrink-0 text-primary"
                    aria-hidden
                  />
                  {benefit}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <FreePreviewCta variant="solid" />
              <Link
                href="/#courses"
                className="inline-flex items-center justify-center rounded-lg border border-border bg-card px-8 py-4 text-[17px] font-medium text-foreground transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Browse All Courses
              </Link>
            </div>
            <p className="mt-4 text-[14px] text-muted-foreground">
              Free account &middot; No credit card &middot; Cancel anytime
            </p>
          </div>

          <div
            data-reveal
            style={{ "--reveal-delay": "100ms" } as React.CSSProperties}
          >
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-7">
              <p className="text-[13px] font-medium tracking-[0.06em] text-muted-foreground uppercase">
                Module 1 &middot; {course?.title}
              </p>
              <ul className="mt-5 space-y-2.5">
                {previewLessons.map((lesson, index) => (
                  <li
                    key={lesson}
                    className="flex items-center gap-3.5 rounded-xl border-[0.5px] border-primary/20 bg-[#EAF3DE]/45 px-4 py-3.5"
                  >
                    <span
                      aria-hidden
                      className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-white"
                    >
                      <Play className="size-3.5 fill-current" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[15px] font-medium text-foreground">
                        {index + 1}. {lesson}
                      </span>
                      <span className="mt-0.5 block text-[13px] font-medium text-[#3B6D11]">
                        Free preview
                      </span>
                    </span>
                  </li>
                ))}
                {lockedLesson && (
                  <li className="flex items-center gap-3.5 rounded-xl border-[0.5px] border-border bg-secondary/50 px-4 py-3.5 opacity-75">
                    <span
                      aria-hidden
                      className="flex size-9 shrink-0 items-center justify-center rounded-full bg-secondary text-muted-foreground"
                    >
                      <Lock className="size-3.5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[15px] font-medium text-foreground">
                        {FREE_PREVIEW_LESSON_COUNT + 1}. {lockedLesson}
                      </span>
                      <span className="mt-0.5 block text-[13px] text-muted-foreground">
                        Unlocks with enrollment
                      </span>
                    </span>
                  </li>
                )}
              </ul>
              <p className="mt-5 border-t border-border pt-4 text-[13px] text-muted-foreground">
                {`${totalLessons} lessons total · enroll once to unlock everything, forever`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
