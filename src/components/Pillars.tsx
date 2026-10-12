"use client";

import { useState } from "react";
import Icon, { type IconName } from "@/components/Icon";

type Node = { icon: IconName; title: string; sub: string; tone: string };

type Pillar = {
  tab: string;
  heading: string;
  branch: string;
  nodes: [Node, Node, Node, Node];
  points: { icon: IconName; title: string; body: string }[];
};

const pillars: Pillar[] = [
  {
    tab: "Operations",
    heading: "We support and structure businesses.",
    branch: "Approved",
    nodes: [
      { icon: "search", title: "Operational Audit", sub: "Assess", tone: "text-brand bg-lavender" },
      { icon: "layers", title: "SOPs & Workflows", sub: "Structure", tone: "text-ink" },
      { icon: "send", title: "Implementation", sub: "Execution", tone: "text-tag-magenta bg-[#fde8fb]" },
      { icon: "chart", title: "Reporting & Tracking", sub: "Visibility", tone: "text-orange-500 bg-orange-50" },
    ],
    points: [
      {
        icon: "badge",
        title: "Clarity, not more busywork",
        body: "Every task sits inside a documented workflow with a clear owner.",
      },
      {
        icon: "list",
        title: "Visibility across operations",
        body: "Reporting shows what's done, what's stuck and what needs attention.",
      },
    ],
  },
  {
    tab: "Professional Development",
    heading: "We develop skilled professionals and teams.",
    branch: "Assessed",
    nodes: [
      { icon: "users", title: "Enrolment", sub: "Application", tone: "text-brand bg-lavender" },
      { icon: "layers", title: "10 Practical Modules", sub: "96 contact hours", tone: "text-ink" },
      { icon: "clipboard", title: "Hands-on Training", sub: "Assessments", tone: "text-tag-magenta bg-[#fde8fb]" },
      { icon: "cap", title: "Capstone Project", sub: "Certification", tone: "text-orange-500 bg-orange-50" },
    ],
    points: [
      {
        icon: "badge",
        title: "Practical, not theoretical",
        body: "An 8-week programme built around assessments, practical work and a capstone project.",
      },
      {
        icon: "list",
        title: "Built for real business operations",
        body: "Administrative, customer-service, operations and productivity skills employers need.",
      },
    ],
  },
  {
    tab: "Talent & Advisory",
    heading: "We connect businesses with talent and expertise.",
    branch: "Matched",
    nodes: [
      { icon: "target", title: "Identify Gaps", sub: "Assessment", tone: "text-brand bg-lavender" },
      { icon: "users", title: "Source & Screen", sub: "Talent", tone: "text-ink" },
      { icon: "briefcase", title: "Place & Implement", sub: "Placement", tone: "text-tag-magenta bg-[#fde8fb]" },
      { icon: "refresh", title: "Ongoing Advisory", sub: "Improvement", tone: "text-orange-500 bg-orange-50" },
    ],
    points: [
      {
        icon: "badge",
        title: "Screened, trained talent",
        body: "Candidates sourced, screened and, where needed, trained through the PVACP.",
      },
      {
        icon: "list",
        title: "Expertise that stays involved",
        body: "Advisory that moves from operational assessment through to implementation.",
      },
    ],
  },
];

