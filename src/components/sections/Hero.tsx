"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { RevealText } from "@/components/ui/RevealText";
import { ButtonLink } from "@/components/ui/Button";
import { ScrollCue } from "@/components/ui/ScrollCue";
import { useGsapScrollTrigger } from "@/lib/useGsapScrollTrigger";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);

  useGsapScrollTrigger(sectionRef, ({ gsap }) => {
    if (!imageWrapRef.current || !sectionRef.current) return;

    gsap.fromTo(
      imageWrapRef.current,
      { yPercent: -8 },
      {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      },
    );
  });

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative flex min-h-screen items-end overflow-hidden bg-emerald-950"
    >
      <div
        ref={imageWrapRef}
        className="absolute inset-0 -top-[10%] h-[120%] w-full"
      >
        <Image
          src="/images/hero-editorial.jpg"
          alt="Editorial beauty portrait with a bold red lip, in warm cinematic light"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_25%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/60 to-emerald-950/30" />
        <div className="absolute inset-0 bg-emerald-950/20" />
      </div>

      <div className="container-luxe relative z-10 flex flex-col gap-8 pb-28 pt-48 sm:pb-36">
        <span className="text-xs font-medium uppercase tracking-widest2 text-gold-300">
          Stockholm · Est. for those who know
        </span>

        <RevealText
          as="h1"
          text="Persian Heritage. Swedish Precision."
          className="max-w-4xl font-serif text-5xl leading-[1.05] text-ivory-50 sm:text-6xl md:text-7xl lg:text-8xl"
        />

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl text-base leading-relaxed text-ivory-100/80 md:text-lg"
        >
          Royal Beauty is a quiet-luxury clinic for skincare and injectable
          artistry — where Persian heritage meets Scandinavian restraint, one
          considered treatment at a time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center gap-5"
        >
          <ButtonLink href="#contact" variant="primary">
            Book Consultation
          </ButtonLink>
          <ButtonLink href="#treatments" variant="ghost" className="text-ivory-50">
            Explore Treatments
          </ButtonLink>
        </motion.div>
      </div>

      <div className="absolute bottom-10 right-8 z-10 hidden sm:block">
        <ScrollCue />
      </div>
    </section>
  );
}
