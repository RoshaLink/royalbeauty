"use client";

import { useState } from "react";

import {
  BRAND_NAME,
  CLINIC_ADDRESS,
  LANGUAGES,
  NAV_LINKS,
  SOCIAL_LINKS,
} from "@/lib/constants";
import { PersianMotif } from "@/components/ui/PersianMotif";

export function Footer() {
  const [language, setLanguage] = useState<(typeof LANGUAGES)[number]["code"]>(
    "EN",
  );

  return (
    <footer className="relative overflow-hidden bg-charcoal-950 pt-24 text-ivory-100">
      <PersianMotif
        variant="lattice"
        className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 text-gold-400/10"
      />

      <div className="container-luxe relative grid gap-14 pb-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-serif text-2xl tracking-widest2 text-ivory-50">
            {BRAND_NAME}
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ivory-100/60">
            Where Persian heritage meets Scandinavian precision — quiet
            luxury skincare and injectable artistry in the heart of Sweden.
          </p>

          <div className="mt-8 flex items-center gap-1 rounded-full border border-ivory-100/15 p-1 w-fit">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                type="button"
                onClick={() => setLanguage(lang.code)}
                aria-pressed={language === lang.code}
                className={`rounded-full px-3 py-1.5 text-xs font-medium tracking-wide transition-colors ${
                  language === lang.code
                    ? "bg-gold-400 text-emerald-950"
                    : "text-ivory-100/70 hover:text-ivory-50"
                }`}
              >
                {lang.code}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-widest2 text-gold-300">
            Navigate
          </p>
          <ul className="mt-5 flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-ivory-100/70 transition-colors hover:text-gold-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-widest2 text-gold-300">
            Visit
          </p>
          <address className="mt-5 not-italic text-sm leading-relaxed text-ivory-100/70">
            {CLINIC_ADDRESS.line1}
            <br />
            {CLINIC_ADDRESS.line2}
          </address>

          <ul className="mt-6 flex gap-4">
            {SOCIAL_LINKS.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-ivory-100/70 transition-colors hover:text-gold-300"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory-100/10 py-6">
        <p className="container-luxe text-center text-xs text-ivory-100/40">
          © {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
