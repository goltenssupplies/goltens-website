import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const skeletonVariants = cva("motion-safe:animate-pulse bg-stone", {
  variants: {
    variant: {
      text: "h-4 rounded-sm",
      block: "rounded-md",
      circle: "rounded-full",
    },
  },
  defaultVariants: {
    variant: "text",
  },
});

export interface LoadingSkeletonProps extends VariantProps<
  typeof skeletonVariants
> {
  className?: string;
  /** Accessible label announced while content is loading — pass the translated string, this component has no default text. */
  label: string;
}

/** Placeholder shape shown while real content loads. Set width/height via `className`. */
export function LoadingSkeleton({
  variant,
  className,
  label,
}: LoadingSkeletonProps) {
  return (
    <div
      role="status"
      aria-label={label}
      className={cn(skeletonVariants({ variant }), className)}
    />
  );
}
