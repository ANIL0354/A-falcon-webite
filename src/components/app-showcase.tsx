import Image from "next/image";
import { Icon } from "@/components/icons";
import { falconApp } from "@/config/falcon";

export function AppShowcase() {
  const matchImage = falconApp.screenshots[1];

  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-[330px]">
      <div className="absolute -inset-12 -z-10 rounded-full bg-[radial-gradient(circle,rgba(45,127,249,0.2),transparent_65%)] blur-2xl" />

      <div className="rounded-[42px] border border-white/15 bg-gradient-to-b from-[#252a35] to-[#0d0f14] p-2 shadow-[0_45px_90px_-35px_rgba(0,0,0,0.95)]">
        <div className="relative overflow-hidden rounded-[34px] bg-ink">
          <Image
            src={matchImage.src}
            alt=""
            width={matchImage.width}
            height={matchImage.height}
            sizes="(max-width: 768px) 80vw, 330px"
            priority
            className="h-[560px] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-black/90" />

          <div className="absolute inset-x-0 top-0 px-5 pt-3.5">
            <div className="flex items-center justify-between text-[10px] font-medium text-white/90">
              <span>9:41</span>
              <div className="h-5 w-24 rounded-full bg-black/70" />
              <span className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <span className="h-1.5 w-2.5 rounded-sm border border-current" />
              </span>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 px-5 pb-7">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-accent-soft">
              A Falcon
            </p>
            <p className="mt-3 text-3xl font-bold leading-tight tracking-tight text-white">
              Swipe. Match. Ride.
            </p>
            <p className="mt-2 max-w-[260px] text-[11px] leading-5 text-white/75">
              Discover riders near you and connect with the ones who match your
              vibe.
            </p>

            <div className="mt-5 flex items-center gap-1.5">
              <span className="h-1.5 w-6 rounded-full bg-accent" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
            </div>

            <div className="mt-5 flex items-center gap-3">
              <span className="flex h-11 flex-1 items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 text-[11px] font-semibold text-white backdrop-blur">
                <Icon name="x" size={14} />
                Skip
              </span>
              <span className="flex h-11 flex-1 items-center justify-center gap-2 rounded-full bg-accent text-[11px] font-semibold text-white">
                <Icon name="check" size={14} />
                Connect
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -left-10 top-28 hidden rounded-2xl border border-white/10 bg-panel/95 px-3.5 py-2.5 shadow-2xl backdrop-blur lg:block">
        <p className="text-[9px] uppercase tracking-widest text-muted">
          Discover
        </p>
        <p className="mt-1 flex items-center gap-1.5 text-[11px] font-semibold text-copy">
          <Icon name="compass" size={13} className="text-accent" />
          Riders near you
        </p>
      </div>

      <div className="absolute -right-12 bottom-28 hidden rounded-2xl border border-white/10 bg-panel/95 px-3.5 py-2.5 shadow-2xl backdrop-blur lg:block">
        <p className="text-[9px] uppercase tracking-widest text-muted">
          Community
        </p>
        <p className="mt-1 flex items-center gap-1.5 text-[11px] font-semibold text-copy">
          <Icon name="shield" size={13} className="text-accent" />
          KYC verified
        </p>
      </div>
    </div>
  );
}
