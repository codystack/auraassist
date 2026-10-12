export type Testimonial = {
  name: string;
  role: string; // e.g. "Founder, Company"
  quote: string;
  photo?: string; // optional, path in /public, e.g. "/testimonials/ada.jpg"
};

// PLACEHOLDERS — replace every entry with a real client testimonial (with their permission)
// before launch. The quotes below only show the kind of outcome worth asking clients about.
export const testimonials: Testimonial[] = [
  {
    name: "Client Name",
    role: "Founder, Company",
    quote: "Add a short quote about how things changed after working with AuraAssist.",
  },
  {
    name: "Client Name",
    role: "Operations Lead, Company",
    quote:
      "Ask what was broken before (follow-ups, documentation, founder dependency), what AuraAssist set up, and what's different now. Specific results work best, such as hours saved or response times.",
  },
  {
    name: "Client Name",
    role: "Managing Director, Company",
    quote:
      "Placeholder: a quote about SOPs, workflows or reporting, and the clarity or visibility it gave the team.",
  },
  {
    name: "Client Name",
    role: "CEO, Company",
    quote:
      "Placeholder: a longer story works well here. Describe the situation before, the operational audit, the changes put in place, and how the business runs today without everything depending on one person.",
  },
  {
    name: "Graduate Name",
    role: "PVACP Graduate",
    quote: "Placeholder: what the PVACP taught them and where it took their career.",
  },
  {
    name: "Client Name",
    role: "HR Lead, Company",
    quote:
      "Placeholder: an employer's experience of hiring administrative talent sourced and screened by AuraAssist.",
  },
  {
    name: "Client Name",
    role: "Founder, Company",
    quote: "Placeholder: a short, punchy line about reliability or peace of mind.",
  },
  {
    name: "Client Name",
    role: "Executive, Company",
    quote:
      "Placeholder: a quote about executive or administrative support and the time it freed up to focus on growth.",
  },
  {
    name: "Graduate Name",
    role: "Virtual Assistant, PVACP",
    quote: "Placeholder: a quote about practical skills, the capstone project or landing work after the programme.",
  },
];
