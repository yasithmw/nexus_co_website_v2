import { Reveal } from "../reveal"
import { SectionHead } from "../section-head"
import { WorkCard } from "./work-card"
import { WORK_PROJECTS } from "@/data/work-projects"

export function Work() {
  return (
    <section id="work" className="relative pb-20 pt-24">
      <SectionHead label="Selected work" right="2024 — 2026" />

      <Reveal
        as="h2"
        className="mb-16 max-w-[16ch] font-display text-[clamp(40px,6.4vw,96px)] font-medium leading-[0.95] tracking-[-0.04em] text-ink-2"
      >
        Built for forward-thinking{" "}
        <em className="font-serif font-normal italic text-blue">brands.</em>
      </Reveal>

      <div className="grid gap-7 md:grid-cols-2">
        {WORK_PROJECTS.map((p) => (
          <WorkCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  )
}
