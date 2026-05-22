const candidates = [
    {
        title: "Have been experiencing chronic pelvic pain for more than 6 months",
    },
    {
        title: "Have been diagnosed with pelvic varicose veins or ovarian vein reflux",
    },
    {
        title: "Are not currently pregnant",
    },
    {
        title: "Prefer a non-surgical approach that preserves your uterus and fertility",
    },
    {
        title: "Have not responded well to hormonal or pain management treatments",
    },
];

export default function CandidateSection() {
    return (
        <section className="bg-white py-16 px-4">
            <div className="mx-auto max-w-[1400px] text-center">
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#dce6ff] bg-white px-4 py-2 text-sm font-semibold text-[#0E58A8] shadow-lg">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full text-[30px] font-bold text-[#0E58A8]">
                        +
                    </span>
                    <span className="font-normal text-[#111111]">Candidate</span>
                </div>

                <h5 className="mb-4 pt-7 text-3xl text-black md:text-4xl">
                    Who is a{" "}
                    <span className="font-bold text-[#0E58A8]">Candidate for Ovarian Vein Embolization?</span>
                </h5>

                <p className="text-black">You may be a good candidate if you:</p>

                <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {candidates.map((item, index) => (
                        <div
                            key={index}
                            className="mx-auto w-full max-w-[320px] rounded-xl bg-white p-4 shadow-xl transition duration-300 hover:shadow-md"
                        >
                            <h3 className="mt-4 text-center text-sm font-semibold text-gray-800 md:text-base">
                                {item.title}
                            </h3>
                        </div>
                    ))}
                </div>

                <p className="mx-auto mt-10 max-w-5xl text-center text-sm leading-7 text-[#1f2937] md:text-lg">
                    Women with related reproductive conditions are also encouraged to explore our{" "}
                    <a
                        href="/Fallopian-Tube-Recanalization"
                        className="font-semibold text-[#0E58A8] underline underline-offset-4"
                    >
                        Fallopian Tube Recanalization
                    </a>{" "}
                    and{" "}
                    <a
                        href="/Endometriotic-Ovarian-Cyst-Ablation"
                        className="font-semibold text-[#0E58A8] underline underline-offset-4"
                    >
                        Endometriotic Ovarian Cyst Ablation
                    </a>{" "}
                    services available at IRCC.
                </p>

                <div className="mt-12">
                    <a
                        href="#form"
                        className="inline-flex rounded-full bg-[#0E58A8] px-8 py-3 text-white shadow-xl transition hover:bg-[#0E58A8]"
                    >
                        Book Appointment
                    </a>
                </div>
            </div>
        </section>
    );
}
