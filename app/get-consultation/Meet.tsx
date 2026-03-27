import Image from "next/image";

type Stat = {
  value: string;
  label: string;
  imageSrc: string;
};

const stats: Stat[] = [
  {
    value: "20+",
    label: "Years of Experience",
    imageSrc: "/meetone.png",
  },
  {
    value: "250+k",
    label: "Successful Procedures",
    imageSrc: "/meettwo.png",
  },
  {
    value: "100%",
    label: "Patient Satisfaction",
    imageSrc: "/meetthree.png",
  },
  {
    value: "30+",
    label: "Minimally Invasive Specialties",
    imageSrc: "/meetfour.png",
  },
];

export default function MeetDoctorStatsSection() {
  return (
    <section className="w-full bg-[#2179B5]">
      <div className="mx-auto max-w-[1400px] px-4 py-10 lg:py-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.25fr_1fr]">
          {/* Left content */}
          <div className="max-w-[760px]">
            <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-4xl">
              <span className="text-[#3c3c3c]">Meet</span>{" "}
              <span>Dr. Shahbaz Ahmed Qazi</span>
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-white/90 sm:text-base lg:pr-10">
              We are pleased that you have chosen to explore what we have to offer:
              Minimal Invasive Non-Surgical Interventional Radiology services that are
              provided by European Board Certified Interventional Radiologists, in a safe
              and secure environment.
            </p>
          </div>

          {/* Right stats */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-4 sm:gap-x-10">
            {stats.map((s) => (
              <div key={s.label} className="text-left">
                <div className="mb-4 grid h-12 w-12 place-items-center">
                  <div className="relative h-14 w-14">
                    <Image src={s.imageSrc} alt={s.label} fill className="object-contain" />
                  </div>
                </div>
                <div className="text-3xl lg:text-3xl font-extrabold text-white sm:text-4xl">
                  {s.value}
                </div>
                <div className="mt-1 text-sm tracking-wider text-white/95">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
