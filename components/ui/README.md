# ui/

Primitive, presentation-only building blocks — the base layer of the design
system. No data fetching, no routing, no page-specific copy: every string a
component displays is passed in by the caller (usually from a next-intl
`useTranslations()` call in the page). This keeps every component usable
unchanged in both `ar`/RTL and `en`/LTR.

Import from the barrel: `import { Button, Card, Heading } from "@/components/ui";`

RTL/LTR: components use logical Tailwind utilities (`ms-*`, `me-*`, `ps-*`,
`pe-*`, `start-*`, `end-*`) instead of physical ones, so nothing needs an
`rtl:` override to mirror correctly — see [CONVENTIONS.md](../../CONVENTIONS.md).
The few exceptions (directional icons like the Breadcrumb chevron) are called
out below.

---

## Container

Centers content and applies the page's horizontal gutters.

```tsx
<Container width="narrow">
  <Heading level={1}>...</Heading>
</Container>
```

| Prop    | Type                                        | Default     | Notes                             |
| ------- | ------------------------------------------- | ----------- | --------------------------------- |
| `width` | `"default" \| "narrow" \| "wide" \| "full"` | `"default"` | Max-width step                    |
| `as`    | `ElementType`                               | `"div"`     | Render as `section`, `main`, etc. |

## Section

Full-width page band with consistent vertical rhythm. Compose with
`Container` inside it for gutters.

```tsx
<Section spacing="lg" background="stone">
  <Container>...</Container>
</Section>
```

| Prop         | Type                                   | Default         |
| ------------ | -------------------------------------- | --------------- |
| `spacing`    | `"sm" \| "md" \| "lg"`                 | `"md"`          |
| `background` | `"canvas" \| "stone" \| "transparent"` | `"transparent"` |
| `as`         | `ElementType`                          | `"section"`     |

## Grid

Responsive CSS grid. Column count steps down automatically on smaller
screens (e.g. `columns={3}` → 1 column on mobile, 2 on tablet, 3 on desktop).

```tsx
<Grid columns={3} gap="lg">
  <FeatureCard ... />
  <FeatureCard ... />
</Grid>
```

| Prop      | Type                             | Default |
| --------- | -------------------------------- | ------- |
| `columns` | `1 \| 2 \| 3 \| 4 \| 6 \| 12`    | `3`     |
| `gap`     | `"none" \| "sm" \| "md" \| "lg"` | `"md"`  |

## Stack

Flexbox layout primitive for one-dimensional arrangements. Prefer this over
ad-hoc `flex` + margin utilities so spacing stays consistent everywhere.
`direction="row"` mirrors correctly in RTL automatically — `flex-row`
follows the document's logical inline direction, no `rtl:` override needed.

```tsx
<Stack direction="row" gap="sm" align="center" justify="between">
  <Text>Label</Text>
  <Badge>New</Badge>
</Stack>
```

| Prop        | Type                                             | Default    |
| ----------- | ------------------------------------------------ | ---------- |
| `direction` | `"row" \| "column"`                              | `"column"` |
| `gap`       | `"none" \| "xs" \| "sm" \| "md" \| "lg" \| "xl"` | `"md"`     |
| `align`     | `"start" \| "center" \| "end" \| "stretch"`      | —          |
| `justify`   | `"start" \| "center" \| "end" \| "between"`      | —          |
| `wrap`      | `boolean`                                        | `false`    |
| `as`        | `ElementType`                                    | `"div"`    |

## Divider

Border-token hairline rule.

```tsx
<Divider />
<Divider orientation="vertical" className="h-6" />
```

| Prop          | Type                         | Default        |
| ------------- | ---------------------------- | -------------- |
| `orientation` | `"horizontal" \| "vertical"` | `"horizontal"` |

---

## Heading

Semantic heading. `level` picks the rendered tag (h1–h5) for document
outline correctness; `size` (optional) decouples the _visual_ scale from it
— e.g. an `h2` that needs to read smaller than a neighboring `h3`.

Uses `font-display` (IBM Plex Sans Condensed) under English/LTR; falls back
to bold `font-sans-arabic` under Arabic/RTL — there is intentionally no
Arabic condensed display face in this system.

```tsx
<Heading level={2}>Section title</Heading>
<Heading level={2} size={4} tone="secondary">Smaller h2</Heading>
```

| Prop    | Type                                             | Default   | Notes                                   |
| ------- | ------------------------------------------------ | --------- | --------------------------------------- |
| `level` | `1 \| 2 \| 3 \| 4 \| 5`                          | —         | **Required.** Controls the rendered tag |
| `size`  | `1 \| 2 \| 3 \| 4 \| 5`                          | = `level` | Visual scale override                   |
| `tone`  | `"ink" \| "primary" \| "secondary" \| "inverse"` | `"ink"`   |                                         |

## Text

Body copy. Inherits `font-sans` / `font-sans-arabic` from the locale class
on `<body>` — no per-component locale check needed.

```tsx
<Text size="lg" tone="muted">
  Supporting copy.
</Text>
```

