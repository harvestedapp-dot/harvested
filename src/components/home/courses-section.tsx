import Link from "next/link";
import { ArrowRight, Lock, Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getCourses } from "@/lib/courses";
import { localePath, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/en";

/** Card artwork is shared across locales; only the alt text is translated. */
const courseImages: Record<
  string,
  { src: string; alt: Record<Locale, string> }
> = {
  "indoor-growing-for-beginners": {
    src: "https://images.unsplash.com/photo-1776604965126-86eed56418b9?auto=format&fit=crop&w=800&q=80",
    alt: {
      en: "Young tomato plants growing in pots on a sunny windowsill — beginner indoor gardening course from seed to harvest",
      hy: "Երիտասարդ լոլիկի բույսեր՝ ծաղկամաններում, արևոտ պատուհանագոգին — տնային այգեգործության դասընթաց սկսնակների համար",
    },
  },
  "pests-and-diseases": {
    src: "https://images.unsplash.com/photo-1671970798775-4d8bd1cb5198?auto=format&fit=crop&w=800&q=80",
    alt: {
      en: "Green leaves chewed and spotted by pests — learn to spot and stop indoor plant problems early",
      hy: "Վնասատուներից ծակծկված և բծավոր կանաչ տերևներ — սովորի՛ր վաղ ճանաչել ներսի բույսերի դժվարությունները",
    },
  },
  "plant-nutrition-basics": {
    src: "https://images.unsplash.com/photo-1778035121136-ecaefa3cac8f?auto=format&fit=crop&w=800&q=80",
    alt: {
      en: "Potted plant beside nutrient bottles and a measuring label — plant nutrition, pH and EC basics course",
      hy: "Ծաղկամանում բույս՝ պարարտանյութի շշերի և չափիչ սարքի կողքին — սնուցման, pH-ի և EC-ի հիմունքների դասընթաց",
    },
  },
};

export function CoursesSection({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const courses = getCourses(locale);
  const copy = dict.coursesSection;

  return (
    <section id="courses" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center" data-reveal>
          <p className="mb-5 inline-block rounded-[20px] bg-[#EAF3DE] px-5 py-2.5 text-[17px] font-medium tracking-[0.06em] text-[#3B6D11] uppercase">
            {copy.eyebrow}
          </p>
          <h2 className="font-heading text-[36px] leading-[1.15] font-semibold tracking-tight text-foreground sm:text-[44px]">
            {copy.heading}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{copy.subheading}</p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.slice(0, 3).map((course, index) => {
            const isAvailable = course.status === "available";
            const image = courseImages[course.slug];

            const cardBody = (
              <Card
                className={
                  isAvailable
                    ? "h-full pt-0 ring-primary/15 transition-[box-shadow,transform] duration-300 group-hover:-translate-y-1 group-hover:shadow-lg"
                    : "h-full pt-0 opacity-70"
                }
              >
                {image && (
                  <div className="relative overflow-hidden rounded-t-xl">
                    <img
                      src={image.src}
                      alt={image.alt[locale]}
                      width={800}
                      height={450}
                      loading="lazy"
                      className={
                        isAvailable
                          ? "h-40 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                          : "h-40 w-full object-cover grayscale-[35%]"
                      }
                    />
                    {isAvailable && (
                      <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[13px] font-medium text-[#3B6D11]">
                        <Play className="size-3 fill-current" aria-hidden />
                        {dict.common.freeLessonsBadge}
                      </span>
                    )}
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-center justify-between gap-2">
                    <Badge variant={isAvailable ? "default" : "secondary"}>
                      {isAvailable
                        ? dict.common.availableNow
                        : dict.common.comingSoon}
                    </Badge>
                    {!isAvailable && (
                      <Lock className="size-4 text-muted-foreground" />
                    )}
                  </div>
                  <CardTitle className="mt-3 text-xl">{course.title}</CardTitle>
                  <CardDescription className="text-[16px] leading-[1.6]">
                    {course.shortDescription}
                  </CardDescription>
                </CardHeader>
                {isAvailable && (
                  <CardContent>
                    <span className="inline-flex items-center gap-1.5 text-[16px] font-semibold text-primary">
                      {dict.common.learnMore}
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </CardContent>
                )}
              </Card>
            );

            const revealDelay = {
              "--reveal-delay": `${index * 100}ms`,
            } as React.CSSProperties;

            if (!isAvailable) {
              return (
                <div
                  key={course.slug}
                  className="group"
                  data-reveal
                  style={revealDelay}
                >
                  {cardBody}
                </div>
              );
            }

            return (
              <Link
                key={course.slug}
                href={localePath(locale, `/course/${course.slug}`)}
                className="group rounded-xl focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                data-reveal
                style={revealDelay}
              >
                {cardBody}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
