"use client";

import { motion } from "framer-motion";

import { useReducedMotion } from "@/lib/useReducedMotion";

export function ScrollCue({ className = "" }: { className?: string }) {
  const reducedMotion = useReducedMotion();

  return (
    <div
      className={`flex flex-col items-center gap-3 ${className}`}
      aria-hidden="true"
    >
      <span className="text-[0.65rem] uppercase tracking-widest2 text-ivory-100/70">
        Scroll
      </span>
      <div className="relative h-12 w-px overflow-hidden bg-ivory-100/20">
        <motion.span
          className="absolute left-0 top-0 h-1/2 w-full bg-gold-300"
          animate={reducedMotion ? { y: 0 } : { y: ["-100%", "200%"] }}
          transition={
            reducedMotion
              ? undefined
              : { duration: 1.8, repeat: Infinity, ease: "easeInOut" }
          }
        />
      </div>
    </div>
  );
}
