import { ImageResponse } from "next/og";
import { isLocale, locales, type Locale } from "@/lib/i18n";
import { COURSE_PRICE_AMD, formatAmd } from "@/lib/pricing";

const PRICE = formatAmd(COURSE_PRICE_AMD);

export const alt = "Harvested — Indoor Gardening Course";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const copy: Record<Locale, { headline: string; sub: string; trust: string[] }> = {
  en: {
    headline: "Learn Indoor Gardening from Seed to Harvest",
    sub: `A practical, step-by-step online course for beginners — 6 modules, lifetime access, ${PRICE} one-time.`,
    trust: ["Beginner Friendly", "Self-Paced", "7-Day Guarantee"],
  },
  hy: {
    headline: "Սորվէ ներսի պարտիզպանութիւն՝ սերմէն մինչեւ բերք",
    sub: `Գործնական, քայլ առ քայլ առցանց դասընթաց սկսնակներու համար — 6 բաժին, ցմահ մուտք, ${PRICE} մէկանգամեայ։`,
    trust: ["Սկսնակներու համար", "Ինքնաշխատ", "7-օրեայ երաշխիք"],
  },
};

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const text = copy[isLocale(locale) ? locale : "en"];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          backgroundColor: "#1a3320",
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(255,255,255,0.08), transparent 55%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: 14,
              backgroundColor: "#ffffff",
              color: "#1a3320",
              fontSize: 34,
              fontWeight: 700,
            }}
          >
            H
          </div>
          <div style={{ fontSize: 36, fontWeight: 600 }}>Harvested</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 60,
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: -1.5,
              maxWidth: 950,
            }}
          >
            {text.headline}
          </div>
          <div
            style={{
              fontSize: 28,
              color: "rgba(255,255,255,0.75)",
              maxWidth: 850,
            }}
          >
            {text.sub}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 28,
            fontSize: 22,
            color: "rgba(255,255,255,0.85)",
          }}
        >
          <div>{text.trust[0]}</div>
          <div>·</div>
          <div>{text.trust[1]}</div>
          <div>·</div>
          <div>{text.trust[2]}</div>
          <div>·</div>
          <div>start-growing.com</div>
        </div>
      </div>
    ),
    size
  );
}
