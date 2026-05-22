"use client";

import { useRef } from "react";
import type { CityPageReason } from "@/app/lib/cityPillarContent";

type CityReasonsCarouselProps = {
  items: CityPageReason[];
};

function ArrowCircle({ dir }: { dir: "left" | "right" }) {
  return (
    <span className="grid h-11 w-11 place-items-center rounded-full border border-[#D7E4F6] bg-white shadow-lg transition hover:bg-[#F4F9FF]">
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

export default function CityReasonsCarousel({
  items,
}: CityReasonsCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const scroll = (dir: "prev" | "next") => {
    const element = scrollerRef.current;
    if (!element) {
      return;
    }

    const card = element.querySelector<HTMLElement>("[data-card]");
    const step = (card?.offsetWidth ?? 420) + 24;
    element.scrollBy({
      left: dir === "next" ? step : -step,
      behavior: "smooth",
    });
  };

  return (
    <div className="mt-10">
      <div className="flex items-center justify-between gap-3 sm:justify-end">
        <button type="button" onClick={() => scroll("prev")} aria-label="Previous">
          <ArrowCircle dir="left" />
        </button>
        <button type="button" onClick={() => scroll("next")} aria-label="Next">
          <ArrowCircle dir="right" />
        </button>
      </div>

      <div
        ref={scrollerRef}
        className="mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-5 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-6"
      >
        {items.map((item, index) => (
          <article
            key={item.title}
            data-card
            className="group relative flex w-[88vw] flex-none snap-start flex-col overflow-hidden rounded-[32px] border border-[#D7E4F6] bg-white p-6 shadow-[0_24px_70px_rgba(13,56,113,0.08)] sm:w-[430px] sm:p-7 lg:w-[calc((100%_-_4.5rem)/4)]"
          >
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(14,88,168,0.12),transparent_28%),linear-gradient(180deg,#FFFFFF_0%,#F9FCFF_100%)]" />

            <div className="flex items-center justify-between gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EAF4FF] text-[#0E58A8]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-7 w-7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </div>

              <span className="rounded-full border border-[#D7E4F6] bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#0E58A8]">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <h3 className="mt-6 text-[20px] font-semibold leading-[1.25] text-[#0B1220]">
              {item.title}
            </h3>

            {item.description ? (
              <p className="mt-4 text-sm leading-7 text-[#4F6178] sm:text-[15px]">
                {item.description}
              </p>
            ) : null}

            <ul className="mt-5 space-y-3">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span className="mt-[6px] flex h-2.5 w-2.5 shrink-0 rounded-full bg-[#0E58A8]" />
                  <span className="text-sm leading-8 text-[#35506E] sm:text-[15px]">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
