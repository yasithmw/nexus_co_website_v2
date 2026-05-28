"use client";

import { useState, useRef } from "react";

type NavService = {
  name: string;
  desc: string;
  href: string;
  iconBg: string;
  iconStroke: string;
  iconPath: React.ReactNode;
};

const NAV_SERVICES: NavService[] = [
  {
    name: "Marketing & Brand",
    desc: "Identity, positioning & campaigns",
    href: "/services/marketing-brand",
    iconBg: "bg-peach",
    iconStroke: "text-ink",
    iconPath: (
      <path
        className="icon-line"
        d="M5 19 L19 5 M5 19 L5 13 M5 19 L11 19 M14 5 L19 5 L19 10"
      />
    ),
  },
  {
    name: "Software Development",
    desc: "Web apps, platforms & tools",
    href: "#",
    iconBg: "bg-blue-2",
    iconStroke: "text-ink",
    iconPath: (
      <path
        className="icon-line"
        d="M4 6 L4 18 L20 18 L20 6 Z M8 10 L10 12 L8 14 M14 14 L16 14"
      />
    ),
  },
  {
    name: "AI & Machine Learning",
    desc: "RAG pipelines & automation",
    href: "#",
    iconBg: "bg-blue",
    iconStroke: "text-paper",
    iconPath: (
      <>
        <circle className="icon-line" cx="12" cy="12" r="3" />
        <path
          className="icon-line"
          d="M12 3 L12 6 M12 18 L12 21 M3 12 L6 12 M18 12 L21 12 M5.6 5.6 L7.7 7.7 M16.3 16.3 L18.4 18.4 M5.6 18.4 L7.7 16.3 M16.3 7.7 L18.4 5.6"
        />
      </>
    ),
  },
  {
    name: "Resource Augmentation",
    desc: "Team extension & flexible staffing",
    href: "#",
    iconBg: "bg-cream",
    iconStroke: "text-ink",
    iconPath: (
      <path
        className="icon-line"
        d="M4 20 L4 4 M4 20 L20 20 M7 16 L7 12 M11 16 L11 8 M15 16 L15 14 M19 16 L19 6"
      />
    ),
  },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };

  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  const staticLinks = [
    { href: "/about", label: "About Us" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line-2 bg-[rgba(241,242,246,0.78)] py-[18px] backdrop-blur-[14px]">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-[clamp(20px,4vw,56px)]">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-3 font-display text-[19px] font-semibold tracking-[-0.02em]"
        >
          <span className="relative inline-block h-8 w-8">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
              <circle cx="16" cy="16" r="15" fill="#27187E" />
              {/* Upward chevron — lift/ascent motif */}
              <path
                d="M10 20 L16 11 L22 20"
                stroke="#AEB8FE"
                strokeWidth="2.6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Ground accent — the surface being lifted from */}
              <line
                x1="12"
                y1="22.5"
                x2="20"
                y2="22.5"
                stroke="#ff91a4"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>
          Create Lyft
        </a>

        {/* Nav */}
        <nav className="hidden gap-9 text-[14px] font-medium tracking-[-0.01em] md:flex">

          {/* Services with dropdown */}
          <div
            className="relative"
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
          >
            <button
              className={[
                "relative flex items-center gap-1.5 py-1",
                "after:absolute after:-bottom-0.5 after:left-0 after:h-px after:bg-ink",
                "after:transition-[width] after:duration-[350ms] after:ease-[cubic-bezier(0.6,0.2,0.2,1)]",
                open ? "after:w-full" : "after:w-0 hover:after:w-full",
              ].join(" ")}
            >
              Services
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                className={[
                  "transition-transform duration-[250ms] ease-[cubic-bezier(0.6,0.2,0.2,1)]",
                  open ? "rotate-180" : "rotate-0",
                ].join(" ")}
              >
                <path
                  d="M2 3.5 L5 6.5 L8 3.5"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Dropdown panel */}
            <div
              className={[
                "absolute left-1/2 top-[calc(100%+16px)] w-[420px] -translate-x-1/2",
                "rounded-[20px] border border-line-2 bg-white p-3",
                "shadow-[0_8px_40px_rgba(39,24,126,0.10),0_2px_8px_rgba(39,24,126,0.06)]",
                "transition-all duration-[280ms] ease-[cubic-bezier(0.2,0.6,0.2,1)]",
                open
                  ? "pointer-events-auto translate-y-0 opacity-100"
                  : "pointer-events-none -translate-y-2 opacity-0",
              ].join(" ")}
            >
              {/* Arrow notch */}
              <div className="absolute -top-[7px] left-1/2 -translate-x-1/2">
                <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
                  <path
                    d="M0 8 L7 0 L14 8"
                    fill="#ffffff"
                    stroke="rgba(39,24,126,0.08)"
                    strokeWidth="1"
                  />
                </svg>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {NAV_SERVICES.map((svc) => (
                  <a
                    key={svc.name}
                    href={svc.href}
                    className="group flex flex-col gap-3 rounded-[14px] bg-white p-4 transition-[background] duration-[200ms] ease-[cubic-bezier(0.6,0.2,0.2,1)] hover:bg-paper"
                  >
                    <span
                      className={`inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-[10px] ${svc.iconBg} ${svc.iconStroke}`}
                    >
                      <svg viewBox="0 0 24 24" className="h-5 w-5">
                        {svc.iconPath}
                      </svg>
                    </span>

                    <span className="flex flex-col gap-0.5">
                      <span className="font-display text-[13.5px] font-semibold leading-[1.2] tracking-[-0.02em] text-ink">
                        {svc.name}
                      </span>
                      <span className="font-mono text-[10.5px] tracking-[0.04em] text-muted">
                        {svc.desc}
                      </span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {staticLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-ink after:transition-[width] after:duration-[350ms] after:ease-[cubic-bezier(0.6,0.2,0.2,1)] hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="/connect"
          className="inline-flex items-center gap-2 rounded-full bg-ink px-[18px] py-[10px] text-[13px] font-medium tracking-[-0.01em] text-paper transition-[background,transform] duration-200 hover:-translate-y-0.5 hover:bg-ink-2"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-blue-2" />
          Get in Touch
        </a>
      </div>
    </header>
  );
}
