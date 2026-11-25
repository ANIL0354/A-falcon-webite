import { AppLink } from "@/components/app-link";
import { Section } from "@/components/section";
import { falconApp } from "@/config/falcon";

export function Cta() {
  return (
    <Section className="py-16 sm:py-20">
      <div className="shell">
        <div className="surface relative overflow-hidden px-6 py-14 text-center sm:px-12 sm:py-20">
          <div className="grid-overlay pointer-events-none absolute inset-0" />
          <div className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-[600px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(45,127,249,0.16),transparent_68%)]" />
          <div className="relative">
            <p className="eyebrow">Ready when you are</p>
            <h2 className="mx-auto mt-4 max-w-2xl text-balance text-3xl font-semibold tracking-tight text-copy sm:text-4xl">
              Your next ride starts here.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-muted">
              Get {falconApp.name} for iOS or Android and find the riders,
              routes, and conversations that make the road better.
            </p>
            <div className="mt-8 flex justify-center">
              <AppLink label="Get the app" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
