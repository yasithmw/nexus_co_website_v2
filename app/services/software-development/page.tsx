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
  title: "Software Development — Create Lyft",
  description: CONTENT.hero.sub,
};

// ── Overview feature icons ────────────────────────────────────────────────────
const overviewFeatures = CONTENT.overview.features.map((f, i) => ({
  ...f,
  icon: [
    // Web & Platform Engineering — browser/window frame
    <path
      key="web-platform"
      className="icon-line"
      d="M3 5 L3 19 L21 19 L21 5 Z M3 9 L21 9 M7 7 L7 7.01 M10 7 L10 7.01 M13 7 L13 7.01"
    />,
    // Internal Tools & Automation — gear/cog
    <>
      <circle key="automation-circle" className="icon-line" cx="12" cy="12" r="3" />
      <path
        key="automation-path"
        className="icon-line"
        d="M12 2 L12 5 M12 19 L12 22 M4.22 4.22 L6.34 6.34 M17.66 17.66 L19.78 19.78 M2 12 L5 12 M19 12 L22 12 M4.22 19.78 L6.34 17.66 M17.66 6.34 L19.78 4.22"
      />
    </>,
    // API & Integrations — two nodes connected
    <>
      <circle key="api-left" className="icon-line" cx="6" cy="12" r="3" />
      <circle key="api-right" className="icon-line" cx="18" cy="12" r="3" />
      <path key="api-line" className="icon-line" d="M9 12 L15 12" />
    </>,
    // Technical Discovery & Architecture — compass/search
    <>
      <circle key="discovery-circle" className="icon-line" cx="11" cy="11" r="8" />
      <path key="discovery-line" className="icon-line" d="M21 21 L16.65 16.65" />
      <path key="discovery-cross" className="icon-line" d="M11 8 L11 14 M8 11 L14 11" />
    </>,
  ][i],
}));

// ── Approach SVG visuals ──────────────────────────────────────────────────────

