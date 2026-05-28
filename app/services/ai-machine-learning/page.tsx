import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Nav } from "@/components/nav";
import { ServiceHero } from "@/components/sections/service-hero";
import { ServiceOverview } from "@/components/sections/service-overview";
import { ServiceApproach } from "@/components/sections/service-approach";
import { ServiceTestimonialsStack } from "@/components/sections/service-testimonials-stack";
import { ServiceFAQ } from "@/components/sections/service-faq";
import { ServiceOtherServices } from "@/components/sections/service-other-services";
import { Contact } from "@/components/sections/contact";
import { CONTENT } from "./content";

export const metadata: Metadata = {
  title: "AI & Machine Learning — Create Lyft",
  description: CONTENT.hero.sub,
};

// ── Overview feature icons ────────────────────────────────────────────────────
const overviewFeatures = CONTENT.overview.features.map((f, i) => ({
  ...f,
  icon: [
    // RAG & Knowledge Systems — magnifying glass over document
    <path
      key="rag"
      className="icon-line"
      d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M11 13a3 3 0 1 0 6 0 3 3 0 0 0-6 0 M20 20l-3-3"
    />,
    // Prediction & Classification — branching tree
    <path
      key="prediction"
      className="icon-line"
      d="M12 3 L12 9 M12 9 L6 15 M12 9 L18 15 M6 15 L6 21 M18 15 L18 21 M6 15 L3 21 M18 15 L21 21"
    />,
    // Intelligent Automation — sun/gear with radiating arms
    <>
      <circle key="automation-c" className="icon-line" cx="12" cy="12" r="4" />
      <path
        key="automation-p"
        className="icon-line"
        d="M12 2v3 M12 19v3 M4.22 4.22l2.12 2.12 M17.66 17.66l2.12 2.12 M2 12h3 M19 12h3 M4.22 19.78l2.12-2.12 M17.66 6.34l2.12-2.12"
      />
    </>,
    // AI Strategy & Discovery — compass
    <>
      <circle key="compass-c" className="icon-line" cx="12" cy="12" r="10" />
      <path key="compass-p" className="icon-line" d="M16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z" />
    </>,
  ][i],
}));

// ── Approach SVG visuals ──────────────────────────────────────────────────────

