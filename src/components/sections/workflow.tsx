import { Icon } from "@/components/icons";
import { Section, SectionHeading } from "@/components/section";
import { falconApp } from "@/config/falcon";

export function Workflow() {
  return (
    <Section id="how-it-works" className="border-y border-white/[0.06] bg-panel/30">
      <div className="shell">
        <SectionHeading
          headingId="workflow-heading"
          eyebrow="How it works"
          title="From route to ride in three steps."
          description="Pick your route, choose a time, set your preferences — then publish and review the requests."
        />

        <ol className="relative mt-12 grid gap-8 md:grid-cols-3 md:gap-6">
          <div className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-accent/50 via-white/10 to-transparent md:block" />
          {falconApp.steps.map((step) => (
            <li key={step.number} className="relative">
              <div className="flex items-center gap-3">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-accent/25 bg-ink text-accent">
                  <Icon name={step.icon} size={22} />
                </span>
                <span className="font-mono text-sm text-accent/80">
                  {step.number}
                </span>
              </div>
              <h3 className="mt-6 text-lg font-semibold tracking-tight text-copy">
                {step.title}
              </h3>
              <p className="mt-2 max-w-sm text-sm leading-7 text-muted">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
