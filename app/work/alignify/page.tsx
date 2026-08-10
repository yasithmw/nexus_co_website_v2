import type { Metadata } from "next"
import Image from "next/image"
import { Nav } from "@/components/nav"
import { SectionHead } from "@/components/section-head"
import { Reveal } from "@/components/reveal"
import { WorkCard } from "@/components/sections/work-card"
import { WORK_PROJECTS } from "@/data/work-projects"
import shotHero from "@/public/work/alignify/hero.webp"
import shotModel from "@/public/work/alignify/model.webp"
import shotPricing from "@/public/work/alignify/pricing.webp"

const PROJECT = WORK_PROJECTS.find((p) => p.slug === "alignify")!

export const metadata: Metadata = {
  title: "Alignify — Sales Enablement SaaS | CreateLyft",
  description:
    "CreateLyft built Alignify, a sales enablement platform that profiles sellers and buyers, scores prospect fit, and turns the result into a buyer playbook.",
}

const DISCIPLINES = [
  "Product Strategy",
  "UX & Visual Design",
  "Copywriting",
  "Web Development",
  "On-Page SEO",
]

const FEATURES = [
  {
    label: "Personality Profiling",
    desc: "A behavioural assessment of both sides of the deal — communication style, decision-making, pace, and risk tolerance.",
  },
  {
    label: "Alignment Score",
    desc: "A single 0–100 read on prospect fit, built from personality, buying behaviour, and seller-buyer compatibility.",
  },
  {
    label: "Buyer Playbook",
    desc: "The score turned into something actionable — tone to strike, pricing sensitivity, and closing tactics for that specific buyer.",
  },
]

export default function AlignifyPage() {
  return (
    <>
      <Nav />
      <main>

        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <section className="pt-[140px] pb-[60px]">
          <div className="shell">
            <SectionHead label="Alignify" right="2025" />

            <Reveal
              as="h1"
              className="font-display font-bold tracking-[-0.04em] text-ink-2"
              style={{ fontSize: "clamp(48px, 7vw, 100px)", lineHeight: 1.0 }}
            >
              Know your prospect. Sell more.
            </Reveal>

            <Reveal as="div" className="mt-5">
              <span className="inline-flex items-center rounded-full bg-paper-2 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                B2B SaaS &middot; 2025
              </span>
            </Reveal>
          </div>
        </section>

        {/* ── Two-column content ────────────────────────────────────────────── */}
        <section className="py-[80px]">
          <div className="shell">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-16 items-start">

              {/* Left column — copy */}
              <div>
                <Reveal as="p" className="text-[17px] leading-[1.65] text-ink/70 max-w-[52ch]">
                  Alignify is a sales enablement platform built on a simple premise: most deals
                  aren&apos;t lost on price or product, they&apos;re lost because the seller and the
                  buyer are speaking past each other. The product profiles both sides, scores how
                  well they fit, and hands the rep a playbook for that specific conversation.
                </Reveal>

                <Reveal as="p" className="mt-5 text-[17px] leading-[1.65] text-ink/70 max-w-[52ch]">
                  The category is crowded and sceptical. Sales leaders have been sold dashboards
                  before, and &ldquo;personality&rdquo; tooling carries baggage — it can read as
                  soft, or worse, as pseudoscience. So the brief wasn&apos;t just to ship a
                  marketing site. It was to make an unfamiliar idea land quickly and credibly, for
                  a buyer who decides in about thirty seconds whether something is serious.
                </Reveal>

                <Reveal as="p" className="mt-5 text-[17px] leading-[1.65] text-ink/70 max-w-[52ch]">
                  CreateLyft worked from the mechanism outwards. Rather than lead with adjectives,
                  the site leads with the three things the product actually produces — a profile,
                  an alignment score, and a playbook — so the value is legible before a visitor
                  reaches a pricing table. The design keeps the assessment language precise and
                  measured, and the copy stays concrete about what a rep gets and when they get it.
                </Reveal>

                <Reveal as="p" className="mt-5 text-[17px] leading-[1.65] text-ink/70 max-w-[52ch]">
                  Alignify now has a front door that explains a genuinely novel product without
                  overclaiming, positions it against the cost of buyer misalignment, and moves the
                  right visitor to a trial. Intelligent alignment for sales teams — presented like
                  the serious tool it is.
                </Reveal>

                {/* Product pillars */}
                <Reveal as="div" className="mt-10 border-t border-line pt-8">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted mb-5">
                    What the product does
                  </p>
                  <div className="flex flex-col gap-5">
                    {FEATURES.map((f) => (
                      <div key={f.label}>
                        <div className="font-display text-[15px] font-semibold tracking-[-0.02em] text-ink">
                          {f.label}
                        </div>
                        <p className="mt-1 text-[15px] leading-[1.55] text-ink/70 max-w-[48ch]">
                          {f.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </Reveal>

                {/* What we did */}
                <Reveal as="div" className="mt-10 border-t border-line pt-8">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted mb-5">
                    What we did
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {DISCIPLINES.map((d) => (
                      <span
                        key={d}
                        className="inline-flex items-center gap-1.5 rounded-full border border-line px-3.5 py-1.5 font-mono text-[11px] tracking-[-0.01em] text-ink/75"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </Reveal>

                {/* CTA */}
                <Reveal as="div" className="mt-10">
                  <a
                    href={PROJECT.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 rounded-full bg-ink px-6 py-3.5 font-mono text-[12px] uppercase tracking-[0.12em] text-paper transition-[background,transform] duration-200 hover:-translate-y-0.5 hover:bg-ink-2"
                  >
                    View demo
                    <span className="text-blue-2">↗</span>
                  </a>
                </Reveal>
              </div>

              {/* Right column — screenshots of the live product */}
              <div>
                <Reveal as="div">
                  <Image
                    src={shotHero}
                    alt="The Alignify homepage: “Know your prospect, know your customer, sell more,” with win-ratio and sales-confidence figures."
                    sizes="(min-width: 1024px) 55vw, 100vw"
                    className="w-full rounded-[var(--radius-lg)] border border-line"
                  />
                </Reveal>

                <div className="mt-4 grid grid-cols-2 gap-4">
                  <Reveal as="div">
                    <Image
                      src={shotModel}
                      alt="The Alignify model — alignment score, personality profiling, and buyer playbook explained."
                      sizes="(min-width: 1024px) 27vw, 50vw"
                      className="w-full rounded-[var(--radius-lg)] border border-line"
                    />
                  </Reveal>
                  <Reveal as="div">
                    <Image
                      src={shotPricing}
                      alt="Alignify pricing: the personality profile and buyer playbook on a $99 monthly subscription."
                      sizes="(min-width: 1024px) 27vw, 50vw"
                      className="w-full rounded-[var(--radius-lg)] border border-line"
                    />
                  </Reveal>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── More Work ─────────────────────────────────────────────────────── */}
        <section className="pb-[120px]">
          <div className="shell">
            <div className="mb-14 flex items-baseline justify-between border-t border-line pt-7 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
              <span>More Work</span>
              <a href="/work" className="transition-colors duration-150 hover:text-ink">View all →</a>
            </div>
            <div className="grid gap-7 md:grid-cols-3">
              {WORK_PROJECTS.filter((p) => p.slug !== "alignify").map((p) => (
                <WorkCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
