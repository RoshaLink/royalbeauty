"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { FloatingInput, FloatingTextarea } from "@/components/ui/FloatingField";
import { Button } from "@/components/ui/Button";
import { CLINIC_ADDRESS } from "@/lib/constants";
import { TREATMENTS } from "@/lib/treatments";

interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  treatment: string;
  message: string;
}

const INITIAL_FORM: BookingFormData = {
  name: "",
  email: "",
  phone: "",
  treatment: "",
  message: "",
};

export function Contact() {
  const [form, setForm] = useState<BookingFormData>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  function handleChange<K extends keyof BookingFormData>(key: K, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // eslint-disable-next-line no-console
    console.log("Consultation request submitted:", form);
    setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-emerald-950 py-28 md:py-36">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Booking"
          title="Begin your consultation"
          description="Tell us a little about what you're looking for, and our team will be in touch within one business day."
          light
        />

        <div className="mt-16 grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div className="relative min-h-[420px] text-ivory-50">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="flex h-full flex-col items-start justify-center gap-4"
                >
                  <span className="text-xs uppercase tracking-widest2 text-gold-300">
                    Request received
                  </span>
                  <h3 className="font-serif text-3xl">Thank you, {form.name || "friend"}.</h3>
                  <p className="max-w-sm text-sm leading-relaxed text-ivory-100/70">
                    We&rsquo;ve received your consultation request and will reach out
                    to confirm your appointment shortly.
                  </p>
                  <button
                    type="button"
                    data-cursor="hover"
                    onClick={() => {
                      setForm(INITIAL_FORM);
                      setSubmitted(false);
                    }}
                    className="mt-2 text-sm font-medium text-gold-300 underline underline-offset-4 transition-colors hover:text-gold-200"
                  >
                    Book another consultation
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-7"
                >
                  <div className="grid gap-7 sm:grid-cols-2">
                    <FloatingInput
                      id="name"
                      label="Full name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                    />
                    <FloatingInput
                      id="email"
                      label="Email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                    />
                  </div>

                  <FloatingInput
                    id="phone"
                    label="Phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                  />

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="treatment"
                      className="text-xs uppercase tracking-widest2 text-ivory-100/50"
                    >
                      Treatment interest
                    </label>
                    <select
                      id="treatment"
                      value={form.treatment}
                      onChange={(e) => handleChange("treatment", e.target.value)}
                      className="w-full border-b border-ivory-50/25 bg-transparent py-2.5 text-base text-ivory-50 outline-none transition-colors duration-300 focus:border-gold-400"
                    >
                      <option value="" className="text-charcoal-900">
                        Select a treatment
                      </option>
                      {TREATMENTS.map((t) => (
                        <option key={t.id} value={t.name} className="text-charcoal-900">
                          {t.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <FloatingTextarea
                    id="message"
                    label="Message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                  />

                  <div>
                    <Button type="submit" variant="primary">
                      Book Consultation
                    </Button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-8"
          >
            <div className="flex aspect-[4/3] w-full items-center justify-center rounded-sm border border-ivory-100/15 bg-emerald-900/40">
              <span className="text-xs uppercase tracking-widest2 text-ivory-100/40">
                Map placeholder — Stockholm
              </span>
            </div>

            <div className="text-ivory-100/80">
              <p className="text-xs uppercase tracking-widest2 text-gold-300">Visit us</p>
              <address className="mt-3 not-italic text-lg leading-relaxed">
                {CLINIC_ADDRESS.line1}
                <br />
                {CLINIC_ADDRESS.line2}
              </address>
              <p className="mt-4 text-sm text-ivory-100/60">
                Tue–Sat, 10:00–18:00 · By appointment only
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
