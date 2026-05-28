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
  title: "Resource Augmentation — Create Lyft",
  description: CONTENT.hero.sub,
};

// ── Overview feature icons ────────────────────────────────────────────────────
const overviewFeatures = CONTENT.overview.features.map((f, i) => ({
  ...f,
  icon: [
    // Senior Engineers On-Demand — person with checkmark
    <>
      <circle key="senior-c" className="icon-line" cx="12" cy="8" r="4" />
      <path key="senior-p1" className="icon-line" d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      <path key="senior-p2" className="icon-line" d="M16 11l2 2 4-4" />
    </>,
    // Team Extension & Embedding — people group
    <>
      <circle key="team-c1" className="icon-line" cx="9" cy="7" r="3" />
      <path key="team-p1" className="icon-line" d="M3 20c0-3 2.7-5 6-5s6 2 6 5" />
      <circle key="team-c2" className="icon-line" cx="17" cy="9" r="2.5" />
      <path key="team-p2" className="icon-line" d="M21 20c0-2.5-1.8-4-4-4" />
    </>,
    // Critical Project Support — flag/milestone
    <>
      <path key="flag-p1" className="icon-line" d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line key="flag-l1" className="icon-line" x1="4" y1="22" x2="4" y2="15" />
    </>,
    // Technical Leadership — compass/direction
    <>
      <circle key="compass-c" className="icon-line" cx="12" cy="12" r="10" />
      <polygon key="compass-poly" className="icon-line" points="16.24,7.76 14.12,14.12 7.76,16.24 9.88,9.88" />
    </>,
  ][i],
}));

// ── Approach SVG visuals ──────────────────────────────────────────────────────

