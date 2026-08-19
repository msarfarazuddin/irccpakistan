"use client";

import Image from "next/image";
import {
  FiCheckCircle,
  FiGlobe,
  FiMapPin,
  FiStar,
} from "react-icons/fi";

const patientPoints = [
  "UAE Residents (Pakistani & Non-Pakistani)",
  "Overseas Pakistanis Living in UAE",
  "UAE Based Families",
  "International Patients from any Country",
] as const;

const cityCards = [
  {
    title: "Dubai",
    description: "Advanced medical facilities and world-class specialists.",
    image: "/Dubai.jpg",
    badge: "Most Popular",
  },
  {
    title: "Abu Dhabi",
    description: "Excellence in healthcare and patient care.",
    image: "/Abu Dhabi.jpg",
  },
  {
    title: "Sharjah",
    description: "Quality treatment with compassionate support.",
    image: "/Sharjah.jpg",
  },
  {
    title: "Ajman",
    description: "Accessible care with personal attention.",
    image: "/Ajman.jpg",
  },
  {
    title: "Ras Al Khaimah",
    description: "Peaceful recovery in a serene environment.",
    image: "/Ras Al Khaimah.jpg",
  },
] as const;

const [dubaiCard, abuDhabiCard, sharjahCard, ajmanCard, rasAlKhaimahCard] =
  cityCards;

