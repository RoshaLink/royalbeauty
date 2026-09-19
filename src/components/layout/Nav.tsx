"use client";

import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

import { NAV_LINKS, BRAND_NAME } from "@/lib/constants";
import { ButtonLink } from "@/components/ui/Button";
import { MobileMenu } from "@/components/layout/MobileMenu";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 48);
  });

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-50 transition-colors duration-500"
        animate={{
          backgroundColor: scrolled
            ? "rgba(21, 21, 19, 0.92)"
            : "rgba(21, 21, 19, 0)",
          boxShadow: scrolled ? "0 1px 0 rgba(201, 161, 93, 0.15)" : "none",
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.nav
          className="container-luxe flex items-center justify-between"
          animate={{ paddingBlock: scrolled ? "1rem" : "1.75rem" }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <a
            href="#top"
            data-cursor="hover"
            className="font-serif text-xl tracking-widest2 text-ivory-50 sm:text-2xl"
          >
            {BRAND_NAME}
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  data-cursor="hover"
                  className="text-sm font-medium text-ivory-100/85 transition-colors hover:text-gold-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <ButtonLink href="#contact" variant="primary">
              Book Consultation
            </ButtonLink>
          </div>

          <button
            type="button"
            data-cursor="hover"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="relative flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <motion.span
              className="h-px w-6 bg-ivory-50"
              animate={{
                rotate: menuOpen ? 45 : 0,
                y: menuOpen ? 4 : 0,
              }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.span
              className="h-px w-6 bg-ivory-50"
              animate={{
                rotate: menuOpen ? -45 : 0,
                y: menuOpen ? -4 : 0,
              }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            />
          </button>
        </motion.nav>
      </motion.header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
