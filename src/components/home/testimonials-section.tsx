import { Sprout } from "lucide-react";
import { FreePreviewCta } from "@/components/free-preview-cta";
import { TestimonialsCarousel } from "@/components/home/testimonials-carousel";
import { getTestimonials } from "@/lib/testimonials";
import { siteConfig } from "@/lib/site-config";
import { localeTags, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/en";

/**
 * Student reviews. While the locale's testimonial list is empty this renders
 * an honest "first reviews coming" invitation instead of quotes. On
 * translated locales `translationNotice` states that the quotes are
 * translations of reviews written in another language.
 */
export function TestimonialsSection({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const testimonials = getTestimonials(locale);
  const copy = dict.testimonials;

  if (testimonials.length === 0) {
    return (
      <section
        id="reviews"
        aria-label={copy.ariaLabel}
        className="border-t border-border py-20 sm:py-28"
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-3xl border-[0.5px] border-border bg-card px-6 py-14 text-center sm:px-12">
            <p className="mb-5 inline-block rounded-[20px] bg-[#EAF3DE] px-5 py-2.5 text-[17px] font-medium tracking-[0.06em] text-[#3B6D11] uppercase">
              {copy.eyebrow}
            </p>
            <h2 className="mx-auto max-w-2xl font-heading text-[36px] leading-[1.15] font-semibold tracking-tight text-balance text-foreground sm:text-[44px]">
              {copy.emptyHeading}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              {copy.emptyBody}
            </p>
            <div className="mx-auto mt-8 flex max-w-md items-start gap-3 rounded-xl bg-secondary p-4 text-left">
              <Sprout
                className="mt-0.5 size-5 shrink-0 text-primary"
                aria-hidden
              />
              <p className="text-[14px] leading-relaxed text-muted-foreground">
                <span className="font-medium text-foreground">
                  {copy.emptyNoteTitle}
                </span>{" "}
                {copy.emptyNoteBody}
              </p>
            </div>
            <div className="mt-9">
              <FreePreviewCta variant="solid" label={copy.emptyCta} />
            </div>
          </div>
        </div>
      </section>
    );
  }

  const ratings = testimonials
    .map((testimonial) => testimonial.rating)
    .filter((rating): rating is number => typeof rating === "number");

  const jsonLd =
    ratings.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "Course",
          name: "Indoor Growing for Beginners",
          url: `${siteConfig.url}/${locale}/course/indoor-growing-for-beginners`,
          inLanguage: localeTags[locale],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: (
              ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length
            ).toFixed(1),
            reviewCount: ratings.length,
            bestRating: 5,
          },
          review: testimonials
            .filter((testimonial) => testimonial.rating)
            .map((testimonial) => ({
              "@type": "Review",
              reviewBody: testimonial.quote,
              datePublished: testimonial.date,
              author: { "@type": "Person", name: testimonial.name },
              reviewRating: {
                "@type": "Rating",
                ratingValue: testimonial.rating,
                bestRating: 5,
              },
            })),
        }
      : null;

  return (
    <section
      id="reviews"
      aria-label={copy.ariaLabel}
      className="border-t border-border py-20 sm:py-28"
    >
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center" data-reveal>
          <p className="mb-5 inline-block rounded-[20px] bg-[#EAF3DE] px-5 py-2.5 text-[17px] font-medium tracking-[0.06em] text-[#3B6D11] uppercase">
            {copy.eyebrow}
          </p>
          <h2 className="font-heading text-[36px] leading-[1.15] font-semibold tracking-tight text-foreground sm:text-[44px]">
            {copy.heading}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {copy.subheading}
          </p>
          {copy.translationNotice && (
            <p className="mt-3 text-[14px] text-muted-foreground/80">
              {copy.translationNotice}
            </p>
          )}
        </div>

        <TestimonialsCarousel
          testimonials={testimonials}
          ratingLabels={testimonials.map((testimonial) =>
            copy.ratingLabel(testimonial.rating ?? 0)
          )}
          slideLabels={testimonials.map((_, index) =>
            copy.slideLabel(index + 1, testimonials.length)
          )}
        />
      </div>
    </section>
  );
}
