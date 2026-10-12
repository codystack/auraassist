import Icon, { type IconName } from "@/components/Icon";

// Illustrative tracker pattern (0 = light … 3 = dark); decorative only.
const tracker = [
  [0, 1, 2, 0, 1, 3, 2, 0, 0],
  [2, 3, 3, 1, 2, 0, 0, 2, 3],
  [2, 0, 2, 0, 1, 3, 3, 1, 2],
  [1, 3, 1, 0, 0, 2, 1, 2, 1],
  [0, 3, 3, 0, 1, 3, 0, 3, 1],
  [1, 0, 0, 2, 1, 0, 3, 3, 0],
];
const shades = ["bg-[#e7dcff]", "bg-[#c6a8ff]", "bg-[#9a63ff]", "bg-[#2a1580]"];
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const sopSteps = [
  { step: "Capture client details", owner: "Admin", status: "Done" },
  { step: "Send welcome pack", owner: "Support", status: "Done" },
  { step: "Schedule kickoff call", owner: "Exec. assistant", status: "Done" },
  { step: "Set up CRM record", owner: "Operations", status: "In review" },
];

const queue = [
  { task: "Reply to supplier quote", done: true },
  { task: "Schedule quarterly review", done: true },
  { task: "Update CRM after sales call", done: false },
  { task: "Send invoice reminders", done: false },
];

const moreServices: { icon: IconName; label: string }[] = [
  { icon: "headset", label: "Customer-support operations" },
  { icon: "refresh", label: "Workflow improvement" },
  { icon: "search", label: "Operational audits" },
  { icon: "database", label: "CRM administration" },
  { icon: "send", label: "Process implementation" },
  { icon: "layers", label: "Documentation & knowledge management" },
  { icon: "briefcase", label: "Ongoing operational support" },
];

function Card({
  title,
  body,
  children,
  className = "",
}: {
  title: string;
  body: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <article
      className={`relative overflow-hidden rounded-[28px] bg-white shadow-sm ring-1 ring-ink/5 sm:rounded-[32px] ${className}`}
    >
      <div className="relative z-10 p-7 sm:p-12">
        <h3 className="text-2xl font-semibold tracking-[-0.02em] text-ink sm:text-[1.9rem]">{title}</h3>
        <p className="mt-4 max-w-md text-base leading-relaxed text-ink-soft sm:text-lg">{body}</p>
      </div>
      {children}
    </article>
  );
}

