import Image from "next/image";




export default function FibroidSymptomsSection() {
    return (
        <section className="bg-white from-gray-100 to-gray-200 py-16 px-4">
            <div className="max-w-[1400px] mx-auto text-center">

                {/* Top Badge */}

                {/* Heading */}
                <h5 className="text-3xl text-black md:text-4xl pt-7 mb-4">

                    <span className="text-[#0E58A8] font-bold">Sclerotherapy</span>
                </h5>

                <p className="text-gray-600 max-w-4xl mx-auto mb-5 text-sm md:text-base">
                    Sclerotherapy is a minimally invasive procedure used for the treatment of spider and reticular veins, which are smaller, dilated and similar to varicose veins. Spider and reticular veins may persist after the endovenous ablation and require additional treatment of sclerotherapy
                </p>
            </div>

            <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
                {/* Card */}
                <div className="rounded-2xl bg-[#BFDBEA33] p-5  lg:pb-0 pb-10 sm:p-8 lg:p-10 shadow-sm">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                        {/* Right Content (8/12) */}
                        <div className="lg:col-span-8">
                            <h4 className="text-[22px] sm:text-[35px] text-[30px] lg:text-[45px]  leading-tight text-slate-900">
                                Who is a Candidate {" "}
                                <span className="text-[#0b4aa2] font-extrabold">for Sclerotherapy?</span>
                            </h4>

                            <p className="mt-4 text-[16px] sm:text-[16px] leading-relaxed text-slate-700">
                                Sclerotherapy can be a highly effective treatment for treating small varicose veins or spider/reticular veins.If you are suffering from smaller varicose veins that are unsightly or causing you to experience uncomfortable symptoms then you may be a candidate for sclerotherapy. Ongoing treatments can be recommended for maintenance. Treatment for varicose veins varies based on the individual, speak with one of our vein specialists about your condition to determine if sclerotherapy is a treatment option for you.
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

                <div className="rounded-2xl bg-[#BFDBEA33] p-5 mt-10 lg:pb-0 pb-10 sm:p-8 lg:p-10 shadow-sm">
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
                                Benefits of {" "}
                                <span className="text-[#0b4aa2] font-extrabold">Sclerotherapy</span>
                            </h4>

                            <p className="mt-4 text-[16px] sm:text-[16px] leading-relaxed text-slate-700">
                                There are many benefits of sclerotherapy. The procedure is minimally invasive, so no general anesthesia is required and the procedure typically takes less than an hour to complete. After the procedure you are able to go home and resume your daily activities. The varicose veins gradually fade away, typically between a few weeks to a few months after the procedure.
                            </p>

                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}
