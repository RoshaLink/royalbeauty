"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { fadeUp, staggerContainer } from "@/lib/motion";

import membershipInterior from "../../../public/images/membership-interior.jpg";

const PERKS = [
  "Priority booking across all treatments",
  "Complimentary quarterly touch-ups",
  "Personal beauty concierge",
  "Invitations to private clinic events",
  "Preferred rates on injectable artistry",
];

export function Membership() {
  return (
    <section
      id="membership"
      className="relative overflow-hidden bg-charcoal-950 py-28 md:py-36"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src={membershipInterior}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/85 to-charcoal-950/60" />
      </div>

      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <motion.div
          className="absolute left-[10%] top-[10%] h-72 w-72 rounded-full bg-emerald-600/25 blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[10%] top-[30%] h-80 w-80 rounded-full bg-gold-400/15 blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[5%] left-[35%] h-64 w-64 rounded-full bg-emerald-700/20 blur-3xl"
          animate={{ x: [0, 20, 0], y: [0, -25, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container-luxe relative">
        <SectionHeading
          eyebrow="VIP Club"
          title="An exclusive membership"
          description="For clients who make Royal Beauty part of their rhythm — priority access, and a quieter kind of care."
          light
        />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative mx-auto mt-16 max-w-lg rounded-sm border border-gold-400/30 bg-emerald-950/40 p-10 backdrop-blur-sm sm:p-12"
        >
          <motion.p
            variants={fadeUp}
            className="text-xs font-medium uppercase tracking-widest2 text-gold-300"
          >
            Membership
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="mt-3 font-serif text-4xl text-ivory-50"
          >
            from 1 200 kr
            <span className="text-base font-sans text-ivory-100/50"> / month</span>
          </motion.p>

          <ul className="mt-8 flex flex-col gap-4">
            {PERKS.map((perk) => (
              <motion.li
                key={perk}
                variants={fadeUp}
                className="flex items-start gap-3 text-sm text-ivory-100/80"
              >
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                {perk}
              </motion.li>
            ))}
          </ul>

          <motion.div variants={fadeUp} className="mt-10">
            <ButtonLink href="#contact" variant="primary" className="w-full">
              Request an Invitation
            </ButtonLink>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
