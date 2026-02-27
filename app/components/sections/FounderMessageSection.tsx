// components/FounderMessageSection.tsx
"use client";
import Image from "next/image";

import { useState } from "react";

const VIDEO_ID = "YfJaUm8R-B0";

export default function FounderMessageSection() {
    const [play, setPlay] = useState(false);

    const thumb = `https://img.youtube.com/vi/${VIDEO_ID}/hqdefault.jpg`;
    const embed = `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=0&rel=0&modestbranding=1`;

    return (
        <section className="bg-white px-4 sm:px-6 lg:px-10 py-10">
            <div className="mx-auto max-w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
                {/* Left Quote Card */}
                <div className="rounded-2xl bg-[#F3F8FD] p-6 sm:p-8 flex flex-col justify-center min-h-[240px]">
                    <div className="mb-6 lg:pb-20">
                        <Image
                            src="/Quotes.png"   // 👈 apni image ka path
                            alt="Quote icon"
                            width={60}
                            height={60}
                            className="object-contain"
                        />
                    </div>

                    <p className="text-[22px] sm:text-[24px] lg:text-[27px] lg:text-sm/9 font-bold leading-relaxed text-gray-800 max-w-xl">
                        “Through minimally invasive interventional radiology, we help
                        patients recover faster, live better, and avoid unnecessary surgery.
                        Welcome to a new era of healthcare in Pakistan.”
                    </p>
                </div>

                {/* Right Video Card */}
                <div className="rounded-2xl overflow-hidden relative min-h-[240px]">
                    {!play ? (
                        <button
                            type="button"
                            onClick={() => setPlay(true)}
                            className="group relative w-full h-full block"
                            aria-label="Play video"
                        >
                            {/* Thumbnail */}
                            <div
                                className="w-full h-[260px] sm:h-[320px] lg:h-full bg-center bg-cover"
                                style={{ backgroundImage: `url(${thumb})` }}
                            />

                            {/* Overall subtle overlay */}
                            <div className="absolute inset-0 bg-black/15 group-hover:bg-black/20 transition" />

                            {/* Strong bottom shadow/gradient for text visibility */}
                            <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-black/80 via-black/35 to-transparent" />

                            {/* YouTube Style Play Button */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="rounded-xl bg-[#FF0000] px-5 py-0 shadow-lg group-hover:scale-105 transition">
                                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                                        <path d="M10 8.2v7.6L16.3 12 10 8.2Z" fill="white" />
                                    </svg>
                                </div>
                            </div>

                            {/* Bottom Text Overlay (CENTER always) */}
                            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 text-center">
                                <p className="text-white/90 text-xl lg:text-lg sm:text-sm">
                                    A message from our founder
                                </p>
                                <h2 className="text-white text-xl lg:text-3xl sm:text-2xl font-semibold leading-snug">
                                    Dr. Shahbaz Ahmed Qazi
                                </h2>
                            </div>
                        </button>
                    ) : (
                        <div className="relative w-full h-[260px] sm:h-[320px] lg:h-full bg-[#0E58A8]">
                            <iframe
                                className="absolute inset-0 w-full h-full"
                                src={embed}
                                title="Founder message"
                                allow="autoplay; encrypted-media; picture-in-picture"
                                allowFullScreen
                            />

                            {/* Strong bottom shadow/gradient for text visibility (same as thumbnail) */}
                            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-black/80 via-black/35 to-transparent" />

                            {/* Bottom Text Overlay (CENTER fixed) */}
                            <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-4 sm:p-5 text-center">
                                <p className="text-white/90 text-xs sm:text-sm">
                                    A message from our founder
                                </p>
                                <p className="text-white text-lg sm:text-2xl font-semibold leading-snug">
                                    Dr. Shahbaz Ahmed Qazi
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
