import type { Metadata } from "next"
import { Nav } from "@/components/nav"
import { SectionHead } from "@/components/section-head"
import { Reveal } from "@/components/reveal"
import { WorkCard } from "@/components/sections/work-card"
import { Contact } from "@/components/sections/contact"
import { WORK_PROJECTS } from "@/data/work-projects"

export const metadata: Metadata = {
  title: "Work — Create Lyft",
  description:
    "Selected work by Create Lyft — software, AI, and brand projects for forward-thinking clients.",
}

export default function WorkPage() {
  return (
    <>
      <Nav />
      <main>
        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section className="pt-[140px] pb-[80px]">
          <div className="shell">
            <SectionHead label="Selected work" right="2024 — 2026" />

            <Reveal
              as="h1"
              className="font-display font-bold tracking-[-0.04em] text-ink-2 mb-5"
              style={{ fontSize: "clamp(48px, 6vw, 80px)" }}
            >
              Work that{" "}
              <em className="font-serif font-normal italic text-blue">holds up.</em>
            </Reveal>

            <Reveal
              as="p"
              className="text-[18px] text-muted max-w-[48ch] leading-[1.6]"
            >
              Four clients, four problems — here&apos;s what we built and why.
            </Reveal>
          </div>
        </section>

        {/* ── Grid ─────────────────────────────────────────────────────────── */}
        <section className="pb-[120px]">
          <div className="shell">
            <div className="grid gap-7 md:grid-cols-2">
              {WORK_PROJECTS.map((p) => (
                <WorkCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────────── */}
        <Contact />
      </main>
    </>
  )
}
