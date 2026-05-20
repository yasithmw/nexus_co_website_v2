import { Reveal } from "../reveal";
import { SectionHead } from "../section-head";

const steps = [
  {
    num: "01",
    name: "Sharpen",
    desc: "A two-week deep dive. We pressure-test the brief, talk to your users, and surface the real problem worth solving.",
  },
  {
    num: "02",
    name: "Shape",
    desc: "Architecture, design system, brand foundations. Decisions documented before code is written.",
  },
  {
    num: "03",
    name: "Ship",
    desc: "Senior engineers building in two-week increments. Working software in your hands from week three.",
  },
  {
    num: "04",
    name: "Sustain",
    desc: "We don't disappear at launch. Ongoing optimisation, measurement and a roadmap that grows with you.",
  },
];

export function Process() {
  return (
    <section id="process" className="pb-[140px] pt-20">
      <SectionHead num="05" label="How we work" right="Four phases" />

      <Reveal
        as="h2"
        className="mb-[100px] max-w-[16ch] font-display text-[clamp(40px,6.4vw,96px)] font-medium leading-[0.95] tracking-[-0.04em]"
      >
        Less theatre.{" "}
        <em className="font-serif font-normal italic text-blue">
          More shipping.
        </em>
      </Reveal>

      <div className="grid grid-cols-2 gap-0 md:grid-cols-4">
        {steps.map((step) => (
          <Reveal
            key={step.num}
            className="group relative border-t border-line py-7 pr-6"
          >
            <span
              aria-hidden
              className="absolute -top-px left-0 h-0.5 w-0 bg-ink transition-[width] duration-[600ms] ease-[cubic-bezier(0.6,0.2,0.2,1)] group-hover:w-full"
            />
            <div className="mb-[60px] font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
              — Phase {step.num}
            </div>
            <div className="mb-4 font-display text-[clamp(22px,2.4vw,32px)] font-medium leading-none tracking-[-0.025em]">
              {step.name}
            </div>
            <div className="max-w-[28ch] text-[14px] leading-[1.5] opacity-75">
              {step.desc}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
