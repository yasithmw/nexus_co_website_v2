"use client";

type TestimonialItem = {
  quote: string;
  name: string;
  company: string;
  bg: string;
};

type ServiceTestimonialsStackProps = {
  testimonials: TestimonialItem[];
};

export function ServiceTestimonialsStack({
  testimonials,
}: ServiceTestimonialsStackProps) {
  return (
    <section className="relative">
      {testimonials.map((item, i) => (
        <div
          key={i}
          className="sticky top-0 flex min-h-screen items-center px-[clamp(20px,4vw,56px)] py-16"
          style={{ backgroundColor: item.bg }}
        >
          <div className="mx-auto w-full max-w-[1440px]">
            <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
              {/* Left: image placeholder */}
              <div className="flex items-center justify-center">
                <div
                  className="rounded-[var(--radius-lg)] border border-ink/10 aspect-square w-full max-w-[420px]"
                  style={{ backgroundColor: "rgba(39,24,126,0.06)" }}
                  aria-hidden
                />
              </div>

              {/* Right: quote */}
              <div className="flex flex-col gap-6">
                {/* Decorative opening mark */}
                <span
                  className="font-display font-bold leading-none text-ink select-none"
                  style={{ fontSize: "clamp(80px,10vw,120px)", opacity: 0.15 }}
                  aria-hidden
                >
                  &ldquo;
                </span>

                <blockquote>
                  <p className="font-display font-bold text-[clamp(20px,2.6vw,36px)] tracking-[-0.03em] leading-[1.2] text-ink -mt-8">
                    {item.quote}
                  </p>

                  <footer className="mt-8 flex flex-col gap-1">
                    <cite className="not-italic font-display font-semibold text-[15px] tracking-[-0.01em] text-ink">
                      {item.name}
                    </cite>
                    <span className="font-mono text-[12px] tracking-[0.06em] text-ink/60">
                      {item.company}
                    </span>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
