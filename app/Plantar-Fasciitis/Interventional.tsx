export default function UfeInfoSection() {
    return (


        <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
            <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
                {/* Card */}
                <div className="rounded-2xl bg-[#BFDBEA33] p-5 pb-10 sm:p-8 lg:p-10 shadow-sm">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                        {/* Right Content (8/12) */}
                        <div className="lg:col-span-12">
                            <h4 className="text-[22px] sm:text-[35px] text-[30px] lg:text-[45px]  leading-tight text-slate-900">
                                How IRCC Pakistan Can Help You With   {" "}
                                <span className="text-[#0b4aa2] font-extrabold">Interventional Radiology ?</span>
                            </h4>

                            <p className="mt-4 text-[16px] sm:text-[16px] leading-relaxed text-slate-700">
                                At IRCC Pakistan, our Interventional Radiology team provides safe, precise, and non-surgical treatment for plantar fasciitis using image-guided embolization. The procedure involves minimal discomfort, no surgical cuts, and a quick recovery helping you return to normal walking and daily activities as soon as possible. As a centre offering the full range of musculoskeletal and vascular interventional treatments, including{" "}
                                <a
                                    href="/Genicular-Arterial-Embolization-for-Knee-Pain"
                                    className="font-semibold text-[#0b4aa2] underline underline-offset-4"
                                >
                                    Genicular Arterial Embolization
                                </a>
                                ,{" "}
                                <a
                                    href="/Tenosynovitis"
                                    className="font-semibold text-[#0b4aa2] underline underline-offset-4"
                                >
                                    Tenosynovitis treatment
                                </a>
                                , and{" "}
                                <a
                                    href="/Peripheral-Vascular-Disease"
                                    className="font-semibold text-[#0b4aa2] underline underline-offset-4"
                                >
                                    Peripheral Vascular Disease management
                                </a>
                                , IRCC Pakistan is equipped to address chronic pain conditions comprehensively.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
