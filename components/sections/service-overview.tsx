import type { ReactNode } from "react";
import { Reveal } from "../reveal";

type FeatureItem = {
  title: string;
  desc: string;
  icon: ReactNode;
};

type ServiceOverviewProps = {
  headline: string;
  body: string;
  features: FeatureItem[];
  bg?: string;
  dark?: boolean;
};

export function ServiceOverview({
  headline,
  body,
  features,
  bg = "#fbe4d2",
  dark = false,
}: ServiceOverviewProps) {
  const headlineColor = dark ? "text-paper" : "text-ink";
  const bodyColor = dark ? "text-paper/70" : "text-ink/70";
  const featureTitleColor = dark ? "text-paper" : "text-ink";
  const featureDescColor = dark ? "text-paper/65" : "text-ink/65";
  const iconColor = dark ? "text-paper" : "text-ink";
  const borderColor = dark ? "border-paper/15" : "border-ink/15";

  return (
    <section
      className="relative py-[120px]"
      style={{ backgroundColor: bg }}
    >
      <div className="shell">
        {/* Headline */}
        <Reveal
          as="h2"
          className={`font-display font-bold text-[clamp(40px,6vw,88px)] tracking-[-0.04em] leading-[0.95] ${headlineColor} mb-6`}
        >
          {headline}
        </Reveal>

        {/* Body paragraph */}
        <Reveal
          as="p"
          className={`text-[18px] leading-[1.6] ${bodyColor} max-w-[60ch] mb-16`}
        >
          {body}
        </Reveal>

        {/* 4-column feature grid */}
        <div className="grid grid-cols-1 gap-0 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <Reveal
              key={i}
              className={`border-t ${borderColor} pt-8 pb-8 lg:pr-10`}
            >
              {/* Icon */}
              <div className={iconColor}>
                <svg viewBox="0 0 24 24" className="h-6 w-6">
                  {feature.icon}
                </svg>
              </div>

              {/* Title */}
              <div className={`mt-6 font-display font-semibold text-[17px] tracking-[-0.02em] ${featureTitleColor}`}>
                {feature.title}
              </div>

              {/* Desc */}
              <p className={`text-[14px] leading-[1.5] ${featureDescColor} mt-2`}>
                {feature.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
