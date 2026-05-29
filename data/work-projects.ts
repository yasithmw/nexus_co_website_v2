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
}

export const WORK_PROJECTS: WorkProject[] = [
  {
    slug: "dataline-finance",
    name: "Dataline Finance",
    category: "FINTECH · DATA",
    type: "Data Platform",
    year: 2025,
    bg: "bg-ink",
    text: "paper",
    arrowBg: "bg-blue-2",
    arrowText: "text-ink",
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
  },
  {
    slug: "dataline-people",
    name: "Dataline People",
    category: "PEOPLE · DATA",
    type: "HR Platform",
    year: 2026,
    bg: "bg-blue",
    text: "paper",
    arrowBg: "bg-ink",
    arrowText: "text-paper",
  },
]
