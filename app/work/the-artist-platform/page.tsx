import type { Metadata } from "next"
import Image from "next/image"
import { Nav } from "@/components/nav"
import { SectionHead } from "@/components/section-head"
import { Reveal } from "@/components/reveal"
import { WorkCard } from "@/components/sections/work-card"
import { WORK_PROJECTS } from "@/data/work-projects"
import shotHero from "@/public/work/the-artist-platform/hero.webp"
import shotEcosystem from "@/public/work/the-artist-platform/ecosystem.webp"
import shotAudiences from "@/public/work/the-artist-platform/audiences.webp"

const PROJECT = WORK_PROJECTS.find((p) => p.slug === "the-artist-platform")!

export const metadata: Metadata = {
  title: "The Artist Platform — Music Industry Marketplace | CreateLyft",
  description:
    "CreateLyft built The Artist Platform, a marketplace connecting musicians with venues, collaborators, and services. Launching in Sydney and Brisbane.",
}

const DISCIPLINES = [
  "Product Strategy",
  "UX & Visual Design",
  "Brand & Identity",
  "Copywriting",
  "Web Development",
]

const AUDIENCES = [
  {
    label: "Artists",
    desc: "Solo performers and bands building an industry-ready profile and EPK, then finding bookings and collaborators without relying on cold outreach.",
  },
  {
    label: "Venues",
    desc: "Clubs and performance spaces discovering vetted talent through structured filtering, with booking handled in the same place.",
  },
  {
    label: "Service providers",
    desc: "Photographers, producers, studios, and marketers listed in a curated marketplace the rest of the ecosystem actually trusts.",
  },
]

export default function TheArtistPlatformPage() {
  return (
    <>
      <Nav />
      <main>

        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <section className="pt-[140px] pb-[60px]">
          <div className="shell">
            <SectionHead label="The Artist Platform" right="2026" />

            <Reveal
              as="h1"
              className="font-display font-bold tracking-[-0.04em] text-ink-2"
              style={{ fontSize: "clamp(48px, 7vw, 100px)", lineHeight: 1.0 }}
            >
              Where musicians &amp; opportunity meet.
            </Reveal>

            <Reveal as="div" className="mt-5">
              <span className="inline-flex items-center rounded-full bg-paper-2 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                Creative Platform &middot; 2026
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
                  The Artist Platform — TAP — is a marketplace for working musicians. Artists,
                  venues, and the people who serve them all live in one professional ecosystem,
                  rather than scattered across social profiles, group chats, and inboxes.
                </Reveal>

                <Reveal as="p" className="mt-5 text-[17px] leading-[1.65] text-ink/70 max-w-[52ch]">
                  The platform calls the problem &ldquo;The Disconnect,&rdquo; and it&apos;s a fair
                  name for it. A musician chasing work is running a business across half a dozen
                  tools that were never designed to talk to each other, while venues trying to book
                  reliable talent have no structured way to find it. Both sides are busy; neither
                  can see the other clearly. That is a marketplace problem, and marketplaces are
                  hard — they have to feel populated and credible on day one, to both audiences at
                  once, or neither shows up.
                </Reveal>

                <Reveal as="p" className="mt-5 text-[17px] leading-[1.65] text-ink/70 max-w-[52ch]">
                  CreateLyft built for that cold-start problem directly. The product is structured
                  around industry-ready profiles and EPKs, discovery with real filtering, and
                  booking and collaboration tools that sit alongside a curated marketplace of
                  services. The site speaks to artists and venues in their own terms without
                  fracturing into two products, and it makes the value of a profile obvious before
                  anyone is asked to build one.
                </Reveal>

                <Reveal as="p" className="mt-5 text-[17px] leading-[1.65] text-ink/70 max-w-[52ch]">
                  TAP launches in Sydney and Brisbane with pre-registration already open — a
                  deliberate run-up designed to bring both sides of the marketplace through the
                  door together. Your professional music career, connected.
                </Reveal>

                {/* Audiences */}
                <Reveal as="div" className="mt-10 border-t border-line pt-8">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted mb-5">
                    Who it serves
                  </p>
                  <div className="flex flex-col gap-5">
                    {AUDIENCES.map((a) => (
                      <div key={a.label}>
                        <div className="font-display text-[15px] font-semibold tracking-[-0.02em] text-ink">
                          {a.label}
                        </div>
                        <p className="mt-1 text-[15px] leading-[1.55] text-ink/70 max-w-[48ch]">
                          {a.desc}
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
                    alt="The Artist Platform homepage: “Where musicians & opportunity meet,” with an example artist profile and booking."
                    sizes="(min-width: 1024px) 55vw, 100vw"
                    className="w-full rounded-[var(--radius-lg)] border border-line"
                  />
                </Reveal>

                <div className="mt-4 grid grid-cols-2 gap-4">
                  <Reveal as="div">
                    <Image
                      src={shotEcosystem}
                      alt="The four steps of the TAP ecosystem: build a profile, collaborate, discover venues, and access trusted services."
                      sizes="(min-width: 1024px) 27vw, 50vw"
                      className="w-full rounded-[var(--radius-lg)] border border-line"
                    />
                  </Reveal>
                  <Reveal as="div">
                    <Image
                      src={shotAudiences}
                      alt="TAP's two audiences side by side — more opportunities to play for artists, easier booking for venues."
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
              {WORK_PROJECTS.filter((p) => p.slug !== "the-artist-platform").map((p) => (
                <WorkCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