const APPROACH_VISUALS: ReactNode[] = [
  // Panel 1 — "Understand the gap — not just the job spec"
  // Split layout: left column = "job spec" abstract blocks, right = "actual gap" blocks,
  // connecting arrow between — showing the reframe from spec to real need.
  <div
    key="ra-visual-1"
    className="rounded-[var(--radius-lg)] aspect-[4/3] w-full overflow-hidden"
    style={{ backgroundColor: "#fce8ed" }}
    role="img"
    aria-label="Abstract composition representing the reframe from job spec to actual team gap"
  >
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 480 360"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <pattern id="ra-dots-1" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="12" cy="12" r="1.2" fill="rgba(39,24,126,0.07)" />
        </pattern>
      </defs>
      <rect width="480" height="360" fill="url(#ra-dots-1)" />

      {/* Left column header bar — "Job Spec" */}
      <rect x="60" y="56" width="140" height="22" rx="5" fill="rgba(39,24,126,0.10)" stroke="rgba(39,24,126,0.16)" strokeWidth="1" />
      <rect x="72" y="63" width="70" height="8" rx="3" fill="rgba(39,24,126,0.22)" />

      {/* Left column: job spec line-item blocks */}
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={`spec-${i}`}>
          <rect x="60" y={96 + i * 40} width="140" height="28" rx="5" fill="rgba(39,24,126,0.05)" stroke="rgba(39,24,126,0.11)" strokeWidth="1" />
          <rect x="72" y={107 + i * 40} width={[90, 70, 80, 62, 76][i]} height="6" rx="2" fill="rgba(39,24,126,0.15)" />
        </g>
      ))}

      {/* Arrow — connecting left to right */}
      <path
        d="M210 182 C238 182 242 182 270 182"
        fill="none"
        stroke="rgba(255,145,164,0.70)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="5 4"
      />
      <path
        d="M264 176 L272 182 L264 188"
        fill="none"
        stroke="rgba(255,145,164,0.70)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Right column header bar — "Actual Gap" */}
      <rect x="280" y="56" width="140" height="22" rx="5" fill="rgba(255,145,164,0.22)" stroke="rgba(255,145,164,0.40)" strokeWidth="1" />
      <rect x="292" y="63" width="70" height="8" rx="3" fill="rgba(255,145,164,0.55)" />

      {/* Right column: actual gap blocks — fewer but highlighted */}
      {[0, 1, 2].map((i) => (
        <g key={`gap-${i}`}>
          <rect x="280" y={96 + i * 48} width="140" height="34" rx="5" fill="rgba(255,145,164,0.10)" stroke="rgba(255,145,164,0.30)" strokeWidth="1.2" />
          <rect x="292" y={108 + i * 48} width={[80, 92, 68][i]} height="7" rx="2" fill="rgba(255,145,164,0.45)" />
          <rect x="292" y={119 + i * 48} width={[56, 68, 48][i]} height="5" rx="2" fill="rgba(39,24,126,0.10)" />
        </g>
      ))}

      {/* Accent dot at arrow midpoint */}
      <circle cx="240" cy="182" r="5" fill="rgba(255,145,164,0.60)" stroke="rgba(39,24,126,0.12)" strokeWidth="1" />
    </svg>
  </div>,

  // Panel 2 — "Match fast. Onboard faster."
  // Horizontal timeline: Brief → Match → Confirm → Onboard → Shipping
  // First three milestones compressed tightly, last two spread, showing speed front-loaded
  <div
    key="ra-visual-2"
    className="rounded-[var(--radius-lg)] aspect-[4/3] w-full overflow-hidden"
    style={{ backgroundColor: "#f5e8f0" }}
    role="img"
    aria-label="Abstract composition representing fast matching and onboarding timeline"
  >
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 480 360"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <pattern id="ra-dots-2" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="12" cy="12" r="1.2" fill="rgba(39,24,126,0.07)" />
        </pattern>
      </defs>
      <rect width="480" height="360" fill="url(#ra-dots-2)" />

      {/* Baseline track */}
      <line x1="60" y1="190" x2="420" y2="190" stroke="rgba(39,24,126,0.12)" strokeWidth="1.5" strokeLinecap="round" />

      {/* Milestone positions: Brief=80, Match=130, Confirm=170, Onboard=280, Shipping=400 */}
      {/* Tightly packed first three, then spread out */}

      {/* Segment fills */}
      {/* Brief → Match (tight) */}
      <line x1="80" y1="190" x2="130" y2="190" stroke="rgba(255,145,164,0.60)" strokeWidth="3" strokeLinecap="round" />
      {/* Match → Confirm (tight) */}
      <line x1="130" y1="190" x2="170" y2="190" stroke="rgba(255,145,164,0.55)" strokeWidth="3" strokeLinecap="round" />
      {/* Confirm → Onboard */}
      <line x1="170" y1="190" x2="280" y2="190" stroke="rgba(39,24,126,0.12)" strokeWidth="1.5" strokeLinecap="round" />
      {/* Onboard → Shipping */}
      <line x1="280" y1="190" x2="400" y2="190" stroke="rgba(39,24,126,0.08)" strokeWidth="1.5" strokeLinecap="round" />

      {/* Milestone dots and labels */}
      {[
        { x: 80, label: "Brief", filled: true },
        { x: 130, label: "Match", filled: true },
        { x: 170, label: "Confirm", filled: true },
        { x: 280, label: "Onboard", filled: false },
        { x: 400, label: "Shipping", filled: false },
      ].map(({ x, label, filled }) => (
        <g key={label}>
          <circle
            cx={x}
            cy={190}
            r={filled ? 7 : 5}
            fill={filled ? "rgba(255,145,164,0.75)" : "rgba(39,24,126,0.10)"}
            stroke={filled ? "rgba(255,145,164,0.90)" : "rgba(39,24,126,0.18)"}
            strokeWidth="1.4"
          />
          {/* Label above/below alternating */}
          <text
            x={x}
            y={label === "Match" || label === "Onboard" ? 224 : 172}
            textAnchor="middle"
            fontSize="10"
            fontFamily="ui-monospace, monospace"
            fill="rgba(39,24,126,0.45)"
            letterSpacing="0.04em"
          >
            {label}
          </text>
          {/* Tick line */}
          <line
            x1={x}
            y1={label === "Match" || label === "Onboard" ? 198 : 182}
            x2={x}
            y2={label === "Match" || label === "Onboard" ? 212 : 194}
            stroke="rgba(39,24,126,0.12)"
            strokeWidth="1"
          />
        </g>
      ))}

      {/* Speed brace — annotating the tight first three */}
      <path
        d="M80 140 L80 132 L170 132 L170 140"
        fill="none"
        stroke="rgba(255,145,164,0.50)"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text
        x="125"
        y="126"
        textAnchor="middle"
        fontSize="9"
        fontFamily="ui-monospace, monospace"
        fill="rgba(255,145,164,0.80)"
        letterSpacing="0.05em"
      >
        5 BUSINESS DAYS
      </text>

      {/* Shipping checkmark */}
      <circle cx="400" cy="190" r="13" fill="rgba(255,145,164,0.12)" stroke="rgba(255,145,164,0.25)" strokeWidth="1.2" />
      <polyline
        points="394,190 398,195 408,183"
        fill="none"
        stroke="rgba(255,145,164,0.65)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Vertical time-compression indicator on tight zone */}
      <rect x="64" y="230" width="122" height="36" rx="6" fill="rgba(255,145,164,0.08)" stroke="rgba(255,145,164,0.20)" strokeWidth="1" />
      <rect x="76" y="240" width="66" height="6" rx="2" fill="rgba(255,145,164,0.35)" />
      <rect x="76" y="250" width="46" height="5" rx="2" fill="rgba(39,24,126,0.10)" />
    </svg>
  </div>,

  // Panel 3 — "Stay as long as needed. Leave cleanly."
  // Bracket timeline — a horizontal bar with start/end bracket markers,
  // flexible dotted extension, clean tick at end for documented handover
  <div
    key="ra-visual-3"
    className="rounded-[var(--radius-lg)] aspect-[4/3] w-full overflow-hidden"
    style={{ backgroundColor: "#e8e9f0" }}
    role="img"
    aria-label="Abstract composition representing flexible engagement duration and clean exit"
  >
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 480 360"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <pattern id="ra-dots-3" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="12" cy="12" r="1.2" fill="rgba(39,24,126,0.09)" />
        </pattern>
      </defs>
      <rect width="480" height="360" fill="url(#ra-dots-3)" />

      {/* Core engagement bar */}
      <rect x="72" y="168" width="220" height="22" rx="5" fill="rgba(39,24,126,0.09)" stroke="rgba(39,24,126,0.16)" strokeWidth="1.2" />

      {/* Start bracket */}
      <path
        d="M72 152 L72 160 L64 160 M72 198 L72 206 L64 206"
        fill="none"
        stroke="rgba(39,24,126,0.30)"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Fixed end marker */}
      <path
        d="M292 152 L292 160 L300 160 M292 198 L292 206 L300 206"
        fill="none"
        stroke="rgba(39,24,126,0.22)"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Flexible dotted extension bar */}
      <rect
        x="292"
        y="168"
        width="116"
        height="22"
        rx="5"
        fill="none"
        stroke="rgba(255,145,164,0.40)"
        strokeWidth="1.4"
        strokeDasharray="6 4"
      />

      {/* Extension label */}
      <text
        x="350"
        y="183"
        textAnchor="middle"
        fontSize="9"
        fontFamily="ui-monospace, monospace"
        fill="rgba(255,145,164,0.70)"
        letterSpacing="0.05em"
      >
        EXTEND?
      </text>

      {/* End bracket — flexible */}
      <path
        d="M408 152 L408 160 L416 160 M408 198 L408 206 L416 206"
        fill="none"
        stroke="rgba(255,145,164,0.35)"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Handover checkmark — at end of core bar */}
      <circle cx="292" cy="179" r="10" fill="rgba(39,24,126,0.06)" stroke="rgba(39,24,126,0.14)" strokeWidth="1" />
      <polyline
        points="287,179 290,183 298,174"
        fill="none"
        stroke="rgba(39,24,126,0.35)"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Labels below the bars */}
      <text
        x="182"
        y="222"
        textAnchor="middle"
        fontSize="9.5"
        fontFamily="ui-monospace, monospace"
        fill="rgba(39,24,126,0.40)"
        letterSpacing="0.04em"
      >
        ENGAGEMENT
      </text>

      {/* "Clean handover" tag at end */}
      <rect x="240" y="232" width="104" height="30" rx="6" fill="rgba(39,24,126,0.05)" stroke="rgba(39,24,126,0.12)" strokeWidth="1" />
      <rect x="252" y="241" width="60" height="6" rx="2" fill="rgba(39,24,126,0.16)" />
      <rect x="252" y="251" width="44" height="5" rx="2" fill="rgba(39,24,126,0.09)" />

      {/* Connector from handover dot to tag */}
      <line x1="292" y1="192" x2="292" y2="232" stroke="rgba(39,24,126,0.10)" strokeWidth="1" strokeLinecap="round" strokeDasharray="3 4" />

      {/* Start label */}
      <text
        x="72"
        y="222"
        textAnchor="middle"
        fontSize="9.5"
        fontFamily="ui-monospace, monospace"
        fill="rgba(39,24,126,0.35)"
        letterSpacing="0.04em"
      >
        DAY 1
      </text>
    </svg>
  </div>,
];

