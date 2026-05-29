"use client"

import { useCallback, useMemo, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import type { BlogPost, BlogCategory } from "@/data/blog-posts"
import { BlogCard } from "./blog-card"

type Props = {
  posts: BlogPost[]
  totalPages: number
  currentPage: number
  currentCategory: string
}

const ALL_CATEGORIES: BlogCategory[] = [
  "Case Studies",
  "Engineering",
  "Design & Brand",
  "Process & Insights",
]

export function BlogListing({ posts, totalPages, currentPage, currentCategory }: Props) {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [debouncedQuery, setDebouncedQuery] = useState("")
  const debounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleSearch = useCallback((value: string) => {
    setSearchQuery(value)
    if (debounceTimer.current) clearTimeout(debounceTimer.current)
    debounceTimer.current = setTimeout(() => {
      setDebouncedQuery(value)
    }, 300)
  }, [])

  const filteredPosts = useMemo(() => {
    if (!debouncedQuery.trim()) return posts
    const q = debouncedQuery.toLowerCase()
    return posts.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q)
    )
  }, [posts, debouncedQuery])

  const buildUrl = useCallback(
    (opts: { category?: string; page?: number }) => {
      const params = new URLSearchParams()
      const cat = opts.category !== undefined ? opts.category : currentCategory
      const page = opts.page !== undefined ? opts.page : 1
      if (cat) params.set("category", cat)
      if (page > 1) params.set("page", String(page))
      const qs = params.toString()
      return `/blog${qs ? `?${qs}` : ""}`
    },
    [currentCategory]
  )

  const handleCategoryClick = (category: string) => {
    router.push(buildUrl({ category, page: 1 }))
  }

  const handlePageClick = (page: number) => {
    router.push(buildUrl({ page }))
  }

  const isSearchActive = debouncedQuery.trim().length > 0
  const isEmpty = filteredPosts.length === 0

  return (
    <div>
      {/* Filter row */}
      <div className="flex flex-wrap items-center gap-3 mb-10" role="group" aria-label="Filter posts by category">
        {/* All pill */}
        <button
          onClick={() => handleCategoryClick("")}
          className={[
            "rounded-full px-4 py-2 text-[13px] font-medium font-mono tracking-[-0.01em] transition-colors duration-200",
            !currentCategory
              ? "bg-ink text-paper"
              : "bg-paper-2 text-muted hover:bg-paper-2/80",
          ].join(" ")}
          aria-pressed={!currentCategory}
        >
          All
        </button>

        {ALL_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryClick(cat)}
            className={[
              "rounded-full px-4 py-2 text-[13px] font-medium font-mono tracking-[-0.01em] transition-colors duration-200",
              currentCategory === cat
                ? "bg-ink text-paper"
                : "bg-paper-2 text-muted hover:bg-paper-2/80",
            ].join(" ")}
            aria-pressed={currentCategory === cat}
          >
            {cat}
          </button>
        ))}

        {/* Search */}
        <div className="ml-auto relative flex items-center">
          <span
            aria-hidden
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.4" />
              <path d="M9.5 9.5 L12.5 12.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          </span>
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search posts…"
            aria-label="Search posts"
            className="bg-white border border-line rounded-full pl-9 pr-4 py-2 text-[13px] w-[220px] text-ink placeholder:text-muted/60 outline-none focus:ring-2 focus:ring-ink/20 transition-shadow duration-200"
          />
        </div>
      </div>

      {/* Empty state */}
      {isEmpty && isSearchActive && (
        <div className="flex flex-col items-center gap-4 py-24 text-center">
          <p className="font-display text-[17px] font-medium text-muted tracking-[-0.02em]">
            No posts match your search.
          </p>
          <button
            onClick={() => {
              setSearchQuery("")
              setDebouncedQuery("")
            }}
            className="rounded-full bg-paper-2 px-4 py-2 font-mono text-[12px] tracking-[-0.01em] text-muted hover:bg-paper-2/70 transition-colors duration-200"
          >
            Clear search
          </button>
        </div>
      )}

      {/* Card grid */}
      {!isEmpty && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}

      {/* Pagination — only when no active search filter */}
      {!isSearchActive && totalPages > 1 && (
        <nav
          className="flex items-center gap-2 justify-center mt-16"
          aria-label="Pagination"
        >
          <button
            onClick={() => handlePageClick(currentPage - 1)}
            disabled={currentPage <= 1}
            aria-label="Previous page"
            className="rounded-full px-4 py-2 font-mono text-[13px] tracking-[-0.01em] text-muted bg-paper-2 hover:bg-paper-2/70 transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            ←
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageClick(page)}
              aria-label={`Page ${page}`}
              aria-current={page === currentPage ? "page" : undefined}
              className={[
                "rounded-full w-9 h-9 font-mono text-[13px] tracking-[-0.01em] transition-colors duration-200",
                page === currentPage
                  ? "bg-ink text-paper"
                  : "bg-paper-2 text-muted hover:bg-paper-2/70",
              ].join(" ")}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => handlePageClick(currentPage + 1)}
            disabled={currentPage >= totalPages}
            aria-label="Next page"
            className="rounded-full px-4 py-2 font-mono text-[13px] tracking-[-0.01em] text-muted bg-paper-2 hover:bg-paper-2/70 transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            →
          </button>
        </nav>
      )}
    </div>
  )
}
