"use client";

import { Check, Scale } from "lucide-react";

import {
  useComparison,
  type ComparisonItem,
} from "@/components/products/ComparisonContext";
import { IconButton } from "@/components/ui/IconButton";

export interface AddToCompareButtonProps {
  product: ComparisonItem;
  label: string;
  addedLabel: string;
  className?: string;
}

/**
 * Toggle-style "Add to Compare" control over `useComparison` — unlike
 * `AddToRfqButton`, this one does toggle back off on a second click
 * (comparison is a working set you curate, not a running total).
 */
export function AddToCompareButton({
  product,
  label,
  addedLabel,
  className,
}: AddToCompareButtonProps) {
  const { toggleItem, isSelected } = useComparison();
  const selected = isSelected(product.slug);

  return (
    <IconButton
      icon={
        selected ? (
          <Check aria-hidden="true" className="size-4" />
        ) : (
          <Scale aria-hidden="true" className="size-4" />
        )
      }
      aria-label={selected ? addedLabel : label}
      aria-pressed={selected}
      variant={selected ? "primary" : "secondary"}
      size="sm"
      onClick={() => toggleItem(product)}
      className={className}
    />
  );
}