const APPROACH_VISUALS: ReactNode[] = [
  // Panel 1 — "Find the problem worth solving" (discovery, data mapping)
  // Venn diagram: 3 overlapping circles representing "data you have",
  // "problem to solve", and "AI opportunity"
  <div
    key="ai-visual-1"
    className="rounded-[var(--radius-lg)] aspect-[4/3] w-full overflow-hidden"
    style={{ backgroundColor: "#eef0fb" }}
    role="img"
    aria-label="Abstract composition representing technical discovery and data mapping"
  >
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 480 360"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <pattern id="ai-dots-1" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="12" cy="12" r="1.2" fill="rgba(39,24,126,0.09)" />
        </pattern>
        <clipPath id="ai-circle-a">
          <circle cx="186" cy="154" r="98" />
        </clipPath>
        <clipPath id="ai-circle-b">
          <circle cx="294" cy="154" r="98" />
        </clipPath>
        <clipPath id="ai-circle-c">
          <circle cx="240" cy="234" r="98" />
        </clipPath>
      </defs>
      <rect width="480" height="360" fill="url(#ai-dots-1)" />

      {/* Circle A — "Data you have" */}
      <circle cx="186" cy="154" r="98" fill="rgba(117,139,253,0.08)" stroke="rgba(117,139,253,0.30)" strokeWidth="1.4" />
      {/* Circle B — "Problem to solve" */}
      <circle cx="294" cy="154" r="98" fill="rgba(39,24,126,0.07)" stroke="rgba(39,24,126,0.22)" strokeWidth="1.4" />
      {/* Circle C — "AI opportunity" */}
      <circle cx="240" cy="234" r="98" fill="rgba(117,139,253,0.06)" stroke="rgba(117,139,253,0.22)" strokeWidth="1.4" />

      {/* A ∩ B overlap fill */}
      <circle cx="186" cy="154" r="98" fill="rgba(117,139,253,0.14)" clipPath="url(#ai-circle-b)" />
      {/* A ∩ C overlap fill */}
      <circle cx="186" cy="154" r="98" fill="rgba(117,139,253,0.10)" clipPath="url(#ai-circle-c)" />
      {/* B ∩ C overlap fill */}
      <circle cx="294" cy="154" r="98" fill="rgba(39,24,126,0.10)" clipPath="url(#ai-circle-c)" />

      {/* Centre intersection dot */}
      <circle cx="240" cy="183" r="7" fill="rgba(117,139,253,0.55)" stroke="rgba(39,24,126,0.18)" strokeWidth="1.2" />

      {/* Label stubs — faint lines extending outward */}
      <line x1="155" y1="122" x2="106" y2="90" stroke="rgba(39,24,126,0.10)" strokeWidth="1" strokeLinecap="round" />
      <rect x="64" y="78" width="40" height="14" rx="4" fill="rgba(39,24,126,0.05)" stroke="rgba(39,24,126,0.10)" strokeWidth="1" />

      <line x1="325" y1="122" x2="374" y2="90" stroke="rgba(39,24,126,0.10)" strokeWidth="1" strokeLinecap="round" />
      <rect x="376" y="78" width="40" height="14" rx="4" fill="rgba(39,24,126,0.05)" stroke="rgba(39,24,126,0.10)" strokeWidth="1" />

      <line x1="240" y1="310" x2="240" y2="334" stroke="rgba(39,24,126,0.10)" strokeWidth="1" strokeLinecap="round" />
      <rect x="212" y="336" width="56" height="14" rx="4" fill="rgba(39,24,126,0.05)" stroke="rgba(39,24,126,0.10)" strokeWidth="1" />
    </svg>
  </div>,

  // Panel 2 — "Build and validate in real conditions" (model evaluation, metrics)
  // 2×2 confusion matrix with varying fill opacity + a small precision/recall gauge
  <div
    key="ai-visual-2"
    className="rounded-[var(--radius-lg)] aspect-[4/3] w-full overflow-hidden"
    style={{ backgroundColor: "#e8eafe" }}
    role="img"
    aria-label="Abstract composition representing model evaluation and validation metrics"
  >
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 480 360"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <pattern id="ai-dots-2" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="12" cy="12" r="1.2" fill="rgba(39,24,126,0.08)" />
        </pattern>
      </defs>
      <rect width="480" height="360" fill="url(#ai-dots-2)" />

      {/* Confusion matrix — 2×2 grid centred left */}
      {/* TP — strong fill */}
      <rect x="88" y="96" width="108" height="96" rx="6" fill="rgba(117,139,253,0.40)" stroke="rgba(117,139,253,0.30)" strokeWidth="1.2" />
      {/* FP — light fill */}
      <rect x="204" y="96" width="108" height="96" rx="6" fill="rgba(117,139,253,0.10)" stroke="rgba(117,139,253,0.18)" strokeWidth="1.2" />
      {/* FN — light fill */}
      <rect x="88" y="200" width="108" height="96" rx="6" fill="rgba(117,139,253,0.10)" stroke="rgba(117,139,253,0.18)" strokeWidth="1.2" />
      {/* TN — medium fill */}
      <rect x="204" y="200" width="108" height="96" rx="6" fill="rgba(117,139,253,0.28)" stroke="rgba(117,139,253,0.24)" strokeWidth="1.2" />

      {/* Matrix axis labels (row/col ticks) */}
      <line x1="80" y1="144" x2="88" y2="144" stroke="rgba(39,24,126,0.14)" strokeWidth="1" strokeLinecap="round" />
      <line x1="80" y1="248" x2="88" y2="248" stroke="rgba(39,24,126,0.10)" strokeWidth="1" strokeLinecap="round" />
      <line x1="142" y1="88" x2="142" y2="96" stroke="rgba(39,24,126,0.14)" strokeWidth="1" strokeLinecap="round" />
      <line x1="258" y1="88" x2="258" y2="96" stroke="rgba(39,24,126,0.10)" strokeWidth="1" strokeLinecap="round" />

      {/* Circular accuracy gauge — right side */}
      {/* Track */}
      <circle cx="380" cy="190" r="64" fill="none" stroke="rgba(39,24,126,0.08)" strokeWidth="10" />
      {/* Arc — 94% = 338.4deg */}
      <circle
        cx="380"
        cy="190"
        r="64"
        fill="none"
        stroke="rgba(117,139,253,0.55)"
        strokeWidth="10"
        strokeLinecap="round"
        strokeDasharray="380 402"
        strokeDashoffset="100"
        transform="rotate(-90 380 190)"
      />
      {/* Centre value lines */}
      <rect x="355" y="183" width="50" height="8" rx="3" fill="rgba(117,139,253,0.40)" />
      <rect x="363" y="197" width="34" height="6" rx="3" fill="rgba(39,24,126,0.12)" />

      {/* Connector — matrix to gauge */}
      <line x1="320" y1="180" x2="310" y2="180" stroke="rgba(39,24,126,0.08)" strokeWidth="1" strokeLinecap="round" strokeDasharray="3 4" />
      <line x1="310" y1="180" x2="310" y2="190" stroke="rgba(39,24,126,0.08)" strokeWidth="1" strokeLinecap="round" strokeDasharray="3 4" />
      <line x1="310" y1="190" x2="316" y2="190" stroke="rgba(39,24,126,0.08)" strokeWidth="1" strokeLinecap="round" strokeDasharray="3 4" />
    </svg>
  </div>,

  // Panel 3 — "Deploy, monitor, and keep it honest" (monitoring, drift)
  // Two overlapping distribution curves — original vs drifted
  <div
    key="ai-visual-3"
    className="rounded-[var(--radius-lg)] aspect-[4/3] w-full overflow-hidden"
    style={{ backgroundColor: "#e8e9f0" }}
    role="img"
    aria-label="Abstract composition representing model monitoring and data drift detection"
  >
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 480 360"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <pattern id="ai-dots-3" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="12" cy="12" r="1.2" fill="rgba(39,24,126,0.09)" />
        </pattern>
      </defs>
      <rect width="480" height="360" fill="url(#ai-dots-3)" />

      {/* Grid baseline */}
      <line x1="56" y1="290" x2="424" y2="290" stroke="rgba(39,24,126,0.10)" strokeWidth="1" />
      <line x1="56" y1="240" x2="424" y2="240" stroke="rgba(39,24,126,0.06)" strokeWidth="1" strokeDasharray="4 6" />
      <line x1="56" y1="190" x2="424" y2="190" stroke="rgba(39,24,126,0.06)" strokeWidth="1" strokeDasharray="4 6" />
      <line x1="56" y1="140" x2="424" y2="140" stroke="rgba(39,24,126,0.06)" strokeWidth="1" strokeDasharray="4 6" />
      <line x1="56" y1="290" x2="56" y2="100" stroke="rgba(39,24,126,0.10)" strokeWidth="1" />

      {/* Original distribution — symmetric bell curve centred ~200 */}
      <path
        d="M56,290 C80,290 110,285 140,268 C165,250 185,210 200,156 C215,100 225,76 240,68 C255,76 265,100 280,156 C295,210 315,250 340,268 C370,285 400,290 424,290"
        fill="rgba(117,139,253,0.12)"
        stroke="rgba(117,139,253,0.45)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />

      {/* Drifted distribution — shifted right and flatter, centred ~290 */}
      <path
        d="M100,290 C130,290 160,288 190,282 C220,274 245,256 265,230 C280,208 290,180 305,160 C320,138 330,126 345,122 C360,118 370,126 385,148 C400,170 415,210 424,250 L424,290 Z"
        fill="rgba(39,24,126,0.06)"
        stroke="rgba(39,24,126,0.22)"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="6 4"
      />

      {/* Overlap zone highlight */}
      <path
        d="M190,282 C220,274 245,256 265,230 C280,208 290,180 295,165 C275,182 252,218 235,242 C218,262 200,278 190,282 Z"
        fill="rgba(117,139,253,0.14)"
      />

      {/* Drift arrow — pointing from original peak toward drifted peak */}
      <path
        d="M248,110 C268,108 300,116 326,128"
        fill="none"
        stroke="rgba(39,24,126,0.22)"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeDasharray="4 4"
      />
      <path
        d="M318,122 L328,130 L316,134"
        fill="none"
        stroke="rgba(39,24,126,0.22)"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Alert dot — at drift peak */}
      <circle cx="345" cy="122" r="5.5" fill="rgba(117,139,253,0.35)" stroke="rgba(39,24,126,0.20)" strokeWidth="1.2" />
      <circle cx="345" cy="122" r="2.5" fill="rgba(39,24,126,0.30)" />
    </svg>
  </div>,
];

