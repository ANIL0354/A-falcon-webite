import { Icon } from "@/components/icons";
import { Section, SectionHeading } from "@/components/section";
import { falconApp } from "@/config/falcon";

export function Features() {
  return (
    <Section id="features">
      <div className="shell">
        <SectionHeading
          headingId="features-heading"
          eyebrow="Built for riders"
          title="Everything you need to ride together."
          description="From the first hello to the final route, A Falcon keeps your riding plans in one place."
          align="center"
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {falconApp.features.map((feature) => (
            <article
              key={feature.title}
              className="surface group p-6 transition-colors duration-200 hover:border-accent/30"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/20 bg-accent/[0.08] text-accent transition-colors duration-200 group-hover:bg-accent/15">
                <Icon name={feature.icon} size={21} />
              </span>
              <h3 className="mt-5 text-lg font-semibold tracking-tight text-copy">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-muted">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
