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
                q: "Q1: What is the difference between Peripheral Vascular Disease (PVD) and Peripheral Artery Disease (PAD)?",
                a: "PAD is a specific type of PVD that affects the arteries. PVD is a broader term that includes diseases of both arteries and veins in the limbs. PAD is the most common form of PVD.",
            },
            {
                q: "Q2: What are the warning signs of PAD?",
                a: "Common symptoms include leg pain or cramping when walking (claudication), numbness or weakness in the legs, coldness in the lower leg or foot, sores on the feet or toes that won&apos;t heal, and a weak or absent pulse in the legs. If you experience these symptoms, seek evaluation immediately.",
            },
            {
                q: "Q3: Can PAD lead to amputation?",
                a: "Yes, if left untreated, PAD can progress to Critical Limb Ischemia (CLI), which significantly raises the risk of lower limb amputation. Early intervention through angioplasty, stenting, or atherectomy can prevent this outcome.",
            },
            {
                q: "Q4: Is angioplasty painful?",
                a: "No. The procedure is performed under local anesthesia and sedation. Patients feel no pain during the procedure. Mild discomfort at the catheter insertion site may occur afterward.",
            },
            {
                q: "Q5: How long does the procedure take?",
                a: "Depending on the complexity of the blockage, angioplasty and stenting procedures typically take between 60 and 120 minutes. Most patients are discharged the same day.",
            },
            {
                q: "Q6: How soon can I return to normal activities after treatment?",
                a: "Most patients resume light daily activities within a few days. Because these are minimally invasive procedures with no surgical incisions, recovery is significantly faster than open bypass surgery.",
            },
            {
                q: "Q7: Will PAD come back after treatment?",
                a: "Interventional treatments effectively restore blood flow, but PAD is a chronic condition. Lifestyle changes including quitting smoking, managing diabetes, and controlling blood pressure and cholesterol are essential to prevent recurrence and further progression.",
            },
            {
                q: "Q8: Is PAD connected to heart disease?",
                a: "Yes. PAD and coronary artery disease (CAD) share the same root cause of atherosclerosis. Patients with PAD are at significantly higher risk of heart attack and stroke, which is why early treatment and risk factor management are critical.",
            },
            {
                q: "Q9: Who performs these procedures at IRCC Pakistan?",
                a: "All peripheral vascular interventions at IRCC Pakistan are performed by specialist interventional radiologists using real-time X-ray and imaging guidance for precision and safety.",
            },
            {
                q: "Q10: Is PVD treatment available in Pakistan without surgery?",
                a: (
                    <>
                        Yes. IRCC Pakistan offers a full range of minimally invasive PVD treatments including angioplasty, stent placement, and atherectomy, all without open surgery.{" "}
                        <a
                            href="#form"
                            className="font-semibold text-[#0E58A8] underline underline-offset-4 transition hover:text-[#0B3F78]"
                        >
                            Book a consultation
                        </a>{" "}
                        with our team today.
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
                                Book a consultation <ArrowIcon />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
