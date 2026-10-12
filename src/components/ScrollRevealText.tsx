"use client";

import { useEffect, useRef } from "react";

type Props = {
  text: string;
  className?: string;
};

/**
 * Words fade from faint to solid as the block scrolls through the viewport.
 * Progress is written to a CSS variable so scrolling never triggers React re-renders.
 */
export default function ScrollRevealText({ text, className = "" }: Props) {
  const ref = useRef<HTMLParagraphElement>(null);
  const words = text.split(" ");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.setProperty("--p", "1");
      return;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // Starts when the block's top reaches 85% of the viewport, finishes as its bottom reaches 55%
      // (or as low as the page can actually scroll it, so it always completes near the page end).
      const lowestBottom =
        rect.bottom + window.scrollY - (document.documentElement.scrollHeight - vh);
      const start = vh * 0.85;
      const end = Math.max(vh * 0.55, lowestBottom + 1) - rect.height;
      const p = Math.min(1, Math.max(0, (start - rect.top) / (start - end)));
      el.style.setProperty("--p", p.toFixed(4));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <p ref={ref} className={className} style={{ "--p": 0 } as React.CSSProperties}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {words.map((word, i) => (
          <span
            key={i}
            className="transition-opacity duration-150"
            style={{ opacity: `clamp(0.18, calc(var(--p) * ${words.length + 2} - ${i}), 1)` }}
          >
            {word}{" "}
          </span>
        ))}
      </span>
    </p>
  );
}
