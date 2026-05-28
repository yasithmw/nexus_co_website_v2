import type { Metadata } from "next";
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
            { ...CONTENT.testimonials[0], bg: "#fbe4d2" },
            { ...CONTENT.testimonials[1], bg: "#aeb8fe" },
            { ...CONTENT.testimonials[2], bg: "#e8e9f0" },
          ]}
        />

        {/* FAQ */}
        <div className="shell">
          <ServiceFAQ questions={CONTENT.faq} />
        </div>

        {/* Other services — full bleed (paper-2 bg) */}
        <ServiceOtherServices />

        {/* Contact */}
        <Contact />
      </main>
    </>
  );
}
