"use client";

export default function HeroFixedBgSection() {
  return (
    <section className="w-full px-4 bg-white py-10">
      <div
        className="
          relative mx-auto max-w-6xl overflow-hidden rounded-[28px]
          min-h-[260px] sm:min-h-[320px] lg:min-h-[300px]
          bg-center bg-cover bg-no-repeat bg-scroll lg:bg-fixed
        "
        style={{
          backgroundImage: "url(/Cta.jpg)", // <-- apni image ka path yahan do
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#1e76bd]/60" />

        {/* Content */}
        <div className="relative z-10 flex h-full items-center">
          <div className="max-w-4xl px-6 sm:px-10 py-10">
            <h1 className="text-white font-bold tracking-tight text-3xl sm:text-4xl lg:text-4xl leading-tight">
              Avoid Surgery!{" "}
              <span className="underline decoration-white/70 underline-offset-4">
                Get
              </span>{" "}
              Minimally Invasive, Non-Surgical Care Now!
            </h1>

            <p className="mt-4 text-white/90 text-sm sm:text-base leading-relaxed">
              We work hard to offer affordable, top-notch interventional radiology
              treatment for all patients.
            </p>

            <div className="mt-6">
              <a
                href="#Form"
                className="
                  inline-flex items-center justify-center
                  rounded-full bg-white px-7 py-3
                  text-[#0E58A8] font-semibold
                  shadow-md hover:shadow-lg transition
                "
              >
                Make an Appointment
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
