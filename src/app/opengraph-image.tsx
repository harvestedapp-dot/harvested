import { ImageResponse } from "next/og";

export const alt =
  "Harvested — Learn Indoor Gardening from Seed to Harvest";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: -1.5,
              maxWidth: 950,
            }}
          >
            Learn Indoor Gardening from Seed to Harvest
          </div>
          <div
            style={{
              fontSize: 28,
              color: "rgba(255,255,255,0.75)",
              maxWidth: 850,
            }}
          >
            A practical, step-by-step online course for beginners — 6 modules,
            lifetime access, $69 one-time.
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
          <div>Beginner Friendly</div>
          <div>·</div>
          <div>Self-Paced</div>
          <div>·</div>
          <div>7-Day Guarantee</div>
          <div>·</div>
          <div>harvested.app</div>
        </div>
      </div>
    ),
    size
  );
}