// ── Testimonial visuals ───────────────────────────────────────────────────────

// Visual 1 — Catherine Drummond / legal RAG
// Stacked document silhouettes with a search/query arc connecting them.
// White shapes on blue (#758bfd).
const testimonialVisual1: ReactNode = (
  <div
    className="w-full h-full"
    style={{ backgroundColor: "#758bfd" }}
  >
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 420 420"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
    >
      <defs>
        <pattern id="ai-t1-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="10" cy="10" r="1" fill="rgba(255,255,255,0.10)" />
        </pattern>
      </defs>
      <rect width="420" height="420" fill="url(#ai-t1-dots)" />

      {/* Document stack — 3 documents, offset slightly */}
      {/* Document 3 — back */}
      <rect x="144" y="108" width="110" height="140" rx="6" fill="rgba(255,255,255,0.10)" stroke="rgba(255,255,255,0.20)" strokeWidth="1.2" />
      <line x1="164" y1="136" x2="234" y2="136" stroke="rgba(255,255,255,0.20)" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="164" y1="150" x2="220" y2="150" stroke="rgba(255,255,255,0.14)" strokeWidth="1.2" strokeLinecap="round" />

      {/* Document 2 — middle */}
      <rect x="158" y="124" width="110" height="140" rx="6" fill="rgba(255,255,255,0.16)" stroke="rgba(255,255,255,0.28)" strokeWidth="1.2" />
      <line x1="178" y1="152" x2="248" y2="152" stroke="rgba(255,255,255,0.28)" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="178" y1="166" x2="234" y2="166" stroke="rgba(255,255,255,0.18)" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="178" y1="180" x2="240" y2="180" stroke="rgba(255,255,255,0.14)" strokeWidth="1.2" strokeLinecap="round" />

      {/* Document 1 — front */}
      <rect x="172" y="140" width="110" height="140" rx="6" fill="rgba(255,255,255,0.22)" stroke="rgba(255,255,255,0.38)" strokeWidth="1.4" />
      {/* Dog-ear fold */}
      <path d="M258 140 L282 164 L258 164 Z" fill="rgba(255,255,255,0.18)" stroke="rgba(255,255,255,0.30)" strokeWidth="1" />
      <line x1="192" y1="172" x2="258" y2="172" stroke="rgba(255,255,255,0.40)" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="192" y1="186" x2="258" y2="186" stroke="rgba(255,255,255,0.25)" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="192" y1="200" x2="248" y2="200" stroke="rgba(255,255,255,0.25)" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="192" y1="214" x2="252" y2="214" stroke="rgba(255,255,255,0.18)" strokeWidth="1.2" strokeLinecap="round" />
      {/* Citation highlight strip */}
      <rect x="192" y="228" width="66" height="10" rx="3" fill="rgba(255,255,255,0.28)" />

      {/* Search arc — curved query line from document to magnifying circle */}
      <path
        d="M227 140 C227 100 290 84 310 110"
        fill="none"
        stroke="rgba(255,255,255,0.30)"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeDasharray="5 4"
      />
      {/* Magnifying glass */}
      <circle cx="318" cy="122" r="22" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.38)" strokeWidth="1.4" />
      <circle cx="318" cy="122" r="12" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="1.6" />
      <line x1="326" y1="130" x2="338" y2="142" stroke="rgba(255,255,255,0.55)" strokeWidth="2" strokeLinecap="round" />

      {/* Result citation tag */}
      <rect x="104" y="296" width="212" height="32" rx="8" fill="rgba(255,255,255,0.14)" stroke="rgba(255,255,255,0.28)" strokeWidth="1.2" />
      <circle cx="122" cy="312" r="5" fill="rgba(255,255,255,0.40)" />
      <rect x="136" y="306" width="80" height="7" rx="3" fill="rgba(255,255,255,0.35)" />
      <rect x="136" y="317" width="56" height="5" rx="2" fill="rgba(255,255,255,0.20)" />
    </svg>
  </div>
);

