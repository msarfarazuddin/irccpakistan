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
                                What does  {" "}
                                <span className="text-[#0b4aa2] font-extrabold">Thyroid Ablation mean?</span>
                            </h4>

                            <p className="mt-4 text-[16px] sm:text-[16px] leading-relaxed text-slate-700">
                                Thyroid nodules are lumps in the thyroid gland, which are usually benign. If large enough, benign nodules can cause symptoms of pressure in the neck and difficulty in swallowing due to their size. They may also produce a visible or palpable swelling in the neck.
                            </p>

                            <p className="mt-4 text-[16px] sm:text-[16px] leading-relaxed text-slate-700">
                                Radiofrequency ablation reduces the size of benign thyroid nodules. The technique uses a special needle which is guided into the thyroid nodules under ultrasound guidance. An electric current is passed through the needle tip, heating the thyroid tissue immediately around it.
                            </p>

                            <p className="mt-4 text-[16px] sm:text-[16px] leading-relaxed text-slate-700">
                                This heating damages the nodular tissue and over time reduces its size. The procedure is carried out with the patient awake and the area is anaesthetised with local anaesthetic so all the patient feels is pushing in the neck. The procedure takes 20-40 minutes depending on the size of the nodule. The maximum reduction in the size of the nodule is achieved at 6 months
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
