import Link from "next/link";
import { AppLink } from "@/components/app-link";
import { AppShowcase } from "@/components/app-showcase";
import { Icon } from "@/components/icons";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.06]">
      <div className="grid-overlay pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -top-52 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(45,127,249,0.12),transparent_66%)]" />

      <div className="shell relative grid items-center gap-16 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:py-28">
        <div>
          <p className="eyebrow rise">
            {siteConfig.name} · Riding community
          </p>
          <h1 className="rise delay-1 mt-6 text-balance text-5xl font-semibold leading-[1.06] tracking-[-0.035em] text-copy sm:text-6xl">
            Find your <span className="text-accent">road.</span>
          </h1>
          <p className="rise delay-2 mt-6 max-w-xl text-lg leading-8 text-muted">
            {siteConfig.description}
          </p>

          <div className="rise delay-3 mt-9 flex flex-wrap items-center gap-3">
            <AppLink label="Get the app" />
            <Link
              href="/falcon"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-copy transition-colors hover:border-white/30 hover:bg-white/[0.08]"
            >
              Explore app details
              <Icon name="arrow-up-right" size={16} />
            </Link>
          </div>

          <div className="rise delay-3 mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-muted">
            <span className="inline-flex items-center gap-2">
              <Icon name="compass" size={16} className="text-accent" />
              Riders nearby
            </span>
            <span className="inline-flex items-center gap-2">
              <Icon name="layers" size={16} className="text-accent" />
              Group rides
            </span>
            <span className="inline-flex items-center gap-2">
              <Icon name="shield" size={16} className="text-accent" />
              Verified profiles
            </span>
          </div>
        </div>

        <div className="rise delay-2 flex justify-center lg:justify-end">
          <AppShowcase />
        </div>
      </div>
    </section>
  );
}
