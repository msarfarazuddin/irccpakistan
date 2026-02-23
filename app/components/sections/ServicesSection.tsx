"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type ServiceCard = {
  title: string;
  desc: string;
  image: string;
  href: string;
};

export default function ServicesSection() {
  const services = useMemo<ServiceCard[]>(() => [
    {
      title: "Varicose Vein Ablations",
      desc: "Laser and RFA ablations can help you get rid of varicose veins without surgery...",
      image: "/Uterine Fibroid Embolization.png",
      href: "/Varicose-Vein-Ablation",
    },
    {
      title: "Fallopian Tube Recanalization",
      desc: "Non surgical treatment for infertility caused by tubal blockage.",
      image: "/Fallopian Tube Recanalization.png",
      href: "/Fallopian-Tube-Recanalization",
    },
    {
      title: "Dialysis Access Services",
      desc: "Maintain, preserve and restore your fistula by angioplasty and thrombectomy.",
      image: "/Dialysis Access Services.png",
      href: "/Dialysis-Access-Care-and-Management",
    },
    {
      title: "Avoid Varicocele Surgery",
      desc: "Non surgical varicocele embolization treatment for pain swelling and infertility...",
      image: "/Avoid Varicocele Surgery.png",
      href: "/Varicocele-Embolization",
    },
    {
      title: "UFE (Fibroids) Treatment",
      desc: "Minimally invasive embolization option for uterine fibroids with fast recovery.",
      image: "/Prostate Artery Embolization.png",
      href: "/Uterine-Fibroid-Embolization",
    },
    {
      title: "Thyroid RFA",
      desc: "Image-guided thyroid RFA for select nodules with minimal downtime.",
      image: "/Uterine Fibroid Embolization.png",
      href: "/Thyroid-Radiofrequency-Ablation",
    },
  ], []);

  const cardClass = "w-[85vw] sm:w-[360px] lg:w-[300px] flex-none";
  const gapPx = 24; // gap-6 = 24px
  const [index, setIndex] = useState<number>(0);

  const totalCards = services.length;
  const visibleLg = 4;

  // Loop functionality
  const prev = () => {
    setIndex((i) => (i === 0 ? totalCards - 1 : i - 1));
  };

  const next = () => {
    setIndex((i) => (i === totalCards - 1 ? 0 : i + 1));
  };

  return (
    <section className="w-full bg-white pb-10">
      <div className="mx-auto max-w-full">
        {/* Header */}
        <div className="flex items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">
          <h4 className="text-3xl lg:text-4xl text-[#1d2a50] sm:text-4xl">
            General <span className="font-extrabold text-[#0E58A8]">Services</span>
          </h4>

          <div className="flex items-center gap-2 ">
            <button
              type="button"
              onClick={prev}
              className="shadow-xl inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#d2d7e4] bg-white text-[#0E58A8] shadow-sm transition hover:border-[#0E58A8]"
              aria-label="Previous"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <button
              type="button"
              onClick={next}
              className="shadow-xl inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#d2d7e4] bg-white text-[#0E58A8] shadow-sm transition hover:border-[#0E58A8]"
              aria-label="Next"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="relative mt-6">
          <div className="overflow-hidden">
            <div
              className="flex gap-6 pb-10 transition-transform duration-500 ease-out will-change-transform"
              style={{
                transform: `translateX(calc(-1 * ${index} * (clamp(300px, 85vw, 360px) + ${gapPx}px)))`,
              }}
            >
              {/* Duplicate the first few items to simulate looping */}
              {services.concat(services).map((s, i) => (
                <div
                  key={`${s.title}-${i}`}
                  className={`${cardClass} rounded-2xl border border-[#E6F6FE] bg-white shadow-xl`}
                >
                  <div className="p-3">
                    {/* Image */}
                    <div className="relative overflow-hidden rounded-xl bg-[#eef3ff]">
                      <div className="relative h-36 w-full sm:h-40">
                        <Image src={s.image} alt={s.title} fill className="object-cover" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="mt-4 text-center text-[16px] font-extrabold text-[#111111]">
                      {s.title}
                    </h3>

                    {/* Desc */}
                    <p className="mx-auto mt-2 line-clamp-2 max-w-full text-center text-[14px] leading-5 text-[#111111]/70">
                      {s.desc}
                    </p>

                    {/* Button */}
                    <div className="mt-4 flex justify-center">
                      <a
                        href={s.href}
                        className="inline-flex items-center gap-2 rounded-full bg-[#0E58A8] px-4 py-1 text-[14px] font-semibold text-white transition hover:bg-[#0E58A8]"
                      >
                        Know More
                        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2}>
                          <path d="M5 12h14" />
                          <path d="M12 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
              <div className="w-10 flex-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
