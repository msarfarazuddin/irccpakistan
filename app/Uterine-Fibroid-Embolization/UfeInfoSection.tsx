import Image from "next/image";

export default function UfeInfoSection() {
  return (
    <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
        {/* Card */}
        <div className="rounded-2xl bg-[#BFDBEA33] p-5  lg:pb-0 pb-10 sm:p-8 lg:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Image (4/12) */}
            <div className="lg:col-span-4">
              <div className="relative w-full h-[280px] sm:h-[360px] lg:h-[420px] overflow-hidden rounded-xl">
                <Image
                  src="/Uterine F.png" // <-- apni image public me rakho
                  alt="Uterine Fibroid Embolization Patient"
                  fill
                  className="object-cover object-bottom"
                  priority
                />
              </div>
            </div>

            {/* Right Content (8/12) */}
            <div className="lg:col-span-8">
              <h4 className="text-[22px] sm:text-[35px] text-[30px] lg:text-[45px]  leading-tight text-slate-900">
                What is{" "}
                <span className="text-[#0b4aa2] font-extrabold">Uterine Fibroid Embolization?</span>
              </h4>

              <p className="mt-4 text-[16px] sm:text-[16px] leading-relaxed text-slate-700">
                Uterine fibroid embolization (UFE) is a minimally invasive
                treatment for uterine fibroids that safely and effectively shrinks
                fibroids by blocking the blood flow to the fibroids. For women
                with mild to severe symptoms, UFE is a possible option in place
                of surgery for the treatment of fibroids.
              </p>

              <p className="mt-4 text-[16px] sm:text-[16px] leading-relaxed text-slate-700">
                UFE does not require general anesthesia. The procedure is performed
                under local anesthesia with the patient conscious, but sedated, and
                feeling no pain. The interventional radiologist makes a tiny nick
                in the skin in the groin (femoral artery) or the wrist (radial
                artery) and using real-time imaging, the physician guides the
                catheter through the artery to the site of the fibroid and then
                releases tiny spheres/particles into the uterine arteries that
                supply blood to the fibroid tumor. This blocks the blood flow to
                the fibroid tumor causing it to shrink and die.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