| Prop     | Type                                                                 | Default    |
| -------- | -------------------------------------------------------------------- | ---------- |
| `size`   | `"xs" \| "sm" \| "md" \| "lg" \| "xl"`                               | `"md"`     |
| `tone`   | `"ink" \| "muted" \| "inverse" \| "success" \| "warning" \| "error"` | `"ink"`    |
| `weight` | `"normal" \| "medium" \| "semibold"`                                 | `"normal"` |
| `as`     | `ElementType`                                                        | `"p"`      |

---

## Button

Renders a `<button>` by default, or a locale-aware `<Link>` when `href` is
passed — never choose between the two manually at the call site.

```tsx
<Button variant="primary" size="lg">{t("cta.requestQuote")}</Button>
<Button variant="secondary" href="/about">{t("nav.about")}</Button>
<Button loading disabled={isSubmitting}>{t("form.submit")}</Button>
```

| Prop                    | Type                                                               | Default     |
| ----------------------- | ------------------------------------------------------------------ | ----------- |
| `variant`               | `"primary" \| "secondary" \| "ghost" \| "accent" \| "destructive"` | `"primary"` |
| `size`                  | `"sm" \| "md" \| "lg"`                                             | `"md"`      |
| `fullWidth`             | `boolean`                                                          | `false`     |
| `href`                  | next-intl `Link` href                                              | —           | Renders as a link instead of a button              |
| `iconStart` / `iconEnd` | `ReactNode`                                                        | —           | Positioned by reading direction, not physical side |
| `loading`               | `boolean`                                                          | `false`     | Shows a spinner, disables the control              |

`variant="accent"` uses the Accent token — per the Graphite colour system,
reserve it for the single most important action on a page, not every button.

## IconButton

Icon-only control (close, menu toggle, carousel arrows). Same
button-or-link polymorphism as `Button`.

```tsx
<IconButton icon={<X className="size-4" />} aria-label={t("common.close")} />
```

| Prop         | Type                                  | Default   |
| ------------ | ------------------------------------- | --------- |
| `icon`       | `ReactNode`                           | —         | **Required**                                             |
| `aria-label` | `string`                              | —         | **Required** — icon-only controls must always be labeled |
| `variant`    | `"primary" \| "secondary" \| "ghost"` | `"ghost"` |
| `size`       | `"sm" \| "md" \| "lg"`                | `"md"`    |

---

## Badge

Compact status/category label. Not interactive — use `Button` for actions.

```tsx
<Badge tone="success">{t("status.active")}</Badge>
```

| Prop   | Type                                                                      | Default     |
| ------ | ------------------------------------------------------------------------- | ----------- |
| `tone` | `"neutral" \| "primary" \| "accent" \| "success" \| "warning" \| "error"` | `"neutral"` |

## Card

Generic content surface. Compose with `Heading`/`Text`/`Button` inside it
rather than building bespoke bordered boxes elsewhere.

```tsx
<Card variant="raised" padding="lg">
  <Heading level={3} size={4}>
    Title
  </Heading>
  <Text tone="muted">Body</Text>
</Card>
```

| Prop      | Type                                 | Default      |
| --------- | ------------------------------------ | ------------ |
| `variant` | `"outlined" \| "raised" \| "filled"` | `"outlined"` |
| `padding` | `"none" \| "sm" \| "md" \| "lg"`     | `"md"`       |
| `as`      | `ElementType`                        | `"div"`      |

## FeatureCard

Icon + title + description card, e.g. one tile in a services or industries
grid.

```tsx
<FeatureCard
  icon={<Ship className="size-5" />}
  title={t("services.logistics.title")}
  description={t("services.logistics.description")}
/>
```

| Prop           | Type          | Default |
| -------------- | ------------- | ------- |
| `icon`         | `ReactNode`   | —       |
| `title`        | `string`      | —       | **Required**                           |
| `description`  | `string`      | —       | **Required**                           |
| `headingLevel` | `2 \| 3 \| 4` | `3`     | Match the surrounding document outline |

## CTA

Full-width band prompting a single next action, e.g. closing a page with
"Request a Quotation".

```tsx
<CTA
  title={t("cta.title")}
  description={t("cta.description")}
  actions={<Button href="/rfq">{t("cta.action")}</Button>}
/>
```

| Prop          | Type                    | Default     |
| ------------- | ----------------------- | ----------- |
| `title`       | `string`                | —           | **Required**                                |
| `description` | `string`                | —           |
| `actions`     | `ReactNode`             | —           | **Required** — usually one or two `Button`s |
| `tone`        | `"primary" \| "canvas"` | `"primary"` |

---

## Breadcrumb

Page trail. The separator chevron is a directional icon and flips
automatically for RTL via `rtl:rotate-180`.

```tsx
<Breadcrumb
  label={t("breadcrumb.label")}
  items={[
    { label: t("nav.home"), href: "/" },
    { label: t("nav.services"), href: "/services" },
    { label: t("services.logistics.title") },
  ]}
/>
```