// ── Testimonial visuals ───────────────────────────────────────────────────────

// Visual 1 — Marcus Leung / payment integration deadline — Card bg: #ff91a4
// Sprint to deadline: a thick progress bar almost at the finish, with a
// deadline marker line and checkmark. Ink shapes, readable contrast on pink.
const testimonialVisual1: ReactNode = (
  <div className="w-full h-full" style={{ backgroundColor: "#ff91a4" }}>
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 420 420"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
    >
      <defs>
        <pattern id="ra-t1-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="10" cy="10" r="1" fill="rgba(39,24,126,0.10)" />
        </pattern>
      </defs>
      <rect width="420" height="420" fill="url(#ra-t1-dots)" />

      {/* Progress track */}
      <rect x="56" y="188" width="308" height="18" rx="9" fill="rgba(39,24,126,0.10)" />

      {/* Progress fill — ~88% */}
      <rect x="56" y="188" width="272" height="18" rx="9" fill="rgba(39,24,126,0.30)" />

      {/* Deadline marker line */}
      <line x1="340" y1="160" x2="340" y2="232" stroke="rgba(39,24,126,0.50)" strokeWidth="1.8" strokeLinecap="round" />
      <text
        x="340"
        y="154"
        textAnchor="middle"
        fontSize="10"
        fontFamily="ui-monospace, monospace"
        fill="rgba(39,24,126,0.55)"
        letterSpacing="0.06em"
      >
        DEADLINE
      </text>

      {/* Checkmark circle at end of progress fill */}
      <circle cx="328" cy="197" r="22" fill="rgba(39,24,126,0.12)" stroke="rgba(39,24,126,0.25)" strokeWidth="1.4" />
      <polyline
        points="318,197 324,204 340,188"
        fill="none"
        stroke="rgba(39,24,126,0.55)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Sprint day markers above bar */}
      {[80, 120, 160, 200, 240, 280].map((x, i) => (
        <g key={`day-${i}`}>
          <line x1={x} y1="178" x2={x} y2="188" stroke="rgba(39,24,126,0.18)" strokeWidth="1" strokeLinecap="round" />
          <text
            x={x}
            y="174"
            textAnchor="middle"
            fontSize="8"
            fontFamily="ui-monospace, monospace"
            fill="rgba(39,24,126,0.30)"
          >
            {`D${i + 1}`}
          </text>
        </g>
      ))}

      {/* "Engineer in" callout */}
      <rect x="56" y="232" width="116" height="32" rx="7" fill="rgba(39,24,126,0.08)" stroke="rgba(39,24,126,0.16)" strokeWidth="1" />
      <rect x="68" y="241" width="56" height="6" rx="2" fill="rgba(39,24,126,0.28)" />
      <rect x="68" y="251" width="40" height="5" rx="2" fill="rgba(39,24,126,0.15)" />
      {/* Arrow from callout to bar start */}
      <line x1="114" y1="232" x2="114" y2="206" stroke="rgba(39,24,126,0.16)" strokeWidth="1" strokeLinecap="round" strokeDasharray="3 3" />

      {/* "Shipped" stamp top right */}
      <rect x="290" y="272" width="74" height="30" rx="8" fill="rgba(39,24,126,0.10)" stroke="rgba(39,24,126,0.20)" strokeWidth="1.2" />
      <text
        x="327"
        y="291"
        textAnchor="middle"
        fontSize="10"
        fontFamily="ui-monospace, monospace"
        fill="rgba(39,24,126,0.45)"
        letterSpacing="0.08em"
      >
        SHIPPED
      </text>
    </svg>
  </div>
);

