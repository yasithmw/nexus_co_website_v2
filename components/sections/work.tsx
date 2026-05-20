import { Reveal } from "../reveal";
import { SectionHead } from "../section-head";

const tileBase =
  "group relative isolate flex aspect-[4/3.4] cursor-pointer items-center justify-center overflow-hidden rounded-lg transition-[transform,box-shadow] duration-[550ms] ease-[cubic-bezier(0.2,0.6,0.2,1)] hover:-translate-y-2 hover:shadow-[0_30px_60px_-20px_rgba(39,24,126,0.25)]";

const tileMeta =
  "absolute inset-x-6 top-6 z-[3] flex items-start justify-between font-mono text-[10px] uppercase tracking-[0.16em]";

const tileFoot =
  "absolute inset-x-6 bottom-6 z-[3] flex items-end justify-between";

const tileName =
  "font-display text-[clamp(22px,2.2vw,32px)] font-medium leading-none tracking-[-0.025em]";

const tileArrowBase =
  "inline-flex h-11 w-11 items-center justify-center rounded-full text-base transition-transform duration-[350ms] group-hover:-rotate-45";

export function Work() {
  return (
    <section id="work" className="relative pb-20 pt-24">
      <SectionHead num="02" label="Selected work" right="2024 — 2026" />

      <Reveal
        as="h2"
        className="mb-16 max-w-[16ch] font-display text-[clamp(40px,6.4vw,96px)] font-medium leading-[0.95] tracking-[-0.04em] text-ink-2"
      >
        Built for forward-thinking{" "}
        <em className="font-serif font-normal italic text-blue">brands.</em>
      </Reveal>

        <div className="grid gap-7 md:grid-cols-2">
          {/* Tile 1 — Dark, AI dashboard */}
          <a href="#" className={`${tileBase} bg-ink text-paper`}>
            <div className={tileMeta}>
              <span>— AI Platform · 2026</span>
              <span style={{ color: "#7CE4A6" }}>●&nbsp; LIVE</span>
            </div>
            <div className="absolute inset-0 z-[1] flex items-center justify-center px-6 pb-[88px] pt-16">
              <div
                className="flex aspect-[16/11] w-full max-w-[320px] flex-col gap-2.5 rounded-[14px] p-4 shadow-[0_18px_50px_-12px_rgba(0,0,0,0.18)] transition-transform duration-[550ms] ease-[cubic-bezier(0.2,0.6,0.2,1)] group-hover:translate-y-[-4px] group-hover:rotate-0"
                style={{ background: "var(--color-ink-2)", color: "var(--color-paper)", transform: "rotate(-2deg)" }}
              >
                <div className="flex justify-between font-mono text-[9px] tracking-[0.1em] text-blue-2">
                  <span>FORECAST · Q3</span>
                  <span>+34%</span>
                </div>
                <svg viewBox="0 0 200 80" preserveAspectRatio="none" className="w-full flex-1">
                  <defs>
                    <linearGradient id="aurelia-grad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#758BFD" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#758BFD" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0 60 Q 25 50 50 45 T 100 30 T 150 22 T 200 12 L 200 80 L 0 80 Z" fill="url(#aurelia-grad)" />
                  <path d="M0 60 Q 25 50 50 45 T 100 30 T 150 22 T 200 12" stroke="#AEB8FE" strokeWidth="1.8" fill="none" />
                  <circle cx="200" cy="12" r="3" fill="#AEB8FE" />
                </svg>
                <div className="flex gap-1.5">
                  <div className="h-[18px] flex-1 rounded bg-ink" />
                  <div className="h-[18px] flex-1 rounded bg-ink" />
                  <div className="h-[18px] flex-1 rounded bg-blue" />
                </div>
              </div>
            </div>
            <div className={tileFoot}>
              <div>
                <div className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.16em] opacity-60">
                  — FINTECH · AI
                </div>
                <div className={tileName}>Aurelia Forecast</div>
              </div>
              <span className={`${tileArrowBase} bg-blue-2 text-ink`}>↗</span>
            </div>
          </a>

          {/* Tile 2 — Lavender, Mobile */}
          <a href="#" className={`${tileBase} bg-blue-2 text-ink`}>
            <div className={tileMeta}>
              <span>— Health App · 2025</span>
              <span>iOS / Android</span>
            </div>
            <div className="absolute inset-0 z-[1] flex items-center justify-center px-6 pb-[88px] pt-16">
              <div
                className="relative aspect-[9/17] w-[200px] max-w-full animate-float rounded-[28px] bg-[#1a1057] p-2 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.35)] transition-transform duration-[550ms] ease-[cubic-bezier(0.2,0.6,0.2,1)] group-hover:translate-y-[-6px] group-hover:rotate-0"
                style={{ transform: "rotate(-4deg)" }}
              >
                <div className="absolute left-1/2 top-3.5 z-[2] h-[5px] w-[60px] -translate-x-1/2 rounded-full bg-black" />
                <div
                  className="relative flex h-full w-full flex-col overflow-hidden rounded-[22px] px-3.5 pb-3.5 pt-[26px] text-paper"
                  style={{ background: "linear-gradient(160deg, var(--color-ink) 0%, var(--color-blue) 100%)" }}
                >
                  <div className="mb-1.5 font-mono text-[8px] tracking-[0.1em] opacity-70">
                    — TODAY
                  </div>
                  <div className="font-display text-[13px] font-semibold">Good morning, Sam.</div>
                  <div className="my-3 font-serif text-[20px] leading-none italic">7 days streak.</div>
                  <div className="flex flex-1 items-center justify-center">
                    <svg viewBox="0 0 80 80" className="h-20 w-20">
                      <circle cx="40" cy="40" r="32" stroke="rgba(174,184,254,0.4)" strokeWidth="6" fill="none" />
                      <circle
                        cx="40"
                        cy="40"
                        r="32"
                        stroke="#F1F2F6"
                        strokeWidth="6"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray="201"
                        strokeDashoffset="60"
                        transform="rotate(-90 40 40)"
                      />
                    </svg>
                  </div>
                  <div className="mt-2 flex gap-1">
                    <div className="h-1.5 flex-1 rounded-full bg-white/50" />
                    <div className="h-1.5 flex-1 rounded-full bg-white/50" />
                    <div className="h-1.5 flex-1 rounded-full bg-white/20" />
                  </div>
                </div>
              </div>
            </div>
            <div className={tileFoot}>
              <div>
                <div className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.16em] opacity-60">
                  — HEALTH · MOBILE
                </div>
                <div className={tileName}>Marin Wellness</div>
              </div>
              <span className={`${tileArrowBase} bg-ink text-paper`}>↗</span>
            </div>
          </a>

          {/* Tile 3 — Cream, brand */}
          <a href="#" className={`${tileBase} bg-cream text-ink`}>
            <div className={tileMeta}>
              <span>— Brand Identity · 2025</span>
              <span>Studio</span>
            </div>
            <div className="absolute inset-0 z-[1] flex items-center justify-center px-6 pb-[88px] pt-16">
              <div className="flex flex-col items-center gap-[18px]">
                <div className="font-serif text-[64px] leading-none tracking-[-0.04em] italic text-ink">
                  Vermillion<span className="text-blue">.</span>
                </div>
                <div className="flex gap-2.5">
                  <div className="h-9 w-9 rounded-full bg-ink" />
                  <div className="h-9 w-9 rounded-full bg-blue" />
                  <div className="h-9 w-9 rounded-full bg-blue-2" />
                  <div className="h-9 w-9 rounded-full bg-peach" />
                </div>
                <div className="font-mono text-[9px] tracking-[0.2em] text-muted">
                  — SLOW WINE · MELBOURNE
                </div>
              </div>
            </div>
            <div className={tileFoot}>
              <div>
                <div className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.16em] opacity-55">
                  — HOSPITALITY · BRAND
                </div>
                <div className={tileName}>Vermillion</div>
              </div>
              <span className={`${tileArrowBase} bg-ink text-paper`}>↗</span>
            </div>
          </a>

          {/* Tile 4 — Blue, BI */}
          <a href="#" className={`${tileBase} bg-blue text-paper`}>
            <div className={tileMeta}>
              <span>— BI Platform · 2025</span>
              <span className="text-white/70">Internal Tool</span>
            </div>
            <div className="absolute inset-0 z-[1] flex items-center justify-center px-6 pb-[88px] pt-16">
              <div
                className="flex aspect-[16/11] w-full max-w-[320px] flex-col gap-2.5 rounded-[14px] bg-paper p-4 shadow-[0_18px_50px_-12px_rgba(0,0,0,0.18)] transition-transform duration-[550ms] ease-[cubic-bezier(0.2,0.6,0.2,1)] group-hover:translate-y-[-4px] group-hover:rotate-0"
                style={{ transform: "rotate(-2deg)" }}
              >
                <div className="flex items-center justify-between">
                  <div className="font-display text-[11px] font-semibold text-ink">Revenue · YTD</div>
                  <div className="font-mono text-[8px] tracking-[0.1em] text-muted">FY26</div>
                </div>
                <div className="grid h-[60px] grid-cols-7 items-end gap-[3px]">
                  <div className="rounded-t-sm bg-blue-2" style={{ height: "30%" }} />
                  <div className="rounded-t-sm bg-blue-2" style={{ height: "55%" }} />
                  <div className="rounded-t-sm bg-blue-2" style={{ height: "42%" }} />
                  <div className="rounded-t-sm bg-blue" style={{ height: "78%" }} />
                  <div className="rounded-t-sm bg-ink" style={{ height: "90%" }} />
                  <div className="rounded-t-sm bg-blue-2" style={{ height: "70%" }} />
                  <div className="rounded-t-sm bg-blue" style={{ height: "88%" }} />
                </div>
                <div className="flex justify-between font-mono text-[8px] tracking-[0.06em] text-muted">
                  <span>$2.4M</span>
                  <span className="font-semibold text-ink">+18% MoM</span>
                </div>
              </div>
            </div>
            <div className={tileFoot}>
              <div>
                <div className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.16em] opacity-70">
                  — RETAIL · BI
                </div>
                <div className={tileName}>Halcyon Group</div>
              </div>
              <span className={`${tileArrowBase} bg-ink text-paper`}>↗</span>
            </div>
          </a>
        </div>
    </section>
  );
}
