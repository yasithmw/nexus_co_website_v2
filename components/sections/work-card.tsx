import type { WorkProject } from "@/data/work-projects"

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

// ── Card art: Dataline Finance ────────────────────────────────────────────────
// Dark bg-ink tile: a financial data table mockup on bg-ink-2 card,
// with a line chart tracing revenue and a "+21.4%" KPI callout in text-blue-2.
function DatalineFinanceArt() {
  return (
    <div
      className="flex aspect-[16/11] w-full max-w-[320px] flex-col gap-2.5 rounded-[14px] p-4 shadow-[0_18px_50px_-12px_rgba(0,0,0,0.22)] transition-transform duration-[550ms] ease-[cubic-bezier(0.2,0.6,0.2,1)] group-hover:translate-y-[-4px] group-hover:rotate-0"
      style={{ background: "var(--color-ink-2)", color: "var(--color-paper)", transform: "rotate(-2deg)" }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between font-mono text-[9px] tracking-[0.1em]" style={{ color: "var(--color-blue-2)" }}>
        <span>REVENUE · MTD</span>
        <span className="font-semibold" style={{ color: "#7CE4A6" }}>+21.4%</span>
      </div>

      {/* Line chart */}
      <svg viewBox="0 0 200 56" preserveAspectRatio="none" className="w-full flex-1">
        <defs>
          <linearGradient id="dl-finance-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#758BFD" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#758BFD" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0 48 Q 30 42 55 36 T 100 26 T 148 14 T 200 6 L 200 56 L 0 56 Z" fill="url(#dl-finance-grad)" />
        <path d="M0 48 Q 30 42 55 36 T 100 26 T 148 14 T 200 6" stroke="#AEB8FE" strokeWidth="1.6" fill="none" />
        <circle cx="200" cy="6" r="2.5" fill="#AEB8FE" />
      </svg>

      {/* Table rows */}
      <div className="flex flex-col gap-1">
        {[
          { label: "Settlements", val: "$4.2M", delta: "+8%" },
          { label: "Transactions", val: "128k", delta: "+12%" },
          { label: "Avg ticket", val: "$32.8", delta: "+3%" },
        ].map((row) => (
          <div key={row.label} className="flex items-center justify-between font-mono text-[8px] tracking-[0.06em]">
            <span style={{ color: "rgba(241,242,246,0.45)" }}>{row.label}</span>
            <span style={{ color: "var(--color-blue-2)" }}>{row.val}</span>
            <span style={{ color: "#7CE4A6" }}>{row.delta}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Card art: The Artist Platform ─────────────────────────────────────────────
// Lavender bg-blue-2 tile: 2×2 masonry grid of artwork placeholders,
// plus a "Follow · 2.4k" stat tag.
function ArtistPlatformArt() {
  const cards = [
    { rotate: "-3deg", h: "h-[80px]", bg: "bg-ink", delay: "" },
    { rotate: "2deg", h: "h-[68px]", bg: "bg-blue", delay: "" },
    { rotate: "1deg", h: "h-[72px]", bg: "bg-ink", delay: "" },
    { rotate: "-2deg", h: "h-[84px]", bg: "bg-blue", delay: "" },
  ]

  return (
    <div className="flex flex-col items-center gap-4">
      {/* 2×2 grid of artwork tiles */}
      <div className="grid w-[260px] grid-cols-2 gap-2.5">
        {cards.map((c, i) => (
          <div
            key={i}
            className={`${c.h} w-full rounded-xl shadow-[0_6px_20px_-6px_rgba(39,24,126,0.22)] transition-transform duration-[550ms] ease-[cubic-bezier(0.2,0.6,0.2,1)] group-hover:translate-y-[-3px] group-hover:rotate-0 overflow-hidden`}
            style={{ background: "var(--color-ink)", transform: `rotate(${c.rotate})` }}
          >
            {/* Abstract art texture — diagonal lines */}
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
              {i === 0 && (
                <>
                  <rect width="100" height="100" fill="#1a1057" />
                  <line x1="0" y1="100" x2="100" y2="0" stroke="#758BFD" strokeWidth="0.8" opacity="0.5" />
                  <line x1="20" y1="100" x2="100" y2="20" stroke="#AEB8FE" strokeWidth="0.6" opacity="0.3" />
                  <circle cx="68" cy="32" r="18" fill="none" stroke="#AEB8FE" strokeWidth="0.8" opacity="0.4" />
                </>
              )}
              {i === 1 && (
                <>
                  <rect width="100" height="100" fill="#758BFD" />
                  <rect x="20" y="20" width="60" height="60" fill="none" stroke="#1a1057" strokeWidth="1.2" opacity="0.5" />
                  <rect x="35" y="35" width="30" height="30" fill="#1a1057" opacity="0.35" />
                </>
              )}
              {i === 2 && (
                <>
                  <rect width="100" height="100" fill="#1a1057" />
                  {[0, 1, 2, 3, 4].map((n) => (
                    <line key={n} x1={n * 25} y1="0" x2={n * 25} y2="100" stroke="#AEB8FE" strokeWidth="0.5" opacity="0.25" />
                  ))}
                  <ellipse cx="50" cy="50" rx="28" ry="18" fill="#758BFD" opacity="0.5" />
                </>
              )}
              {i === 3 && (
                <>
                  <rect width="100" height="100" fill="#758BFD" />
                  <path d="M0 80 Q 25 30 50 55 T 100 20" stroke="#1a1057" strokeWidth="1.4" fill="none" opacity="0.6" />
                  <path d="M0 80 Q 25 30 50 55 T 100 20 L 100 100 L 0 100 Z" fill="#1a1057" opacity="0.2" />
                </>
              )}
            </svg>
          </div>
        ))}
      </div>

      {/* Stat tag */}
      <div
        className="flex items-center gap-2 rounded-full px-3.5 py-1.5 font-mono text-[9px] tracking-[0.14em] uppercase shadow-[0_4px_12px_-4px_rgba(39,24,126,0.2)]"
        style={{ background: "var(--color-ink)", color: "var(--color-blue-2)" }}
      >
        <span style={{ color: "#7CE4A6" }}>●</span>
        <span>Follow · 2.4k</span>
      </div>
    </div>
  )
}

// ── Card art: Alignify ────────────────────────────────────────────────────────
// Coral bg-cream tile: compact OKR card with 3 progress bars and mono labels.
function AlignifyArt() {
  const goals = [
    { label: "Q3 Goal", fill: 82, value: "82%" },
    { label: "Team Alignment", fill: 67, value: "67%" },
    { label: "Launch", fill: 45, value: "45%" },
  ]

  return (
    <div
      className="flex w-full max-w-[280px] flex-col gap-3 rounded-[14px] p-5 shadow-[0_18px_50px_-12px_rgba(39,24,126,0.18)] transition-transform duration-[550ms] ease-[cubic-bezier(0.2,0.6,0.2,1)] group-hover:translate-y-[-4px] group-hover:rotate-0"
      style={{ background: "var(--color-paper)", transform: "rotate(-1.5deg)" }}
    >
      {/* Card header */}
      <div className="flex items-center justify-between">
        <div className="font-display text-[11px] font-semibold" style={{ color: "var(--color-ink)" }}>
          OKR Tracker
        </div>
        <div className="font-mono text-[8px] tracking-[0.1em]" style={{ color: "var(--color-muted)" }}>
          Q3 · 2025
        </div>
      </div>

      {/* Progress bars */}
      <div className="flex flex-col gap-2.5">
        {goals.map((g) => (
          <div key={g.label} className="flex flex-col gap-1">
            <div className="flex items-center justify-between font-mono text-[8px] uppercase tracking-[0.12em]" style={{ color: "var(--color-muted)" }}>
              <span>{g.label}</span>
              <span style={{ color: "var(--color-ink)" }}>{g.value}</span>
            </div>
            <div className="h-[6px] w-full overflow-hidden rounded-full" style={{ background: "var(--color-paper-2)" }}>
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{ width: `${g.fill}%`, background: "var(--color-ink)" }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-0.5 flex items-center gap-1.5 font-mono text-[7.5px] tracking-[0.1em]" style={{ color: "rgba(39,24,126,0.35)" }}>
        <div className="h-1.5 w-1.5 rounded-full" style={{ background: "#7CE4A6" }} />
        <span>3 OF 4 OBJECTIVES ON TRACK</span>
      </div>
    </div>
  )
}

// ── Card art: Dataline People ─────────────────────────────────────────────────
// Blue bg-blue tile: people-metrics dashboard card — headcount, stacked dept bars,
// and a growth delta.
function DatalinePeopleArt() {
  const departments = [
    { label: "Eng", pct: 38, color: "var(--color-ink-2)" },
    { label: "Ops", pct: 24, color: "var(--color-ink)" },
    { label: "GTM", pct: 22, color: "rgba(39,24,126,0.55)" },
    { label: "Other", pct: 16, color: "rgba(39,24,126,0.3)" },
  ]

  return (
    <div
      className="flex aspect-[16/11] w-full max-w-[320px] flex-col gap-3 rounded-[14px] bg-paper p-4 shadow-[0_18px_50px_-12px_rgba(0,0,0,0.18)] transition-transform duration-[550ms] ease-[cubic-bezier(0.2,0.6,0.2,1)] group-hover:translate-y-[-4px] group-hover:rotate-0"
      style={{ transform: "rotate(-2deg)" }}
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <div className="font-mono text-[8px] uppercase tracking-[0.1em]" style={{ color: "var(--color-muted)" }}>
            Headcount
          </div>
          <div className="font-display text-[28px] font-semibold leading-none tracking-[-0.03em]" style={{ color: "var(--color-ink)" }}>
            847
          </div>
        </div>
        <div className="rounded-full px-2 py-0.5 font-mono text-[8px] tracking-[0.08em]" style={{ background: "rgba(124,228,166,0.18)", color: "#2a7a4e" }}>
          +12% QoQ
        </div>
      </div>

      {/* Stacked bar */}
      <div className="flex flex-col gap-1.5">
        <div className="flex h-[10px] w-full overflow-hidden rounded-full">
          {departments.map((d) => (
            <div
              key={d.label}
              className="h-full first:rounded-l-full last:rounded-r-full"
              style={{ width: `${d.pct}%`, background: d.color }}
            />
          ))}
        </div>
        <div className="flex gap-3">
          {departments.map((d) => (
            <div key={d.label} className="flex items-center gap-1 font-mono text-[7px] tracking-[0.08em]" style={{ color: "var(--color-muted)" }}>
              <div className="h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ background: d.color }} />
              <span>{d.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom metrics */}
      <div className="mt-auto flex items-center justify-between font-mono text-[8px] tracking-[0.06em]" style={{ color: "var(--color-muted)" }}>
        <span>14 open roles</span>
        <span style={{ color: "var(--color-ink)", fontWeight: 600 }}>92% retention</span>
      </div>
    </div>
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
        {project.slug === "dataline-finance" && <DatalineFinanceArt />}
        {project.slug === "the-artist-platform" && <ArtistPlatformArt />}
        {project.slug === "alignify" && <AlignifyArt />}
        {project.slug === "dataline-people" && <DatalinePeopleArt />}
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
