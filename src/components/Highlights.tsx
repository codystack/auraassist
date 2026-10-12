import Image from "next/image";
import CountUp from "@/components/CountUp";

// Figures come from the brand overview. Swap in client results (businesses supported,
// PVACP graduates, placements) once they exist.
const stats = [
  { value: 3, label: "Connected service pillars" },
  { value: 10, label: "Operational services" },
  { value: 96, label: "Hours of PVACP training" },
];

const essence = ["Structure.", "Support.", "Skills.", "Scale."];

export default function Highlights() {
  return (
    <section className="px-3 sm:px-6">
      <div className="rounded-[28px] bg-white px-6 py-20 shadow-sm ring-1 ring-ink/5 sm:rounded-[40px] sm:px-10 sm:py-28">
        {/* Stats */}
        <dl className="mx-auto grid max-w-5xl gap-12 text-center sm:grid-cols-3 sm:gap-6">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse gap-3">
              <dt className="text-base text-ink-soft sm:text-lg">{s.label}</dt>
              <dd className="text-5xl font-semibold tracking-[-0.03em] text-brand sm:text-6xl">
                <CountUp value={s.value} />
              </dd>
            </div>
          ))}
        </dl>

        {/* Belief quote — replace with a real client testimonial and photo when available */}
        <figure className="mx-auto mt-24 grid max-w-5xl items-center gap-10 sm:mt-32 md:grid-cols-[1fr_auto] md:gap-16">
          <div>
            <figcaption>
              <p className="text-lg font-medium text-ink sm:text-xl">Structure Creates Capacity</p>
              <p className="mt-2 font-mono text-xs uppercase tracking-[0.15em] text-ink-soft sm:text-sm">
                The AuraAssist belief
              </p>
            </figcaption>
            <blockquote className="mt-8 text-xl font-medium leading-[1.35] tracking-[-0.015em] text-ink sm:text-2xl lg:text-[1.6rem]">
              &ldquo;Businesses struggle when too much depends on people remembering, improvising,
              chasing and fixing things manually. When the structure behind a business is
              strong, it is better positioned to grow.&rdquo;
            </blockquote>
          </div>

          <div
            aria-hidden="true"
            className="relative mx-auto flex aspect-[4/4.4] w-full max-w-[300px] flex-col justify-between overflow-hidden rounded-[28px] bg-gradient-to-br from-[#b9a4ff] via-brand to-[#2a1580] p-7 text-white shadow-xl shadow-brand/20 md:w-[280px]"
          >
            <div className="absolute -right-16 -top-16 size-56 rounded-full bg-white/10 blur-2xl" />
            <span className="relative grid size-16 place-items-center rounded-2xl bg-white p-2.5 shadow-md">
              <Image src="/logo-mark.png" alt="" width={114} height={114} className="h-full w-auto" />
            </span>
            <ul className="relative space-y-1 text-2xl font-semibold leading-tight tracking-[-0.03em]">
              {essence.map((word, i) => (
                <li key={word} style={{ opacity: 1 - i * 0.18 }}>
                  {word}
                </li>
              ))}
            </ul>
          </div>
        </figure>
      </div>
    </section>
  );
}
