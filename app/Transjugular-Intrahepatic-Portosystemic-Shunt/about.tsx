import Image from "next/image";

export default function about() {
    return (
        <section className="w-full bg-white py-8 sm:py-12 lg:pt-16">
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
                                What is a transjugular{" "}
                                <span className="text-[#0b4aa2] font-extrabold">intrahepatic portosystemic shunt?</span>
                            </h4>

                            <p className="mt-4 text-[16px] sm:text-[16px] leading-relaxed text-slate-700">
                                TIPS is most often done for people who have scar tissue in their liver, often caused by cirrhosis. This scar tissue blocks the flow of blood through the liver from the portal vein to the hepatic vein.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
