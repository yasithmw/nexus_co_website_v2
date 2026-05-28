import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { Nav } from "@/components/nav";
import { ContactFormSheet } from "@/components/contact-form-sheet";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Connect — Create Lyft",
  description: "Ready to build something remarkable? Let's talk.",
};

function OrbitalArt() {
  return (
    <svg
      viewBox="0 0 440 480"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-[440px] select-none"
      aria-hidden
      fill="none"
    >
      <circle cx="220" cy="240" r="160" fill="rgba(174,184,254,0.1)" />
      <circle cx="220" cy="240" r="100" fill="rgba(174,184,254,0.12)" />

      <circle cx="220" cy="240" r="175" stroke="rgba(39,24,126,0.1)" strokeWidth="1" strokeDasharray="3 8" />
      <circle cx="220" cy="240" r="130" stroke="rgba(39,24,126,0.1)" strokeWidth="1" strokeDasharray="3 8" />
      <circle cx="220" cy="240" r="87"  stroke="rgba(39,24,126,0.08)" strokeWidth="1" strokeDasharray="3 8" />

      <g style={{ transformBox: "view-box", transformOrigin: "220px 240px", animation: "spin-slow 90s linear infinite" } as CSSProperties}>
        <circle cx="307" cy="88"  r="22" fill="#758BFD" />
        <circle cx="133" cy="392" r="15" fill="#AEB8FE" />
      </g>

      <g style={{ transformBox: "view-box", transformOrigin: "220px 240px", animation: "spin-slow 60s linear infinite reverse" } as CSSProperties}>
        <circle cx="128" cy="148" r="20" fill="#C73E69" />
      </g>

      <g style={{ transformBox: "view-box", transformOrigin: "220px 240px", animation: "spin-slow 40s linear infinite" } as CSSProperties}>
        <circle cx="282" cy="302" r="13" fill="#758BFD" opacity="0.55" />
      </g>

      <circle cx="220" cy="240" r="38" fill="rgba(39,24,126,0.07)" />
      <circle cx="220" cy="240" r="28" fill="#27187E" />
      <circle cx="220" cy="240" r="10" fill="#AEB8FE" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden className="icon-line shrink-0">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

export default function ConnectPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="relative flex min-h-screen flex-col pt-[100px] md:pt-[120px]">
          <div
            aria-hidden
            className="pointer-events-none absolute right-[-60px] top-[10%] z-0 h-[500px] w-[500px] rounded-full opacity-40 blur-[70px]"
            style={{ background: "radial-gradient(circle, var(--color-blue-2) 0%, transparent 70%)" }}
          />

          <div className="shell relative z-[2] flex flex-1 flex-col justify-between">
            <div className="grid items-start gap-10 md:grid-cols-2">
              <div className="flex flex-col">
                <Reveal
                  as="h1"
                  className="mb-10 font-display text-[clamp(52px,8vw,120px)] font-medium leading-[0.92] tracking-[-0.045em] text-ink"
                >
                  Let&apos;s build
                  <br />
                  something
                  <br />
                  <em className="font-serif font-normal italic text-blue">
                    remarkable.
                  </em>
                </Reveal>

                <ContactFormSheet triggerVariant="ink" triggerLabel="Submit a brief" />
              </div>

              <div className="hidden items-start justify-end md:flex">
                <OrbitalArt />
              </div>
            </div>

            <div className="mt-[54px] pb-8">
              <div className="grid gap-8 border-t border-line pt-8 pb-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
                    <GlobeIcon />
                    We work globally
                  </div>
                  <a
                    href="mailto:connect@createlyft.com"
                    className="block font-display text-[15px] font-medium text-ink transition-colors hover:text-blue"
                  >
                    connect@createlyft.com
                  </a>
                </div>

                <div className="space-y-1.5">
                  <div className="mb-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
                    Australia
                  </div>
                  <div className="font-display text-[15px] font-semibold text-ink">
                    Sydney, NSW
                  </div>
                  <div className="text-[13.5px] text-muted">
                    Melbourne · Brisbane · Remote
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 border-t border-line pt-[9px] sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <a
                    href="/"
                    className="flex items-center gap-2.5 font-display text-[15px] font-semibold tracking-[-0.02em] text-ink"
                  >
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
                      <circle cx="16" cy="16" r="15" fill="#27187E" />
                      <path d="M10 20 L16 11 L22 20" stroke="#AEB8FE" strokeWidth="2.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                      <line x1="12" y1="22.5" x2="20" y2="22.5" stroke="#ff91a4" strokeWidth="2.2" strokeLinecap="round" />
                    </svg>
                    Create Lyft
                  </a>
                  <span className="font-mono text-[11px] tracking-[0.05em] text-muted">
                    © 2026{" "}
                    <a href="/privacy" className="underline underline-offset-2 transition-colors hover:text-ink">
                      Privacy
                    </a>
                  </span>
                </div>

                <nav className="flex items-center font-mono text-[11px] uppercase tracking-[0.1em] text-muted">
                  {[
                    { label: "LinkedIn", href: "#" },
                    { label: "Instagram", href: "#" },
                    { label: "GitHub", href: "#" },
                    { label: "Dribbble", href: "#" },
                  ].map((link, i) => (
                    <span key={link.label} className="flex items-center">
                      {i > 0 && <span aria-hidden className="px-2 text-blue-2">✦</span>}
                      <a href={link.href} className="transition-colors hover:text-ink">{link.label}</a>
                    </span>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
