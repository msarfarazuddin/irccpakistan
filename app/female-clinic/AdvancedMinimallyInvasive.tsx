"use client";

import Image from "next/image";

type Item = {
  title: string;
  desc: string;
  img: string;
};

const treatments: Item[] = [
  {
    title: "Adenomyosis",
    desc: "A condition where the endometrial tissue grows into the uterine wall, causing pain and heavy periods.",
    img: "/Adenomyosis.png",
  },
  {
    title: "Tumor-related\nhemorrhage",
    desc: "A condition where the endometrial tissue grows into the uterine wall, causing pain and heavy periods.",
    img: "/hemorrhage.png",
  },
  {
    title: "Postpartum\nhemorrhage",
    desc: "Excessive bleeding after childbirth, requiring urgent medical attention.",
    img: "/Postpartum.png",
  },
  {
    title: "Pelvic abscess/collection drainage",
    desc: "A condition where the endometrial tissue grows into the uterine wall, causing pain and heavy periods.",
    img: "/Pelvic abscess.png",
  },
  {
    title: "Fallopian tube embolization",
    desc: "A condition where the endometrial tissue grows into the uterine wall, causing pain and heavy periods.",
    img: "/Fallopian.png",
  },
  {
    title: "Vulvar varicose veins",
    desc: "Excessive bleeding after childbirth, requiring urgent medical attention.",
    img: "/Vulvar.png",
  },
];

export default function AdvancedMinimallyInvasiveSection() {
  return (
    <section className="w-full bg-white">
      <div className="relative z-10 mx-auto mt-[-24px] max-w-6xl rounded-2xl bg-[#efefef] px-4 py-10 shadow-md sm:mt-[-40px] sm:px-6 sm:py-14 lg:-mt-20 lg:px-10 lg:py-16">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-2xl font-extrabold tracking-wider sm:text-5xl lg:text-[35px]">
            <span className="text-[#0135F8]">Advanced Minimally</span>
            <br />
            <span className="text-black">Invasive Treatment</span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm tracking-wider text-neutral-700 sm:text-base">
            Advanced minimally invasive treatments provide effective solutions with smaller
            incisions, faster recovery, and less discomfort, ensuring better outcomes with
            minimal disruption.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mt-10 grid gap-10 sm:mt-14 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3">
          {treatments.map((item) => (
            <div key={item.title} className="flex flex-col items-center justify-evenly text-center sm:items-start sm:text-left">
              {/* Image box */}
              <div className="relative h-[150px] w-[150px] overflow-hidden sm:h-[170px] sm:w-[170px] lg:h-[190px] lg:w-[190px]">
                <Image src={item.img} alt={item.title} fill className="object-cover" />
              </div>

              {/* Title */}
              <h3 className="mt-4 whitespace-pre-line text-xl font-extrabold leading-tight text-[#0B47FF]">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-3 max-w-sm text-base leading-[1.5] text-[#131313] sm:text-[18px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
