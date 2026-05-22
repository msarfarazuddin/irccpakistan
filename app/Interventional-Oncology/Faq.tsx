"use client";

import { useMemo, useState } from "react";
import type { ReactNode } from "react";

type FaqItem = {
    q: string;
    a: ReactNode;
};

function ArrowIcon() {
    return (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
        </svg>
    );
}

export default function Faq() {
    const faqs = useMemo<FaqItem[]>(
        () => [
            {
                q: "Q1: What types of cancer can Interventional Oncology treat?",
                a: "Interventional oncology is most commonly used for primary liver cancer, cancers that have spread to the liver from breast, colon, or other organs, and kidney tumors. Our specialists evaluate each case individually to determine the most suitable approach.",
            },
            {
                q: "Q2: Is Interventional Oncology a replacement for chemotherapy or surgery?",
                a: "Not always, but it can be a powerful alternative or complement. For patients who are not surgical candidates or can no longer tolerate systemic chemotherapy, procedures like radioembolization and chemoembolization offer targeted, effective options.",
            },
            {
                q: "Q3: Are these procedures painful?",
                a: "No. Patients receive local anesthesia and sedation, so the procedure itself is comfortable. Some mild post-procedure fatigue or cramping may occur, which is easily managed with prescribed medication.",
            },
            {
                q: "Q4: How long do these procedures take?",
                a: "Most procedures take between 60 and 90 minutes. The majority of patients are discharged the same day.",
            },
            {
                q: "Q5: How many treatment sessions will I need?",
                a: "This depends on the procedure and your individual condition. Radioembolization may require two sessions separated by 30 days. Chemoembolization and bland embolization are often completed in a single session, though follow-up treatments may be planned based on response.",
            },
            {
                q: "Q6: What is the recovery time?",
                a: "Recovery is significantly faster than open surgery. Most patients resume light activities within a few days to one week.",
            },
            {
                q: "Q7: Can these treatments be combined with chemotherapy or radiation?",
                a: "Yes. Many patients benefit from combining interventional oncology with systemic chemotherapy, external radiation, or surgery. Our team collaborates with oncologists to build a personalized treatment plan.",
            },
            {
                q: "Q8: What imaging technologies are used during treatment?",
                a: "IRCC Pakistan uses ultrasound and fluoroscopy (real-time X-ray imaging) to guide all procedures with precision and safety.",
            },
            {
                q: "Q9: Is Interventional Oncology available in Pakistan?",
                a: "Yes. IRCC Pakistan is one of the very few centers in Pakistan offering a full range of interventional oncology treatments performed by dedicated interventional radiologists.",
            },
            {
                q: "Q10: How do I know if I am a candidate?",
                a: (
                    <>
                        A consultation with our interventional radiologist is the first step. We review your imaging, medical history, and prior treatments before recommending a personalized plan.{" "}
                        <a
                            href="#form"
                            className="font-semibold text-[#0E58A8] underline underline-offset-4 transition hover:text-[#0B3F78]"
                        >
                            Book an appointment
                        </a>{" "}
                        today.
                    </>
                ),
            },
        ],
        []
    );

    const [openIndex, setOpenIndex] = useState<number>(0);

    return (
        <section
            className="relative w-full overflow-hidden bg-white bg-center bg-no-repeat py-16"
            style={{ backgroundImage: "url('/faq.png')" }}
        >
            <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h4 className="text-3xl tracking-tight text-[#0B1220] sm:text-4xl lg:text-4xl">
                        Frequently <span className="font-semibold text-[#0E58A8]">Asked Questions (FAQs)</span>
                    </h4>
                </div>

                <div className="mx-auto mt-10 max-w-4xl">
                    <div className="rounded-3xl p-3">
                        <div className="space-y-3">
                            {faqs.map((item, idx) => {
                                const isOpen = idx === openIndex;

                                return (
                                    <div
                                        key={item.q}
                                        className={[
                                            "rounded-2xl border bg-white shadow-[0_25px_70px_rgba(0,0,0,0.08)] transition",
                                            isOpen ? "border-[#0E58A8]/25" : "border-[#0E58A8]/15",
                                        ].join(" ")}
                                    >
                                        <button
                                            type="button"
                                            className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                                            aria-expanded={isOpen}
                                            onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                                        >
                                            <span className="mobilew text-base text-[#0E58A8] sm:text-lg">
                                                {item.q}
                                            </span>

                                            <span
                                                className={[
                                                    "inline-flex h-11 w-11 items-center justify-center rounded-full border transition",
                                                    isOpen
                                                        ? "border-[#0E58A8]/15 bg-[#0E58A8] text-white"
                                                        : "border-[#0E58A8]/15 text-[#0E58A8]",
                                                ].join(" ")}
                                                aria-hidden="true"
                                            >
                                                {isOpen ? (
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        className="h-5 w-5"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                    >
                                                        <path d="M6 12h12" />
                                                    </svg>
                                                ) : (
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        className="h-5 w-5"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                    >
                                                        <path d="M12 6v12" />
                                                        <path d="M6 12h12" />
                                                    </svg>
                                                )}
                                            </span>
                                        </button>

                                        <div
                                            className={[
                                                "grid overflow-hidden px-6 transition-[grid-template-rows,opacity] duration-300",
                                                isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] pb-0 opacity-0",
                                            ].join(" ")}
                                        >
                                            <div className="min-h-0">
                                                <p className="text-sm leading-6 text-[#5B6577] sm:text-[15px]">
                                                    {item.a}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="mt-10 flex justify-center pb-2">
                            <a
                                href="#form"
                                className="mx-auto mt-4 inline-flex items-center gap-2 rounded-full bg-[#0E58A8] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#0B3F78]"
                            >
                                Book an appointment <ArrowIcon />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
