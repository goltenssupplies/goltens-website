export interface FieldMessageProps {
  hint?: string;
  hintId?: string;
  error?: string;
  errorId?: string;
  tone?: "light" | "dark";
}

/** Hint text, or an error in its place, shared by every form control's message row. */
export function FieldMessage({
  hint,
  hintId,
  error,
  errorId,
  tone = "light",
}: FieldMessageProps) {
  if (error) {
    return (
      <p id={errorId} role="alert" className="text-error text-sm">
        {error}
      </p>
    );
  }
  if (hint) {
    return (
      <p
        id={hintId}
        className={
          tone === "dark" ? "text-canvas/50 text-sm" : "text-ink-muted text-sm"
        }
      >
        {hint}
      </p>
    );
  }
  return null;
}
