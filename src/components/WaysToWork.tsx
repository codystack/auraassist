import Icon from "@/components/Icon";

const plans = [
  {
    id: undefined,
    badge: "For businesses",
    intro: "For SMEs, startups and growing organisations that need stronger administration, better workflows and reliable support.",
    headline: "Operations audit",
    note: "first, then a plan built around it",
    cta: { label: "Book an audit", href: "#book" },
    included: [
      "Operational audit & priorities",
      "SOPs, workflows & documentation",
      "Admin, executive & customer support",
      "Talent sourcing & advisory",
    ],
    theme: {
      card: "bg-sun text-ink",
      divider: "border-ink/15",
      intro: "text-ink",
      note: "text-ink/70",
    },
  },
  {
    id: "academy",
    badge: "PVACP",
    intro: "The Professional Virtual Assistant Certification Programme, for aspiring VAs, graduates, career changers and admin professionals.",
    headline: "8 weeks",
    note: "/ 96 contact hours",
    cta: { label: "Apply for the PVACP", href: "#book" },
    included: [
      "10 practical modules",
      "Assessments & hands-on training",
      "A capstone project",
      "Certification on completion",
    ],
    theme: {
      card: "bg-brand text-white",
      divider: "border-white/20",
      intro: "text-white/90",
      note: "text-white/70",
    },
  },
];

export default function WaysToWork() {
  return (
    <section className="px-3 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <h2 className="mx-auto max-w-2xl text-center text-3xl font-semibold leading-[1.15] tracking-[-0.025em] text-ink sm:text-4xl lg:text-[2.75rem]">
          Two ways to work with AuraAssist
        </h2>

        <div className="mt-14 grid gap-6 sm:mt-20">
          {plans.map((p) => (
            <article
              key={p.badge}
              id={p.id}
              className={`grid scroll-mt-28 gap-10 rounded-[28px] p-8 sm:grid-cols-[1.1fr_1fr] lg:p-14 sm:rounded-[32px] sm:p-10 ${p.theme.card}`}
            >
              <div className="flex flex-col">
                <span className="w-fit rounded-full bg-ink px-4 py-1.5 text-sm font-medium text-white">
                  {p.badge}
                </span>
                <p className={`mt-6 text-base leading-relaxed sm:text-[17px] ${p.theme.intro}`}>{p.intro}</p>
                <p className="mt-10 sm:mt-auto sm:pt-10">
                  <span className="block text-3xl font-semibold tracking-[-0.025em] sm:text-4xl">{p.headline}</span>
                  <span className={`mt-1 block text-base ${p.theme.note}`}>{p.note}</span>
                </p>
                <a
                  href={p.cta.href}
                  className="mt-6 inline-flex w-fit items-center gap-4 whitespace-nowrap rounded-full bg-white py-2 pl-6 pr-2 text-base font-medium text-ink transition-transform hover:-translate-y-0.5"
                >
                  {p.cta.label}
                  <span className="grid size-10 place-items-center rounded-full bg-ink text-white">
                    <Icon name="arrowUpRight" className="size-5" />
                  </span>
                </a>
              </div>

              <div className={`border-t pt-8 sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0 ${p.theme.divider}`}>
                <p className="text-xl font-medium">What&apos;s included</p>
                <ul className="mt-6 space-y-5">
                  {p.included.map((item) => (
                    <li key={item} className="flex gap-3 text-base sm:text-[17px]">
                      <Icon name="check" className="mt-1 size-5 shrink-0" strokeWidth={2.5} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-base text-ink-soft">
          Training a whole team?{" "}
          <a href="#book" className="font-semibold text-brand underline-offset-4 hover:underline">
            Ask about corporate programmes
          </a>
        </p>
      </div>
    </section>
  );
}
