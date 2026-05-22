import { StarIcon } from "../icons";

const tickerItems = [
  "Marketing & Branding",
  "Software Development",
  "Data Architecture & Engineering",
  "AI & Machine Learning",
];

function TickerGroup({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <span
      aria-hidden={ariaHidden || undefined}
      className="inline-flex items-center gap-14 pr-14"
    >
      {tickerItems.map((item, i) => (
        <span key={i} className="inline-flex items-center gap-14">
          {item}
          <StarIcon className="inline-block h-[18px] w-[18px] text-blue" />
        </span>
      ))}
    </span>
  );
}

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col pt-[100px] md:pt-[120px]">
      {/* Soft blooms */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-120px] top-[5%] z-0 h-[540px] w-[540px] rounded-full opacity-50 blur-[60px]"
        style={{
          background:
            "radial-gradient(circle, var(--color-blue-2) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-10%] left-[-100px] z-0 h-[420px] w-[420px] rounded-full opacity-60 blur-[60px]"
        style={{
          background:
            "radial-gradient(circle, #FCD9C8 0%, transparent 70%)",
        }}
      />

      {/* Title */}
      <h1 className="relative z-[2] mb-9 font-display text-[clamp(48px,9.4vw,156px)] font-medium leading-[0.92] tracking-[-0.045em] text-ink">
        <span
          className="block animate-rise"
          style={{ animationDelay: "0.15s" }}
        >
          We build the things
        </span>
        <span
          className="block animate-rise"
          style={{ animationDelay: "0.3s" }}
        >
          that{" "}
          <span className="font-serif font-normal italic tracking-[-0.02em]">
            move
          </span>{" "}
          <StarIcon
            className="inline-block h-[0.7em] w-[0.7em] animate-spin-slow align-middle text-blue"
            style={{ margin: "0 0.08em 0.18em" }}
          />
        </span>
        <span
          className="block animate-rise"
          style={{ animationDelay: "0.45s" }}
        >
          your{" "}
          <span className="inline-block -rotate-[1.5deg] rounded-[0.18em] bg-cream px-[0.18em] pb-[0.04em] text-paper">
            business
          </span>{" "}
          forward.
        </span>
      </h1>

      {/* Description + CTAs — grows to fill remaining space */}
      <div className="relative z-[2] flex flex-1 items-end pb-8">
        <div className="grid w-full items-end gap-14 md:grid-cols-[1.2fr_1fr]">
          <p
            className="max-w-[520px] animate-rise text-[clamp(18px,1.4vw,22px)] font-normal leading-[1.4] tracking-[-0.01em]"
            style={{ animationDelay: "0.6s" }}
          >
            <b className="font-medium">Four disciplines. One Place.</b> We pair
            production grade engineering with sharp brand thinking, so the
            product you ship and the story you tell finally pull in the same
            direction.
          </p>

          <div
            className="flex flex-wrap items-center gap-5 animate-rise md:justify-self-end"
            style={{ animationDelay: "0.6s" }}
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2.5 border-b border-ink py-4 text-[15px] font-medium transition-[padding] hover:pr-2"
            >
              See the work{" "}
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Ticker — pinned to bottom of viewport */}
      <div
        aria-hidden
        className="relative z-[2] -mx-[clamp(20px,4vw,56px)] overflow-hidden border-y border-line bg-white/40 py-[22px] animate-rise"
        style={{ animationDelay: "0.6s" }}
      >
        <div className="flex animate-ticker whitespace-nowrap font-display text-[clamp(18px,2.2vw,32px)] font-medium tracking-[-0.01em]">
          <TickerGroup />
          <TickerGroup ariaHidden />
        </div>
      </div>
    </section>
  );
}
