"use client";

import { useRef, useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { CircleAlert, CircleCheck } from "lucide-react";

import { useRfqCart } from "@/components/rfq/RfqCartContext";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Grid } from "@/components/ui/Grid";
import { Heading } from "@/components/ui/Heading";
import { Stack } from "@/components/ui/Stack";
import { Text } from "@/components/ui/Text";
import { FileUpload } from "@/components/ui/form/FileUpload";
import { Input } from "@/components/ui/form/Input";
import { Textarea } from "@/components/ui/form/Textarea";
import { submitRfqRequest } from "@/lib/actions/submit-rfq";

interface FormValues {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  notes: string;
}

const REQUIRED_KEYS = ["companyName", "contactName", "email", "phone"] as const;
type FieldErrors = Partial<Record<keyof FormValues, string>>;
type SubmitStatus = "idle" | "submitting" | "error";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_ATTACHMENT_BYTES = 25 * 1024 * 1024;

const SUBMIT_BUTTON_CLASS =
  "flex h-13 w-full items-center justify-center rounded-lg bg-[#C9A227] px-7 text-base font-medium text-ink shadow-[0_8px_24px_rgba(201,162,39,0.28)] transition-colors duration-200 hover:bg-[#D8B54A] disabled:cursor-not-allowed disabled:opacity-60";

/**
 * The RFQ review page's submission form — same shape and validation
 * pattern as `ContactForm`, but submits the current `RfqCartContext`
 * items as one itemized request via `submitRfqRequest` rather than a
 * single product/quantity pair. Clears the cart on success, same
 * "honest empty/success state" convention the contact form uses.
 */
export function RfqForm() {
  const t = useTranslations("rfq");
  const { items, clear } = useRfqCart();
  const [values, setValues] = useState<FormValues>({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    notes: "",
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
    Object.entries(values).forEach(([key, value]) => formData.set(key, value));
    formData.set(
      "items",
      JSON.stringify(
        items.map((item) => ({
          name: item.name,
          slug: item.slug,
          quantity: item.quantity,
        })),
      ),
    );
    files.forEach((file) => formData.append("attachments", file));
    formData.set("website", honeypotRef.current?.value ?? "");

    const result = await submitRfqRequest(formData);
    if (result.success) {
      clear();
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
        {/* Honeypot — same convention as ContactForm's. */}
        <div
          aria-hidden="true"
          className="absolute -start-[9999px] size-px overflow-hidden"
        >
          <label htmlFor="rfq-website">Website</label>
          <input
            ref={honeypotRef}
            id="rfq-website"
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
          </Grid>

          <Textarea
            label={t("form.notes.label")}
            placeholder={t("form.notes.placeholder")}
            rows={5}
            value={values.notes}
            onChange={(event) => updateField("notes", event.target.value)}
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
