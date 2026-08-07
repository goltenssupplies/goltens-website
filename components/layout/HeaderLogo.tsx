import { LogoImage } from "@/components/layout/Logo";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export interface HeaderLogoProps {
  className?: string;
}

/**
 * The Navbar's logo — uses `LogoImage`'s "dark" variant (transparent
 * background, white ink) rather than the standard opaque lockup behind a
 * light plate, so it sits directly on the header's own `#1B1F26` bar with
 * no rectangle behind it. 66px tall on mobile, 72px from `lg` up (~18%
 * larger again than the previous 56px/61px) — the header's own height is
 * a fixed 88px (`h-[88px]` on the `<Container>` in `Navbar.tsx`), so the
 * mark still sits with a few px of margin top and bottom, vertically
 * centered via the grid's `items-center`. Plain hover-opacity only: the
 * previous gold-sweep animation was a mask cut from the old logo's own
 * ribbon pixels, which no longer exists as an asset or as a matching
 * shape in this design.
 */
export function HeaderLogo({ className }: HeaderLogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center transition-opacity duration-200 ease-out hover:opacity-80",
        className,
      )}
    >
      <LogoImage variant="dark" className="h-[66px] lg:h-[72px]" />
    </Link>
  );
}
