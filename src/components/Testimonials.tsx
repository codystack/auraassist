import Image from "next/image";
import { testimonials } from "@/lib/testimonials";

const avatarTones = [
  "bg-lavender text-brand",
  "bg-[#fde8fb] text-tag-magenta",
  "bg-orange-50 text-orange-500",
  "bg-emerald-50 text-emerald-600",
  "bg-sky-50 text-sky-600",
];

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="px-3 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <h2 className="mx-auto max-w-xl text-center text-3xl font-semibold leading-[1.15] tracking-[-0.025em] text-ink sm:text-4xl lg:text-[2.75rem]">
          Stories of Transformation
        </h2>

        <div className="mt-14 columns-1 gap-4 sm:mt-20 md:columns-2 lg:columns-3">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="mb-4 break-inside-avoid rounded-[24px] bg-white p-7 shadow-sm ring-1 ring-ink/5"
            >
              <figcaption className="flex items-center gap-3.5">
                {t.photo ? (
                  <Image
                    src={t.photo}
                    alt=""
                    width={96}
                    height={96}
                    className="size-12 rounded-full object-cover"
                  />
                ) : (
                  <span
                    aria-hidden="true"
                    className={`grid size-12 place-items-center rounded-full text-sm font-semibold ${avatarTones[i % avatarTones.length]}`}
                  >
                    {initials(t.name)}
                  </span>
                )}
                <span>
                  <span className="block text-base font-medium text-ink">{t.name}</span>
                  <span className="block font-mono text-xs uppercase tracking-[0.12em] text-ink-soft">
                    {t.role}
                  </span>
                </span>
              </figcaption>
              <blockquote className="mt-6 text-base leading-relaxed text-ink-soft sm:text-[17px]">
                {t.quote}
              </blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
