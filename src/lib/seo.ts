import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

type PageSeoOptions = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({
  title,
  description,
  path,
}: PageSeoOptions): Metadata {
  const canonical = new URL(path, siteConfig.url).toString();
  const socialTitle = `${title} | ${siteConfig.name}`;

  return {
    title,
    description,
    keywords: siteConfig.keywords,
    alternates: { canonical },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      locale: "en_US",
      url: canonical,
      title: socialTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
    },
    robots: { index: true, follow: true },
  };
}
