import Image from "next/image";

export default function UfeInfoSection() {
    return (


        <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
            <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
                {/* Card */}
                <div className="rounded-2xl bg-[#BFDBEA33] p-5 pb-10 sm:p-8 lg:p-10 shadow-sm">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                        {/* Right Content (8/12) */}
                        <div className="lg:col-span-12">
                            <h4 className="text-[22px] sm:text-[35px] text-[30px] lg:text-[45px]  leading-tight text-slate-900">
                                How IRCC Pakistan Can Help You With   {" "}
                                <span className="text-[#0b4aa2] font-extrabold">Thyroid Alcohol Cyst Ablation Treatment?</span>
                            </h4>

                            <p className="mt-4 text-[16px] sm:text-[16px] leading-relaxed text-slate-700">
                                At IRCC Pakistan, our Interventional Radiology team provides safe, precise, and non-surgical treatment for thyroid cysts using ultrasound-guided alcohol ablation. The procedure involves minimal pain, no stitches, quick recovery, and excellent cosmetic results, helping you return to normal activities quickly.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
