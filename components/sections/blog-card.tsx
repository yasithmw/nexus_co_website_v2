import { Reveal } from "@/components/reveal"
import type { BlogPost } from "@/data/blog-posts"

type Props = {
  post: BlogPost
}

const categoryDot: Record<string, string> = {
  "Case Studies": "bg-cream",
  "Engineering": "bg-blue",
  "Design & Brand": "bg-peach",
  "Process & Insights": "bg-blue-2",
}

const categoryGradient: Record<string, string> = {
  "Case Studies": "from-[#ff91a4]/20 to-[#ff91a4]/5",
  "Engineering": "from-[#758bfd]/20 to-[#758bfd]/5",
  "Design & Brand": "from-[#fbe4d2]/40 to-[#fbe4d2]/10",
  "Process & Insights": "from-[#aeb8fe]/20 to-[#aeb8fe]/5",
}

function formatDate(iso: string): string {
  const [year, month, day] = iso.split("-").map(Number)
  const d = new Date(year, month - 1, day)
  return d.toLocaleDateString("en-AU", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  })
}

export function BlogCard({ post }: Props) {
  const dotClass = categoryDot[post.category] ?? "bg-blue-2"
  const gradient = categoryGradient[post.category] ?? "from-[#aeb8fe]/20 to-[#aeb8fe]/5"

  return (
    <Reveal>
      <a
        href={`/blog/${post.slug}`}
        className="group relative flex flex-col rounded-[var(--radius-md)] bg-white border border-line transition-[transform,box-shadow] duration-[400ms] hover:-translate-y-1.5 hover:shadow-[0_16px_48px_-12px_rgba(39,24,126,0.15)]"
        aria-label={post.title}
      >
        {/* Image block */}
        <div className="relative w-full aspect-video overflow-hidden rounded-t-[var(--radius-md)]">
          {post.featuredImage ? (
            <img src={post.featuredImage} alt="" className="w-full h-full object-cover" />
          ) : (
            <div className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center`}>
              <svg
                aria-hidden
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-30"
              >
                <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="1" className="text-ink" />
                <circle cx="24" cy="24" r="1.5" fill="currentColor" className="text-ink" />
                <line x1="8" y1="24" x2="16" y2="24" stroke="currentColor" strokeWidth="1" className="text-ink" />
                <line x1="32" y1="24" x2="40" y2="24" stroke="currentColor" strokeWidth="1" className="text-ink" />
                <line x1="24" y1="8" x2="24" y2="16" stroke="currentColor" strokeWidth="1" className="text-ink" />
                <line x1="24" y1="32" x2="24" y2="40" stroke="currentColor" strokeWidth="1" className="text-ink" />
              </svg>
            </div>
          )}

          {/* Arrow — inside image, top right */}
          <span
            aria-hidden
            className="absolute right-4 top-4 h-8 w-8 flex items-center justify-center text-[14px] bg-white/80 rounded-full text-ink opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            ↗
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-4 p-6">
          {/* Category badge */}
          <div className="flex items-center gap-2">
            <span className={`inline-block h-[7px] w-[7px] rounded-full shrink-0 ${dotClass}`} aria-hidden />
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h2 className="font-display font-semibold text-[19px] tracking-[-0.025em] leading-[1.25] text-ink line-clamp-2">
            {post.title}
          </h2>

          {/* Excerpt */}
          <p className="text-[14px] leading-[1.6] text-muted line-clamp-3 flex-1">
            {post.excerpt}
          </p>

          {/* Footer */}
          <footer className="flex items-center gap-3 font-mono text-[11px] text-muted pt-1 border-t border-line">
            <span>{post.author}</span>
            <span aria-hidden className="opacity-40">·</span>
            <span>{formatDate(post.date)}</span>
            <span aria-hidden className="opacity-40">·</span>
            <span>{post.readingTime} min read</span>
          </footer>
        </div>
      </a>
    </Reveal>
  )
}
