import { Reveal } from "../reveal";
import { SectionHead } from "../section-head";

type ApproachPanel = {
  step: string;
  headline: string;
  body: string;
  imageAlt: string;
};

type ServiceApproachProps = {
  panels: readonly ApproachPanel[];
};

// ── Decorative SVG compositions, one per panel ────────────────────────────────

const APPROACH_VISUALS: React.ReactNode[] = [
  // Panel 1 — Discovery / research / mapping
  // Dot-grid field with three overlapping translucent rectangles suggesting
  // a structured audit or mapping exercise.
  <div
    key="visual-1"
    className="rounded-[var(--radius-lg)] aspect-[4/3] w-full overflow-hidden"
    style={{ backgroundColor: "#f4e8dd" }}
    role="img"
    aria-label="Abstract composition representing discovery and research"
  >
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 480 360"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      {/* Dot grid */}
      <defs>
        <pattern id="dots-1" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="12" cy="12" r="1.2" fill="rgba(39,24,126,0.12)" />
        </pattern>
      </defs>
      <rect width="480" height="360" fill="url(#dots-1)" />

      {/* Three offset rectangles — like cards laid out for review */}
      <rect x="64" y="68" width="160" height="108" rx="10" fill="rgba(39,24,126,0.06)" stroke="rgba(39,24,126,0.14)" strokeWidth="1" />
      <rect x="108" y="104" width="160" height="108" rx="10" fill="rgba(39,24,126,0.08)" stroke="rgba(39,24,126,0.18)" strokeWidth="1" />
      <rect x="152" y="140" width="160" height="108" rx="10" fill="rgba(39,24,126,0.11)" stroke="rgba(39,24,126,0.22)" strokeWidth="1" />

      {/* Small tick marks on the front card — suggesting analysis items */}
      <line x1="184" y1="172" x2="200" y2="172" stroke="rgba(39,24,126,0.35)" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="184" y1="188" x2="276" y2="188" stroke="rgba(39,24,126,0.20)" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="184" y1="204" x2="256" y2="204" stroke="rgba(39,24,126,0.20)" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="178" cy="172" r="3" fill="rgba(39,24,126,0.35)" />
      <circle cx="178" cy="188" r="3" fill="rgba(39,24,126,0.20)" />
      <circle cx="178" cy="204" r="3" fill="rgba(39,24,126,0.20)" />

      {/* Thin connecting lines top-left — suggesting mapping */}
      <line x1="64" y1="122" x2="40" y2="100" stroke="rgba(39,24,126,0.10)" strokeWidth="1" strokeLinecap="round" strokeDasharray="3 4" />
      <line x1="64" y1="122" x2="38" y2="148" stroke="rgba(39,24,126,0.10)" strokeWidth="1" strokeLinecap="round" strokeDasharray="3 4" />
      <circle cx="38" cy="100" r="4" fill="none" stroke="rgba(39,24,126,0.14)" strokeWidth="1" />
      <circle cx="38" cy="148" r="4" fill="none" stroke="rgba(39,24,126,0.14)" strokeWidth="1" />

      {/* Right-side label lines */}
      <line x1="334" y1="168" x2="406" y2="152" stroke="rgba(39,24,126,0.10)" strokeWidth="1" strokeLinecap="round" />
      <line x1="334" y1="200" x2="406" y2="216" stroke="rgba(39,24,126,0.10)" strokeWidth="1" strokeLinecap="round" />
      <rect x="408" y="144" width="48" height="16" rx="4" fill="rgba(39,24,126,0.06)" stroke="rgba(39,24,126,0.12)" strokeWidth="1" />
      <rect x="408" y="208" width="36" height="16" rx="4" fill="rgba(39,24,126,0.06)" stroke="rgba(39,24,126,0.12)" strokeWidth="1" />
    </svg>
  </div>,

  // Panel 2 — Strategy + creative merging
  // A circle and a square that overlap and intersect at their centres,
  // suggesting two disciplines coming together.
  <div
    key="visual-2"
    className="rounded-[var(--radius-lg)] aspect-[4/3] w-full overflow-hidden"
    style={{ backgroundColor: "#ecedf5" }}
    role="img"
    aria-label="Abstract composition representing strategy and creative merging"
  >
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 480 360"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <pattern id="dots-2" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="12" cy="12" r="1.2" fill="rgba(39,24,126,0.09)" />
        </pattern>
        {/* Clip the intersection to show a filled overlap zone */}
        <clipPath id="circle-clip">
          <circle cx="216" cy="180" r="96" />
        </clipPath>
      </defs>
      <rect width="480" height="360" fill="url(#dots-2)" />

      {/* Square — strategy */}
      <rect x="148" y="96" width="136" height="136" rx="6" fill="rgba(39,24,126,0.07)" stroke="rgba(39,24,126,0.20)" strokeWidth="1.4" />

      {/* Overlap fill (square clipped to circle) */}
      <rect x="148" y="96" width="136" height="136" rx="6" fill="rgba(117,139,253,0.16)" clipPath="url(#circle-clip)" />

      {/* Circle — creative */}
      <circle cx="264" cy="180" r="96" fill="rgba(117,139,253,0.07)" stroke="rgba(117,139,253,0.40)" strokeWidth="1.4" />

      {/* Intersection label — tiny centre dot */}
      <circle cx="238" cy="180" r="5" fill="rgba(39,24,126,0.28)" />

      {/* Light radiating lines from intersection point */}
      <line x1="238" y1="180" x2="190" y2="140" stroke="rgba(39,24,126,0.08)" strokeWidth="1" strokeLinecap="round" />
      <line x1="238" y1="180" x2="190" y2="220" stroke="rgba(39,24,126,0.08)" strokeWidth="1" strokeLinecap="round" />
      <line x1="238" y1="180" x2="300" y2="140" stroke="rgba(117,139,253,0.14)" strokeWidth="1" strokeLinecap="round" />
      <line x1="238" y1="180" x2="300" y2="220" stroke="rgba(117,139,253,0.14)" strokeWidth="1" strokeLinecap="round" />

      {/* Corner tick marks on the square — anchoring it */}
      <line x1="148" y1="108" x2="148" y2="96" stroke="rgba(39,24,126,0.30)" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="148" y1="96" x2="160" y2="96" stroke="rgba(39,24,126,0.30)" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="284" y1="96" x2="272" y2="96" stroke="rgba(39,24,126,0.30)" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="284" y1="96" x2="284" y2="108" stroke="rgba(39,24,126,0.30)" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  </div>,

  // Panel 3 — Launch + momentum
  // An ascending step-line chart with a rising arc above it.
  <div
    key="visual-3"
    className="rounded-[var(--radius-lg)] aspect-[4/3] w-full overflow-hidden"
    style={{ backgroundColor: "#e8e9f0" }}
    role="img"
    aria-label="Abstract composition representing launch and ongoing momentum"
  >
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 480 360"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <pattern id="dots-3" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="12" cy="12" r="1.2" fill="rgba(39,24,126,0.09)" />
        </pattern>
      </defs>
      <rect width="480" height="360" fill="url(#dots-3)" />

      {/* Grid lines — subtle baseline reference */}
      <line x1="80" y1="280" x2="400" y2="280" stroke="rgba(39,24,126,0.10)" strokeWidth="1" />
      <line x1="80" y1="240" x2="400" y2="240" stroke="rgba(39,24,126,0.06)" strokeWidth="1" strokeDasharray="4 6" />
      <line x1="80" y1="200" x2="400" y2="200" stroke="rgba(39,24,126,0.06)" strokeWidth="1" strokeDasharray="4 6" />
      <line x1="80" y1="160" x2="400" y2="160" stroke="rgba(39,24,126,0.06)" strokeWidth="1" strokeDasharray="4 6" />

      {/* Ascending step polyline */}
      <polyline
        points="80,280 148,280 148,240 216,240 216,196 284,196 284,155 352,155 352,118 400,118"
        fill="none"
        stroke="rgba(39,24,126,0.20)"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Rising smooth arc above — the momentum curve */}
      <path
        d="M80,270 C160,240 260,180 400,110"
        fill="none"
        stroke="rgba(117,139,253,0.55)"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Data points on the step line */}
      <circle cx="148" cy="240" r="3.5" fill="rgba(39,24,126,0.22)" />
      <circle cx="216" cy="196" r="3.5" fill="rgba(39,24,126,0.22)" />
      <circle cx="284" cy="155" r="3.5" fill="rgba(39,24,126,0.22)" />
      <circle cx="352" cy="118" r="3.5" fill="rgba(39,24,126,0.22)" />

      {/* Terminal arrow on the arc */}
      <line x1="388" y1="115" x2="400" y2="110" stroke="rgba(117,139,253,0.55)" strokeWidth="2" strokeLinecap="round" />
      <line x1="400" y1="110" x2="393" y2="100" stroke="rgba(117,139,253,0.55)" strokeWidth="2" strokeLinecap="round" />

      {/* Vertical axis tick */}
      <line x1="80" y1="280" x2="80" y2="100" stroke="rgba(39,24,126,0.10)" strokeWidth="1" />
      <line x1="76" y1="118" x2="80" y2="118" stroke="rgba(39,24,126,0.10)" strokeWidth="1" />
    </svg>
  </div>,
];

// ─────────────────────────────────────────────────────────────────────────────

export function ServiceApproach({ panels }: ServiceApproachProps) {
  return (
    <section className="py-[120px]">
      <SectionHead label="How we work" right="Our approach" />

      <div>
        {panels.map((panel, i) => {
          const imageRight = i % 2 === 0;
          return (
            <div
              key={panel.step}
              className={`grid gap-12 md:grid-cols-2 md:items-center ${
                i < panels.length - 1 ? "border-b border-line pb-24 mb-24" : ""
              }`}
            >
              {/* Visual */}
              <div className={imageRight ? "md:order-last" : ""}>
                {APPROACH_VISUALS[i]}
              </div>

              {/* Text side */}
              <Reveal className="flex flex-col gap-4">
                <h3 className="font-display font-semibold text-[clamp(24px,2.8vw,40px)] tracking-[-0.03em] leading-[1.1] text-ink">
                  {panel.headline}
                </h3>
                <p className="text-[16px] leading-[1.6] text-ink/70 max-w-[48ch]">
                  {panel.body}
                </p>
              </Reveal>
            </div>
          );
        })}
      </div>
    </section>
  );
}
