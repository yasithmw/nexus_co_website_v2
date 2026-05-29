export type BlogCategory =
  | "Case Studies"
  | "Engineering"
  | "Design & Brand"
  | "Process & Insights"

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string // Plain text paragraphs separated by \n\n
  author: string
  date: string // ISO format e.g. "2026-03-15"
  readingTime: number
  category: BlogCategory
  tags: string[]
  featuredImage?: string
}

export const BLOG_POSTS: BlogPost[] = [
  // ─── Case Studies (3 posts) ───────────────────────────────────────────────

  {
    slug: "fintech-data-pipeline-rebuild",
    title: "How We Cut a Fintech's Reporting Lag from 18 Hours to 40 Minutes",
    excerpt:
      "A Sydney-based payments company was making business decisions on yesterday's data. We rebuilt their pipeline from the ground up — not just faster, but smarter. Here's what that actually looked like.",
    content:
      "The problem wasn't the data. It was the distance between the data and the people who needed it. When we first spoke to the team at Payvance, their finance and growth leads were pulling overnight batch reports — 18-hour-old snapshots of a business that moves by the minute. Decisions were being deferred. Anomalies were going unnoticed until they became incidents.\n\nWe spent the first two weeks in discovery, which mostly meant listening. Not to the engineering team's ticket backlog, but to the people who were actually making decisions with the data. What did they need to see, and when? What were they inferring because the right number wasn't available? What workarounds had they built in spreadsheets because the pipeline couldn't deliver in time? That gap — between what the system produced and what the humans needed — was the real brief.\n\nThe old stack was a Python-based batch ETL process running on a nightly cron schedule, pulling from five source systems — a payments processor, a CRM, a ledger, two third-party data feeds — transforming everything in a single monolithic job, and landing it in a Redshift warehouse. When the job worked, it took 18 hours. When it didn't — and it failed silently about twice a week — the data team found out the next morning when analysts couldn't load their dashboards. The root problem wasn't any single tool. It was that the architecture treated data as something you collected overnight, rather than something that was already flowing continuously through the business. The batch window was a design assumption from a company that no longer existed.\n\nThe rebuild had three phases. First, we migrated from a batch-based ETL process to an event-driven architecture using a managed streaming layer. Second, we redesigned the transformation logic to align with how the business actually defined its metrics — not the technical definitions inherited from a legacy system two acquisitions ago. Third, we built a lightweight semantic layer so analysts could query confidently without needing to understand the underlying schema.\n\nEvent-driven, in practice, meant that data moved from source to warehouse within minutes of an event occurring — a payment processed, a customer record updated, a reconciliation flag triggered. Instead of one big nightly job, we had a set of small, independent stream processors, each responsible for a single source and transformation. The tradeoff was real: streaming logic is harder to reason about than batch logic, and we had to make deliberate choices about eventual consistency — accepting that some aggregated metrics would be seconds or minutes behind real-time rather than perfectly synchronised. That was a business conversation as much as a technical one. The growth team didn't need perfect real-time. They needed data that was hours fresher than what they had. That gap between what's architecturally ideal and what's commercially necessary matters. It changes what you build.\n\nThere was a moment midway through the engagement that stuck with us. We were reviewing the legacy transformation logic with Payvance's lead data engineer — a sharp operator who'd inherited the codebase from a contractor two years earlier — and we found a revenue calculation that was wrong. Not wrong in a dramatic way, but off by a rounding rule that compounded across high-volume transaction days. It had been wrong for at least fourteen months. Nobody had caught it because the only people who might have noticed were looking at reports too slow to surface the pattern. We flagged it, fixed it, and moved on. But it changed the tone of the project. After that, the Payvance team stopped treating the rebuild as a performance upgrade and started treating it as a risk reduction exercise. That reframing made every subsequent decision easier.\n\nThe 40-minute figure gets quoted a lot, but it's not the number we're most proud of. The outcome we cared about was the decision the Head of Growth made in week three of the new system: she caught a fee-calculation anomaly on a new product SKU within hours of it going live, before it touched a single customer invoice. With the old system, that would have been a Monday-morning problem. Instead it was a Friday-afternoon fix.\n\nWhat Payvance can do now isn't just faster reporting. It's a different category of decision-making. Their product team can run pricing experiments and see real transaction-level signal within the same day. Their risk function can monitor settlement patterns in near-real-time rather than reviewing exception reports the following morning. They're in the early stages of building a fraud detection model that feeds directly from the streaming layer — something that wasn't remotely viable when the data was a day old. The pipeline went from being a constraint on what the business could do to being infrastructure they can build on. That's the shift we were after.\n\nData infrastructure is invisible when it works. The goal was never to impress anyone with the architecture. The goal was to make the system disappear into the background of a business that could finally move at the speed it was built to move at.",
    author: "Caitlin Farquhar",
    date: "2025-06-18",
    readingTime: 8,
    category: "Case Studies",
    tags: ["data engineering", "fintech", "pipeline", "analytics", "event-driven"],
  },

  {
    slug: "health-app-launch-eight-weeks",
    title: "From Brief to App Store in Eight Weeks: Launching Wellpath's MVP",
    excerpt:
      "Wellpath had a clear problem, a tight deadline, and a founder who'd already wasted six months with another agency. We shipped a working health-tracking app in eight weeks. This is how we structured it.",
    content:
      "The first thing Mia said in our initial call was: 'I don't need a pitch deck. I need someone who'll actually ship.' She'd spent six months with a product agency that had produced beautiful wireframes and a roadmap that kept moving. She had nothing to show users, nothing to validate, and a launch window tied to a media partnership that wasn't going to wait.\n\nWe agreed on scope in the first week. An MVP means one user problem, solved well — not a compressed version of everything. For Wellpath, that meant a daily check-in flow, a longitudinal mood and energy tracker with simple visualisations, and push notifications built around the user's own historical patterns rather than a generic schedule. No social features. No marketplace. No AI recommendations — not yet. A tight, working thing that real people could use and give us honest feedback on.\n\nEngineering and design ran in parallel from week two. That only works when the brief is locked, and ours was. Our designer wasn't producing specs for engineers to interpret; she was in the same conversations, making the same tradeoffs. When we decided to simplify the onboarding from five steps to three, that decision happened in one afternoon, not across a week of async comments on a Figma file.\n\nWe submitted to the App Store in week seven. The review took four days. Wellpath launched on schedule, in time for the media partnership, with 340 beta users already on the waitlist. By the end of month two, 68% of those users had completed at least 14 consecutive daily check-ins — which is the kind of engagement number that changes a fundraising conversation.\n\nThe lesson isn't that eight weeks is the right timeline for every product. It's that scope clarity is the only thing that makes fast timelines possible. Most delays aren't engineering problems — they're brief problems. Get the brief right, and the rest follows.",
    author: "Lachlan Morrish",
    date: "2025-08-04",
    readingTime: 5,
    category: "Case Studies",
    tags: ["product", "mobile", "MVP", "health tech", "launch"],
  },

  {
    slug: "anchor-group-rebrand",
    title: "Rebranding Anchor Group: When a Visual Refresh Isn't Enough",
    excerpt:
      "Anchor Group runs four restaurant concepts across Sydney and Melbourne. They didn't need new colours — they needed a brand that could hold four distinct identities without feeling like a corporate umbrella. That's a harder problem.",
    content:
      "When Anchor Group's CEO, Daniel Kwon, first described the brief, he used the word 'refresh.' That word is a red flag — not because refreshes are wrong, but because they're usually a proxy for something the client hasn't fully articulated yet. After two sessions with their leadership team and a review of their existing brand assets, it was clear what they actually needed: a brand architecture that could let four restaurant concepts breathe on their own while still making sense as a portfolio to investors and landlords.\n\nThe four venues ranged from a casual all-day breakfast spot in Surry Hills to a high-end Japanese tasting menu in Melbourne CBD. They had nothing in common visually, and almost nothing in common in terms of customer base or price point. A parent brand identity that tried to flatten that range would have killed what made each venue work. So we built the opposite: a holding brand for Anchor Group that operated purely at the corporate level — investor decks, lease negotiations, group hiring — while each venue got its own complete identity system.\n\nThe Surry Hills breakfast concept, Sunday Bird, was the easiest starting point because the brief was the clearest: warm, irreverent, the kind of place where regulars know the coffee order. The tasting menu, Kiri, needed the opposite — restraint, precision, a brand that communicated quality through what it didn't say. Designing those two in parallel was actually useful; the contrast sharpened both.\n\nWe also did something most brand studios don't: we ran a brand handover session with Daniel and each venue manager. Not a style guide walkthrough — a working session where we put the assets in their hands and watched what they did with them. That's where you learn whether a brand system is actually usable or just beautiful in a PDF. Two things changed as a result of that session. Both were small. Both mattered.\n\nAnchor Group went from a collection of venues to a portfolio with a clear story. The next venue they open — which Daniel mentioned is already in lease negotiations — will slot into a system rather than requiring another ground-up identity exercise. That's what a brand architecture is supposed to do.",
    author: "Sophie Drummond",
    date: "2025-10-21",
    readingTime: 6,
    category: "Case Studies",
    tags: ["branding", "hospitality", "brand architecture", "identity", "rebrand"],
  },

  // ─── Engineering (2 posts) ────────────────────────────────────────────────

  {
    slug: "rag-pipelines-in-production",
    title: "RAG Pipelines in Production: What the Tutorials Don't Tell You",
    excerpt:
      "Every RAG tutorial shows you a clean demo with a small document set and a tidy answer. Production looks nothing like that. Here's what we've learned deploying retrieval-augmented generation for real clients with real data.",
    content:
      "The basic RAG setup is genuinely easy to prototype. Embed your documents, store the vectors, retrieve the top-k chunks, stuff them into a prompt, get an answer. It works in a notebook. It works in a demo. Then you put it in front of actual users with actual data and the edge cases appear fast.\n\nThe first problem is chunk quality, and it's harder than it sounds. Naive chunking by character count or sentence boundary destroys context in ways that don't show up until a user asks a question that spans two chunks. We've seen financial documents where the key number appears in a table header three paragraphs before the value — split that table wrong and the retrieval surface breaks completely. Our current default is a hybrid chunking strategy: semantic boundaries first, with a sliding window overlap, and document-type-specific rules for structured formats like tables and lists. It adds complexity, but it pays for itself in retrieval quality.\n\nThe second problem is retrieval confidence. The model will always return k results — it doesn't know when it shouldn't. Without a reranking layer and relevance thresholding, you get hallucinated answers that are confidently grounded in the wrong source material. That's worse than no answer. We added a cross-encoder reranker as a second pass and set a minimum similarity score below which the system returns a graceful 'I don't have enough information' rather than a plausible-sounding guess. That alone eliminated most of the trust problems users reported in early testing.\n\nEvaluation is where most RAG implementations fall short. It's not enough to eyeball responses during development. We build eval sets from real user queries, annotate expected answer quality, and run automated scoring with LLM-as-judge alongside human review for the ambiguous cases. This gives you a regression baseline so you know when a retrieval change helps or hurts — something you can't feel your way through at scale.\n\nThe honest summary: RAG is a good solution to a specific problem. It lets you ground a language model in a controlled knowledge base without fine-tuning. But it's a system, not a feature, and it requires the same engineering discipline as any other system you put in production. The teams that treat it as a two-day integration consistently run into problems that a two-week build-out would have avoided.",
    author: "Rohan Vaz",
    date: "2025-07-29",
    readingTime: 6,
    category: "Engineering",
    tags: ["AI", "RAG", "LLM", "production", "machine learning"],
  },

  {
    slug: "technical-debt-real-cost-b2b-saas",
    title: "The Real Cost of Technical Debt in B2B SaaS (It's Not What Your CTO Thinks)",
    excerpt:
      "Technical debt conversations in B2B companies usually happen in engineering all-hands decks. They should be happening in the boardroom. The costs aren't just engineering velocity — they show up in sales cycles, churn, and the deals you never knew you lost.",
    content:
      "Ask a CTO to quantify their technical debt and you'll get an engineering answer: delayed feature releases, increasing bug rates, developer frustration, slower onboarding for new hires. These are real costs. They're also only half the picture — and the less expensive half.\n\nThe cost that doesn't get measured is the commercial cost. We worked with a B2B SaaS platform in the professional services space whose sales team had started promising a custom enterprise integration as standard. They could deliver it — but it took four weeks because the underlying data model had been patched so many times that any new integration required bespoke transformation work. Competitor platforms were quoting one week. Over 18 months, our analysis showed they'd lost or delayed at least $600k in ARR directly attributable to integration timelines. That number wasn't in any engineering backlog conversation.\n\nThere's also the churn signal that's hard to decode. Customers don't write in saying 'your technical debt is causing me friction.' They say the product feels slow, or they can't find a particular piece of data, or the export format doesn't quite match what their finance team needs. The root cause is often an architectural decision made four years ago that nobody wants to untangle. The symptom looks like a product problem or a UX problem. It's a codebase problem — and it's expensive to leave untouched.\n\nWhen we do a technical assessment for a client, we start by mapping where the codebase slows down commercial decisions — not just where it makes engineers unhappy. That's a different analysis, and it produces a different prioritisation. The highest-ROI debt to pay down is rarely the oldest or the most technically offensive. It's the debt that sits in the critical path between your product and your customers' money.\n\nThe practical implication for founders and commercial leaders: get into a technical debt review before your next pricing conversation, your next enterprise pitch, or your next hiring round. The questions buyers and investors ask have changed. 'How long does an integration take?' and 'How do you handle SOC 2?' are now standard. The answers live in the codebase.",
    author: "Lachlan Morrish",
    date: "2026-02-11",
    readingTime: 5,
    category: "Engineering",
    tags: ["technical debt", "SaaS", "engineering", "product", "commercial"],
  },

  // ─── Design & Brand (2 posts) ─────────────────────────────────────────────

  {
    slug: "brand-strategy-is-a-product-decision",
    title: "Brand Strategy Is a Product Decision, Not a Marketing One",
    excerpt:
      "Most companies bring in brand strategy after the product is built and the positioning feels fuzzy. That's backwards. Brand decisions shape what you build, who you hire, and which customers you can actually keep.",
    content:
      "The standard sequence goes: build the product, find product-market fit, then bring in brand to sharpen the story. It's logical, and it's expensive. By the time a brand project starts, there are already commitments baked into the product — feature decisions, pricing architecture, onboarding flows — that make the honest brand position harder to occupy.\n\nHere's what we mean by brand as a product decision. If your brand stands for simplicity, that's a constraint on feature development. You can't add complexity to the product roadmap without creating tension against the thing you said you were. If your brand stands for transparency, your pricing page, your contract terms, and your data practices all become brand expressions — not just your logo and colour palette. That's useful pressure. It forces coherent decisions. But it only works if the brand is established early enough to create that pressure.\n\nWe see this most clearly in B2B. A brand that promises speed implies a certain kind of support, a certain kind of SLA, a certain kind of onboarding experience. If the product can't deliver on that experience, the brand promise becomes a liability — it attracts customers who will churn quickly because the reality doesn't match the expectation. A more honest brand position, even if it sounds less exciting, builds a more defensible customer base.\n\nThe practical version of this: when we run brand engagements, we always spend time with product and engineering, not just the founders and marketing leads. We want to understand what the product actually does well, where the rough edges are, and what the team is genuinely proud of. The best brand positions grow out of something real — a genuine capability, a way of working, a decision the company made and stuck to. Positioning invented from scratch, without a product foundation, is a promise you'll spend money trying to keep.\n\nBrand strategy isn't about making something sound better than it is. It's about finding what's genuinely true about a company and building a language around it that the right customers recognise. That's a product question as much as a marketing one.",
    author: "Sophie Drummond",
    date: "2025-09-15",
    readingTime: 5,
    category: "Design & Brand",
    tags: ["brand strategy", "product", "positioning", "B2B", "design"],
  },

  {
    slug: "designing-for-trust-regulated-industries",
    title: "Designing for Trust in Regulated Industries",
    excerpt:
      "When your product operates in financial services, healthcare, or legal — trust isn't a nice-to-have. It's the product. Here's what that means for design decisions most teams get wrong.",
    content:
      "Design in regulated industries has a specific failure mode: it confuses compliance with trust. A team adds the required disclosures, the consent toggles, the data policy link — and considers the trust problem solved. It isn't. Compliance is the floor. Trust is what you build above it.\n\nThe design decisions that actually build trust are often the quieter ones. Loading states that communicate what's happening with a user's data — not just that something is loading, but that a document is being encrypted or a transaction is being verified — reduce anxiety at the exact moment users are most anxious. Error messages that explain what went wrong and what to do next, instead of throwing a code at someone and expecting them to call support, communicate that the product was built by people who anticipated real use.\n\nOne pattern we come back to consistently is progressive disclosure. In financial and health products especially, users arrive with high anxiety about making a mistake. Surfacing every option, every caveat, every possible branch at once makes the product feel risky. Showing the right thing at the right time — and hiding complexity until it's needed — builds the feeling of a guided, considered experience. That feeling is trust.\n\nThere's also the question of what the visual language communicates independent of the words. A health platform with a playful, colourful UI creates a specific expectation about how seriously the company treats the underlying data. That might be fine for a wellness app. It's a different calculation for a platform handling clinical records. We're not saying regulated products have to be sterile — but every visual choice is a signal, and in high-stakes contexts, those signals are read carefully by users who are already paying close attention.\n\nThe teams that design well in regulated spaces have one thing in common: they've done enough user research to understand what people are actually afraid of when they open the product. The features they build and the visual language they use flow from that understanding. The ones that struggle have usually prioritised compliance documentation over user anxiety. Both matter. One of them is invisible to the regulator, and it's the one that keeps customers.",
    author: "James Okello",
    date: "2026-01-07",
    readingTime: 5,
    category: "Design & Brand",
    tags: ["UX design", "trust", "fintech", "healthcare", "regulated industries"],
  },

  // ─── Process & Insights (2 posts) ─────────────────────────────────────────

  {
    slug: "how-we-structure-discovery-sprints",
    title: "How We Structure Discovery Sprints (and Why Most Teams Rush Them)",
    excerpt:
      "A discovery sprint done well saves weeks of rework downstream. Done badly, it's a week of meetings that produces a deck nobody reads. Here's how we run ours, and the specific mistakes we've stopped making.",
    content:
      "The most common complaint we hear from clients who've been through bad discovery experiences is some version of: 'We spent two weeks in workshops and came out with a list of assumptions instead of answers.' That's a facilitation problem disguised as a timing problem. Discovery isn't slow because it's thorough — it's slow when it doesn't know what it's trying to resolve.\n\nOur discovery sprints have a single output: a validated problem statement and a prioritised set of assumptions we need to test before building anything. Not a requirements document. Not a roadmap. Not a mood board. A problem statement and a ranked list of things we don't know yet, with a proposed method for resolving each one. Everything else is downstream of that.\n\nThe sprint runs over five days. Day one is stakeholder interviews — not to collect requirements, but to understand the real constraints. Budget, timeline, and appetite for risk are often disclosed more honestly on day one of a project than at any point in a sales process. Day two is user or customer research — desk research where existing data is available, direct interviews where it isn't. Day three is synthesis and assumption mapping: what do we know, what do we think we know, and what are we guessing? Day four is assumption validation — rapid, scrappy tests where possible, expert interviews for things that need domain knowledge. Day five is the readout and decision: do we have enough to start building, or do we need another round of research?\n\nThe mistake most teams make is treating discovery as a formality before the 'real' work starts. That attitude guarantees the discovery will be shallow, because everyone already knows what they want to build and they're just looking for permission. The counter-move is to go into discovery with a genuine willingness to be wrong about the product direction. That's psychologically harder than it sounds. But the projects where we've had the most latitude in discovery have consistently produced the best outcomes — because we caught the wrong assumption early instead of building it in.\n\nOne practical thing that helps: separate the brief owner from the discovery process. The person who commissioned the work shouldn't be in the room when users are talking about their problems. Not because their perspective isn't valuable, but because their presence changes what people say.",
    author: "Rohan Vaz",
    date: "2025-11-03",
    readingTime: 5,
    category: "Process & Insights",
    tags: ["discovery", "process", "product strategy", "workshops", "sprint"],
  },

  {
    slug: "studio-vs-in-house-when-to-hire",
    title: "Studio vs In-House: When to Build a Team and When to Bring One In",
    excerpt:
      "Hiring in-house isn't always the right answer, and bringing in a studio isn't always the shortcut it looks like. The decision depends on variables most companies don't think through clearly — including a few that have nothing to do with budget.",
    content:
      "The framing most companies use is cost: is it cheaper to hire someone or engage a studio? That's a reasonable place to start and almost always the wrong place to finish. Cost comparisons between in-house and external teams ignore the variables that actually determine which model produces better outcomes — speed to output, quality of senior access, and the organisational cost of a wrong hire.\n\nHere's when a studio tends to win. You have a defined problem that needs to be solved in a fixed window. You need senior capability that you can't justify as a permanent headcount — a Principal Data Engineer or a Creative Director, say, where the work is real but the volume doesn't support a full-time role. You're in a growth phase where the requirements will change significantly in 12 months, and locking into hires now means locking into assumptions you haven't validated yet. And critically: you want accountability for outcomes, not just effort. Studios live by their results in ways that employees, by the structure of employment, don't have to.\n\nHere's when in-house wins. The work is ongoing and deeply embedded in institutional knowledge — a core product team that needs to understand years of decisions to make the next one well. The problem is culturally sensitive in ways that require an internal advocate, not an external one. Or the capability you're building is a competitive advantage, and you can't afford to have it walk out the door at the end of an engagement.\n\nThe hybrid model — a studio embedded alongside an in-house team — is often underused. It works particularly well in the transition phase: when an organisation knows they need to build a capability but doesn't yet know exactly what form it should take. A studio can scope the function, demonstrate what good looks like, and help the company hire the right permanent person to take it over. That's a faster and less expensive path to a strong in-house capability than hiring first and figuring out the scope later.\n\nThe question we always ask clients who are trying to decide: what do you need to be true in 18 months? If the answer is a capability that exists permanently inside the organisation, start building it now even if it means slower early progress. If the answer is a problem solved and a product shipped, bring in people who've solved that problem before.",
    author: "James Okello",
    date: "2026-04-09",
    readingTime: 5,
    category: "Process & Insights",
    tags: ["hiring", "strategy", "studio", "in-house", "team building"],
  },

  {
    slug: "groundwork-ecommerce-platform-rebuild",
    title: "Rebuilding Groundwork's E-Commerce Platform Without Stopping Sales",
    excerpt:
      "Groundwork had outgrown their Shopify setup but couldn't afford a big-bang migration. We rebuilt their platform incrementally over 10 weeks — feature by feature, no downtime, no lost revenue.",
    content:
      "The constraint was the sales calendar. Groundwork's peak trading period was eight weeks away when we started the engagement. A conventional platform migration — freeze the old system, rebuild, cut over — was out of the question. So we built a strangler fig instead: route new traffic to the new system piece by piece, keep the old system running in parallel until the last page is migrated, then decommission it cleanly.\n\nThe first two weeks were purely architectural. We mapped every revenue-critical flow in the existing system — checkout, cart, product pages, fulfilment integrations — and agreed on a migration order that kept the highest-risk paths on the stable old system as long as possible. Marketing landing pages went first. Product listing pages second. The checkout last, migrated on a Tuesday morning in week nine with a rollback plan ready and a 20-minute window to revert if anything went wrong.\n\nNothing went wrong. But the rollback plan was the reason we could move quickly everywhere else. When the team knows there's a safe exit, they stop second-guessing decisions that are 80% right. That confidence compresses timelines in ways that are hard to quantify but easy to feel.\n\nThe new platform was built on Next.js with a headless CMS and a custom checkout integration. Page load times dropped from 4.2 seconds to 1.1 seconds on mobile. Conversion rate in the first full month on the new system was up 22%. Neither of those numbers was the goal — the goal was a platform they could grow on. The performance improvement was a consequence of building it properly.",
    author: "Lachlan Morrish",
    date: "2026-05-01",
    readingTime: 5,
    category: "Case Studies",
    tags: ["case study", "ecommerce", "platform", "migration", "Next.js"],
  },

  {
    slug: "when-not-to-use-a-design-system",
    title: "When Not to Use a Design System",
    excerpt:
      "Design systems are sold as the solution to UI inconsistency. They often become the source of it. A case for knowing when a system helps and when it gets in the way of the actual work.",
    content:
      "The design system conversation usually starts the same way: the product has grown, the UI is inconsistent, components have drifted, and someone — usually engineering — proposes a system to fix it. It's a reasonable diagnosis. The solution it points to isn't always right.\n\nDesign systems solve a coordination problem. When multiple teams are building UI simultaneously and need their output to feel like a single product, a shared component library and token set is genuinely valuable. That coordination overhead exists at a certain scale. Below that scale — a single product team, a startup with two designers — a design system is a maintenance burden that slows you down more than the inconsistency it was meant to solve.\n\nThe systems that fail most visibly are the ones built for a scale the organisation hasn't reached yet. A team of five designers builds a system to 'prepare for growth,' spends three months on it, and then spends the next year maintaining a library that's always slightly behind the product because they don't have the headcount to keep both moving. The product team ends up working around the system rather than with it.\n\nThe better question isn't 'should we have a design system?' It's 'what coordination problem are we actually trying to solve right now?' Sometimes the answer is a full component library. Sometimes it's a shared token file and a Figma style guide. Sometimes it's a one-page document that defines the five rules everyone agrees to follow. The form should follow the problem, not the other way around.\n\nWe've started recommending a staged approach: start with tokens and a handful of foundational components (buttons, inputs, typography), ship the product, and let the system grow to meet real reuse patterns rather than anticipated ones. It's less architecturally satisfying and considerably more effective.",
    author: "Sophie Drummond",
    date: "2026-05-14",
    readingTime: 5,
    category: "Design & Brand",
    tags: ["design systems", "UI", "product design", "process"],
  },

  {
    slug: "llm-evals-in-production",
    title: "LLM Evals in Production: A Practical Framework",
    excerpt:
      "Evaluating language model outputs in a lab is hard. Evaluating them once real users are in the system is harder. Here's the framework we've settled on after shipping AI features across a half-dozen production products.",
    content:
      "The standard advice for LLM evaluation is to build an eval set, run it before every deployment, and monitor production outputs for drift. That advice is correct and almost universally under-specified. The hard part isn't knowing you need evals — it's knowing what to measure and what to do when the numbers move.\n\nWe use a three-layer framework. The first layer is unit evals: deterministic tests on model outputs for well-defined inputs. These are fast, cheap, and reliable for catching regressions in structured tasks like classification, extraction, or formatting. They don't tell you much about open-ended generation quality, but they catch the obvious breakages.\n\nThe second layer is LLM-as-judge evals: a separate model scores the outputs of your production model against a rubric. This works well for quality dimensions that are hard to specify as a binary pass/fail — coherence, helpfulness, tone. The key is prompt engineering the judge carefully and validating that its scores correlate with human judgement before you trust it. An LLM judge that disagrees with humans 30% of the time is worse than no judge at all, because it gives false confidence.\n\nThe third layer is human review at the tail: a sampling process that surfaces low-confidence or flagged outputs to a human reviewer on a regular cadence. This is the most expensive layer and the one most teams skip. It's also the one that catches the failures the first two layers miss — the outputs that are technically coherent and score well on the rubric but are wrong in ways that only a domain expert would notice.\n\nThe number we track most closely in production isn't accuracy or BLEU score. It's the rate at which users correct or dismiss model outputs. That signal is noisy but direct — it measures whether the model is actually useful, not whether it passes a benchmark.",
    author: "Rohan Vaz",
    date: "2026-05-20",
    readingTime: 6,
    category: "Engineering",
    tags: ["LLM", "AI", "evaluation", "production", "machine learning"],
  },
]
