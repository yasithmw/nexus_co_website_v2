import { Reveal } from "../reveal";
import { SectionHead } from "../section-head";

type Service = {
  num: string;
  name: string;
  desc: string;
  iconPath: React.ReactNode;
  iconBg: string;
  iconStroke: string;
};

const services: Service[] = [
  {
    num: "/01",
    name: "Software Development",
    desc: "End-to-end platforms, web apps, and internal tools built by senior engineers who understand the product — not just the ticket.",
    iconBg: "bg-blue-2",
    iconStroke: "text-ink",
    iconPath: (
      <path className="icon-line" d="M4 6 L4 18 L20 18 L20 6 Z M8 10 L10 12 L8 14 M14 14 L16 14" />
    ),
  },
  {
    num: "/02",
    name: "AI & Machine Learning",
    desc: "RAG pipelines, prediction models, and intelligent automation. We deploy AI that ships real value in weeks — not conference decks.",
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
    num: "/03",
    name: "Data Architecture & Engineering",
    desc: "Pipelines that don't break at month-end, warehouses built to scale, and dashboards leadership actually trusts. Decisions backed by structure, not gut feel.",
    iconBg: "bg-cream",
    iconStroke: "text-ink",
    iconPath: (
      <path
        className="icon-line"
        d="M4 20 L4 4 M4 20 L20 20 M7 16 L7 12 M11 16 L11 8 M15 16 L15 14 M19 16 L19 6"
      />
    ),
  },
  {
    num: "/04",
    name: "Marketing & Branding",
    desc: "Brand identity, positioning, campaigns, and performance marketing — designed to be remembered and built to convert when nobody's watching.",
    iconBg: "bg-peach",
    iconStroke: "text-ink",
    iconPath: (
      <path
        className="icon-line"
        d="M5 19 L19 5 M5 19 L5 13 M5 19 L11 19 M14 5 L19 5 L19 10"
      />
    ),
  },
];

export function Services() {
  return (
    <section id="services" className="pb-20 pt-24">
      <SectionHead label="What we do" right="Four disciplines" />

      <Reveal
        as="h2"
        className="mb-20 max-w-[14ch] font-display text-[clamp(40px,6.4vw,96px)] font-medium leading-[0.95] tracking-[-0.04em] text-ink-2"
      >
        Engineering, intelligence and{" "}
        <em className="font-serif font-normal italic text-blue">craft</em> —
        under one roof.
      </Reveal>

      <div className="border-t border-line">
        {services.map((svc) => (
          <Reveal key={svc.num}>
            <a
              href="#"
              className="group relative grid cursor-pointer items-start gap-8 border-b border-line py-9 transition-[padding,background] duration-[350ms] ease-[cubic-bezier(0.6,0.2,0.2,1)] hover:bg-paper-2 hover:px-4 lg:grid-cols-[80px_1.1fr_2fr]"
            >
              <span className="pt-3 font-mono text-[12px] tracking-[0.1em] text-muted">
                {svc.num}
              </span>
              <span className="flex items-center gap-3.5 font-display text-[clamp(28px,3vw,44px)] font-medium leading-none tracking-[-0.03em]">
                <span
                  className={`inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-[10px] ${svc.iconBg} ${svc.iconStroke}`}
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5">
                    {svc.iconPath}
                  </svg>
                </span>
                {svc.name}
              </span>
              <p className="max-w-[540px] pt-2 text-[16px] leading-[1.5] opacity-75 col-start-2 lg:col-auto">
                {svc.desc}
              </p>
              <span
                className="absolute right-4 top-1/2 -translate-y-1/2 translate-x-10 text-[28px] opacity-0 transition-all duration-[350ms] ease-[cubic-bezier(0.6,0.2,0.2,1)] group-hover:translate-x-0 group-hover:opacity-100"
                aria-hidden
              >
                →
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
