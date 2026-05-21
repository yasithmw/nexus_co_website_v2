"use client";

import { useState, useCallback } from "react";

const TESTIMONIALS = [
  {
    quote:
      "Nexus Co rebuilt our data pipeline and our brand identity at the same time. Most studios can't do one well. They did both, and neither looked like it was an afterthought.",
    name: "Priya Nambiar",
    company: "Clearform Financial",
    bg: "#758bfd",
    dark: false,
  },
  {
    quote:
      "They pushed back on our original scope, told us what we actually needed, and delivered it three weeks early. I've never had a vendor do that. They don't feel like a vendor.",
    name: "Tom Ellery",
    company: "Stackbase",
    bg: "#758bfd",
    dark: false,
  },
  {
    quote:
      "The AI recommendations engine they built for us went from concept to production in eleven weeks. It's been running without significant issues for two years. That's the whole story.",
    name: "Danielle Cho",
    company: "Mediflow Health",
    bg: "#758bfd",
    dark: false,
  },
];

export function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  const navigate = useCallback((next: number) => {
    setVisible(false);
    setTimeout(() => {
      setCurrent(next);
      setVisible(true);
    }, 280);
  }, []);

  const prev = useCallback(() => {
    navigate(current === 0 ? TESTIMONIALS.length - 1 : current - 1);
  }, [current, navigate]);

  const next = useCallback(() => {
    navigate(current === TESTIMONIALS.length - 1 ? 0 : current + 1);
  }, [current, navigate]);

  const t = TESTIMONIALS[current];
  const isDark = t.dark;

  const textColor = isDark ? "text-ink" : "text-paper";
  const navBorder = isDark ? "border-ink/30" : "border-paper/30";
  const navBg = isDark ? "bg-ink/10" : "bg-paper/10";
  const navHover = isDark ? "hover:bg-ink/20" : "hover:bg-paper/20";
  const dividerColor = isDark ? "bg-ink/20" : "bg-paper/20";
  const accentColor = isDark ? "#27187e" : "#aeb8fe";
  const monoOpacity = isDark ? "opacity-60 text-ink" : "opacity-60 text-paper";

  return (
    <section
      className="relative flex flex-col"
      style={{
        backgroundColor: t.bg,
        transition: "background-color 700ms ease-in-out",
        height: "640px",
        padding: "80px clamp(20px, 4vw, 56px)",
      }}
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col">
        {/* Single fading wrapper — quote, attribution, and nav all fade together */}
        <div
          className="flex flex-1 flex-col"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 400ms ease-in-out",
          }}
          aria-live="polite"
        >
          {/* Quote — grows to fill available space */}
          <div className="flex flex-1 items-center">
            <blockquote
              className={`font-display font-bold tracking-[-0.03em] leading-[1.15] max-w-[900px] ${textColor}`}
              style={{ fontSize: "clamp(28px, 4vw, 56px)" }}
            >
              <span aria-hidden className="mr-[0.05em]">&ldquo;</span>
              {t.quote}
            </blockquote>
          </div>

          {/* Bottom row: attribution left, nav right */}
          <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            {/* Attribution */}
            <div className="flex items-center gap-3">
              <span
                aria-hidden
                className="shrink-0 text-[8px] leading-none"
                style={{ color: accentColor }}
              >
                ●
              </span>
              <div className="flex flex-col gap-0.5">
                <span
                  className={`font-display font-semibold text-[15px] leading-tight tracking-[-0.01em] ${textColor}`}
                >
                  {t.name}
                </span>
                <span className={`font-mono text-[12px] leading-tight ${monoOpacity}`}>
                  {t.company}
                </span>
              </div>
            </div>

            {/* Prev / Next nav pill */}
            <div
              className={`inline-flex items-center rounded-full border ${navBorder} ${navBg} backdrop-blur-sm`}
            >
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className={`flex h-[48px] w-[48px] items-center justify-center ${textColor} transition-colors ${navHover} rounded-l-full`}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              <div className={`h-5 w-px ${dividerColor} shrink-0`} aria-hidden />

              <button
                onClick={next}
                aria-label="Next testimonial"
                className={`flex h-[48px] w-[48px] items-center justify-center ${textColor} transition-colors ${navHover} rounded-r-full`}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
