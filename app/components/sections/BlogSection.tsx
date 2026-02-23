"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { formatBlogDate, getAllBlogPosts } from "@/app/data/blogPosts";

function ArrowCircle({ dir }: { dir: "left" | "right" }) {
  return (
    <span className="grid h-10 w-10 place-items-center rounded-full border border-[#DDE6F8] bg-white shadow-lg transition hover:bg-[#F5F8FF]">
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 text-[#0E58A8]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        {dir === "left" ? (
          <path d="M15 18l-6-6 6-6" />
        ) : (
          <path d="M9 6l6 6-6 6" />
        )}
      </svg>
    </span>
  );
}

function CalendarBadge({ date }: { date: string }) {
  return (
    <div className="absolute left-3 top-3 z-10 inline-flex items-center gap-2 rounded-full mix-blend-multiply bg-white/90 px-3 py-1 text-xs font-medium text-[#0B1220] shadow-lg ring-1 ring-black/5 backdrop-blur">
      <span className="grid h-5 w-5 place-items-center rounded-full bg-[#EEF6FF] text-[#0E58A8]">
        <svg
          viewBox="0 0 24 24"
          className="h-3.5 w-3.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M7 3v2M17 3v2" />
          <path d="M4 7h16" />
          <rect x="4" y="5" width="16" height="16" rx="3" />
        </svg>
      </span>
      {date}
    </div>
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

export default function BlogsSectionSlider() {
  const posts = getAllBlogPosts();
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const scroll = (dir: "prev" | "next") => {
    const el = scrollerRef.current;
    if (!el) return;

    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = (card?.offsetWidth ?? 360) + 24;
    el.scrollBy({ left: dir === "next" ? step : -step, behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-white py-14">
      {/* soft tint background like screenshot */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#ffffff] via-white to-white" />

      <div className="relative mx-auto max-w-full px-4 sm:px-6 lg:px-8">
        {/* Header row */}
        <div className="flex items-center justify-between gap-4">
          <h4 className="text-3xl lg:text-4xl tracking-tight text-[#0B1220] sm:text-4xl">
            From the <span className=" font-semibold text-[#0E58A8]">Blogs</span>
          </h4>

          <div className="flex items-center gap-3">
            <button type="button" onClick={() => scroll("prev")} aria-label="Previous">
              <ArrowCircle dir="left" />
            </button>
            <button type="button" onClick={() => scroll("next")} aria-label="Next">
              <ArrowCircle dir="right" />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div
          ref={scrollerRef}
          className="mt-8 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {posts.map((post) => (
            <article
              key={post.slug}
              data-card
              className="flex w-[85%] flex-none snap-start flex-col overflow-hidden rounded-2xl sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              {/* Image */}
              <div className="relative h-60 w-full rounded-lg">
                <CalendarBadge date={formatBlogDate(post.date)} />
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover border-2 border-white shadow-lg rounded-[15px]"
                  sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 33vw "
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col pl-1 pr-1 p-6">
                <h4 className="text-lg lg:text-2xl font-normal text-[#0B1220]">
                  {post.title}
                </h4>

                <p className="mt-3 text-sm leading-6 text-[#5B6577] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
                  {post.excerpt}
                </p>

                <div className="mt-6">
                  <div className="flex justify-start pb-2">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="mx-auto mt-0 ml-0 inline-flex items-center gap-2 rounded-full bg-[#0E58A8] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#0E58A8]"
                    >
                      Know More <ArrowIcon />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
