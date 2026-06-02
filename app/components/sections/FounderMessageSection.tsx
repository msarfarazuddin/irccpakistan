// components/FounderMessageSection.tsx
"use client";

import Image from "next/image";
import LiteYouTubeEmbed from "@/app/components/media/LiteYouTubeEmbed";

const VIDEO_ID = "YfJaUm8R-B0";

export default function FounderMessageSection() {
  return (
    <section className="bg-white px-4 sm:px-6 lg:px-10 py-10">
      <div className="mx-auto max-w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
        <div className="rounded-2xl bg-[#F3F8FD] p-6 sm:p-8 flex flex-col justify-center min-h-[240px]">
          <div className="mb-6 lg:pb-20">
            <Image
              src="/Quotes.png"
              alt="Quote icon"
              width={60}
              height={60}
              className="object-contain"
            />
          </div>

          <p className="text-[22px] sm:text-[24px] lg:text-[27px] lg:text-sm/9 font-bold leading-relaxed text-gray-800 max-w-xl">
            Through minimally invasive interventional radiology, we help
            patients recover faster, live better, and avoid unnecessary surgery.
            Welcome to a new era of healthcare in Pakistan.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden relative min-h-[240px]">
          <LiteYouTubeEmbed
            videoId={VIDEO_ID}
            title="Founder message"
            className="relative h-[260px] w-full bg-[#0E58A8] sm:h-[320px] lg:h-full"
            allow="autoplay; encrypted-media; picture-in-picture"
            query="autoplay=1&mute=0&rel=0&modestbranding=1"
          >
            <div className="pointer-events-none absolute inset-0 bg-black/15" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-black/80 via-black/35 to-transparent" />
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-4 text-center sm:p-5">
              <p className="text-white/90 text-xl lg:text-lg sm:text-sm">
                A message from our founder
              </p>
              <h2 className="text-white text-xl lg:text-3xl sm:text-2xl font-semibold leading-snug">
                Dr. Shahbaz Ahmed Qazi
              </h2>
            </div>
          </LiteYouTubeEmbed>
        </div>
      </div>
    </section>
  );
}
