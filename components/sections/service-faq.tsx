"use client";

import { useState } from "react";
import { SectionHead } from "../section-head";

type FAQItem = {
  q: string;
  a: string;
};

type ServiceFAQProps = {
  questions: readonly FAQItem[];
};

export function ServiceFAQ({ questions }: ServiceFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <section className="py-[120px]">
      <SectionHead label="FAQ" right="Questions" />

      <h2 className="font-display font-bold text-[clamp(40px,6vw,80px)] tracking-[-0.04em] leading-[0.95] text-ink mb-16">
        Questions?
      </h2>

      <div>
        {questions.map((item, i) => {
          const isOpen = openIndex === i;
          const isLast = i === questions.length - 1;

          return (
            <div
              key={i}
              className={`border-t border-line ${isLast ? "border-b border-line" : ""}`}
            >
              <button
                type="button"
                className="flex w-full items-center justify-between gap-8 py-5 text-left"
                aria-expanded={isOpen}
                onClick={() => toggle(i)}
              >
                <span className="font-display font-medium text-[18px] tracking-[-0.02em] text-ink">
                  {item.q}
                </span>
                <span
                  className="shrink-0 font-mono text-[20px] text-muted transition-transform duration-300 ease-out"
                  aria-hidden
                  style={{ transform: isOpen ? "rotate(45deg)" : "none" }}
                >
                  +
                </span>
              </button>

              {/* Animated answer using grid-template-rows */}
              <div
                style={{
                  display: "grid",
                  gridTemplateRows: isOpen ? "1fr" : "0fr",
                  transition: "grid-template-rows 0.35s ease",
                }}
              >
                <div style={{ overflow: "hidden" }}>
                  <p className="text-[15px] leading-[1.6] text-ink/70 pb-6 max-w-[72ch]">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
