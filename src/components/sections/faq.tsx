import { Icon } from "@/components/icons";
import { Section, SectionHeading } from "@/components/section";
import { falconApp } from "@/config/falcon";

export function Faq() {
  return (
    <Section id="faq" className="border-t border-white/[0.06] bg-panel/30">
      <div className="shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <SectionHeading
          headingId="faq-heading"
          eyebrow="Questions"
          title="Good to know."
          description="Everything you might want to know before you find your crew."
        />

        <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {falconApp.faqs.map((faq, index) => (
            <details key={faq.question} className="group py-5" open={index === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-sm font-semibold text-copy [&::-webkit-details-marker]:hidden">
                {faq.question}
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 text-muted transition-colors group-open:border-accent/30 group-open:text-accent">
                  <Icon
                    name="chevron-down"
                    size={15}
                    className="transition-transform duration-200 group-open:rotate-180"
                  />
                </span>
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
