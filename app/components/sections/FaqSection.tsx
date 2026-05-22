"use client";

import { useMemo, useState } from "react";

type FaqItem = {
  q: string;
  a: string;
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
        q: "What is the difference between minimally invasive procedures and surgery?",
        a: "Minimally invasive procedures allow physicians to treat conditions using image-guided techniques through tiny access points instead of large incisions. This often means less pain, quicker recovery, and shorter hospital stays compared to traditional surgery.",
      },
      {
        q: "What are the advantages of minimally invasive procedures?",
        a: "Common advantages include smaller wounds, reduced pain, minimal scarring, faster recovery, shorter hospital stays, and lower risk of complications in many cases.",
      },
      {
        q: "What investigations are required before consultations?",
        a: "Usually your doctor may request prior imaging (Ultrasound/CT/MRI), blood tests, or relevant reports depending on your condition. Bring any previous medical records and scans to help guide your evaluation.",
      },
      {
        q: "What are the possible risks?",
        a: "All procedures carry some risk. Depending on the procedure, risks may include bleeding, infection, contrast reaction, or injury to nearby structures. Your doctor will discuss risks specific to your case before proceeding.",
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