const APPROACH_VISUALS: ReactNode[] = [
  // Panel 1 — "Understand the problem before writing a line" (discovery, architecture)
  // Wireframe-style architecture diagram: boxes connected by directional lines.
  <div
    key="sw-visual-1"
    className="rounded-[var(--radius-lg)] aspect-[4/3] w-full overflow-hidden"
    style={{ backgroundColor: "#f0f1f8" }}
    role="img"
    aria-label="Abstract composition representing technical discovery and architecture"
  >
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 480 360"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <pattern id="sw-dots-1" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="12" cy="12" r="1.2" fill="rgba(39,24,126,0.10)" />
        </pattern>
      </defs>
      <rect width="480" height="360" fill="url(#sw-dots-1)" />

      {/* Top-centre node — the "product" */}
      <rect x="194" y="48" width="92" height="46" rx="6" fill="rgba(39,24,126,0.08)" stroke="rgba(39,24,126,0.22)" strokeWidth="1.4" />
      <line x1="218" y1="68" x2="262" y2="68" stroke="rgba(39,24,126,0.20)" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="218" y1="76" x2="250" y2="76" stroke="rgba(39,24,126,0.13)" strokeWidth="1.4" strokeLinecap="round" />

      {/* Left child node */}
      <rect x="72" y="168" width="92" height="46" rx="6" fill="rgba(39,24,126,0.06)" stroke="rgba(39,24,126,0.16)" strokeWidth="1.2" />
      <line x1="96" y1="188" x2="140" y2="188" stroke="rgba(39,24,126,0.15)" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="96" y1="196" x2="128" y2="196" stroke="rgba(39,24,126,0.10)" strokeWidth="1.2" strokeLinecap="round" />

      {/* Centre child node */}
      <rect x="194" y="168" width="92" height="46" rx="6" fill="rgba(39,24,126,0.09)" stroke="rgba(39,24,126,0.20)" strokeWidth="1.4" />
      <line x1="218" y1="188" x2="262" y2="188" stroke="rgba(39,24,126,0.18)" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="218" y1="196" x2="250" y2="196" stroke="rgba(39,24,126,0.11)" strokeWidth="1.4" strokeLinecap="round" />

      {/* Right child node */}
      <rect x="316" y="168" width="92" height="46" rx="6" fill="rgba(39,24,126,0.06)" stroke="rgba(39,24,126,0.16)" strokeWidth="1.2" />
      <line x1="340" y1="188" x2="384" y2="188" stroke="rgba(39,24,126,0.15)" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="340" y1="196" x2="372" y2="196" stroke="rgba(39,24,126,0.10)" strokeWidth="1.2" strokeLinecap="round" />

      {/* Connector: top node to left */}
      <path d="M194 94 L118 168" fill="none" stroke="rgba(39,24,126,0.14)" strokeWidth="1" strokeLinecap="round" strokeDasharray="4 5" />
      {/* Connector: top node to centre */}
      <line x1="240" y1="94" x2="240" y2="168" stroke="rgba(39,24,126,0.18)" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="4 5" />
      {/* Connector: top node to right */}
      <path d="M286 94 L362 168" fill="none" stroke="rgba(39,24,126,0.14)" strokeWidth="1" strokeLinecap="round" strokeDasharray="4 5" />

      {/* Arrow heads on connectors */}
      <polygon points="118,162 112,172 124,172" fill="rgba(39,24,126,0.14)" />
      <polygon points="240,162 234,172 246,172" fill="rgba(39,24,126,0.18)" />
      <polygon points="362,162 356,172 368,172" fill="rgba(39,24,126,0.14)" />

      {/* Bottom layer — data store */}
      <rect x="158" y="272" width="164" height="40" rx="20" fill="rgba(39,24,126,0.05)" stroke="rgba(39,24,126,0.14)" strokeWidth="1" />
      <path d="M194 268 L240 272" fill="none" stroke="rgba(39,24,126,0.12)" strokeWidth="1" strokeLinecap="round" />
      <path d="M286 268 L240 272" fill="none" stroke="rgba(39,24,126,0.12)" strokeWidth="1" strokeLinecap="round" />
    </svg>
  </div>,

  // Panel 2 — "Senior engineers, start to finish" (code, quality, review)
  // Code-editor composition: horizontal lines of varying widths with bracket elements.
  <div
    key="sw-visual-2"
    className="rounded-[var(--radius-lg)] aspect-[4/3] w-full overflow-hidden"
    style={{ backgroundColor: "#e8eafe" }}
    role="img"
    aria-label="Abstract composition representing code quality and senior engineering"
  >
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 480 360"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <pattern id="sw-dots-2" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="12" cy="12" r="1.2" fill="rgba(39,24,126,0.08)" />
        </pattern>
      </defs>
      <rect width="480" height="360" fill="url(#sw-dots-2)" />

      {/* Editor window chrome */}
      <rect x="60" y="52" width="360" height="256" rx="10" fill="rgba(39,24,126,0.04)" stroke="rgba(39,24,126,0.14)" strokeWidth="1.2" />
      <line x1="60" y1="80" x2="420" y2="80" stroke="rgba(39,24,126,0.10)" strokeWidth="1" />
      {/* Traffic lights */}
      <circle cx="82" cy="66" r="5" fill="rgba(39,24,126,0.12)" />
      <circle cx="98" cy="66" r="5" fill="rgba(39,24,126,0.10)" />
      <circle cx="114" cy="66" r="5" fill="rgba(39,24,126,0.08)" />

      {/* Line numbers track */}
      <rect x="60" y="80" width="36" height="228" rx="0" fill="rgba(39,24,126,0.03)" />

      {/* Code lines — varying widths to suggest syntax */}
      {/* Line 1 — keyword */}
      <rect x="116" y="102" width="56" height="8" rx="3" fill="rgba(117,139,253,0.45)" />
      <rect x="180" y="102" width="88" height="8" rx="3" fill="rgba(39,24,126,0.15)" />
      {/* Line 2 — indented */}
      <rect x="132" y="120" width="44" height="8" rx="3" fill="rgba(39,24,126,0.10)" />
      <rect x="184" y="120" width="120" height="8" rx="3" fill="rgba(39,24,126,0.18)" />
      {/* Line 3 */}
      <rect x="132" y="138" width="36" height="8" rx="3" fill="rgba(117,139,253,0.30)" />
      <rect x="176" y="138" width="72" height="8" rx="3" fill="rgba(39,24,126,0.12)" />
      <rect x="256" y="138" width="48" height="8" rx="3" fill="rgba(39,24,126,0.08)" />
      {/* Line 4 — blank-ish */}
      <rect x="132" y="156" width="24" height="8" rx="3" fill="rgba(39,24,126,0.07)" />
      {/* Line 5 */}
      <rect x="116" y="174" width="44" height="8" rx="3" fill="rgba(117,139,253,0.40)" />
      <rect x="168" y="174" width="100" height="8" rx="3" fill="rgba(39,24,126,0.14)" />
      {/* Line 6 */}
      <rect x="132" y="192" width="56" height="8" rx="3" fill="rgba(39,24,126,0.10)" />
      <rect x="196" y="192" width="80" height="8" rx="3" fill="rgba(39,24,126,0.16)" />
      {/* Line 7 */}
      <rect x="132" y="210" width="32" height="8" rx="3" fill="rgba(39,24,126,0.08)" />
      {/* Line 8 */}
      <rect x="116" y="228" width="64" height="8" rx="3" fill="rgba(117,139,253,0.25)" />
      <rect x="188" y="228" width="104" height="8" rx="3" fill="rgba(39,24,126,0.12)" />
      {/* Line 9 */}
      <rect x="132" y="246" width="48" height="8" rx="3" fill="rgba(39,24,126,0.09)" />
      <rect x="188" y="246" width="60" height="8" rx="3" fill="rgba(39,24,126,0.14)" />

      {/* Cursor blink */}
      <rect x="256" y="246" width="2" height="10" rx="1" fill="rgba(117,139,253,0.70)" />

      {/* Review comment callout — right side */}
      <rect x="350" y="118" width="60" height="32" rx="6" fill="rgba(255,255,255,0.60)" stroke="rgba(39,24,126,0.12)" strokeWidth="1" />
      <path d="M350 132 L342 136 L350 140" fill="rgba(255,255,255,0.60)" stroke="rgba(39,24,126,0.12)" strokeWidth="1" />
      <rect x="358" y="126" width="36" height="4" rx="2" fill="rgba(39,24,126,0.14)" />
      <rect x="358" y="134" width="28" height="4" rx="2" fill="rgba(39,24,126,0.09)" />
    </svg>
  </div>,

  // Panel 3 — "Launch it. Then make sure it holds." (monitoring, stability)
  // Health monitor: flat line that dips and recovers, plus a grid of status dots.
  <div
    key="sw-visual-3"
    className="rounded-[var(--radius-lg)] aspect-[4/3] w-full overflow-hidden"
    style={{ backgroundColor: "#e8e9f0" }}
    role="img"
    aria-label="Abstract composition representing post-launch monitoring and stability"
  >
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 480 360"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <pattern id="sw-dots-3" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="12" cy="12" r="1.2" fill="rgba(39,24,126,0.09)" />
        </pattern>
      </defs>
      <rect width="480" height="360" fill="url(#sw-dots-3)" />

      {/* Grid lines */}
      <line x1="72" y1="280" x2="408" y2="280" stroke="rgba(39,24,126,0.10)" strokeWidth="1" />
      <line x1="72" y1="240" x2="408" y2="240" stroke="rgba(39,24,126,0.06)" strokeWidth="1" strokeDasharray="4 6" />
      <line x1="72" y1="200" x2="408" y2="200" stroke="rgba(39,24,126,0.06)" strokeWidth="1" strokeDasharray="4 6" />
      <line x1="72" y1="160" x2="408" y2="160" stroke="rgba(39,24,126,0.06)" strokeWidth="1" strokeDasharray="4 6" />

      {/* Uptime line: flat, dips, recovers, continues flat */}
      <path
        d="M72,200 L160,200 L176,240 L192,270 L208,255 L224,230 L240,210 L256,200 L408,200"
        fill="none"
        stroke="rgba(39,24,126,0.22)"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Shaded area under the dip — showing the incident */}
      <path
        d="M160,200 L176,240 L192,270 L208,255 L224,230 L240,210 L256,200 L160,200 Z"
        fill="rgba(174,184,254,0.18)"
      />

      {/* Recovery path highlight */}
      <path
        d="M224,230 L240,210 L256,200 L408,200"
        fill="none"
        stroke="rgba(117,139,253,0.55)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Incident marker */}
      <circle cx="192" cy="270" r="4.5" fill="rgba(174,184,254,0.70)" stroke="rgba(39,24,126,0.20)" strokeWidth="1.2" />

      {/* Status dot grid — bottom right — service health checks */}
      {[0,1,2,3,4].map((col) =>
        [0,1,2].map((row) => {
          const x = 300 + col * 18;
          const y = 96 + row * 18;
          const isGrey = (col === 2 && row === 1) || (col === 3 && row === 0);
          return (
            <circle
              key={`dot-${col}-${row}`}
              cx={x}
              cy={y}
              r="5"
              fill={isGrey ? "rgba(39,24,126,0.12)" : "rgba(117,139,253,0.45)"}
            />
          );
        })
      )}

      {/* Vertical axis tick */}
      <line x1="72" y1="280" x2="72" y2="80" stroke="rgba(39,24,126,0.10)" strokeWidth="1" />
    </svg>
  </div>,
];

