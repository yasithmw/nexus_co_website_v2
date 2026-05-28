import { Reveal } from "../reveal";

type ServiceHeroProps = {
  label: string;
  headline: string;
  sub: string;
  accentColor: string;
};

export function ServiceHero({ label, headline, sub, accentColor }: ServiceHeroProps) {
  // Split headline to italicise the final word for typographic interest
  const words = headline.split(" ");
  const lastWord = words[words.length - 1];
  const leadingWords = words.slice(0, -1).join(" ");

  return (
    <section className="relative flex min-h-screen flex-col pt-[100px] md:pt-[120px]">
      {/* Bloom — top right */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-120px] top-[5%] z-0 h-[540px] w-[540px] rounded-full opacity-50 blur-[80px]"
        style={{
          background: `radial-gradient(circle, ${accentColor} 0%, transparent 70%)`,
        }}
      />
      {/* Bloom — bottom left */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[5%] left-[-100px] z-0 h-[380px] w-[380px] rounded-full opacity-60 blur-[60px]"
        style={{
          background: `radial-gradient(circle, ${accentColor} 0%, transparent 70%)`,
        }}
      />

      {/* Mono label */}
      <div
        className="relative z-[2] mb-10 animate-rise font-mono text-[11px] uppercase tracking-[0.16em] text-muted"
        style={{ animationDelay: "0.1s" }}
      >
        {label}
      </div>

      {/* Icon badge */}
      <div
        className="relative z-[2] mb-8 animate-rise inline-flex h-12 w-12 items-center justify-center rounded-[12px] bg-peach text-ink"
        style={{ animationDelay: "0.2s" }}
        aria-hidden
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6">
          <path
            className="icon-line"
            d="M5 19 L19 5 M5 19 L5 13 M5 19 L11 19 M14 5 L19 5 L19 10"
          />
        </svg>
      </div>

      {/* Headline */}
      <Reveal
        as="h1"
        className="relative z-[2] mb-9 font-display text-[clamp(48px,8vw,120px)] font-medium leading-[0.92] tracking-[-0.045em] text-ink"
      >
        {leadingWords}{" "}
        <span className="font-serif font-normal italic">{lastWord}</span>
      </Reveal>

      {/* Sub + CTA */}
      <div className="relative z-[2] flex flex-1 items-end pb-8">
        <div className="grid w-full items-end gap-12 md:grid-cols-[1.2fr_1fr]">
          <p
            className="max-w-[520px] animate-rise text-[clamp(18px,1.4vw,22px)] font-normal leading-[1.4] tracking-[-0.01em] text-ink/80"
            style={{ animationDelay: "0.45s" }}
          >
            {sub}
          </p>

          <div
            className="flex flex-wrap items-center gap-5 animate-rise md:justify-self-end"
            style={{ animationDelay: "0.55s" }}
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2.5 border-b border-ink py-4 text-[15px] font-medium tracking-[-0.01em] transition-[padding] hover:pr-2"
            >
              Start a project{" "}
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
