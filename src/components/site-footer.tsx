import Link from "next/link";
import { FalconMark } from "@/components/icons";
import { siteConfig } from "@/config/site";

const groups = [
  {
    title: "Product",
    links: [
      { label: "Overview", href: "/" },
      { label: "Features", href: "/#features" },
      { label: "App details", href: "/falcon" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "How it works", href: "/#how-it-works" },
      { label: "Privacy", href: "/privacy" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.07] bg-panel/40">
      <div className="shell grid gap-10 py-14 md:grid-cols-[1.5fr_1fr_1fr]">
        <div className="max-w-sm">
          <Link href="/" className="inline-flex items-center gap-3" aria-label={`${siteConfig.name} home`}>
            <FalconMark className="h-8 w-8" />
            <span className="text-base font-semibold text-copy">
              {siteConfig.name}
            </span>
          </Link>
          <p className="mt-4 text-sm leading-7 text-muted">
            {siteConfig.description}
          </p>
        </div>

        {groups.map((group) => (
          <nav key={group.title} aria-label={group.title}>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-copy">
              {group.title}
            </h2>
            <ul className="mt-4 space-y-3">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-copy"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="shell flex flex-col gap-2 border-t border-white/[0.07] py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {siteConfig.copyrightYear} {siteConfig.legalName}. All rights
          reserved.
        </p>
        <p>{siteConfig.tagline}</p>
      </div>
    </footer>
  );
}
