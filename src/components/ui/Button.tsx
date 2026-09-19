"use client";

import type { ReactNode } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

interface BaseProps {
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
}

type ButtonProps = BaseProps &
  Omit<HTMLMotionProps<"button">, "className" | "children"> & {
    href?: undefined;
  };

type LinkProps = BaseProps & {
  href: string;
};

const base =
  "group relative inline-flex items-center justify-center overflow-hidden rounded-full px-8 py-3.5 text-sm font-medium tracking-wide transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400";

const variants = {
  primary: "bg-emerald-700 text-ivory-50 hover:bg-emerald-600",
  ghost:
    "border border-current text-current hover:bg-current/10",
};

function ButtonContent({ children }: { children: ReactNode }) {
  return (
    <>
      <motion.span
        className="relative z-10"
        initial={false}
        whileHover={{ y: -1 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.span>
    </>
  );
}

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <motion.button
      data-cursor="hover"
      className={`${base} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      <ButtonContent>{children}</ButtonContent>
    </motion.button>
  );
}

export function ButtonLink({
  children,
  variant = "primary",
  className = "",
  href,
}: LinkProps) {
  return (
    <motion.a
      href={href}
      data-cursor="hover"
      className={`${base} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <ButtonContent>{children}</ButtonContent>
    </motion.a>
  );
}
