// components/IRCCSection.tsx

import Image from "next/image";

const IRCCSection = () => {
  return (
    <section className="bg-white px-4 sm:px-6 lg:px-10 lg:pt-35 mt-[-100px] lg:mt-[-100px] md:mt-[-100px] sm:mt-[-100px] md:pt-16 pb-10">
      <div className="mx-auto max-w-7xl flex flex-col lg:flex-row items-center lg:items-center justify-between gap-8 lg:gap-12">
        {/* Image */}
        <div className="w-full lg:w-1/3 pt-30 sm:pt-30 lg:pt-0 md:pt-0 flex justify-center lg:justify-start">
          <div className="w-full max-w-md">
            <Image
              src="/banner (2).png"
              alt="IRCC Team"
              width={700}
              height={560}
              className="w-full h-auto object-contain rounded-lg"
              priority
            />
          </div>
        </div>

        {/* Content */}
        <div className="w-full lg:w-2/3 text-center lg:text-left">
          <h4 className="text-2xl sm:text-3xl lg:text-4xl leading-snug text-black">
            IRCC Pakistan{" "}
            <span className="font-semibold text-[#0E58A8]">
              (Interventional Radiology Clinical Care)
            </span>{" "}
            is a medical company.
          </h4>

          <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-700">
            Pakistan’s first dedicated center for advanced, image-guided,
            minimally invasive procedures founded by Dr. Shahbaz Ahmed Qazi,
            European certified consultant interventional radiologist with over
            30+ years of global experience, IRCC brings world-class care to
            patients in Pakistan.
          </p>

          <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-700">
            IRCC Pakistan is a comprehensive IR center offering outpatient
            image-guided interventions for vascular, oncologic, male's and
            female’s health conditions. From international experience to local
            excellence IRCC was born from decades of expertise and a passion to
            advance patient-focused, minimally invasive care in Pakistan.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IRCCSection;
