"use client";

import {
  useState,
  useRef,
  useEffect,
  type FormEvent,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";

type SheetState = "closed" | "partial" | "expanded";
type ServiceKey =
  | "marketing-brand"
  | "software-development"
  | "ai-machine-learning"
  | "resource-augmentation";

const SERVICES: Record<ServiceKey, { label: string; requirements: string[] }> = {
  "marketing-brand": {
    label: "Marketing & Brand",
    requirements: [
      "Brand Identity & Design",
      "Campaign Strategy",
      "Content Creation",
      "Digital Advertising",
      "Market Research",
    ],
  },
  "software-development": {
    label: "Software Development",
    requirements: [
      "Web Application",
      "Mobile App",
      "API & Backend",
      "E-commerce Solution",
      "Custom Platform",
    ],
  },
  "ai-machine-learning": {
    label: "AI & Machine Learning",
    requirements: [
      "RAG Pipeline",
      "Process Automation",
      "Predictive Analytics",
      "AI Integration",
      "Data Engineering",
    ],
  },
  "resource-augmentation": {
    label: "Resource Augmentation",
    requirements: [
      "Frontend Developer",
      "Backend Developer",
      "Full-Stack Developer",
      "Designer / Creative",
      "Product Manager",
    ],
  },
};

const SERVICE_KEYS = Object.keys(SERVICES) as ServiceKey[];

type Country = { name: string; dial: string; flag: string };

const COUNTRIES: Country[] = [
  { name: "Afghanistan", dial: "+93", flag: "🇦🇫" },
  { name: "Albania", dial: "+355", flag: "🇦🇱" },
  { name: "Algeria", dial: "+213", flag: "🇩🇿" },
  { name: "Argentina", dial: "+54", flag: "🇦🇷" },
  { name: "Armenia", dial: "+374", flag: "🇦🇲" },
  { name: "Australia", dial: "+61", flag: "🇦🇺" },
  { name: "Austria", dial: "+43", flag: "🇦🇹" },
  { name: "Azerbaijan", dial: "+994", flag: "🇦🇿" },
  { name: "Bahrain", dial: "+973", flag: "🇧🇭" },
  { name: "Bangladesh", dial: "+880", flag: "🇧🇩" },
  { name: "Belarus", dial: "+375", flag: "🇧🇾" },
  { name: "Belgium", dial: "+32", flag: "🇧🇪" },
  { name: "Bolivia", dial: "+591", flag: "🇧🇴" },
  { name: "Bosnia and Herzegovina", dial: "+387", flag: "🇧🇦" },
  { name: "Brazil", dial: "+55", flag: "🇧🇷" },
  { name: "Bulgaria", dial: "+359", flag: "🇧🇬" },
  { name: "Cambodia", dial: "+855", flag: "🇰🇭" },
  { name: "Canada", dial: "+1", flag: "🇨🇦" },
  { name: "Chile", dial: "+56", flag: "🇨🇱" },
  { name: "China", dial: "+86", flag: "🇨🇳" },
  { name: "Colombia", dial: "+57", flag: "🇨🇴" },
  { name: "Croatia", dial: "+385", flag: "🇭🇷" },
  { name: "Cyprus", dial: "+357", flag: "🇨🇾" },
  { name: "Czech Republic", dial: "+420", flag: "🇨🇿" },
  { name: "Denmark", dial: "+45", flag: "🇩🇰" },
  { name: "Ecuador", dial: "+593", flag: "🇪🇨" },
  { name: "Egypt", dial: "+20", flag: "🇪🇬" },
  { name: "Estonia", dial: "+372", flag: "🇪🇪" },
  { name: "Ethiopia", dial: "+251", flag: "🇪🇹" },
  { name: "Finland", dial: "+358", flag: "🇫🇮" },
  { name: "France", dial: "+33", flag: "🇫🇷" },
  { name: "Georgia", dial: "+995", flag: "🇬🇪" },
  { name: "Germany", dial: "+49", flag: "🇩🇪" },
  { name: "Ghana", dial: "+233", flag: "🇬🇭" },
  { name: "Greece", dial: "+30", flag: "🇬🇷" },
  { name: "Hong Kong", dial: "+852", flag: "🇭🇰" },
  { name: "Hungary", dial: "+36", flag: "🇭🇺" },
  { name: "India", dial: "+91", flag: "🇮🇳" },
  { name: "Indonesia", dial: "+62", flag: "🇮🇩" },
  { name: "Iran", dial: "+98", flag: "🇮🇷" },
  { name: "Iraq", dial: "+964", flag: "🇮🇶" },
  { name: "Ireland", dial: "+353", flag: "🇮🇪" },
  { name: "Israel", dial: "+972", flag: "🇮🇱" },
  { name: "Italy", dial: "+39", flag: "🇮🇹" },
  { name: "Japan", dial: "+81", flag: "🇯🇵" },
  { name: "Jordan", dial: "+962", flag: "🇯🇴" },
  { name: "Kazakhstan", dial: "+7", flag: "🇰🇿" },
  { name: "Kenya", dial: "+254", flag: "🇰🇪" },
  { name: "Kuwait", dial: "+965", flag: "🇰🇼" },
  { name: "Latvia", dial: "+371", flag: "🇱🇻" },
  { name: "Lebanon", dial: "+961", flag: "🇱🇧" },
  { name: "Lithuania", dial: "+370", flag: "🇱🇹" },
  { name: "Luxembourg", dial: "+352", flag: "🇱🇺" },
  { name: "Malaysia", dial: "+60", flag: "🇲🇾" },
  { name: "Mexico", dial: "+52", flag: "🇲🇽" },
  { name: "Morocco", dial: "+212", flag: "🇲🇦" },
  { name: "Netherlands", dial: "+31", flag: "🇳🇱" },
  { name: "New Zealand", dial: "+64", flag: "🇳🇿" },
  { name: "Nigeria", dial: "+234", flag: "🇳🇬" },
  { name: "Norway", dial: "+47", flag: "🇳🇴" },
  { name: "Oman", dial: "+968", flag: "🇴🇲" },
  { name: "Pakistan", dial: "+92", flag: "🇵🇰" },
  { name: "Peru", dial: "+51", flag: "🇵🇪" },
  { name: "Philippines", dial: "+63", flag: "🇵🇭" },
  { name: "Poland", dial: "+48", flag: "🇵🇱" },
  { name: "Portugal", dial: "+351", flag: "🇵🇹" },
  { name: "Qatar", dial: "+974", flag: "🇶🇦" },
  { name: "Romania", dial: "+40", flag: "🇷🇴" },
  { name: "Russia", dial: "+7", flag: "🇷🇺" },
  { name: "Saudi Arabia", dial: "+966", flag: "🇸🇦" },
  { name: "Singapore", dial: "+65", flag: "🇸🇬" },
  { name: "Slovakia", dial: "+421", flag: "🇸🇰" },
  { name: "Slovenia", dial: "+386", flag: "🇸🇮" },
  { name: "South Africa", dial: "+27", flag: "🇿🇦" },
  { name: "South Korea", dial: "+82", flag: "🇰🇷" },
  { name: "Spain", dial: "+34", flag: "🇪🇸" },
  { name: "Sri Lanka", dial: "+94", flag: "🇱🇰" },
  { name: "Sweden", dial: "+46", flag: "🇸🇪" },
  { name: "Switzerland", dial: "+41", flag: "🇨🇭" },
  { name: "Taiwan", dial: "+886", flag: "🇹🇼" },
  { name: "Thailand", dial: "+66", flag: "🇹🇭" },
  { name: "Tunisia", dial: "+216", flag: "🇹🇳" },
  { name: "Turkey", dial: "+90", flag: "🇹🇷" },
  { name: "Ukraine", dial: "+380", flag: "🇺🇦" },
  { name: "United Arab Emirates", dial: "+971", flag: "🇦🇪" },
  { name: "United Kingdom", dial: "+44", flag: "🇬🇧" },
  { name: "United States", dial: "+1", flag: "🇺🇸" },
  { name: "Uruguay", dial: "+598", flag: "🇺🇾" },
  { name: "Uzbekistan", dial: "+998", flag: "🇺🇿" },
  { name: "Venezuela", dial: "+58", flag: "🇻🇪" },
  { name: "Vietnam", dial: "+84", flag: "🇻🇳" },
];

export function ContactFormSheetEnhanced({
  triggerVariant = "paper",
  triggerLabel,
  initialService,
}: {
  triggerVariant?: "paper" | "ink";
  triggerLabel?: string;
  initialService?: ServiceKey;
} = {}) {
  const [sheet, setSheet] = useState<SheetState>("closed");
  const [submitted, setSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [requirementsOpen, setRequirementsOpen] = useState(false);
  const [countryOpen, setCountryOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<Country>(
    COUNTRIES.find((c) => c.name === "Australia")!
  );
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    service: (initialService ?? "") as ServiceKey | "",
    requirements: [] as string[],
    project: "",
  });

  const sheetRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (sheet !== "closed" && initialService && form.service === "") {
      setForm((f) => ({ ...f, service: initialService }));
    }
  }, [sheet, initialService, form.service]);

  // Lock body scroll when sheet is open
  useEffect(() => {
    document.body.style.overflow = sheet === "expanded" ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [sheet]);

  // Escape key: close dropdowns innermost-first, then sheet
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (countryOpen) {
          setCountryOpen(false);
        } else if (requirementsOpen) {
          setRequirementsOpen(false);
        } else {
          setSheet("closed");
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [requirementsOpen, countryOpen]);

  // External trigger — any component can dispatch "open-contact-form-enhanced"
  useEffect(() => {
    const onOpen = () => setSheet("expanded");
    window.addEventListener("open-contact-form-enhanced", onOpen);
    return () => window.removeEventListener("open-contact-form-enhanced", onOpen);
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Contact form submission:", form);
    setSubmitted(true);
  };

  const reset = () => {
    setSheet("closed");
    setTimeout(() => {
      setSubmitted(false);
      setRequirementsOpen(false);
      setForm({
        name: "",
        company: "",
        phone: "",
        email: "",
        service: initialService ?? "",
        requirements: [],
        project: "",
      });
    }, 500);
  };

  const toggleRequirement = (req: string) => {
    setForm((f) => ({
      ...f,
      requirements: f.requirements.includes(req)
        ? f.requirements.filter((r) => r !== req)
        : [...f.requirements, req],
    }));
  };

  const translate = sheet === "closed" ? "translate-y-full" : "translate-y-0";

  const inputClass =
    "w-full border-b border-ink/15 bg-transparent pb-3 text-[16px] tracking-[-0.01em] text-ink placeholder:text-ink/25 focus:border-ink focus:outline-none transition-colors duration-200";

  const selectedService = form.service ? SERVICES[form.service] : null;

  const filteredCountries = countrySearch.trim()
    ? COUNTRIES.filter(
        (c) =>
          c.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
          c.dial.includes(countrySearch)
      )
    : COUNTRIES;

  const requirementsSummary =
    form.requirements.length === 0
      ? "Select what you need"
      : form.requirements.length === 1
        ? form.requirements[0]
        : `${form.requirements[0]} +${form.requirements.length - 1} more`;

  const overlay = (
    <>
      {/* Backdrop */}
      <div
        aria-hidden
        onClick={() => {
          setRequirementsOpen(false);
          setSheet("closed");
        }}
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
        className={[
          "fixed bottom-0 left-0 right-0 z-[100] h-screen rounded-t-[8px] bg-white",
          "shadow-[0_-16px_80px_rgba(39,24,126,0.08)]",
          "transition-transform duration-500 ease-[cubic-bezier(0.2,0.6,0.2,1)]",
          translate,
        ].join(" ")}
      >
        <div
          ref={scrollRef}
          className="h-full overflow-y-auto"
          onClick={() => {
            if (requirementsOpen) setRequirementsOpen(false);
            if (countryOpen) setCountryOpen(false);
          }}
        >
          <div className="px-[clamp(20px,4vw,56px)] pb-24 pt-2">

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
                  <h2 className="mb-3 font-display text-[clamp(40px,6vw,80px)] font-normal leading-[0.92] tracking-[-0.04em] text-ink">
                    Let&apos;s get started.
                  </h2>
                  <p className="mb-10 text-[15px] leading-relaxed text-ink/55">
                    Fill in the details — we&apos;ll respond within one business
                    day.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-10">
                    {/* ── Service selector ── */}
                    <FieldGroup label="Which service are you interested in?" required>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {SERVICE_KEYS.map((key) => (
                          <button
                            key={key}
                            type="button"
                            onClick={() =>
                              setForm((f) => ({
                                ...f,
                                service: f.service === key ? "" : key,
                                requirements: [],
                              }))
                            }
                            className={[
                              "rounded-full border px-4 py-2 text-[13px] font-medium tracking-[-0.01em] transition-all duration-200",
                              form.service === key
                                ? "border-ink bg-ink text-paper"
                                : "border-ink/15 text-ink/55 hover:border-ink/35 hover:text-ink",
                            ].join(" ")}
                          >
                            {SERVICES[key].label}
                          </button>
                        ))}
                      </div>
                    </FieldGroup>

                    {/* ── Requirements multi-select ── */}
                    {selectedService && (
                      <FieldGroup
                        label={`What do you need? — ${selectedService.label}`}
                        optional
                      >
                        <div
                          className="relative"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {/* Trigger */}
                          <button
                            type="button"
                            onClick={() => setRequirementsOpen((o) => !o)}
                            className={[
                              "flex w-full items-center justify-between border-b pb-3 text-left text-[16px] tracking-[-0.01em] transition-colors duration-200",
                              requirementsOpen
                                ? "border-ink"
                                : "border-ink/15",
                              form.requirements.length > 0
                                ? "text-ink"
                                : "text-ink/25",
                            ].join(" ")}
                          >
                            <span className="truncate pr-3">
                              {requirementsSummary}
                            </span>
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 14 14"
                              fill="none"
                              aria-hidden
                              className={`flex-shrink-0 text-ink/40 transition-transform duration-200 ${requirementsOpen ? "rotate-180" : ""}`}
                            >
                              <path
                                d="M2 5l5 5 5-5"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>

                          {/* Dropdown panel */}
                          {requirementsOpen && (
                            <div className="absolute left-0 right-0 top-full z-10 mt-1 overflow-hidden rounded-[12px] border border-ink/10 bg-white shadow-[0_8px_32px_rgba(39,24,126,0.10)]">
                              {selectedService.requirements.map((req) => {
                                const checked = form.requirements.includes(req);
                                return (
                                  <label
                                    key={req}
                                    className="flex cursor-pointer items-center gap-3 px-4 py-3 transition-colors duration-150 hover:bg-ink/[0.03]"
                                  >
                                    <span
                                      className={[
                                        "flex h-[18px] w-[18px] flex-shrink-0 items-center justify-center rounded border transition-all duration-150",
                                        checked
                                          ? "border-ink bg-ink"
                                          : "border-ink/20 bg-transparent",
                                      ].join(" ")}
                                    >
                                      {checked && (
                                        <svg
                                          width="9"
                                          height="7"
                                          viewBox="0 0 9 7"
                                          fill="none"
                                          aria-hidden
                                        >
                                          <path
                                            d="M1 3.5l2.5 2.5 4.5-5"
                                            stroke="white"
                                            strokeWidth="1.4"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                        </svg>
                                      )}
                                    </span>
                                    <input
                                      type="checkbox"
                                      className="sr-only"
                                      checked={checked}
                                      onChange={() => toggleRequirement(req)}
                                    />
                                    <span className="text-[14px] tracking-[-0.01em] text-ink/75">
                                      {req}
                                    </span>
                                  </label>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      </FieldGroup>
                    )}

                    {/* ── Contact details ── */}
                    <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
                      <FieldGroup label="Name" required>
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

                      <FieldGroup label="Company" required>
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

                    </div>

                    {/* ── How shall we contact you ── */}
                    <div className="flex flex-col gap-3">
                      <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink/45">
                        How shall we contact you?
                        <span className="ml-0.5 text-blue" aria-hidden>*</span>
                      </span>
                      <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
                        <FieldGroup label="Phone" required>
                          <div
                            className="relative flex items-center gap-2 border-b border-ink/15 pb-3 transition-colors duration-200 focus-within:border-ink"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {/* Country code trigger */}
                            <button
                              type="button"
                              onClick={() => {
                                setCountryOpen((o) => !o);
                                setCountrySearch("");
                              }}
                              className="flex flex-shrink-0 items-center gap-1 text-[16px] text-ink"
                            >
                              <span className="leading-none">{selectedCountry.flag}</span>
                              <span className="tracking-[-0.01em]">{selectedCountry.dial}</span>
                              <svg
                                width="10"
                                height="10"
                                viewBox="0 0 10 10"
                                fill="none"
                                aria-hidden
                                className={`flex-shrink-0 text-ink/40 transition-transform duration-200 ${countryOpen ? "rotate-180" : ""}`}
                              >
                                <path
                                  d="M2 3.5 L5 6.5 L8 3.5"
                                  stroke="currentColor"
                                  strokeWidth="1.4"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </button>

                            <span className="h-4 w-px flex-shrink-0 bg-ink/15" />

                            <input
                              type="tel"
                              value={form.phone}
                              onChange={(e) =>
                                setForm((f) => ({ ...f, phone: e.target.value }))
                              }
                              placeholder="400 000 000"
                              required
                              className="flex-1 bg-transparent text-[16px] tracking-[-0.01em] text-ink placeholder:text-ink/25 focus:outline-none"
                            />

                            {/* Country dropdown */}
                            {countryOpen && (
                              <div className="absolute left-0 top-full z-20 mt-2 w-[300px] overflow-hidden rounded-[12px] border border-ink/10 bg-white shadow-[0_8px_32px_rgba(39,24,126,0.12)]">
                                <div className="border-b border-ink/8 px-3 py-2.5">
                                  <input
                                    type="text"
                                    value={countrySearch}
                                    onChange={(e) => setCountrySearch(e.target.value)}
                                    placeholder="Search country or code…"
                                    autoFocus
                                    className="w-full bg-transparent text-[13px] tracking-[-0.01em] text-ink placeholder:text-ink/30 focus:outline-none"
                                  />
                                </div>
                                <div className="max-h-[220px] overflow-y-auto">
                                  {filteredCountries.length > 0 ? (
                                    filteredCountries.map((c) => (
                                      <button
                                        key={`${c.name}-${c.dial}`}
                                        type="button"
                                        onClick={() => {
                                          setSelectedCountry(c);
                                          setCountryOpen(false);
                                          setCountrySearch("");
                                        }}
                                        className={[
                                          "flex w-full items-center gap-2.5 px-3.5 py-2.5 text-left transition-colors duration-150 hover:bg-ink/[0.03]",
                                          selectedCountry.name === c.name
                                            ? "bg-ink/[0.05]"
                                            : "",
                                        ].join(" ")}
                                      >
                                        <span className="w-6 flex-shrink-0 text-center text-[15px] leading-none">
                                          {c.flag}
                                        </span>
                                        <span className="flex-1 text-[13px] tracking-[-0.01em] text-ink/80">
                                          {c.name}
                                        </span>
                                        <span className="flex-shrink-0 font-mono text-[12px] text-ink/40">
                                          {c.dial}
                                        </span>
                                      </button>
                                    ))
                                  ) : (
                                    <div className="px-4 py-3 text-[13px] text-ink/35">
                                      No countries found
                                    </div>
                                  )}
                                </div>
                              </div>
                            )}
                          </div>
                        </FieldGroup>

                        <FieldGroup label="Email" required>
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

  return (
    <>
      {/* Trigger */}
      <button
        onClick={() => setSheet("expanded")}
        className={
          triggerVariant === "ink"
            ? "self-start inline-flex items-center gap-3 rounded-full bg-ink px-8 py-[18px] text-[16px] font-medium tracking-[-0.01em] text-paper transition-[background,transform] duration-200 hover:-translate-y-0.5 hover:bg-ink-2"
            : "mb-[100px] inline-flex items-center gap-4 rounded-full bg-paper px-[30px] py-[22px] text-[17px] font-medium tracking-[-0.01em] text-ink transition-[padding,transform] duration-200 hover:-translate-y-0.5 hover:pr-10"
        }
      >
        {triggerVariant === "paper" && (
          <span className="h-2 w-2 rounded-full bg-ink" />
        )}
        {triggerLabel ?? "connect@createlyft.com"}
        <span>→</span>
      </button>
      {mounted && createPortal(overlay, document.body)}
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
