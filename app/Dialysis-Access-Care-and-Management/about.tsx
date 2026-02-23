import Image from "next/image";

export default function UfeInfoSection() {
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
                                <span className="text-[#0b4aa2] font-extrabold">Permacath</span>
                            </h4>
                            <h5 className="text-black text-[30px]">What is permacath?</h5>
                            <p className="mt-4 text-[16px] sm:text-[16px] leading-relaxed text-slate-700">
                                A permacath is a piece of plastic tubing that is similar to a jugular catheter. It is used for hemodialysis in the exact same way that a jugular catheter is used. The advantage of the permacath is that it can provide access to the vascular system for up to one year. This is important for dialysis patients because they will avoid multiple catheter insertions, which could eventually lead to vein damage.
                            </p>
                            <h5 className="text-black text-[30px]">How does the procedure work?</h5>

                            <p className="mt-4 text-[16px] sm:text-[16px] leading-relaxed text-slate-700">
                                Using a fluoroscopy machine and small tools, the interventional radiologist places the permacath in the jugular vein. The permacath is moved under the skin throughout the upper chest, under the collarbone, and the end of the catheter comes out on the chest wall. The fluoroscopy  is used in order for the IR to follow the path of the catheter throughout the procedure and make sure it is placed correctly.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
