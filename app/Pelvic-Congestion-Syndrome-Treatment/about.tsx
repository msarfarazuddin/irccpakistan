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
                                What causes pelvic{" "}
                                <span className="text-[#0b4aa2] font-extrabold">congestion syndrome?</span>
                            </h4>

                            <p className="mt-4 text-[16px] sm:text-[16px] leading-relaxed text-slate-700">
                                Healthcare providers are trying to understand the possible causes of pelvic congestion syndrome. Enlarged veins in the pelvis seem to play a major role. But many women have enlarged veins and no symptoms. Pregnancy may increase the risk for pelvic congestion syndrome. This is because veins enlarge during pregnancy to support the increased blood flow. This can permanently enlarge the veins and lead to symptoms.
                            </p>

                            <p className="mt-4 text-[16px] sm:text-[16px] leading-relaxed text-slate-700">
                                Hormones may also play a role in pelvic congestion syndrome. Estrogen makes veins wider (dilates). This may be why the condition is not common after menopause. Estrogen levels are lower after menopause. Other hormones may also cause veins to grow wider and cause symptoms.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
