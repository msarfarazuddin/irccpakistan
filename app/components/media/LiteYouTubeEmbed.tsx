"use client";

import type { ReactNode } from "react";
import { useState } from "react";

type LiteYouTubeEmbedProps = {
  videoId: string;
  title: string;
  className?: string;
  imageClassName?: string;
  iframeClassName?: string;
  playButtonClassName?: string;
  allow?: string;
  query?: string;
  children?: ReactNode;
};

const DEFAULT_ALLOW =
  "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";

const DEFAULT_QUERY = "rel=0&modestbranding=1";

export default function LiteYouTubeEmbed({
  videoId,
  title,
  className = "relative h-full w-full",
  imageClassName = "absolute inset-0 h-full w-full object-cover",
  iframeClassName = "absolute inset-0 h-full w-full",
  playButtonClassName = "absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-[#FF0000] px-5 py-0 shadow-lg transition hover:scale-105",
  allow = DEFAULT_ALLOW,
  query = DEFAULT_QUERY,
  children,
}: LiteYouTubeEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const thumbnailSrc = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
  const embedSrc = `https://www.youtube.com/embed/${videoId}?${query}`;

  return (
    <div className={className}>
      {isPlaying ? (
        <iframe
          className={iframeClassName}
          src={embedSrc}
          title={title}
          allow={allow}
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : (
        <>
          <img
            src={thumbnailSrc}
            alt={title}
            loading="lazy"
            decoding="async"
            className={imageClassName}
          />
          <button
            type="button"
            onClick={() => setIsPlaying(true)}
            className={playButtonClassName}
            aria-label={`Play ${title}`}
          >
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M10 8.2v7.6L16.3 12 10 8.2Z" fill="white" />
            </svg>
          </button>
        </>
      )}

      {children}
    </div>
  );
}
