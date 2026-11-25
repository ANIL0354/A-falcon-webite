# A Falcon — company showcase site

A fast, SEO-friendly Next.js website for the motorcycle riding community app in `../ride-mate` (the Expo project branded in-app as **A Falcon**). It showcases the real app: finding riders nearby, swiping to match, planning group rides in three steps, ride chat, and KYC-verified profiles.

## Connect it to the real app

All content lives in two files:

- `src/config/site.ts` — brand, domain, navigation, support email.
- `src/config/falcon.ts` — app description, features, pricing-free specs, FAQs, and screenshots.

The app link is set to the live Play Store listing in `siteConfig.links.app` (and `links.android`) in `src/config/site.ts`. Every call-to-action and the app's JSON-LD `downloadUrl` use it. `links.ios` is still a placeholder until a real App Store URL is available. Set `NEXT_PUBLIC_SITE_URL` to your production domain so canonical URLs, `robots.txt`, `sitemap.xml`, and Open Graph tags point at the right host.

The Play Store URL comes from the released ride-mate package (`com.anonymous.ridemate`). The update gate in the app also has an Apple placeholder app ID, so no iOS listing is linked here yet.

## Visuals from the app

`public/images/` contains copies of the app's own assets from `../ride-mate`:

| File | Source |
| --- | --- |
| `afalcon-icon.png` | `ride-mate/assets/icon.png` |
| `riding-partner.jpeg` | `ride-mate/assets/onboarding/slide1.jpeg` |
| `swipe-match.jpeg` | `ride-mate/assets/onboarding/slide2.jpeg` |
| `group-rides.jpeg` | `ride-mate/assets/onboarding/slide3.jpeg` |
| `verified-community.jpeg` | `ride-mate/assets/onboarding/slide4.jpeg` |

The onboarding images are the actual artwork used behind the app's onboarding text, which the site reproduces with the app's own copy. Colours match the app palette in `ride-mate/src/theme/colors.ts` (`#0D0F14` / `#2D7FF9`).

## Commands

```bash
npm install
npm run dev        # development server
npm run build      # production build
npm run start      # serve the production build
npm run lint       # ESLint
npm run typecheck  # TypeScript
```

## Structure

```
src/
  app/                       Routes (server-rendered by default)
    page.tsx                 Home / app overview
    falcon/page.tsx          Full app detail page + screenshot gallery
    privacy/page.tsx         Privacy page
    not-found.tsx            404 page
    layout.tsx               Root layout, metadata, shared chrome
    sitemap.ts               Generated sitemap.xml
    robots.ts                Generated robots.txt
    opengraph-image.tsx      Generated social sharing image
    globals.css              Design tokens and global styles
  components/
    sections/                Hero, proof, features, screenshots, workflow, FAQ, CTA
    app-showcase.tsx         Phone preview built from the app's onboarding art
    app-link.tsx             Single source for the app CTA
    section.tsx              Shared section and heading primitives
    icons.tsx                Inline SVG icons + the app's real icon
    site-header.tsx          Sticky header
    site-footer.tsx          Footer
    mobile-nav.tsx           Only client component (menu state)
    json-ld.tsx              Structured data renderer
  config/                    All editable content and links
  lib/
    seo.ts                   Per-page metadata helper
    structured-data.ts       Organization, app, breadcrumb, FAQ schemas
    types.ts                 Shared content types
```

## Rendering and SEO

Pages and sections are React Server Components, so complete HTML is rendered on the server before it reaches the browser. Cache Components and Partial Prefetching are enabled in `next.config.ts`; routes are prerendered into an instant static shell and links are prefetched. The only client-side code is the mobile menu toggle.

SEO uses per-page metadata, canonical URLs, Open Graph and Twitter cards, a generated OG image, `sitemap.xml`, `robots.txt`, semantic landmarks, and JSON-LD for the organization, software application, breadcrumb, and FAQs.

Images are served from the website's own `public/images` directory with `next/image`, so there are no external image requests. The UI respects `prefers-reduced-motion`.