// Visual 2 — Marcus Teo / invoice automation
// Funnel — many inputs narrowing to processed outputs with a review branch.
// Ink on peach (#fbe4d2).
const testimonialVisual2: ReactNode = (
  <div
    className="w-full h-full"
    style={{ backgroundColor: "#fbe4d2" }}
  >
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 420 420"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
    >
      <defs>
        <pattern id="ai-t2-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="10" cy="10" r="1" fill="rgba(39,24,126,0.08)" />
        </pattern>
      </defs>
      <rect width="420" height="420" fill="url(#ai-t2-dots)" />

      {/* Input items — 5 small document rects at top */}
      {[0, 1, 2, 3, 4].map((i) => (
        <rect
          key={`invoice-in-${i}`}
          x={52 + i * 64}
          y={56}
          width={48}
          height={60}
          rx="5"
          fill="rgba(39,24,126,0.08)"
          stroke="rgba(39,24,126,0.18)"
          strokeWidth="1.2"
        />
      ))}
      {/* Line labels on each doc */}
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={`invoice-lines-${i}`}>
          <line x1={62 + i * 64} y1={76} x2={90 + i * 64} y2={76} stroke="rgba(39,24,126,0.20)" strokeWidth="1" strokeLinecap="round" />
          <line x1={62 + i * 64} y1={86} x2={86 + i * 64} y2={86} stroke="rgba(39,24,126,0.13)" strokeWidth="1" strokeLinecap="round" />
          <line x1={62 + i * 64} y1={96} x2={88 + i * 64} y2={96} stroke="rgba(39,24,126,0.13)" strokeWidth="1" strokeLinecap="round" />
        </g>
      ))}

      {/* Funnel shape */}
      <path
        d="M76 120 L344 120 L272 236 L148 236 Z"
        fill="rgba(39,24,126,0.06)"
        stroke="rgba(39,24,126,0.18)"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />

      {/* Auto-processed stream — straight down */}
      <rect x="186" y="244" width="48" height="80" rx="0" fill="rgba(39,24,126,0.06)" stroke="rgba(39,24,126,0.14)" strokeWidth="1" strokeDasharray="0" />
      {/* Processed output doc */}
      <rect x="176" y="332" width="68" height="56" rx="5" fill="rgba(39,24,126,0.10)" stroke="rgba(39,24,126,0.22)" strokeWidth="1.2" />
      <line x1="192" y1="348" x2="228" y2="348" stroke="rgba(39,24,126,0.28)" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="192" y1="358" x2="220" y2="358" stroke="rgba(39,24,126,0.18)" strokeWidth="1.2" strokeLinecap="round" />
      {/* Checkmark on output */}
      <polyline points="192,370 200,378 218,360" fill="none" stroke="rgba(39,24,126,0.40)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />

      {/* Review branch — branching off funnel right side */}
      <path
        d="M272 236 L318 268 L318 320"
        fill="none"
        stroke="rgba(39,24,126,0.18)"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="5 4"
      />
      {/* Review flag */}
      <rect x="300" y="320" width="54" height="40" rx="5" fill="rgba(39,24,126,0.06)" stroke="rgba(39,24,126,0.16)" strokeWidth="1" strokeDasharray="4 3" />
      <line x1="314" y1="334" x2="342" y2="334" stroke="rgba(39,24,126,0.18)" strokeWidth="1" strokeLinecap="round" />
      <line x1="314" y1="344" x2="336" y2="344" stroke="rgba(39,24,126,0.12)" strokeWidth="1" strokeLinecap="round" />

      {/* % label above auto stream */}
      <rect x="176" y="220" width="68" height="20" rx="5" fill="rgba(39,24,126,0.08)" stroke="rgba(39,24,126,0.14)" strokeWidth="1" />
      <rect x="186" y="227" width="48" height="7" rx="3" fill="rgba(39,24,126,0.18)" />
    </svg>
  </div>
);

