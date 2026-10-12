"use client";

import { useEffect, useRef } from "react";

type Props = {
  value: number;
  suffix?: string;
  duration?: number;
};

/**
 * Counts from 0 to `value` the first time it scrolls into view.
 * Writes straight to the DOM so the animation never re-renders React.
 */
export default function CountUp({ value, suffix = "", duration = 1400 }: Props) {
  const numRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = numRef.current;
    if (!el) return;

    const show = (n: number) => {
      el.textContent = `${n}${suffix}`;
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      show(value);
      return;
    }

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          show(Math.round((1 - Math.pow(1 - t, 3)) * value));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, suffix, duration]);

  return (
    <span className="tabular-nums">
      <span className="sr-only">
        {value}
        {suffix}
      </span>
      <span ref={numRef} aria-hidden="true">
        0{suffix}
      </span>
    </span>
  );
}
