import Image from "next/image";

import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

const LOGO_WIDTH = 1774;
const LOGO_HEIGHT = 887;

const SRC_BY_VARIANT = {
  // Official lockup exactly as supplied, opaque white background baked
  // in (no alpha channel) — correct as-is only on light grounds; on dark
  // grounds it needs a light backdrop plate at the call site (see
  // `Footer.tsx` and `HeroIntro.tsx`).
  standard: "/brand/goltens-logo-premium.png",
  // Generated from the standard file: background made transparent and
  // the near-black wordmark/globe-shadow ink flipped to white, while the
  // gold dots/text are left untouched — a proper "on dark surfaces"
  // variant rather than the opaque original with a plate behind it. Used
  // by the (permanently dark) Navbar. Regenerate via a one-off script
  // rather than hand-editing if the source lockup ever changes.
  dark: "/brand/goltens-logo-premium-dark.png",
} as const;

export interface LogoImageProps {
  className?: string;
  /** Defaults to "standard" (the plain lockup, for light grounds). "dark" is the transparent, light-ink variant for dark surfaces like the Navbar. */
  variant?: keyof typeof SRC_BY_VARIANT;
}

/**
 * The official GOLTENS Premium lockup, rendered exactly as supplied — no
 * stretching, cropping, or shadows applied to it. Sizing is height-driven
 * (`className` sets a height, width follows via `w-auto`) so the 2:1
 * aspect ratio is always preserved regardless of where it's placed.
 *
 * `next/image` (not `unoptimized`) so Next generates the responsive
 * srcset this file needs for Retina/high-DPI screens — the source is a
 * large 1774×887 export, and letting Next serve appropriately downscaled,
 * compressed variants per rendered size and device pixel ratio is what
 * keeps it crisp without shipping the full file at every size.
 */
export function LogoImage({ className, variant = "standard" }: LogoImageProps) {
  return (
    <Image
      src={SRC_BY_VARIANT[variant]}
      alt="GOLTENS GENERAL SUPPLIES"
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
      priority
      className={cn("h-8 w-auto", className)}
    />
  );
}

export interface LogoProps {
  className?: string;
  /** Rendered height. Defaults to the Footer's compact size; the Navbar passes "lg" for a taller mark. */
  iconSize?: "default" | "lg";
}

/** Logo lockup, linking to the home page. Used in the Navbar and Footer. */
export function Logo({ className, iconSize = "default" }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center transition-opacity duration-200 ease-out hover:opacity-80",
        className,
      )}
    >
      <LogoImage className={iconSize === "lg" ? "h-10" : "h-8"} />
    </Link>
  );
}