// Visual 2 — Sarah Thornton / hiring failure then success — Card bg: #aeb8fe
// Two paths: long winding dashed path (traditional hiring, dead-end) vs
// short direct solid path (Create Lyft, 1 week, reaches destination).
// White shapes on blue card.
const testimonialVisual2: ReactNode = (
  <div className="w-full h-full" style={{ backgroundColor: "#aeb8fe" }}>
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 420 420"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
    >
      <defs>
        <pattern id="ra-t2-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="10" cy="10" r="1" fill="rgba(255,255,255,0.12)" />
        </pattern>
      </defs>
      <rect width="420" height="420" fill="url(#ra-t2-dots)" />

      {/* Start dot */}
      <circle cx="60" cy="210" r="7" fill="rgba(255,255,255,0.50)" stroke="rgba(255,255,255,0.70)" strokeWidth="1.4" />

      {/* Traditional hiring path — long winding dashed, dead-ends */}
      <path
        d="M60 210 C80 190 100 170 120 155 C145 138 165 150 175 168 C190 194 165 220 175 248 C188 282 215 285 235 268 C260 248 250 220 265 205 C280 190 300 195 305 210 C312 230 295 250 285 270"
        fill="none"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeDasharray="6 5"
      />
      {/* Dead-end X at bottom of winding path */}
      <line x1="279" y1="276" x2="293" y2="290" stroke="rgba(255,255,255,0.45)" strokeWidth="2" strokeLinecap="round" />
      <line x1="293" y1="276" x2="279" y2="290" stroke="rgba(255,255,255,0.45)" strokeWidth="2" strokeLinecap="round" />

      {/* "2 months" label on winding path */}
      <rect x="235" y="218" width="68" height="22" rx="5" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
      <text
        x="269"
        y="232"
        textAnchor="middle"
        fontSize="9"
        fontFamily="ui-monospace, monospace"
        fill="rgba(255,255,255,0.65)"
        letterSpacing="0.05em"
      >
        2 MONTHS
      </text>

      {/* Create Lyft path — short, direct, solid line */}
      <path
        d="M60 210 L340 210"
        fill="none"
        stroke="rgba(255,255,255,0.75)"
        strokeWidth="2.4"
        strokeLinecap="round"
      />

      {/* Arrow at end of direct path */}
      <path
        d="M332 203 L342 210 L332 217"
        fill="none"
        stroke="rgba(255,255,255,0.75)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Destination circle */}
      <circle cx="362" cy="210" r="16" fill="rgba(255,255,255,0.20)" stroke="rgba(255,255,255,0.45)" strokeWidth="1.6" />
      <polyline
        points="354,210 359,216 372,202"
        fill="none"
        stroke="rgba(255,255,255,0.80)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* "1 week" label on direct path */}
      <rect x="158" y="180" width="68" height="22" rx="5" fill="rgba(255,255,255,0.18)" stroke="rgba(255,255,255,0.35)" strokeWidth="1" />
      <text
        x="192"
        y="195"
        textAnchor="middle"
        fontSize="9"
        fontFamily="ui-monospace, monospace"
        fill="rgba(255,255,255,0.80)"
        letterSpacing="0.05em"
      >
        1 WEEK
      </text>

      {/* Path label — traditional */}
      <text
        x="175"
        y="308"
        textAnchor="middle"
        fontSize="9"
        fontFamily="ui-monospace, monospace"
        fill="rgba(255,255,255,0.40)"
        letterSpacing="0.05em"
      >
        TRADITIONAL HIRING
      </text>
    </svg>
  </div>
);

