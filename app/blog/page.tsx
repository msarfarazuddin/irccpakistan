"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import { formatBlogDate, getAllBlogPosts } from "@/app/data/blogPosts";

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.5-3.5" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14" />
      <path d="M12 5l7 7-7 7" />
    </svg>
  );
}

export default function BlogPage() {
  const posts = getAllBlogPosts();
  const [query, setQuery] = useState("");
  const [activeQuery, setActiveQuery] = useState("");

  const runSearch = (e?: FormEvent) => {
    e?.preventDefault();
    setActiveQuery(query.trim().toLowerCase());
  };

  const filteredPosts = useMemo(() => {
    if (!activeQuery) return posts;

    return posts.filter((post) => {
      const contentText = post.content
        .map((block) => {
          if (typeof block === "string") return block;
          if (block.type === "ul") return block.items.join(" ");
          return block.text;
        })
        .join(" ");

      const searchable = `${post.title} ${post.excerpt} ${post.author} ${post.slug} ${contentText}`.toLowerCase();
      return searchable.includes(activeQuery);
    });
  }, [activeQuery, posts]);

  const featuredPosts = posts.slice(0, 3);
  const latestPosts = posts.slice(0, 4);

  return (
    <div className="bg-white pb-20" >
      <section className="relative overflow-hidden pt-30 mt-[-100px] ">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-8 h-80 w-80 rounded-full bg-[#E7EEF9] blur-3xl" />
          <div className="absolute -right-24 top-20 h-72 w-72 rounded-full bg-[#E9F3FF] blur-3xl" />
          <div className="absolute left-1/2 top-0 h-40 w-64 -translate-x-1/2 rounded-full bg-white/70 blur-2xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-14 text-center sm:px-6 lg:px-8">
          <span className="inline-flex items-center rounded-full border border-[#E2E8F0] bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[#0B1220]">
            Blog
          </span>
          <h1 className="mt-4 text-3xl font-semibold text-[#0B1220] sm:text-4xl lg:text-5xl">
            Discover our latest news
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-[#6B7280] sm:text-base">
            Discover the achievements that set us apart. From groundbreaking projects to industry accolades,
            we take pride in our accomplishments.
          </p>

          <form
            onSubmit={runSearch}
            className="mx-auto mt-8 flex w-full max-w-xl flex-col items-stretch justify-center gap-3 sm:flex-row"
          >
            <div className="flex flex-1 items-center gap-2 rounded-full border border-[#E2E8F0] bg-white px-4 py-2 text-sm text-[#94A3B8] shadow-sm">
              <SearchIcon />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search blog posts..."
                className="w-full bg-transparent text-[#0B1220] placeholder:text-[#94A3B8] focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="rounded-full bg-[#0e58a8] px-6 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0e58a8]"
            >
              Find Now
            </button>
          </form>
        </div>
      </section>

      <section className="mx-auto max-w-full px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px]">
          <div>
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-semibold text-[#111]">Whiteboards are remarkable.</h2>
              <span className="h-px flex-1 bg-[#E6EAF3]" />
            </div>

            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post) => (
                <article
                  key={post.slug}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-[0_12px_30px_rgba(15,23,42,0.08)]"
                >
                  <div className="relative h-110 w-full">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

                    <div className="absolute inset-x-0 bottom-0 px-5 pb-5 pt-14 text-white">
                      <span className="inline-flex w-fit rounded-full bg-white/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0B1220]">
                        IRCC Insights
                      </span>
                      <h3 className="mt-3 text-lg font-semibold leading-snug">
                        {post.title}
                      </h3>
                      <p className="mt-2 text-sm text-white/80 line-clamp-3">{post.excerpt}</p>
                      <div className="mt-4">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center gap-2 text-sm font-semibold text-white"
                        >
                          Read More <ArrowIcon />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            {filteredPosts.length === 0 && (
              <p className="mt-6 text-sm font-medium text-[#475569]">
                No related blog found for "{query.trim() || activeQuery}".
              </p>
            )}
          </div>

          <aside className="space-y-10">
            <div>
              <div className="flex items-center gap-4">
                <h3 className="text-2xl font-semibold text-[#111]">
                  Featured
                </h3>
                <span className="h-px flex-1 bg-[#E6EAF3]" />
              </div>
              <div className="mt-6 space-y-4">
                {featuredPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group flex items-start gap-3"
                  >
                    <div className="relative h-20 w-20 overflow-hidden rounded-2xl">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition duration-300 group-hover:scale-105"
                        sizes="65px"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-[#94A3B8]">{formatBlogDate(post.date)}</p>
                      <p className="mt-1 text-sm font-semibold text-[#111] group-hover:text-[#1158a8]">
                        {post.title}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-4">
                <h3 className="text-2xl font-semibold text-[#111]">
                  Latest
                </h3>
                <span className="h-px flex-1 bg-[#E6EAF3]" />
              </div>
              <div className="mt-6 space-y-4">
                {latestPosts.map((post) => (
                  <Link
                    key={`latest-${post.slug}`}
                    href={`/blog/${post.slug}`}
                    className="group flex items-start gap-3"
                  >
                    <div className="relative h-20 w-20 overflow-hidden rounded-2xl">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition duration-300 group-hover:scale-105"
                        sizes="65px"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-[#94A3B8]">{formatBlogDate(post.date)}</p>
                      <p className="mt-1 text-sm font-semibold text-[#111] group-hover:text-[#1158a8]">
                        {post.title}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
