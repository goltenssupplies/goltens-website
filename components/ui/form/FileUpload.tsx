"use client";

import { useId, useRef, useState, type DragEvent } from "react";
import { File as FileIcon, UploadCloud, X } from "lucide-react";

import { IconButton } from "@/components/ui/IconButton";
import { FieldMessage } from "@/components/ui/form/FieldMessage";
import { cn } from "@/lib/utils";

export interface FileUploadProps {
  label: string;
  /** Controlled file list — this component holds no upload state of its own. */
  files: File[];
  onFilesChange: (files: File[]) => void;
  hint?: string;
  error?: string;
  required?: boolean;
  accept?: string;
  multiple?: boolean;
  /** e.g. "Drag files here, or click to browse". Caller supplies the translated string. */
  dropzoneLabel: string;
  /** Accessible label for the per-file remove button, given the file name. */
  removeFileLabel: (fileName: string) => string;
  /** Formats a byte count for display next to each file name. Defaults to a KB/MB formatter. */
  formatFileSize?: (bytes: number) => string;
  /** Files larger than this are rejected client-side (still enforced again server-side — never trust the client alone). */
  maxSizeBytes?: number;
  /** Shown when a file is rejected for exceeding `maxSizeBytes`. */
  tooLargeLabel?: (fileName: string) => string;
  tone?: "light" | "dark";
  className?: string;
}

function defaultFormatFileSize(bytes: number) {
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

/** Drag-and-drop / click-to-browse file picker with a controlled file list. */
export function FileUpload({
  label,
  files,
  onFilesChange,
  hint,
  error,
  required,
  accept,
  multiple = true,
  dropzoneLabel,
  removeFileLabel,
  formatFileSize = defaultFormatFileSize,
  maxSizeBytes,
  tooLargeLabel,
  tone = "light",
  className,
}: FileUploadProps) {
  const inputId = useId();
  const hintId = hint ? `${inputId}-hint` : undefined;
  const errorId = error ? `${inputId}-error` : undefined;
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [rejectedNames, setRejectedNames] = useState<string[]>([]);
  const isDark = tone === "dark";

  function addFiles(newFiles: FileList | null) {
    if (!newFiles || newFiles.length === 0) return;
    const incoming = Array.from(newFiles);

    const accepted = maxSizeBytes
      ? incoming.filter((file) => file.size <= maxSizeBytes)
      : incoming;
    const rejected = maxSizeBytes
      ? incoming.filter((file) => file.size > maxSizeBytes)
      : [];
    setRejectedNames(rejected.map((file) => file.name));

    onFilesChange(multiple ? [...files, ...accepted] : accepted.slice(0, 1));
  }

  function handleDrop(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setIsDragging(false);
    addFiles(event.dataTransfer.files);
  }

  function removeFile(index: number) {
    onFilesChange(files.filter((_, i) => i !== index));
  }

  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <span
        id={`${inputId}-label`}
        className={cn(
          "text-sm font-medium",
          isDark ? "text-canvas" : "text-ink",
        )}
      >
        {label}
        {required && (
          <span aria-hidden="true" className="text-error">
            {" "}
            *
          </span>
        )}
      </span>

      <div
        role="button"
        tabIndex={0}
        aria-labelledby={`${inputId}-label`}
        aria-describedby={
          [hintId, errorId].filter(Boolean).join(" ") || undefined
        }
        onClick={() => inputRef.current?.click()}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            inputRef.current?.click();
          }
        }}
        onDragOver={(event) => {
          event.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        className={cn(
          "flex cursor-pointer flex-col items-center gap-2 rounded-md border border-dashed px-6 py-10 text-center transition-colors",
          "focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-2",
          isDark
            ? isDragging
              ? "border-gold bg-canvas/[0.06]"
              : "border-canvas/20 hover:border-canvas/40 hover:bg-canvas/[0.03]"
            : isDragging
              ? "border-accent bg-stone"
              : "border-border hover:border-ink/30 hover:bg-stone/40",
          error && "border-error",
        )}
      >
        <UploadCloud
          aria-hidden="true"
          className={cn("size-6", isDark ? "text-canvas/50" : "text-ink-muted")}
        />
        <p
          className={cn(
            "text-sm",
            isDark ? "text-canvas/50" : "text-ink-muted",
          )}
        >
          {dropzoneLabel}
        </p>
        <input
          ref={inputRef}
          id={inputId}
          type="file"
          accept={accept}
          multiple={multiple}
          required={required && files.length === 0}
          className="sr-only"
          onChange={(event) => {
            addFiles(event.target.files);
            event.target.value = "";
          }}
        />
      </div>

      {rejectedNames.length > 0 && tooLargeLabel && (
        <div role="alert" className="flex flex-col gap-0.5">
          {rejectedNames.map((name) => (
            <p key={name} className="text-error text-sm">
              {tooLargeLabel(name)}
            </p>
          ))}
        </div>
      )}

      {files.length > 0 && (
        <ul className="flex flex-col gap-2">
          {files.map((file, index) => (
            <li
              key={`${file.name}-${file.lastModified}-${index}`}
              className={cn(
                "flex items-center gap-3 rounded-sm border px-3 py-2",
                isDark
                  ? "border-canvas/15 bg-canvas/[0.04]"
                  : "border-border bg-canvas",
              )}
            >
              <FileIcon
                aria-hidden="true"
                className={cn(
                  "size-4 shrink-0",
                  isDark ? "text-canvas/50" : "text-ink-muted",
                )}
              />
              <span
                className={cn(
                  "flex-1 truncate text-sm",
                  isDark ? "text-canvas" : "text-ink",
                )}
              >
                {file.name}
              </span>
              <span
                className={cn(
                  "shrink-0 text-xs",
                  isDark ? "text-canvas/50" : "text-ink-muted",
                )}
              >
                {formatFileSize(file.size)}
              </span>
              <IconButton
                icon={<X className="size-4" />}
                aria-label={removeFileLabel(file.name)}
                variant="ghost"
                size="sm"
                className={
                  isDark ? "text-canvas/60 hover:bg-canvas/10" : undefined
                }
                onClick={() => removeFile(index)}
              />
            </li>
          ))}
        </ul>
      )}

      <FieldMessage
        hint={hint}
        hintId={hintId}
        error={error}
        errorId={errorId}
        tone={tone}
      />
    </div>
  );
}