export default function ForPatientsInSection() {
  return (
    <section className="bg-[linear-gradient(180deg,#f8fbfd_0%,#ffffff_100%)] py-14 [font-family:var(--font-neue-montreal),var(--font-geist-sans),Arial,Helvetica,sans-serif] sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-[34px] border border-[#dceaea] bg-white p-3 shadow-[0_20px_60px_rgba(15,71,91,0.05)] sm:p-4 lg:p-5">
          <div className="pointer-events-none absolute left-4 top-4 grid grid-cols-6 gap-2 opacity-25">
            {Array.from({ length: 18 }).map((_, index) => (
              <span
                key={index}
                className="h-1.5 w-1.5 rounded-full bg-[#0e58a8]"
              />
            ))}
          </div>
          <div className="pointer-events-none absolute bottom-4 left-4 grid grid-cols-6 gap-2 opacity-25">
            {Array.from({ length: 18 }).map((_, index) => (
              <span
                key={index}
                className="h-1.5 w-1.5 rounded-full bg-[#0e58a8]"
              />
            ))}
          </div>
          <div className="pointer-events-none absolute right-4 top-4 grid grid-cols-6 gap-2 opacity-25">
            {Array.from({ length: 18 }).map((_, index) => (
              <span
                key={index}
                className="h-1.5 w-1.5 rounded-full bg-[#0e58a8]"
              />
            ))}
          </div>

          <div className="grid gap-4 lg:grid-cols-[330px_minmax(0,1fr)] xl:grid-cols-[350px_minmax(0,1fr)]">
            <aside className="rounded-[28px] border border-[#dbeafe] bg-[linear-gradient(180deg,#f8fbff_0%,#f5f9ff_100%)] p-5 lg:p-5">
              <h2 className="text-[22px] leading-tight text-[#0d1728] sm:text-[28px]">
                For Patients in
              </h2>
              <div className="mt-4 h-1 w-12 rounded-full bg-[#0e58a8]" />

              <div className="mt-5 space-y-3.5">
                {patientPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[#0e58a8]">
                      <FiCheckCircle className="h-5 w-5" />
                    </span>
                    <p className="text-[15px] leading-6 text-[#20354d]">
                      {point}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 h-px w-full bg-[#dbeafe]" />

              <p className="mt-5 text-[15px] leading-7 text-[#425971]">
                IRCC Pakistan welcomes patients from UAE and around the world
                for specialist, minimally invasive treatment.
              </p>

              <div className="mt-5 rounded-[20px] border border-[#dbeafe] bg-white/90 p-4">
                <div className="flex items-start gap-3">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#eff6ff] text-[#0e58a8]">
                    <FiGlobe className="h-6 w-6" />
                  </span>
                  <p className="text-[14px] leading-6 text-[#425971]">
                    Whether you are an Overseas Pakistani living in the UAE or
                    another international resident, IRCC is here to help you
                    access the right treatment in Pakistan.
                  </p>
                </div>
              </div>
            </aside>

            <div className="grid gap-4 lg:grid-cols-[0.86fr_1.74fr] lg:items-stretch">
              <article className="group relative min-h-[300px] overflow-hidden rounded-[24px] border border-[#dbe8e7] bg-[#d8e9eb] lg:min-h-[456px]">
                <Image
                  src={dubaiCard.image}
                  alt={dubaiCard.title}
                  fill
                  className="object-cover object-center transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,86,113,0.04)_0%,rgba(11,27,44,0.08)_42%,rgba(9,20,35,0.4)_100%)]" />

                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-[rgba(14,88,168,0.9)] px-3 py-2 text-sm font-semibold text-white shadow-sm">
                  <FiStar className="h-4 w-4" />
                  <span>{dubaiCard.badge}</span>
                </div>

                <div className="absolute inset-x-3 bottom-3 rounded-[18px] border border-white/70 bg-white/92 p-4 shadow-[0_12px_30px_rgba(15,71,91,0.08)] lg:inset-x-4 lg:max-w-[90%]">
                  <div className="flex items-start gap-2">
                    <FiMapPin className="mt-1 h-5 w-5 shrink-0 text-[#0e58a8]" />
                    <div>
                      <h3 className="text-[17px] leading-6 text-[#0d1728]">
                        {dubaiCard.title}
                      </h3>
                      <p className="mt-1 text-[13px] leading-6 text-[#425971]">
                        {dubaiCard.description}
                      </p>
                    </div>
                  </div>
                </div>
              </article>

              <div className="grid gap-4 lg:grid-cols-6 lg:grid-rows-[250px_300px]">
                {[abuDhabiCard, sharjahCard].map((card, index) => (
                  <article
                    key={card.title}
                    className={`group relative min-h-[240px] overflow-hidden rounded-[24px] border border-[#dbe8e7] bg-[#d8e9eb] lg:col-span-3 lg:row-start-1 ${
                      index === 0 ? "lg:col-start-1" : "lg:col-start-4"
                    }`}
                  >
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover object-center transition duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,86,113,0.04)_0%,rgba(11,27,44,0.08)_42%,rgba(9,20,35,0.4)_100%)]" />

                    <div className="absolute inset-x-3 bottom-3 rounded-[18px] border border-white/70 bg-white/92 p-4 shadow-[0_12px_30px_rgba(15,71,91,0.08)]">
                      <div className="flex items-start gap-2">
                        <FiMapPin className="mt-1 h-5 w-5 shrink-0 text-[#0e58a8]" />
                        <div>
                          <h3 className="text-[17px] leading-6 text-[#0d1728]">
                            {card.title}
                          </h3>
                          <p className="mt-1 text-[13px] leading-6 text-[#425971]">
                            {card.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}

                <article className="group relative min-h-[240px] overflow-hidden rounded-[24px] border border-[#dbe8e7] bg-[#d8e9eb] lg:col-span-2 lg:col-start-1 lg:row-start-2">
                  <Image
                    src={ajmanCard.image}
                    alt={ajmanCard.title}
                    fill
                    className="object-cover object-center transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,86,113,0.04)_0%,rgba(11,27,44,0.08)_42%,rgba(9,20,35,0.4)_100%)]" />

                  <div className="absolute inset-x-3 bottom-3 rounded-[18px] border border-white/70 bg-white/92 p-4 shadow-[0_12px_30px_rgba(15,71,91,0.08)]">
                    <div className="flex items-start gap-2">
                      <FiMapPin className="mt-1 h-5 w-5 shrink-0 text-[#0e58a8]" />
                      <div>
                        <h3 className="text-[17px] leading-6 text-[#0d1728]">
                          {ajmanCard.title}
                        </h3>
                        <p className="mt-1 text-[13px] leading-6 text-[#425971]">
                          {ajmanCard.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>

                <article className="group relative min-h-[240px] overflow-hidden rounded-[24px] border border-[#dbe8e7] bg-[#d8e9eb] lg:col-span-2 lg:col-start-3 lg:row-start-2">
                  <Image
                    src={rasAlKhaimahCard.image}
                    alt={rasAlKhaimahCard.title}
                    fill
                    className="object-cover object-center transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,86,113,0.04)_0%,rgba(11,27,44,0.08)_42%,rgba(9,20,35,0.4)_100%)]" />

                  <div className="absolute inset-x-3 bottom-3 rounded-[18px] border border-white/70 bg-white/92 p-4 shadow-[0_12px_30px_rgba(15,71,91,0.08)]">
                    <div className="flex items-start gap-2">
                      <FiMapPin className="mt-1 h-5 w-5 shrink-0 text-[#0e58a8]" />
                      <div>
                        <h3 className="text-[17px] leading-6 text-[#0d1728]">
                          {rasAlKhaimahCard.title}
                        </h3>
                        <p className="mt-1 text-[13px] leading-6 text-[#425971]">
                          {rasAlKhaimahCard.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>

                <article className="relative min-h-[240px] overflow-hidden rounded-[24px] bg-[linear-gradient(180deg,#0e58a8_0%,#0b4a8d_100%)] p-5 text-white lg:col-span-2 lg:col-start-5 lg:row-start-2">
                  <div className="absolute right-4 top-4 grid grid-cols-5 gap-1.5 opacity-30">
                    {Array.from({ length: 20 }).map((_, index) => (
                      <span
                        key={index}
                        className="h-1.5 w-1.5 rounded-full bg-white"
                      />
                    ))}
                  </div>

                  <div className="flex h-full flex-col justify-end">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/12">
                      <FiMapPin className="h-7 w-7" />
                    </span>
                    <h3 className="mt-5 text-[22px] leading-tight sm:text-[24px]">
                      Other Emirates
                    </h3>
                    <p className="mt-3 max-w-[22ch] text-[15px] leading-7 text-white/86">
                      We assist patients across all Emirates.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
