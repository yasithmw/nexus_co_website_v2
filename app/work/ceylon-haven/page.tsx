import type { Metadata } from "next"
import Image from "next/image"
import { Nav } from "@/components/nav"
import { SectionHead } from "@/components/section-head"
import { Reveal } from "@/components/reveal"
import { WorkCard } from "@/components/sections/work-card"
import { WORK_PROJECTS } from "@/data/work-projects"
import shotHero from "@/public/work/ceylon-haven/hero.webp"
import shotStays from "@/public/work/ceylon-haven/stays.webp"
import shotRegions from "@/public/work/ceylon-haven/regions.webp"

const PROJECT = WORK_PROJECTS.find((p) => p.slug === "ceylon-haven")!

export const metadata: Metadata = {
  title: "Ceylon Haven — Luxury Villas in Sri Lanka | CreateLyft",
  description:
    "CreateLyft built Ceylon Haven, a curated collection of handpicked luxury villas across Sri Lanka — booked through people who actually live there.",
}

const DISCIPLINES = [
  "Brand & Identity",
  "UX & Visual Design",
  "Copywriting",
  "Web Development",
  "On-Page SEO",
]

const REGIONS = [
  {
    label: "Tropics",
    desc: "Coastal villas along the shorelines where the Indian Ocean stretches out past the garden wall.",
  },
  {
    label: "Hills",
    desc: "Cool-climate retreats set among rolling tea country, misty mornings, and long hillside views.",
  },
  {
    label: "Safaris",
    desc: "Properties on the edge of the national parks, close enough for a dawn start.",
  },
  {
    label: "Culture",
    desc: "Villas within reach of the ancient temples and sacred sites of the cultural triangle.",
  },
]

export default function CeylonHavenPage() {
  return (
    <>
      <Nav />
      <main>

        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <section className="pt-[140px] pb-[60px]">
          <div className="shell">
            <SectionHead label="Ceylon Haven" right="2026" />

            <Reveal
              as="h1"
              className="font-display font-bold tracking-[-0.04em] text-ink-2"
              style={{ fontSize: "clamp(48px, 7vw, 100px)", lineHeight: 1.0 }}
            >
              Where luxury meets local charm.
            </Reveal>

            <Reveal as="div" className="mt-5">
              <span className="inline-flex items-center rounded-full bg-paper-2 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                Website Build &middot; 2026
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
                  Ceylon Haven is a curated collection of luxury villas across Sri Lanka —
                  handpicked properties in stunning locations, put together by people who call the
                  island home. Private pools and beachfront estates, with airport transfers,
                  in-villa service, and a private chef arranged before you arrive.
                </Reveal>

                <Reveal as="p" className="mt-5 text-[17px] leading-[1.65] text-ink/70 max-w-[52ch]">
                  The hard part of this category is trust. A traveller booking a villa sight-unseen,
                  in a country they may not know, is making an expensive decision on the strength of
                  photographs — and every listing site on the internet has taught them that
                  photographs lie. The competition is not other villa brands so much as the large
                  marketplaces, which win on inventory and lose on judgement.
                </Reveal>

                <Reveal as="p" className="mt-5 text-[17px] leading-[1.65] text-ink/70 max-w-[52ch]">
                  CreateLyft built the site around that gap. Ceylon Haven is not a marketplace, so
                  it doesn&apos;t behave like one: properties are presented as a considered
                  selection, each assessed on design integrity, location, and service quality, and
                  the local knowledge is treated as the product rather than a footnote. Rather than
                  sort by price, the site sorts by the kind of trip — tropics, hills, safaris,
                  culture — so a guest chooses the landscape first and the villa second.
                </Reveal>

                <Reveal as="p" className="mt-5 text-[17px] leading-[1.65] text-ink/70 max-w-[52ch]">
                  The result is a booking experience that sells the stay rather than the room:
                  remarkable properties, chosen with purpose, backed by exclusive inclusions and
                  24/7 support from a team on the ground.
                </Reveal>

                {/* Regions */}
                <Reveal as="div" className="mt-10 border-t border-line pt-8">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted mb-5">
                    Where you&apos;ll wake up
                  </p>
                  <div className="flex flex-col gap-5">
                    {REGIONS.map((r) => (
                      <div key={r.label}>
                        <div className="font-display text-[15px] font-semibold tracking-[-0.02em] text-ink">
                          {r.label}
                        </div>
                        <p className="mt-1 text-[15px] leading-[1.55] text-ink/70 max-w-[48ch]">
                          {r.desc}
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
                    alt="The Ceylon Haven homepage: “Where luxury meets local charm,” over a beachfront villa pool, with a villa search."
                    sizes="(min-width: 1024px) 55vw, 100vw"
                    className="w-full rounded-[var(--radius-lg)] border border-line"
                  />
                </Reveal>

                <div className="mt-4 grid grid-cols-2 gap-4">
                  <Reveal as="div">
                    <Image
                      src={shotStays}
                      alt="Remarkable stays, chosen with purpose — villa cards for Bolgoda, Bentota, and Mirissa."
                      sizes="(min-width: 1024px) 27vw, 50vw"
                      className="w-full rounded-[var(--radius-lg)] border border-line"
                    />
                  </Reveal>
                  <Reveal as="div">
                    <Image
                      src={shotRegions}
                      alt="Where will you wake up next — browsing villas by tropics, hills, safaris, and culture."
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
              {WORK_PROJECTS.filter((p) => p.slug !== "ceylon-haven").map((p) => (
                <WorkCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
