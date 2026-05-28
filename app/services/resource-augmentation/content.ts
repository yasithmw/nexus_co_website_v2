export const CONTENT = {
  hero: {
    label: "Resource Augmentation",
    headline: "Real engineers. No hiring circus.",
    sub: "We place vetted senior engineers inside your team — accountable for outcomes, not just hours. No warm bodies, no bait-and-switch juniors, no three-month ramp before anyone ships anything.",
  },

  overview: {
    headline: "Ready when you are.",
    body: "Most hiring delays don't kill projects — but they slow them down enough that the window closes. We've seen it too many times: six weeks of recruiting, a \"senior\" engineer who needs handholding, and a critical deadline that quietly slips. There's a faster way.",
    features: [
      {
        title: "Senior Engineers On-Demand",
        desc: "Every engineer we place has at least eight years of production experience. We don't roster mid-levels and bill them as seniors. You get someone who can read an unfamiliar codebase on Monday and have a pull request in review by Thursday — without needing your team to babysit them.",
      },
      {
        title: "Team Extension & Embedding",
        desc: "Our engineers work inside your team, not alongside it. Same Slack, same standups, same tools. They take on sprint work, attend retros, and carry the same accountability your permanent engineers do. The only difference is the contract.",
      },
      {
        title: "Critical Project Support",
        desc: "When something has to ship and your team doesn't have the capacity or the specific expertise, we fill the gap. Whether it's a migration, a security fix, a platform rebuild, or a feature sprint with a hard deadline — we put the right engineer on it and they own the outcome.",
      },
      {
        title: "Technical Leadership",
        desc: "Sometimes the gap isn't headcount — it's direction. We can place a senior tech lead or architect to set standards, unblock decisions, and get a team moving with more confidence. Useful when you're scaling fast and your most experienced person is already stretched thin.",
      },
    ],
  },

  approach: [
    {
      step: "01",
      headline: "Understand the gap — not just the job spec.",
      body: "We start with a direct conversation about what's actually slowing you down. Not a job description — a real discussion about the problem: what's stalled, what skills are missing, what the team dynamic looks like, and what success looks like in 60 days. That brief shapes who we match you with. It also catches mismatches before anyone starts.",
      imageAlt: "Engineer and client talking through a project brief with a whiteboard in the background",
    },
    {
      step: "02",
      headline: "Match fast. Onboard faster.",
      body: "We don't send you five CVs and ask you to interview. We send you one or two engineers who are right for the role, and we tell you exactly why. Once you've confirmed the match, we handle the onboarding brief — codebase overview, team norms, first-week objectives — so the engineer is productive from day one. Most engagements start within five business days of the brief.",
      imageAlt: "Engineer reviewing codebase documentation on day one of an engagement",
    },
    {
      step: "03",
      headline: "Stay as long as needed. Leave cleanly.",
      body: "There's no minimum lock-in and no awkward off-boarding. When the work is done or your needs change, the engagement ends. If things are going well and you want to extend, that's straightforward too. Either way, we document what was built and hand over cleanly — so your team is never dependent on someone who's already left.",
      imageAlt: "Handover documentation and knowledge transfer session between engineers",
    },
  ],

  testimonials: [
    {
      quote: "We had four weeks to deliver a payment integration before our enterprise client went live. Our team was already at capacity. Create Lyft placed a senior backend engineer within three days — he was in our Jira and pushing code by day two. We shipped on time. I don't think we would have without him.",
      name: "Marcus Leung",
      company: "Parafin Financial",
    },
    {
      quote: "We spent two months trying to hire a senior infrastructure engineer through the usual channels. Three offers, two rejections, one no-show on start date. A colleague suggested Create Lyft. We had someone embedded within a week. We ended up keeping him on for seven months. I'm still annoyed we wasted so much time recruiting first.",
      name: "Sarah Thornton",
      company: "Radia Health",
    },
    {
      quote: "We've had a Create Lyft engineer embedded with our platform team for almost a year now. She's not a contractor who turns up and does tickets — she runs our infrastructure guild, mentors two of our junior engineers, and has more context on our architecture than most of the permanent team. It's a better arrangement than another headcount would have been.",
      name: "James Okafor",
      company: "Stackline Commerce",
    },
  ],

  faq: [
    {
      q: "How quickly can an engineer start?",
      a: "Most engagements start within three to five business days of the brief. Complex or highly specialised roles can take up to two weeks. We'll tell you the realistic timeline upfront — we'd rather set an honest expectation than promise speed we can't deliver.",
    },
    {
      q: "What does \"senior\" actually mean to you?",
      a: "A minimum of eight years of production experience in the relevant stack. Someone who can be handed an unfamiliar codebase, understand it without a guide, and make sound architectural decisions under pressure. We verify this before anyone goes anywhere near a client engagement — through technical interviews, reference checks, and a review of real work they've shipped. We don't call someone senior because they have eight years of experience doing junior work.",
    },
    {
      q: "Is there a minimum engagement length? Can we scale up or down?",
      a: "The minimum engagement is four weeks. Beyond that, you can scale the commitment up or down with two weeks' notice in either direction. If you need two engineers one month and one the next, that's fine. We build in the flexibility because your needs will change — and contracts that don't account for that just create friction.",
    },
    {
      q: "How does billing work?",
      a: "We bill on a monthly retainer, priced by the day rate of the engineer placed. The rate is agreed upfront and doesn't move mid-engagement. There are no recruitment fees, placement charges, or end-of-engagement costs. You get a single monthly invoice with a clean breakdown. We'll provide a full rate card before any paperwork is signed.",
    },
    {
      q: "What if the engineer isn't the right fit?",
      a: "Tell us within the first two weeks and we'll replace them at no additional cost. We take the match seriously because a bad fit wastes your time and ours. If there's a genuine mismatch in working style or technical approach, we'd rather know early and fix it than have you push through a difficult engagement out of politeness.",
    },
    {
      q: "How do embedded engineers work with our existing team, tools, and processes?",
      a: "They use your tools, attend your meetings, and follow your processes — not ours. We ask for a brief onboarding document and access to your environment, and then the engineer slots into your team like any other hire would. We don't impose a Create Lyft way of working. The only visible difference is who signs their contract.",
    },
  ],
} as const;
