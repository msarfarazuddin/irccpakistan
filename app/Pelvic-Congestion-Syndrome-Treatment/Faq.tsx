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
                q: "Is pelvic congestion syndrome a serious condition?",
                a: "While not life-threatening, PCS causes chronic pain that significantly affects daily life, work, and relationships. It is frequently misdiagnosed or dismissed. Early, accurate diagnosis and treatment can provide lasting relief and dramatically improve quality of life.",
            },
            {
                q: "Can PCS be confused with other conditions?",
                a: (
                    <>
                        Yes. PCS symptoms overlap with conditions like{" "}
                        <Link
                            href="/Uterine-Fibroid-Embolization"
                            className="font-semibold text-[#0E58A8] underline underline-offset-4 transition hover:text-[#0B3F78]"
                        >
                            uterine fibroids
                        </Link>
                        ,{" "}
                        <Link
                            href="/Endometriotic-Ovarian-Cyst-Ablation"
                            className="font-semibold text-[#0E58A8] underline underline-offset-4 transition hover:text-[#0B3F78]"
                        >
                            endometriotic ovarian cysts
                        </Link>
                        , irritable bowel syndrome, and urinary tract issues. This is why a thorough diagnostic workup including Doppler ultrasound and venography is essential before treatment.
                    </>
                ),
            },
            {
                q: "How long does the Ovarian Vein Embolization procedure take?",
                a: "The procedure typically takes 60 to 90 minutes and is performed on an outpatient basis. No overnight hospital stay is required patients go home the same day.",
            },
            {
                q: "How soon will I feel relief after the procedure?",
                a: "Many patients notice significant improvement within a few weeks as the treated veins shrink and blood is rerouted. Full relief is generally achieved within 2 to 3 months of the procedure.",
            },
            {
                q: "Will pelvic congestion syndrome come back after embolization?",
                a: "Recurrence is uncommon. With a 90% success rate, ovarian vein embolization provides durable, long-term symptom relief for the majority of patients at IRCC.",
            },
            {
                q: "Is the procedure safe for women who want future pregnancies?",
                a: (
                    <>
                        The procedure does not involve the uterus or fallopian tubes. However, future pregnancy plans should be discussed individually with your IRCC interventional radiologist before proceeding. Women with fertility-related concerns may also benefit from our{" "}
                        <Link
                            href="/Fallopian-Tube-Recanalization"
                            className="font-semibold text-[#0E58A8] underline underline-offset-4 transition hover:text-[#0B3F78]"
                        >
                            Fallopian Tube Recanalization
                        </Link>{" "}
                        service.
                    </>
                ),
            },
            {
                q: "What is the recovery time after Ovarian Vein Embolization?",
                a: "Most patients return to light daily activities within 2 to 5 days. Full recovery is typically achieved within 1 to 2 weeks significantly faster than surgical alternatives.",
            },
            {
                q: "Does PCS only affect women?",
                a: (
                    <>
                        Pelvic congestion syndrome in its classic form affects women. However, men can develop a related condition called{" "}
                        <Link
                            href="/Varicocele-Embolization"
                            className="font-semibold text-[#0E58A8] underline underline-offset-4 transition hover:text-[#0B3F78]"
                        >
                            varicocele
                        </Link>{" "}
                        enlarged veins around the testicles which is also treated with embolization at IRCC.
                    </>
                ),
            },
            {
                q: "How is PCS different from varicose veins?",
                a: "Both conditions involve the same underlying problem weakened vein valves causing blood to pool. Varicose veins affect the legs, while PCS involves the pelvic veins. Both are treated with minimally invasive procedures at IRCC.",
            },
            {
                q: "Why should I choose IRCC for PCS treatment in Pakistan?",
                a: (
                    <>
                        IRCC is Pakistan&apos;s leading interventional radiology center, offering the full spectrum of minimally invasive vascular treatments from PCS and{" "}
                        <Link
                            href="/Uterine-Fibroid-Embolization"
                            className="font-semibold text-[#0E58A8] underline underline-offset-4 transition hover:text-[#0B3F78]"
                        >
                            uterine fibroids
                        </Link>{" "}
                        to{" "}
                        <Link
                            href="/Prostate-Artery-Embolization-for-Benign-Prostatic-Hyperplasia"
                            className="font-semibold text-[#0E58A8] underline underline-offset-4 transition hover:text-[#0B3F78]"
                        >
                            prostate artery embolization
                        </Link>{" "}
                        performed by experienced interventional radiologists using state-of-the-art imaging technology.
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
                        Frequently Asked Questions{" "}
                        <span className="font-semibold text-[#0E58A8]">Pelvic Congestion Syndrome</span>
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
