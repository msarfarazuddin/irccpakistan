// app/clinic/page.tsx
"use client";

export default function ClinicPage() {
    // ✅ Replace with your clinic location (Google Maps embed link)
    const mapEmbedUrl =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.20883602827!2d74.36810897511711!3d31.463440949953405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919066f81b03d49%3A0x5aeab4fcc888ac58!2sF%20Block%20Phase%205%2C%20153%20Street%201%2C%20Sector%20AA%20Dha%20Phase%204%2C%20Lahore%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1771571190809!5m2!1sen!2sus";

    const KmapEmbedUrl =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.504987670153!2d67.0531499748794!3d24.846596645813104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33c2f193bc701%3A0x74df56d087bf03c2!2sNational%20Medical%20Centre%20(NMC)!5e0!3m2!1sen!2sus!4v1771571848789!5m2!1sen!2sus";

    const ImapEmbedUrl =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.7901086003476!2d73.03471378109306!3d33.714379666633675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbe535aca3623%3A0x341a12224b00e78a!2sKohistan%20Rd%2C%20F-8%2C%20Islamabad%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1771572052667!5m2!1sen!2sus";

    return (
        <div className="bg-white min-h-screen pt-28 pb-20 lg:pt-36 mt-[-100px] md:pt-16">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="mb-10 text-center pt-2 lg:pt-10 lg:pb-10">
                    <h1 className="text-4xl sm:text-5xl font-semibold text-[#0B1220]">
                        Our Clinic
                    </h1>
                    <p className="mt-3 text-[#5B6577] text-base sm:text-lg">
                        Visit us for consultation, diagnostics, and treatment support.
                    </p>
                </div>

                {/* 12-col layout: Map 4 / Details 8 */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
                    {/* LEFT: Map (4 cols) */}
                    <div className="lg:col-span-5">
                        <div className="rounded-2xl overflow-hidden border bg-gray-50 shadow-sm">
                            <iframe
                                src={mapEmbedUrl}
                                className="w-full h-[280px] sm:h-[360px] lg:h-[415px]"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="153/1, F Block Phase 5 D.H.A, Lahore, Pakistan"
                            />
                        </div>

                        {/* Quick actions under map (nice on desktop) */}

                    </div>

                    {/* RIGHT: Details (8 cols) */}
                    <div className="lg:col-span-7">
                        <div className="rounded-2xl border bg-white p-6 sm:p-8 lg:p-10 shadow-sm">
                            <h2 className="text-2xl sm:text-3xl font-semibold text-[#0B1220]">
                                Integrated Medical Care Hospital
                            </h2>



                            <p className="mt-3 text-[#5B6577] leading-7">
                                153/1, F Block Phase 5 D.H.A, Lahore, Pakistan
                            </p>

                            <div className="mt-4 grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-3">
                                <a
                                    href="/Contact"
                                    className="inline-flex justify-center rounded-full bg-[#0E58A8] px-6 py-3 text-white font-semibold shadow-sm hover:opacity-95 transition"
                                >
                                    Book Appointment
                                </a>

                                <a
                                    href="tel:+923324520052"
                                    className="inline-flex justify-center rounded-full border border-gray-300 px-6 py-3 font-semibold text-[#0B1220] hover:bg-gray-50 transition"
                                >
                                    Call Now
                                </a>

                                <a
                                    href="https://wa.me/923001234567"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex justify-center rounded-full border border-gray-300 px-6 py-3 font-semibold text-[#0B1220] hover:bg-gray-50 transition"
                                >
                                    WhatsApp
                                </a>
                            </div>
                            {/* Extra Details / Notes */}
                            <div className="mt-8 rounded-xl border border-gray-200 p-5">
                                <h2 className="text-2xl sm:text-3xl font-semibold text-[#0B1220]">
                                    Hameed Lateef Hospital
                                </h2>
                                <ul className="mt-3 list-disc pl-5 text-sm text-[#4B5563] space-y-2">
                                    <li>14 New Abu Bakar Block Garden Town, Lahore, Punjab, Pakistan.</li>
                                    <li>+92-3310232883</li>
                                    <li>irccpakistan@gmail.com</li>
                                </ul>
                            </div>


                        </div>
                    </div>
                </div>


                {/* 12-col layout: Map 4 / Details 8 */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch pt-10">


                    {/* LEFT: Map (4 cols) */}
                    <div className="lg:col-span-5">
                        <div className="rounded-2xl overflow-hidden border bg-gray-50 shadow-sm">
                            <iframe
                                src={KmapEmbedUrl}
                                className="w-full h-[320px] sm:h-[360px] lg:h-[415px]"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Clinic Location Map"
                            />
                        </div>

                        {/* Quick actions under map (nice on desktop) */}

                    </div>


                    {/* RIGHT: Details (8 cols) */}
                    <div className="lg:col-span-7">
                        <div className="rounded-2xl border bg-white p-6 sm:p-8 lg:p-10 shadow-sm">
                            <h2 className="text-2xl sm:text-3xl font-semibold text-[#0B1220]">
                                National Medical Center
                            </h2>

                            <p className="mt-3 text-[#5B6577] leading-7">
                                A-5/A, National Highway, Phase 1, DHA, Near Kala Pul, Korangi Road.
                            </p>

                            <div className="mt-4 grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-3">
                                <a
                                    href="/Contact"
                                    className="inline-flex justify-center rounded-full bg-[#0E58A8] px-6 py-3 text-white font-semibold shadow-sm hover:opacity-95 transition"
                                >
                                    Book Appointment
                                </a>

                                <a
                                    href="tel:+923001234567"
                                    className="inline-flex justify-center rounded-full border border-gray-300 px-6 py-3 font-semibold text-[#0B1220] hover:bg-gray-50 transition"
                                >
                                    Call Now
                                </a>

                                <a
                                    href="https://wa.me/923001234567"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex justify-center rounded-full border border-gray-300 px-6 py-3 font-semibold text-[#0B1220] hover:bg-gray-50 transition"
                                >
                                    WhatsApp
                                </a>
                            </div>
                            {/* Extra Details / Notes */}
                            <div className="mt-8 rounded-xl border border-gray-200 p-5">
                                <h2 className="text-2xl sm:text-3xl font-semibold text-[#0B1220]">
                                    Altamash hospital
                                </h2>
                                <ul className="mt-3 list-disc pl-5 text-sm text-[#4B5563] space-y-2">
                                    <li>ST-9 A Street, behind behbud association، Block 1 Clifton, Karachi, 75500</li>
                                    <li>+92-3310232883</li>
                                    <li>irccpakistan@gmail.com</li>
                                </ul>
                            </div>


                        </div>
                    </div>


                </div>



                {/* 12-col layout: Map 4 / Details 8 */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch pt-10">


                    {/* LEFT: Map (4 cols) */}
                    <div className="lg:col-span-5">
                        <div className="rounded-2xl overflow-hidden border bg-gray-50 shadow-sm">
                            <iframe
                                src={ImapEmbedUrl}
                                className="w-full h-[320px] sm:h-[360px] lg:h-[415px]"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Clinic Location Map"
                            />
                        </div>

                        {/* Quick actions under map (nice on desktop) */}

                    </div>


                    {/* RIGHT: Details (8 cols) */}
                    <div className="lg:col-span-7">
                        <div className="rounded-2xl border bg-white p-6 sm:p-8 lg:p-10 shadow-sm">
                            <h2 className="text-2xl sm:text-3xl font-semibold text-[#0B1220]">
                                Ali Medical Center
                            </h2>

                            <p className="mt-3 text-[#5B6577] leading-7">
                                Kohistan Rd, F-8 Markaz, Islamabad, Islamabad Capital Territory, Pakistan.
                            </p>

                            <div className="mt-4 grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-3">
                                <a
                                    href="/Contact"
                                    className="inline-flex justify-center rounded-full bg-[#0E58A8] px-6 py-3 text-white font-semibold shadow-sm hover:opacity-95 transition"
                                >
                                    Book Appointment
                                </a>

                                <a
                                    href="tel:+923001234567"
                                    className="inline-flex justify-center rounded-full border border-gray-300 px-6 py-3 font-semibold text-[#0B1220] hover:bg-gray-50 transition"
                                >
                                    Call Now
                                </a>

                                <a
                                    href="https://wa.me/923001234567"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex justify-center rounded-full border border-gray-300 px-6 py-3 font-semibold text-[#0B1220] hover:bg-gray-50 transition"
                                >
                                    WhatsApp
                                </a>
                            </div>
                            {/* Extra Details / Notes */}
                            <div className="mt-8 rounded-xl border border-gray-200 p-5">
                                <h2 className="text-2xl sm:text-3xl font-semibold text-[#0B1220]">
                                    Medikay Cardiac Centre
                                </h2>
                                <ul className="mt-3 list-disc pl-5 text-sm text-[#4B5563] space-y-2">
                                    <li>Park Rd, Meherban Colony Chatta Bakhtawar, Islamabad, 44000, Pakistan</li>
                                    <li>+92-3310232883</li>
                                    <li>irccpakistan@gmail.com</li>
                                </ul>
                            </div>


                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}
