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
                                How IRCC Pakistan Can Help You With  {" "}
                                <span className="text-[#0b4aa2] font-extrabold">Interventional Radiology in Tenosynovitis Treatment?</span>
                            </h4>

                            <p className="mt-4 text-[16px] sm:text-[16px] leading-relaxed text-slate-700">
                                At IRCC Pakistan, our Interventional Radiology team provides safe, precise, and non-surgical treatment for tenosynovitis using image-guided embolization. The procedure involves minimal discomfort, no surgical cuts, and quick recovery helping you return to normal movement and daily activities as soon as possible. Our team also specializes in the full range of musculoskeletal IR treatments including{" "}
                                <a
                                    href="/Plantar-Fasciitis"
                                    className="font-semibold text-[#0b4aa2] underline underline-offset-4"
                                >
                                    Plantar Fasciitis
                                </a>
                                ,{" "}
                                <a
                                    href="/Radiofrequency-Ablation-of-Osteoid-Osteoma"
                                    className="font-semibold text-[#0b4aa2] underline underline-offset-4"
                                >
                                    Radiofrequency Ablation of Osteoid Osteoma
                                </a>
                                , and{" "}
                                <a
                                    href="/Genicular-Arterial-Embolization-for-Knee-Pain"
                                    className="font-semibold text-[#0b4aa2] underline underline-offset-4"
                                >
                                    Genicular Arterial Embolization
                                </a>
                                , making IRCC Pakistan a comprehensive centre for non-surgical musculoskeletal pain management.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
