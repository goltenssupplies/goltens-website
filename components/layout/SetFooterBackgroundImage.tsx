"use client";

import { useEffect } from "react";

import { useFooterBackground } from "@/components/layout/FooterBackgroundContext";

interface SetFooterBackgroundImageProps {
  /** The current page's own Hero photo path (already resolved by the page, e.g. via `getSectorImage()`), or `null` to let the Footer fall back to its own default. */
  image: string | null;
  /** CSS `object-position` override — only needed when this photo's default center crop lands on an unusably dark/empty band once cropped to the Footer's much shorter/wider aspect ratio (e.g. the home page's night skyline photo, biased toward its bright sky band). Omit for a normal center crop. */
  objectPosition?: string;
}

/**
 * Drop into a page to make the site-wide Footer's background photo match
 * that page's own Hero for as long as it stays mounted — same convention
 * as `SetWhatsAppMessage`. Renders nothing. On unmount the cleanup reverts
 * the override to `null`, so `FooterBackgroundImage` falls back to its own
 * default photo.
 */
export function SetFooterBackgroundImage({
  image,
  objectPosition,
}: SetFooterBackgroundImageProps) {
  const { setBackground } = useFooterBackground();

  useEffect(() => {
    setBackground(image, objectPosition);
    return () => setBackground(null);
  }, [image, objectPosition, setBackground]);

  return null;
}
