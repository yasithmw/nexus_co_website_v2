import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Contact } from "@/components/sections/contact";
import { Reveal } from "@/components/reveal";
import { SectionHead } from "@/components/section-head";
import { TestimonialsCarousel } from "@/components/sections/testimonials-carousel";

export const metadata: Metadata = {
  title: "About Nexus Co — Australian B2B Studio Since 2013",
  description:
    "Nexus Co is an independent Australian studio combining software engineering, data, AI, and brand craft. Sydney, Melbourne, Brisbane, and remote — building since 2013.",
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
        <section className="relative flex min-h-[60vh] flex-col items-center justify-center overflow-hidden pt-[100px] pb-[80px] text-center md:pt-[120px]">
          {/* Bloom glows */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-[30%] z-0 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-45 blur-[60px]"
            style={{ background: "var(--color-blue-2)" }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute right-[10%] top-[20%] z-0 h-[300px] w-[300px] rounded-full opacity-30 blur-[80px]"
            style={{ background: "var(--color-blue)" }}
          />

          <div className="shell relative z-[2] flex flex-col items-center">
            <div
              className="animate-rise mb-8 font-mono text-[11px] uppercase tracking-[0.18em] text-muted"
              style={{ animationDelay: "0.1s" }}
            >
              About Nexus Co
            </div>

            <h1
              className="animate-rise font-display font-bold tracking-[-0.045em] leading-[0.92] text-ink"
              style={{ fontSize: "clamp(52px, 9vw, 144px)", animationDelay: "0.18s" }}
            >
              We build. We brand.{" "}
              <em className="font-serif font-normal italic text-blue">
                We mean it.
              </em>
            </h1>
          </div>
        </section>

        {/* ── Section 2: Story ────────────────────────────────────────────── */}
        <section className="py-[120px]">
          <div className="shell">
            <SectionHead label="Our Story" right="Since 2013" />

            <div className="grid gap-16 md:grid-cols-[1.4fr_1fr] md:gap-10">
              {/* Left: copy */}
              <div className="flex flex-col gap-6">
                <Reveal
                  as="p"
                  className="text-[17px] leading-[1.6] text-ink/70 max-w-[52ch]"
                >
                  Nexus Co started in Sydney in 2013 with a simple frustration:
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
                  Twelve years on, we have studios in Sydney, Melbourne, and
                  Brisbane, and we work with clients remotely across the globe.
                  We have shipped more than 180 products — from fintech platforms
                  and B2B SaaS tools to AI-powered data pipelines and brand
                  identity systems. Our 98% client retention rate isn&apos;t a
                  metric we engineered. It&apos;s what happens when the work
                  holds up and the team is straight with you.
                </Reveal>
                <Reveal
                  as="p"
                  className="text-[17px] leading-[1.6] text-ink/70 max-w-[52ch]"
                >
                  We are still independent. No holding company. No offshore
                  bench. Just a tight group of senior people who care about the
                  same things: getting the brief right, doing the work properly,
                  and shipping something you&apos;re genuinely proud of.
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
                  2013
                </span>

                <div className="relative z-[1] flex flex-col gap-10">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted mb-2">
                      Founded
                    </div>
                    <div className="font-display text-[clamp(36px,5vw,60px)] font-bold tracking-[-0.04em] leading-none text-ink">
                      2013
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
                      Products delivered
                    </div>
                    <div className="font-display text-[clamp(28px,4vw,48px)] font-bold tracking-[-0.03em] leading-none text-ink">
                      180+
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── Section 3: Philosophy ───────────────────────────────────────── */}
        <section className="py-[120px]" style={{ background: "#1a1057" }}>
          <div className="shell">
            <SectionHead label="Philosophy" right="How We Work" variant="dark" />

            <div className="flex flex-col">
              <Reveal className="border-t border-white/10 pt-14 pb-14">
                <p
                  className="font-display font-bold tracking-[-0.035em] leading-[1.1] text-paper"
                  style={{ fontSize: "clamp(36px, 5vw, 72px)" }}
                >
                  Senior people. Real work.{" "}
                  <em className="font-serif font-normal italic text-blue-2">
                    No account managers
                  </em>{" "}
                  between you and the team.
                </p>
              </Reveal>

              <Reveal className="border-t border-white/10 pt-14 pb-14">
                <p
                  className="font-display font-bold tracking-[-0.035em] leading-[1.1] text-paper"
                  style={{ fontSize: "clamp(36px, 5vw, 72px)" }}
                >
                  We take responsibility for{" "}
                  <em className="font-serif font-normal italic text-blue">
                    outcomes
                  </em>{" "}
                  — not just deliverables.
                </p>
              </Reveal>

              <Reveal className="border-t border-white/10 pt-14 pb-14">
                <p
                  className="font-display font-bold tracking-[-0.035em] leading-[1.1] text-paper"
                  style={{ fontSize: "clamp(36px, 5vw, 72px)" }}
                >
                  Engineering and brand craft{" "}
                  <em className="font-serif font-normal italic text-cream">
                    in the same room,
                  </em>{" "}
                  on the same brief, from day one.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── Section 4: Mission / Vision / Values ────────────────────────── */}
        <section className="bg-paper py-[120px]">
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
        <section className="py-[120px]">
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
        <section className="py-[80px]">
          <div className="shell">
            <Reveal>
              <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted mb-10">
                Who we&apos;ve worked with
              </div>
              <div className="flex flex-wrap items-center justify-center gap-x-[56px] gap-y-8">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex h-[40px] w-[100px] items-center justify-center rounded-md bg-ink/10 opacity-50"
                  >
                    <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink/50">
                      LOGO
                    </span>
                  </div>
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
