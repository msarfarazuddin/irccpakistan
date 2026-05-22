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
        q: "What is Uterine Fibroid Embolization (UFE)? ",
        a: "Uterine Fibroid Embolization (UFE) is a minimally invasive, non-surgical procedure in which an interventional radiologist blocks the blood supply to uterine fibroids, causing them to shrink and die. It is performed under local anesthesia without any surgical incisions.",
      },
      {
        q: "Is UFE painful? ",
        a: "The procedure typically takes 45 minutes to 1 hour. Since it is an outpatient procedure, most patients go home the same day.",
      },
      {
        q: "How soon can I return to normal activities after varicocele embolization?",
        a: "Most patients return to light daily activities within 1–2 days. Full recovery is usually achieved within 7–10 days — significantly faster than open surgery which can take several weeks.",
      },
      {
        q: "Will varicocele embolization improve my fertility?",
        a: "In many cases, yes. Studies show that varicocele treatment can improve sperm count, motility, and quality. However, results vary per individual and are not guaranteed. We recommend consulting with our IRCC team for a personalised assessment.",
      },
      {
        q: "Is there any scarring after the procedure?",
        a: "No. Varicocele embolization requires only a tiny nick in the skin (at the groin or wrist) — no stitches, no surgical incision, and no scarring.",
      },
       {
        q: "What is the success rate of varicocele embolization?",
        a: "Varicocele embolization has a success rate of approximately 90%, which is comparable to or better than surgical options, with a lower risk of complications.",
      },
      {
        q: "Can varicocele come back after embolization? ",
        a: "Recurrence is rare but possible. The recurrence rate for embolization is similar to surgery. Regular follow-up with your interventional radiologist is recommended.",
      },
       {
        q: "Is general anesthesia required?",
        a: "No. Only local anesthesia and a mild sedative are used. This makes it safer than surgical alternatives, especially for patients who cannot tolerate general anesthesia.",
      },
      {
        q: "How is varicocele embolization different from surgery?",
        a: "Unlike surgery, embolization is incision-free, requires no general anesthesia, has no scarring, and offers a much faster recovery. It is performed by an interventional radiologist rather than a surgeon.",
      },
      {
        q: "Where can I get varicocele embolization in Pakistan?",
        a: (
          <>
            IRCC Pakistan offers varicocele embolization performed by expert
            interventional radiologists. We have clinics in Lahore, and offer
            consultations across Pakistan.{" "}
            <Link
              href="/get-consultation"
              className="font-semibold text-[#0E58A8] underline underline-offset-4 transition hover:text-[#0B3F78]"
            >
              Book an appointment today
            </Link>{" "}
            to discuss your treatment options.
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
