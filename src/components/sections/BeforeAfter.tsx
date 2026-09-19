"use client";

import { motion } from "framer-motion";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { CompareSlider } from "@/components/ui/CompareSlider";
import { fadeUp, staggerContainer } from "@/lib/motion";

const CASES = [
  {
    label: "Hot Stone Ritual — signature treatment",
    beforeSrc: "/images/before-skinboosters-1.jpg",
    afterSrc: "/images/after-skinboosters-1.jpg",
  },
  {
    label: "Facial Rejuvenation — in-clinic session",
    beforeSrc: "/images/before-jawline-1.jpg",
    afterSrc: "/images/after-jawline-1.jpg",
  },
];

export function BeforeAfter() {
  return (
    <section id="before-after" className="bg-ivory-100 py-28 md:py-36">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Results"
          title="Before & After"
          description="Drag the divider — real transformations, presented with the same restraint as everything else we do."
        />

        <motion.div
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid gap-12 md:grid-cols-2"
        >
          {CASES.map((item) => (
            <motion.div key={item.label} variants={fadeUp}>
              <CompareSlider
                beforeSrc={item.beforeSrc}
                afterSrc={item.afterSrc}
                beforeAlt={`Before — ${item.label}`}
                afterAlt={`After — ${item.label}`}
                label={item.label}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
