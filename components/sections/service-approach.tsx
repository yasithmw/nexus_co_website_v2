import { Reveal } from "../reveal";
import { SectionHead } from "../section-head";

type ApproachPanel = {
  step: string;
  headline: string;
  body: string;
  imageAlt: string;
};

type ServiceApproachProps = {
  panels: readonly ApproachPanel[];
};

export function ServiceApproach({ panels }: ServiceApproachProps) {
  return (
    <section className="py-[120px]">
      <SectionHead label="How we work" right="Our approach" />

      <div>
        {panels.map((panel, i) => {
          const isEven = i % 2 !== 0;
          return (
            <div
              key={panel.step}
              className={`grid gap-12 md:grid-cols-2 md:items-center ${
                i < panels.length - 1 ? "border-b border-line pb-24 mb-24" : ""
              }`}
            >
              {/* Image placeholder */}
              <div className={isEven ? "md:order-last" : ""}>
                <div
                  className="rounded-[var(--radius-lg)] bg-paper-2 border border-line aspect-[4/3] w-full"
                  aria-label={panel.imageAlt}
                  role="img"
                />
              </div>

              {/* Text side */}
              <Reveal className="flex flex-col gap-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                  Step {panel.step}
                </span>
                <h3 className="font-display font-semibold text-[clamp(24px,2.8vw,40px)] tracking-[-0.03em] leading-[1.1] text-ink">
                  {panel.headline}
                </h3>
                <p className="text-[16px] leading-[1.6] text-ink/70 max-w-[48ch]">
                  {panel.body}
                </p>
              </Reveal>
            </div>
          );
        })}
      </div>
    </section>
  );
}
