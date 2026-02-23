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
                                These {" "}
                                <span className="text-[#0b4aa2] font-extrabold">precise</span>
                            </h4>

                            <p className="mt-4 text-[16px] sm:text-[16px] leading-relaxed text-slate-700">
                                image-guided interventional oncology techniques may be used to:
                            </p>
                            <ul className="text-black mt-4">
                                <li>Treat tumors in the liver, kidneys and other organs.</li>
                                <li>Place central venous access devices, which are inserted into large veins to deliver medication.</li>
                                <li>Manage pain and other cancer-related complications such as organ obstruction.</li>
                            </ul>

                            <p className="mt-4 text-[16px] sm:text-[16px] leading-relaxed text-slate-700">
                                At IRCC Pakistan, our interventional radiologists offer a number of therapies that are helping enhance quality-of-life and overall survival for patients with difficult-to-treat cancers. Our treatments often take advantage of special imaging technologies such as ultrasound as well as fluoroscopy, which uses X-rays to create real-time, moving images of structures inside the body. Treatment options include:
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
