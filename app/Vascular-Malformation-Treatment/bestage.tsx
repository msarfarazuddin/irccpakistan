import Link from "next/link";

export default function Varicoceleabout() {
    return (
        <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
            <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
                {/* Card */}
                <div className="rounded-2xl bg-[#BFDBEA33] p-5   pb-10 sm:p-8 lg:p-10 shadow-sm">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                        {/* Right Content (8/12) */}
                        <div className="lg:col-span-12">
                            <h4 className="text-[22px] sm:text-[35px] text-[30px] lg:text-[45px]  leading-tight text-slate-900">
                                What is the Best Age  {" "}
                                <span className="text-[#0b4aa2] font-extrabold">for Treatment?</span>
                            </h4>

                            <p className="mt-4 text-[16px] sm:text-[16px] leading-relaxed text-slate-700">
                                IRCC Pakistan treats patients of all ages from newborns to adults. The optimal timing of treatment depends on the specific type of malformation, its symptoms, and the individual patient&apos;s needs. Our specialists will tailor a treatment plan specific to your case.
                            </p >

                            <h5 className="mt-8 text-[22px] font-semibold leading-tight text-slate-900 sm:text-[28px]">
                                Related <span className="text-[#0b4aa2]">Treatments at IRCC Pakistan</span>
                            </h5>

                            <p className="mt-4 text-[16px] leading-relaxed text-slate-700">
                                Depending on your vascular condition, you may also benefit from:
                            </p>

                            <ul className="mt-5 space-y-3 text-[16px] leading-relaxed text-slate-700">
                                <li>
                                    <Link
                                        href="/Peripheral-Vascular-Disease"
                                        className="font-semibold text-[#0E58A8] underline underline-offset-4 transition hover:text-[#0B3F78]"
                                    >
                                        Peripheral Vascular Disease Treatment
                                    </Link>{" "}
                                    - for arterial and venous circulatory problems
                                </li>
                                <li>
                                    <Link
                                        href="/Varicose-Vein-Ablation"
                                        className="font-semibold text-[#0E58A8] underline underline-offset-4 transition hover:text-[#0B3F78]"
                                    >
                                        Varicose Vein Ablation
                                    </Link>{" "}
                                    - minimally invasive treatment for abnormal superficial veins
                                </li>
                                <li>
                                    <Link
                                        href="/Varicocele-Embolization"
                                        className="font-semibold text-[#0E58A8] underline underline-offset-4 transition hover:text-[#0B3F78]"
                                    >
                                        Varicocele Embolization
                                    </Link>{" "}
                                    - for abnormal venous dilation in the male reproductive system
                                </li>
                                <li>
                                    <Link
                                        href="/Pelvic-Congestion-Syndrome-Treatment"
                                        className="font-semibold text-[#0E58A8] underline underline-offset-4 transition hover:text-[#0B3F78]"
                                    >
                                        Pelvic Congestion Syndrome Treatment
                                    </Link>{" "}
                                    - for abnormal pelvic venous flow causing chronic pain
                                </li>
                                <li>
                                    <Link
                                        href="/Transjugular-Intrahepatic-Portosystemic-Shunt"
                                        className="font-semibold text-[#0E58A8] underline underline-offset-4 transition hover:text-[#0B3F78]"
                                    >
                                        Transjugular Intrahepatic Portosystemic Shunt (TIPS)
                                    </Link>{" "}
                                    - for portal vein pressure management
                                </li>
                                <li>
                                    <Link
                                        href="/Interventional-Oncology"
                                        className="font-semibold text-[#0E58A8] underline underline-offset-4 transition hover:text-[#0B3F78]"
                                    >
                                        Interventional Oncology
                                    </Link>{" "}
                                    - image-guided cancer treatment using embolization
                                </li>
                            </ul>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
}
