import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy policy",
  description: `How ${siteConfig.legalName} handles information when you use ${siteConfig.name}.`,
  path: "/privacy",
});

const sections = [
  {
    title: "Information we collect",
    body: "We collect only what is needed to run Falcon: account details you choose to provide, the content you add to the app, and basic technical information that keeps the service secure and reliable.",
  },
  {
    title: "How we use information",
    body: "Information is used to provide the app, sync your workspace across devices, improve reliability, and respond to support requests. We do not sell personal information or use your private content for advertising.",
  },
  {
    title: "Sharing",
    body: "We share information only with service providers that help us operate Falcon, and only to the extent necessary. We may also disclose information when required by law.",
  },
  {
    title: "Security",
    body: "Data is encrypted in transit and at rest. Sync between your devices is end-to-end encrypted, and sensitive sorting happens on your device wherever possible.",
  },
  {
    title: "Your choices",
    body: "You can update your account details, export your data, or request deletion at any time by writing to us. You can also disconnect any integrated service without losing access to Falcon.",
  },
  {
    title: "Contact and updates",
    body: `Questions about this policy can be sent to ${siteConfig.email}. We may update this policy as Falcon evolves and will post the current version on this page.`,
  },
];

export default function PrivacyPage() {
  return (
    <div className="shell max-w-3xl py-16 sm:py-24">
      <p className="eyebrow">Legal</p>
      <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-copy sm:text-5xl">
        Privacy policy
      </h1>
      <p className="mt-5 text-base leading-8 text-muted">
        This is an overview of how {siteConfig.legalName} thinks about your
        information. Falcon is designed to keep your work private by default.
      </p>

      <div className="mt-12 space-y-10 border-t border-white/[0.08] pt-10">
        {sections.map((section, index) => (
          <section key={section.title}>
            <h2 className="text-lg font-semibold tracking-tight text-copy">
              <span className="mr-3 font-mono text-sm text-accent/80">
                {String(index + 1).padStart(2, "0")}
              </span>
              {section.title}
            </h2>
            <p className="mt-3 text-sm leading-7 text-muted">{section.body}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
