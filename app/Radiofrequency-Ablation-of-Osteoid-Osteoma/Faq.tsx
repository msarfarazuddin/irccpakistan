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
                q: "Is Radiofrequency Ablation safe for treating osteoid osteoma?",
                a: "Yes. RFA is a well-established, proven treatment for osteoid osteoma with a high success rate. Studies show over 85-90% of patients achieve complete pain relief after a single procedure. It is considered the gold standard minimally invasive treatment for this condition.",
            },
            {
                q: "Is the procedure painful?",
                a: "RFA is performed under general or regional anaesthesia, so you will not feel pain during the procedure. Post-procedure discomfort is usually mild and manageable with standard pain medication for a few days.",
            },
            {
                q: "How long does the procedure take?",
                a: "The procedure typically takes 1 to 2 hours including preparation and imaging. Most patients are discharged on the same day or within 24 hours.",
            },
            {
                q: "What is the recovery time after RFA for osteoid osteoma?",
                a: "Most patients return to school or light work within a few days. Full return to physical activity is typically possible within 2 to 6 weeks depending on the tumor location and the patient's age.",
            },
            {
                q: "Can the tumor come back after RFA?",
                a: "Recurrence after RFA is uncommon. In cases where the tumor does recur, a repeat RFA procedure can usually be performed successfully.",
            },
            {
                q: "Is RFA suitable for children?",
                a: "Yes. Since osteoid osteoma most commonly affects children and young adults, RFA is frequently performed in pediatric patients. The procedure is safe and avoids the more significant risks of open surgery in growing patients.",
            },
            {
                q: "How is RFA different from open surgery for osteoid osteoma?",
                a: "Open surgery involves larger incisions, longer hospital stays, and extended recovery periods. RFA uses a tiny probe guided by CT imaging no large cuts, minimal blood loss, and patients typically go home the same day with a return to normal activities within days rather than weeks.",
            },
            {
                q: "Are there other bone or musculoskeletal conditions IR can treat?",
                a: (
                    <>
                        Yes. IRCC Pakistan also treats chronic joint and soft tissue pain through{" "}
                        <Link
                            href="/Genicular-Arterial-Embolization-for-Knee-Pain"
                            className="font-semibold text-[#0E58A8] underline underline-offset-4 transition hover:text-[#0B3F78]"
                        >
                            Genicular Arterial Embolization for Knee Pain
                        </Link>
                        ,{" "}
                        <Link
                            href="/Tenosynovitis"
                            className="font-semibold text-[#0E58A8] underline underline-offset-4 transition hover:text-[#0B3F78]"
                        >
                            Tenosynovitis
                        </Link>
                        , and{" "}
                        <Link
                            href="/Plantar-Fasciitis"
                            className="font-semibold text-[#0E58A8] underline underline-offset-4 transition hover:text-[#0B3F78]"
                        >
                            Plantar Fasciitis
                        </Link>{" "}
                        all without surgery.
                    </>
                ),
            },
            {
                q: "How is osteoid osteoma different from bone cancer?",
                a: (
                    <>
                        Osteoid osteoma is a benign (non-cancerous) bone tumor. It does not spread to other parts of the body. However, if there is any concern about malignancy, IRCC Pakistan&apos;s{" "}
                        <Link
                            href="/Interventional-Oncology"
                            className="font-semibold text-[#0E58A8] underline underline-offset-4 transition hover:text-[#0B3F78]"
                        >
                            Interventional Oncology
                        </Link>{" "}
                        team will guide further evaluation and appropriate management.
                    </>
                ),
            },
            {
                q: "How do I book a consultation at IRCC Pakistan?",
                a: "Contact IRCC Pakistan via phone or the online booking form on our website. Our team will review your imaging, confirm the diagnosis, and advise on whether RFA is the right treatment for your osteoid osteoma.",
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