// ── Testimonial visuals ───────────────────────────────────────────────────────

// Visual 1 — Marcus Leung / fintech platform rebuild
// Layered stack of rectangles suggesting infrastructure layers. White on blue.
const testimonialVisual1: ReactNode = (
  <div
    className="w-full h-full"
    style={{ backgroundColor: "#aeb8fe" }}
  >
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 420 420"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
    >
      <defs>
        <pattern id="sw-t1-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="10" cy="10" r="1" fill="rgba(255,255,255,0.12)" />
        </pattern>
      </defs>
      <rect width="420" height="420" fill="url(#sw-t1-dots)" />

      {/* Infrastructure layer stack — 4 layers, each progressively taller */}
      {/* Layer 4 — bottom (data) */}
      <rect x="80" y="290" width="260" height="44" rx="6" fill="rgba(255,255,255,0.14)" stroke="rgba(255,255,255,0.22)" strokeWidth="1.2" />
      <line x1="106" y1="312" x2="174" y2="312" stroke="rgba(255,255,255,0.35)" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="106" y1="320" x2="152" y2="320" stroke="rgba(255,255,255,0.20)" strokeWidth="1.2" strokeLinecap="round" />

      {/* Layer 3 — services */}
      <rect x="96" y="238" width="228" height="44" rx="6" fill="rgba(255,255,255,0.18)" stroke="rgba(255,255,255,0.28)" strokeWidth="1.2" />
      <line x1="120" y1="260" x2="196" y2="260" stroke="rgba(255,255,255,0.40)" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="120" y1="268" x2="172" y2="268" stroke="rgba(255,255,255,0.22)" strokeWidth="1.2" strokeLinecap="round" />

      {/* Layer 2 — api */}
      <rect x="112" y="186" width="196" height="44" rx="6" fill="rgba(255,255,255,0.22)" stroke="rgba(255,255,255,0.34)" strokeWidth="1.2" />
      <line x1="136" y1="208" x2="220" y2="208" stroke="rgba(255,255,255,0.45)" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="136" y1="216" x2="192" y2="216" stroke="rgba(255,255,255,0.25)" strokeWidth="1.2" strokeLinecap="round" />

      {/* Layer 1 — top (client/ui) */}
      <rect x="128" y="134" width="164" height="44" rx="6" fill="rgba(255,255,255,0.28)" stroke="rgba(255,255,255,0.42)" strokeWidth="1.4" />
      <line x1="152" y1="156" x2="240" y2="156" stroke="rgba(255,255,255,0.55)" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="152" y1="164" x2="212" y2="164" stroke="rgba(255,255,255,0.30)" strokeWidth="1.2" strokeLinecap="round" />

      {/* Connecting verticals between layers */}
      <line x1="210" y1="178" x2="210" y2="186" stroke="rgba(255,255,255,0.25)" strokeWidth="1" strokeLinecap="round" />
      <line x1="210" y1="230" x2="210" y2="238" stroke="rgba(255,255,255,0.20)" strokeWidth="1" strokeLinecap="round" />
      <line x1="210" y1="282" x2="210" y2="290" stroke="rgba(255,255,255,0.16)" strokeWidth="1" strokeLinecap="round" />
    </svg>
  </div>
);

