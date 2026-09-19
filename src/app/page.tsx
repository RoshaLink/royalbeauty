import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Treatments } from "@/components/sections/Treatments";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { Testimonials } from "@/components/sections/Testimonials";
import { Membership } from "@/components/sections/Membership";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Treatments />
      <BeforeAfter />
      <Testimonials />
      <Membership />
      <Contact />
    </>
  );
}
