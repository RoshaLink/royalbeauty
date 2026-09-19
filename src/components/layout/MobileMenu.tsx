"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { NAV_LINKS } from "@/lib/constants";
import { ButtonLink } from "@/components/ui/Button";
import { staggerContainer, fadeUp } from "@/lib/motion";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (!open) return;

    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-40 flex flex-col justify-center bg-emerald-950 px-8 lg:hidden"
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.ul
            className="flex flex-col gap-6"
            variants={staggerContainer(0.07, 0.15)}
            initial="hidden"
            animate="visible"
          >
            {NAV_LINKS.map((link) => (
              <motion.li key={link.href} variants={fadeUp}>
                <a
                  href={link.href}
                  onClick={onClose}
                  className="font-serif text-4xl text-ivory-50 transition-colors hover:text-gold-300"
                >
                  {link.label}
                </a>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            className="mt-10"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5 }}
          >
            <ButtonLink href="#contact" variant="primary">
              Book Consultation
            </ButtonLink>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
