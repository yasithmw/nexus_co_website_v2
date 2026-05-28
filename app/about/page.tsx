import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { AboutHero } from "@/components/sections/about-hero";
import { Contact } from "@/components/sections/contact";
import { Reveal } from "@/components/reveal";
import { SectionHead } from "@/components/section-head";
import { TestimonialsCarousel } from "@/components/sections/testimonials-carousel";

export const metadata: Metadata = {
  title: "About Create Lyft — Australian B2B Studio",
  description:
    "Create Lyft is an independent Australian studio combining software engineering, data, AI, and brand craft. Sydney, Melbourne, Brisbane, and remote.",
};

// ─── Team data ───────────────────────────────────────────────────────────────
const TEAM = [
  { id: 1, name: "Lachlan Morrish", role: "Co-founder & Engineering Lead", initials: "LM" },
  { id: 2, name: "Sophie Drummond", role: "Co-founder & Creative Director", initials: "SD" },
  { id: 3, name: "Rohan Vaz", role: "Principal AI Engineer", initials: "RV" },
  { id: 4, name: "Caitlin Farquhar", role: "Head of Data Architecture", initials: "CF" },
  { id: 5, name: "James Okello", role: "Senior Brand Strategist", initials: "JO" },
];

// ─── Values data ─────────────────────────────────────────────────────────────
const VALUES = [
  {
    label: "Directness",
    desc: "We say what we think. If the brief is wrong, we'll tell you before we start, not after we've built it.",
  },
  {
    label: "Craft",
    desc: "We care about how things are made. Speed matters, but not more than quality. We don't ship things we'd be embarrassed to put our name on.",
  },
  {
    label: "Ownership",
    desc: "We don't hand off and disappear. We stay through launch, through iteration, and through the messy middle of real usage.",
  },
  {
    label: "Rigour",
    desc: "Good intentions aren't enough. We test assumptions, question constraints, and do the thinking before we open a text editor or a design file.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        {/* ── Section 1: Hero ─────────────────────────────────────────────── */}
        <AboutHero />

        {/* ── Section 2: Story ────────────────────────────────────────────── */}
        <section className="py-[120px]">
          <div className="shell">
            <SectionHead label="Our Story" right="Est. 2025" />

            <div className="grid gap-16 md:grid-cols-[1.4fr_1fr] md:gap-10">
              {/* Left: copy */}
              <div className="flex flex-col gap-6">
                <Reveal
                  as="p"
                  className="text-[17px] leading-[1.6] text-ink/70 max-w-[52ch]"
                >
                  Create Lyft started in Sydney in 2025 with a simple frustration:
                  companies kept hiring two separate agencies — one for the
                  product, one for the brand — and neither talked to the other.
                  The result was software that worked but looked like it
                  didn&apos;t, and campaigns that looked great but promised
                  things the product couldn&apos;t deliver. We set out to fix
                  that.
                </Reveal>
                <Reveal
                  as="p"
                  className="text-[17px] leading-[1.6] text-ink/70 max-w-[52ch]"
                >
                  We are a new studio, but not new to the work. Between us, we
                  have spent years inside product companies, agencies, and
                  engineering consultancies — shipping fintech platforms, B2B
                  SaaS tools, AI-powered data pipelines, and brand identity
                  systems across Australia and internationally. We started Nexus
                  Co because we wanted to do all of it together, in one place,
                  without the handoff problems that come from keeping engineering
                  and creative apart.
                </Reveal>
                <Reveal
                  as="p"
                  className="text-[17px] leading-[1.6] text-ink/70 max-w-[52ch]"
                >
                  We are independent. No holding company. No offshore bench.
                  Just a tight group of senior people who care about the same
                  things: getting the brief right, doing the work properly, and
                  shipping something you&apos;re genuinely proud of.
                </Reveal>
              </div>

              {/* Right: year callout visual */}
              <Reveal className="relative flex flex-col justify-center overflow-hidden rounded-[var(--radius-lg)] bg-paper-2 p-8 md:p-12">
                {/* Watermark year */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute right-[-24px] top-1/2 -translate-y-1/2 font-display font-bold leading-none text-ink select-none"
                  style={{
                    fontSize: "clamp(80px, 10vw, 140px)",
                    color: "rgba(39,24,126,0.06)",
                  }}
                >
                  2025
                </span>

                <div className="relative z-[1] flex flex-col gap-10">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted mb-2">
                      Founded
                    </div>
                    <div className="font-display text-[clamp(36px,5vw,60px)] font-bold tracking-[-0.04em] leading-none text-ink">
                      2025
                    </div>
                  </div>

                  <div className="border-t border-line" />

                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted mb-3">
                      Studios
                    </div>
                    <div className="font-display text-[17px] font-semibold tracking-[-0.02em] text-ink">
                      Sydney · Melbourne · Brisbane
                    </div>
                    <div className="mt-1 font-mono text-[12px] tracking-[0.04em] text-muted">
                      + Remote — globally
                    </div>
                  </div>

                  <div className="border-t border-line" />

                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted mb-2">
                      Disciplines
                    </div>
                    <div className="font-display text-[clamp(28px,4vw,48px)] font-bold tracking-[-0.03em] leading-none text-ink">
                      4
                    </div>
                    <div className="mt-1 font-mono text-[12px] tracking-[0.04em] text-muted">
                      Engineering · Resource Augmentation · AI · Brand
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── Section 3: Philosophy ───────────────────────────────────────── */}
        <section className="py-[96px]" style={{ background: "#1a1057" }}>
          <div className="shell">
            <div className="grid gap-16 md:grid-cols-[1fr_1.1fr] md:gap-12 md:items-start">

              {/* Left — headline */}
              <Reveal className="md:sticky md:top-[100px]">
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] mb-6" style={{ color: "rgba(174,184,254,0.5)" }}>
                  Philosophy
                </div>
                <h2
                  className="font-display font-bold tracking-[-0.04em] leading-[1.05] text-paper"
                  style={{ fontSize: "clamp(28px, 3.4vw, 50px)" }}
                >
                  We think before we build.
                </h2>
              </Reveal>

              {/* Right — numbered statements */}
              <div className="flex flex-col">
                {[
                  {
                    n: "01",
                    text: "Most projects fail in the brief. We take that part as seriously as the build itself.",
                  },
                  {
                    n: "02",
                    text: "The best product decisions are creative ones. The best brand decisions are technical ones. We've never separated the two.",
                  },
                  {
                    n: "03",
                    text: "Senior people, end to end — not just at the pitch, but through delivery and whatever comes after.",
                  },
                ].map((item) => (
                  <Reveal
                    key={item.n}
                    className="border-t py-8 flex gap-6 items-start"
                    style={{ borderColor: "rgba(255,255,255,0.08)" }}
                  >
                    <span
                      className="font-mono text-[11px] tracking-[0.1em] shrink-0 mt-[0.35em]"
                      style={{ color: "var(--color-blue-2)" }}
                    >
                      {item.n}
                    </span>
                    <p
                      className="font-display font-semibold tracking-[-0.025em] leading-[1.25] text-paper"
                      style={{ fontSize: "clamp(18px, 1.8vw, 26px)" }}
                    >
                      {item.text}
                    </p>
                  </Reveal>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ── Section 4: Mission / Vision / Values ────────────────────────── */}
        <section className="bg-paper pt-[120px] pb-[60px]">
          <div className="shell">
            <SectionHead label="What We Stand For" right="Values" />

            {/* Mission + Vision */}
            <Reveal className="mb-16 grid gap-12 md:grid-cols-2 md:gap-10">
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted mb-2">
                  Mission
                </div>
                <p
                  className="font-display font-medium tracking-[-0.02em] leading-[1.25] text-ink"
                  style={{ fontSize: "clamp(20px, 2.5vw, 32px)" }}
                >
                  We help Australian and global businesses build products that
                  work and brands that land — by bringing engineering and
                  creative together where most studios keep them apart.
                </p>
              </div>
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted mb-2">
                  Vision
                </div>
                <p
                  className="font-display font-medium tracking-[-0.02em] leading-[1.25] text-ink"
                  style={{ fontSize: "clamp(20px, 2.5vw, 32px)" }}
                >
                  A future where the gap between what a business does and how it
                  presents itself doesn&apos;t exist.
                </p>
              </div>
            </Reveal>

            {/* Values grid */}
            <div className="grid gap-0 md:grid-cols-2">
              {VALUES.map((v) => (
                <Reveal
                  key={v.label}
                  className="border-t border-line pt-6 pb-8 md:pr-12"
                >
                  <div className="font-display text-[17px] font-bold tracking-[-0.02em] text-ink mb-2">
                    {v.label}
                  </div>
                  <p className="text-[15px] leading-[1.5] text-muted max-w-[40ch]">
                    {v.desc}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 5: Team Grid ─────────────────────────────────────────── */}
        <section className="pt-[60px] pb-[60px]">
          <div className="shell">
            <SectionHead label="The Team" right="5 people" />

            <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-3 lg:grid-cols-5">
              {TEAM.map((member) => (
                <Reveal key={member.id} className="flex flex-col">
                  <div className="aspect-square w-full overflow-hidden rounded-full bg-paper-2 flex items-center justify-center transition-transform hover:-translate-y-1">
                    <span className="font-display text-[clamp(18px,2.5vw,28px)] font-semibold tracking-[-0.02em] text-muted select-none">
                      {member.initials}
                    </span>
                  </div>
                  <div className="mt-4">
                    <div className="font-display text-[16px] font-semibold tracking-[-0.02em] text-ink leading-tight">
                      {member.name}
                    </div>
                    <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted mt-1">
                      {member.role}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 6: Client Logos ──────────────────────────────────────── */}
        <section className="pt-[40px] pb-[80px]">
          <div className="shell">
            <Reveal>
              <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted mb-10">
                Who we&apos;ve worked with
              </div>
              <div
                className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-1 [&::-webkit-scrollbar]:hidden"
                style={{ scrollbarWidth: "none" }}
              >
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="snap-start shrink-0 w-[200px] aspect-[4/3] rounded-[var(--radius-lg)] bg-paper-2 border border-line"
                  />
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Section 7: Testimonials carousel ────────────────────────────── */}
        <TestimonialsCarousel />

        {/* ── Section 8: CTA ───────────────────────────────────────────────── */}
        <Contact />
      </main>
    </>
  );
}
