const pillars = [
  {
    label: "Operations Support",
    icon: <path d="M4 6h16M4 12h10M4 18h7" strokeLinecap="round" />,
  },
  {
    label: "Audits & Advisory",
    icon: (
      <>
        <circle cx="11" cy="11" r="6" />
        <path d="m16 16 4 4" strokeLinecap="round" />
      </>
    ),
  },
  {
    label: "Talent Placement",
    icon: (
      <>
        <circle cx="9" cy="8" r="3.2" />
        <path
          d="M3.5 19c.8-3 3-4.5 5.5-4.5s4.7 1.5 5.5 4.5M16 6.5a3 3 0 0 1 0 5.6M18 14.8c1.3.7 2.1 2 2.5 4.2"
          strokeLinecap="round"
        />
      </>
    ),
  },
  {
    label: "PVACP Academy",
    icon: (
      <>
        <path d="m12 4 9 4.5-9 4.5-9-4.5L12 4Z" strokeLinejoin="round" />
        <path d="M7 11v4.5c1.4 1.3 3 2 5 2s3.6-.7 5-2V11" strokeLinecap="round" />
      </>
    ),
  },
];

const shifts = [
  ["Founder-dependent", "Systems-led"],
  ["Missed follow-ups", "Tracked"],
  ["Chaos", "Clarity"],
];

const sopSteps = [
  { label: "Process documented", done: true },
  { label: "Owner assigned", done: true },
  { label: "Follow-ups automated", done: true },
  { label: "Weekly report", done: false },
];

function Tag({ children, className }: { children: React.ReactNode; className: string }) {
  return (
    <span
      aria-hidden="true"
      className={`absolute whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold tracking-normal shadow-sm sm:px-4 sm:py-1.5 sm:text-sm lg:text-base ${className}`}
    >
      {children}
    </span>
  );
}

export default function Hero() {
  return (
    <section className="px-3 pt-3 sm:px-6 sm:pt-6">
      <div className="relative flex min-h-[calc(100svh-0.75rem)] flex-col overflow-hidden rounded-[28px] bg-gradient-to-b from-[#e4dbff] via-lavender to-lavender-soft px-4 pb-7 pt-[5.5rem] sm:pb-10 sm:min-h-[calc(100svh-1.5rem)] sm:rounded-[40px] sm:px-8 sm:pt-[7.5rem]">
        {/* Main hero content */}
        <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center py-2 text-center sm:py-6">
          <p className="mx-auto mb-10 w-fit rounded-full sm:mb-12 border border-brand/15 bg-white/50 px-4 py-1.5 text-xs font-medium tracking-wide text-ink-soft sm:text-sm">
            Business operations · Talent · Training · Advisory
          </p>

          <h1 className="relative mx-auto w-fit text-[1.9rem] font-semibold leading-[1.08] tracking-[-0.035em] text-ink sm:text-5xl md:text-6xl lg:text-[4.1rem]">
            <span className="block">Powering businesses</span>
            <span className="block">through structure.</span>

            <Tag className="left-[6%] -top-7 -rotate-3 sm:left-[38%] bg-tag-lime text-[#173b0b] motion-safe:animate-float sm:-top-9">
              Clarity
            </Tag>
            <Tag className="left-[4%] -bottom-8 -rotate-3 sm:bottom-auto sm:top-[46%] bg-tag-magenta text-white motion-safe:animate-float-slow sm:-left-10">
              Consistency
            </Tag>
            <Tag className="right-[4%] -top-6 rotate-[-4deg] sm:top-[34%] bg-tag-yellow text-ink motion-safe:animate-float sm:-right-10">
              Capacity
            </Tag>
          </h1>

          <p className="mx-auto mt-11 max-w-2xl text-base sm:mt-8 leading-relaxed text-ink-soft sm:text-[17px] md:text-lg">
            We build and run the workflows, documentation, customer support and people
            structures that let growing businesses operate without everything depending on
            the founder.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href="#book"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-brand px-7 py-4 text-base font-medium text-white shadow-lg shadow-brand/25 transition-colors hover:bg-brand-dark sm:w-auto"
            >
              Book an operations audit
              <svg
                viewBox="0 0 20 20"
                className="size-5 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              >
                <path
                  d="M4 10h11m-4-4 4 4-4 4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="#academy"
              className="inline-flex w-full items-center justify-center rounded-2xl border border-ink/10 bg-white/70 px-7 py-4 text-base font-medium text-ink transition-colors hover:bg-white sm:w-auto"
            >
              Explore the PVACP
            </a>
          </div>

          {/* Floating card: SOP checklist */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-0 hidden w-56 -rotate-2 rounded-2xl border border-white bg-white/80 p-4 text-left shadow-xl shadow-ink/5 backdrop-blur xl:block xl:-left-6 motion-safe:animate-float-slow"
          >
            <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-ink">
              <span className="size-2 rounded-full bg-tag-magenta" />
              Client onboarding SOP
            </div>
            <ul className="space-y-2">
              {sopSteps.map((s) => (
                <li key={s.label} className="flex items-center gap-2.5 text-[13px] text-ink-soft">
                  <span
                    className={`grid size-4.5 place-items-center rounded-md ${s.done ? "bg-brand text-white" : "border border-ink/15 bg-white"}`}
                  >
                    {s.done && (
                      <svg viewBox="0 0 12 12" className="size-3">
                        <path
                          d="m2.5 6.2 2.2 2.2 4.8-4.8"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </span>
                  <span className={s.done ? "" : "text-ink-soft/70"}>{s.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Floating card: From → To */}
          <div
            aria-hidden="true"
            className="absolute bottom-6 right-0 hidden w-64 rotate-3 rounded-2xl border border-white bg-white/80 p-4 text-left shadow-xl shadow-ink/5 backdrop-blur xl:block xl:-right-6 motion-safe:animate-float"
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-brand">
              The AuraAssist shift
            </p>
            <ul className="space-y-2">
              {shifts.map(([from, to]) => (
                <li key={from} className="flex items-center gap-2 whitespace-nowrap text-[13px]">
                  <span className="text-ink-soft line-through decoration-ink/25">{from}</span>
                  <span className="text-brand">→</span>
                  <span className="font-semibold text-ink">{to}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Pillars strip */}
      <div className="mx-auto w-full max-w-5xl px-3 pt-14 text-center sm:pt-20">
        <p className="text-base text-ink-soft sm:text-lg">
          Built for SMEs, startups, founders and professional-service firms
        </p>
        <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-4 sm:mt-8 sm:flex sm:flex-wrap sm:justify-center sm:gap-x-12">
          {pillars.map((p) => (
            <li
              key={p.label}
              className="flex items-center gap-2.5 text-left text-sm sm:justify-center font-medium text-ink sm:text-base"
            >
              <span className="grid size-9 place-items-center rounded-xl bg-white text-brand shadow-sm ring-1 ring-ink/5 sm:size-10">
                <svg
                  viewBox="0 0 24 24"
                  className="size-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  {p.icon}
                </svg>
              </span>
              {p.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
