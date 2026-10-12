import ScrollRevealText from "@/components/ScrollRevealText";

export default function Statement() {
  return (
    <section id="about" className="px-6 pb-28 pt-24 sm:px-10 sm:pb-40 sm:pt-28 lg:pb-52 lg:pt-32">
      <div className="mx-auto max-w-5xl text-center">
        <p className="mb-8 text-sm font-semibold uppercase tracking-[0.2em] text-brand">
          Structure creates capacity
        </p>
        <ScrollRevealText
          className="text-2xl font-semibold leading-[1.2] tracking-[-0.025em] text-ink sm:text-4xl lg:text-[2.9rem]"
          text="Most businesses don't need more hands. They need structure, so the people, time and resources they already have can finally drive growth."
        />
      </div>
    </section>
  );
}
