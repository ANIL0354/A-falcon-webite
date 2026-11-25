import type { Metadata } from "next";
import Link from "next/link";
import { AppLink } from "@/components/app-link";
import { FalconMark, Icon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { Section, SectionHeading } from "@/components/section";
import { Faq } from "@/components/sections/faq";
import { Screenshots } from "@/components/sections/screenshots";
import { falconApp } from "@/config/falcon";
import { siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/seo";
import {
  homeBreadcrumbSchema,
  faqSchema,
  softwareApplicationSchema,
} from "@/lib/structured-data";

export const metadata: Metadata = createPageMetadata({
  title: "A Falcon app — features, details & download",
  description: falconApp.description,
  path: "/falcon",
});

export default function FalconPage() {
  return (
    <>
      <JsonLd data={[softwareApplicationSchema, homeBreadcrumbSchema, faqSchema]} />

      <section className="relative overflow-hidden border-b border-white/[0.06]">
        <div className="grid-overlay pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute -top-52 right-0 h-[480px] w-[720px] rounded-full bg-[radial-gradient(ellipse,rgba(45,127,249,0.14),transparent_68%)]" />

        <div className="shell relative py-14 sm:py-20">
          <nav aria-label="Breadcrumb" className="text-xs text-muted">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="transition-colors hover:text-copy">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-copy" aria-current="page">
                A Falcon app
              </li>
            </ol>
          </nav>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="eyebrow">App detail</p>
              <h1 className="mt-5 text-balance text-5xl font-semibold leading-[1.06] tracking-[-0.035em] text-copy sm:text-6xl">
                Falcon — {falconApp.tagline}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
                {falconApp.description}
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <AppLink label="Download / open app" />
                <Link
                  href="#what-it-does"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-copy transition-colors hover:border-white/30 hover:bg-white/[0.08]"
                >
                  Read the details
                  <Icon name="chevron-down" size={16} />
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-2">
                {[
                  `Version ${falconApp.version}`,
                  falconApp.category,
                  ...falconApp.platforms,
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="surface p-7 sm:p-9">
              <FalconMark className="h-16 w-16" />
              <h2 className="mt-6 text-xl font-semibold tracking-tight text-copy">
                A quick look
              </h2>
              <p className="mt-2 text-sm leading-7 text-muted">
                Built for people who would rather be on the road than planning
                it.
              </p>
              <dl className="mt-6 grid grid-cols-3 gap-3 border-t border-white/[0.08] pt-6">
                {falconApp.highlights.map((highlight) => (
                  <div key={highlight.label}>
                    <dt className="text-xl font-semibold text-accent">
                      {highlight.value}
                    </dt>
                    <dd className="mt-1 text-xs leading-5 text-muted">
                      {highlight.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <Section id="what-it-does">
        <div className="shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeading
            headingId="about-heading"
            eyebrow="About the app"
            title="What Falcon is, and why it exists."
          />
          <div className="space-y-6 text-base leading-8 text-muted">
            <p>{falconApp.overview}</p>
            <p>{falconApp.detail}</p>
          </div>
        </div>
      </Section>

      <Screenshots />

      <Section id="capabilities" className="border-y border-white/[0.06] bg-panel/30">
        <div className="shell">
          <SectionHeading
            headingId="capabilities-heading"
            eyebrow="Inside the app"
            title="The details that make it feel effortless."
            align="center"
          />

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {falconApp.deepDive.map((item, index) => (
              <article key={item.title} className="surface p-7">
                <p className="font-mono text-xs text-accent/80">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-lg font-semibold tracking-tight text-copy">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section id="specifications">
        <div className="shell grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              headingId="specifications-heading"
              eyebrow="Specifications"
              title="Everything at a glance."
              description={`${falconApp.updatedLabel}. A closer look at ${siteConfig.name} — the riding community app.`}
            />
            <div className="mt-8 space-y-3">
              {falconApp.audiences.map((audience) => (
                <div key={audience.title} className="flex gap-3">
                  <Icon name="check" size={16} className="mt-1 shrink-0 text-accent" />
                  <p className="text-sm leading-7 text-muted">
                    <span className="font-semibold text-copy">
                      {audience.title}.{" "}
                    </span>
                    {audience.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <dl className="surface divide-y divide-white/[0.07] px-6 py-2 sm:px-8">
            {falconApp.specifications.map((spec) => (
              <div
                key={spec.label}
                className="flex flex-wrap justify-between gap-x-6 gap-y-1 py-4 text-sm"
              >
                <dt className="text-muted">{spec.label}</dt>
                <dd className="text-right font-medium text-copy">
                  {spec.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      <Faq />

      <section className="py-16 sm:py-20">
        <div className="shell flex flex-col items-start justify-between gap-6 rounded-3xl border border-accent/20 bg-accent/[0.07] p-8 sm:flex-row sm:items-center sm:p-10">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-copy">
              Ready to ride?
            </h2>
            <p className="mt-2 text-sm text-muted">
              One app for iOS and Android. Find your crew and plan the route.
            </p>
          </div>
          <AppLink label="Get the app" />
        </div>
      </section>
    </>
  );
}
