export default function Varicoceleabout() {
    return (
        <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
            <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
                {/* Card */}
                <div className="rounded-2xl bg-[#BFDBEA33] p-5  lg:pb-10 pb-10 sm:p-8 lg:p-10 shadow-sm">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        {/* Left Image (4/12) */}

                        {/* Right Content (8/12) */}
                        <div className="lg:col-span-12">
                            <h4 className="text-[22px] sm:text-[35px] text-[30px] lg:text-[45px]  leading-tight text-slate-900">
                                What is an   {" "}
                                <span className="text-[#0b4aa2] font-extrabold">Osteoid Osteoma?</span>
                            </h4>
                            <p className="mt-4 text-[16px] sm:text-[16px] leading-relaxed text-slate-700">
                                Osteoid osteoma is a benign (non-cancerous) tumor of the bone, most frequently found in the legs but can occur in nearly any bone in the body. Usually osteoid osteomas are small tumors that measure less than an inch across. They typically form in the long bones, especially the thigh (femur) and shin (tibia). They may also develop in the bones of the spine, arms, hands, fingers, ankles, or feet.
                                <br></br>
                                Osteoid osteomas tend to be painful, causing a dull, achy pain that can range from moderate to severe often worse at night. They occur more frequently in men than in women and typically affect children and young adults up to around age 24, though they can occur at any age. Unlike other chronic pain conditions such as{" "}
                                <a
                                    href="/Plantar-Fasciitis"
                                    className="font-semibold text-[#0b4aa2] underline underline-offset-4"
                                >
                                    Plantar Fasciitis
                                </a>{" "}
                                or{" "}
                                <a
                                    href="/Tenosynovitis"
                                    className="font-semibold text-[#0b4aa2] underline underline-offset-4"
                                >
                                    Tenosynovitis
                                </a>
                                , osteoid osteoma pain originates from inside the bone itself and requires precise image-guided treatment to resolve.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
