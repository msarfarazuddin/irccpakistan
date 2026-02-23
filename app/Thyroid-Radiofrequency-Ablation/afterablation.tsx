import Image from "next/image";

export default function Varicoceleabout() {
    return (
        <section className="w-full bg-white py-2 sm:py-12 lg-pt-0 lg:pb-16">
            <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
                {/* Card */}
                <div className="rounded-2xl bg-[#BFDBEA33] p-5  lg:pb-0 pb-10 sm:p-8 lg:p-10 shadow-sm">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                        {/* Right Content (8/12) */}
                        <div className="lg:col-span-8">
                            <h4 className="text-[22px] sm:text-[35px] text-[30px] lg:text-[45px]  leading-tight text-slate-900">
                                What should I {" "}
                                <span className="text-[#0b4aa2] font-extrabold">expect after ablation?</span>
                            </h4>

                            <p className="mt-4 text-[16px] sm:text-[16px] leading-relaxed text-slate-700">
                                Pain after procedure which wears off quickly. Patients are usually discharged home 30 minutes following the procedure. The thyroid gradually reduces in size over the first month with an expectation that by 1 month following the procedure the treated nodule will reduce in size by 40-60 %. This reduction in volume continues and is maximal 6 months post procedure.
                            </p>

                            <p className="mt-4 text-[16px] sm:text-[16px] leading-relaxed text-slate-700">
                                Some patients with large nodules may benefit from more than one course of treatment to reduce the size of their nodule.
                            </p>
                        </div>


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
                    </div>
                </div>
            </div>
        </section>
    );
}