export default function Services() {
  return (
    <section id="services" className="px-3 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <h2 className="mx-auto max-w-3xl text-center text-3xl font-semibold leading-[1.15] tracking-[-0.025em] text-ink sm:text-4xl lg:text-[2.75rem]">
          Practical services that bring structure to everyday operations.
        </h2>

        <div className="mt-14 grid gap-5 sm:mt-20 md:grid-cols-2">
          {/* Reporting & tracking */}
          <Card
            title="Reporting & Tracking"
            body="Clear visibility into what's done, what's stuck and what needs attention."
            className="h-[520px] sm:h-[600px]"
          >
            <div
              aria-hidden="true"
              className="absolute -bottom-10 left-1/2 w-[440px] -translate-x-1/2 rotate-[3deg] rounded-3xl bg-white p-6 shadow-2xl shadow-ink/10 ring-1 ring-ink/5"
            >
              <p className="text-xl font-semibold tracking-tight text-[#2a1580]">Task Tracker</p>
              <div className="mt-5 space-y-2.5">
                {tracker.map((row, r) => (
                  <div key={days[r]} className="flex items-center gap-2">
                    <span className="w-8 text-xs text-ink-soft">{days[r]}</span>
                    {row.map((v, c) => (
                      <span key={c} className={`size-[30px] rounded-lg ${shades[v]}`} />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* SOPs & documentation */}
          <Card
            title="SOPs & Documentation"
            body="Processes captured, standardised and easy to hand over to anyone on the team."
            className="h-[520px] sm:h-[600px]"
          >
            <div aria-hidden="true" className="absolute -bottom-6 left-1/2 w-[400px] -translate-x-[45%]">
              <div className="-rotate-2 rounded-3xl bg-white p-6 shadow-2xl shadow-ink/10 ring-1 ring-ink/5">
                <div className="flex items-center justify-between border-b border-ink/10 pb-4">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-ink-soft">SOP-014</p>
                    <p className="mt-1 text-lg font-semibold text-ink">Client Onboarding</p>
                  </div>
                  <span className="rounded-full bg-lavender px-2.5 py-1 text-xs font-semibold text-brand">
                    v2.1
                  </span>
                </div>
                <ul className="mt-4 space-y-3">
                  {sopSteps.map((s, i) => (
                    <li key={s.step} className="flex items-center gap-3 text-sm">
                      <span className="grid size-6 shrink-0 place-items-center rounded-full bg-canvas text-xs font-semibold text-ink-soft">
                        {i + 1}
                      </span>
                      <span className="flex-1">
                        <span className="block font-medium text-ink">{s.step}</span>
                        <span className="block text-xs text-ink-soft">Owner: {s.owner}</span>
                      </span>
                      <span
                        className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${
                          s.status === "Done" ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"
                        }`}
                      >
                        {s.status}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <span className="absolute -left-10 -top-6 flex rotate-[-6deg] items-center gap-2 rounded-xl bg-white px-3 py-2 text-sm font-semibold text-ink shadow-lg ring-1 ring-ink/5">
                <span className="grid size-5 place-items-center rounded-md bg-brand text-white">
                  <Icon name="check" className="size-3.5" strokeWidth={3} />
                </span>
                Owner assigned
              </span>
            </div>
          </Card>

          {/* Admin & executive support */}
          <Card
            title="Administrative & Executive Support"
            body="Inbox, scheduling, follow-ups and day-to-day admin handled under a clear process, so you can focus on growth."
            className="md:col-span-2 md:grid md:min-h-[460px] md:grid-cols-2"
          >
            <div aria-hidden="true" className="relative h-[340px] md:h-auto">
              <div className="absolute -bottom-8 left-6 right-0 rotate-[1.5deg] rounded-tl-3xl bg-canvas p-6 pr-10 shadow-xl shadow-ink/5 ring-1 ring-ink/5 sm:left-10 md:left-6 md:top-12">
                <div className="flex items-center justify-between border-b border-ink/10 pb-4">
                  <p className="text-xl font-semibold text-ink">Today&apos;s Queue</p>
                  <span className="flex gap-1">
                    <span className="size-1.5 rounded-full bg-ink" />
                    <span className="size-1.5 rounded-full bg-ink" />
                    <span className="size-1.5 rounded-full bg-ink" />
                  </span>
                </div>
                <ul className="mt-4 space-y-3">
                  {queue.map((q) => (
                    <li key={q.task} className="flex items-center gap-3 text-[15px]">
                      <span
                        className={`grid size-5 place-items-center rounded-md ${q.done ? "bg-brand text-white" : "border border-ink/20 bg-white"}`}
                      >
                        {q.done && <Icon name="check" className="size-3.5" strokeWidth={3} />}
                      </span>
                      <span className={q.done ? "text-ink-soft line-through decoration-ink/30" : "text-ink"}>
                        {q.task}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 space-y-3">
                  <span className="block h-2.5 w-2/3 rounded-full bg-ink/5" />
                  <span className="block h-2.5 w-5/6 rounded-full bg-ink/5" />
                </div>
              </div>

              <span className="absolute right-4 top-2 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-ink shadow-lg ring-1 ring-ink/5 sm:right-8 md:top-4">
                <Icon name="pen" className="size-4" />
                Handled under a clear process.
              </span>

              <span className="absolute bottom-16 right-10 flex flex-col items-start md:bottom-24 md:right-16">
                <svg viewBox="0 0 24 24" className="size-7 -rotate-12 text-brand" fill="currentColor">
                  <path d="M4 3l16 7-7 2-2 7L4 3Z" />
                </svg>
                <span className="ml-5 -mt-1 rounded-md bg-brand px-3 py-1.5 text-sm font-semibold text-white">
                  AuraAssist team
                </span>
              </span>
            </div>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-ink-soft">Also part of the service</p>
          <ul className="mt-6 flex flex-wrap justify-center gap-3">
            {moreServices.map((s) => (
              <li
                key={s.label}
                className="flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-medium text-ink shadow-sm ring-1 ring-ink/5"
              >
                <Icon name={s.icon} className="size-4 text-brand" />
                {s.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
