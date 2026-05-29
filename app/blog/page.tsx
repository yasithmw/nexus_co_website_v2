import type { Metadata } from "next"
import { Nav } from "@/components/nav"
import { SectionHead } from "@/components/section-head"
import { Reveal } from "@/components/reveal"
import { BlogListing } from "@/components/sections/blog-listing"
import { Contact } from "@/components/sections/contact"
import { BLOG_POSTS } from "@/data/blog-posts"

export const metadata: Metadata = {
  title: "Thinking — Create Lyft",
  description:
    "Ideas and perspectives on software, design, AI, and how we build — from the team at Create Lyft.",
}

const POSTS_PER_PAGE = 9

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const { category, page } = await searchParams

  const currentCategory = typeof category === "string" ? category : ""
  const currentPage = typeof page === "string" ? Math.max(1, parseInt(page, 10) || 1) : 1

  const filtered = currentCategory
    ? BLOG_POSTS.filter((p) => p.category === currentCategory)
    : BLOG_POSTS

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE)
  const safePage = Math.min(currentPage, Math.max(1, totalPages))
  const start = (safePage - 1) * POSTS_PER_PAGE
  const paginated = filtered.slice(start, start + POSTS_PER_PAGE)

  return (
    <>
      <Nav />
      <main>
        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section className="pt-[140px] pb-[80px]">
          <div className="shell">
            <SectionHead label="Thinking" right="Ideas & Perspectives" />

            <Reveal
              as="h1"
              className="font-display font-bold tracking-[-0.04em] text-ink-2 mb-5"
              style={{ fontSize: "clamp(48px, 6vw, 80px)" }}
            >
              Ideas worth{" "}
              <em className="font-serif font-normal italic text-blue">sharing.</em>
            </Reveal>

            <Reveal
              as="p"
              className="text-[18px] text-muted max-w-[48ch] leading-[1.6]"
            >
              Perspectives on software, design, AI, and how we build.
            </Reveal>
          </div>
        </section>

        {/* ── Listing ──────────────────────────────────────────────────────── */}
        <section className="pb-[120px]">
          <div className="shell">
            <BlogListing
              posts={paginated}
              totalPages={totalPages}
              currentPage={safePage}
              currentCategory={currentCategory}
            />
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────────── */}
        <Contact />
      </main>
    </>
  )
}
