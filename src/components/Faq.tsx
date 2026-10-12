import Image from "next/image";

const faqs = [
  {
    q: "Is AuraAssist just a virtual assistant company?",
    a: "No. We combine operations support, professional development, talent and advisory. Beyond completing tasks, we build and manage the workflows, documentation, customer-support processes and people structures a business needs to run consistently.",
  },
  {
    q: "Who do you work with?",
    a: "SMEs, startups, entrepreneurs, executives, professional-service firms and growing organisations. We also train individuals and corporate teams through our professional development programmes.",
  },
  {
    q: "What happens in an operations audit?",
    a: "We look at how work actually moves through your business: where it depends on the founder, where follow-ups slip, what isn't documented and who owns what. You get a clear picture of the gaps and a prioritised plan to fix them.",
  },
  {
    q: "Can you provide people as well as systems?",
    a: "Yes. Our team can run administrative, executive and customer-support work for you, or we can source, screen and place administrative talent directly with your business.",
  },
  {
    q: "What is the PVACP?",
    a: "The Professional Virtual Assistant Certification Programme is an 8-week programme with 96 contact hours across 10 modules, including assessments, practical training and a capstone project.",
  },
  {
    q: "Do you train existing teams?",
    a: "Yes. We run corporate training in administrative, customer-service, operations and workplace productivity skills, tailored to how your team works.",
  },
  {
    q: "Where are you based?",
    a: "We're starting in Nigeria, with plans to expand across Africa and serve international organisations. Get in touch and tell us where your team is.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="px-3 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1fr_1.25fr] lg:gap-20">
        <div className="flex gap-4 sm:gap-5 lg:pt-4">
          <span className="grid size-14 shrink-0 place-items-center rounded-full bg-white p-2 shadow-sm ring-1 ring-ink/5">
            <Image src="/logo-mark.png" alt="" width={114} height={114} className="h-full w-auto" />
          </span>
          <div>
            <p className="pt-3 text-lg text-ink-soft">@ AuraAssist</p>
            <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
              We&apos;re a systems-driven administrative and business operations company. We help growing
              businesses move from fragmented, founder-dependent operations to structured, efficient and
              scalable ways of working. We focus on clarity over chaos, systems over improvising, and
              capacity for growth over simply doing more work.
            </p>
            <a
              href="#about"
              className="mt-6 inline-block text-lg font-medium text-ink underline-offset-4 hover:underline"
            >
              more about us
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-semibold leading-[1.15] tracking-[-0.025em] text-ink sm:text-4xl lg:text-[2.75rem]">
            Got questions?
            <br />
            We&apos;ve got answers
          </h2>

          <div className="mt-12 space-y-4">
            {faqs.map((f) => (
              <details
                key={f.q}
                name="faq"
                className="group rounded-2xl bg-white shadow-sm ring-1 ring-ink/5 open:shadow-md"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-6 text-base font-medium text-ink sm:px-8 sm:text-lg [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span aria-hidden="true" className="relative size-4 shrink-0">
                    <span className="absolute left-0 top-1/2 h-0.5 w-4 -translate-y-1/2 rounded bg-ink" />
                    <span className="absolute left-1/2 top-0 h-4 w-0.5 -translate-x-1/2 rounded bg-ink transition-transform duration-300 group-open:rotate-90 group-open:opacity-0" />
                  </span>
                </summary>
                <p className="px-6 pb-7 text-[15px] leading-relaxed text-ink-soft sm:px-8 sm:text-base">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
