import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Nav } from "@/components/nav";
import { SectionHead } from "@/components/section-head";
import { Reveal } from "@/components/reveal";
import { BlogCard } from "@/components/sections/blog-card";
import { Contact } from "@/components/sections/contact";
import { BLOG_POSTS } from "@/data/blog-posts";

const categoryDot: Record<string, string> = {
  "Case Studies": "bg-cream",
  "Engineering": "bg-blue",
  "Design & Brand": "bg-peach",
  "Process & Insights": "bg-blue-2",
};

const categoryGradient: Record<string, { from: string; to: string }> = {
  "Case Studies": { from: "#ff91a4", to: "#ff91a4" },
  "Engineering": { from: "#758bfd", to: "#758bfd" },
  "Design & Brand": { from: "#fbe4d2", to: "#fbe4d2" },
  "Process & Insights": { from: "#aeb8fe", to: "#aeb8fe" },
};

function formatDate(iso: string): string {
  const [year, month, day] = iso.split("-").map(Number);
  const d = new Date(year, month - 1, day);
  return d.toLocaleDateString("en-AU", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Not Found — Create Lyft" };
  return {
    title: `${post.title} — Create Lyft`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const relatedPosts = BLOG_POSTS.filter(
    (p) => p.category === post.category && p.slug !== post.slug
  ).slice(0, 2);

  const paragraphs = post.content.split("\n\n").filter(Boolean);
  const dotClass = categoryDot[post.category] ?? "bg-blue-2";
  const grad = categoryGradient[post.category] ?? { from: "#aeb8fe", to: "#aeb8fe" };

  return (
    <>
      <Nav />
      <main>
        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section className="pt-[140px] pb-[72px]">
          <div className="shell">
            <div className="max-w-[800px] mx-auto">
              {/* Back link */}
              <Reveal>
                <a
                  href="/blog"
                  className="inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.06em] text-muted hover:text-ink transition-colors mb-8"
                >
                  <span aria-hidden>←</span>
                  Thinking
                </a>
              </Reveal>

              {/* Category badge */}
              <Reveal>
                <div className="flex items-center gap-2 mb-6">
                  <span
                    className={`inline-block h-[7px] w-[7px] rounded-full shrink-0 ${dotClass}`}
                    aria-hidden
                  />
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                    {post.category}
                  </span>
                </div>
              </Reveal>

              {/* H1 */}
              <Reveal
                as="h1"
                className="font-display font-bold tracking-[-0.04em] leading-[1.08] text-ink-2 mb-8"
                style={{ fontSize: "clamp(36px, 5vw, 60px)" }}
              >
                {post.title}
              </Reveal>

              {/* Meta row */}
              <Reveal>
                <div className="flex items-center gap-3 font-mono text-[12px] text-muted">
                  <span>{post.author}</span>
                  <span aria-hidden className="opacity-40">·</span>
                  <span>{formatDate(post.date)}</span>
                  <span aria-hidden className="opacity-40">·</span>
                  <span>{post.readingTime} min read</span>
                </div>
              </Reveal>

              <div className="border-t border-line mt-8" />
            </div>
          </div>
        </section>

        {/* ── Featured image ────────────────────────────────────────────────── */}
        <div className="shell">
          <Reveal className="mt-8 mb-12 aspect-[21/9] rounded-[var(--radius-lg)] overflow-hidden">
            {post.featuredImage ? (
              <img
                src={post.featuredImage}
                alt=""
                className="w-full h-full object-cover"
              />
            ) : (
              <div
                className="w-full h-full flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${grad.from}22 0%, ${grad.to}08 100%)`,
                }}
              >
                <svg
                  aria-hidden
                  width="200"
                  height="200"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="opacity-20"
                  style={{ color: "var(--color-ink)" }}
                >
                  {/* Outer ring */}
                  <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="1" />
                  {/* Second ring */}
                  <circle cx="100" cy="100" r="44" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
                  {/* Rotated square */}
                  <rect
                    x="100"
                    y="100"
                    width="48"
                    height="48"
                    transform="translate(-24,-24) rotate(45 100 100)"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                  {/* Cardinal ticks */}
                  <line x1="100" y1="32" x2="100" y2="40" stroke="currentColor" strokeWidth="1" />
                  <line x1="100" y1="160" x2="100" y2="168" stroke="currentColor" strokeWidth="1" />
                  <line x1="32" y1="100" x2="40" y2="100" stroke="currentColor" strokeWidth="1" />
                  <line x1="160" y1="100" x2="168" y2="100" stroke="currentColor" strokeWidth="1" />
                  {/* Center dot */}
                  <circle cx="100" cy="100" r="4" fill="currentColor" />
                  {/* Inner cross */}
                  <line x1="100" y1="90" x2="100" y2="94" stroke="currentColor" strokeWidth="0.75" />
                  <line x1="100" y1="106" x2="100" y2="110" stroke="currentColor" strokeWidth="0.75" />
                  <line x1="90" y1="100" x2="94" y2="100" stroke="currentColor" strokeWidth="0.75" />
                  <line x1="106" y1="100" x2="110" y2="100" stroke="currentColor" strokeWidth="0.75" />
                </svg>
              </div>
            )}
          </Reveal>
        </div>

        {/* ── Prose body ────────────────────────────────────────────────────── */}
        <section className="py-[60px]">
          <div className="shell">
            <div className="max-w-[65ch] mx-auto">
              {paragraphs.map((para, i) =>
                i === 0 ? (
                  <Reveal key={i}>
                    <p className="text-[19px] font-medium text-ink leading-[1.6] mb-6">
                      {para}
                    </p>
                  </Reveal>
                ) : (
                  <Reveal key={i}>
                    <p className="text-[17px] leading-[1.7] text-ink/80 mb-6">
                      {para}
                    </p>
                  </Reveal>
                )
              )}
            </div>
          </div>
        </section>

        {/* ── Related posts ─────────────────────────────────────────────────── */}
        {relatedPosts.length > 0 && (
          <section className="py-[80px] border-t border-line">
            <div className="shell">
              <SectionHead label="Related reading" right={post.category} />
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {relatedPosts.map((related) => (
                  <BlogCard key={related.slug} post={related} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── CTA ──────────────────────────────────────────────────────────── */}
        <Contact />
      </main>
    </>
  );
}
