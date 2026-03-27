"use client";

import { useMemo, useState } from "react";

type VideoItem = {
  id: string;
  videoUrl: string;
  thumb: string;
};

type ReviewItem = {
  id: string;
  name: string;
  city: string;
  role: string;
  rating: number;
  text: string;
};

function Stars({ value }: { value: number }) {
  return (
    <div className="mt-2 flex gap-1 text-[#F6C343]" aria-label={`${value} stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < value ? "opacity-100" : "opacity-20"}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function VideoReviewSection() {
  // ------------------ Data ------------------
  const videos: VideoItem[] = useMemo(
    () => [
      {
        id: "1",
        videoUrl: "https://www.youtube.com/embed/bhdYWOl1slg?rel=0&modestbranding=1",
        thumb: "https://i.ytimg.com/vi/bhdYWOl1slg/hqdefault.jpg",
      },
      {
        id: "2",
        videoUrl: "https://www.youtube.com/embed/SyfOwZhZnws?rel=0&modestbranding=1",
        thumb: "https://i.ytimg.com/vi/SyfOwZhZnws/hqdefault.jpg",
      },
      {
        id: "3",
        videoUrl: "https://www.youtube.com/embed/htf0ENvDH6E?rel=0&modestbranding=1",
        thumb: "https://i.ytimg.com/vi/htf0ENvDH6E/hqdefault.jpg",
      },
      {
        id: "4",
        videoUrl: "https://www.youtube.com/embed/IPZ9v2j1MZc?rel=0&modestbranding=1",
        thumb: "https://i.ytimg.com/vi/IPZ9v2j1MZc/hqdefault.jpg",
      },
      {
        id: "5",
        videoUrl: "https://www.youtube.com/embed/CBDqKdMHJQY?rel=0&modestbranding=1",
        thumb: "https://i.ytimg.com/vi/CBDqKdMHJQY/hqdefault.jpg",
      },
      {
        id: "6",
        videoUrl: "https://www.youtube.com/embed/UYSw84mUz1c?rel=0&modestbranding=1",
        thumb: "https://i.ytimg.com/vi/UYSw84mUz1c/hqdefault.jpg",
      },
    ],
    []
  );

  const reviews: ReviewItem[] = useMemo(
    () => [
      {
        id: "r1",
        name: " Nitasha,",
        city: "Karachi",
        role: "Teacher",
        rating: 5,
        text:
          "If you have fibroids, go see them. I waited eight years. Their procedure is non-invasive and life changing. Gynaecologists won’t tell you about this option, and it works. Dr Shahbaz Qazi and his staff are amazing. Stop suffering. Hysterectomy is not the only option. My relief was immediate.",
      },
      {
        id: "r2",
        name: "Nabeel",
        city: "Islamabad",
        role: "IT Manager",
        rating: 4,
        text: "I suffered from left testical pain for the last 2 years, I want the treatment without surgery. I saw the commercial on a social blog and called IRCC Pakistan; from day one setting up my appointment, I was treated and I got cured from my symptoms. The team is professional and caring especially Dr Shahbaz Qazi. They explain top notch information about the problem and how they can fix it. Dr Shahbaz Ahmed Qazi will always be recommended by me.",
      },
      {
        id: "r3",
        name: "Saira",
        city: "Lahore",
        role: "Engineer",
        rating: 5,
        text: "I did the embolization approximately one year, this procedure has transformed my life. Choosing this alternative to hysterectomy is something I would never regret. No more pain and excessive bleeding. Dr Qazi and staff were so professional.",
      },
    ],
    []
  );

  // ------------------ Separate States ------------------
  const [activeVideo, setActiveVideo] = useState(0);
  const [activeReview, setActiveReview] = useState(0);

  // thumbnails row (pagination)
  const visibleThumbs = 6;
  const [thumbStart, setThumbStart] = useState(0);

  // ------------------ Video Controls ------------------
  const nextVideo = () => {
    setActiveVideo((p) => {
      const n = (p + 1) % videos.length;

      // ensure active video thumbnail visible
      if (n >= thumbStart + visibleThumbs) setThumbStart(n - (visibleThumbs - 1));
      return n;
    });
  };

  const prevVideo = () => {
    setActiveVideo((p) => {
      const n = p === 0 ? videos.length - 1 : p - 1;

      // ensure active video thumbnail visible
      if (n < thumbStart) setThumbStart(Math.max(0, n));
      return n;
    });
  };

  const scrollThumbsLeft = () => setThumbStart((s) => Math.max(0, s - visibleThumbs));
  const scrollThumbsRight = () =>
    setThumbStart((s) => Math.min(Math.max(0, videos.length - visibleThumbs), s + visibleThumbs));

  // ------------------ Review Controls ------------------
  const nextReview = () => setActiveReview((p) => (p + 1) % reviews.length);
  const prevReview = () => setActiveReview((p) => (p === 0 ? reviews.length - 1 : p - 1));

  return (
    <section className="w-full bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-[1300px] px-4">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          {/* ---------------- VIDEO COLUMN ---------------- */}
          <div>
            <div className="rounded-xl border border-gray-200 bg-black/5 p-3 shadow-sm">
              <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={videos[activeVideo].videoUrl}
                  title="Video testimonial"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Thumbnails row (video ke neeche) */}
            <div className="mt-6 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={scrollThumbsLeft}
                className="hidden rounded-full border border-gray-300 px-3 py-2 text-sm hover:bg-gray-50 sm:inline-flex"
                aria-label="Thumbnails left"
              >
                ‹
              </button>

              <div className="flex w-full items-center gap-3 overflow-x-auto pb-1 sm:w-auto sm:overflow-hidden">
                {videos.slice(thumbStart, thumbStart + visibleThumbs).map((v, idx) => {
                  const realIndex = thumbStart + idx;
                  const isActive = realIndex === activeVideo;
                  return (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setActiveVideo(realIndex)}
                      className={`relative h-16 w-28 shrink-0 overflow-hidden rounded-md border transition ${
                        isActive ? "border-black/70" : "border-gray-200 hover:border-gray-300"
                      }`}
                      aria-label={`Play video ${realIndex + 1}`}
                    >
                      <img src={v.thumb} alt="" className="h-full w-full object-cover" />
                      <div className="absolute inset-0 grid place-items-center bg-black/10">
                        <span className="grid h-9 w-9 place-items-center rounded-full bg-white/90 shadow">
                          <svg viewBox="0 0 24 24" className="h-5 w-5 text-black" fill="currentColor">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={scrollThumbsRight}
                className="hidden rounded-full border border-gray-300 px-3 py-2 text-sm hover:bg-gray-50 sm:inline-flex"
                aria-label="Thumbnails right"
              >
                ›
              </button>
            </div>

            {/* Video Prev/Next (separate) */}
            <div className="mt-8 flex items-center justify-center gap-3 sm:gap-4">
              <button
                type="button"
                onClick={prevVideo}
                className="w-[48%] max-w-[180px] rounded-md bg-[#1F1F1F] px-6 py-4 text-sm font-semibold text-white hover:bg-black sm:min-w-[170px] sm:w-auto sm:max-w-none sm:px-10"
              >
                Previous
              </button>

              <button
                type="button"
                onClick={nextVideo}
                className="w-[48%] max-w-[180px] rounded-md bg-[#1F1F1F] px-6 py-4 text-sm font-semibold text-white hover:bg-black sm:min-w-[170px] sm:w-auto sm:max-w-none sm:px-10"
              >
                Next
              </button>
            </div>
          </div>

          {/* ---------------- REVIEW COLUMN ---------------- */}
          <div className="pt-2">
            <div className="text-lg font-semibold text-gray-900 sm:text-xl">
              <span>-{reviews[activeReview].name},</span>
              <span className="ml-1">{reviews[activeReview].city}</span>{" "}
              <span className="ml-1 italic text-[#2B74FF]">{reviews[activeReview].role}</span>
            </div>

            <Stars value={reviews[activeReview].rating} />

            <p className="mt-5 max-w-[560px] text-base leading-7 text-gray-500 sm:text-[18px] sm:leading-8">
              {reviews[activeReview].text}
            </p>

            {/* Review arrows (separate) */}
            <div className="mt-8 flex max-w-[560px] justify-start gap-4 sm:justify-end">
              <button
                type="button"
                onClick={prevReview}
                className="grid h-14 w-14 place-items-center rounded-full border-2 border-[#BFC7D5] text-[#5F6E86] transition hover:bg-[#F5F8FF] hover:text-[#324A72]"
                aria-label="Previous review"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                type="button"
                onClick={nextReview}
                className="grid h-14 w-14 place-items-center rounded-full border-2 border-[#BFC7D5] text-[#5F6E86] transition hover:bg-[#F5F8FF] hover:text-[#324A72]"
                aria-label="Next review"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
