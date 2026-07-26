import { ImageResponse } from "next/og";

export const OG_IMAGE_SIZE = { width: 1200, height: 630 };

export function renderOgImage(tagline: string) {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #F5F0D9 0%, #DCEEDC 100%)",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 72, fontWeight: 700, color: "#2B2118" }}>
          <span>Luciana</span>
          <span style={{ color: "#FFAA42" }}>Nutri</span>
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 32,
            color: "#4A3F2E",
            textAlign: "center",
            maxWidth: 880,
          }}
        >
          {tagline}
        </div>
      </div>
    ),
    OG_IMAGE_SIZE
  );
}
