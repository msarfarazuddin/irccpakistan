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
                q: "Is Hemorrhoidal Artery Embolization painful? ",
                a: "HAE is performed under local anesthesia with sedation, so you remain comfortable throughout. Most patients experience only mild discomfort after the procedure, which is significantly less than post-surgical pain.",
            },
            {
                q: "How long does the HAE procedure take? ",
                a: "The procedure typically takes 45 to 90 minutes depending on the complexity of the case.",
            },
            {
                q: "What is the recovery time after HAE? ",
                a: "Most patients return to light daily activities within 1–3 days. There are no surgical cuts, so recovery is much faster compared to traditional haemorrhoid surgery.",
            },
            {
                q: "Will my haemorrhoids come back after HAE?",
                a: "HAE provides long-term symptom relief for most patients. However, recurrence can happen if underlying causes like chronic constipation are not addressed. Our team guides you on lifestyle changes to reduce this risk.",
            },
            {
                q: "Is general anesthesia required for HAE? ",
                a: "No. HAE requires only local anesthesia with sedation not general anesthesia making it a safer option for patients with higher surgical risk.",
            },
            {
                q: "How is HAE different from traditional haemorrhoid surgery?",
                a: " Traditional surgery involves cuts, stitches, and longer recovery. HAE is incision-free, performed through a tiny puncture in the wrist or groin, with minimal downtime and less post-procedure pain.",
            },
            {
                q: "Who performs HAE at IRCC Pakistan? ",
                a: (
                    <>
                        HAE is performed by our specialist Interventional Radiologists who are trained in image-guided, minimally invasive procedures the same experts who perform{" "}
                        <Link href="/Varicose-Vein-Ablation"
                            className="font-semibold text-[#0E58A8] underline underline-offset-4 transition hover:text-[#0B3F78]" >
                            Varicose Vein Ablation
                        </Link>{" "}
                        and other advanced vascular treatments.
                    </>
                ),
            },
            {
                q: "How do I know if I am eligible for HAE? ",
                a: "You will need a clinical evaluation at our clinic. Contact IRCC Pakistan to book a consultation and our team will assess your condition and recommend the most suitable treatment.",
            },

        ],
        []
    );

    const [openIndex, setOpenIndex] = useState<number>(0);

    return (
        <section className="relative w-full overflow-hidden bg-white py-16  bg-center bg-no-repeat" style={{ backgroundImage: "url('/faq.png')" }}>
            {/* soft wave background */}
            {/* <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-28 top-44 h-72 w-[520px] rounded-[999px] bg-[#0E58A8]/6 blur-[1px]" />
        <div className="absolute -right-32 top-28 h-80 w-[560px] rounded-[999px] bg-[#0E58A8]/6 blur-[1px]" />
        <div className="absolute left-1/2 top-[520px] h-72 w-[760px] -translate-x-1/2 rounded-[999px] bg-[#0E58A8]/5 blur-[1px]" />
      </div> */}

            <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                {/* heading */}
                <div className="text-center">
                    <h4 className="text-3xl lg:text-4xl tracking-tight text-[#0B1220] sm:text-4xl">
                        Frequently <span className="font-semibold text-[#0E58A8]">Asked Questions</span>
                    </h4>
                </div>

                {/* accordion */}
                <div className="mx-auto mt-10 max-w-4xl">
                    <div className="rounded-3xl  p-3 ">
                        <div className="space-y-3">
                            {faqs.map((item, idx) => {
                                const isOpen = idx === openIndex;

                                return (
                                    <div
                                        key={item.q}
                                        className={[
                                            "rounded-2xl border bg-white transition shadow-[0_25px_70px_rgba(0,0,0,0.08)]",
                                            isOpen
                                                ? "border-[#0E58A8]/25 "
                                                : "border-[#0E58A8]/15",
                                        ].join(" ")}
                                    >
                                        <button
                                            type="button"
                                            className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                                            aria-expanded={isOpen}
                                            onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                                        >
                                            <span className="text-base mobilew text-[#0E58A8] sm:text-lg">
                                                {item.q}
                                            </span>

                                            <span
                                                className={[
                                                    "inline-flex h-11 w-11 items-center justify-center rounded-full border transition ",
                                                    isOpen
                                                        ? "border-[#0E58A8]/15 bg-[#0E58A8] text-[#ffffff]"
                                                        : "border-[#0E58A8]/15  text-[#0E58A8]",
                                                ].join(" ")}
                                                aria-hidden="true"
                                            >
                                                {isOpen ? (
                                                    // minus
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
                                                    // plus
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

                                        {/* answer */}
                                        <div
                                            className={[
                                                "grid overflow-hidden px-6 transition-[grid-template-rows,opacity] duration-300",
                                                isOpen
                                                    ? "grid-rows-[1fr] pb-5 opacity-100"
                                                    : "grid-rows-[0fr] pb-0 opacity-0",
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

                        {/* CTA */}
                        <div className="mt-10 flex justify-center pb-2">
                            <a
                                href={""}
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
