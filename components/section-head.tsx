type Props = {
  label: string;
  right: string;
  variant?: "light" | "dark";
};

export function SectionHead({ label, right, variant = "light" }: Props) {
  const isDark = variant === "dark";
  return (
    <div
      className={`mb-14 flex items-baseline justify-between border-t pt-7 font-mono text-[11px] uppercase tracking-[0.14em] ${
        isDark
          ? "border-white/20 text-white/55"
          : "border-line text-muted"
      }`}
    >
      <span>{label}</span>
      <span>{right}</span>
    </div>
  );
}