// Visual 2 — Sarah Kowalski / internal tools
// Checklist/process flow: boxes with checkmarks and connected steps. Ink on peach.
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
        <pattern id="sw-t2-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="10" cy="10" r="1" fill="rgba(39,24,126,0.09)" />
        </pattern>
      </defs>
      <rect width="420" height="420" fill="url(#sw-t2-dots)" />

      {/* Process flow items — 4 steps connected by a vertical line */}
      {/* Vertical connector */}
      <line x1="130" y1="118" x2="130" y2="302" stroke="rgba(39,24,126,0.12)" strokeWidth="1.4" strokeLinecap="round" strokeDasharray="4 6" />

      {/* Step 1 — done */}
      <rect x="106" y="100" width="48" height="48" rx="8" fill="rgba(39,24,126,0.08)" stroke="rgba(39,24,126,0.18)" strokeWidth="1.2" />
      <polyline points="117,124 127,134 145,114" fill="none" stroke="rgba(39,24,126,0.45)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="176" y="112" width="140" height="8" rx="3" fill="rgba(39,24,126,0.18)" />
      <rect x="176" y="124" width="104" height="6" rx="3" fill="rgba(39,24,126,0.10)" />

      {/* Step 2 — done */}
      <rect x="106" y="170" width="48" height="48" rx="8" fill="rgba(39,24,126,0.08)" stroke="rgba(39,24,126,0.18)" strokeWidth="1.2" />
      <polyline points="117,194 127,204 145,184" fill="none" stroke="rgba(39,24,126,0.45)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="176" y="182" width="120" height="8" rx="3" fill="rgba(39,24,126,0.18)" />
      <rect x="176" y="194" width="88" height="6" rx="3" fill="rgba(39,24,126,0.10)" />

      {/* Step 3 — done */}
      <rect x="106" y="240" width="48" height="48" rx="8" fill="rgba(39,24,126,0.08)" stroke="rgba(39,24,126,0.18)" strokeWidth="1.2" />
      <polyline points="117,264 127,274 145,254" fill="none" stroke="rgba(39,24,126,0.45)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="176" y="252" width="132" height="8" rx="3" fill="rgba(39,24,126,0.18)" />
      <rect x="176" y="264" width="96" height="6" rx="3" fill="rgba(39,24,126,0.10)" />

      {/* Step 4 — in progress */}
      <rect x="106" y="310" width="48" height="48" rx="8" fill="rgba(39,24,126,0.04)" stroke="rgba(39,24,126,0.12)" strokeWidth="1" strokeDasharray="4 4" />
      <rect x="176" y="322" width="108" height="8" rx="3" fill="rgba(39,24,126,0.10)" />
      <rect x="176" y="334" width="76" height="6" rx="3" fill="rgba(39,24,126,0.07)" />
    </svg>
  </div>
);

