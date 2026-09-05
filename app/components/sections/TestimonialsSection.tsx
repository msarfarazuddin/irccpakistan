"use client";

import Image from "next/image";
import { useRef } from "react";

type Testimonial = {
  id: string;
  name: string;
  location: string;
  rating: number;
  quote: string;
  poster: string;
};

const data: Testimonial[] = [
  {
    id: "1",
    name: "Ayesha Malik",
    location: "Peshawar",
    rating: 5,
    poster: "/Ayesha.jpg",
    quote:
      "I was facing severe fibroid symptoms that were affecting my daily life. After undergoing Uterine Fibroid Embolization, my condition improved remarkably without surgery. The procedure was comfortable, and recovery was very quick. I truly appreciate the care and professionalism of the medical team.",
  },
  {
    id: "2",
    name: "Ahmed Raza",
    location: "Islamabad",
    rating: 5,
    poster: "/Ahmed.jpg",
    quote:
      "I had been dealing with discomfort due to varicocele for a long time. The embolization procedure was simple and minimally invasive, and I experienced relief within a short period. The doctors explained everything clearly and made the entire process stress-free. Highly satisfied with the results.",
  },
  {
    id: "3",
    name: "Sana Khan",
    location: "Islamabad",
    rating: 5,
    poster: "/Sana.jpg",
    quote:
      "I was worried about thyroid treatment options until I learned about Radiofrequency Ablation. The procedure was safe, painless, and required no surgery. My symptoms improved significantly, and recovery was smooth. I highly recommend this treatment and the medical team.",
  },
  {
    id: "4",
    name: "Muhammad Usman",
    location: "Islamabad",
    rating: 5,
    poster: "/Usman.jpg",
    quote:
      "My leg pain and visible veins were getting worse, but Varicose Vein Ablation completely changed my condition. The treatment was quick, and I was able to walk normally the same day. Excellent experience and very professional medical care.",
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 text-[#FBBF24]">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill={i < rating ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.6"
        >
          <path d="M12 2l3 7 7 .6-5.3 4.5 1.8 6.9L12 17.8 5.5 21 7.3 14.1 2 9.6 9 9z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "prev" | "next") => {
    const el = scrollerRef.current;
    if (!el) return;

    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = (card?.offsetWidth ?? 320) + 24;
    el.scrollBy({ left: dir === "next" ? step : -step, behavior: "smooth" });
  };

  return (
    <section className="bg-white pt-0 lg:pt-0 py-16 ">
      <div className="mx-auto max-w-full px-4">
        <div className="text-center">
          <div className="inline-flex w-fit items-center gap-2 rounded-full shadow-lg border border-[#dce6ff] bg-white px-4 py-2 text-sm font-semibold text-[#0E58A8]">
            <span className="flex h-6 w-6 items-center justify-center rounded-full text-[28px] font-bold text-[#0E58A8]">
              +
            </span>
            <span className="text-[#111111] font-normal">What People Says</span>
          </div>

          <h4 className="mt-4 text-3xl lg:text-4xl text-[#0B1220]">
            Patient <span className="font-semibold text-[#0E58A8]">Testimonials</span>
          </h4>
        </div>

        <div
          ref={scrollerRef}
          className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {data.map((t) => (
            <article
              key={t.id}
              data-card
              className="relative h-[500px] w-full flex-none snap-start overflow-hidden rounded-2xl bg-[#0E58A8] shadow-lg sm:w-[calc(50%-12px)] lg:w-[calc(29.333%-16px)]"
            >
              <Image
                src={t.poster}
                alt={t.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

              <div className="absolute bottom-0 p-6 text-white">
                <p className="text-sm leading-6 text-white/90 overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:6] [-webkit-box-orient:vertical]">
                  {t.quote}
                </p>

                <div className="mt-5">
                  <div className="text-lg font-semibold">{t.name}</div>
                  <div className="mt-1 text-xs text-white/70">{t.location}</div>
                  <div className="mt-3">
                    <Stars rating={t.rating} />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <button
            type="button"
            onClick={() => scroll("prev")}
            className="grid h-10 w-10 place-items-center shadow-lg rounded-full border border-[#E6EAF2] bg-white text-[#0E58A8] transition hover:bg-[#F5F7FB]"
            aria-label="Previous"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <button
            type="button"
            onClick={() => scroll("next")}
            className="grid h-10 w-10 place-items-center shadow-lg rounded-full border border-[#E6EAF2] bg-white text-[#0E58A8] transition hover:bg-[#F5F7FB]"
            aria-label="Next"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
