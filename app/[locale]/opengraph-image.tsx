import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const LOGO_ASPECT_RATIO = 1774 / 887;
// The new lockup is a 2:1 (vs. the old ~3.1:1) ratio — a taller mark at the
// same width, so the width is reduced from 760 to keep the same
// comfortable margin within the 1200x630 canvas rather than the logo
// dominating the card.
const LOGO_WIDTH = 500;

// Matches the flat white baked into the uploaded logo file, so the image
// drops onto the canvas with no visible seam around it.
const LOGO_BACKGROUND = "#ffffff";

export default async function OpengraphImage() {
  const logoBuffer = await readFile(
    path.join(process.cwd(), "public/brand/goltens-logo-premium.png"),
  );
  const logoSrc = `data:image/png;base64,${logoBuffer.toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: LOGO_BACKGROUND,
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- next/og's ImageResponse requires a plain <img>, not next/image. */}
      <img
        src={logoSrc}
        alt="GOLTENS GENERAL SUPPLIES"
        width={LOGO_WIDTH}
        height={Math.round(LOGO_WIDTH / LOGO_ASPECT_RATIO)}
      />
    </div>,
    size,
  );
}
