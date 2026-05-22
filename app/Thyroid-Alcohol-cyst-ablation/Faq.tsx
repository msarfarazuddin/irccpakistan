"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { ReactNode } from "react";

type Faq = {
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

export default function FaqSection() {
    const faqs = useMemo<Faq[]>(
        () => [
            {
                q: "Is Thyroid Alcohol Cyst Ablation painful?",
                a: "The procedure is performed under local anaesthesia, so discomfort is minimal. Patients may feel mild pressure or a brief warm sensation when the alcohol is injected, but this is well tolerated and short-lived.",
            },
            {
                q: "How long does the procedure take?",
                a: "Thyroid alcohol cyst ablation is a short outpatient procedure, typically completed in 20 to 40 minutes depending on the size and complexity of the cyst.",
            },
            {
                q: "How many sessions are needed?",
                a: "Most thyroid cysts are successfully treated in a single session. However, larger or complex cysts may require a second session. Your doctor will advise after evaluating your ultrasound findings.",
            },
            {
                q: "What is the success rate of ethanol ablation for thyroid cysts?",
                a: "Ethanol ablation has a high success rate. Studies show over 85-90% of patients experience significant cyst shrinkage and symptom relief, with low recurrence rates compared to simple needle drainage alone.",
            },
            {
                q: "What is the recovery time after Thyroid Alcohol Cyst Ablation?",
                a: "Recovery is very quick. Most patients return home the same day and resume light daily activities within 24 to 48 hours. There are no stitches or surgical wounds to heal.",
            },
            {
                q: "Will the cyst come back after ethanol ablation?",
                a: "The risk of recurrence is significantly lower after ethanol ablation compared to simple drainage alone. The alcohol causes the cyst wall to collapse and scar, reducing the chance of it refilling.",
            },
            {
                q: "How is this different from Thyroid Radiofrequency Ablation?",
                a: (
                    <>
                        <Link
                            href="/Thyroid-Radiofrequency-Ablation"
                            className="font-semibold text-[#0E58A8] underline underline-offset-4 transition hover:text-[#0B3F78]"
                        >
                            Thyroid Radiofrequency Ablation (RFA)
                        </Link>{" "}
                        uses heat energy and is best suited for solid thyroid nodules. Alcohol cyst ablation is specifically designed for fluid-filled cysts. Both are non-surgical, but the right choice depends on your cyst type confirmed on ultrasound.
                    </>
                ),
            },
            {
                q: "How is this different from Thyroid Artery Embolization?",
                a: (
                    <>
                        <Link
                            href="/Thyroid-Artery-Embolization"
                            className="font-semibold text-[#0E58A8] underline underline-offset-4 transition hover:text-[#0B3F78]"
                        >
                            Thyroid Artery Embolization (TAE)
                        </Link>{" "}
                        is used to shrink an overall enlarged thyroid gland or large solid nodules by blocking blood supply. Alcohol ablation targets fluid-filled cysts specifically by draining and chemically collapsing them. Both procedures can sometimes be used together if a patient has a mixed condition.
                    </>
                ),
            },
            {
                q: "Is general anaesthesia required?",
                a: "No. The procedure requires only local anaesthesia, making it a safe option even for patients who are not fit for general anaesthesia or surgery.",
            },
            {
                q: "How do I book a consultation at IRCC Pakistan?",
                a: "Contact IRCC Pakistan via phone or our online booking form. Our team will arrange an ultrasound assessment and clinical evaluation to confirm your eligibility for thyroid alcohol cyst ablation.",
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
                                            "rounded-2xl border bg-white transition shadow-[0_25px_70px_rgba(0,0,0,0.08)]",
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
                                                        ? "border-[#0E58A8]/15 bg-[#0E58A8] text-[#ffffff]"
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
                                                        <path d="M12 6v12" />
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
                                className="mx-auto mt-4 inline-flex items-center gap-2 rounded-full bg-[#0E58A8] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#0E58A8]"
                            >
                                Know More <ArrowIcon />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
