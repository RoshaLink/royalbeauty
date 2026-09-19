import type { NavLink } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Treatments", href: "#treatments" },
  { label: "Before & After", href: "#before-after" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "VIP Club", href: "#membership" },
  { label: "Contact", href: "#contact" },
];

export const CLINIC_ADDRESS = {
  line1: "Strandvägen 12",
  line2: "114 51 Stockholm, Sweden",
};

export const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Facebook", href: "https://facebook.com" },
  { label: "TikTok", href: "https://tiktok.com" },
];

export const LANGUAGES = [
  { code: "EN", label: "English" },
  { code: "SV", label: "Svenska" },
  { code: "FA", label: "فارسی" },
] as const;

export const BRAND_NAME = "Royal Beauty";
