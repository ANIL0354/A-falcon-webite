import { Icon } from "@/components/icons";
import { Section } from "@/components/section";
import { falconApp } from "@/config/falcon";

export function Proof() {
  return (
    <Section className="border-b border-white/[0.06] py-14 sm:py-16">
      <div className="shell">
        <div className="grid gap-8 sm:grid-cols-3">
          {falconApp.highlights.map((highlight) => (
            <div
              key={highlight.label}
              className="flex items-baseline gap-3 sm:block"
            >
              <p className="text-3xl font-semibold tracking-tight text-accent sm:text-4xl">
                {highlight.value}
              </p>
              <p className="text-sm text-muted sm:mt-2">{highlight.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-white/[0.07] pt-8">
          <span className="mr-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
            Available on
          </span>
          {falconApp.platforms.map((platform) => (
            <span
              key={platform}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-copy"
            >
              <Icon name="check" size={12} className="text-accent" />
              {platform}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
