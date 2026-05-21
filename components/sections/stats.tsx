import { Reveal } from "../reveal";
import { SectionHead } from "../section-head";
import { StatCounter } from "../stat-counter";

type Stat = {
  target: number;
  suffix?: string;
  label: string;
};

const stats: Stat[] = [
  {
    target: 180,
    suffix: "+",
    label: "Products shipped across web, mobile and AI",
  },
  {
    target: 12,
    label: "Years building things that outlast their launch press",
  },
  {
    target: 40,
    suffix: "+",
    label: "Senior engineers, designers and strategists in-house",
  },
  {
    target: 98,
    suffix: "%",
    label: "Client retention beyond the first engagement",
  },
];

export function Stats() {
  return (
    <section className="py-[120px]">
      <SectionHead label="Receipts" right="The numbers" />

      <div className="grid grid-cols-2 border-t border-line md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal
            key={s.label}
            className={`relative px-5 py-9 md:pr-7 md:pl-0 ${
              i < stats.length - 1 ? "md:border-r md:border-line" : ""
            } ${i < stats.length - 2 ? "border-b border-line md:border-b-0" : ""} ${
              i % 2 === 1 ? "md:border-r" : ""
            }`}
          >
            <div className="mb-6 font-display text-[clamp(56px,7vw,110px)] font-normal leading-[0.95] tracking-[-0.04em] text-ink">
              <StatCounter target={s.target} suffix={s.suffix} />
            </div>
            <div className="max-w-[22ch] text-[14px] leading-[1.4] text-ink/75">
              {s.label}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
