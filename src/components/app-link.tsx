import { Icon } from "@/components/icons";
import { falconApp } from "@/config/falcon";

const variants = {
  primary:
    "bg-accent text-ink shadow-[0_10px_34px_-10px_rgba(45,127,249,0.55)] hover:bg-accent-soft hover:shadow-[0_14px_40px_-10px_rgba(45,127,249,0.65)]",
  secondary:
    "border border-white/15 bg-white/[0.04] text-copy hover:border-white/30 hover:bg-white/[0.08]",
  ghost: "text-muted hover:text-copy",
};

export function AppLink({
  label = "Get the app",
  variant = "primary",
  className = "",
  withIcon = true,
}: {
  label?: string;
  variant?: keyof typeof variants;
  className?: string;
  withIcon?: boolean;
}) {
  return (
    <a
      href={falconApp.downloadUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} (opens in a new tab)`}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none ${variants[variant]} ${className}`}
    >
      {label}
      {withIcon ? <Icon name="arrow-up-right" size={16} /> : null}
    </a>
  );
}
