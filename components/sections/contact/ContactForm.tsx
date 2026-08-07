"use client";

import { useRef, useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { CircleAlert, CircleCheck } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Grid } from "@/components/ui/Grid";
import { Heading } from "@/components/ui/Heading";
import { Stack } from "@/components/ui/Stack";
import { Text } from "@/components/ui/Text";
import { FileUpload } from "@/components/ui/form/FileUpload";
import { Input } from "@/components/ui/form/Input";
import { Textarea } from "@/components/ui/form/Textarea";
import { submitContactRequest } from "@/lib/actions/submit-contact";

interface FormValues {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  productCategory: string;
  projectName: string;
  country: string;
  brandRequired: string;
  product: string;
  quantity: string;
  message: string;
}

const REQUIRED_KEYS = [
  "companyName",
  "contactName",
  "email",
  "phone",
  "productCategory",
  "message",
] as const;

// Fields shown only when `variant="enterprise"` — the sector-page quotation
// form's fuller field set. All optional, same call as `projectName` before:
// keeping friction low matters more than capturing every field.
const ENTERPRISE_KEYS = [
  "projectName",
  "country",
  "brandRequired",
  "product",
  "quantity",
] as const;

type FieldErrors = Partial<Record<keyof FormValues, string>>;
type SubmitStatus = "idle" | "submitting" | "error";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_ATTACHMENT_BYTES = 25 * 1024 * 1024;

// The exact premium-gold spec for this page's own button — its own hex
// pair rather than the sitewide `gold`/`accent` tokens, so it can be tuned
// independently of every other gold accent on the site.
const SUBMIT_BUTTON_CLASS =
  "flex h-13 w-full items-center justify-center rounded-lg bg-[#C9A227] px-7 text-base font-medium text-ink shadow-[0_8px_24px_rgba(201,162,39,0.28)] transition-colors duration-200 hover:bg-[#D8B54A] disabled:cursor-not-allowed disabled:opacity-60";

export interface ContactFormProps {
  /**
   * "simple" (default) is exactly `/contact`'s form, unchanged. "enterprise"
   * adds Project Name, Country, Brand Required, Product, and Quantity —
   * used by `SectorQuoteCTA` on sector pages.
   */
  variant?: "simple" | "enterprise";
  /** Prefills the "Required Products" field (still editable) — e.g. a sector page passing its own name. */
  defaultProductCategory?: string;
}

/**
 * The site's single contact form — a plain white premium card (no dark
 * glass). Every field is validated and submitted at once via
 * `submitContactRequest`. This is the only contact form anywhere on the
 * site: `/contact` renders it plain (`variant="simple"`), and
 * `SectorQuoteCTA` renders it with `variant="enterprise"` rather than
 * embedding a second form.
 */
