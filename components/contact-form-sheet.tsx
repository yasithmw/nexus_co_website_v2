"use client";

import {
  useState,
  useRef,
  useEffect,
  type FormEvent,
  type ReactNode,
  type TouchEvent as ReactTouchEvent,
} from "react";

type SheetState = "closed" | "partial" | "expanded";

export function ContactFormSheet() {
  const [sheet, setSheet] = useState<SheetState>("closed");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    project: "",
  });

  const sheetRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const touchStartY = useRef(0);

  // Non-passive wheel listener so we can preventDefault when intercepting scroll-up
  useEffect(() => {
    const el = sheetRef.current;
    if (!el || sheet === "closed") return;

    const onWheel = (e: WheelEvent) => {
      if (sheet === "partial" && e.deltaY < 0) {
        e.preventDefault();
        setSheet("expanded");
      } else if (
        sheet === "expanded" &&
        (scrollRef.current?.scrollTop ?? 1) === 0 &&
        e.deltaY > 0
      ) {
        setSheet("partial");
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [sheet]);

  // Lock body scroll when sheet is fully expanded
  useEffect(() => {
    document.body.style.overflow = sheet === "expanded" ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [sheet]);

  // Escape key: expanded → partial, partial → closed
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape")
        setSheet((s) => (s === "expanded" ? "partial" : "closed"));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const onTouchStart = (e: ReactTouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const onTouchEnd = (e: ReactTouchEvent) => {
    const delta = touchStartY.current - e.changedTouches[0].clientY;
    if (sheet === "partial" && delta > 30) {
      setSheet("expanded");
    } else if (
      sheet === "expanded" &&
      (scrollRef.current?.scrollTop ?? 1) === 0 &&
      delta < -30
    ) {
      setSheet("partial");
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Contact form submission:", form);
    setSubmitted(true);
  };

  const reset = () => {
    setSheet("closed");
    // wait for close animation before clearing form
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", company: "", phone: "", email: "", project: "" });
    }, 500);
  };

  const translate =
    sheet === "closed"
      ? "translate-y-full"
      : sheet === "partial"
        ? "translate-y-1/2"
        : "translate-y-0";

  const inputClass =
    "w-full border-b border-ink/15 bg-transparent pb-3 text-[16px] tracking-[-0.01em] text-ink placeholder:text-ink/25 focus:border-ink focus:outline-none transition-colors duration-200";

  return (
    <>
      {/* Trigger — matches existing email pill CTA style */}
      <button
        onClick={() => setSheet("partial")}
        className="mb-[100px] inline-flex items-center gap-4 rounded-full bg-paper px-[30px] py-[22px] text-[17px] font-medium tracking-[-0.01em] text-ink transition-[padding,transform] duration-200 hover:-translate-y-0.5 hover:pr-10"
      >
        <span className="h-2 w-2 rounded-full bg-ink" />
        hello@nexusco.com.au
        <span>→</span>
      </button>

      {/* Backdrop */}
      <div
        aria-hidden
        onClick={() =>
          setSheet((s) => (s === "expanded" ? "partial" : "closed"))
        }
        className={[
          "fixed inset-0 z-[90] bg-ink/40 transition-opacity duration-500",
          sheet === "closed"
            ? "pointer-events-none opacity-0"
            : "pointer-events-auto opacity-100",
        ].join(" ")}
      />

      {/* Sheet panel */}
      <div
        ref={sheetRef}
        role="dialog"
        aria-modal="true"
        aria-label="Contact form"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        className={[
          "fixed bottom-0 left-0 right-0 z-[100] h-screen bg-white",
          "shadow-[0_-16px_80px_rgba(39,24,126,0.08)]",
          "transition-transform duration-500 ease-[cubic-bezier(0.2,0.6,0.2,1)]",
          translate,
          sheet === "expanded" ? "rounded-t-[8px]" : "rounded-t-[28px]",
        ].join(" ")}
      >
        <div
          ref={scrollRef}
          className={`h-full ${sheet === "expanded" ? "overflow-y-auto" : "overflow-hidden"}`}
        >
          <div className="px-[clamp(20px,4vw,56px)] pb-24 pt-5">
            {/* Drag handle — fades when expanded */}
            <div
              className={[
                "mx-auto mb-5 h-1 w-9 rounded-full bg-ink/15 transition-opacity duration-300",
                sheet === "expanded" ? "opacity-0" : "opacity-100",
              ].join(" ")}
            />

            {/* Close button */}
            <div className="mb-8 flex justify-end">
              <button
                onClick={reset}
                aria-label="Close"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-ink/6 text-ink/40 transition-[background,color] duration-200 hover:bg-ink/10 hover:text-ink"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M1 1l12 12M13 1L1 13"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <div className="mx-auto max-w-[860px]">
              {submitted ? (
                /* Success state */
                <div className="flex min-h-[40vh] flex-col justify-center">
                  <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.16em] text-blue">
                    — Message received
                  </div>
                  <h2 className="font-display text-[clamp(40px,6vw,80px)] font-normal leading-[0.92] tracking-[-0.04em] text-ink">
                    We&apos;ll be in
                    <br />
                    <em className="font-serif font-normal italic text-blue">
                      touch soon.
                    </em>
                  </h2>
                  <p className="mt-5 text-[15px] text-ink/55">
                    Expect to hear from us within one business day.
                  </p>
                  <button
                    onClick={reset}
                    className="mt-10 inline-flex items-center gap-3 self-start rounded-full bg-ink px-8 py-4 text-[14px] font-medium tracking-[-0.01em] text-paper transition-[background,transform] duration-200 hover:-translate-y-0.5 hover:bg-ink-2"
                  >
                    Close
                  </button>
                </div>
              ) : (
                /* Form */
                <>
                  <div className="mb-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ink/35">
                    — Let&apos;s work together
                  </div>
                  <h2 className="mb-3 font-display text-[clamp(40px,6vw,80px)] font-normal leading-[0.92] tracking-[-0.04em] text-ink">
                    Let&apos;s get
                    <br />
                    started.
                  </h2>
                  <p className="mb-10 text-[15px] leading-relaxed text-ink/55">
                    Fill in the details — we&apos;ll respond within one business
                    day.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
                      <FieldGroup label="What's your name?" required>
                        <input
                          type="text"
                          value={form.name}
                          onChange={(e) =>
                            setForm((f) => ({ ...f, name: e.target.value }))
                          }
                          placeholder="Your name here"
                          required
                          className={inputClass}
                        />
                      </FieldGroup>

                      <FieldGroup label="Name of your company?" required>
                        <input
                          type="text"
                          value={form.company}
                          onChange={(e) =>
                            setForm((f) => ({ ...f, company: e.target.value }))
                          }
                          placeholder="Widgets, Inc"
                          required
                          className={inputClass}
                        />
                      </FieldGroup>

                      <FieldGroup label="How shall we contact you? — Phone" required>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) =>
                            setForm((f) => ({ ...f, phone: e.target.value }))
                          }
                          placeholder="+61 400 000 000"
                          required
                          className={inputClass}
                        />
                      </FieldGroup>

                      <FieldGroup label="How shall we contact you? — Email" required>
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) =>
                            setForm((f) => ({ ...f, email: e.target.value }))
                          }
                          placeholder="hello@company.com"
                          required
                          className={inputClass}
                        />
                      </FieldGroup>
                    </div>

                    <FieldGroup label="Tell us about the project" optional>
                      <textarea
                        value={form.project}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, project: e.target.value }))
                        }
                        placeholder="Need a new website? An app? Let us know how we can help."
                        rows={4}
                        className={`${inputClass} resize-none`}
                      />
                    </FieldGroup>

                    <div className="flex justify-end pt-2">
                      <button
                        type="submit"
                        className="inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 text-[15px] font-medium tracking-[-0.01em] text-paper transition-[background,transform] duration-200 hover:-translate-y-0.5 hover:bg-ink-2"
                      >
                        Send it <span>→</span>
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function FieldGroup({
  label,
  required,
  optional,
  children,
}: {
  label: string;
  required?: boolean;
  optional?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3">
      <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink/45">
        {label}
        {required && (
          <span className="ml-0.5 text-blue" aria-hidden>
            *
          </span>
        )}
        {optional && (
          <span className="ml-1.5 normal-case tracking-normal opacity-55">
            (optional)
          </span>
        )}
      </span>
      {children}
    </div>
  );
}
