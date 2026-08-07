import Image from "next/image";

import {
  KnowledgeArticleTable,
  type KnowledgeArticleTableRow,
} from "@/components/knowledge/KnowledgeArticleTable";
import { KnowledgeCallout } from "@/components/knowledge/KnowledgeCallout";
import { Heading } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { Stack } from "@/components/ui/Stack";
import { Text } from "@/components/ui/Text";

export interface KnowledgeArticleListItem {
  items: string[];
  style: "bullet" | "number";
}

export interface KnowledgeArticleSubsectionItem {
  heading: string;
  paragraphs: string[];
  list?: KnowledgeArticleListItem;
}

export interface KnowledgeArticleSectionItem {
  /** Anchor id, also used by the "On this page" table of contents. */
  id: string;
  heading: string;
  paragraphs: string[];
  list?: KnowledgeArticleListItem;
  subsections?: KnowledgeArticleSubsectionItem[];
  callout?: { title: string; body: string };
  table?: {
    caption?: string;
    headers: string[];
    rows: KnowledgeArticleTableRow[];
  };
  image?: { src: string; caption?: string };
}

export interface KnowledgeArticleSectionsProps {
  items: KnowledgeArticleSectionItem[];
}

function ArticleList({ list }: { list: KnowledgeArticleListItem }) {
  const ListTag = list.style === "number" ? "ol" : "ul";
  return (
    <ListTag className={list.style === "number" ? "space-y-3" : "space-y-2.5"}>
      {list.items.map((entry, index) => (
        <li key={entry} className="flex items-start gap-3">
          {list.style === "number" ? (
            <span
              aria-hidden="true"
              className="text-gold mt-0.5 text-sm font-semibold tabular-nums"
            >
              {index + 1}.
            </span>
          ) : (
            <span
              aria-hidden="true"
              className="bg-gold mt-2.5 size-1.5 shrink-0 rounded-full"
            />
          )}
          <Text tone="inverse" className="leading-[1.75] opacity-85">
            {entry}
          </Text>
        </li>
      ))}
    </ListTag>
  );
}

const SECTION_GAP = "space-y-9 lg:space-y-11";
const STAGGER_SECONDS = 0.04;

/**
 * The article body — one H2 per real topic break, each carrying its own
 * anchor id for the "On this page" panel, instead of one long paragraph
 * block. A section optionally carries a bullet/numbered list, H3
 * subsections, an inline image, an "Important Note" callout, and/or a
 * comparison table — only the blocks it actually has.
 */
export function KnowledgeArticleSections({
  items,
}: KnowledgeArticleSectionsProps) {
  return (
    <div className={SECTION_GAP}>
      {items.map((section, index) => (
        <Reveal key={section.id} delay={index * STAGGER_SECONDS}>
          <div id={section.id} className="scroll-mt-28">
            <Stack gap="sm">
              <Heading level={2} size={4} tone="inverse">
                {section.heading}
              </Heading>
              <Stack gap="sm">
                {section.paragraphs.map((paragraph) => (
                  <Text
                    key={paragraph}
                    tone="inverse"
                    className="leading-[1.75] opacity-85"
                  >
                    {paragraph}
                  </Text>
                ))}
              </Stack>

              {section.list && <ArticleList list={section.list} />}

              {section.subsections?.map((subsection) => (
                <Stack key={subsection.heading} gap="sm" className="pt-1.5">
                  <Heading level={3} size={5} tone="inverse">
                    {subsection.heading}
                  </Heading>
                  <Stack gap="sm">
                    {subsection.paragraphs.map((paragraph) => (
                      <Text
                        key={paragraph}
                        tone="inverse"
                        className="leading-[1.8] opacity-85"
                      >
                        {paragraph}
                      </Text>
                    ))}
                  </Stack>
                  {subsection.list && <ArticleList list={subsection.list} />}
                </Stack>
              ))}

              {section.image && (
                <figure>
                  <div className="relative aspect-video overflow-hidden rounded-[20px]">
                    <Image
                      src={section.image.src}
                      alt=""
                      fill
                      loading="lazy"
                      sizes="(min-width: 1024px) 48rem, 100vw"
                      className="object-cover contrast-110 saturate-105 sepia-[0.08]"
                    />
                  </div>
                  {section.image.caption && (
                    <Text
                      as="figcaption"
                      size="sm"
                      tone="inverse"
                      className="mt-2 opacity-50"
                    >
                      {section.image.caption}
                    </Text>
                  )}
                </figure>
              )}

              {section.table && (
                <KnowledgeArticleTable
                  caption={section.table.caption}
                  headers={section.table.headers}
                  rows={section.table.rows}
                />
              )}

              {section.callout && (
                <KnowledgeCallout
                  title={section.callout.title}
                  body={section.callout.body}
                />
              )}
            </Stack>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
