import { Heading } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { Text } from "@/components/ui/Text";

export interface SectorAvailableProductsProps {
  title: string;
  items: string[];
}

/**
 * "Available Products" — a flat bullet list of generic product categories
 * GOLTENS can source for this sector. Deliberately plain (no cards, no
 * icons, no manufacturer/model text): the customer chooses the product,
 * not the brand — GOLTENS sources the right manufacturer after quotation.
 * Renders nothing when a sector has no registered list yet.
 */
export function SectorAvailableProducts({
  title,
  items,
}: SectorAvailableProductsProps) {
  if (items.length === 0) return null;

  return (
    <div>
      <Reveal>
        <Heading level={2} tone="inverse" className="mb-10 lg:mb-12">
          {title}
        </Heading>
      </Reveal>

      <Reveal delay={0.05}>
        <ul className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span
                aria-hidden="true"
                className="bg-gold mt-2.5 size-1.5 shrink-0 rounded-full"
              />
              <Text tone="inverse" className="opacity-80">
                {item}
              </Text>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  );
}
