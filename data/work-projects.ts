export type WorkProject = {
  slug: string
  name: string
  category: string
  type: string
  year: number
  bg: string
  text: "paper" | "ink"
  arrowBg: string
  arrowText: string
  status?: string
  /** Live site, linked from the case study's "View demo" CTA. */
  liveUrl: string
}

export const WORK_PROJECTS: WorkProject[] = [
  {
    slug: "dataline-finance",
    name: "Dataline Finance",
    category: "FINANCE · WEB",
    type: "Website Revamp",
    year: 2025,
    bg: "bg-ink",
    text: "paper",
    arrowBg: "bg-blue-2",
    arrowText: "text-ink",
    liveUrl: "https://dataline.com.au",
  },
  {
    slug: "the-artist-platform",
    name: "The Artist Platform",
    category: "ARTS · MARKETPLACE",
    type: "Creative Platform",
    year: 2026,
    bg: "bg-blue-2",
    text: "ink",
    arrowBg: "bg-ink",
    arrowText: "text-paper",
    liveUrl: "https://theartistplatform.com.au",
  },
  {
    slug: "alignify",
    name: "Alignify",
    category: "HR · SAAS",
    type: "B2B SaaS",
    year: 2025,
    bg: "bg-cream",
    text: "ink",
    arrowBg: "bg-ink",
    arrowText: "text-paper",
    liveUrl: "https://www.alignify.com.au",
  },
  {
    slug: "ceylon-haven",
    name: "Ceylon Haven",
    category: "TRAVEL · HOSPITALITY",
    type: "Website Build",
    year: 2026,
    bg: "bg-peach",
    text: "ink",
    arrowBg: "bg-ink",
    arrowText: "text-paper",
    liveUrl: "https://ceylonhaven.com",
  },
]
