"use client";

import { useEffect, useRef } from "react";

type Line = { text: string; maxOpacity: number; color?: string };

const LINES: Line[] = [
  { text: "We build.", maxOpacity: 1 },
  { text: "We brand.", maxOpacity: 0.38 },
  { text: "We mean it.", maxOpacity: 0.26, color: "var(--color-blue-2)" },
];

export function AboutHero() {
  const lineRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    lineRefs.current.forEach((el, i) => {
      if (!el) return;
      setTimeout(() => {
        if (!el) return;
        el.style.transition =
          "opacity 0.75s cubic-bezier(0.2, 0.6, 0.2, 1), transform 0.75s cubic-bezier(0.2, 0.6, 0.2, 1)";
        el.style.opacity = String(LINES[i].maxOpacity);
        el.style.transform = "translateY(0)";
      }, 112 + i * 210);
    });
  }, []);

  return (
    <section
      className="relative min-h-screen"
      style={{ background: "var(--color-ink-2)" }}
    >
      {/* Rotating outlined letterform watermark */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden select-none"
      >
        <span
          className="animate-spin-slow font-display font-black leading-none"
          style={{
            fontSize: "min(85vw, 85vh)",
            color: "transparent",
            WebkitTextStroke: "1px rgba(174,184,254,0.04)",
            letterSpacing: "-0.05em",
          }}
        >
          N×
        </span>
      </div>

      {/* Radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 38% 58%, rgba(117,139,253,0.09) 0%, transparent 65%)",
        }}
      />

      <div
        className="shell relative z-[2]"
        style={{ paddingTop: "clamp(100px, 13vh, 160px)", paddingBottom: "100px" }}
      >
        <p aria-label="We build. We brand. We mean it.">
          {LINES.map((line, i) => (
            <span
              key={i}
              ref={(el) => {
                lineRefs.current[i] = el;
              }}
              className="block font-display font-black tracking-[-0.04em] leading-[0.88] text-paper"
              style={{
                fontSize: "clamp(86px, 17vw, 252px)",
                opacity: 0,
                transform: "translateY(60px)",
                color: line.color,
                ...(i > 0 ? { marginTop: "-0.176em" } : {}),
              }}
            >
              {line.text}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
