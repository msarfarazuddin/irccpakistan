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
                                How does the {" "}
                                <span className="text-[#0b4aa2] font-extrabold">procedure work?</span>
                            </h4>

                            <p className="mt-4 text-[16px] sm:text-[16px] leading-relaxed text-slate-700">
                                Your interventional radiologist will insert a tiny tube (catheter) into an artery in your leg and guide it to the artery supplying blood to the liver. An X-ray picture study of liver arteries is performed, and all arteries that travel outside of the liver are blocked so that none of the powerful radiation will damage other organs. The radiation treatment is then completed in one or two sessions, depending on blood supply to the liver. Many patients require two treatments because two separate arteries supply the liver. Treatments are separated by 30 days.
                            </p>

                            <p className="mt-4 text-[16px] sm:text-[16px] leading-relaxed text-slate-700">
                                During the procedure, you are given medication to relax as well as a local anesthetic to numb the area where the catheter is inserted. Most patients are sent home on the day of the radioembolization procedure.
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