export function ContactForm({
  variant = "simple",
  defaultProductCategory = "",
}: ContactFormProps = {}) {
  const t = useTranslations("contactPage");
  const isEnterprise = variant === "enterprise";
  const [values, setValues] = useState<FormValues>({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    productCategory: defaultProductCategory,
    projectName: "",
    country: "",
    brandRequired: "",
    product: "",
    quantity: "",
    message: "",
  });
  const [files, setFiles] = useState<File[]>([]);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [submitted, setSubmitted] = useState(false);
  const honeypotRef = useRef<HTMLInputElement>(null);

  function updateField<K extends keyof FormValues>(
    key: K,
    value: FormValues[K],
  ) {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  }

  function validate() {
    const nextErrors: FieldErrors = {};

    for (const key of REQUIRED_KEYS) {
      if (!values[key].trim()) nextErrors[key] = t("validation.required");
    }
    if (values.email.trim() && !EMAIL_PATTERN.test(values.email)) {
      nextErrors.email = t("validation.invalidEmail");
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) =>
      formData.set(key, value),
    );
    files.forEach((file) => formData.append("attachments", file));
    formData.set("website", honeypotRef.current?.value ?? "");

    const result = await submitContactRequest(formData);
    if (result.success) {
      setSubmitted(true);
      setStatus("idle");
    } else {
      setStatus("error");
    }
  }

  if (submitted) {
    return (
      <Card variant="premium" padding="lg" className="rounded-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-5 py-10 text-center"
        >
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 0.15,
              duration: 0.4,
              ease: [0.34, 1.56, 0.64, 1],
            }}
            className="border-gold/30 bg-gold/10 flex size-16 items-center justify-center rounded-full border"
          >
            <CircleCheck className="text-gold size-8" />
          </motion.span>
          <Stack gap="sm" align="center" className="max-w-md">
            <Heading level={2} size={3} tone="ink">
              {t("success.title")}
            </Heading>
            <Text tone="muted">{t("success.description")}</Text>
          </Stack>
          <Button href="/" variant="secondary">
            {t("success.action")}
          </Button>
        </motion.div>
      </Card>
    );
  }

  return (
    <Card variant="premium" padding="lg" className="rounded-2xl">
      <form onSubmit={handleSubmit} noValidate>
        {/* Honeypot: invisible to sighted users (off-screen), out of the
            tab order, and removed from the accessibility tree, so only a
            bot blindly filling every field it can find would ever populate
            this. Checked server-side in submitContactRequest. */}
        <div
          aria-hidden="true"
          className="absolute -start-[9999px] size-px overflow-hidden"
        >
          <label htmlFor="website">Website</label>
          <input
            ref={honeypotRef}
            id="website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <Stack gap="lg">
          <Grid columns={2} gap="lg">
            <Input
              label={t("form.companyName.label")}
              placeholder={t("form.companyName.placeholder")}
              value={values.companyName}
              onChange={(event) =>
                updateField("companyName", event.target.value)
              }
              error={errors.companyName}
              required
            />
            <Input
              label={t("form.contactName.label")}
              placeholder={t("form.contactName.placeholder")}
              value={values.contactName}
              onChange={(event) =>
                updateField("contactName", event.target.value)
              }
              error={errors.contactName}
              required
            />
            <Input
              type="email"
              label={t("form.email.label")}
              placeholder={t("form.email.placeholder")}
              value={values.email}
              onChange={(event) => updateField("email", event.target.value)}
              error={errors.email}
              required
            />
            <Input
              type="tel"
              dir="ltr"
              label={t("form.phone.label")}
              placeholder={t("form.phone.placeholder")}
              value={values.phone}
              onChange={(event) => updateField("phone", event.target.value)}
              error={errors.phone}
              required
            />
            <Input
              label={t("form.productCategory.label")}
              placeholder={t("form.productCategory.placeholder")}
              value={values.productCategory}
              onChange={(event) =>
                updateField("productCategory", event.target.value)
              }
              error={errors.productCategory}
              required
              containerClassName={isEnterprise ? undefined : "sm:col-span-2"}
            />
            {isEnterprise && (
              <>
                {ENTERPRISE_KEYS.map((key) => (
                  <Input
                    key={key}
                    label={t(`form.${key}.label`)}
                    placeholder={t(`form.${key}.placeholder`)}
                    value={values[key]}
                    onChange={(event) => updateField(key, event.target.value)}
                  />
                ))}
              </>
            )}
          </Grid>

          <Textarea
            label={t("form.message.label")}
            placeholder={t("form.message.placeholder")}
            rows={6}
            value={values.message}
            onChange={(event) => updateField("message", event.target.value)}
            error={errors.message}
            required
          />

          <FileUpload
            label={t("upload.label")}
            files={files}
            onFilesChange={setFiles}
            dropzoneLabel={t("upload.dropzoneLabel")}
            hint={t("upload.hint")}
            removeFileLabel={(name) => t("upload.removeLabel", { name })}
            tooLargeLabel={(name) => t("upload.tooLarge", { name })}
            maxSizeBytes={MAX_ATTACHMENT_BYTES}
            accept=".pdf,.xls,.xlsx,.doc,.docx,.zip,.jpg,.png"
          />

          {status === "error" && (
            <Stack
              direction="row"
              gap="sm"
              align="start"
              role="alert"
              className="bg-error/10 border-error/30 rounded-sm border p-4"
            >
              <CircleAlert
                aria-hidden="true"
                className="text-error mt-0.5 size-5 shrink-0"
              />
              <Stack gap="none">
                <Text weight="semibold">{t("error.title")}</Text>
                <Text size="sm" tone="muted">
                  {t("error.description")}
                </Text>
              </Stack>
            </Stack>
          )}

          <Stack gap="sm">
            <button
              type="submit"
              disabled={status === "submitting"}
              className={SUBMIT_BUTTON_CLASS}
            >
              {status === "submitting" ? t("submitting") : t("submit")}
            </button>
            <Text size="sm" tone="muted" className="text-center">
              {t("formNote")}
            </Text>
          </Stack>
        </Stack>
      </form>
    </Card>
  );
}
