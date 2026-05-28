import type { ReactNode } from "react";
import Link from "next/link";
import { Reveal } from "../reveal";
import { SectionHead } from "../section-head";

type OtherService = {
  num: string;
  name: string;
  desc: string;
  iconBg: string;
  iconStroke: string;
  iconPath: ReactNode;
  href: string;
};

// Inline data: the 3 services to show (Marketing & Brand excluded)
const OTHER_SERVICES: OtherService[] = [
  {
    num: "/02",
    name: "Software Development",
    desc: "End-to-end platforms, web apps, and internal tools built by senior engineers who understand the product — not just the ticket.",
    iconBg: "bg-blue-2",
    iconStroke: "text-ink",
    iconPath: (
      <path
        className="icon-line"
        d="M4 6 L4 18 L20 18 L20 6 Z M8 10 L10 12 L8 14 M14 14 L16 14"
      />
    ),
    href: "/services/software-development",
  },
  {
    num: "/03",
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
    href: "/services/ai-machine-learning",
  },
  {
    num: "/04",
    name: "Resource Augmentation",
    desc: "Extend your team with vetted senior engineers. Scale capacity without the overhead of hiring, onboarding, and long-term commitments.",
    iconBg: "bg-cream",
    iconStroke: "text-ink",
    iconPath: (
      <path
        className="icon-line"
        d="M4 20 L4 4 M4 20 L20 20 M7 16 L7 12 M11 16 L11 8 M15 16 L15 14 M19 16 L19 6"
      />
    ),
    href: "/services/resource-augmentation",
  },
];

export function ServiceOtherServices() {
  return (
    <section className="py-[120px] bg-paper-2">
      <div className="shell">
        <SectionHead label="Other services" right="Explore more" />

        <Reveal
          as="h2"
          className="mb-12 font-display font-medium text-[clamp(32px,4vw,56px)] tracking-[-0.03em] leading-[1.0] text-ink"
        >
          Our other services
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {OTHER_SERVICES.map((svc) => (
            <Reveal key={svc.num}>
              <Link
                href={svc.href}
                className="group flex flex-col gap-4 rounded-[var(--radius-lg)] bg-paper border border-line p-8 transition-colors hover:bg-white"
              >
                {/* Icon badge */}
                <span
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-[10px] ${svc.iconBg} ${svc.iconStroke}`}
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5">
                    {svc.iconPath}
                  </svg>
                </span>

                {/* Name */}
                <h3 className="font-display font-medium text-[22px] tracking-[-0.02em] text-ink leading-tight">
                  {svc.name}
                </h3>

                {/* Desc */}
                <p className="flex-1 text-[14px] leading-[1.5] text-ink/65">
                  {svc.desc}
                </p>

                {/* Arrow link */}
                <div className="mt-auto border-t border-line pt-4">
                  <span className="font-mono text-[12px] tracking-[0.06em] text-muted transition-colors group-hover:text-ink">
                    Learn more →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
