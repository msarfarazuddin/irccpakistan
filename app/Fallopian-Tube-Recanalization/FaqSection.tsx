"use client";

import Link from "next/link";
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


export default function FaqSection() {
    const faqs = useMemo<FaqItem[]>(
        () => [
            {
                q: "What is Fallopian Tube Recanalization (FTR)?",
                a: " Fallopian Tube Recanalization (FTR) is a minimally invasive, non-surgical procedure performed by an interventional radiologist to clear blockages in the fallopian tubes. It uses a small catheter and microwire guided by X-ray fluoroscopy no incisions, no general anesthesia, and no hospital stay required.",
            },
            {
                q: "Is fallopian tube recanalization painful?",
                a: "No. The procedure is performed under local anesthesia and most patients experience only mild pressure or cramping during the procedure similar to period cramps. Any discomfort typically resolves within a few hours after the procedure.",
            },
            {
                q: "How long does the FTR procedure take? ",
                a: "The procedure typically takes 30–60 minutes. Since it is an outpatient procedure, patients go home the same day and recover in the comfort of their own home.",
            },
            {
                q: "How successful is fallopian tube recanalization? ",
                a: "Interventional radiologists are able to successfully reopen blocked fallopian tubes more than 90% of the time. Among women whose only cause of infertility is a blocked fallopian tube, many are able to conceive naturally following the procedure.",
            },
            {
                q: "How soon can I try to conceive after FTR?",
                a: " Most women can attempt to conceive naturally within 1–2 months following the procedure, once the doctor confirms successful recanalization. Your IRCC physician will advise you on the appropriate timeline based on your individual case.",
            },
            {
                q: "Can both fallopian tubes be treated in one session? ",
                a: "Yes. If both fallopian tubes are blocked, both can be treated during the same procedure session, saving you time and minimizing recovery.",
            },
            {
                q: "Can fallopian tubes get blocked again after FTR? ",
                a: "Yes, there is a possibility of re-blockage over time, especially if the underlying cause (such as endometriosis or pelvic inflammatory disease) is not treated. Regular follow-up and treating root causes is important for long-term success.",
            },
            {
                q: "Is FTR better than IVF for blocked fallopian tubes? ",
                a: "FTR is a simpler, less invasive, and more affordable first-line option compared to IVF. If the sole cause of infertility is a proximal fallopian tube blockage, FTR can restore natural conception ability. IVF may be recommended if FTR is unsuccessful or if other fertility issues are also present. Discuss both options with your IRCC team.",
            },
            {
                q: "What conditions can cause fallopian tube blockages? ",
                a: "Common causes include pelvic inflammatory disease (PID), endometriosis, uterine fibroids, previous pelvic surgery, tubal or ovarian abscesses, and debris buildup in the tubes. Treating these underlying conditions alongside FTR improves long-term outcomes.",
            },
            {
                q: "Is Fallopian Tube Recanalization available in Pakistan?  ",
                a: (
                    <>
                        Yes. IRCC Pakistan offers Fallopian Tube Recanalization performed by expert interventional radiologists.{" "}
                        <Link href="/get-consultation"
                            className="font-semibold text-[#0E58A8] underline underline-offset-4 transition hover:text-[#0B3F78]" >
                            Book an appointment
                        </Link>{" "}
                        today to discuss your fertility treatment options.
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
