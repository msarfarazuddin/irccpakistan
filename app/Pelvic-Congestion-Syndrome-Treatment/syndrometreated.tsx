import Image from "next/image";

export default function UfeInfoSection() {
    return (


        <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
            <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
                {/* Card */}
                <div className="rounded-2xl bg-[#BFDBEA33] p-5  lg:pb-0 pb-10 sm:p-8 lg:p-10 shadow-sm">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        {/* Right Content (8/12) */}
                        <div className="lg:col-span-8">
                            <h4 className="text-[22px] sm:text-[35px] text-[30px] lg:text-[45px]  leading-tight text-slate-900">
                                How is{" "}
                                <span className="text-[#0b4aa2] font-extrabold">pelvic congestion syndrome</span> treated?
                            </h4>

                            <p className="mt-4 text-[16px] sm:text-[16px] leading-relaxed text-slate-700">
                                Ovarian vein embolization is a minimally invasive treatment for pelvic congestion syndrome that is used to close off faulty veins so they can no longer enlarge with blood, thus relieving the pain.
                            </p>

                            <p className="mt-4 text-[16px] sm:text-[16px] leading-relaxed text-slate-700">
                                Pelvic congestion syndrome, also known as ovarian vein reflux, is a painful condition resulting from the presence of varicose veins in the pelvis. The condition is caused by valves in the veins that help return blood to the heart against gravity becoming weakened and not closing properly, allowing blood to flow backwards and pool in the vein causing pressure and bulging veins.
                            </p>

                            <p className="mt-4 text-[16px] sm:text-[16px] leading-relaxed text-slate-700">
                                During this procedure, an interventional radiologist inserts a catheter through the brachial vein into the faulty veins. Catheterization requires only a small nick in the skin for insertion and under image guidance of the catheter to its target area. The catheter delivers embolization coils that clot the blood and seal the faulty vein. The use of the recently developed Sotradecol foam agent allows the interventional radiologist to block even the smallest veins not previously accessible
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
