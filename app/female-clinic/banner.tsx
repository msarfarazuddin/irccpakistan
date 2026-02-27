"use client";

import Image from "next/image";
import Link from "next/link";
import FemaleClinicForm from "@/app/female-clinic/form";

const features = [
  { title: "Non-Surgical Treatment", img: "/one-300x300.png" },
  { title: "No Heavy Medications", img: "/two-300x300.png" },
  { title: "Day Care Procedure", img: "/three-100x100.png" },
  { title: "100% Patient Satisfaction", img: "/four-100x100.png" },
];

export default function Banner() {
  return (
    <section id="Form" className="relative z-30 w-full">
      <div className="absolute inset-0 z-0">
        <Image
          src="/female clininc.png"
          alt="Background"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="relative z-20 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2">
       <Link href="/">   <Image
            src="/logo.png"
            alt="IRCC Pakistan"
            width={200}
            height={60}
            className="h-11 w-auto sm:h-14"
          /></Link>
          <a
            href="tel:03340005020"
            className="flex items-center gap-2 font-semibold text-[#0B47FF]"
          >
            <span className="text-base sm:text-2xl">0334 000 5020</span>
          </a>
        </div>
      </div>

      <div className="relative z-20 mx-auto flex max-w-6xl flex-col items-center px-4 pb-24 pt-12 text-center text-white sm:pt-16 sm:pb-32 lg:pt-20 lg:pb-40">
        <h1 className="text-3xl font-extrabold tracking-wider sm:text-5xl">Pakistan&apos;s first</h1>

        <p className="mt-4 text-xl tracking-wider sm:text-4xl lg:text-[45px]">
          Female Interventional <br />
          Radiology Clinic
        </p>

        <div className="mt-8 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-10">
          {features.map((item) => (
            <div key={item.title} className="text-center">
              <div className="relative mx-auto mb-3 h-16 w-16 sm:h-20 sm:w-20">
                <Image src={item.img} alt={item.title} fill className="object-cover" />
              </div>
              <p className="text-sm leading-tight tracking-wide sm:text-[18px]">{item.title}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 w-full sm:mt-16">
          <h3 className="text-xl font-bold tracking-wider sm:text-3xl lg:text-3xl">Book Your Free Consultation Today</h3>
          <div className="mt-8">
            <FemaleClinicForm />
          </div>
        </div>
      </div>
    </section>
  );
}