// Visual 3 — James Okafor / product pivot
// Two paths: one abandoned (dashed/fading), one solid continuing forward. Ink on paper.
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
        <pattern id="sw-t3-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="10" cy="10" r="1" fill="rgba(39,24,126,0.09)" />
        </pattern>
      </defs>
      <rect width="420" height="420" fill="url(#sw-t3-dots)" />

      {/* Origin point */}
      <circle cx="90" cy="210" r="6" fill="rgba(39,24,126,0.28)" />

      {/* Abandoned path — dashed, fades toward top-right, ends abruptly */}
      <path
        d="M96,210 C140,200 180,170 220,140 L240,124"
        fill="none"
        stroke="rgba(39,24,126,0.20)"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeDasharray="6 5"
      />
      {/* End of abandoned path — crossed out */}
      <line x1="232" y1="116" x2="248" y2="132" stroke="rgba(39,24,126,0.22)" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="248" y1="116" x2="232" y2="132" stroke="rgba(39,24,126,0.22)" strokeWidth="1.4" strokeLinecap="round" />

      {/* Pivot arc — smooth curve from origin downward then pivoting right */}
      <path
        d="M96,210 C130,216 170,230 200,220 C230,210 270,200 310,195 L340,192"
        fill="none"
        stroke="rgba(39,24,126,0.40)"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Terminal arrow on the solid path */}
      <path
        d="M332,186 L342,192 L332,198"
        fill="none"
        stroke="rgba(39,24,126,0.40)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Pivot marker — circle at pivot point */}
      <circle cx="200" cy="220" r="5" fill="rgba(39,24,126,0.16)" stroke="rgba(39,24,126,0.28)" strokeWidth="1.2" />

      {/* Direction label lines — subtle */}
      <line x1="200" y1="220" x2="200" y2="260" stroke="rgba(39,24,126,0.10)" strokeWidth="1" strokeLinecap="round" />
      <rect x="174" y="264" width="52" height="14" rx="4" fill="rgba(39,24,126,0.06)" stroke="rgba(39,24,126,0.10)" strokeWidth="1" />
    </svg>
  </div>
);

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function SoftwareDevelopmentPage() {
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
            accentColor="#aeb8fe"
            iconBg="bg-blue-2"
            iconPath={<path className="icon-line" d="M4 6 L4 18 L20 18 L20 6 Z M8 10 L10 12 L8 14 M14 14 L16 14" />}
          />
        </div>

        {/* Overview — full bleed (blue-2 bg) */}
        <ServiceOverview
          headline={CONTENT.overview.headline}
          body={CONTENT.overview.body}
          features={overviewFeatures}
          bg="#aeb8fe"
        />

        {/* Approach */}
        <div className="shell">
          <ServiceApproach panels={CONTENT.approach} />
        </div>

        {/* Testimonials — full bleed sticky stack */}
        <ServiceTestimonialsStack
          testimonials={[
            { ...CONTENT.testimonials[0], bg: "#aeb8fe", visual: testimonialVisual1 },
            { ...CONTENT.testimonials[1], bg: "#fbe4d2", visual: testimonialVisual2 },
            { ...CONTENT.testimonials[2], bg: "#e8e9f0", visual: testimonialVisual3 },
          ]}
        />

        {/* FAQ */}
        <div className="shell">
          <ServiceFAQ questions={CONTENT.faq} />
        </div>

        {/* Other services — full bleed (paper-2 bg) */}
        <ServiceOtherServices exclude="Software Development" />

        {/* Contact */}
        <Contact />
      </main>
    </>
  );
}
