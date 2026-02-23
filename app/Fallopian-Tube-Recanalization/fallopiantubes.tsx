import Image from "next/image";

export default function fallopiantubes() {
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
                                What are{" "}
                                <span className="text-[#0b4aa2] font-extrabold">fallopian tubes?</span>
                            </h4>

                            <p className="mt-4 text-[16px] sm:text-[16px] leading-relaxed text-slate-700">
                                The fallopian tubes are important for female fertility. They are the passageways for the eggs to travel from the ovaries to the uterus. During conception:
                            </p>
                            <ul className="text-black">
                                <li>The ovary releases an egg, which travels into the fallopian tube.</li>
                                <li>Sperm travels into the fallopian tubes to fertilize the egg.</li>
                                <li>The resulting embryo is nourished and transported to the uterus where the pregnancy continues.</li>
                            </ul>
                            <p className="mt-4 text-[16px] sm:text-[16px] leading-relaxed text-slate-700">
                                A common cause of female infertility is a blockage of the fallopian tubes, usually as the result of debris that has built up. Occasionally, scarring from surgery or serious infection can lead to a blockage as well.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
