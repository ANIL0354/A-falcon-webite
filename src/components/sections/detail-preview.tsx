import Link from "next/link";
import { AppLink } from "@/components/app-link";
import { Icon } from "@/components/icons";
import { Section, SectionHeading } from "@/components/section";
import { falconApp } from "@/config/falcon";

export function DetailPreview() {
  return (
    <Section id="app">
      <div className="shell grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            headingId="detail-preview-heading"
            eyebrow="One app, every angle"
            title="Your riding plans, all in one place."
            description="Discover riders, plan the route, manage requests, and keep the conversation going — without leaving the app."
          />

          <div className="mt-8 space-y-4">
            {falconApp.audiences.map((audience) => (
              <div key={audience.title} className="flex gap-4">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-accent/25 bg-accent/10 text-accent">
                  <Icon name="check" size={14} />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-copy">
                    {audience.title}
                  </h3>
                  <p className="mt-1 text-sm leading-7 text-muted">
                    {audience.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/falcon"
            className="mt-9 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent-soft"
          >
            See the full app detail
            <Icon name="arrow-up-right" size={16} />
          </Link>
        </div>

        <div className="surface p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-5">
            <div>
              <p className="eyebrow">At a glance</p>
              <h3 className="mt-2 text-xl font-semibold tracking-tight text-copy">
                Falcon {falconApp.version}
              </h3>
            </div>
            <span className="rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
              {falconApp.category}
            </span>
          </div>

          <dl className="divide-y divide-white/[0.07]">
            {falconApp.specifications.slice(0, 5).map((spec) => (
              <div
                key={spec.label}
                className="flex justify-between gap-5 py-3.5 text-sm"
              >
                <dt className="text-muted">{spec.label}</dt>
                <dd className="text-right font-medium text-copy">
                  {spec.value}
                </dd>
              </div>
            ))}
          </dl>

          <AppLink className="mt-7 w-full" />
        </div>
      </div>
    </Section>
  );
}
