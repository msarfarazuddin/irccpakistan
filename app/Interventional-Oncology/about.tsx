import Image from "next/image";
import Link from "next/link";

export default function UfeInfoSection() {
    return (
        <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
            <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
                <div className="rounded-2xl bg-[#BFDBEA33] p-5 pb-10 shadow-sm sm:p-8 lg:p-10 lg:pb-0">
                    <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
                        <div className="lg:col-span-4">
                            <div className="relative h-[280px] w-full overflow-hidden rounded-xl sm:h-[360px] lg:h-[420px]">
                                <Image
                                    src="/precise.png"
                                    alt="Uterine Fibroid Embolization Patient"
                                    fill
                                    className="object-contain object-bottom"
                                    priority
                                />
                            </div>
                        </div>

                        <div className="lg:col-span-8">
                            <h4 className="text-[22px] text-[30px] leading-tight text-slate-900 sm:text-[35px] lg:text-[45px]">
                                These{" "}
                                <span className="font-extrabold text-[#0b4aa2]">precise</span>
                            </h4>

                            <p className="mt-4 text-[16px] leading-relaxed text-slate-700 sm:text-[16px]">
                                image-guided interventional oncology techniques may be used to:
                            </p>

                            <ul className="mt-4 text-black">
                                <li>Treat tumors in the liver, kidneys and other organs.</li>
                                <li>Place central venous access devices, which are inserted into large veins to deliver medication.</li>
                                <li>Manage pain and other cancer-related complications such as organ obstruction.</li>
                            </ul>

                            <p className="mt-4 text-[16px] leading-relaxed text-slate-700 sm:text-[16px]">
                                Our treatments help enhance quality of life and improve overall survival for patients with difficult-to-treat cancers. The same embolization principles used in our{" "}
                                <Link
                                    href="/Uterine-Fibroid-Embolization"
                                    className="font-semibold text-[#0E58A8] underline underline-offset-4 transition hover:text-[#0B3F78]"
                                >
                                    Uterine Fibroid Embolization
                                </Link>
                                ,{" "}
                                <Link
                                    href="/Varicocele-Embolization"
                                    className="font-semibold text-[#0E58A8] underline underline-offset-4 transition hover:text-[#0B3F78]"
                                >
                                    Varicocele Embolization
                                </Link>
                                , and{" "}
                                <Link
                                    href="/Hemorrhoidal-Artery-Embolization"
                                    className="font-semibold text-[#0E58A8] underline underline-offset-4 transition hover:text-[#0B3F78]"
                                >
                                    Hemorrhoidal Artery Embolization
                                </Link>{" "}
                                are applied here to block tumor blood supply and cause tumors to shrink and die.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
