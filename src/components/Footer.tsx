import Image from "next/image";
import Icon from "@/components/Icon";
import { contact } from "@/lib/site";

export default function Footer() {
  const channels = [
    contact.email && { label: contact.email, href: `mailto:${contact.email}` },
    contact.phone && { label: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}` },
    contact.whatsapp && { label: "Chat on WhatsApp", href: `https://wa.me/${contact.whatsapp}` },
  ].filter(Boolean) as { label: string; href: string }[];

  return (
    <footer className="px-3 pb-3 sm:px-6 sm:pb-6">
      <div className="relative overflow-hidden rounded-[28px] bg-[#2a1650] text-white sm:rounded-[40px]">
        {/* Call to action — every "Book an audit" link lands here */}
        <section
          id="book"
          className="relative flex flex-col gap-10 overflow-hidden border-b border-white/10 px-7 py-14 sm:px-14 sm:py-20 md:flex-row md:items-center md:justify-between md:pr-56 lg:px-24 lg:pr-64"
        >
          {/* Decorative quarter circles */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 hidden w-[180px] md:block">
            <span className="absolute -right-[180px] -top-[180px] size-[360px] rounded-full bg-[#6e5ba6]" />
            <span className="absolute -bottom-[200px] -right-[180px] size-[360px] rounded-full bg-[#8a6bd6]" />
          </div>
          <h2 className="relative max-w-xl text-3xl font-semibold leading-[1.15] tracking-[-0.025em] sm:text-4xl lg:text-[2.75rem]">
            Ready to build the structure behind your growth?
          </h2>
          {/* TODO: point at the real booking link (e.g. Calendly) once available */}
          <a
            href={contact.whatsapp ? `https://wa.me/${contact.whatsapp}` : "#book"}
            className="inline-flex w-full shrink-0 items-center justify-center gap-3 rounded-xl bg-brand py-2.5 pl-5 pr-2.5 text-[15px] font-medium transition-colors hover:bg-brand-dark sm:w-auto"
          >
            Book an operations audit
            <span className="grid size-8 place-items-center rounded-full bg-white p-1">
              <Image src="/logo-mark.png" alt="" width={114} height={114} className="h-full w-auto" />
            </span>
          </a>
        </section>

        <div className="relative flex flex-col gap-12 px-7 py-14 sm:px-14 sm:py-16 md:flex-row md:items-end lg:px-24 md:justify-between">
          <div>
            <p className="text-base text-white/75">Get in touch the way that suits you</p>
            <ul className="mt-5 space-y-3">
              {channels.length > 0 ? (
                channels.map((c) => (
                  <li key={c.href}>
                    <a href={c.href} className="text-lg font-medium hover:underline sm:text-xl">
                      {c.label}
                    </a>
                  </li>
                ))
              ) : (
                <>
                  <li>
                    <a href="#book" className="inline-flex items-center gap-2 text-lg font-medium hover:underline sm:text-xl">
                      Book an operations audit <Icon name="arrowUpRight" className="size-5" />
                    </a>
                  </li>
                  <li>
                    <a href="#academy" className="inline-flex items-center gap-2 text-lg font-medium hover:underline sm:text-xl">
                      Apply for the PVACP <Icon name="arrowUpRight" className="size-5" />
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>

          <div className="text-left text-base md:text-right">
            <p className="text-white/70">
              Powering Businesses Through Structure.
              <br />
              Structure. Support. Skills. Scale.
            </p>
            <p className="mt-5 text-lg font-medium">© 2026 — AuraAssist</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
