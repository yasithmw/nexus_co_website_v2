import Image from "next/image"
import type { WorkProject } from "@/data/work-projects"
import alignifyMark from "@/public/work/alignify-mark.png"
import datalineLogo from "@/public/work/dataline-logo.png"
import tapLogo from "@/public/work/tap-logo.svg"

const tileBase =
  "group relative isolate flex aspect-[4/3.4] cursor-pointer items-center justify-center overflow-hidden rounded-lg transition-[transform,box-shadow] duration-[550ms] ease-[cubic-bezier(0.2,0.6,0.2,1)] hover:-translate-y-2 hover:shadow-[0_30px_60px_-20px_rgba(39,24,126,0.25)]"

const tileMeta =
  "absolute inset-x-6 top-6 z-[3] flex items-start justify-between font-mono text-[10px] uppercase tracking-[0.16em]"

const tileFoot =
  "absolute inset-x-6 bottom-6 z-[3] flex items-end justify-between"

const tileName =
  "font-display text-[clamp(22px,2.2vw,32px)] font-medium leading-none tracking-[-0.025em]"

const tileArrowBase =
  "inline-flex h-11 w-11 items-center justify-center rounded-full text-base transition-transform duration-[350ms] group-hover:-rotate-45"

// ── Card art: Dataline logo tile ──────────────────────────────────────────────
// Both Dataline cards sit on dark tiles, so the logo rides on a white card.
// The tile is pure white to match the logo's own background seamlessly.
function DatalineLogoTile() {
  return (
    <div
      className="flex w-full max-w-[250px] items-center justify-center rounded-[14px] bg-white px-9 py-10 shadow-[0_18px_50px_-12px_rgba(0,0,0,0.28)] transition-transform duration-[550ms] ease-[cubic-bezier(0.2,0.6,0.2,1)] group-hover:translate-y-[-4px] group-hover:rotate-0"
      style={{ transform: "rotate(-1.5deg)" }}
    >
      <Image src={datalineLogo} alt="" className="h-auto w-full max-w-[132px]" />
    </div>
  )
}

// ── Card art: The Artist Platform ─────────────────────────────────────────────
// Lavender bg-blue-2 tile: the TAP monogram, sitting straight on the tile.
function ArtistPlatformArt() {
  return (
    <Image
      src={tapLogo}
      alt=""
      className="h-auto w-[clamp(120px,42%,200px)] transition-transform duration-[550ms] ease-[cubic-bezier(0.2,0.6,0.2,1)] group-hover:-translate-y-1 group-hover:scale-[1.04]"
    />
  )
}

// ── Card art: Alignify ────────────────────────────────────────────────────────
// Coral bg-cream tile: the Alignify mark, sitting straight on the tile.
function AlignifyArt() {
  return (
    <Image
      src={alignifyMark}
      alt=""
      sizes="(min-width: 768px) 220px, 45vw"
      className="h-auto w-[clamp(120px,42%,200px)] transition-transform duration-[550ms] ease-[cubic-bezier(0.2,0.6,0.2,1)] group-hover:-translate-y-1 group-hover:scale-[1.04]"
    />
  )
}

// ── WorkCard ──────────────────────────────────────────────────────────────────

type WorkCardProps = {
  project: WorkProject
}

export function WorkCard({ project }: WorkCardProps) {
  const textClass = project.text === "paper" ? "text-paper" : "text-ink"

  return (
    <a
      href={`/work/${project.slug}`}
      className={`${tileBase} ${project.bg} ${textClass}`}
    >
      {/* Meta row */}
      <div className={tileMeta}>
        <span>— {project.type} · {project.year}</span>
        {project.status && (
          <span style={{ color: "#7CE4A6" }}>●&nbsp; {project.status}</span>
        )}
      </div>

      {/* Bespoke card art */}
      <div className="absolute inset-0 z-[1] flex items-center justify-center px-6 pb-[88px] pt-16">
        {project.slug === "dataline-finance" && <DatalineLogoTile />}
        {project.slug === "the-artist-platform" && <ArtistPlatformArt />}
        {project.slug === "alignify" && <AlignifyArt />}
        {project.slug === "dataline-people" && <DatalineLogoTile />}
      </div>

      {/* Footer */}
      <div className={tileFoot}>
        <div>
          <div
            className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.16em]"
            style={{ opacity: project.text === "paper" ? 0.6 : 0.55 }}
          >
            — {project.category}
          </div>
          <div className={tileName}>{project.name}</div>
        </div>
        <span className={`${tileArrowBase} ${project.arrowBg} ${project.arrowText}`}>↗</span>
      </div>
    </a>
  )
}
