import type { Metadata } from "next"
import Image from "next/image"
import { Nav } from "@/components/nav"
import { SectionHead } from "@/components/section-head"
import { Reveal } from "@/components/reveal"
import { WorkCard } from "@/components/sections/work-card"
import { WORK_PROJECTS } from "@/data/work-projects"
import shotHero from "@/public/work/dataline-people/hero.webp"
import shotProcesses from "@/public/work/dataline-people/processes.webp"
import shotTrust from "@/public/work/dataline-people/trust.webp"

const PROJECT = WORK_PROJECTS.find((p) => p.slug === "dataline-people")!

export const metadata: Metadata = {
  title: "Dataline People — Offshore Teams & Process Outsourcing | CreateLyft",
  description:
    "CreateLyft built the Dataline People site — offshore recruitment, managed process outsourcing, and finance transformation presented as one operating model.",
}

const DISCIPLINES = [
  "UX & Visual Design",
  "Content Strategy",
  "Copywriting",
  "On-Page SEO",
  "Web Development",
]

const MODULES = [
  {
    label: "Offshore Recruitment & Team Building",
    desc: "Pre-vetted professionals across finance, admin, IT, development, and support — sourced and built into teams rather than dropped in as headcount.",
  },
  {
    label: "Process Outsourcing",
    desc: "Fully managed processes with automation-driven delivery, priced per process or per transaction instead of per seat.",
  },
  {
    label: "Finance Transformation",
    desc: "AI digitisation and intelligent automation across reconciliations and reporting, with a stated 99.9% accuracy standard.",
  },
]

export default function DatalinePeoplePage() {
  return (
    <>
      <Nav />
      <main>

        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <section className="pt-[140px] pb-[60px]">
          <div className="shell">
            <SectionHead label="Dataline People" right="2026" />

            <Reveal
              as="h1"
              className="font-display font-bold tracking-[-0.04em] text-ink-2"
              style={{ fontSize: "clamp(48px, 7vw, 100px)", lineHeight: 1.0 }}
            >
              Scale without losing control.
            </Reveal>

            <Reveal as="div" className="mt-5">
              <span className="inline-flex items-center rounded-full bg-paper-2 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                HR Platform &middot; 2026
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
                  Dataline People helps organisations design, source, and optimise offshore teams —
                  combining expert recruitment, managed process outsourcing, and automation so a
                  business can grow its output without growing its cost base at the same rate.
                </Reveal>

                <Reveal as="p" className="mt-5 text-[17px] leading-[1.65] text-ink/70 max-w-[52ch]">
                  Offshore staffing has a credibility problem, and it isn&apos;t undeserved. The
                  buyer&apos;s real fear isn&apos;t cost — it&apos;s losing control of quality once
                  the work leaves the building. Compounding that, Dataline offers three things that
                  are usually sold by three different kinds of vendor: people, managed processes,
                  and finance automation. Presented badly, that reads as a company without a
                  centre.
                </Reveal>

                <Reveal as="p" className="mt-5 text-[17px] leading-[1.65] text-ink/70 max-w-[52ch]">
                  CreateLyft structured the site around the through-line instead of the service
                  list. Recruitment, outsourcing, and finance transformation are presented as three
                  depths of the same operating model — take our people, or take the process, or
                  take the process already automated. The content leads with control and
                  governance rather than headcount savings, and leans on the proof that already
                  existed: thirty-five years of operations, a +98% customer satisfaction rate, and
                  named clients including SG Fleet and McGuires Hotels.
                </Reveal>

                <Reveal as="p" className="mt-5 text-[17px] leading-[1.65] text-ink/70 max-w-[52ch]">
                  The result is a site that sells the harder, more valuable idea — not cheaper
                  labour, but a way to scale efficiently without compromising quality, control, or
                  performance.
                </Reveal>

                {/* Modules */}
                <Reveal as="div" className="mt-10 border-t border-line pt-8">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted mb-5">
                    What they offer
                  </p>
                  <div className="flex flex-col gap-5">
                    {MODULES.map((m) => (
                      <div key={m.label}>
                        <div className="font-display text-[15px] font-semibold tracking-[-0.02em] text-ink">
                          {m.label}
                        </div>
                        <p className="mt-1 text-[15px] leading-[1.55] text-ink/70 max-w-[48ch]">
                          {m.desc}
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

              {/* Right column — screenshots of the live site */}
              <div>
                <Reveal as="div">
                  <Image
                    src={shotHero}
                    alt="The Dataline People homepage: “Scale your business with Dataline,” with headline offshore-team figures."
                    sizes="(min-width: 1024px) 55vw, 100vw"
                    className="w-full rounded-[var(--radius-lg)] border border-line"
                  />
                </Reveal>

                <div className="mt-4 grid grid-cols-2 gap-4">
                  <Reveal as="div">
                    <Image
                      src={shotProcesses}
                      alt="Outsourced processes delivered for you — end-to-end team setup and role-specific talent."
                      sizes="(min-width: 1024px) 27vw, 50vw"
                      className="w-full rounded-[var(--radius-lg)] border border-line"
                    />
                  </Reveal>
                  <Reveal as="div">
                    <Image
                      src={shotTrust}
                      alt="Three decades of trust — 35 years of experience and a 98% customer satisfaction rate."
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
              {WORK_PROJECTS.filter((p) => p.slug !== "dataline-people").map((p) => (
                <WorkCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