// Visual 3 — Renata Kowalski / churn prediction skeptic
// A descending line that flattens and reverses upward — churn reversed.
// Ink on paper-2 (#e8e9f0).
const testimonialVisual3: ReactNode = (
  <div
    className="w-full h-full"
    style={{ backgroundColor: "#e8e9f0" }}
  >
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 420 420"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
    >
      <defs>
        <pattern id="ai-t3-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="10" cy="10" r="1" fill="rgba(39,24,126,0.09)" />
        </pattern>
      </defs>
      <rect width="420" height="420" fill="url(#ai-t3-dots)" />

      {/* Grid */}
      <line x1="64" y1="330" x2="380" y2="330" stroke="rgba(39,24,126,0.10)" strokeWidth="1" />
      <line x1="64" y1="280" x2="380" y2="280" stroke="rgba(39,24,126,0.06)" strokeWidth="1" strokeDasharray="4 6" />
      <line x1="64" y1="230" x2="380" y2="230" stroke="rgba(39,24,126,0.06)" strokeWidth="1" strokeDasharray="4 6" />
      <line x1="64" y1="180" x2="380" y2="180" stroke="rgba(39,24,126,0.06)" strokeWidth="1" strokeDasharray="4 6" />
      <line x1="64" y1="130" x2="380" y2="130" stroke="rgba(39,24,126,0.06)" strokeWidth="1" strokeDasharray="4 6" />
      <line x1="64" y1="330" x2="64" y2="100" stroke="rgba(39,24,126,0.10)" strokeWidth="1" />

      {/* Descending segment — before intervention */}
      <path
        d="M64,160 C100,170 130,200 160,230 C185,252 200,272 220,290"
        fill="none"
        stroke="rgba(39,24,126,0.25)"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Shaded area under descent */}
      <path
        d="M64,160 C100,170 130,200 160,230 C185,252 200,272 220,290 L220,330 L64,330 Z"
        fill="rgba(39,24,126,0.05)"
      />

      {/* Intervention marker */}
      <line x1="220" y1="100" x2="220" y2="330" stroke="rgba(117,139,253,0.25)" strokeWidth="1" strokeDasharray="4 4" />
      <circle cx="220" cy="290" r="6" fill="rgba(117,139,253,0.55)" stroke="rgba(39,24,126,0.18)" strokeWidth="1.2" />

      {/* Flattening + recovery segment — after intervention */}
      <path
        d="M220,290 C240,288 260,280 285,260 C310,240 340,212 370,190"
        fill="none"
        stroke="rgba(117,139,253,0.70)"
        strokeWidth="2.2"
        strokeLinecap="round"
      />

      {/* Terminal arrow on recovery */}
      <path
        d="M360,194 L372,188 L364,202"
        fill="none"
        stroke="rgba(117,139,253,0.70)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Data points on recovery path */}
      <circle cx="260" cy="278" r="3.5" fill="rgba(117,139,253,0.55)" />
      <circle cx="310" cy="244" r="3.5" fill="rgba(117,139,253,0.55)" />
      <circle cx="356" cy="196" r="3.5" fill="rgba(117,139,253,0.55)" />

      {/* Recovery label tag */}
      <rect x="290" y="152" width="78" height="26" rx="6" fill="rgba(117,139,253,0.14)" stroke="rgba(117,139,253,0.30)" strokeWidth="1" />
      <rect x="302" y="160" width="54" height="7" rx="3" fill="rgba(39,24,126,0.18)" />
      <rect x="302" y="171" width="38" height="5" rx="2" fill="rgba(39,24,126,0.10)" />
      <line x1="329" y1="178" x2="329" y2="190" stroke="rgba(117,139,253,0.25)" strokeWidth="1" strokeLinecap="round" />
    </svg>
  </div>
);

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function AIMachineLearningPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <div className="shell">
          <ServiceHero
            label={CONTENT.hero.label}
            headline={CONTENT.hero.headline}
            sub={CONTENT.hero.sub}
            accentColor="#758bfd"
            iconBg="bg-blue"
            iconStroke="text-paper"
            iconPath={
              <>
                <circle className="icon-line" cx="12" cy="12" r="3" />
                <path
                  className="icon-line"
                  d="M12 3 L12 6 M12 18 L12 21 M3 12 L6 12 M18 12 L21 12 M5.6 5.6 L7.7 7.7 M16.3 16.3 L18.4 18.4 M5.6 18.4 L7.7 16.3 M16.3 7.7 L18.4 5.6"
                />
              </>
            }
          />
        </div>

        {/* Overview — full bleed (blue bg — dark) */}
        <ServiceOverview
          headline={CONTENT.overview.headline}
          body={CONTENT.overview.body}
          features={overviewFeatures}
          bg="#758bfd"
          dark={true}
        />

        {/* Approach */}
        <div className="shell">
          <ServiceApproach panels={CONTENT.approach} />
        </div>

        {/* Testimonials — full bleed sticky stack */}
        <ServiceTestimonialsStack
          testimonials={[
            { ...CONTENT.testimonials[0], bg: "#758bfd", visual: testimonialVisual1 },
            { ...CONTENT.testimonials[1], bg: "#fbe4d2", visual: testimonialVisual2 },
            { ...CONTENT.testimonials[2], bg: "#e8e9f0", visual: testimonialVisual3 },
          ]}
        />

        {/* FAQ */}
        <div className="shell">
          <ServiceFAQ questions={CONTENT.faq} />
        </div>

        {/* Other services — full bleed (paper-2 bg) */}
        <ServiceOtherServices exclude="AI & Machine Learning" />

        {/* Contact */}
        <Contact />
      </main>
    </>
  );
}
