"use client";

import Image from "next/image";

import { useFooterBackground } from "@/components/layout/FooterBackgroundContext";
import { getSectorImage } from "@/lib/sectors";

/**
 * The Footer's own background photo layer — the same photo as whichever
 * Hero is currently on screen (via `FooterBackgroundContext`), or the
 * shared Hero fallback photo (`getSectorImage(null)`) on pages with no
 * Hero of their own (e.g. `/contact`, `/about`, legal pages). Same dark
 * scrim every Hero variant already uses
 * (`bg-gradient-to-t from-ink via-ink/50 to-transparent`), so the Footer
 * reads as part of the same visual system. `opacity-60` (verified against
 * every photo currently in use, including the home page's night skyline
 * photo — its warm lights and pink sky read as near-black at a lower
 * opacity once this same scrim sits on top) keeps the photo genuinely
 * visible, not just a tint, while the scrim still keeps every Footer
 * link/label legible over it. Rendered as the very first child inside
 * `Footer`'s `relative overflow-hidden` surface, behind the existing
 * grid-pattern texture and glow blobs, and beneath the flat `#0d1117`
 * base color already painted on `<footer>` itself.
 */
export function FooterBackgroundImage() {
  const { image, objectPosition } = useFooterBackground();

  return (
    <>
      <Image
        src={getSectorImage(image)}
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-60"
        style={{ objectPosition }}
      />
      <div
        aria-hidden="true"
        className="from-ink via-ink/50 pointer-events-none absolute inset-0 bg-gradient-to-t to-transparent"
      />
    </>
  );
}
