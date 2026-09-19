"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

import { fadeUp, staggerContainer } from "@/lib/motion";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  children?: ReactNode;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  children,
}: SectionHeadingProps) {
  return (
    <motion.div
      className={`flex flex-col gap-4 ${
        align === "center" ? "items-center text-center" : "items-start text-left"
      }`}
      variants={staggerContainer(0.12)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      {eyebrow ? (
        <motion.span
          variants={fadeUp}
          className={`text-xs font-medium uppercase tracking-widest2 ${
            light ? "text-gold-300" : "text-gold-500"
          }`}
        >
          {eyebrow}
        </motion.span>
      ) : null}
      <motion.h2
        variants={fadeUp}
        className={`font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.05] ${
          light ? "text-ivory-50" : "text-emerald-950"
        }`}
      >
        {title}
      </motion.h2>
      {description ? (
        <motion.p
          variants={fadeUp}
          className={`max-w-2xl text-base md:text-lg leading-relaxed ${
            light ? "text-ivory-100/80" : "text-charcoal-800/70"
          }`}
        >
          {description}
        </motion.p>
      ) : null}
      {children ? (
        <motion.div variants={fadeUp}>{children}</motion.div>
      ) : null}
    </motion.div>
  );
}
