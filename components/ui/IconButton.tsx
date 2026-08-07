import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

const iconButtonVariants = cva(
  [
    "inline-flex shrink-0 items-center justify-center",
    "rounded-sm transition-all duration-200 ease-out hover:scale-105 active:scale-95",
    "focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2",
    "disabled:pointer-events-none disabled:scale-100 disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        primary: "bg-primary text-canvas hover:bg-ink",
        secondary:
          "border border-border bg-transparent text-ink hover:bg-stone",
        ghost: "bg-transparent text-ink hover:bg-stone",
      },
      size: {
        sm: "size-9",
        md: "size-11",
        lg: "size-13",
      },
    },
    defaultVariants: {
      variant: "ghost",
      size: "md",
    },
  },
);

interface CommonProps extends VariantProps<typeof iconButtonVariants> {
  className?: string;
  icon: ReactNode;
  /** Required — an icon-only control must always describe its action to assistive tech. */
  "aria-label": string;
}

type IconButtonAsButton = CommonProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof CommonProps> & {
    href?: undefined;
  };

type IconButtonAsLink = CommonProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, keyof CommonProps> & {
    href: ComponentPropsWithoutRef<typeof Link>["href"];
  };

export type IconButtonProps = IconButtonAsButton | IconButtonAsLink;

/** Icon-only control, e.g. close, menu toggle, carousel arrows. Always requires `aria-label`. */
export function IconButton({
  variant,
  size,
  className,
  icon,
  ...props
}: IconButtonProps) {
  const classes = cn(iconButtonVariants({ variant, size }), className);

  if ("href" in props && props.href !== undefined) {
    const { href, ...linkProps } = props as IconButtonAsLink;
    return (
      <Link href={href} className={classes} {...linkProps}>
        {icon}
      </Link>
    );
  }

  const buttonOnlyProps = props as Omit<IconButtonAsButton, keyof CommonProps>;
  return (
    <button
      type={buttonOnlyProps.type ?? "button"}
      className={classes}
      {...buttonOnlyProps}
    >
      {icon}
    </button>
  );
}
