export default function KeystoneMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <polygon points="22,12 47,12 47,88 36,88" />
      <polygon points="53,12 78,12 64,88 53,88" />
    </svg>
  );
}
