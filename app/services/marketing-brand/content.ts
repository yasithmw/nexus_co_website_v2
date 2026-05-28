export const CONTENT = {
  hero: {
    label: "Marketing & Brand / 01",
    headline: "Brands built to outlast the launch.",
    sub: "Create Lyft handles brand identity, positioning, and performance marketing — with an engineering team in the same building, so what you promise and what you ship are the same thing.",
  },

  overview: {
    headline: "Built to be remembered.",
    body: "Most brand work looks good in a PDF and fades six months after launch. We design identity and campaigns that hold up under real conditions — because we stay on past the handover.",
    features: [
      {
        title: "Brand Identity",
        desc: "Logo, colour, type, visual language — built from a strategic brief, not gut feel. We go from messy positioning conversations to a system your whole team can actually use. Every decision is documented so it survives the first redesign request.",
      },
      {
        title: "Positioning & Messaging",
        desc: "What you do, who it's for, and why anyone should care — written plainly. We run structured workshops to find the thing that's genuinely true and genuinely useful, then sharpen it into language that holds up across every channel. No mission statements that could belong to any company on the ASX.",
      },
      {
        title: "Campaign Creative",
        desc: "Concepts grounded in the brief, not borrowed from last year's award show. We handle art direction, copywriting, and production — from a single launch campaign to a twelve-month content programme. The work is designed to perform, not just to look good in the Figma handover.",
      },
      {
        title: "Performance Marketing",
        desc: "Paid search, paid social, and SEO — run by people who understand both the numbers and the creative. We set up the tracking first, so you know what's working before you spend. No monthly reports full of metrics that don't connect to revenue.",
      },
    ],
  },

  approach: [
    {
      step: "01",
      headline: "Understand before we make anything.",
      body: "Every brand project starts with a discovery sprint — competitor landscape, customer language, internal alignment. We ask uncomfortable questions early because they're cheaper to answer before the logo is in production. You get a clear brief everyone has signed off on before a single pixel moves.",
      imageAlt: "Discovery workshop with sticky notes and brand audit documents on a table",
    },
    {
      step: "02",
      headline: "Strategy and creative, together.",
      body: "We don't hand a brief from a strategist to a designer and hope for the best. The people doing the thinking are the people doing the making. That means fewer revision rounds and creative that actually reflects the strategy — not a polished version of something unrelated.",
      imageAlt: "Designer and strategist working side-by-side on brand visual concepts",
    },
    {
      step: "03",
      headline: "Launch it. Then stay.",
      body: "We deliver brand guidelines, campaign assets, and anything else you need to go live. Then we stick around — either on retainer or on-call — to make sure the work lands the way it was meant to. If something isn't performing, we know about it and we fix it.",
      imageAlt: "Brand launch assets across digital and print formats",
    },
  ],

  testimonials: [
    {
      quote: "We'd been through two brand agencies in three years and ended up with a logo we hated and a slide deck nobody used. Create Lyft ran the whole process in eleven weeks, got our leadership team to agree on positioning for the first time, and delivered a system the team actually applies consistently.",
      name: "Priya Mehta",
      company: "Atticus Compliance",
    },
    {
      quote: "I was skeptical about hiring one studio for both the campaign and the product work — I'd always kept them separate. But having the same team handle the ad creative and the landing page meant the message was consistent and the conversion tracking was set up correctly from day one. Our cost per acquisition dropped 34% in the first quarter.",
      name: "Tom Haskell",
      company: "Groundwork Property Group",
    },
    {
      quote: "They told us in week two that our proposed positioning was too close to a competitor's and that we'd be wasting money amplifying it. That saved us from a campaign we'd been planning for four months. Honest people doing sharp work.",
      name: "Danielle Osei",
      company: "Clearpath Advisory",
    },
  ],

  faq: [
    {
      q: "How do you charge for brand work?",
      a: "Most brand projects are scoped and priced as a fixed fee — you know the cost before we start. Performance marketing is typically a monthly retainer with a percentage of ad spend. We don't bill hourly, because it creates the wrong incentives for everyone. We'll give you a detailed scope document before any contract is signed.",
    },
    {
      q: "How long does a brand identity project take?",
      a: "A full brand identity — strategy, visual identity, and brand guidelines — typically takes eight to twelve weeks. That timeline includes a two-week discovery sprint, two rounds of creative exploration, and a final production phase. Rush timelines are possible but they cost more, and they usually produce worse work.",
    },
    {
      q: "Do you offer ongoing retainers after the initial project?",
      a: "Yes. Most clients move onto a monthly retainer once the foundation work is done — covering campaign creative, paid media management, or both. Retainers start at a day per week and scale from there. You're not locked in long-term; we work on rolling three-month agreements.",
    },
    {
      q: "Do you work with early-stage startups or only established companies?",
      a: "Both, but the work looks different. With early-stage clients, we focus on getting the positioning right and building a lean identity system that can grow. With established businesses, we're often repositioning or refreshing something that's stopped working. The process is the same; the scope and budget usually aren't.",
    },
    {
      q: "What happens to the brand after the project ends?",
      a: "You get everything — source files, the full brand guidelines document, any templates we've built, and a handover session with your team. Nothing is locked to our tools or our accounts. If you want ongoing support, we can arrange it. If you don't, you have everything you need to manage it yourself.",
    },
    {
      q: "How does the engineering and brand integration actually work?",
      a: "Create Lyft runs engineering and creative under one roof, which means your brand guidelines inform the actual component library, not just a PDF. When the visual system is built, we build it into the product too — consistent type scales, colour tokens, interaction patterns. It's not a separate handoff; it's one continuous process. This is the thing that tends to surprise clients most.",
    },
  ],
} as const;
