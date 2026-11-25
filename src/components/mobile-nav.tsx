"use client";

import { useState } from "react";
import Link from "next/link";
import { AppLink } from "@/components/app-link";
import { Icon } from "@/components/icons";
import { siteConfig } from "@/config/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-copy transition-colors hover:bg-white/[0.06]"
      >
        <Icon name={open ? "x" : "menu"} size={20} />
      </button>

      <div
        id="mobile-navigation"
        hidden={!open}
        className="absolute inset-x-0 top-[72px] border-b border-white/10 bg-ink/95 px-5 pb-6 pt-2 backdrop-blur-xl"
      >
        <nav aria-label="Mobile" className="flex flex-col">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/5 py-3 text-sm text-muted transition-colors hover:text-copy"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <AppLink className="mt-5 w-full" />
      </div>
    </div>
  );
}
