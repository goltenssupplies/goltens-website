"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

import { Container } from "@/components/ui/Container";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import {
  MobileNavigation,
  type MobileNavItem,
} from "@/components/layout/MobileNavigation";
import { useSplash } from "@/components/layout/SplashContext";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

const SCROLL_THRESHOLD_PX = 12;
// Ignores sub-pixel/momentum jitter so a near-still trackpad doesn't flip
// the hide direction back and forth.
const DIRECTION_DELTA_PX = 5;
// How close to the viewport's top edge the cursor must get to reveal the
// header while it's hidden — desktop/hover-capable pointers only (see the
// `hover: hover` guard below), never on touch.
const TOP_REVEAL_ZONE_PX = 20;

export interface NavbarProps {
  /** Rendered at the header's start (right in Arabic/RTL, left in English/LTR). */
  logo: ReactNode;
  navItems: MobileNavItem[];
  /** Accessible label for the desktop primary nav landmark, e.g. "Primary". */
  primaryNavLabel: string;
  /** "Request a Quotation" Button, shown at the header's end next to the language switcher. */
  cta?: ReactNode;
  /** Accessible label for the mobile menu toggle when closed, e.g. "Open menu". */
  menuOpenLabel: string;
  /** Accessible label for the mobile menu toggle when open, e.g. "Close menu". */
  menuCloseLabel: string;
  className?: string;
}

/**
 * Fixed site header: logo / primary nav / language switcher (+ optional
 * CTA), laid out via a 3-column grid so the nav stays truly centered
 * regardless of how wide the logo or the actions group are. No `dir`
 * override here — the grid (and the nav's own flex row) follow the page's
 * natural direction, so under Arabic/RTL the logo sits at the visual
 * right with the nav reading right-to-left (Home nearest the logo,
 * language switcher at the far left), and mirrors to the conventional
 * logo-left arrangement under English/LTR — consistent with how every
 * other section on this site mirrors per locale.
 *
 * Premium light corporate bar (white, constant — no scrolled state) with a
 * subtle bottom hairline/shadow and a three-line gold/graphite/deep-teal
 * accent stripe along its bottom edge — a clean, high-end header treatment
 * rather than a generic light SaaS template.
 *
 * Also auto-hides: scrolling down slides it up out of view (via
 * `transform`, so it never reserves layout space), scrolling up or resting
 * the pointer over its own bounds reveals it again, and — desktop/hover
 * pointers only — moving the cursor to the viewport's top edge reveals it
 * even mid-hide. Touch input only ever gets the scroll-up reveal.
 */
export function Navbar({
  logo,
  navItems,
  primaryNavLabel,
  cta,
  menuOpenLabel,
  menuCloseLabel,
  className,
}: NavbarProps) {
  const pathname = usePathname();
  const { isSplashActive } = useSplash();
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollYRef = useRef(0);
  // Suppresses the auto-hide while the pointer is resting over the header
  // itself (e.g. reading the nav, opening the language switcher) — hiding
  // out from under an engaged cursor would feel broken, not premium.
  const isPointerOverHeaderRef = useRef(false);

  useEffect(() => {
    function handleScroll() {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollYRef.current;

      if (currentY <= SCROLL_THRESHOLD_PX) {
        setIsHidden(false);
      } else if (
        delta > DIRECTION_DELTA_PX &&
        !isPointerOverHeaderRef.current
      ) {
        setIsHidden(true);
      } else if (delta < -DIRECTION_DELTA_PX) {
        setIsHidden(false);
      }

      lastScrollYRef.current = currentY;
    }
    // Seed the ref with the current position first so a page that loads
    // already scrolled (e.g. a restored scroll position or a deep link)
    // computes a zero initial delta instead of reading its entire scroll
    // offset as one big downward swipe and hiding the header on arrival.
    lastScrollYRef.current = window.scrollY;
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Hover-driven reveal is a desktop/trackpad affordance — on touch
    // devices this listener never attaches, so `MouseEvent`s that some
    // mobile browsers synthesize from taps can't reveal the header there;
    // touch users get the scroll-up reveal only, per spec.
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return;
    }

    function handleMouseMove(event: MouseEvent) {
      if (event.clientY <= TOP_REVEAL_ZONE_PX) {
        setIsHidden(false);
      }
    }

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <header
      // Kept mounted (not unmounted) while the splash is active, or while
      // auto-hidden off-screen, so it can slide back in smoothly rather
      // than popping in; `inert` removes it from focus/tab order and
      // hit-testing in the meantime, on top of opacity/transform hiding it
      // visually.
      inert={isSplashActive || isHidden}
      aria-hidden={isSplashActive || isHidden || undefined}
      onMouseEnter={() => {
        isPointerOverHeaderRef.current = true;
        setIsHidden(false);
      }}
      onMouseLeave={() => {
        isPointerOverHeaderRef.current = false;
      }}
      className={cn(
        "border-border fixed inset-x-0 top-0 z-50 border-b bg-white shadow-[0_4px_20px_rgba(30,29,27,0.06)] transition-transform duration-300",
        isHidden ? "-translate-y-full" : "translate-y-0",
        isSplashActive && "pointer-events-none opacity-0",
        className,
      )}
    >
      <Container className="relative grid h-[88px] grid-cols-[auto_1fr_auto] items-center gap-8 lg:px-10">
        <div className="shrink-0 pe-9">{logo}</div>

        <nav
          aria-label={primaryNavLabel}
          className="hidden lg:flex lg:items-center lg:justify-center lg:gap-10"
        >
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "text-ink relative text-sm font-medium tracking-[0.04em] transition-colors duration-300 hover:text-[#C89B3C]",
                  "after:absolute after:inset-x-0 after:-bottom-1.5 after:h-px after:origin-center after:scale-x-0 after:bg-[#C89B3C] after:transition-transform after:duration-300 hover:after:scale-x-100",
                  isActive && "text-[#C89B3C] after:scale-x-100",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center justify-end gap-6">
          <div className="hidden items-center gap-6 lg:flex">
            <LanguageSwitcher />
            {cta}
          </div>

          <MobileNavigation
            navItems={navItems}
            openLabel={menuOpenLabel}
            closeLabel={menuCloseLabel}
            triggerClassName="text-ink hover:bg-stone hover:text-[#C89B3C]"
            actions={
              <>
                <LanguageSwitcher />
                {cta}
              </>
            }
          />
        </div>
      </Container>

      {/* Three-line accent stripe — gold / graphite / deep teal, 1px apart —
          along the header's bottom edge, per spec. Sits inside the header
          so it slides away with it on auto-hide instead of leaving a bare
          seam. */}
      <div aria-hidden="true" className="flex flex-col">
        <span className="h-[2px] w-full bg-[#C89B3C]" />
        <span className="mt-px h-px w-full bg-[#6D747C]" />
        <span className="mt-px h-[2px] w-full bg-[#1F4E5F]" />
      </div>
    </header>
  );
}
