import type { Metadata } from "next"
import { Nav } from "@/components/nav"
import { SectionHead } from "@/components/section-head"
import { Reveal } from "@/components/reveal"
import { WorkCard } from "@/components/sections/work-card"
import { WORK_PROJECTS } from "@/data/work-projects"

export const metadata: Metadata = {
  title: "Dataline Finance — Create Lyft",
  description:
    "How Create Lyft built a fintech data platform for Dataline Finance — ingestion pipelines, analytics product, and financial data modelling.",
}

// ── Hero visual — full dashboard mockup ──────────────────────────────────────

function HeroDashboardVisual() {
  const tableRows = [
    { label: "Settlement Receipts", value: "$4,218,340", change: "+8.3%", positive: true },
    { label: "Transaction Volume", value: "128,442",    change: "+12.1%", positive: true },
    { label: "Average Ticket Size",  value: "$32.84",   change: "+3.0%",  positive: true },
    { label: "Failed Transactions",  value: "0.41%",    change: "−0.08%", positive: true },
  ]

  return (
    <div
      className="w-full overflow-hidden rounded-[var(--radius-lg)]"
      style={{ background: "var(--color-ink-2)", aspectRatio: "16/10" }}
      aria-hidden="true"
    >
      {/* Window chrome */}
      <div
        className="flex items-center gap-2 px-5 py-3.5 border-b"
        style={{ borderColor: "rgba(174,184,254,0.1)" }}
      >
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: "rgba(255,145,164,0.6)" }} />
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: "rgba(255,200,100,0.4)" }} />
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: "rgba(124,228,166,0.4)" }} />
        <div
          className="ml-3 flex-1 max-w-[220px] rounded font-mono text-[10px] px-3 py-0.5"
          style={{ background: "rgba(174,184,254,0.06)", color: "rgba(174,184,254,0.35)" }}
        >
          app.dataline.com.au/analytics
        </div>
      </div>

      {/* App shell */}
      <div className="flex h-[calc(100%-44px)]">

        {/* Sidebar */}
        <div
          className="flex w-[52px] flex-shrink-0 flex-col items-center gap-4 py-5 border-r"
          style={{ borderColor: "rgba(174,184,254,0.08)", background: "rgba(0,0,0,0.15)" }}
        >
          {/* Logo mark */}
          <div
            className="h-7 w-7 rounded-lg flex items-center justify-center mb-1"
            style={{ background: "var(--color-blue)" }}
          >
            <svg viewBox="0 0 14 14" width="10" height="10" fill="none">
              <path d="M3 10 L7 4 L11 10" stroke="#1a1057" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="5" y1="11.5" x2="9" y2="11.5" stroke="#ff91a4" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          {[
            "M3 4h7M3 8h5M3 12h7",
            "M4 6a1 1 0 001 1h6M4 10a1 1 0 001 1h6M3 4h8",
            "M4 5 L4 13 M4 13 L12 13 M6 10 L6 8 M9 10 L9 6 M12 10 L12 9",
            "M12 5L8 9l-3-3-4 4",
          ].map((d, i) => (
            <div
              key={i}
              className="h-8 w-8 rounded-lg flex items-center justify-center"
              style={{
                background: i === 0 ? "rgba(117,139,253,0.18)" : "transparent",
              }}
            >
              <svg viewBox="0 0 16 16" width="14" height="14" fill="none">
                <path d={d} stroke={i === 0 ? "#AEB8FE" : "rgba(174,184,254,0.3)"} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          ))}
        </div>

        {/* Main area */}
        <div className="flex flex-1 flex-col gap-0 overflow-hidden">

          {/* Top bar */}
          <div
            className="flex items-center justify-between px-5 py-3 border-b flex-shrink-0"
            style={{ borderColor: "rgba(174,184,254,0.08)" }}
          >
            <div>
              <div className="font-display font-semibold text-[13px] tracking-[-0.02em]" style={{ color: "var(--color-paper)" }}>
                Revenue Analytics
              </div>
              <div className="font-mono text-[9px] mt-0.5" style={{ color: "rgba(174,184,254,0.45)" }}>
                LIVE · UPDATED 2 MIN AGO
              </div>
            </div>
            <div className="flex items-center gap-2">
              {["MTD", "QTD", "YTD"].map((label, i) => (
                <div
                  key={label}
                  className="rounded font-mono text-[9px] px-2.5 py-1"
                  style={{
                    background: i === 0 ? "rgba(117,139,253,0.2)" : "rgba(174,184,254,0.05)",
                    color: i === 0 ? "var(--color-blue-2)" : "rgba(174,184,254,0.3)",
                  }}
                >
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-1 gap-0 overflow-hidden">

            {/* Chart area */}
            <div className="flex flex-1 flex-col gap-3 p-4 overflow-hidden">

              {/* KPI row */}
              <div className="grid grid-cols-3 gap-3 flex-shrink-0">
                {[
                  { label: "Total Revenue", value: "$4.2M", delta: "+21.4%", green: true },
                  { label: "Transactions",  value: "128k",  delta: "+12.1%", green: true },
                  { label: "Pipeline",      value: "$1.1M", delta: "Forecast", green: false },
                ].map((kpi) => (
                  <div
                    key={kpi.label}
                    className="rounded-xl p-3"
                    style={{ background: "rgba(174,184,254,0.05)", border: "1px solid rgba(174,184,254,0.08)" }}
                  >
                    <div className="font-mono text-[8px] mb-1" style={{ color: "rgba(174,184,254,0.4)" }}>
                      {kpi.label}
                    </div>
                    <div className="font-display font-semibold text-[16px] leading-none tracking-[-0.03em]" style={{ color: "var(--color-paper)" }}>
                      {kpi.value}
                    </div>
                    <div className="font-mono text-[8px] mt-1" style={{ color: kpi.green ? "#7CE4A6" : "rgba(174,184,254,0.4)" }}>
                      {kpi.delta}
                    </div>
                  </div>
                ))}
              </div>

              {/* Line chart */}
              <div
                className="flex-1 rounded-xl overflow-hidden relative min-h-0"
                style={{ background: "rgba(174,184,254,0.03)", border: "1px solid rgba(174,184,254,0.07)" }}
              >
                <div className="absolute inset-x-3 top-2.5 flex items-center justify-between">
                  <span className="font-mono text-[8px]" style={{ color: "rgba(174,184,254,0.35)" }}>
                    REVENUE · DAILY
                  </span>
                  <span className="font-mono text-[8px]" style={{ color: "#7CE4A6" }}>
                    ● Live
                  </span>
                </div>
                <svg viewBox="0 0 320 80" preserveAspectRatio="none" className="absolute inset-0 w-full h-full pt-7">
                  {/* Grid lines */}
                  {[20, 40, 60].map((y) => (
                    <line key={y} x1="0" y1={y} x2="320" y2={y} stroke="rgba(174,184,254,0.06)" strokeWidth="1" />
                  ))}
                  {/* Area fill */}
                  <defs>
                    <linearGradient id="hero-area-grad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#758BFD" stopOpacity="0.28" />
                      <stop offset="100%" stopColor="#758BFD" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 68 C 20 64, 40 60, 55 54 S 80 46, 100 40 S 130 32, 155 28 S 185 22, 210 18 S 240 14, 265 10 S 295 7, 320 4 L 320 80 L 0 80 Z"
                    fill="url(#hero-area-grad)"
                  />
                  {/* Line */}
                  <path
                    d="M0 68 C 20 64, 40 60, 55 54 S 80 46, 100 40 S 130 32, 155 28 S 185 22, 210 18 S 240 14, 265 10 S 295 7, 320 4"
                    stroke="#AEB8FE"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  {/* Endpoint dot */}
                  <circle cx="320" cy="4" r="3" fill="#AEB8FE" />
                  <circle cx="320" cy="4" r="5.5" fill="none" stroke="#AEB8FE" strokeOpacity="0.3" strokeWidth="1" />
                </svg>
              </div>
            </div>

            {/* Table panel */}
            <div
              className="w-[160px] flex-shrink-0 flex flex-col border-l overflow-hidden"
              style={{ borderColor: "rgba(174,184,254,0.08)" }}
            >
              <div className="px-3.5 py-2.5 border-b flex-shrink-0" style={{ borderColor: "rgba(174,184,254,0.08)" }}>
                <span className="font-mono text-[8px] uppercase tracking-[0.1em]" style={{ color: "rgba(174,184,254,0.35)" }}>
                  Key Metrics
                </span>
              </div>
              <div className="flex flex-col flex-1">
                {tableRows.map((row, i) => (
                  <div
                    key={row.label}
                    className="flex flex-col gap-0.5 px-3.5 py-2.5 border-b"
                    style={{
                      borderColor: "rgba(174,184,254,0.06)",
                      background: i % 2 === 0 ? "rgba(174,184,254,0.02)" : "transparent",
                    }}
                  >
                    <div className="font-mono text-[7.5px] leading-tight" style={{ color: "rgba(174,184,254,0.35)" }}>
                      {row.label}
                    </div>
                    <div className="font-mono text-[10px] font-medium" style={{ color: "var(--color-blue-2)" }}>
                      {row.value}
                    </div>
                    <div className="font-mono text-[7px]" style={{ color: "#7CE4A6" }}>
                      {row.change}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

// ── Gallery block 1 — Pipeline architecture diagram ──────────────────────────

function PipelineDiagramVisual() {
  const nodes = [
    { label: "Ingest",    sub: "Raw Sources",    x: 30,  color: "#758BFD" },
    { label: "Transform", sub: "Validate + Map", x: 50,  color: "#AEB8FE" },
    { label: "Deliver",   sub: "Client APIs",    x: 70,  color: "#7CE4A6" },
  ]

  return (
    <div
      className="w-full overflow-hidden rounded-[var(--radius-md)]"
      style={{ background: "var(--color-blue)", aspectRatio: "4/3" }}
      aria-hidden="true"
    >
      <div className="flex h-full flex-col justify-between p-5">
        {/* Header */}
        <div>
          <div className="font-mono text-[9px] uppercase tracking-[0.14em] mb-1" style={{ color: "rgba(26,16,87,0.55)" }}>
            Data Architecture
          </div>
          <div className="font-display font-semibold text-[14px] leading-tight tracking-[-0.02em]" style={{ color: "var(--color-ink-2)" }}>
            Ingestion Pipeline
          </div>
        </div>

        {/* Diagram */}
        <div className="flex-1 flex items-center justify-center px-2">
          <svg viewBox="0 0 240 80" className="w-full max-h-[120px]" fill="none">
            {/* Connection lines with dashes */}
            <line x1="72" y1="40" x2="108" y2="40" stroke="rgba(26,16,87,0.25)" strokeWidth="1" strokeDasharray="3 2" />
            <line x1="132" y1="40" x2="168" y2="40" stroke="rgba(26,16,87,0.25)" strokeWidth="1" strokeDasharray="3 2" />
            {/* Arrow heads */}
            <path d="M106 37 L110 40 L106 43" stroke="rgba(26,16,87,0.35)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M166 37 L170 40 L166 43" stroke="rgba(26,16,87,0.35)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none" />

            {/* Node boxes */}
            {nodes.map((n, i) => {
              const cx = 30 + i * 90
              return (
                <g key={n.label} transform={`translate(${cx - 30}, 16)`}>
                  <rect width="60" height="48" rx="8" fill="rgba(26,16,87,0.12)" stroke="rgba(26,16,87,0.18)" strokeWidth="1" />
                  {/* Color accent line at top */}
                  <rect width="60" height="3" rx="1.5" fill={n.color} opacity="0.8" />
                  <text x="30" y="28" textAnchor="middle" fontFamily="monospace" fontSize="9" fontWeight="600" fill="#1a1057" opacity="0.85">
                    {n.label}
                  </text>
                  <text x="30" y="40" textAnchor="middle" fontFamily="monospace" fontSize="6.5" fill="#1a1057" opacity="0.4">
                    {n.sub}
                  </text>
                </g>
              )
            })}
          </svg>
        </div>

        {/* Footer label */}
        <div
          className="rounded-full px-3 py-1.5 font-mono text-[8.5px] tracking-[0.1em] self-start"
          style={{ background: "rgba(26,16,87,0.12)", color: "rgba(26,16,87,0.55)" }}
        >
          3-STAGE · EVENT-DRIVEN
        </div>
      </div>
    </div>
  )
}

// ── Gallery block 2 — Data table / report view ────────────────────────────────

function DataTableVisual() {
  const rows = [
    { ticker: "ANZ.AX",  name: "ANZ Banking",       close: "27.84", vol: "3.2M", chg: "+0.8%",  pos: true  },
    { ticker: "CBA.AX",  name: "Commonwealth Bank",  close: "113.40", vol: "1.8M", chg: "+1.3%", pos: true  },
    { ticker: "NAB.AX",  name: "NAB",               close: "34.22", vol: "2.1M", chg: "−0.4%",  pos: false },
    { ticker: "WBC.AX",  name: "Westpac",           close: "25.61", vol: "2.7M", chg: "+0.6%",  pos: true  },
    { ticker: "MQG.AX",  name: "Macquarie Group",   close: "194.70", vol: "0.9M", chg: "−0.2%", pos: false },
  ]

  return (
    <div
      className="w-full overflow-hidden rounded-[var(--radius-md)]"
      style={{ background: "var(--color-paper-2)", aspectRatio: "4/3" }}
      aria-hidden="true"
    >
      <div className="flex h-full flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-4 pt-4 pb-3 flex-shrink-0">
          <div>
            <div className="font-display font-semibold text-[12px] tracking-[-0.02em]" style={{ color: "var(--color-ink)" }}>
              Securities Feed
            </div>
            <div className="font-mono text-[8px] mt-0.5" style={{ color: "var(--color-muted)" }}>
              ASX · NORMALISED · LIVE
            </div>
          </div>
          <div
            className="flex items-center gap-1 rounded-full px-2.5 py-1 font-mono text-[7.5px]"
            style={{ background: "rgba(124,228,166,0.15)", color: "#2a7a4e" }}
          >
            <span className="h-1 w-1 rounded-full bg-[#7CE4A6]" />
            LIVE
          </div>
        </div>

        {/* Column headers */}
        <div
          className="grid px-4 pb-1.5 font-mono text-[7.5px] uppercase tracking-[0.1em] flex-shrink-0"
          style={{ gridTemplateColumns: "2fr 3fr 2fr 2fr 2fr", color: "var(--color-muted)", borderBottom: "1px solid var(--color-line)" }}
        >
          <span>Ticker</span>
          <span>Name</span>
          <span className="text-right">Close</span>
          <span className="text-right">Vol</span>
          <span className="text-right">Chg</span>
        </div>

        {/* Rows */}
        <div className="flex-1 overflow-hidden">
          {rows.map((row, i) => (
            <div
              key={row.ticker}
              className="grid px-4 py-1.5 font-mono text-[8px]"
              style={{
                gridTemplateColumns: "2fr 3fr 2fr 2fr 2fr",
                background: i % 2 === 0 ? "rgba(39,24,126,0.03)" : "transparent",
              }}
            >
              <span style={{ color: "var(--color-ink)", fontWeight: 600 }}>{row.ticker}</span>
              <span style={{ color: "var(--color-muted)" }} className="truncate pr-2">{row.name}</span>
              <span className="text-right" style={{ color: "var(--color-ink)" }}>{row.close}</span>
              <span className="text-right" style={{ color: "rgba(39,24,126,0.4)" }}>{row.vol}</span>
              <span className="text-right" style={{ color: row.pos ? "#2a7a4e" : "#c0392b", fontWeight: 500 }}>{row.chg}</span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-4 py-2.5 font-mono text-[7px] flex-shrink-0" style={{ color: "rgba(39,24,126,0.3)", borderTop: "1px solid var(--color-line)" }}>
          5 OF 2,840 INSTRUMENTS · LAST REFRESH 09:41:22 AEST
        </div>
      </div>
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

const DISCIPLINES = [
  "Data Architecture",
  "Pipeline Engineering",
  "Analytics Product Design",
  "Financial Data Modelling",
  "Platform UI Development",
  "Data Quality & Validation",
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
              style={{ fontSize: "clamp(56px, 8vw, 120px)", lineHeight: 1.0 }}
            >
              Dataline Finance
            </Reveal>

            <Reveal as="div" className="mt-5">
              <span className="inline-flex items-center rounded-full bg-paper-2 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                Fintech Data Platform &middot; 2025
              </span>
            </Reveal>
          </div>
        </section>

        {/* ── Two-column content ────────────────────────────────────────────── */}
        <section className="py-[80px]">
          <div className="shell">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-16 items-start">

              {/* Left column */}
              <div>
                {/* Body copy */}
                <Reveal as="p" className="text-[17px] leading-[1.65] text-ink/70 max-w-[52ch]">
                  Dataline Finance had a data problem that most fintech companies recognise but rarely
                  admit out loud. Their platform was generating valuable financial data, but their team
                  had no clean way to query it, no reliable pipeline to trust it, and no product layer
                  that made any of it useful to clients. They needed someone to build the plumbing and
                  the product — not just one or the other.
                </Reveal>

                <Reveal as="p" className="mt-5 text-[17px] leading-[1.65] text-ink/70 max-w-[52ch]">
                  We designed and built a data platform from the ground up: ingestion pipelines that
                  pull from multiple financial data sources, a transformation layer that normalises and
                  validates the data before it reaches anything downstream, and a client-facing analytics
                  product built on top of it. Every decision was made to keep the architecture simple to
                  operate — not just impressive on a whiteboard.
                </Reveal>

                <Reveal as="p" className="mt-5 text-[17px] leading-[1.65] text-ink/70 max-w-[52ch]">
                  Dataline&apos;s clients now interact with clean, reliable financial data through a product
                  that actually reflects what their platform can do. The internal team can ship new data
                  products without rebuilding the stack each time. That&apos;s the difference between
                  infrastructure as a constraint and infrastructure as a capability.
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
                    See Dataline&apos;s Platform
                    <span className="text-blue-2">↗</span>
                  </a>
                </Reveal>
              </div>

              {/* Right column — visual art */}
              <div>
                {/* Hero dashboard visual */}
                <Reveal as="div">
                  <HeroDashboardVisual />
                </Reveal>

                {/* Gallery row */}
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <Reveal as="div">
                    <PipelineDiagramVisual />
                  </Reveal>
                  <Reveal as="div">
                    <DataTableVisual />
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
