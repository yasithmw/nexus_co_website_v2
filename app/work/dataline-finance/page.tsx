import type { Metadata } from "next"
import { Nav } from "@/components/nav"
import { SectionHead } from "@/components/section-head"
import { Reveal } from "@/components/reveal"
import { WorkCard } from "@/components/sections/work-card"
import { WORK_PROJECTS } from "@/data/work-projects"

export const metadata: Metadata = {
  title: "Dataline Finance Website Revamp — CreateLyft",
  description:
    "CreateLyft rebuilt the Dataline Finance website from brief to launch — design, copy, SEO, and development. Thirty-five years of expertise, finally reflected online.",
}

// ── Photo placeholder ─────────────────────────────────────────────────────────

function PhotoPlaceholder({ aspectRatio = "16/10" }: { aspectRatio?: string }) {
  return (
    <div
      className="w-full overflow-hidden rounded-[var(--radius-lg)] bg-paper-2 border border-line"
      style={{ aspectRatio }}
      aria-hidden="true"
    />
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

const DISCIPLINES = [
  "UX & Visual Design",
  "Copywriting",
  "Content Strategy",
  "On-Page SEO",
  "Web Development",
]

export default function DatalineFinancePage() {
  return (
    <>
      <Nav />
      <main>

        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <section className="pt-[140px] pb-[60px]">
          <div className="shell">
            <SectionHead label="Dataline Finance" right="2025" />

            <Reveal
              as="h1"
              className="font-display font-bold tracking-[-0.04em] text-ink-2"
              style={{ fontSize: "clamp(48px, 7vw, 100px)", lineHeight: 1.0 }}
            >
              A website the business actually deserved.
            </Reveal>

            <Reveal as="div" className="mt-5">
              <span className="inline-flex items-center rounded-full bg-paper-2 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                Website Revamp &middot; 2025
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
                {/* Intro */}
                <Reveal as="p" className="text-[17px] leading-[1.65] text-ink/70 max-w-[52ch]">
                  Dataline Finance has been automating accounts payable and finance operations for
                  over 35 years. They serve more than 100 global clients, and they&apos;ve built a
                  reputation for precision and reliability in a space where both actually matter.
                  The website didn&apos;t come close to reflecting any of that.
                </Reveal>

                {/* The Challenge */}
                <Reveal as="p" className="mt-5 text-[17px] leading-[1.65] text-ink/70 max-w-[52ch]">
                  When businesses are evaluating a finance automation partner, they&apos;re making a
                  decision that touches their entire AP operation — invoices, approvals, procurement,
                  reconciliations. The bar for trust is high. A dated, thin website doesn&apos;t just
                  underperform in search — it quietly undermines confidence before a conversation has
                  even started. For a company with Dataline&apos;s depth of experience and client base,
                  that gap between the business and the website it was presenting was costing them.
                </Reveal>

                {/* The Approach */}
                <Reveal as="p" className="mt-5 text-[17px] leading-[1.65] text-ink/70 max-w-[52ch]">
                  CreateLyft handled the full build — design, copy, SEO, and front-end development.
                  We started with what Dataline actually does well: intelligent automation, 35 years
                  of operational expertise, high accuracy standards, and a genuine breadth of
                  solutions across AP, procurement, and finance transformation. The design was
                  built to carry that weight — structured, considered, and credible. Copy was
                  written to be clear about the offer without drowning it in jargon. SEO was built
                  in from day one. Then the dev work: a clean, fast, responsive build delivered end
                  to end.
                </Reveal>

                {/* The Outcome */}
                <Reveal as="p" className="mt-5 text-[17px] leading-[1.65] text-ink/70 max-w-[52ch]">
                  Dataline Finance now has a website that holds up alongside the scale and quality
                  of the business behind it. It communicates clearly to the right buyers, performs
                  in search, and gives their team something they can send to a prospective client
                  before a meeting with confidence. Thirty-five years of expertise — finally showing
                  up online the way it should.
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
                    href="https://dataline.com.au"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 rounded-full bg-ink px-6 py-3.5 font-mono text-[12px] uppercase tracking-[0.12em] text-paper transition-[background,transform] duration-200 hover:-translate-y-0.5 hover:bg-ink-2"
                  >
                    Visit Dataline Finance
                    <span className="text-blue-2">↗</span>
                  </a>
                </Reveal>
              </div>

              {/* Right column — photo placeholders */}
              <div>
                <Reveal as="div">
                  <PhotoPlaceholder aspectRatio="16/10" />
                </Reveal>

                <div className="mt-4 grid grid-cols-2 gap-4">
                  <Reveal as="div">
                    <PhotoPlaceholder aspectRatio="4/3" />
                  </Reveal>
                  <Reveal as="div">
                    <PhotoPlaceholder aspectRatio="4/3" />
                  </Reveal>
                </div>

                <Reveal as="div" className="mt-4">
                  <PhotoPlaceholder aspectRatio="16/7" />
                </Reveal>
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
              {WORK_PROJECTS.filter((p) => p.slug !== "dataline-finance").map((p) => (
                <WorkCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
