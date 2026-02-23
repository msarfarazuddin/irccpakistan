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
                                What is the treatment  {" "}
                                <span className="text-[#0b4aa2] font-extrabold">for peripheral vascular</span> disease?
                            </h4>

                            <p className="mt-4 text-[16px] sm:text-[16px] leading-relaxed text-slate-700">
                                The main goals for treatment of PVD are to control the symptoms and halt the progression of the disease to lower the risk for heart attack, stroke, and other complications.
                            <br></br>
                            <b>Treatment may include:</b>
                            </p>
                            <ul className="text-black text-[16px] sm:text-[16px] leading-relaxed text-slate-700">
                                <li>Lifestyle changes to control risk factors, including regular exercise, proper nutrition, and quitting smoking</li>
                                <li>Aggressive treatment of existing conditions that may worsen PVD, such as diabetes, high blood pressure, and high cholesterol</li>
                                <li>Medicines to improve blood flow, such as antiplatelet agents (blood thinners) and medicines that relax the blood vessel walls</li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