function Tile({ node, delay }: { node: Node; delay: number }) {
  return (
    <span
      className={`grid size-16 place-items-center rounded-2xl bg-white shadow-lg shadow-ink/5 ring-1 ring-ink/5 motion-safe:animate-fade-up ${node.tone}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <Icon name={node.icon} className="size-7" />
    </span>
  );
}

function Label({ node, delay }: { node: Node; delay: number }) {
  return (
    <span className="block motion-safe:animate-fade-up" style={{ animationDelay: `${delay}ms` }}>
      <span className="block text-base font-semibold text-ink">{node.title}</span>
      <span className="block text-sm text-ink-soft">{node.sub}</span>
    </span>
  );
}

/** Fixed 420×500 flow diagram; zoomed down on narrow screens. */
function Flow({ pillar }: { pillar: Pillar }) {
  const [a, b, c, d] = pillar.nodes;
  return (
    <div className="relative h-[500px] w-[420px] max-sm:[zoom:0.72]" aria-hidden="true">
      <svg className="absolute inset-0 text-ink/25" width="420" height="500" fill="none">
        {[
          "M152 64 V120",
          "M300 166 H360 Q384 166 384 190 V236 Q384 260 360 260 H128 Q104 260 104 284 V300",
          "M104 364 V420",
        ].map((path, i) => (
          <path
            key={path}
            d={path}
            pathLength={1}
            strokeDasharray="1"
            stroke="currentColor"
            strokeWidth="2"
            className="motion-safe:animate-draw"
            style={{ animationDelay: `${150 + i * 250}ms` }}
          />
        ))}
      </svg>

      <div className="absolute left-[120px] top-0 flex items-center gap-4">
        <Tile node={a} delay={0} />
        <Label node={a} delay={50} />
      </div>

      <div
        className="absolute left-0 top-[120px] flex h-[92px] w-[300px] items-center gap-4 rounded-2xl bg-white px-6 shadow-xl shadow-ink/5 ring-1 ring-ink/5 motion-safe:animate-fade-up"
        style={{ animationDelay: "200ms" }}
      >
        <span className={b.tone}>
          <Icon name={b.icon} className="size-9" />
        </span>
        <span>
          <span className="block text-base font-semibold text-ink">{b.title}</span>
          <span className="block text-sm text-ink-soft">{b.sub}</span>
        </span>
      </div>

      <span
        className="absolute left-[384px] top-[213px] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white px-2.5 py-1 text-xs font-semibold text-ink shadow-md ring-1 ring-ink/5 motion-safe:animate-fade-up"
        style={{ animationDelay: "500ms" }}
      >
        {pillar.branch}
      </span>

      <div className="absolute left-[72px] top-[300px] flex items-center gap-4">
        <Tile node={c} delay={650} />
        <Label node={c} delay={700} />
      </div>

      <div className="absolute left-[72px] top-[420px] flex items-center gap-4">
        <Tile node={d} delay={900} />
        <Label node={d} delay={950} />
      </div>
    </div>
  );
}

export default function Pillars() {
  const [active, setActive] = useState(0);
  const pillar = pillars[active];

  return (
    <section id="what-we-do" className="px-3 pt-6 sm:px-6">
      <div className="mx-auto max-w-6xl rounded-[28px] bg-white px-6 py-12 shadow-sm ring-1 ring-ink/5 sm:rounded-[40px] sm:px-12 sm:py-16 lg:px-16">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="max-w-md text-3xl font-semibold leading-[1.15] tracking-[-0.025em] text-ink sm:text-4xl">
            Three connected ways we strengthen your business
          </h2>

          <div
            role="tablist"
            aria-label="AuraAssist pillars"
            className="-mx-2 flex gap-1 overflow-x-auto rounded-full bg-canvas p-1.5 shadow-inner shadow-ink/5 sm:mx-0"
          >
            {pillars.map((p, i) => (
              <button
                key={p.tab}
                role="tab"
                id={`pillar-tab-${i}`}
                aria-selected={i === active}
                aria-controls="pillar-panel"
                onClick={() => setActive(i)}
                className={`shrink-0 whitespace-nowrap rounded-full px-5 py-3 text-sm font-medium transition-all sm:text-[15px] ${
                  i === active
                    ? "bg-white text-ink shadow-sm ring-2 ring-brand"
                    : "text-ink-soft hover:text-ink"
                }`}
              >
                {p.tab}
              </button>
            ))}
          </div>
        </div>

        <div
          id="pillar-panel"
          role="tabpanel"
          aria-labelledby={`pillar-tab-${active}`}
          className="mt-14 grid items-center gap-12 lg:mt-20 lg:grid-cols-2 lg:gap-16"
        >
          <div className="flex justify-center lg:justify-start">
            <Flow key={active} pillar={pillar} />
          </div>

          <div key={`copy-${active}`} className="motion-safe:animate-fade-up">
            <h3 className="text-2xl font-semibold leading-tight tracking-[-0.02em] text-ink sm:text-[2rem]">
              {pillar.heading}
            </h3>
            <ul className="mt-10 space-y-8">
              {pillar.points.map((pt) => (
                <li key={pt.title}>
                  <p className="flex items-center gap-3 text-lg font-semibold text-ink sm:text-xl">
                    <span className="grid size-9 shrink-0 place-items-center rounded-full bg-ink text-white">
                      <Icon name={pt.icon} className="size-5" />
                    </span>
                    {pt.title}
                  </p>
                  <p className="mt-3 max-w-md pl-12 text-base leading-relaxed text-ink-soft">
                    {pt.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
