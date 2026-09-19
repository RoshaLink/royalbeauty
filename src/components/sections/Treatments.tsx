"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconDroplet, IconLeaf } from "@/components/ui/icons";
import { TREATMENTS } from "@/lib/treatments";
import type { TreatmentCategory } from "@/types";

const CATEGORIES: { value: TreatmentCategory; label: string }[] = [
  { value: "skincare", label: "Skincare" },
  { value: "injectables", label: "Injectables" },
];

export function Treatments() {
  const [category, setCategory] = useState<TreatmentCategory>("skincare");
  const [openId, setOpenId] = useState<string | null>(null);

  const items = TREATMENTS.filter((t) => t.category === category);
  const Icon = category === "skincare" ? IconLeaf : IconDroplet;

  return (
    <section id="treatments" className="bg-emerald-950 py-28 md:py-36">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Treatments"
          title="Skincare & Injectable Artistry"
          description="Two disciplines, one standard of care. Select a category to explore."
          light
        />

        <div className="mt-12 flex justify-center">
          <div className="relative inline-flex rounded-full border border-ivory-100/15 p-1">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.value}
                type="button"
                data-cursor="hover"
                onClick={() => {
                  setCategory(cat.value);
                  setOpenId(null);
                }}
                className="relative rounded-full px-6 py-2.5 text-sm font-medium transition-colors"
              >
                {category === cat.value ? (
                  <motion.span
                    layoutId="treatment-category-pill"
                    className="absolute inset-0 rounded-full bg-gold-400"
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  />
                ) : null}
                <span
                  className={`relative z-10 ${
                    category === cat.value ? "text-emerald-950" : "text-ivory-100/70"
                  }`}
                >
                  {cat.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        <motion.ul
          key={category}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.06 } },
          }}
          className="mx-auto mt-14 flex max-w-3xl flex-col divide-y divide-ivory-100/10 border-y border-ivory-100/10"
        >
          {items.map((treatment) => {
            const open = openId === treatment.id;
            return (
              <motion.li
                key={treatment.id}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
              >
                <button
                  type="button"
                  data-cursor="hover"
                  aria-expanded={open}
                  onClick={() => setOpenId(open ? null : treatment.id)}
                  className="flex w-full items-center gap-5 py-6 text-left"
                >
                  <Icon className="h-7 w-7 shrink-0 text-gold-400" />
                  <span className="flex-1">
                    <span className="block font-serif text-xl text-ivory-50 sm:text-2xl">
                      {treatment.name}
                    </span>
                  </span>
                  <span className="hidden shrink-0 text-sm text-ivory-100/60 sm:block">
                    {treatment.fromPrice}
                  </span>
                  <motion.span
                    animate={{ rotate: open ? 45 : 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="ml-2 flex h-6 w-6 shrink-0 items-center justify-center text-xl text-gold-300"
                    aria-hidden="true"
                  >
                    +
                  </motion.span>
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-500 ease-luxe ${
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-xl pb-6 pl-12 text-sm leading-relaxed text-ivory-100/70 sm:pl-12">
                      {treatment.description}
                    </p>
                    <p className="pb-6 pl-12 text-sm text-gold-300 sm:hidden">
                      {treatment.fromPrice}
                    </p>
                  </div>
                </div>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