// Visual 3 — James Okafor / long-term embedded engineer — Card bg: #e8e9f0
// Venn diagram: "Your Team" and "Create Lyft Engineer" circles with
// significant overlap, shared attributes in the intersection.
const testimonialVisual3: ReactNode = (
  <div className="w-full h-full" style={{ backgroundColor: "#e8e9f0" }}>
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 420 420"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
    >
      <defs>
        <pattern id="ra-t3-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="10" cy="10" r="1" fill="rgba(39,24,126,0.09)" />
        </pattern>
        <clipPath id="ra-t3-circle-a">
          <circle cx="162" cy="200" r="110" />
        </clipPath>
        <clipPath id="ra-t3-circle-b">
          <circle cx="258" cy="200" r="110" />
        </clipPath>
      </defs>
      <rect width="420" height="420" fill="url(#ra-t3-dots)" />

      {/* Circle A — Your Team */}
      <circle cx="162" cy="200" r="110" fill="rgba(39,24,126,0.06)" stroke="rgba(39,24,126,0.18)" strokeWidth="1.4" />

      {/* Circle B — Create Lyft Engineer */}
      <circle cx="258" cy="200" r="110" fill="rgba(255,145,164,0.08)" stroke="rgba(255,145,164,0.30)" strokeWidth="1.4" />

      {/* Intersection fill */}
      <circle cx="162" cy="200" r="110" fill="rgba(39,24,126,0.08)" clipPath="url(#ra-t3-circle-b)" />

      {/* Labels */}
      <text
        x="118"
        y="148"
        textAnchor="middle"
        fontSize="10"
        fontFamily="ui-monospace, monospace"
        fill="rgba(39,24,126,0.45)"
        letterSpacing="0.04em"
      >
        YOUR
      </text>
      <text
        x="118"
        y="162"
        textAnchor="middle"
        fontSize="10"
        fontFamily="ui-monospace, monospace"
        fill="rgba(39,24,126,0.45)"
        letterSpacing="0.04em"
      >
        TEAM
      </text>

      <text
        x="302"
        y="148"
        textAnchor="middle"
        fontSize="10"
        fontFamily="ui-monospace, monospace"
        fill="rgba(255,145,164,0.75)"
        letterSpacing="0.04em"
      >
        CREATE
      </text>
      <text
        x="302"
        y="162"
        textAnchor="middle"
        fontSize="10"
        fontFamily="ui-monospace, monospace"
        fill="rgba(255,145,164,0.75)"
        letterSpacing="0.04em"
      >
        LYFT ENG
      </text>

      {/* Intersection attribute lines */}
      {[
        { y: 185, w: 56 },
        { y: 199, w: 44 },
        { y: 213, w: 50 },
      ].map(({ y, w }, i) => (
        <rect
          key={`attr-${i}`}
          x={210 - w / 2}
          y={y}
          width={w}
          height="6"
          rx="2"
          fill="rgba(39,24,126,0.22)"
        />
      ))}

      {/* Intersection dot */}
      <circle cx="210" cy="200" r="5" fill="rgba(39,24,126,0.28)" />
    </svg>
  </div>
);

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ResourceAugmentationPage() {
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
            accentColor="#ff91a4"
            iconBg="bg-cream"
            iconPath={
              <path
                className="icon-line"
                d="M4 20 L4 4 M4 20 L20 20 M7 16 L7 12 M11 16 L11 8 M15 16 L15 14 M19 16 L19 6"
              />
            }
          />
        </div>

        {/* Overview — full bleed (cream/pink bg — light enough for text-ink) */}
        <ServiceOverview
          headline={CONTENT.overview.headline}
          body={CONTENT.overview.body}
          features={overviewFeatures}
          bg="#ff91a4"
        />

        {/* Approach */}
        <div className="shell">
          <ServiceApproach panels={CONTENT.approach} />
        </div>

        {/* Testimonials — full bleed sticky stack */}
        <ServiceTestimonialsStack
          testimonials={[
            { ...CONTENT.testimonials[0], bg: "#ff91a4", visual: testimonialVisual1 },
            { ...CONTENT.testimonials[1], bg: "#aeb8fe", visual: testimonialVisual2 },
            { ...CONTENT.testimonials[2], bg: "#e8e9f0", visual: testimonialVisual3 },
          ]}
        />

        {/* FAQ */}
        <div className="shell">
          <ServiceFAQ questions={CONTENT.faq} />
        </div>

        {/* Other services — full bleed (paper-2 bg) */}
        <ServiceOtherServices exclude="Resource Augmentation" />

        {/* Contact */}
        <Contact />
      </main>
    </>
  );
}
