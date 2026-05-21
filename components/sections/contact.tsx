import { ContactFormSheet } from "../contact-form-sheet";
import { Reveal } from "../reveal";

const cols = [
  {
    title: "— Sydney HQ",
    body: (
      <>
        <div className="mb-2 font-display text-[22px] font-medium tracking-[-0.02em]">
          Nexus Co Sydney
        </div>
        <div className="text-[14px] leading-[1.5] opacity-75">
          Level 12, 50 Carrington St
          <br />
          Sydney NSW 2000
          <br />
          Australia
        </div>
      </>
    ),
  },
  {
    title: "— Studios",
    items: ["Sydney", "Melbourne", "Brisbane", "Remote — globally"],
  },
  {
    title: "— Capabilities",
    items: [
      { label: "Marketing & Branding", href: "#" },
      { label: "Software Development", href: "#" },
      { label: "Data Architecture & Engineering", href: "#" },
      { label: "AI & Machine Learning", href: "#" },
    ],
  },
  {
    title: "— Elsewhere",
    items: [
      { label: "LinkedIn", href: "#" },
      { label: "Instagram", href: "#" },
      { label: "Dribbble", href: "#" },
      { label: "GitHub", href: "#" },
    ],
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-ink px-[clamp(20px,4vw,56px)] pb-10 pt-[120px] text-paper"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-[300px] -left-[300px] h-[700px] w-[700px] rounded-full opacity-[0.18] blur-[40px]"
        style={{
          background:
            "radial-gradient(circle, var(--color-blue-2) 0%, transparent 65%)",
        }}
      />

      <div className="relative mx-auto max-w-[1440px]">
        <div className="mb-8 font-mono text-[11px] uppercase tracking-[0.16em] text-blue-2">
          Get in touch
        </div>

        <Reveal
          as="h2"
          className="mb-16 font-display text-[clamp(56px,11vw,180px)] font-normal leading-[0.9] tracking-[-0.05em]"
        >
          Got a brief?
          <br />
          <em className="font-serif font-normal italic text-blue-2">
            Let&apos;s make it real.
          </em>
        </Reveal>

        <ContactFormSheet />

        <div className="grid gap-14 border-t border-white/20 pt-[60px] sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="mb-[18px] font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-blue-2">
                {col.title}
              </h4>
              {col.body ? (
                col.body
              ) : (
                <ul className="space-y-2.5 text-[15px]">
                  {col.items!.map((item) =>
                    typeof item === "string" ? (
                      <li key={item}>{item}</li>
                    ) : (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          className="transition-colors hover:text-blue-2"
                        >
                          {item.label}
                        </a>
                      </li>
                    ),
                  )}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col gap-3 border-t border-white/10 pt-6 font-mono text-[11px] uppercase tracking-[0.1em] text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Nexus Co · Independent Australian studio</span>
          <span>ABN 00 000 000 000</span>
        </div>
      </div>
    </section>
  );
}
