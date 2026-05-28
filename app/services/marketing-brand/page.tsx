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
  title: "Marketing & Brand — Create Lyft",
  description: CONTENT.hero.sub,
};

// ── Overview feature icons ────────────────────────────────────────────────────
const overviewFeatures = CONTENT.overview.features.map((f, i) => ({
  ...f,
  icon: [
    // Brand Identity — hexagon/crystal
    <path
      key="brand-identity"
      className="icon-line"
      d="M12 2 L22 8.5 L22 15.5 L12 22 L2 15.5 L2 8.5 Z"
    />,
    // Positioning & Messaging — speech bubble
    <path
      key="positioning"
      className="icon-line"
      d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
    />,
    // Campaign Creative — edit/pencil
    <>
      <path
        key="campaign-1"
        className="icon-line"
        d="M12 20h9"
      />
      <path
        key="campaign-2"
        className="icon-line"
        d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
      />
    </>,
    // Performance Marketing — activity/pulse
    <path
      key="performance"
      className="icon-line"
      d="M22 12h-4l-3 9L9 3l-3 9H2"
    />,
  ][i],
}));

// ── Testimonial visuals ───────────────────────────────────────────────────────

// Visual 1 — Priya Mehta / Atticus Compliance — brand identity
// An abstract mark: two geometric shapes forming a letterform-like composition.
const testimonialVisual1: ReactNode = (
  <div
    className="w-full h-full"
    style={{ backgroundColor: "#f0d4bc" }}
  >
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 420 420"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
    >
      <defs>
        <pattern id="dots-t1" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="10" cy="10" r="1" fill="rgba(39,24,126,0.10)" />
        </pattern>
      </defs>
      <rect width="420" height="420" fill="url(#dots-t1)" />

      {/* Abstract mark — two shapes that form an identity system: a circle and a
          rotated square sharing a common axis */}
      {/* Outer ring */}
      <circle cx="210" cy="210" r="100" fill="none" stroke="rgba(39,24,126,0.18)" strokeWidth="1.4" />
      {/* Inner rotated square */}
      <rect
        x="152"
        y="152"
        width="116"
        height="116"
        rx="4"
        fill="rgba(39,24,126,0.07)"
        stroke="rgba(39,24,126,0.22)"
        strokeWidth="1.4"
        transform="rotate(15,210,210)"
      />
      {/* Centre fill — the mark itself */}
      <circle cx="210" cy="210" r="22" fill="rgba(39,24,126,0.18)" />
      {/* Cross axis lines — grid registration marks */}
      <line x1="210" y1="96" x2="210" y2="120" stroke="rgba(39,24,126,0.16)" strokeWidth="1" strokeLinecap="round" />
      <line x1="210" y1="300" x2="210" y2="324" stroke="rgba(39,24,126,0.16)" strokeWidth="1" strokeLinecap="round" />
      <line x1="96" y1="210" x2="120" y2="210" stroke="rgba(39,24,126,0.16)" strokeWidth="1" strokeLinecap="round" />
      <line x1="300" y1="210" x2="324" y2="210" stroke="rgba(39,24,126,0.16)" strokeWidth="1" strokeLinecap="round" />
    </svg>
  </div>
);

