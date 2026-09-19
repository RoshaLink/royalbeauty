"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { PersianMotif } from "@/components/ui/PersianMotif";
import { TESTIMONIALS } from "@/lib/testimonials";
import { useReducedMotion } from "@/lib/useReducedMotion";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (paused || reducedMotion) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [paused, reducedMotion]);

  const current = TESTIMONIALS[index];

  function go(next: number) {
    setIndex((next + TESTIMONIALS.length) % TESTIMONIALS.length);
  }

  return (
    <section id="testimonials" className="relative overflow-hidden bg-emerald-950 py-28 md:py-36">
      <PersianMotif
        variant="lattice"
        className="pointer-events-none absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 text-gold-400/10"
      />

      <div className="container-luxe">
        <SectionHeading
          eyebrow="Testimonials"
          title="In our clients' words"
          description="Stories from those who trust Royal Beauty with their skin."
          light
        />

        <div
          className="relative mx-auto mt-16 flex max-w-2xl flex-col items-center gap-8 text-center"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative min-h-[220px] w-full">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={current.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center gap-6"
              >
                <p className="font-serif text-2xl leading-snug text-ivory-50 sm:text-3xl">
                  &ldquo;{current.quote}&rdquo;
                </p>
                <footer className="flex flex-col items-center gap-1">
                  <span className="text-sm font-medium text-gold-300">
                    {current.name}
                  </span>
                  <span className="text-xs uppercase tracking-widest2 text-ivory-100/50">
                    {current.treatment}
                  </span>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <div className="flex items-center gap-6">
            <button
              type="button"
              data-cursor="hover"
              aria-label="Previous testimonial"
              onClick={() => go(index - 1)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-ivory-100/20 text-ivory-50 transition-colors hover:border-gold-400 hover:text-gold-300"
            >
              ‹
            </button>

            <div className="flex gap-2">
              {TESTIMONIALS.map((t, i) => (
                <button
                  key={t.id}
                  type="button"
                  aria-label={`Go to testimonial ${i + 1}`}
                  aria-current={i === index}
                  onClick={() => go(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index ? "w-6 bg-gold-400" : "w-1.5 bg-ivory-100/30"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              data-cursor="hover"
              aria-label="Next testimonial"
              onClick={() => go(index + 1)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-ivory-100/20 text-ivory-50 transition-colors hover:border-gold-400 hover:text-gold-300"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
