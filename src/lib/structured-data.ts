import { falconApp } from "@/config/falcon";
import { siteConfig } from "@/config/site";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.legalName,
  alternateName: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  email: siteConfig.email,
};

export const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: falconApp.name,
  applicationCategory: "TravelApplication",
  operatingSystem: "iOS, Android",
  description: falconApp.description,
  version: falconApp.version,
  url: `${siteConfig.url}/falcon`,
  downloadUrl: falconApp.downloadUrl,
  dateModified: falconApp.updatedAt,
  featureList: falconApp.features.map((feature) => feature.title),
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
  publisher: {
    "@type": "Organization",
    name: siteConfig.legalName,
    url: siteConfig.url,
  },
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: falconApp.faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export const homeBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteConfig.url,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "A Falcon app",
      item: `${siteConfig.url}/falcon`,
    },
  ],
};
