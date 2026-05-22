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
                q: "How does Interventional Radiology treat plantar fasciitis?",
                a: "IR treats plantar fasciitis through a technique called embolization. Abnormal tiny blood vessels that develop around chronically inflamed tissue are blocked using image guidance, reducing the inflammation and nerve irritation that cause persistent heel pain without any surgical incision.",
            },
            {
                q: "Is this procedure painful?",
                a: "The procedure is performed under local anaesthesia. Patients may feel mild pressure during the procedure but it is generally well tolerated. Post-procedure discomfort is typically mild and short-lived.",
            },
            {
                q: "How long does the procedure take?",
                a: "The procedure usually takes 30 to 60 minutes and is performed on an outpatient basis, meaning you can go home the same day.",
            },
            {
                q: "What is the recovery time?",
                a: "Most patients resume light daily activities within 1 to 3 days. Full recovery and pain relief may develop gradually over several weeks as the inflammation subsides.",
            },
            {
                q: "How is this different from physiotherapy or steroid injections?",
                a: "Physiotherapy and steroid injections address symptoms temporarily but do not target the abnormal blood vessels that sustain chronic inflammation. IR embolization targets the root vascular cause, offering longer-lasting relief for patients who have not responded to conservative treatments.",
            },
            {
                q: "Is this the same technique used for knee pain?",
                a: (
                    <>
                        Yes, the underlying principle is the same.{" "}
                        <Link
                            href="/Genicular-Arterial-Embolization-for-Knee-Pain"
                            className="font-semibold text-[#0E58A8] underline underline-offset-4 transition hover:text-[#0B3F78]"
                        >
                            Genicular Arterial Embolization
                        </Link>{" "}
                        uses the same embolization approach to treat chronic knee pain by reducing abnormal blood supply to inflamed joint tissue. Both procedures are performed by our Interventional Radiology team at IRCC Pakistan.
                    </>
                ),
            },
            {
                q: "Can plantar fasciitis return after this treatment?",
                a: "Recurrence is possible, especially if underlying causes such as prolonged standing, improper footwear, or weight are not addressed. Our team will guide you on lifestyle and footwear modifications alongside treatment.",
            },
            {
                q: "Are there other tendon or musculoskeletal conditions IR can treat?",
                a: (
                    <>
                        Yes. IRCC Pakistan also treats{" "}
                        <Link
                            href="/Tenosynovitis"
                            className="font-semibold text-[#0E58A8] underline underline-offset-4 transition hover:text-[#0B3F78]"
                        >
                            Tenosynovitis
                        </Link>{" "}
                        inflammation of the tendon sheath and{" "}
                        <Link
                            href="/Radiofrequency-Ablation-of-Osteoid-Osteoma"
                            className="font-semibold text-[#0E58A8] underline underline-offset-4 transition hover:text-[#0B3F78]"
                        >
                            Osteoid Osteoma
                        </Link>{" "}
                        using Radiofrequency Ablation, making us a comprehensive centre for non-surgical musculoskeletal pain management.
                    </>
                ),
            },
            {
                q: "How do I book a consultation?",
                a: "Contact IRCC Pakistan via phone or the online booking form on our website. Our team will arrange an imaging evaluation and clinical assessment to confirm your eligibility for plantar fasciitis embolization treatment.",
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
