import Link from "next/link";

export default function UfeInfoSection() {
    return (
        <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
            <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
                <div className="rounded-2xl bg-[#BFDBEA33] p-5 pb-10 shadow-sm sm:p-8 lg:p-10">
                    <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
                        <div className="lg:col-span-12">
                            <h4 className="text-[22px] text-[30px] leading-tight text-slate-900 sm:text-[35px] lg:text-[45px]">
                                How IRCC Pakistan Can Help You With{" "}
                                <span className="font-extrabold text-[#0b4aa2]">Endometriotic cyst ablation Treatment?</span>
                            </h4>

                            <p className="mt-4 text-[16px] leading-relaxed text-slate-700 sm:text-[16px]">
                                IRCC Pakistan offers advanced image-guided treatment for endometriotic ovarian cysts. Our interventional radiology team provides precise, minimally invasive care with less pain, faster recovery, and a strong focus on fertility preservation working toward complete women&apos;s reproductive health.
                            </p>

                            <p className="mt-4 text-[16px] leading-relaxed text-slate-700 sm:text-[16px]">
                                Our comprehensive women&apos;s health services also include{" "}
                                <Link
                                    href="/Uterine-Fibroid-Embolization"
                                    className="font-semibold text-[#0E58A8] underline underline-offset-4 transition hover:text-[#0B3F78]"
                                >
                                    Uterine Fibroid Embolization
                                </Link>
                                ,{" "}
                                <Link
                                    href="/Fallopian-Tube-Recanalization"
                                    className="font-semibold text-[#0E58A8] underline underline-offset-4 transition hover:text-[#0B3F78]"
                                >
                                    Fallopian Tube Recanalization
                                </Link>
                                , and{" "}
                                <Link
                                    href="/Pelvic-Congestion-Syndrome-Treatment"
                                    className="font-semibold text-[#0E58A8] underline underline-offset-4 transition hover:text-[#0B3F78]"
                                >
                                    Pelvic Congestion Syndrome Treatment
                                </Link>{" "}
                                all performed by expert interventional radiologists in a safe, comfortable outpatient setting.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
