import Image from "next/image";

export default function UfeInfoSection() {
    return (
        <section className="w-full bg-white py-8 sm:py-12  lg:py-16">
            <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
                {/* Card */}
                <div className="rounded-2xl bg-[#BFDBEA33] p-5  lg:pb-0 pb-10 sm:p-8 lg:p-10 shadow-sm">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                        {/* Right Content (8/12) */}
                        <div className="lg:col-span-8">
                            <h4 className="text-[22px] sm:text-[35px] text-[30px] lg:text-[45px]  leading-tight text-slate-900">
                                <span className="text-[#0b4aa2] font-extrabold">Peritoneal Dialysis</span>
                            </h4>
                            <h5 className="text-black text-[30px]">What is peritoneal dialysis and how does it work?</h5>
                            <p className="mt-4 text-[16px] sm:text-[16px] leading-relaxed text-slate-700">
                                Peritoneal dialysis is a treatment for kidney failure that uses the lining of your abdomen, or belly, to filter your blood inside your body. Doctors call this lining the peritoneum. An interventional radiologist will place a soft tube, called a catheter, in your belly a few weeks before you start treatment.
                                When a dialysis technician chooses to do peritoneal dialysis at home or dialysis center, they will consult with their doctor about which type of PD they will perform: Continuous ambulatory peritoneal dialysis (CAPD), which is done manually without a machine. Automated peritoneal dialysis (APD), which is done with a machine called a cycler.
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