| Prop    | Type                                   | Default |
| ------- | -------------------------------------- | ------- |
| `items` | `{ label: string; href?: LinkHref }[]` | —       | **Required.** Omit `href` on the last (current) item |
| `label` | `string`                               | —       | **Required** — accessible name for the `<nav>`       |

## Timeline

Vertical process/step list, e.g. "how a quotation request is handled". The
connector rail and step markers sit on the logical inline-start edge, so the
whole timeline mirrors correctly under RTL with no `rtl:` overrides.

```tsx
<Timeline
  steps={[
    {
      title: t("process.step1.title"),
      description: t("process.step1.description"),
    },
    {
      title: t("process.step2.title"),
      description: t("process.step2.description"),
    },
  ]}
/>
```

| Prop    | Type                                                         | Default |
| ------- | ------------------------------------------------------------ | ------- |
| `steps` | `{ title: string; description: string; icon?: ReactNode }[]` | —       | **Required** |

---

## EmptyState

Placeholder for a list, search result, or dashboard panel with no data —
not a loading state, see `LoadingSkeleton` for that.

```tsx
<EmptyState
  title={t("search.empty.title")}
  description={t("search.empty.description")}
  action={<Button variant="secondary">{t("search.empty.action")}</Button>}
/>
```

| Prop          | Type        | Default |
| ------------- | ----------- | ------- |
| `icon`        | `ReactNode` | —       |
| `title`       | `string`    | —       | **Required** |
| `description` | `string`    | —       |
| `action`      | `ReactNode` | —       |

## LoadingSkeleton

Placeholder shape shown while real content loads. Set width/height via
`className`. Animation respects `prefers-reduced-motion` via Tailwind's
`motion-safe:` variant.

```tsx
<LoadingSkeleton variant="text" className="w-3/4" label={t("common.loading")} />
<LoadingSkeleton variant="circle" className="size-12" label={t("common.loading")} />
```

| Prop      | Type                            | Default  |
| --------- | ------------------------------- | -------- |
| `variant` | `"text" \| "block" \| "circle"` | `"text"` |
| `label`   | `string`                        | —        | **Required** — announced to screen readers while loading |

---

## Form controls (`ui/form/`)

All form controls share one visual system (`field-styles.ts`) and one
label/hint/error scaffold (`FormField` + `FieldMessage`), so spacing and
error styling can never drift between `Input`, `Textarea`, and `Select`.
Every control forwards a `ref` to its underlying native element, for future
integration with a form library.

Every control needs `"use client"` in whatever file renders it (they're
already client components themselves) since they generate their own ids via
`useId()`.

### Input

```tsx
<Input
  label={t("form.company.label")}
  placeholder={t("form.company.placeholder")}
  required
  error={errors.company}
/>
```

### Textarea

```tsx
<Textarea
  label={t("form.details.label")}
  rows={6}
  hint={t("form.details.hint")}
/>
```

### Select

Kept as a native `<select>` (styled) rather than a custom combobox, for full
keyboard and screen-reader support without extra JS.

```tsx
<Select
  label={t("form.industry.label")}
  placeholder={t("form.industry.placeholder")}
  options={[
    { label: t("industries.government"), value: "government" },
    { label: t("industries.healthcare"), value: "healthcare" },
  ]}
/>
```

### Checkbox

Visually-hidden native checkbox + a styled sibling box driven by
`peer-checked`, so keyboard and screen-reader behavior stays fully native.

```tsx
<Checkbox label={t("form.consent.label")} required />
```

Shared props across `Input` / `Textarea` / `Select` / `Checkbox`:

| Prop                 | Type     | Notes                                                               |
| -------------------- | -------- | ------------------------------------------------------------------- |
| `label`              | `string` | **Required**                                                        |
| `hint`               | `string` | Hidden automatically while `error` is set                           |
| `error`              | `string` | Also sets `aria-invalid` and the error border color                 |
| `containerClassName` | `string` | Class on the field's wrapper, vs. `className` on the control itself |

### FileUpload

Drag-and-drop / click-to-browse file picker with a **controlled** file list
— it holds no upload state of its own, so it composes with any form state
management.

```tsx
const [files, setFiles] = useState<File[]>([]);

<FileUpload
  label={t("form.attachments.label")}
  files={files}
  onFilesChange={setFiles}
  dropzoneLabel={t("form.attachments.dropzone")}
  removeFileLabel={(name) => t("form.attachments.remove", { name })}
  accept=".pdf,.jpg,.png"
/>;
```

| Prop                      | Type                                 | Notes                         |
| ------------------------- | ------------------------------------ | ----------------------------- |
| `files` / `onFilesChange` | `File[]` / `(files: File[]) => void` | **Required** — controlled     |
| `dropzoneLabel`           | `string`                             | **Required**                  |
| `removeFileLabel`         | `(fileName: string) => string`       | **Required**                  |
| `formatFileSize`          | `(bytes: number) => string`          | Defaults to a KB/MB formatter |
| `accept`, `multiple`      | passthrough to the native file input |                               |
