import { Reveal } from "../reveal";
import { SectionHead } from "../section-head";

const stats = [
  { number: "180+", label: "Products shipped, web to AI" },
  { number: "98%", label: "Client retention rate" },
  { number: "12", label: "Years building things that last" },
];

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-[clamp(20px,4vw,56px)] py-[120px]"
      style={{ backgroundColor: "#AEB8FE" }}
    >
      {/* Accent bloom behind photo card */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[8%] top-[6%] h-[400px] w-[400px] rounded-full"
        style={{
          background: "radial-gradient(circle, #758BFD 0%, transparent 70%)",
          opacity: 0.15,
        }}
      />

      <div className="relative mx-auto max-w-[1440px]">
        <SectionHead num="03" label="The Studio" right="Who We Are" />

        {/* Row 1 — Editorial split */}
        <div className="grid items-center gap-14 md:grid-cols-[1.4fr_1fr]">

          {/* Left: headline + body + CTA */}
          <div>
            <Reveal
              as="p"
              className="mb-5 font-mono text-[11px] uppercase tracking-[0.14em] text-ink/55"
            >
              Independent. Senior. Opinionated.
            </Reveal>

            <Reveal
              as="h2"
              className="mb-10 font-display text-[clamp(36px,5vw,72px)] font-bold leading-[1.05] tracking-[-0.035em] text-ink"
            >
              Hard problems.{" "}
              <em className="font-serif font-normal italic">Senior people.</em>{" "}
              Real work.
            </Reveal>

            <Reveal className="space-y-5 text-[17px] leading-[1.6] text-ink/60">
              <p className="max-w-[50ch]">
                An independent Australian studio. Engineering and brand craft in
                the same room, on the same brief. No account managers between
                you and the people doing the work. Strategists, engineers and
                designers who have shipped at scale and take responsibility for
                the outcome.
              </p>
              <p className="max-w-[50ch]">
                Sydney, Melbourne and Brisbane. Building since 2013. The clients
                who stay, stay for years. That&apos;s not marketing. That&apos;s
                what happens when the work is good and the team is straight with
                you.
              </p>
              <a
                href="#"
                className="mt-7 inline-flex items-center gap-3 border-b border-ink/20 pb-1.5 font-display text-[15px] font-medium text-ink transition-[border-color,padding] duration-150 ease-out hover:border-ink hover:pr-3"
              >
                Meet the studio <span>→</span>
              </a>
            </Reveal>
          </div>

          {/* Right: photo placeholder card */}
          <Reveal className="relative">
            <div
              className="relative aspect-[4/5] overflow-hidden rounded-[36px] shadow-[0_32px_80px_-16px_rgba(39,24,126,0.22)]"
              style={{ transform: "rotate(2deg)" }}
            >
              <div className="absolute inset-0 bg-ink/8" />
              {/* Grid texture */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(39,24,126,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(39,24,126,0.3) 1px, transparent 1px)",
                  backgroundSize: "48px 48px",
                }}
              />
              {/* Monogram watermark */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-[120px] font-bold leading-none tracking-[-0.06em] text-ink/10 select-none">
                  NC
                </span>
              </div>
              {/* Bottom label */}
              <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between">
                <div>
                  <div className="mb-1 font-mono text-[10px] uppercase tracking-[0.16em] text-ink/40">
                    — Studio
                  </div>
                  <div className="font-display text-[14px] font-medium text-ink/50">
                    Sydney · Melbourne · Brisbane
                  </div>
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 font-mono text-[10px] text-ink/35">
                  AU
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Row 2 — Stats rail */}
        <div className="mt-20 border-t border-ink/[0.14] pt-14">
          <Reveal>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`${i > 0 ? "border-ink/[0.14] md:border-l md:pl-10" : ""}`}
                >
                  <div className="mb-2 font-display text-[clamp(52px,6vw,72px)] font-bold leading-[1] tracking-[-0.04em] text-ink">
                    {stat.number}
                  </div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink/55">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
