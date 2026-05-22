import Image from "next/image";

export default function Varicoceleabout() {
    return (
        <section className="w-full bg-white py-2 sm:py-12 lg-pt-0 lg:pb-16">
            <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
                {/* Card */}
                <div className="rounded-2xl bg-[#BFDBEA33] p-5  lg:pb-0 pb-10 sm:p-8 lg:p-10 shadow-sm">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        {/* Left Image (4/12) */}
                        <div className="lg:col-span-4">
                            <div className="relative w-full h-[280px] sm:h-[360px] lg:h-[420px] overflow-hidden rounded-xl">
                                <Image
                                    src="/interventional radiologist.png" // <-- apni image public me rakho
                                    alt="Uterine Fibroid Embolization Patient"
                                    fill
                                    className="object-contain object-bottom"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Right Content (8/12) */}
                        <div className="lg:col-span-8">
                            <h4 className="text-[22px] sm:text-[35px] text-[30px] lg:text-[45px]  leading-tight text-slate-900">
                                Radiofrequency  {" "}
                                <span className="text-[#0b4aa2] font-extrabold">ablation</span>
                            </h4>

                            <p className="mt-4 text-[16px] sm:text-[16px] leading-relaxed text-slate-700">
                                A CT-guided procedure where an interventional radiologist precisely locates the osteoid osteoma and uses a special heated probe to destroy it. The procedure can be performed under general or regional anaesthesia. Patients are often able to go home within a couple of hours and return to school or work within a few days making it far less disruptive than open surgery. <br/>
                                For patients also dealing with related vascular or bone conditions, IRCC Pakistan&apos;s{" "}
                                <a
                                    href="/Interventional-Oncology"
                                    className="font-semibold text-[#0b4aa2] underline underline-offset-4"
                                >
                                    Interventional Oncology
                                </a>{" "}
                                team provides comprehensive image-guided care beyond benign bone tumors.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
