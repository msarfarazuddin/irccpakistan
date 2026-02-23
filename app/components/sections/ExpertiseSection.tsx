"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type SpecItem = {
  title: string;
  desc: string;
};

export default function ExpertiseSection() {
  const items = useMemo<SpecItem[]>(
    () => [
      {
        title: "Radiofrequency Expert",
        desc: "Highest no of radiofrequency ablation of osteoid osteoma in Pakistan.",
      },
      {
        title: "Thyroid Specialist",
        desc: "RFA ablation of thyroid and thyroid alcohol cyst ablation with 100% patient satisfaction.",
      },
      {
        title: "Varicocele Expertise",
        desc: "Highest number of varicocele embolization for symptomatic pain and infertility issues in Pakistan.",
      },
      {
        title: "UFE Specialist",
        desc: "Uterine Fibroids Embolization with minimally invasive, fast recovery protocols.",
      },
      {
        title: "Vascular Access",
        desc: "Expert in complex vascular access procedures with image-guided precision.",
      },
      {
        title: "Pain Interventions",
        desc: "Targeted, image-guided pain interventions for improved quality of life.",
      },
    ],
    []
  );

  // ✅ how many cards per page
  const perPage = 3;
  const pages = Math.max(1, Math.ceil(items.length / perPage));
  const [page, setPage] = useState<number>(0);

  const prev = () => setPage((p) => (p - 1 + pages) % pages);
  const next = () => setPage((p) => (p + 1) % pages);

  const start = page * perPage;
  const visible = items.slice(start, start + perPage);

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-full px-4 pb-10 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Left Image */}
          <div className="lg:col-span-4">
            <div className="relative overflow-hidden rounded-2xl bg-[#eef3ff]">
              <div className="relative aspect-[5/3] w-full">
                {/* replace with your real image */}
                <Image
                  src="/expertis.png"
                  alt="Doctor"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="lg:col-span-8">
            <div className="rounded-2xl bg-[#f4f8ff] h-full p-6 sm:p-8">
              {/* Header + Arrows */}
              <div className="flex items-start justify-between gap-4">
                <h4 className="text-3xl lg:text-4xl text-[#1d2a50] sm:text-3xl">
                  Expertise &{" "}
                  <span className="font-extrabold text-[#0E58A8]">Specializations</span>
                </h4>

                <div className="flex items-center gap-2 ">
                  <button
                    type="button"
                    onClick={prev}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#d2d7e4] bg-white text-[#0E58A8] transition hover:border-[#0E58A8] shadow-lg"
                    aria-label="Previous"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                  </button>

                  <button
                    type="button"
                    onClick={next}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#d2d7e4] bg-white text-[#0E58A8] transition hover:border-[#0E58A8] shadow-lg"
                    aria-label="Next"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path d="M9 6l6 6-6 6" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Slider Row */}
              <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {visible.map((it, idx) => (
                  <div key={`${it.title}-${idx}`} className="relative">
                    <h3 className="text-xl font-extrabold text-[#0E58A8]">
                      {it.title}
                    </h3>
                    <p className="mt-2 text-[16px] leading-6 text-[#1d2a50]/75">
                      {it.desc}
                    </p>

                    {/* Vertical divider like screenshot */}
                    <div className="absolute -right-3 top-0 hidden h-full w-px bg-[#dbe3f3] lg:block" />
                  </div>
                ))}
              </div>

              {/* Remove last divider look (optional - purely cosmetic) */}
              <style jsx>{`
                .mt-6 > div:last-child div {
                  display: none;
                }
              `}</style>

             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
