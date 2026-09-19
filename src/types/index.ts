export interface NavLink {
  label: string;
  href: string;
}

export type TreatmentCategory = "skincare" | "injectables";

export interface Treatment {
  id: string;
  category: TreatmentCategory;
  name: string;
  description: string;
  fromPrice: string;
  icon?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  quote: string;
  treatment: string;
}
