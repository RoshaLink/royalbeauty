import { Hero } from "@/components/sections/Hero";
import { PlaceholderSection } from "@/components/sections/PlaceholderSection";

export default function Home() {
  return (
    <>
      <Hero />

      <PlaceholderSection
        id="about"
        eyebrow="Our Story"
        title="Two heritages, one philosophy"
        description="A founder's journey from Tehran to Stockholm — where Persian warmth and craftsmanship meet Scandinavian restraint and clinical precision."
      />

      <PlaceholderSection
        id="treatments"
        eyebrow="Treatments"
        title="Skincare & Injectable Artistry"
        description="Facials, peels, and hydrafacial-style skincare alongside Botox, fillers, and lip treatments — each considered, never rushed."
        light
      />

      <PlaceholderSection
        id="before-after"
        eyebrow="Results"
        title="Before & After"
        description="Real transformations, presented with the same restraint as everything else we do."
      />

      <PlaceholderSection
        id="testimonials"
        eyebrow="Testimonials"
        title="In our clients' words"
        description="Stories from those who trust Royal Beauty with their skin."
        light
      />

      <PlaceholderSection
        id="membership"
        eyebrow="VIP Club"
        title="An exclusive membership"
        description="Priority booking, private events, and bespoke treatment plans for our most devoted clients."
      />

      <PlaceholderSection
        id="contact"
        eyebrow="Booking"
        title="Begin your consultation"
        description="Tell us a little about what you're looking for, and our team will be in touch."
        light
      />
    </>
  );
}
