import Image from "next/image";
import { Section, SectionHeading } from "@/components/section";
import { falconApp } from "@/config/falcon";

export function Screenshots() {
  const [wide, ...portraits] = falconApp.screenshots;

  return (
    <Section id="screenshots" className="border-y border-white/[0.06] bg-panel/30">
      <div className="shell">
        <SectionHeading
          headingId="screenshots-heading"
          eyebrow="A look inside"
          title="Made for the road ahead."
          description="The artwork riders see when they first open A Falcon — find a partner, match, plan a ride, and meet a verified community."
          align="center"
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          <figure className="surface group relative overflow-hidden lg:col-span-3">
            <div className="relative h-64 sm:h-80 lg:h-[360px]">
              <Image
                src={wide.src}
                alt={wide.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 1180px"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
            </div>
            <figcaption className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                {wide.title}
              </h3>
              <p className="mt-1 text-sm text-white/75">{wide.subtitle}</p>
            </figcaption>
          </figure>

          {portraits.map((shot) => (
            <figure key={shot.src} className="surface group relative overflow-hidden">
              <div className="relative h-72 sm:h-80">
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-transparent" />
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="text-base font-semibold tracking-tight text-white">
                  {shot.title}
                </h3>
                <p className="mt-1 text-xs leading-5 text-white/75">
                  {shot.subtitle}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </Section>
  );
}
