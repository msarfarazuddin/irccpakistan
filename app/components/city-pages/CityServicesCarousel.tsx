"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import type { CityPageService } from "@/app/lib/cityPillarContent";

type CityServicesCarouselProps = {
  items: CityPageService[];
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

export default function CityServicesCarousel({
  items,
}: CityServicesCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  const toggleExpanded = (href: string) => {
    setExpandedItems((current) => ({
      ...current,
      [href]: !current[href],
    }));
  };

  const scroll = (dir: "prev" | "next") => {
    const element = scrollerRef.current;
    if (!element) {
      return;
    }

    const card = element.querySelector<HTMLElement>("[data-card]");
    const step = (card?.offsetWidth ?? 340) + 24;
    element.scrollBy({
      left: dir === "next" ? step : -step,
      behavior: "smooth",
    });
  };

  return (
    <div>
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
        className="mt-8 flex items-stretch snap-x snap-mandatory gap-5 overflow-x-auto bg-transparent pb-5 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-6"
      >
        {items.map((item, index) => (
          (() => {
            const isExpanded = Boolean(expandedItems[item.href]);
            const shouldCollapse =
              Boolean(item.bulletHeading) ||
              item.bullets.length > 0 ||
              Boolean(item.note);

            return (
              <article
                key={item.href}
                data-card
                className="group relative flex w-[88vw] flex-none snap-start flex-col overflow-hidden rounded-[32px] border border-[#D7E4F6] bg-white shadow-[0_28px_80px_rgba(13,56,113,0.10)] sm:w-[360px] md:w-[calc((100%_-_1.5rem)/2)] lg:w-[calc((100%_-_3rem)/3)]"
              >
                <div className="relative h-56 overflow-hidden border-b border-[#E3EDF8] bg-[radial-gradient(circle_at_top_left,rgba(14,88,168,0.16),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(255,185,130,0.22),transparent_30%),linear-gradient(135deg,#F8FBFF_0%,#EAF3FF_52%,#FFF9F4_100%)] sm:h-60">
                  <div className="absolute -left-8 top-0 h-28 w-28 rounded-full bg-white/65 blur-3xl" />
                  <div className="absolute -right-8 bottom-0 h-32 w-32 rounded-full bg-[#CFE4FF]/65 blur-3xl" />
                  <div className="absolute left-5 top-5 z-20 rounded-full border border-white/80 bg-white/92 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#0E58A8] shadow-[0_10px_30px_rgba(14,88,168,0.14)]">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="relative z-10 h-full px-5 pb-5 pt-16 sm:px-6 sm:pb-6">
                    <h3 className="absolute bottom-5 left-5 z-20 max-w-[48%] text-[21px] font-semibold leading-[1.12] text-[#0B1220] sm:bottom-6 sm:left-6 sm:max-w-[42%] sm:text-[26px]">
                      {item.title}
                    </h3>

                    <div className="absolute inset-y-0 right-0 w-[60%]">
                      <Image
                        src={item.image}
                        alt={item.imageAlt}
                        fill
                        sizes="(max-width: 640px) 85vw, 360px"
                        className="origin-right object-contain object-right pr-0 transition duration-700 group-hover:scale-[1.16]"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="relative">
                    <p className="text-sm leading-7 text-[#41546D] sm:text-[15px]">
                      {item.description}
                    </p>

                    {shouldCollapse && !isExpanded ? (
                      <div className="pointer-events-none absolute inset-x-0 -bottom-2 h-16 bg-gradient-to-t from-white via-white/95 to-transparent" />
                    ) : null}
                  </div>

                  {shouldCollapse ? (
                    <>
                      <div
                        className={`overflow-hidden transition-[max-height,opacity,margin] duration-500 ease-in-out ${
                          isExpanded
                            ? "mt-5 max-h-[1200px] opacity-100"
                            : "mt-0 max-h-0 opacity-0"
                        }`}
                      >
                        {item.bulletHeading ? (
                          <p className="text-sm font-semibold leading-7 text-[#0B1220] sm:text-[15px]">
                            {item.bulletHeading}
                          </p>
                        ) : null}

                        <ul className="mt-4 space-y-3">
                          {item.bullets.map((bullet) => (
                            <li key={bullet} className="flex items-start gap-3">
                              <span className="mt-[6px] flex h-2.5 w-2.5 shrink-0 rounded-full bg-[#0E58A8]" />
                              <span className="text-sm leading-7 text-[#41546D] sm:text-[15px]">
                                {bullet}
                              </span>
                            </li>
                          ))}
                        </ul>

                        {item.note ? (
                          <p className="mt-6 border-t border-[#D7E4F6]/80 pt-4 text-sm font-medium leading-7 text-[#0B1220] sm:text-[15px]">
                            {item.note}
                          </p>
                        ) : null}

                        <div className="mt-6">
                          <Link
                            href={item.href}
                            className="inline-flex items-center gap-2 rounded-full bg-[#0E58A8] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_18px_35px_rgba(14,88,168,0.22)] transition hover:bg-[#0A4A90]"
                          >
                            Visit Service Page
                            <svg
                              viewBox="0 0 24 24"
                              className="h-4 w-4"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path d="M5 12h14" />
                              <path d="M12 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => toggleExpanded(item.href)}
                        aria-expanded={isExpanded}
                        className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-[#D7E4F6] bg-[linear-gradient(180deg,#FFFFFF_0%,#F3F9FF_100%)] px-4 py-2 text-sm font-semibold text-[#0E58A8] shadow-[0_14px_28px_rgba(14,88,168,0.10)] transition hover:-translate-y-0.5 hover:border-[#BFD7F3] hover:shadow-[0_18px_36px_rgba(14,88,168,0.14)]"
                      >
                        <span>{isExpanded ? "Show less" : "Read more"}</span>
                        <span className="grid h-6 w-6 place-items-center rounded-full bg-white shadow-sm">
                          <svg
                            viewBox="0 0 24 24"
                            className={`h-4 w-4 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M6 9l6 6 6-6" />
                          </svg>
                        </span>
                      </button>
                    </>
                  ) : null}

                  {!shouldCollapse ? (
                    <div className="mt-auto pt-6">
                      <Link
                        href={item.href}
                        className="inline-flex items-center gap-2 rounded-full bg-[#0E58A8] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_18px_35px_rgba(14,88,168,0.22)] transition hover:bg-[#0A4A90]"
                      >
                        Visit Service Page
                        <svg
                          viewBox="0 0 24 24"
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M5 12h14" />
                          <path d="M12 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  ) : null}
                </div>
              </article>
            );
          })()
        ))}
      </div>
    </div>
  );
}