// Visual 2 — Tom Haskell / Groundwork — campaign + conversion tracking
// A bar chart with an ascending trend line.
const testimonialVisual2: ReactNode = (
  <div
    className="w-full h-full"
    style={{ backgroundColor: "#8fa0e8" }}
  >
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 420 420"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
    >
      <defs>
        <pattern id="dots-t2" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="10" cy="10" r="1" fill="rgba(255,255,255,0.12)" />
        </pattern>
      </defs>
      <rect width="420" height="420" fill="url(#dots-t2)" />

      {/* Baseline */}
      <line x1="70" y1="310" x2="350" y2="310" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />

      {/* Bars — ascending heights */}
      <rect x="90"  y="268" width="36" height="42"  rx="3" fill="rgba(255,255,255,0.18)" />
      <rect x="150" y="240" width="36" height="70"  rx="3" fill="rgba(255,255,255,0.22)" />
      <rect x="210" y="205" width="36" height="105" rx="3" fill="rgba(255,255,255,0.26)" />
      <rect x="270" y="165" width="36" height="145" rx="3" fill="rgba(255,255,255,0.30)" />

      {/* Trend line over bars */}
      <polyline
        points="108,262 168,232 228,196 288,158"
        fill="none"
        stroke="rgba(255,255,255,0.70)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Trend line data points */}
      <circle cx="108" cy="262" r="4" fill="rgba(255,255,255,0.80)" />
      <circle cx="168" cy="232" r="4" fill="rgba(255,255,255,0.80)" />
      <circle cx="228" cy="196" r="4" fill="rgba(255,255,255,0.80)" />
      <circle cx="288" cy="158" r="4" fill="rgba(255,255,255,0.80)" />

      {/* Horizontal guide lines */}
      <line x1="70" y1="250" x2="350" y2="250" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="4 5" />
      <line x1="70" y1="195" x2="350" y2="195" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="4 5" />
      <line x1="70" y1="140" x2="350" y2="140" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="4 5" />
    </svg>
  </div>
);

// Visual 3 — Danielle Osei / Clearpath Advisory — honest advice, protection
// A minimal shield composition.
const testimonialVisual3: ReactNode = (
  <div
    className="w-full h-full"
    style={{ backgroundColor: "#d8dae8" }}
  >
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 420 420"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
    >
      <defs>
        <pattern id="dots-t3" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="10" cy="10" r="1" fill="rgba(39,24,126,0.09)" />
        </pattern>
      </defs>
      <rect width="420" height="420" fill="url(#dots-t3)" />

      {/* Outer shield path */}
      <path
        d="M210,92 L310,132 L310,222 C310,278 264,318 210,332 C156,318 110,278 110,222 L110,132 Z"
        fill="rgba(39,24,126,0.07)"
        stroke="rgba(39,24,126,0.20)"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      {/* Inner shield — slightly smaller, lighter fill */}
      <path
        d="M210,118 L290,150 L290,222 C290,266 254,298 210,310 C166,298 130,266 130,222 L130,150 Z"
        fill="rgba(39,24,126,0.05)"
        stroke="rgba(39,24,126,0.12)"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      {/* Checkmark inside */}
      <polyline
        points="176,212 200,236 244,188"
        fill="none"
        stroke="rgba(39,24,126,0.38)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function MarketingBrandPage() {
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
            accentColor="#fbe4d2"
            iconBg="bg-peach"
            iconPath={<path className="icon-line" d="M5 19 L19 5 M5 19 L5 13 M5 19 L11 19 M14 5 L19 5 L19 10" />}
          />
        </div>

        {/* Overview — full bleed (peach bg) */}
        <ServiceOverview
          headline={CONTENT.overview.headline}
          body={CONTENT.overview.body}
          features={overviewFeatures}
        />

        {/* Approach */}
        <div className="shell">
          <ServiceApproach panels={CONTENT.approach} />
        </div>

        {/* Testimonials — full bleed sticky stack */}
        <ServiceTestimonialsStack
          testimonials={[
            { ...CONTENT.testimonials[0], bg: "#fbe4d2", visual: testimonialVisual1 },
            { ...CONTENT.testimonials[1], bg: "#aeb8fe", visual: testimonialVisual2 },
            { ...CONTENT.testimonials[2], bg: "#e8e9f0", visual: testimonialVisual3 },
          ]}
        />

        {/* FAQ */}
        <div className="shell">
          <ServiceFAQ questions={CONTENT.faq} />
        </div>

        {/* Other services — full bleed (paper-2 bg) */}
        <ServiceOtherServices exclude="Marketing & Brand" />

        {/* Contact */}
        <Contact />
      </main>
    </>
  );
}
