"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { PersianMotif } from "@/components/ui/PersianMotif";
import { fadeUp, staggerContainer } from "@/lib/motion";

const STATS = [
  { value: "2", label: "Heritages" },
  { value: "12+", label: "Years of craft" },
  { value: "1", label: "Philosophy" },
];

export function About() {
  return (
    <section id="about" className="overflow-hidden bg-ivory-100 py-28 md:py-36">
      <div className="container-luxe grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="flex flex-col gap-6"
        >
          <motion.span
            variants={fadeUp}
            className="text-xs font-medium uppercase tracking-widest2 text-gold-500"
          >
            Our Story
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="font-serif text-4xl leading-[1.05] text-emerald-950 sm:text-5xl md:text-6xl"
          >
            Two heritages,
            <br />
            one philosophy
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="max-w-lg text-base leading-relaxed text-charcoal-800/70 md:text-lg"
          >
            Royal Beauty began with a journey from Tehran to Stockholm — a
            founder raised on the warmth and ritual of Persian beauty
            traditions, trained in the exacting standards of Swedish medical
            aesthetics. What emerged is a clinic built on restraint: no
            treatment is rushed, no result is generic.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="max-w-lg text-base leading-relaxed text-charcoal-800/70 md:text-lg"
          >
            Every consultation begins with listening. Our team of
            practitioners and estheticians works in the quiet space between
            heritage and precision — honoring what beauty has always meant,
            while holding to the clinical rigor Sweden is known for.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-4 flex gap-6 border-t border-emerald-950/10 pt-8 sm:gap-10"
          >
            {STATS.map((stat) => (
              <div key={stat.label} className="max-w-[7rem]">
                <p className="font-serif text-3xl text-emerald-950 md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs uppercase tracking-widest2 text-charcoal-800/50">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <div className="relative">
          <PersianMotif
            variant="arch"
            className="pointer-events-none absolute -left-10 -top-10 h-40 w-32 text-gold-500/25 md:h-56 md:w-40"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-emerald-900"
          >
            <motion.div
              variants={{
                hidden: { clipPath: "inset(0 0 100% 0)" },
                visible: {
                  clipPath: "inset(0 0 0% 0)",
                  transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className="absolute inset-0"
            >
              <Image
                src="/images/about-founder.jpg"
                alt="A practitioner giving a calm, considered facial treatment"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -bottom-8 -right-4 max-w-[220px] rounded-sm bg-emerald-950 p-5 shadow-xl sm:right-4 md:-right-8"
          >
            <p className="font-serif text-lg italic text-ivory-50">
              &ldquo;Beauty, done quietly.&rdquo;
            </p>
            <p className="mt-2 text-xs uppercase tracking-widest2 text-gold-300">
              Founder, Royal Beauty
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
