# Knowledge Center editorial standard

Approved by the site owner on 2026-11-10. Every new or revised
`KnowledgeItem` must meet all of the following before it is merged.

## Audience and value

- Written for a procurement engineer or supply officer preparing an enquiry,
  not for a general reader. General background alone is not enough: each
  article must help the reader write a better specification, compare offers,
  or avoid a specific mistake.
- Every article ends with an **RFQ Checklist** section listing exactly what
  to send for a quotation, followed by a **Sources and Review** section.

## Accuracy and sources

- Technical and legal statements come from the original standard or law, not
  from general knowledge. Distinguish terms the source distinguishes (for
  example nominal network voltage vs rated equipment voltage; forms of
  internal separation vs safety ratings).
- **Sources and Review** lists each standard with its number, edition and
  year, or each law with its number, year and the articles relied on, and
  states the date the content was last reviewed. Set `updatedAt` to the same
  date.
- Legal articles carry the "general information, not legal advice" note and
  point to the official text and its amendments.

## Claims about GOLTENS

- Never present GOLTENS as a manufacturer, authorized agent, dealer or
  distributor, and never mention certifications, clients, projects, stock or
  lead times. GOLTENS sources against the customer's specification from
  manufacturers the customer's consultant or owner approves.
- No brand names in the body, except where a standard or the law itself is
  being named.

## SEO, per article

- `seo.title_*` (about 60 characters) and `seo.description_*` (about 155
  characters) written for that article alone, in both languages.
- `seo.keywords`: the Arabic and English queries the article targets.
- Search intent recorded in the data file's header comment.
- Internal links through the data relations only: `relatedSectorIds`,
  `relatedProductIds` (rendered once the product is public) and
  `relatedKnowledgeIds`.

## Release

- The Knowledge Center stays on its discovery hold
  (`KNOWLEDGE_CENTER_ENABLED = false`) and nothing is merged until
  typecheck, lint and build pass and the owner has reviewed the content.
