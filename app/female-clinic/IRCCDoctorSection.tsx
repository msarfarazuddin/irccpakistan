"use client";

import Image from "next/image";

export default function IRCCDoctorSection() {
  return (
    <section className="relative w-full overflow-hidden ">

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4  pt-0 ">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          {/* Left Doctor Image */}
          <div className="order-2 relative lg:order-1">
            <div className="relative mx-auto h-[360px] w-full max-w-[260px] sm:h-[500px] sm:max-w-[340px] lg:mx-0 lg:h-[760px] lg:max-w-[450px]">
              <Image
                src="/doctor.png"
                alt="Doctor"
                fill
                className="object-contain object-bottom"
                priority
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="order-1 pb-0 pt-4 sm:pt-10 lg:order-2 lg:pb-12 lg:pt-24">
            <p className="text-sm tracking-wider text-neutral-700">Welcome to IRCC Pakistan</p>

            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#0B47FF] sm:text-4xl">
              Dr. Shahbaz Ahmed Qazi
            </h2>

            <p className="mt-2 font-medium text-neutral-800">
              European Board Certified Interventional Radiologist
            </p>

            <p className="mt-5 max-w-xl leading-7 text-neutral-700">
              Dr. Shahbaz Ahmed Qazi specializes in comprehensive women’s health
              management, offering minimally invasive procedures to ensure faster
              recovery and reduced discomfort. His approach combines advanced
              techniques with personalized care, prioritizing patient well-being at
              every step.
            </p>

            {/* Stats */}
            <div className="mt-8 grid max-w-xl grid-cols-2 gap-x-6 gap-y-8 sm:mt-10 sm:gap-x-10 sm:gap-y-10">
              <Stat value="3000+" label="Successful Procedures" />
              <Stat value="25+" label="Years of International Experience" />
              <Stat value="99%" label="Success Ratio" />
              <Stat value="5+" label="Clinics in major cities" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-2xl font-extrabold text-[#0B47FF] sm:text-4xl">
        {value}
      </div>
      <div className="mt-1 max-w-[180px] text-[15px] leading-5 text-neutral-700 sm:text-[18px]">{label}</div>
    </div>
  );
}
