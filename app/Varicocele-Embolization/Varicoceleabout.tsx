import Image from "next/image";

export default function Varicoceleabout() {
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
                                    src="/men.png" // <-- apni image public me rakho
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
                                What Causes {" "}
                                <span className="text-[#0b4aa2] font-extrabold">a Varicocele?</span>
                            </h4>

                            <p className="mt-4 text-[16px] sm:text-[16px] leading-relaxed text-slate-700">
                                Varicoceles are caused when the one-way valves in the scrotal veins, which allow blood to flow from the testicles and scrotum back to the heart, become dysfunctional or fail. This causes the blood to pool and the veins around the testicle enlarge to form a varicocele.
                            </p>

                            <p className="mt-4 text-[16px] sm:text-[16px] leading-relaxed text-slate-700">
                                If the varicocele causes testicular pain or infertility, there are options available, including minimally invasive treatments. When considering varicocele treatment, make sure to weigh the risks and benefits of each treatment option.
                            </p>

                            <p className="mt-4 text-[16px] sm:text-[16px] leading-relaxed text-slate-700">
                                Varicocele embolization is a highly effective, minimally invasive alternative to surgery, performed by an interventional radiologist in an outpatient setting. Varicocele embolization requires only a small nick in the skin that does not need to be stitched and offers a quicker recovery.                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
