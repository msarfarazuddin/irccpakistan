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
                q: "Q1: Are vascular malformations dangerous?",
                a: "It depends on the type and location. Some cause only cosmetic concerns or mild discomfort, while others, particularly AVMs, can place stress on the heart or cause internal bleeding. All malformations should be evaluated by a specialist.",
            },
            {
                q: "Q2: Are vascular malformations cancerous?",
                a: "No. Vascular malformations are benign (non-cancerous) abnormalities of blood or lymph vessels. They are not tumors and do not spread like cancer.",
            },
            {
                q: "Q3: Can vascular malformations be completely cured?",
                a: "Complete cure depends on the type. Venous and lymphatic malformations respond very well to sclerotherapy. AVMs are more difficult and may require multiple treatment sessions. Long-term monitoring is recommended for all types.",
            },
            {
                q: "Q4: Is the procedure painful?",
                a: "The procedure is performed under sedation and local anesthesia, so there is no pain during treatment. Post-procedure swelling and discomfort may last 3-5 days for venous or lymphatic malformations and 1-3 days for AVMs, managed with medication.",
            },
            {
                q: "Q5: How many treatment sessions are needed?",
                a: "AVMs may require multiple embolization sessions. Venous and lymphatic malformations are typically treated in sessions spaced approximately six weeks apart until the abnormal vessels are fully blocked.",
            },
            {
                q: "Q6: Can children be treated for vascular malformations?",
                a: "Yes. IRCC Pakistan treats patients from newborns to adults. Treatment timing is individualized based on the child's age, malformation type, and symptoms.",
            },
            {
                q: "Q7: What happens if vascular malformations are left untreated?",
                a: "Untreated malformations can grow over time, particularly during puberty, pregnancy, or hormonal changes. AVMs can worsen and cause serious complications including bleeding. Early evaluation is strongly recommended.",
            },
            {
                q: "Q8: Is surgery required for vascular malformations?",
                a: "Not usually. While surgery is sometimes considered, it is difficult to completely remove malformations surgically, and incomplete removal causes recurrence. Minimally invasive embolization and sclerotherapy by our interventional radiologists is typically preferred.",
            },
            {
                q: "Q9: How long does the full recovery take?",
                a: "For arteriovenous malformations, discomfort typically resolves within 1-3 days. For venous and lymphatic malformations, swelling subsides in 3-5 days, with full shrinkage occurring over 4-6 weeks.",
            },
            {
                q: "Q10: Is this treatment available in Pakistan?",
                a: (
                    <>
                        Yes. IRCC Pakistan offers comprehensive vascular malformation treatment performed by specialist interventional radiologists.{" "}
                        <a
                            href="#form"
                            className="font-semibold text-[#0E58A8] underline underline-offset-4 transition hover:text-[#0B3F78]"
                        >
                            Contact us
                        </a>{" "}
                        to book a consultation.
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
                                Contact us <ArrowIcon />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
