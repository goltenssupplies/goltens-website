# forms/

Composite, multi-step-form chrome — currently built for the Request a
Quotation (RFQ) flow, but generic and content-agnostic: no RFQ-specific
field labels or copy live here. The actual RFQ page (a later sprint) will
compose these with `ui/form/*` controls and its own real field set.

Import from the barrel: `import { FormStepper, FormActions } from "@/components/forms";`

---

## FormStepper

Multi-step progress indicator. Purely a progress/chrome primitive — the
calling page owns step content and field copy.

```tsx
<FormStepper
  label={t("rfq.progressLabel")}
  steps={[t("rfq.step.company"), t("rfq.step.items"), t("rfq.step.review")]}
  currentStep={1}
/>
```

| Prop          | Type       | Notes                                                     |
| ------------- | ---------- | --------------------------------------------------------- |
| `steps`       | `string[]` | **Required**                                              |
| `currentStep` | `number`   | **Required** — zero-based index of the active step        |
| `label`       | `string`   | **Required** — accessible name for the containing `<nav>` |

## FormActions

Consistent back/forward button row for multi-step forms.

```tsx
<FormActions
  back={
    <Button variant="ghost" onClick={goBack}>
      {t("form.back")}
    </Button>
  }
  forward={<Button type="submit">{t("form.next")}</Button>}
/>
```

| Prop      | Type        | Notes                                                                     |
| --------- | ----------- | ------------------------------------------------------------------------- |
| `forward` | `ReactNode` | **Required** — right-aligned (start-anchored under RTL) primary action(s) |
| `back`    | `ReactNode` | Optional — when omitted, `forward` right-aligns alone                     |
