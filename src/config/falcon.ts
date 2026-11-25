import { siteConfig } from "@/config/site";
import type { FaqItem, Feature, Screenshot, Step } from "@/lib/types";

export const falconApp = {
  name: "A Falcon",
  version: "1.0.10",
  category: "Motorcycle riding community",
  tagline: "Find your road.",
  description:
    "A Falcon helps riders find people nearby, plan group rides, and explore together. Swipe to connect with bikers, create a route in three steps, and chat with your crew before you roll out.",
  overview:
    "A Falcon is built for the part of riding that happens before the engine starts: finding the right people and deciding where to go. Discover bikers near you, see who shares your interests, and connect when the interest is mutual.",
  detail:
    "Once you have found your crew, planning is deliberately simple. Pick a start point and destination on the map, choose a date and time, then set your preferences — group size, rider preference, and a cover photo. Riders can request to join and you decide who comes along. Ride-specific chat keeps the details in one place, and KYC-verified profiles make it easier to trust the people you meet.",
  downloadUrl: siteConfig.links.app,
  updatedAt: "2026-11-25",
  updatedLabel: "Version 1.0.10",
  platforms: ["iOS", "Android"],
  screenshots: [
    {
      src: "/images/riding-partner.jpeg",
      alt: "Riders on the road from the A Falcon onboarding screens",
      title: "Find your riding partner",
      subtitle: "Connect with bikers nearby and around the country.",
      width: 1600,
      height: 1067,
    },
    {
      src: "/images/swipe-match.jpeg",
      alt: "Motorcyclist photo used in the A Falcon swipe and match onboarding screen",
      title: "Swipe. Match. Ride.",
      subtitle:
        "Discover riders near you and connect with the ones who match your vibe.",
      width: 1600,
      height: 2400,
    },
    {
      src: "/images/group-rides.jpeg",
      alt: "Group of motorcyclists from the A Falcon group rides onboarding screen",
      title: "Create & join group rides",
      subtitle: "Start a ride, set a destination, and let others request to join.",
      width: 1600,
      height: 2400,
    },
    {
      src: "/images/verified-community.jpeg",
      alt: "Rider photo used in the A Falcon verified community onboarding screen",
      title: "A verified riding community",
      subtitle: "KYC-verified profiles so you know who you are riding with.",
      width: 1600,
      height: 2400,
    },
  ] satisfies Screenshot[],
  highlights: [
    { value: "Swipe", label: "to find your people" },
    { value: "3 steps", label: "to plan a group ride" },
    { value: "KYC", label: "verified profiles" },
  ],
  features: [
    {
      icon: "compass",
      title: "Riders near you",
      description:
        "A location-based discover feed shows bikers close to you, with city and distance context as you browse.",
    },
    {
      icon: "target",
      title: "Swipe. Match. Ride.",
      description:
        "Like or skip rider cards. When both riders connect, the conversation starts right there.",
    },
    {
      icon: "layers",
      title: "Group rides in 3 steps",
      description:
        "Set the route, schedule the ride, then choose group size, preference, and a cover photo.",
    },
    {
      icon: "check",
      title: "You decide who joins",
      description:
        "Review ride requests and accept or decline them before your group rolls out.",
    },
    {
      icon: "bell",
      title: "Chat with your crew",
      description:
        "Direct messages and ride-group rooms, unread counts, and live updates keep every plan moving.",
    },
    {
      icon: "shield",
      title: "Verified by KYC",
      description:
        "KYC-verified profiles and badges help you know who you are riding with.",
    },
  ] satisfies Feature[],
  steps: [
    {
      number: "01",
      title: "Route",
      description:
        "Drop a start point and destination on the map so everyone knows where you are headed.",
      icon: "compass",
    },
    {
      number: "02",
      title: "Schedule",
      description:
        "Pick the date and time that works for you and the riders coming along.",
      icon: "clock",
    },
    {
      number: "03",
      title: "Preferences",
      description:
        "Set the maximum riders, group preference, and a cover photo, then publish your ride.",
      icon: "layers",
    },
  ] satisfies Step[],
  audiences: [
    {
      title: "For the solo rider",
      description:
        "Find people heading your way instead of taking the road alone.",
    },
    {
      title: "For weekend crews",
      description:
        "Plan a route, review join requests, and keep the whole group in one chat.",
    },
    {
      title: "For new riders",
      description:
        "Verified profiles make it easier to join your first group ride with confidence.",
    },
  ],
  deepDive: [
    {
      title: "Discovery that starts nearby",
      body: "Location powers the rider feed, so the people you see are the ones you could actually ride with. Browse by city, see how far away someone is, and keep scrolling as more riders load.",
    },
    {
      title: "A match opens the door",
      body: "Swipe right to connect. Mutual interest creates a shared chat room, so saying hello takes one tap instead of a search through profiles.",
    },
    {
      title: "Ride plans that stay together",
      body: "Every ride has its own details, join requests, share link, and chat room. Updates reach the people who are actually coming along, without a separate thread to follow.",
    },
    {
      title: "Trust, checked before the ride",
      body: "Profiles can be completed and verified through KYC, with a badge others can see — a simple way to feel better about meeting new riders for the first time.",
    },
  ],
  specifications: [
    { label: "Version", value: "1.0.10" },
    { label: "Category", value: "Motorcycle riding community" },
    { label: "Platforms", value: "iOS, Android" },
    { label: "Ride setup", value: "Route → Schedule → Preferences" },
    { label: "Discovery", value: "Location-based rider feed" },
    { label: "Chat", value: "Direct + ride-group rooms" },
    { label: "Verification", value: "KYC with verified badge" },
    { label: "Support", value: siteConfig.email },
  ],
  faqs: [
    {
      question: "What is A Falcon?",
      answer:
        "A Falcon is a community app for motorcycle riders. Find riders near you, swipe to connect, create or join group rides, and chat with your group before you head out.",
    },
    {
      question: "How do I find riders near me?",
      answer:
        "Allow location access and the Discover feed shows riders nearby based on your city and coordinates. You can like or skip riders, and connect when both of you are interested.",
    },
    {
      question: "How do group rides work?",
      answer:
        "Create a ride by choosing a route, date and time, and preferences. Other riders can request to join; you can accept or decline requests and share the ride link with your group.",
    },
    {
      question: "Do I need to verify my profile?",
      answer:
        "KYC verification is available so other riders can see a verified badge on your profile. It helps build trust before you meet up, especially on your first ride with a new group.",
    },
    {
      question: "Where can I get the app?",
      answer:
        "A Falcon is available for iOS and Android. Use the download link on this page to open the right store for your device, or email support@afalcon.club if you need help.",
    },
  ] satisfies FaqItem[],
};
