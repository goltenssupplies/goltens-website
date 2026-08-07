"use client";

import {
  useState,
  type ComponentPropsWithoutRef,
  type PointerEvent,
  type ReactNode,
} from "react";
import type { VariantProps } from "class-variance-authority";
import { useReducedMotion } from "framer-motion";
import { Loader2 } from "lucide-react";

import { buttonVariants } from "@/components/ui/button-variants";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

interface Ripple {
  id: number;
  x: number;
  y: number;
  size: number;
}

let rippleId = 0;

interface CommonProps extends VariantProps<typeof buttonVariants> {
  className?: string;
  children: ReactNode;
  /** Icon rendered before the label (start of the reading direction). */
  iconStart?: ReactNode;
  /** Icon rendered after the label (end of the reading direction). */
  iconEnd?: ReactNode;
  /** Shows a spinner and disables the button, without shifting its size. */
  loading?: boolean;
}

type ButtonAsButton = CommonProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof CommonProps> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, keyof CommonProps> & {
    href: ComponentPropsWithoutRef<typeof Link>["href"];
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

/**
 * Primary call-to-action control. Renders a `<button>` by default, or a
 * locale-aware `<Link>` when `href` is passed — the caller never needs to
 * choose between the two manually. Adds a subtle pointer-triggered ripple
 * (skipped under `prefers-reduced-motion`) on top of a hover-lift/shadow
 * treatment shared by every variant.
 */
export function Button({
  variant,
  size,
  fullWidth,
  className,
  children,
  iconStart,
  iconEnd,
  loading = false,
  ...props
}: ButtonProps) {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const prefersReducedMotion = useReducedMotion();
  const classes = cn(buttonVariants({ variant, size, fullWidth }), className);

  function spawnRipple(event: PointerEvent<HTMLElement>) {
    if (prefersReducedMotion || event.button !== 0) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 1.6;
    const id = rippleId++;
    setRipples((current) => [
      ...current,
      { id, x: event.clientX - rect.left, y: event.clientY - rect.top, size },
    ]);
    setTimeout(() => {
      setRipples((current) => current.filter((ripple) => ripple.id !== id));
    }, 600);
  }

  const rippleLayer = ripples.map((ripple) => (
    <span
      key={ripple.id}
      aria-hidden="true"
      className="animate-button-ripple pointer-events-none absolute rounded-full bg-current/25"
      style={{
        left: ripple.x - ripple.size / 2,
        top: ripple.y - ripple.size / 2,
        width: ripple.size,
        height: ripple.size,
      }}
    />
  ));

  const content = (
    <>
      {loading ? (
        <Loader2 className="size-4 animate-spin" aria-hidden="true" />
      ) : (
        iconStart
      )}
      {children}
      {!loading && iconEnd}
      {rippleLayer}
    </>
  );

  if ("href" in props && props.href !== undefined) {
    const { href, onPointerDown, ...linkProps } = props as ButtonAsLink;
    return (
      <Link
        href={href}
        className={classes}
        aria-disabled={loading || undefined}
        onPointerDown={(event) => {
          onPointerDown?.(event);
          spawnRipple(event);
        }}
        {...linkProps}
      >
        {content}
      </Link>
    );
  }

  const { onPointerDown, ...buttonOnlyProps } = props as Omit<
    ButtonAsButton,
    keyof CommonProps
  >;
  return (
    <button
      type={buttonOnlyProps.type ?? "button"}
      disabled={loading || buttonOnlyProps.disabled}
      aria-busy={loading || undefined}
      className={classes}
      onPointerDown={(event) => {
        onPointerDown?.(event);
        spawnRipple(event);
      }}
      {...buttonOnlyProps}
    >
      {content}
    </button>
  );
}
