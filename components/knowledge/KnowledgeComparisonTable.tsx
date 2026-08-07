import Image from "next/image";

import { Card } from "@/components/ui/Card";
import { Heading } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { Text } from "@/components/ui/Text";
import { Link } from "@/i18n/navigation";
import { getSectorImage } from "@/lib/sectors";

export interface KnowledgeComparisonProduct {
  slug: string;
  name: string;
  image: string | null;
  href: string;
}

export interface KnowledgeComparisonRow {
  label: string;
  /** One value per product in `products`, in the same order — `null` when that product has no matching specification. */
  values: (string | null)[];
}

export interface KnowledgeComparisonTableProps {
  title: string;
  products: KnowledgeComparisonProduct[];
  rows: KnowledgeComparisonRow[];
  noValueLabel: string;
}

/**
 * Reused by two callers: the Knowledge Platform's curated `type:
 * "product-comparison"` articles, and the interactive Product Comparison
 * Engine (`/compare`, via `ComparisonView`) for a user's own selection.
 * Every row is built by the caller from the compared products' own real
 * `specifications` (`lib/product-comparison.ts`'s `buildComparisonRows`,
 * see `data/products/`) — this component never authors or invents a
 * comparison point itself.
 */
export function KnowledgeComparisonTable({
  title,
  products,
  rows,
  noValueLabel,
}: KnowledgeComparisonTableProps) {
  if (products.length === 0) return null;

  return (
    <div>
      <Reveal>
        <Heading level={2} tone="inverse" className="mb-10 lg:mb-12">
          {title}
        </Heading>
      </Reveal>
      <Reveal delay={0.05}>
        <Card
          variant="glass"
          padding="none"
          className="border-gold/15 overflow-x-auto"
        >
          <table className="w-full min-w-[480px] border-collapse">
            <thead>
              <tr className="border-canvas/10 border-b">
                <th className="p-4 text-start">
                  <span className="sr-only">{title}</span>
                </th>
                {products.map((product) => (
                  <th key={product.slug} className="p-4 text-start">
                    <Link
                      href={product.href}
                      className="group flex items-center gap-3"
                    >
                      <span className="relative size-12 shrink-0 overflow-hidden rounded-lg">
                        <Image
                          src={getSectorImage(product.image)}
                          alt=""
                          fill
                          sizes="48px"
                          className="object-cover"
                        />
                      </span>
                      <Text
                        weight="semibold"
                        tone="inverse"
                        className="group-hover:text-gold transition-colors"
                      >
                        {product.name}
                      </Text>
                    </Link>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr
                  key={row.label}
                  className="border-canvas/10 border-b last:border-0"
                >
                  <td className="p-4">
                    <Text size="sm" tone="inverse" className="opacity-60">
                      {row.label}
                    </Text>
                  </td>
                  {row.values.map((value, index) => (
                    <td key={products[index]!.slug} className="p-4">
                      <Text size="sm" tone="inverse" weight="medium">
                        {value ?? noValueLabel}
                      </Text>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </Reveal>
    </div>
  );
}
