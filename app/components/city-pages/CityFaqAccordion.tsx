"use client";

import { useState } from "react";
import type { CityPageFaq } from "@/app/lib/cityPillarContent";

type CityFaqAccordionProps = {
  items: CityPageFaq[];
};

export default function CityFaqAccordion({ items }: CityFaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = index === openIndex;

        return (
          <div
            key={item.question}
            className="overflow-hidden rounded-[28px] border border-[#D8E6F8] bg-white shadow-[0_24px_60px_rgba(13,56,113,0.08)]"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-7"
              aria-expanded={isOpen}
            >
              <span className="text-base leading-7 text-[#0B1220] sm:text-lg">
                {item.question}
              </span>

              <span
                className={[
                  "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition",
                  isOpen
                    ? "border-[#0E58A8] bg-[#0E58A8] text-white"
                    : "border-[#D8E6F8] bg-[#F7FBFF] text-[#0E58A8]",
                ].join(" ")}
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M6 12h12" />
                  {!isOpen && <path d="M12 6v12" />}
                </svg>
              </span>
            </button>

            <div
              className={[
                "grid transition-[grid-template-rows,opacity,padding] duration-300",
                isOpen
                  ? "grid-rows-[1fr] px-6 pb-6 opacity-100 sm:px-7"
                  : "grid-rows-[0fr] px-6 pb-0 opacity-0 sm:px-7",
              ].join(" ")}
            >
              <div className="min-h-0 overflow-hidden">
                <p className="text-sm leading-7 text-[#4F6178] sm:text-[15px]">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
