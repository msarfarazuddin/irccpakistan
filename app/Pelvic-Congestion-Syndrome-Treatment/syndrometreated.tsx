export default function UfeInfoSection() {
    return (


        <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
            <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
                {/* Card */}
                <div className="rounded-2xl bg-[#BFDBEA33] p-5   pb-10 sm:p-8 lg:p-10 shadow-sm">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        {/* Right Content (8/12) */}
                        <div className="lg:col-span-12">
                            <h4 className="text-[22px] sm:text-[35px] text-[30px] lg:text-[45px]  leading-tight text-slate-900">
                                How is{" "}
                                <span className="text-[#0b4aa2] font-extrabold">pelvic congestion syndrome</span> treated?
                            </h4>

                            <p className="mt-4 text-[16px] sm:text-[16px] leading-relaxed text-slate-700">
                                The most effective treatment for PCS is Ovarian Vein Embolization a minimally invasive, image-guided procedure that closes off the faulty veins, stopping blood from pooling and relieving pain without any surgery.
                            </p>

                            <div className="mt-6 text-[16px] sm:text-[16px] leading-relaxed text-slate-700">
                                <h5 className="text-lg font-semibold text-slate-900">How the Procedure Works:</h5>
                                <ol className="mt-3 list-decimal space-y-2 pl-6">
                                    <li>A tiny nick is made in the skin to insert a thin catheter into the brachial vein (in the arm).</li>
                                    <li>Using real-time X-ray (fluoroscopy) guidance, the catheter is carefully navigated to the affected pelvic veins.</li>
                                    <li>Embolization coils are delivered through the catheter to clot and seal the faulty veins.</li>
                                    <li>The advanced Sotradecol foam agent is used to block even the smallest veins not accessible by coils alone.</li>
                                    <li>Once sealed, blood is naturally rerouted through healthy veins relieving pressure and pain.</li>
                                </ol>
                            </div>

                            <p className="mt-6 text-[16px] sm:text-[16px] leading-relaxed text-slate-700">
                                This is the same trusted embolization technique used in our{" "}
                                <a
                                    href="/Uterine-Fibroid-Embolization"
                                    className="font-semibold text-[#0b4aa2] underline underline-offset-4"
                                >
                                    Uterine Fibroid Embolization
                                </a>{" "}
                                and{" "}
                                <a
                                    href="/Hemorrhoidal-Artery-Embolization"
                                    className="font-semibold text-[#0b4aa2] underline underline-offset-4"
                                >
                                    Hemorrhoidal Artery Embolization
                                </a>{" "}
                                procedures all performed by our expert interventional radiologists.
                            </p>
                        </div>

                     
                    </div>
                </div>
            </div>
        </section>
    );
}
