"use client";

import { motion } from "framer-motion";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { CompareSlider } from "@/components/ui/CompareSlider";
import { fadeUp, staggerContainer } from "@/lib/motion";

const CASES = [
  {
    label: "Skin Boosters — 8 week course",
    beforeSrc:
      "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=1000&q=80",
    afterSrc:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1000&q=80",
  },
  {
    label: "Jawline Contouring — single session",
    beforeSrc:
      "https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&w=1000&q=80",
    afterSrc:
      "https://images.unsplash.com/photo-1521146764736-56c929d59c83?auto=format&fit=crop&w=1000&q=80",
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
