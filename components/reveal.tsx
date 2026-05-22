"use client";

import { useEffect, useRef, type CSSProperties, type ElementType, type ReactNode } from "react";

type RevealProps<T extends ElementType = "div"> = {
  as?: T;
  className?: string;
  style?: CSSProperties;
  variant?: "default" | "dim";
  children: ReactNode;
};

export function Reveal<T extends ElementType = "div">({
  as,
  className = "",
  style,
  variant = "default",
  children,
}: RevealProps<T>) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const baseClass = variant === "dim" ? "reveal-dim" : "reveal";

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const rootMargin = variant === "dim" ? "0px 0px -400px 0px" : "0px 0px -40px 0px";
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`${baseClass} ${className}`.trim()} style={style}>
      {children}
    </Tag>
  );
}
