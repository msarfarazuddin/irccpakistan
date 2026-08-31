"use client";

import Image from "next/image";
import { FiCheckCircle, FiGlobe, FiMapPin, FiStar } from "react-icons/fi";

const patientPoints = [
  "Qatari nationals seeking specialist treatment abroad",
  "Expatriates living and working in Qatar",
  "Overseas Pakistanis living in Qatar",
  "Families travelling with a patient",
  "Other international residents in Qatar seeking an individual treatment assessment",
] as const;

const cityCards = [
  {
    title: "Doha",
    description:
      "Case review and pre-travel coordination for patients from the capital.",
    image: "/Doha one.jpg",
    badge: "Most Popular",
  },
  {
    title: "Al Wakrah",
    description:
      "Remote case review and treatment planning before travel.",
    image: "/Al Wakrah.jpg",
  },
  {
    title: "Al Rayyan",
    description:
      "Specialist guidance and international patient coordination.",
    image: "/Al Rayyan.jpg",
  },
  {
    title: "Al Khor",
    description:
      "Consultation support for patients travelling from northern Qatar.",
    image: "/Al Khor.jpg",
  },
  {
    title: "Lusail",
    description: "Pre-travel planning and appointment coordination.",
    image: "/Lusail.jpg",
  },
  {
    title: "Other Qatar Areas",
    description:
      "Patients from across Qatar can contact IRCC for case-specific guidance.",
    image: "/Other Cities.jpg",
  },
] as const;

const [
  dohaCard,
  alWakrahCard,
  alRayyanCard,
  alKhorCard,
  lusailCard,
  otherCitiesCard,
] = cityCards;

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
                For Patients from Qatar
              </h2>
              <div className="mt-4 h-1 w-12 rounded-full bg-[#0e58a8]" />

              <p className="mt-5 text-[15px] leading-7 text-[#425971]">
                This page is intended for people living in Qatar who are
                considering specialist treatment in Pakistan. You do not need
                to be a Pakistani national to enquire.
              </p>

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

              <div className="mt-5 rounded-[20px] border border-[#dbeafe] bg-white/90 p-4">
                <div className="flex items-start gap-3">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#eff6ff] text-[#0e58a8]">
                    <FiGlobe className="h-6 w-6" />
                  </span>
                  <p className="text-[14px] leading-6 text-[#425971]">
                    Patients from Doha, Al Wakrah, Al Rayyan, Al Khor, Lusail
                    and other Qatar areas can request an individual treatment
                    assessment before travelling.
                  </p>
                </div>
              </div>
            </aside>

            <div className="grid gap-4 lg:h-full lg:grid-cols-[0.86fr_1.74fr] lg:items-stretch">
              <article className="group relative min-h-[300px] overflow-hidden rounded-[24px] border border-[#dbe8e7] bg-[#d8e9eb] lg:min-h-[456px]">
                <Image
                  src={dohaCard.image}
                  alt={dohaCard.title}
                  fill
                  className="object-cover object-center transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,86,113,0.04)_0%,rgba(11,27,44,0.08)_42%,rgba(9,20,35,0.4)_100%)]" />

                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-[rgba(14,88,168,0.9)] px-3 py-2 text-sm font-semibold text-white shadow-sm">
                  <FiStar className="h-4 w-4" />
                  <span>{dohaCard.badge}</span>
                </div>

                <div className="absolute inset-x-3 bottom-3 rounded-[18px] border border-white/70 bg-white/92 p-4 shadow-[0_12px_30px_rgba(15,71,91,0.08)] lg:inset-x-4 lg:max-w-[90%]">
                  <div className="flex items-start gap-2">
                    <FiMapPin className="mt-1 h-5 w-5 shrink-0 text-[#0e58a8]" />
                    <div>
                      <h3 className="text-[17px] leading-6 text-[#0d1728]">
                        {dohaCard.title}
                      </h3>
                      <p className="mt-1 text-[13px] leading-6 text-[#425971]">
                        {dohaCard.description}
                      </p>
                    </div>
                  </div>
                </div>
              </article>

              <div className="grid gap-4 lg:h-full lg:grid-cols-6 lg:grid-rows-[250px_minmax(300px,1fr)]">
                {[alWakrahCard, alRayyanCard].map((card, index) => (
                  <article
                    key={card.title}
                    className={`group relative min-h-[240px] overflow-hidden rounded-[24px] border border-[#dbe8e7] bg-[#d8e9eb] lg:h-full lg:col-span-3 lg:row-start-1 ${
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

                <article className="group relative min-h-[240px] overflow-hidden rounded-[24px] border border-[#dbe8e7] bg-[#d8e9eb] lg:h-full lg:col-span-2 lg:col-start-1 lg:row-start-2">
                  <Image
                    src={alKhorCard.image}
                    alt={alKhorCard.title}
                    fill
                    className="object-cover object-center transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,86,113,0.04)_0%,rgba(11,27,44,0.08)_42%,rgba(9,20,35,0.4)_100%)]" />

                  <div className="absolute inset-x-3 bottom-3 rounded-[18px] border border-white/70 bg-white/92 p-4 shadow-[0_12px_30px_rgba(15,71,91,0.08)]">
                    <div className="flex items-start gap-2">
                      <FiMapPin className="mt-1 h-5 w-5 shrink-0 text-[#0e58a8]" />
                      <div>
                        <h3 className="text-[17px] leading-6 text-[#0d1728]">
                          {alKhorCard.title}
                        </h3>
                        <p className="mt-1 text-[13px] leading-6 text-[#425971]">
                          {alKhorCard.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>

                <article className="group relative min-h-[240px] overflow-hidden rounded-[24px] border border-[#dbe8e7] bg-[#d8e9eb] lg:h-full lg:col-span-2 lg:col-start-3 lg:row-start-2">
                  <Image
                    src={lusailCard.image}
                    alt={lusailCard.title}
                    fill
                    className="object-cover object-center transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,86,113,0.04)_0%,rgba(11,27,44,0.08)_42%,rgba(9,20,35,0.4)_100%)]" />

                  <div className="absolute inset-x-3 bottom-3 rounded-[18px] border border-white/70 bg-white/92 p-4 shadow-[0_12px_30px_rgba(15,71,91,0.08)]">
                    <div className="flex items-start gap-2">
                      <FiMapPin className="mt-1 h-5 w-5 shrink-0 text-[#0e58a8]" />
                      <div>
                        <h3 className="text-[17px] leading-6 text-[#0d1728]">
                          {lusailCard.title}
                        </h3>
                        <p className="mt-1 text-[13px] leading-6 text-[#425971]">
                          {lusailCard.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>

                <article className="relative min-h-[240px] overflow-hidden rounded-[24px] bg-[linear-gradient(180deg,#0e58a8_0%,#0b4a8d_100%)] p-5 text-white lg:h-full lg:col-span-2 lg:col-start-5 lg:row-start-2">
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
                      Other Qatar Areas
                    </h3>
                    <p className="mt-3 text-[15px] leading-7 text-white/86">
                      {otherCitiesCard.description}
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
