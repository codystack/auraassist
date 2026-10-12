"use client";

import { useEffect, useRef, useState } from "react";
import Icon from "@/components/Icon";

const steps = [
  {
    title: "Assess",
    body: "We start with an operational audit: how work actually moves through your business, where it depends on you, and where things slip.",
    deliverables: ["Operational audit", "Gap & risk map", "Priority recommendations"],
    output: "Audit report & priorities",
  },
  {
    title: "Structure",
    body: "We design the workflows, SOPs and documentation that turn ad-hoc work into repeatable processes with clear owners.",
    deliverables: ["SOPs & workflows", "Documentation & knowledge base", "CRM & tool setup"],
    output: "A documented way of working",
  },
  {
    title: "Staff",
    body: "We put the right people on the work, whether that's our support team or trained, screened talent placed directly with you.",
    deliverables: ["Admin & executive support", "Talent sourcing & screening", "PVACP-trained professionals"],
    output: "The right people in place",
  },
  {
    title: "Support",
    body: "We stay involved, running operations, tracking performance and improving the system as your business grows.",
    deliverables: ["Ongoing operational support", "Reporting & tracking", "Continuous improvement"],
    output: "Visibility and capacity",
  },
];

export default function Process() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.index));
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const step = steps[active];

  return (
    <section id="how-we-work" className="px-3 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="inline-block rounded-full bg-tag-yellow px-5 py-1.5 text-base font-medium text-ink">
            Process
          </span>
          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-semibold leading-[1.15] tracking-[-0.025em] text-ink sm:text-4xl lg:text-[2.75rem]">
            How we bring structure to your business.
          </h2>
        </div>

        <div className="mt-16 grid gap-16 lg:mt-20 lg:grid-cols-[1fr_1.05fr]">
          <ol>
            {steps.map((s, i) => {
              const reached = i <= active;
              return (
                <li
                  key={s.title}
                  ref={(el) => {
                    refs.current[i] = el;
                  }}
                  data-index={i}
                  className="relative grid grid-cols-[3.5rem_1fr] gap-x-4 pb-14 last:pb-0 sm:gap-x-6"
                >
                  {i < steps.length - 1 && (
                    <span
                      aria-hidden="true"
                      className={`absolute bottom-0 left-7 top-14 w-1 -translate-x-1/2 rounded-full transition-colors duration-500 ${i < active ? "bg-brand" : "bg-white"}`}
                    />
                  )}
                  <span
                    className={`relative grid size-14 place-items-center rounded-full text-lg font-semibold shadow-sm transition-colors duration-500 ${
                      reached ? "bg-brand text-white" : "bg-white text-ink"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <div className="pt-2.5">
                    <h3
                      className={`text-xl font-semibold tracking-[-0.015em] transition-colors sm:text-2xl ${reached ? "text-ink" : "text-ink/60"}`}
                    >
                      {s.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">{s.body}</p>
                    <ul className="mt-5 flex flex-wrap gap-2 lg:hidden">
                      {s.deliverables.map((d) => (
                        <li
                          key={d}
                          className="rounded-full bg-white px-3 py-1.5 text-sm font-medium text-ink ring-1 ring-ink/5"
                        >
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ol>

          <div className="hidden lg:block">
            <div
              aria-live="polite"
              className="sticky top-28 aspect-square overflow-hidden rounded-[32px] bg-gradient-to-br from-[#b9a4ff] via-brand to-[#2a1580] p-10 text-white"
            >
              <div aria-hidden="true" className="absolute -right-24 -top-24 size-80 rounded-full bg-white/10 blur-3xl" />
              <div key={active} className="relative flex h-full flex-col motion-safe:animate-fade-up">
                <p className="font-mono text-sm uppercase tracking-[0.2em] text-white/70">
                  Step {String(active + 1).padStart(2, "0")} / {String(steps.length).padStart(2, "0")}
                </p>
                <p className="mt-3 text-5xl font-semibold tracking-[-0.03em]">{step.title}</p>
                <ul className="mt-10 space-y-4">
                  {step.deliverables.map((d) => (
                    <li key={d} className="flex items-center gap-3 text-lg font-medium">
                      <span className="grid size-7 place-items-center rounded-full bg-white/15">
                        <Icon name="check" className="size-4" strokeWidth={3} />
                      </span>
                      {d}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto w-fit rounded-2xl bg-white px-6 py-5 text-ink shadow-xl">
                  <p className="text-sm text-ink-soft">What you get</p>
                  <p className="mt-1 text-xl font-semibold tracking-tight">{step.output}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
