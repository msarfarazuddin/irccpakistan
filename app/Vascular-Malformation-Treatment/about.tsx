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
                                Why do these {" "}
                                <span className="text-[#0b4aa2] font-extrabold">vascular malformations occur?</span>
                            </h4>

                            <p className="mt-4 text-[16px] sm:text-[16px] leading-relaxed text-slate-700">
                                These are all present at birth and become apparent at different ages. We are just beginning to understand how malformations occur. The pulmonary arteriovenous malformation, when associated with Hereditary Hemorrhagic Telangiectasia (HHT) is inherited genetically. There is currently much work being done on the possible genetics of other malformations. Most are only known as something that occurs during development of the arteries, veins, and lymph vessels, but without specific cause.
                            </p >
                            <p className="mt-4 text-[16px] sm:text-[16px] leading-relaxed text-slate-700">These vascular malformations can cause a variety of symptoms depending on the location in the body:</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
