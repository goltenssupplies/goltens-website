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
import {
  submitRequirementRequest,
  type RequirementSubmissionResult,
} from "@/lib/actions/submit-requirement";

interface FormValues {
  name: string;
  company: string;
  email: string;
  phone: string;
  productPartNumber: string;
  quantity: string;
  technicalSpecifications: string;
  requiredDeliveryDate: string;
  deliveryLocation: string;
}

const REQUIRED_KEYS = [
  "name",
  "company",
  "email",
  "phone",
  "productPartNumber",
  "quantity",
  "technicalSpecifications",
  "deliveryLocation",
] as const;

type FieldErrors = Partial<Record<keyof FormValues, string>>;
type SubmitStatus = "idle" | "submitting" | "error";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_ATTACHMENT_BYTES = 25 * 1024 * 1024;

const SUBMIT_BUTTON_CLASS =
  "flex h-13 w-full items-center justify-center rounded-lg bg-[#C9A227] px-7 text-base font-medium text-ink shadow-[0_8px_24px_rgba(201,162,39,0.28)] transition-colors duration-200 hover:bg-[#D8B54A] disabled:cursor-not-allowed disabled:opacity-60";

export interface RequirementFormProps {
  /** Prefills "Product / Part Number" (still editable) — e.g. from a product page's `?product=` link. Treated as plain user-editable text, never trusted. */
  defaultProductPartNumber?: string;
}

/**
 * "Send Your Requirement" — the product-agnostic sourcing-request form for
 * visitors whose need doesn't match an existing catalog product (a part
 * number, drawing, BOQ, or spec with nothing to "add to cart"). Same shape,
 * validation pattern, and Resend pipeline as `RfqForm`/`ContactForm`
 * (see those files), submitting via `submitRequirementRequest` instead.
 */
export function RequirementForm({
  defaultProductPartNumber = "",
}: RequirementFormProps = {}) {
  const t = useTranslations("sendRequirement");
  const [values, setValues] = useState<FormValues>({
    name: "",
    company: "",
    email: "",
    phone: "",
    productPartNumber: defaultProductPartNumber,
    quantity: "",
    technicalSpecifications: "",
    requiredDeliveryDate: "",
    deliveryLocation: "",
  });
  const [files, setFiles] = useState<File[]>([]);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [submitError, setSubmitError] =
    useState<RequirementSubmissionResult["error"]>(undefined);
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
    files.forEach((file) => formData.append("attachments", file));
    formData.set("website", honeypotRef.current?.value ?? "");

    const result = await submitRequirementRequest(formData);
    if (result.success) {
      setSubmitted(true);
      setStatus("idle");
    } else {
      setSubmitError(result.error);
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
        {/* Honeypot — same convention as ContactForm's/RfqForm's. */}
        <div
          aria-hidden="true"
          className="absolute -start-[9999px] size-px overflow-hidden"
        >
          <label htmlFor="requirement-website">Website</label>
          <input
            ref={honeypotRef}
            id="requirement-website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <Stack gap="lg">
          <Grid columns={2} gap="lg">
            <Input
              label={t("form.name.label")}
              placeholder={t("form.name.placeholder")}
              value={values.name}
              onChange={(event) => updateField("name", event.target.value)}
              error={errors.name}
              required
            />
            <Input
              label={t("form.company.label")}
              placeholder={t("form.company.placeholder")}
              value={values.company}
              onChange={(event) => updateField("company", event.target.value)}
              error={errors.company}
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
              label={t("form.productPartNumber.label")}
              placeholder={t("form.productPartNumber.placeholder")}
              value={values.productPartNumber}
              onChange={(event) =>
                updateField("productPartNumber", event.target.value)
              }
              error={errors.productPartNumber}
              required
            />
            <Input
              label={t("form.quantity.label")}
              placeholder={t("form.quantity.placeholder")}
              value={values.quantity}
              onChange={(event) => updateField("quantity", event.target.value)}
              error={errors.quantity}
              required
            />
            <Input
              label={t("form.deliveryLocation.label")}
              placeholder={t("form.deliveryLocation.placeholder")}
              value={values.deliveryLocation}
              onChange={(event) =>
                updateField("deliveryLocation", event.target.value)
              }
              error={errors.deliveryLocation}
              required
            />
            <Input
              type="date"
              dir="ltr"
              label={t("form.requiredDeliveryDate.label")}
              value={values.requiredDeliveryDate}
              onChange={(event) =>
                updateField("requiredDeliveryDate", event.target.value)
              }
            />
          </Grid>

          <Textarea
            label={t("form.technicalSpecifications.label")}
            placeholder={t("form.technicalSpecifications.placeholder")}
            rows={6}
            value={values.technicalSpecifications}
            onChange={(event) =>
              updateField("technicalSpecifications", event.target.value)
            }
            error={errors.technicalSpecifications}
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
            accept=".pdf,.xls,.xlsx,.doc,.docx,.jpg,.jpeg,.png,.zip"
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
                <Text weight="semibold">
                  {submitError === "validation_failed"
                    ? t("error.validation.title")
                    : t("error.title")}
                </Text>
                <Text size="sm" tone="muted">
                  {submitError === "validation_failed"
                    ? t("error.validation.description")
                    : t("error.description")}
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
