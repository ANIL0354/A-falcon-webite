export const siteConfig = {
  name: "A Falcon",
  legalName: "A Falcon",
  title: "A Falcon — Find your road",
  tagline: "Find your road.",
  copyrightYear: 2026,
  description:
    "A Falcon is a motorcycle riding community. Find riders near you, swipe to match, plan group rides, and chat with your crew — all in one app.",
  keywords: [
    "A Falcon",
    "A Falcon app",
    "find riders near me",
    "motorcycle riding community",
    "group bike rides",
    "biker matching app",
  ],
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://afalcon.example.com").replace(
    /\/$/,
    "",
  ),
  links: {
    app: "https://play.google.com/store/apps/details?id=com.anonymous.ridemate&pcampaignid=web_share",
    ios: "https://example.com/afalcon-app/ios",
    android: "https://play.google.com/store/apps/details?id=com.anonymous.ridemate&pcampaignid=web_share",
  },
  email: "support@afalcon.club",
  navigation: [
    { label: "Overview", href: "/" },
    { label: "Features", href: "/#features" },
    { label: "How it works", href: "/#how-it-works" },
    { label: "App details", href: "/falcon" },
  ],
};
