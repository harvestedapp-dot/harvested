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
import { courses } from "@/lib/courses";

const courseImages: Record<string, { src: string; alt: string }> = {
  "basic-cannabis-cultivation": {
    src: "https://images.unsplash.com/photo-1598565296723-98537e27d824?auto=format&fit=crop&w=800&q=80",
    alt: "Healthy young cannabis seedling growing in a clay pot at home — beginner indoor cannabis growing course from seed to harvest",
  },
  "advanced-cannabis-cultivation": {
    src: "https://images.unsplash.com/photo-1758930879074-1dcd817e6cf6?auto=format&fit=crop&w=800&q=80",
    alt: "Cannabis bud overtaken by white webbing and mold — learn to spot and stop pests and diseases before they ruin your harvest",
  },
  "cannabis-diagnostics": {
    src: "https://images.unsplash.com/photo-1626083552642-07aa4eb867e7?auto=format&fit=crop&w=800&q=80",
    alt: "Indoor cannabis plants in pots with drip irrigation feed lines delivering nutrients — cannabis nutrition and feeding basics course",
  },
};

export function CoursesSection() {
  return (
    <section id="courses" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center" data-reveal>
          <p className="mb-5 inline-block rounded-[20px] bg-[#EAF3DE] px-5 py-2.5 text-[17px] font-medium tracking-[0.06em] text-[#3B6D11] uppercase">
            Course Library
          </p>
          <h2 className="font-heading text-[36px] leading-[1.15] font-semibold tracking-tight text-foreground sm:text-[44px]">
            Cannabis Cultivation Courses
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Start growing your skills with our beginner course today. New
            cannabis growing courses join the library as they&rsquo;re
            released.
          </p>
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
                      alt={image.alt}
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
                        <Play className="size-3 fill-current" aria-hidden />2
                        Free Lessons
                      </span>
                    )}
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-center justify-between gap-2">
                    <Badge variant={isAvailable ? "default" : "secondary"}>
                      {isAvailable ? "Available Now" : "Coming Soon"}
                    </Badge>
                    {!isAvailable && (
                      <Lock className="size-4 text-muted-foreground" />
                    )}
                  </div>
                  <CardTitle className="mt-3 text-xl">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="text-[16px] leading-[1.6]">
                    {course.shortDescription}
                  </CardDescription>
                </CardHeader>
                {isAvailable && (
                  <CardContent>
                    <span className="inline-flex items-center gap-1.5 text-[16px] font-semibold text-primary">
                      Learn More
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
                href={`/course/${course.slug}`}
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
