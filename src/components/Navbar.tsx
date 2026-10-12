"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#how-we-work", label: "How We Work" },
  { href: "#academy", label: "Academy" },
  { href: "#about", label: "About" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 px-7 transition-[padding] duration-500 sm:px-14 ${scrolled ? "pt-3 sm:pt-4" : "pt-7 sm:pt-11"}`}>
      <div
        className={`relative mx-auto w-full transition-[max-width] duration-500 ease-out ${scrolled ? "max-w-3xl" : "max-w-6xl"}`}
      >
        <nav
          aria-label="Main"
          className={`flex items-center justify-between gap-4 rounded-full border border-white/80 py-2.5 pl-3 pr-2.5 backdrop-blur-md transition-all duration-500 sm:py-3 sm:pl-4 sm:pr-3 ${scrolled ? "bg-white/85 shadow-lg shadow-ink/5" : "bg-white/60 shadow-[0_1px_0_rgba(29,20,66,0.04)]"}`}
        >
          <Link
            href="/"
            className={`relative flex h-8 shrink-0 items-center overflow-hidden pl-2 transition-[width] duration-500 sm:h-10 ${scrolled ? "lg:w-12" : "lg:w-[179px]"}`}
            aria-label="AuraAssist home"
          >
            <Image
              src="/logo.png"
              alt="AuraAssist"
              width={486}
              height={114}
              priority
              className={`h-full w-auto max-w-none transition-opacity duration-300 ${scrolled ? "lg:opacity-0" : ""}`}
            />
            <Image
              src="/logo-mark.png"
              alt=""
              width={114}
              height={114}
              className={`absolute left-2 top-0 hidden h-full w-auto transition-opacity duration-300 lg:block ${scrolled ? "opacity-100" : "pointer-events-none opacity-0"}`}
            />
          </Link>

          <ul
            className={`hidden items-center transition-all duration-500 lg:flex ${scrolled ? "gap-6" : "gap-8"}`}
          >
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="whitespace-nowrap text-[15px] font-medium text-ink-soft transition-colors hover:text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#book"
            className="hidden rounded-full bg-brand px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-brand-dark lg:inline-flex"
          >
            Book an audit
          </a>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-11 place-items-center rounded-full bg-ink text-white lg:hidden"
          >
            <span className="relative block h-3 w-5">
              <span
                className={`absolute left-0 h-0.5 w-5 rounded bg-current transition-all ${open ? "top-1.25 rotate-45" : "top-0"}`}
              />
              <span
                className={`absolute left-0 h-0.5 w-5 rounded bg-current transition-all ${open ? "top-1.25 -rotate-45" : "top-2.5"}`}
              />
            </span>
          </button>
        </nav>

        {open && (
          <div
            id="mobile-menu"
            className="absolute inset-x-0 top-full mt-2 rounded-3xl border border-white bg-white p-3 shadow-xl shadow-ink/10 lg:hidden"
          >
            <ul className="flex flex-col">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl px-4 py-3 text-base font-medium text-ink hover:bg-lavender-soft"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#book"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-full bg-brand px-6 py-3.5 text-center font-semibold text-white"
            >
              Book an audit
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
