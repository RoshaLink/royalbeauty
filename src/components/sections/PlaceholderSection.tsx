import { SectionHeading } from "@/components/ui/SectionHeading";

interface PlaceholderSectionProps {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  light?: boolean;
}

/**
 * Structural stand-in for a section that will get its full design and
 * animation treatment in a later pass — keeps page.tsx composing the
 * complete route now, with consistent spacing/typography already in place.
 */
export function PlaceholderSection({
  id,
  eyebrow,
  title,
  description,
  light = false,
}: PlaceholderSectionProps) {
  return (
    <section
      id={id}
      className={`py-28 md:py-36 ${light ? "bg-emerald-950" : "bg-ivory-100"}`}
    >
      <div className="container-luxe">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          light={light}
        >
          <span
            className={`text-xs uppercase tracking-widest2 ${
              light ? "text-ivory-100/40" : "text-charcoal-800/40"
            }`}
          >
            Coming soon
          </span>
        </SectionHeading>
      </div>
    </section>
  );
}
