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
                q: "Is Thyroid Artery Embolization the same as thyroid surgery?",
                a: "No. TAE is a non-surgical, minimally invasive procedure. There are no cuts or stitches involved. A tiny puncture in the wrist or groin is used to guide a catheter to the thyroid arteries, making it far less invasive than conventional thyroid surgery.",
            },
            {
                q: "How does TAE differ from Thyroid Radiofrequency Ablation?",
                a: "Both are non-surgical thyroid treatments, but they work differently. Thyroid Radiofrequency Ablation (RFA) uses heat energy to destroy nodule tissue directly, while TAE blocks the blood supply to shrink the gland or nodules. Your doctor will recommend the best option based on your nodule type and size.",
            },
            {
                q: "Is general anaesthesia required for TAE?",
                a: "No. TAE is performed under local anaesthesia with sedation. You remain comfortable and conscious throughout without the risks associated with general anaesthesia.",
            },
            {
                q: "How long does the procedure take?",
                a: "TAE typically takes 60 to 90 minutes depending on the complexity of the case and the number of arteries being treated.",
            },
            {
                q: "What is the recovery time after Thyroid Artery Embolization?",
                a: "Most patients are discharged the same day or within 24 hours. Light daily activities can usually be resumed within 2-3 days, with full recovery significantly faster than open thyroid surgery.",
            },
            {
                q: "Will the thyroid nodules completely disappear after TAE?",
                a: "TAE aims to significantly shrink the nodules and relieve symptoms. Complete disappearance is not guaranteed, but most patients experience meaningful reduction in gland size and symptom relief.",
            },
            {
                q: "Can TAE treat cancerous thyroid nodules?",
                a: (
                    <>
                        TAE is generally recommended for benign (non-cancerous) thyroid conditions. For malignant cases, our{" "}
                        <Link
                            href="/Interventional-Oncology"
                            className="font-semibold text-[#0E58A8] underline underline-offset-4 transition hover:text-[#0B3F78]"
                        >
                            Interventional Oncology
                        </Link>{" "}
                        team will guide you on appropriate treatment options.
                    </>
                ),
            },
            {
                q: "What if I also have thyroid cysts along with nodules?",
                a: (
                    <>
                        If thyroid cysts are present alongside nodules,{" "}
                        <Link
                            href="/Thyroid-Alcohol-cyst-ablation"
                            className="font-semibold text-[#0E58A8] underline underline-offset-4 transition hover:text-[#0B3F78]"
                        >
                            Thyroid Alcohol Cyst Ablation
                        </Link>{" "}
                        may be recommended in combination or as an alternative. Our team will assess your imaging and suggest the right approach.
                    </>
                ),
            },
            {
                q: "How do I book a consultation at IRCC Pakistan?",
                a: "You can contact IRCC Pakistan directly via phone or the online booking form on our website. Our team will arrange a clinical and imaging assessment to determine your eligibility for TAE.",
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
