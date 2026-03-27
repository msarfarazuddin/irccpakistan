"use client";

import Image from "next/image";

export default function GirlsHeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0B47FF]">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-90">
        <Image
          src="/womenbg.png"
          alt="pattern"
          fill
          className="object-cover object-right"
          priority
        />
      </div>

      {/* subtle vignette */}
      <div className="relative inset-0 bg-gradient-to-b from-[#0B47FF]/40 via-transparent to-[#0B47FF]/50" />

      <div className="relative mx-auto flex max-w-7xl items-end px-4 pt-10 sm:pt-14">
        <div className="relative w-full">
          {/* Center Girls */}
          <div className="relative bottom-0 left-1/2 w-full max-w-[980px] -translate-x-1/2 sm:w-[760px] lg:w-[750px]">

            <h2 className="mb-4 pt-7 text-center text-2xl font-bold tracking-wide text-white md:text-3xl">
              Our expertise in<br></br>
              Female Specialized Care         
            </h2>

            <p className="mx-auto mb-8 max-w-2xl text-center text-sm tracking-wider text-white md:text-base">
              We specialize in advanced interventional radiology for conditions like uterine fibroids, pelvic congestion syndrome, and abnormal placental implantation, offering minimally invasive treatments for faster recovery.
            </p>
            <Image
              src="/Women-Section-Image.png"
              alt="Doctors"
              width={900}
              height={900}
              className="relative z-0 translate-y-10 h-auto w-full object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.25)] sm:translate-y-0"
              priority
            />
            <div className="relative z-20 -mt-8 flex justify-center pb-8 sm:absolute sm:bottom-[28px] sm:left-1/2 sm:mt-0 sm:pb-0 sm:-translate-x-1/2 lg:bottom-[109px]">
              <button
               
                className="rounded-full border-2 border-[#25D9FF] bg-white px-5 py-2 text-sm font-bold tracking-wide text-[#0B47FF] shadow-[-3px_4px_59px_66px_rgb(1_52_243_/_58%)] hover:bg-white/95 sm:px-6 sm:text-[16px]"
              >
                GET FREE CONSULTATION
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
