export const CONTENT = {
  hero: {
    label: "AI & Machine Learning",
    headline: "AI that ships. Not AI that slides.",
    sub: "Create Lyft builds RAG pipelines, prediction models, and intelligent automation that go into production — not into a staging environment where promising projects go to be forgotten. We've never handed over a proof of concept and called it a day.",
  },

  overview: {
    headline: "Built to run in the real world.",
    body: "Most AI projects fail at the same point: they prove the concept and never cross into production. You end up with an impressive demo, a large invoice, and a model nobody maintains. We build for deployment from day one — with the infrastructure, monitoring, and handover process to match.",
    features: [
      {
        title: "RAG & Knowledge Systems",
        desc: "Retrieval-augmented generation built on your actual data — documents, databases, internal knowledge bases. We design the retrieval pipeline, tune the chunking strategy, and set accuracy thresholds before anything goes near a user. The result is a system that answers from your sources, not from the model's best guess.",
      },
      {
        title: "Prediction & Classification Models",
        desc: "Demand forecasting, churn prediction, anomaly detection, document classification — scoped to the specific decision you need to improve. We start with the outcome you care about, work backwards to the data you have, and build something that beats your current heuristic. If it doesn't, we tell you before you commit to a build.",
      },
      {
        title: "Intelligent Automation",
        desc: "AI-assisted workflows that replace manual, repetitive steps — document extraction, triage routing, approval queues, compliance checks. We identify the steps worth automating first, build targeted interventions rather than sprawling systems, and integrate with the tools your team already uses.",
      },
      {
        title: "AI Strategy & Technical Discovery",
        desc: "A structured assessment of where AI creates real value in your operation — and where it doesn't. We map your data, identify high-ROI opportunities, assess build-vs-buy, and produce a prioritised roadmap. Sometimes the output is a build plan. Sometimes it's a recommendation not to build. Both are worth knowing.",
      },
    ],
  },

  approach: [
    {
      step: "01",
      headline: "Find the problem worth solving.",
      body: "Not every business problem is an AI problem — and the wrong framing wastes months. We start with a discovery sprint: your data, your workflows, and the specific decisions you need to make faster or better. We define the success metric before we write a line of model code, so there's no ambiguity about whether it's working. You leave with a scoped problem statement and a business case, not a technology wish list.",
      imageAlt: "Technical discovery session mapping data sources and workflow decision points on a whiteboard",
    },
    {
      step: "02",
      headline: "Build and validate in real conditions.",
      body: "We prototype against production data, not a cleaned sample we made ourselves. That means your edge cases surface early — messy inputs, missing fields, the documents that don't fit the template. We iterate against real accuracy targets and test for the failure modes that matter in your context, not just benchmark scores. When we hand you a model, you've already seen it handle your worst data.",
      imageAlt: "Engineers reviewing model evaluation metrics and pipeline architecture on shared screens",
    },
    {
      step: "03",
      headline: "Deploy, monitor, and keep it honest.",
      body: "AI degrades. Data drifts, edge cases accumulate, the world changes and the model doesn't. We build monitoring into every deployment — tracking accuracy, catching drift, and alerting before a silent failure becomes a business problem. We document the retraining process so your team can manage it, and we stay available when something unexpected happens. Which it will.",
      imageAlt: "Model monitoring dashboard showing accuracy trends and data drift indicators over time",
    },
  ],

  testimonials: [
    {
      quote: "We're a mid-size legal firm. We had four years of matter files sitting in a document management system and no way to query across them. Create Lyft built a retrieval system in nine weeks that lets our lawyers ask plain-English questions and get answers with source citations. The accuracy rate is 94% on our test set, and it's been running in production for seven months without a meaningful failure.",
      name: "Catherine Drummond",
      company: "Drummond & Hale Lawyers",
    },
    {
      quote: "We were manually reviewing 1,200 supplier invoices a month — a three-person job. Create Lyft built a classification and extraction model that handles 87% of them without human review. The remaining 13% get flagged for a second look. That freed up two full-time roles within the first quarter. The model's been in production for eight months and accuracy has improved, not declined.",
      name: "Marcus Teo",
      company: "Bellwether Procurement",
    },
    {
      quote: "I'll be straight — I came in thinking AI projects were a way for consultants to run up large bills and deliver a slide deck. We'd been burned before. Create Lyft's process was the opposite: two weeks of discovery, a clear go/no-go recommendation, and a fixed-price build if we proceeded. We proceeded. The churn prediction model reduced customer attrition by 22% in six months. I've since referred three people to them.",
      name: "Renata Kowalski",
      company: "Fieldstone SaaS",
    },
  ],

  faq: [
    {
      q: "How do you price AI projects?",
      a: "Discovery is priced separately as a fixed fee — typically two to four weeks. If you proceed to a build, that's also fixed-price, scoped from the discovery output. We don't bill hourly on AI work because it rewards the wrong behaviour. You get a detailed scope and a price before any contract is signed.",
    },
    {
      q: "How long does it take to go from idea to production?",
      a: "Discovery takes two to four weeks. A focused build — a single model or RAG system — typically takes six to twelve weeks to reach production. More complex systems take longer, but we phase the work so something real ships early. We don't promise a timeline before we've done discovery, because we'd be guessing.",
    },
    {
      q: "Do we need a data team or clean data to get started?",
      a: "No dedicated data team required. Most of our clients don't have one. Perfectly clean data is a myth — real data is messy and we design for that from the start. What you do need is some data that relates to the problem you're trying to solve. Discovery will tell you whether what you have is sufficient, and what gaps exist before you commit to a build.",
    },
    {
      q: "What models and frameworks do you use — do you build from scratch or use existing tools?",
      a: "Both, depending on what the problem calls for. We use foundation models (OpenAI, Anthropic, open-source alternatives) where they're the right fit, fine-tune or adapt them when needed, and build from lower-level frameworks when neither option is appropriate. We have no vendor allegiances — we recommend what works, not what we have a partnership with. Discovery surfaces this early.",
    },
    {
      q: "How do you handle hallucinations and accuracy problems?",
      a: "We define accuracy requirements before we build, not after. For RAG systems, we use citation-grounded retrieval, confidence thresholds, and fallback handling — so the system declines to answer rather than inventing one. For prediction models, we establish acceptable error rates and design human-in-the-loop steps for low-confidence outputs. No AI system is 100% accurate. The question is whether its failure modes are acceptable — and we make that explicit up front.",
    },
    {
      q: "What happens when the model degrades or needs retraining?",
      a: "Every deployment includes monitoring for accuracy drift and data distribution shift. We set alert thresholds so you know when performance drops before it causes a problem. We document the retraining process in plain language and, where possible, automate it. If something unexpected happens after handover, we're available — not via a ticket queue. We treat model maintenance as part of the work, not an afterthought.",
    },
  ],
} as const;
