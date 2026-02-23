// components/MissionVisionSection.tsx

import Image from "next/image";

export default function MissionVisionSection() {
  return (
    <section className="relative bg-white px-4 sm:px-6 lg:px-10 py-12">
      {/* Bottom soft glow */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#E9F4FF] to-transparent" />

      <div className="relative mx-auto max-w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
        {/* Mission Card */}
        <div className="rounded-2xl bg-white border border-[#EEF4FB] shadow-[0_10px_30px_rgba(2,40,80,0.10)] p-6 sm:p-8">
          {/* Icon */}
          <div className="mb-6">
            <div className="h-12 w-12 rounded-full border border-[#CFE4FF] flex items-center justify-center">
              <Image
                src="/Vector.png"
                alt="Mission icon"
                width={22}
                height={22}
                className="object-contain"
              />
            </div>
          </div>

          <h3 className="text-2xl sm:text-3xl font-semibold text-[#0E58A8]">
            Mission
          </h3>

          <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-700">
            At IRCC Pakistan, our mission is simple to replace major surgeries
            with safe, scar-free and painless image-guided treatments. Our expert
            team of radiologists, technologists, and nurses work side-by-side to
            deliver compassionate care using the most advanced imaging and
            interventional technologies.
          </p>
        </div>

        {/* Vision Card */}
        <div className="rounded-2xl bg-white border border-[#EEF4FB] shadow-[0_10px_30px_rgba(2,40,80,0.10)] p-8 sm:p-8">
          {/* Icon */}
          <div className="mb-6">
            <div className="h-12 w-12 rounded-full border border-[#CFE4FF] flex items-center justify-center">
              <Image
                src="/Frame (1).png"
                alt="Vision icon"
                width={22}
                height={22}
                className="object-contain"
              />
            </div>
          </div>

          <h3 className="text-2xl sm:text-3xl font-semibold text-[#0E58A8]">
            Vision
          </h3>

          <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-700">
            To be Pakistan’s leading center of excellence in interventional
            radiology, recognized globally for clinical quality, advanced
            technology, and continuous medical education.
          </p>
        </div>
      </div>
    </section>
  );
}
