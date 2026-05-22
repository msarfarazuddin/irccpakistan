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
                                Peripheral Vascular Intervention  {" "}
                                <span className="text-[#0b4aa2] font-extrabold">& Amputation Prevention</span>
                            </h4>

                            <p className="mt-4 text-[16px] sm:text-[16px] leading-relaxed text-slate-700">
                                If untreated, PAD can progress to Critical Limb Ischemia (CLI)  , a severe condition frequently associated with lower limb amputations. Increased access to interventional procedures including revascularization and atherectomy has significantly reduced lower extremity amputations in patients with severe PAD.
                            </p >

                            <p className="mt-4 text-[16px] sm:text-[16px] leading-relaxed text-slate-700">
                                Limb preservation not only saves lives, it preserves independence, quality of life, and long-term wellbeing.
                            </p>

                            <p className="mt-4 text-[16px] sm:text-[16px] leading-relaxed text-slate-700">
                                Patients with leg pain or vascular issues may also benefit from exploring our{" "}
                                <Link
                                    href="/Genicular-Arterial-Embolization-for-Knee-Pain"
                                    className="font-semibold text-[#0E58A8] underline underline-offset-4 transition hover:text-[#0B3F78]"
                                >
                                    Genicular Arterial Embolization for Knee Pain
                                </Link>
                                , a minimally invasive option for knee pain caused by abnormal arterial growth. Similarly, patients with chronic lower limb or musculoskeletal pain may find{" "}
                                <Link
                                    href="/Plantar-Fasciitis"
                                    className="font-semibold text-[#0E58A8] underline underline-offset-4 transition hover:text-[#0B3F78]"
                                >
                                    Plantar Fasciitis Treatment
                                </Link>{" "}
                                and{" "}
                                <Link
                                    href="/Tenosynovitis"
                                    className="font-semibold text-[#0E58A8] underline underline-offset-4 transition hover:text-[#0B3F78]"
                                >
                                    Tenosynovitis Treatment
                                </Link>{" "}
                                relevant.
                            </p>

                            <h5 className="mt-8 text-[22px] font-semibold leading-tight text-slate-900 sm:text-[28px]">
                                Related <span className="text-[#0b4aa2]">Treatments at IRCC Pakistan</span>
                            </h5>

                            <ul className="mt-5 space-y-3 text-[16px] leading-relaxed text-slate-700">
                                <li>
                                    <Link
                                        href="/Vascular-Malformation-Treatment"
                                        className="font-semibold text-[#0E58A8] underline underline-offset-4 transition hover:text-[#0B3F78]"
                                    >
                                        Vascular Malformation Treatment
                                    </Link>{" "}
                                    - for congenital arterial and venous abnormalities
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
                                    - for venous dilation in the male reproductive system
                                </li>
                                <li>
                                    <Link
                                        href="/Genicular-Arterial-Embolization-for-Knee-Pain"
                                        className="font-semibold text-[#0E58A8] underline underline-offset-4 transition hover:text-[#0B3F78]"
                                    >
                                        Genicular Arterial Embolization
                                    </Link>{" "}
                                    - for knee pain related to vascular causes
                                </li>
                                <li>
                                    <Link
                                        href="/Pelvic-Congestion-Syndrome-Treatment"
                                        className="font-semibold text-[#0E58A8] underline underline-offset-4 transition hover:text-[#0B3F78]"
                                    >
                                        Pelvic Congestion Syndrome Treatment
                                    </Link>{" "}
                                    - for abnormal pelvic venous circulation
                                </li>
                                <li>
                                    <Link
                                        href="/Interventional-Oncology"
                                        className="font-semibold text-[#0E58A8] underline underline-offset-4 transition hover:text-[#0B3F78]"
                                    >
                                        Interventional Oncology
                                    </Link>{" "}
                                    - image-guided cancer treatment using similar catheter-based techniques
                                </li>
                                <li>
                                    <Link
                                        href="/Transjugular-Intrahepatic-Portosystemic-Shunt"
                                        className="font-semibold text-[#0E58A8] underline underline-offset-4 transition hover:text-[#0B3F78]"
                                    >
                                        Transjugular Intrahepatic Portosystemic Shunt (TIPS)
                                    </Link>{" "}
                                    - for portal hypertension and related vascular complications
                                </li>
                                <li>
                                    <Link
                                        href="/Dialysis-Access-Care-and-Management"
                                        className="font-semibold text-[#0E58A8] underline underline-offset-4 transition hover:text-[#0B3F78]"
                                    >
                                        Dialysis Access Care and Management
                                    </Link>{" "}
                                    - vascular access maintenance for kidney disease patients
                                </li>
                            </ul>
                           
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
}
