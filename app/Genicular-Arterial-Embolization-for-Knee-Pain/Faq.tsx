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
                q: "What is Genicular Arterial Embolization (GAE)? ",
                a: "GAE is a minimally invasive, non-surgical procedure in which an interventional radiologist uses tiny embolic particles to block abnormal blood vessels in the knee that are causing chronic inflammation and pain particularly due to osteoarthritis. It is performed under local anesthesia with no incisions and no hospital stay required.",
            },
            {
                q: "Is GAE painful? ",
                a: " No. The procedure is performed under local anesthesia so you will feel little to no pain during treatment. Mild soreness at the catheter entry site and temporary knee warmth may be experienced for 1–2 days after, which resolves quickly on its own.",
            },
            {
                q: "How long does the PAE procedure take? ",
                a: "GAE typically takes 60–90 minutes. It is an outpatient procedure patients go home the same day without requiring hospital admission.",
            },
            {
                q: "How soon will I feel pain relief after GAE?",
                a: "Most patients begin experiencing gradual pain reduction within 2–6 weeks after the procedure. Maximum pain relief and improvement in mobility is typically achieved at 3–6 months. Combining GAE with physiotherapy can further enhance and speed up recovery.",
            },
            {
                q: "Is GAE a permanent solution for knee pain?",
                a: "GAE provides significant and lasting pain relief for most patients. However, as osteoarthritis is a progressive condition, some patients may require repeat treatment over time. GAE is particularly effective as a strategy to delay or avoid knee replacement surgery for as long as possible.",
            },
            {
                q: "How is GAE different from knee replacement surgery?",
                a: "Knee replacement is a major surgical procedure requiring general anesthesia, hospital admission, and months of recovery. GAE requires no surgery, no general anesthesia, no hospital stay, and patients return to light activities within 1–2 days. GAE is ideal for patients who want to avoid or delay surgery.",
            },
            {
                q: "Can GAE replace knee replacement surgery entirely?",
                a: " For patients with mild to moderate osteoarthritis, GAE can provide sufficient long-term relief and significantly delay the need for knee replacement. For advanced osteoarthritis with severe joint damage, knee replacement may eventually be required but GAE can provide meaningful relief in the meantime.",
            },
            {
                q: "Are steroid injections or physiotherapy better than GAE?",
                a: "Steroid injections and physiotherapy are often the first line of treatment for knee pain. GAE is recommended when these conservative treatments have failed to provide adequate relief. GAE addresses the root cause of inflammation at the vascular level offering more durable results than repeated steroid injections.",
            },
            {
                q: "Who is NOT suitable for GAE? ",
                a: "GAE may not be suitable for patients with severe end-stage osteoarthritis, active knee infection, severe peripheral vascular disease, or certain allergies to contrast dye. A thorough evaluation by our IRCC interventional radiologist will determine your suitability.",
            },
            {
                q: "Is Genicular Arterial Embolization available in Pakistan?",
                a: (
                    <>
                        Yes. IRCC Pakistan offers GAE for chronic knee pain performed by expert interventional radiologists.{" "}
                        <Link href="/get-consultation"
                            className="font-semibold text-[#0E58A8] underline underline-offset-4 transition hover:text-[#0B3F78]" >
                            Book an appointment
                        </Link>{" "}
                        today to find out if GAE is the right treatment for your knee pain.
                    </>
                ),
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
