"use client";

import Image from "next/image";

type CardProps = {
  titlePrefix: string;
  titleAccent: string;
  desc: string;
  items: string[];
  imageSrc: string;
  imageAlt: string;
  imageSide: "left" | "right";
};

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex h-6 w-6 items-center justify-center ${className}`} aria-hidden="true">
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          d="M50 4 C58 11 69 14 84 17 V52 C84 74 69 90 50 96 C31 90 16 74 16 52 V17 C31 14 42 11 50 4 Z"
          fill="#CFE6FF"
        />
        <path
          d="M50 14 C56 19 64 21 75 23 V52 C75 67 64 78 50 84 C36 78 25 67 25 52 V23 C36 21 44 19 50 14 Z"
          fill="#0E58A8"
        />
        <path
          d="M33 52 L44 63 L68 39"
          stroke="white"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function ServiceCard({
  titlePrefix,
  titleAccent,
  desc,
  items,
  imageSrc,
  imageAlt,
  imageSide,
}: CardProps) {
  const isLeft = imageSide === "left";

  return (
    <div className="relative overflow-hidden rounded-2xl bg-white p-6 pb-0 lg:pb-0 pr-0 pl-0 shadow-xl ring-1 ring-black/5 sm:p-7">
      {/* gap kam + text padding dynamic */}
      <div className="grid grid-cols-1 gap-3 md:grid-cols-12 md:items-center md:gap-2">
        {/* Image */}
        <div className={["md:col-span-5", isLeft ? "md:order-1" : "md:order-2"].join(" ")}>
          <div className="relative mx-auto h-[300px] w-full max-w-full md:mx-0 md:h-[350px] md:max-w-none">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              priority
              className={[
                "object-contain object-bottom",
                isLeft ? "object-left" : "object-right",
              ].join(" ")}
            />
          </div>
        </div>

        {/* Text */}
        <div
          className={[
            "md:col-span-7 pb-10 contpadding  ",
            // text ko image ke qareeb lane ke liye:
            // male (image left) => text left padding kam, right padding zyada
            // female (image right) => text right padding kam, left padding zyada
            isLeft ? " pr-6  " : "md:pr-2",
            isLeft ? "md:order-2" : "md:order-1",
          ].join(" ")}
        >
          <h4 className="text-3xl lg:text-3xl tracking-tight text-[#111111] sm:text-[28px]">
            {titlePrefix} <span className="font-semibold text-[#0E58A8]">{titleAccent}</span>
          </h4>

          <p className="mt-1 max-w-xl text-sm leading-6 text-[#111111] sm:text-[15px]">
            {desc}
          </p>

          <ul className="mt-5 space-y-2">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckIcon className="mt-[2px]" />
                <span className="text-sm font-medium text-[#111111] sm:text-[15px]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function RelatedServicesSection() {
  return (
    <section className="relative w-full">
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFFFFF] via-[#E6F6FE] to-[#E6F6FE]" />
      <div className="relative mx-auto w-full max-w-full px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Female: image RIGHT */}
          <ServiceCard
            titlePrefix="Female-Related"
            titleAccent="Services"
            desc="Experience advanced, minimally invasive treatments designed specifically for women’s health — from managing uterine fibroids and infertility to treating pelvic congestion with precision and care."
            items={[
              "Uterine Artery Embolisation",
              "Fallopian Tube Recanalisation",
              "Pelvic Congestion Syndrome",
              "Abnormal Placental Implantation",
            ]}
            imageSrc="/female.png"
            imageAlt="Female doctor"
            imageSide="right"
          />

          {/* Male: image LEFT */}
          <ServiceCard
            titlePrefix="Male-Related"
            titleAccent="Services"
            desc="Experience advanced, minimally invasive treatments designed for men’s health — from managing varicocele and prostate symptoms to treating varicose veins with precision and care."
            items={[
              "Varicocele Embolisation",
              "Prostate Artery Embolisation",
              "Varicose Vein Ablation",
            ]}
            imageSrc="/male.png"
            imageAlt="Male doctor"
            imageSide="left"
          />
        </div>
      </div>
    </section>
  );
}
