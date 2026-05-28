export const CONTENT = {
  hero: {
    label: "Software Development",
    headline: "Code that ships. Products that work.",
    sub: "Create Lyft builds platforms, web apps, and internal tools with senior engineers who understand the product — not just the ticket. No offshore bench, no junior-heavy teams handed a spec and left to guess.",
  },

  overview: {
    headline: "Built to ship.",
    body: "Most development shops will build exactly what you ask for, even when what you asked for is wrong. We hire people who push back on bad ideas, ask why before they write a line of code, and treat the product outcome as their problem too.",
    features: [
      {
        title: "Web & Platform Engineering",
        desc: "Full-stack web applications and SaaS platforms, built from the ground up or taken over from a team that's run out of road. We scope the architecture before we touch the code, so the thing you ship in month one doesn't have to be rebuilt in month twelve. Production-ready, documented, and yours.",
      },
      {
        title: "Internal Tools & Automation",
        desc: "The manual processes eating your team's time — we find them, figure out what's actually worth automating, and build the thing that fixes it. Not a generic SaaS subscription that half-solves the problem. A tool shaped around how your team actually works, maintained by people who built it.",
      },
      {
        title: "API & Integrations",
        desc: "Third-party APIs, legacy systems, data pipelines — we connect them cleanly and document the joins so the next person isn't guessing. If the integration is fragile by nature, we tell you upfront and build monitoring around it. No surprises six months later when something quietly breaks.",
      },
      {
        title: "Technical Discovery & Architecture",
        desc: "Not sure what to build or how to build it? That's a normal place to start. We run structured discovery sprints that produce a clear technical direction, a realistic scope, and a build plan you can actually take to a board or an investor. We'll also tell you if the thing you want doesn't need to be custom-built at all.",
      },
    ],
  },

  approach: [
    {
      step: "01",
      headline: "Understand the problem before writing a line.",
      body: "Every project starts with a discovery phase — what the product needs to do, who will use it, where the existing system breaks down, and what success actually looks like. We ask the questions most developers skip because they're eager to start building. You get a written brief, a technical proposal, and a scope everyone has agreed to before we open an editor.",
      imageAlt: "Technical discovery session with whiteboard architecture diagrams and product requirements",
    },
    {
      step: "02",
      headline: "Senior engineers, start to finish.",
      body: "The engineer in the scoping call is the engineer who builds it. We don't do bait-and-switch — senior person sells the work, junior team delivers it. Every line of code is written by someone who has shipped production software before and knows the difference between a clean solution and one that'll hurt you later. Code review is mandatory. Documentation is part of the job.",
      imageAlt: "Two senior engineers reviewing architecture diagrams on a large monitor",
    },
    {
      step: "03",
      headline: "Launch it. Then make sure it holds.",
      body: "We stay through go-live, handle the first round of real-world problems, and do a proper handover — not a Loom video and a zip file. If you want us to keep running it, we can. If you want to take it in-house, we'll make sure your team actually understands what they're inheriting. Either way, you're not left alone with something you can't explain.",
      imageAlt: "Post-launch monitoring dashboard and handover documentation session",
    },
  ],

  testimonials: [
    {
      quote: "We'd burned six months and a significant budget with an offshore team that delivered something that technically worked but wasn't anything like what we'd described. Create Lyft came in, ran a two-week discovery sprint, and rebuilt the core platform in four months. It's been in production for eighteen months without a major incident.",
      name: "Marcus Leung",
      company: "Vantage Financial Technology",
    },
    {
      quote: "We needed a set of internal tools to replace a spreadsheet-based process our ops team had outgrown. I expected a long requirements document and a six-month build. Create Lyft scoped it properly, pushed back on two things we thought we needed but didn't, and shipped a working system in eight weeks. The team adopted it immediately because it was actually built around how they work.",
      name: "Sarah Kowalski",
      company: "Meridian Logistics Group",
    },
    {
      quote: "What I didn't expect was how much they'd push back on our original idea. Not in an obstinate way — they just kept asking what we were actually trying to achieve, which turned out to be a different problem than the one we'd asked them to solve. The product we shipped was smaller and cheaper than what we'd planned, and it solved the actual problem.",
      name: "James Okafor",
      company: "Fieldstone Advisory",
    },
  ],

  faq: [
    {
      q: "How do you price development projects?",
      a: "Most projects are scoped and priced as a fixed fee — you know the number before we start. For longer or more exploratory engagements, we work on a time-and-materials basis with a capped monthly spend. We don't do open-ended hourly billing, because it shifts all the risk onto you and removes our incentive to build efficiently. Either way, you get a detailed scope document before any contract is signed.",
    },
    {
      q: "How long does a typical project take?",
      a: "Scope determines timeline. A focused internal tool or integration typically runs six to ten weeks. A full platform build is more often four to six months, depending on complexity and how much discovery work is needed upfront. We'd rather give you an honest timeline than a fast one that slips. If your situation has a hard deadline, tell us early — we'll scope to it or tell you what's not achievable.",
    },
    {
      q: "Do you have a preferred tech stack, or do you work with what we have?",
      a: "Both. If you're greenfield, we'll recommend a stack that fits the problem — not the one we're most comfortable with. If you have an existing codebase, we'll work with it. We don't take on projects and then advocate for a full rewrite unless the existing code genuinely can't be saved. Stack choices are documented and explained so you're not dependent on us to understand your own system.",
    },
    {
      q: "Will you maintain the product after launch?",
      a: "Yes, if you want us to. Some clients keep us on a monthly retainer for ongoing development, bug fixes, and feature work. Others prefer a clean handover to an in-house team, which we support properly — documentation, knowledge transfer sessions, and a handover period where we're available to answer questions. We don't make ongoing support hard to exit.",
    },
    {
      q: "How do you handle scope changes mid-project?",
      a: "Scope changes happen. When they do, we assess the impact on timeline and cost, document the change, and you decide whether it's worth it. We won't quietly absorb scope that materially changes the project, and we won't surprise you with a bill at the end. Small changes within the spirit of the original brief are usually handled without a formal change order. Significant pivots are repriced and rescoped.",
    },
    {
      q: "What does 'senior engineers' actually mean in practice?",
      a: "It means the people building your product have shipped production software before — not in a graduate programme, in a real commercial context. Typically five-plus years of relevant experience, comfortable making architectural decisions without being told what to do, and able to tell you when your idea has a problem. We don't staff projects with juniors supervised by a senior who checks in occasionally. The person writing the code is the person accountable for it.",
    },
  ],
} as const;
