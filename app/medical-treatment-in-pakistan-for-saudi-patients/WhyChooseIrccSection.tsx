"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FiCheckCircle,
  FiCrosshair,
  FiHeart,
  FiMapPin,
} from "react-icons/fi";
import { PiHeartbeatLight } from "react-icons/pi";
import { TbRosetteDiscountCheck } from "react-icons/tb";

const focusPoints = [
  "Interventional Radiology-focused care",
  "Image-guided minimally invasive procedures",
  "Case review before travel",
  "Treatment options across multiple conditions",
  "Treatment locations in Karachi, Lahore and Islamabad",
  "Direct consultation and treatment planning",
] as const;

const stats = [
  {
    value: "15+",
    label: "Years of Experience",
    icon: TbRosetteDiscountCheck,
  },
  {
    value: "Thousands",
    label: "Successful Procedures",
    icon: FiHeart,
  },
  {
    value: "Minimally Invasive",
    label: "Image-Guided Treatment",
    icon: FiCrosshair,
  },
  {
    value: "3 Major Cities",
    label: "Karachi, Lahore & Islamabad",
    icon: FiMapPin,
  },
] as const;

export default function WhyChooseIrccSection() {
  return (
    <section className="bg-[linear-gradient(180deg,#ffffff_0%,#f8fbfd_100%)] py-14 [font-family:var(--font-neue-montreal),var(--font-geist-sans),Arial,Helvetica,sans-serif] sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-10">
        <div className="overflow-hidden rounded-[34px] border border-[#dceae9] bg-white p-4 shadow-[0_24px_70px_rgba(15,71,91,0.06)] sm:p-5 lg:p-6">
          <div className="grid gap-5 xl:grid-cols-[390px_minmax(0,1fr)] xl:items-start">
            <div className="rounded-[28px] border border-[#dbeafe] bg-[linear-gradient(180deg,#ffffff_0%,#f5f9ff_100%)] p-4 shadow-[0_18px_50px_rgba(15,71,91,0.05)]">
              <div className="relative overflow-hidden rounded-[24px] bg-[linear-gradient(180deg,#f4fbfc_0%,#eaf5f7_100%)]">
                <div className="absolute left-5 top-5 grid grid-cols-5 gap-2 opacity-35">
                  {Array.from({ length: 20 }).map((_, index) => (
                    <span
                      key={index}
                      className="h-1.5 w-1.5 rounded-full bg-[#6ea9ab]"
                    />
                  ))}
                </div>
                <div className="absolute right-8 top-10 h-16 w-16 rounded-[18px] bg-[#dfecee] opacity-75 sm:h-18 sm:w-18" />
                <div className="absolute bottom-0 left-0 h-36 w-36 rounded-tr-full bg-[#e4f3f6]" />

                <Image
                  src="/drshbaz.png"
                  alt="Dr. Shahbaz Ahmed Qazi"
                  width={520}
                  height={620}
                  className="relative z-10 mx-auto h-[420px] w-full object-contain pt-4"
                />

                <div className="absolute bottom-4 right-4 z-20 flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-[linear-gradient(180deg,#0e58a8_0%,#0b4a8d_100%)] text-white shadow-[0_18px_35px_rgba(14,88,168,0.22)]">
                  <PiHeartbeatLight className="h-8 w-8" />
                </div>
              </div>

              <div className="mt-4">
                <h3 className="text-[22px] leading-tight text-[#0d1728]">
                  Dr. Shahbaz Ahmed Qazi
                </h3>
                <p className="mt-1.5 text-[16px] text-[#0e58a8]">
                  Interventional Radiologist at IRCC Pakistan
                </p>
                <div className="mt-3 h-px w-full bg-[#e2eceb]" />
                <p className="mt-3 text-[15px] leading-7 text-[#354d67]">
                  For international patients, the first step is to share
                  relevant medical information so the appropriate treatment
                  pathway can be discussed.
                </p>

                <Link
                  href="/About"
                  className="mt-4 inline-flex rounded-[18px] border border-[#bfdbfe] bg-white px-5 py-3 text-sm font-semibold text-[#0e58a8] transition hover:bg-[#f5f9ff]"
                >
                  Learn More About IRCC
                </Link>
              </div>
            </div>

            <div className="pt-1">
              <div className="flex items-center gap-3 text-[#0e58a8]">
                <FiHeart className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-[0.22em]">
                  Specialist Interventional Radiology Care
                </span>
              </div>

              <h2 className="mt-4 text-[30px] leading-tight text-[#0d1728] sm:text-5xl lg:text-[54px]">
                Why Choose <span className="text-[#0e58a8]">IRCC Pakistan?</span>
              </h2>

              <p className="mt-4 max-w-4xl text-[16px] leading-7 text-[#4a617a]">
                IRCC Pakistan focuses on image-guided, minimally invasive
                treatment. Patients from Saudi Arabia can begin with a case
                review before travelling, helping the clinical team understand
                the condition and determine the appropriate next step.
              </p>

              <div className="mt-6 divide-y divide-dashed divide-[#dbeafe] rounded-[26px] border border-[#dbeafe] bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)]">
                {focusPoints.map((point) => (
                  <div
                    key={point}
                    className="flex items-center gap-4 px-5 py-4 sm:px-6"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[#0e58a8]">
                      <FiCheckCircle className="h-6 w-6" />
                    </span>
                    <p className="text-[17px] leading-7 text-[#0d1728]">
                      {point}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 grid grid-cols-2 gap-4 xl:grid-cols-4">
                {stats.map((item) => {
                  const Icon = item.icon;

                  return (
                    <article
                      key={item.label}
                      className="rounded-[24px] border border-[#e3eceb] bg-white p-4 text-center shadow-[0_16px_40px_rgba(15,71,91,0.04)]"
                    >
                      <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#eff6ff] text-[#0e58a8]">
                        <Icon className="h-8 w-8" />
                      </span>
                      <h3 className="mt-4 text-[18px] leading-7 text-[#0e58a8]">
                        {item.value}
                      </h3>
                      <div className="mx-auto mt-3 h-0.5 w-12 rounded-full bg-[#93c5fd]" />
                      <p className="mt-3 text-[15px] leading-7 text-[#354d67]">
                        {item.label}
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
