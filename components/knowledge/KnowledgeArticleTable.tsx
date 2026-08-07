import { Text } from "@/components/ui/Text";

export interface KnowledgeArticleTableRow {
  label: string;
  values: string[];
}

export interface KnowledgeArticleTableProps {
  /** Small label shown above the table, e.g. "Pump Configuration Comparison" — omit for none. */
  caption?: string;
  headers: string[];
  rows: KnowledgeArticleTableRow[];
}

/**
 * A plain in-body comparison table — for comparing options, standards, or
 * systems the article's own text already describes (e.g. two suppression
 * agents, three pump configurations). Hairline rows on the page's own
 * background, not a bordered/shadowed card — reads as a technical-document
 * table, not another UI box. Every row comes from the article's approved
 * copy, never an invented figure — distinct from `KnowledgeComparisonTable`,
 * which compares real `Product.specifications`.
 */
export function KnowledgeArticleTable({
  caption,
  headers,
  rows,
}: KnowledgeArticleTableProps) {
  return (
    <div>
      {caption && (
        <Text
          size="xs"
          weight="semibold"
          tone="inverse"
          className="mb-3 opacity-50 tracking-wide uppercase"
        >
          {caption}
        </Text>
      )}
      <div className="border-canvas/10 overflow-x-auto rounded-lg border">
        <table className="w-full min-w-[480px] border-collapse">
          <thead>
            <tr className="border-canvas/10 bg-canvas/[0.03] border-b">
              <th className="p-3 text-start">
                <span className="sr-only">Criteria</span>
              </th>
              {headers.map((header) => (
                <th key={header} className="p-3 text-start">
                  <Text size="sm" weight="semibold" tone="inverse">
                    {header}
                  </Text>
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
                <td className="p-3">
                  <Text size="sm" tone="inverse" className="opacity-60">
                    {row.label}
                  </Text>
                </td>
                {row.values.map((value, index) => (
                  <td key={headers[index]} className="p-3">
                    <Text size="sm" tone="inverse" weight="medium">
                      {value}
                    </Text>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
