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
                q: "What is an endometriotic ovarian cyst (chocolate cyst)?",
                a: "An endometriotic ovarian cyst also called an endometrioma or chocolate cyst is a cyst that forms inside the ovary when endometrial-like tissue grows there and fills with old blood over time. It is called a chocolate cyst because the old blood inside gives it a dark brown, chocolate-like appearance.",
            },
            {
                q: "Is endometriotic ovarian cyst ablation painful?",
                a: "No. The procedure is performed under local anesthesia, so you will feel little to no pain during treatment. Mild pelvic cramping or discomfort may occur for 1–2 days after the procedure, which is easily managed with over-the-counter pain medication.",
            },
            {
                q: "How long does the cyst ablation procedure take?",
                a: "The procedure typically takes 30–60 minutes. It is performed on an outpatient basis patients go home the same day and recover comfortably at home.",
            },
            {
                q: "Will cyst ablation preserve my fertility? ",
                a: "Yes. One of the key advantages of minimally invasive cyst ablation over surgical removal is that it preserves healthy ovarian tissue protecting your ovarian reserve and fertility. This is particularly important for younger women who wish to conceive in the future.",
            },
            {
                q: "How soon will I notice pain relief after the procedure? ",
                a: "Most patients begin experiencing significant relief from pelvic pain within 2–4 weeks following the procedure as the cyst shrinks and the body absorbs it. Follow-up ultrasound scans are scheduled to monitor progress.",
            },
            {
                q: "Can endometriotic cysts come back after ablation? ",
                a: "There is a possibility of recurrence, especially if the underlying endometriosis is not managed with appropriate hormonal therapy. However, the use of sclerosant agents during ablation significantly reduces the chance of the same cyst recurring. Regular follow-up is recommended.",
            },
            {
                q: "How is cyst ablation different from laparoscopic surgery?",
                a: "Laparoscopic surgery requires general anesthesia, multiple incisions, hospital admission, and a recovery period of several weeks. Cyst ablation is performed under local anesthesia, requires no incisions, takes less than an hour, and patients go home the same day with significantly faster recovery and lower risk.",
            },
            {
                q: "Can I get pregnant after endometriotic cyst ablation?",
                a: (
                    <>
                        Many women are able to conceive naturally after cyst ablation, particularly when blocked fallopian tubes or other issues are also addressed. If fallopian tube blockage is also a concern,{" "}
                        <Link href="/Fallopian-Tube-Recanalization"
                            className="font-semibold text-[#0E58A8] underline underline-offset-4 transition hover:text-[#0B3F78]" >
                            Fallopian Tube Recanalization
                        </Link>{" "}
                        may be recommended alongside cyst ablation for best fertility outcomes.
                    </>
                ),
            },
            {
                q: "What size of cyst can be treated with ablation? ",
                a: "Cyst ablation is generally suitable for cysts of varying sizes. Larger cysts may require more than one session for complete treatment. Your IRCC interventional radiologist will evaluate your cyst size and characteristics through ultrasound or MRI before recommending the appropriate treatment plan.",
            },
            {
                q: "Is endometriotic ovarian cyst ablation available in Pakistan? ",
                a: (
                    <>
                        Yes. IRCC Pakistan offers advanced image-guided endometriotic ovarian cyst ablation performed by expert interventional radiologists. {" "}
                        <Link href="/get-consultation"
                            className="font-semibold text-[#0E58A8] underline underline-offset-4 transition hover:text-[#0B3F78]" >
                            Book an appointment
                        </Link>{" "}
                        today to discuss your treatment options and take the first step toward pain relief and better reproductive health.
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
