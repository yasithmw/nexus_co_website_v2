"use client";

import { useEffect, useRef } from "react";

const lineTexts = [
  "The product they use.",
  "The brand they trust.",
  "Built by the same team.",
];

function renderLineContent(index: number) {
  if (index === 1) {
    return (
      <>
        The brand they{" "}
        <em className="font-serif font-normal italic tracking-[-0.02em]">
          trust
        </em>
        .
      </>
    );
  }
  return lineTexts[index];
}

export function Statement() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const update = () => {
      const rect = section.getBoundingClientRect();
      const sectionH = section.offsetHeight;
      const winH = window.innerHeight;
      const scrolled = -rect.top;
      const triggerRange = (sectionH - winH) * 0.62;
      const progress = Math.max(0, Math.min(1, scrolled / triggerRange));

      lineRefs.current.forEach((el, i) => {
        if (!el) return;
        const lineP = Math.max(0, Math.min(1, (progress - i * 0.22) / 0.48));
        el.style.opacity = String(lineP);
        el.style.transform = `translateY(${(1 - lineP) * 60}px)`;
      });
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: "200vh", background: "#1a1057" }}
    >
      {/* Ambient bloom */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div
          className="h-[700px] w-[700px] rounded-full opacity-[0.12] blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, var(--color-blue) 0%, transparent 68%)",
          }}
        />
      </div>

      <div className="sticky top-0 flex h-screen items-center">
        <div className="shell w-full py-24">
          <p
            aria-label={lineTexts.join(" ")}
            className="text-center font-display font-semibold leading-[0.93] tracking-[-0.045em]"
            style={{
              fontSize: "clamp(44px, 7vw, 108px)",
              color: "var(--color-paper-3)",
            }}
          >
            {lineTexts.map((_, i) => (
              <span
                key={i}
                ref={(el) => {
                  lineRefs.current[i] = el;
                }}
                className="block"
                style={{ opacity: 0, transform: "translateY(60px)" }}
              >
                {renderLineContent(i)}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
