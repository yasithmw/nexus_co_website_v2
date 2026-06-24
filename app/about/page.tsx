import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { AboutHero } from "@/components/sections/about-hero";
import { Contact } from "@/components/sections/contact";
import { Reveal } from "@/components/reveal";
import { SectionHead } from "@/components/section-head";
import { TestimonialsCarousel } from "@/components/sections/testimonials-carousel";

export const metadata: Metadata = {
  title: "About CreateLyft — Australian B2B Studio",
  description:
    "CreateLyft is an Australian studio combining software engineering, data, AI, and brand craft. Sydney, Melbourne, Brisbane, and remote.",
};

// ─── Team data ───────────────────────────────────────────────────────────────
const TEAM = [
  { id: 1, name: "Kate Behar", role: "Co-Founder and CMO", initials: "KB" },
  { id: 2, name: "Shayen Yatagama", role: "Co-Founder and CTO", initials: "SH" },
  { id: 3, name: "Thulith Edirisinghe", role: "", initials: "TH" },
  { id: 4, name: "Luke", role: "Creative Director", initials: "LK" },
];

// ─── Values data ─────────────────────────────────────────────────────────────
const VALUES = [
  {
    label: "Directness",
    desc: "We say what we think. If the brief is wrong, we'll tell you before we start, not after we've built it.",
  },
  {
    label: "Craft",
    desc: "We care about how things are made. Speed matters, but not more than quality. We don't deliver things we'd be embarrassed to put our name on.",
  },
  {
    label: "Ownership",
    desc: "We don't hand off and disappear. We stay through launch, through iteration, and through the messy middle of real usage.",
  },
  {
    label: "Rigour",
    desc: "Good intentions aren't enough. We test assumptions, question constraints, and do the thinking before we schedule the project kick-off!",
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
                  CreateLyft started in Australia in 2025 with a simple
                  observation: businesses were hiring one agency for their brand
                  and another for their product, and the two rarely worked in
                  sync. The result was software that functioned well but lacked
                  a strong identity, and marketing campaigns that looked great
                  but set expectations the product couldn&apos;t meet. We
                  started CreateLyft to bring brand and product together, so
                  businesses can build with clarity, consistency, and purpose.
                </Reveal>
                <Reveal
                  as="p"
                  className="text-[17px] leading-[1.6] text-ink/70 max-w-[52ch]"
                >
                  CreateLyft launched in 2025, but our experience runs deep.
                  Our team has spent years inside product companies, agencies,
                  and engineering consultancies, delivering fintech platforms,
                  B2B SaaS products, AI-powered systems, and brand identity
                  programs across Australia and internationally. We founded our
                  business to unite strategy, design, and development under one
                  roof - removing the friction, misalignment, and handoffs that
                  come from treating brand and product as separate disciplines.
                </Reveal>
                <Reveal
                  as="p"
                  className="text-[17px] leading-[1.6] text-ink/70 max-w-[52ch]"
                >
                  No corporate layers. No
                  bloated teams. Just experienced people who take ownership of
                  the work, sweat the details, and care deeply about the quality
                  of what we deliver.
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
                      Australia · New Zealand · UK
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
                      Marketing & Branding · Software Development · AI & Machine Learning · Resource Augmentation
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
                    text: "Senior people, end to end - not just at the pitch, but through delivery and whatever comes after.",
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
                  We help businesses build brands that land and products that
                  work - by bringing engineering and creative together where
                  most studios keep them apart.
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
                  A future where brands and products are built as one - creating
                  clearer, more meaningful experiences for customers.
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
            <SectionHead label="The Team" right="4 people" />

            <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">
              {TEAM.map((member) => (
                <Reveal key={member.id} className="flex flex-col items-center">
                  <div className="aspect-square w-full overflow-hidden rounded-full bg-paper-2 flex items-center justify-center transition-transform hover:-translate-y-1">
                    <span className="font-display text-[clamp(18px,2.5vw,28px)] font-semibold tracking-[-0.02em] text-muted select-none">
                      {member.initials}
                    </span>
                  </div>
                  <div className="mt-4 text-center">
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
