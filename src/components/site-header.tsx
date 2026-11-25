import Link from "next/link";
import { AppLink } from "@/components/app-link";
import { FalconMark } from "@/components/icons";
import { MobileNav } from "@/components/mobile-nav";
import { siteConfig } from "@/config/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-ink/85 backdrop-blur-xl">
      <div className="shell flex h-[72px] items-center justify-between gap-6">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-md"
          aria-label={`${siteConfig.name} home`}
        >
          <FalconMark className="h-9 w-9 shrink-0" />
          <span className="text-lg font-semibold tracking-tight text-copy">
            {siteConfig.name}
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-copy"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <AppLink label="Get the app" className="px-4 py-2.5" />
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
