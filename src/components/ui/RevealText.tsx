"use client";

import { motion } from "framer-motion";

import { staggerContainer, wordReveal } from "@/lib/motion";

interface RevealTextProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  delay?: number;
  stagger?: number;
}

export function RevealText({
  text,
  as = "h1",
  className = "",
  delay = 0,
  stagger = 0.09,
}: RevealTextProps) {
  const words = text.split(" ");
  const Tag = motion[as];

  return (
    <Tag
      className={className}
      variants={staggerContainer(stagger, delay)}
      initial="hidden"
      animate="visible"
      aria-label={text}
    >
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="inline-block overflow-hidden align-top pb-[0.1em]"
          aria-hidden="true"
        >
          <motion.span variants={wordReveal} className="inline-block">
            {word}
            {index < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
