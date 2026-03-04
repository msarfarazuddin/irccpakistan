"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type VideoItem = {
    title: string;
    url: string; // full youtube link OR just id
};

function getYouTubeId(urlOrId?: string): string {
    if (!urlOrId) return "";

    // already an ID
    if (!urlOrId.includes("http")) return urlOrId.trim();

    try {
        const url = new URL(urlOrId);

        // youtu.be/VIDEOID
        if (url.hostname.includes("youtu.be")) {
            return url.pathname.replace("/", "").trim();
        }

        // youtube.com/watch?v=VIDEOID
        const v = url.searchParams.get("v");
        if (v) return v.trim();

        // youtube.com/embed/VIDEOID
        const parts = url.pathname.split("/");
        const embedIndex = parts.indexOf("embed");
        if (embedIndex !== -1 && parts[embedIndex + 1]) {
            return parts[embedIndex + 1].trim();
        }

        return "";
    } catch {
        return "";
    }
}

export default function AboutSection() {
    // ✅ Add your YouTube links/ids here
    const videos = useMemo<VideoItem[]>(
        () => [
            {
                title:
                    "Ask your Gynaecologist why you are not suggesting me second option uterine fibroids embolization",
                url: "https://www.youtube.com/watch?v=Ppfrn80dfzs",
            },
            { title: "Treatment explained (Episode 2)", url: "https://www.youtube.com/watch?v=msZAutxlZSU" },
            { title: "Patient awareness talk (Episode 3)", url: "https://www.youtube.com/watch?v=tTY_ai2oC3I" },
        ],
        []
    );

    const videoIds = useMemo<string[]>(
        () => videos.map((v) => getYouTubeId(v.url)).filter((id): id is string => Boolean(id)),
        [videos]
    );

    const [active, setActive] = useState<number>(0);
    const total = videoIds.length;

    const prev = () => setActive((i) => (total ? (i - 1 + total) % total : 0));
    const next = () => setActive((i) => (total ? (i + 1) % total : 0));

    return (
        <section className="w-full bg-white">
            <div className="mx-auto w-full max-w-full px-4 py-10 sm:px-6 lg:px-10">
                {/* Top intro */}
                <div className="mx-auto max-w-xl text-left text-[#111111]">
                    <p className=" text-[22px] leading-8 text-[#111111]">
                        Dr Shahbaz Ahmed Qazi is a foreign trained highly qualified Vascular
                        Interventional Radiologist working abroad in one of the largest tertiary
                        care center and has vast experience in treating minimal invasive procedures.
                    </p>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12">
                    {/* Left Card */}
                    <div className="lg:col-span-8">
                        <div className="rounded-2xl bg-[#f4f8ff] p-6 sm:p-8">
                            <h4 className="text-3xl lg:text-4xl text-[#1d2a50] sm:text-3xl">
                                As Seen On <span className="font-extrabold text-[#0E58A8]">National Television</span>
                            </h4>

                            <p className="mt-3 max-w-[730px] text-[16px] leading-6 text-[#1d2a50]/80">
                                Dr. Shahbaz Ahmed Qazi has been featured on leading news and health programs,
                                sharing expert medical insights with a wide audience.
                            </p>

                            {/* Logos row (replace paths with your real logos) */}
                            <div className="aboutlogo mt-6 flex flex-wrap items-center gap-x-8 gap-y-4">
                                <div className="relative h-20 w-25">
                                    <Image src="/geo.png" alt="Geo" fill className="object-contain" />
                                </div>
                                <div className="relative h-20 w-25">
                                    <Image src="/capital.png" alt="Capital TV" fill className="object-contain" />
                                </div>
                                <div className="relative h-20 w-25">
                                    <Image src="/metro.png" alt="Metro" fill className="object-contain" />
                                </div>
                                <div className="relative h-20 w-25">
                                    <Image src="/atv.png" alt="ATV" fill className="object-contain" />
                                </div>
                                <div className="relative h-20 w-25">
                                    <Image src="/dawn.png" alt="Dawn" fill className="object-contain" />
                                </div>
                                <div className="relative h-20 w-25">
                                    <Image src="/sama.png" alt="Samaa" fill className="object-contain" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Video Slider */}
                    <div className="lg:col-span-4">
                        <div className="overflow-hidden rounded-2xl border border-[#e2e5eb] bg-[#0E58A8] shadow-sm">
                            <div className="relative aspect-video w-full">
                                {total > 0 ? (
                                    <>
                                        {/* YouTube Video */}
                                        <iframe
                                            key={videoIds[active]}
                                            className="absolute inset-0 h-full w-full"
                                            src={`https://www.youtube.com/embed/${videoIds[active]}?rel=0&modestbranding=1`}
                                            title={videos[active]?.title ?? "YouTube video"}
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen
                                        />

                                        {/* Gradient (doesn't block clicks) */}
                                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />

                                        {/* Bottom Center UI (doesn't block clicks except buttons) */}
                                        <div className="pointer-events-none absolute inset-x-0 bottom-4 z-20 flex flex-col items-center gap-1 px-4">
                                            {/* Text above arrows */}
                                            <p className="pointer-events-none max-w-[80%] text-center text-sm font-medium leading-snug text-white">
                                                {videos[active]?.title}
                                            </p>

                                            {/* Arrows bottom-center */}
                                            <div className="pointer-events-auto flex items-center gap-2">
                                                <button
                                                    type="button"
                                                    onClick={prev}
                                                    disabled={total === 0}
                                                    className="flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-[#0E58A8] shadow transition hover:bg-white disabled:opacity-40"
                                                    aria-label="Previous video"
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
                                                    disabled={total === 0}
                                                    className="flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-[#0E58A8] shadow transition hover:bg-white disabled:opacity-40"
                                                    aria-label="Next video"
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
                                    </>
                                ) : (
                                    <div className="flex h-full w-full items-center justify-center text-white/70">
                                        Add YouTube links/IDs in videos array
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
}
