"use client";

import { Check, ClipboardList } from "lucide-react";

import { IconButton } from "@/components/ui/IconButton";
import {
  useRfqCart,
  type RfqCartItem,
} from "@/components/rfq/RfqCartContext";

export interface AddToRfqButtonProps {
  product: Omit<RfqCartItem, "quantity">;
  label: string;
  addedLabel: string;
  className?: string;
}

/**
 * Toggle-style "Add to RFQ" control — adds a product to the persistent
 * multi-item RFQ cart (`useRfqCart`). Once added, shows a checkmark;
 * clicking again just increases that product's quantity in the cart
 * (there's no per-card remove — that happens on the `/rfq` review page)
 * rather than toggling it back out, so the icon stays a simple confirmation
 * rather than implying a second click undoes it.
 */
export function AddToRfqButton({
  product,
  label,
  addedLabel,
  className,
}: AddToRfqButtonProps) {
  const { addItem, isInCart } = useRfqCart();
  const inCart = isInCart(product.slug);

  return (
    <IconButton
      icon={
        inCart ? (
          <Check aria-hidden="true" className="size-4" />
        ) : (
          <ClipboardList aria-hidden="true" className="size-4" />
        )
      }
      aria-label={inCart ? addedLabel : label}
      variant="secondary"
      size="sm"
      onClick={() => addItem(product)}
      className={className}
    />
  );
}
