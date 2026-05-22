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
        q: "What is Prostate Artery Embolization (PAE)?",
        a: "PAE is a minimally invasive, non-surgical procedure in which an interventional radiologist blocks the blood supply to the prostate gland using tiny microsphere particles. This causes the prostate to shrink, relieving urinary symptoms caused by BPH (enlarged prostate). No surgery, no general anesthesia, and no overnight hospital stay is required.",
      },
      {
        q: "Is PAE painful? ",
        a: "No. The procedure is performed under conscious sedation and local anesthesia. Most patients experience minimal discomfort during the procedure. Some mild pelvic discomfort or urinary symptoms may occur for a few days after, which resolves on its own.",
      },
      {
        q: "How long does the PAE procedure take? ",
        a: "The procedure typically takes 1–3 hours depending on the anatomy. Patients are usually discharged within 3 hours after the procedure is complete the same day.",
      },
      {
        q: "How soon will I see improvement in my urinary symptoms after PAE?",
        a: "Most patients begin noticing improvement in urinary symptoms within 2–4 weeks after the procedure. Maximum improvement is typically seen at 3–6 months post-procedure as the prostate continues to shrink.",
      },
      {
        q: "Will PAE affect my sexual function?",
        a: " Unlike surgical alternatives such as TURP (Transurethral Resection of the Prostate), PAE does not cause retrograde ejaculation or sexual dysfunction. Preserving sexual function is one of the key advantages of PAE over surgery making it a preferred choice for many men.",
      },
      {
        q: "How is Thyroid RFA different from thyroid surgery? ",
        a: "Thyroid surgery requires general anesthesia, a surgical incision in the neck, hospital stay, and carries risks such as permanent voice changes or damage to parathyroid glands. Thyroid RFA requires none of these it is scarless, performed under local anesthesia, and patients go home within 30 minutes.",
      },
      {
        q: "What is the success rate of PAE? ",
        a: "Clinical studies show that PAE results in significant improvement in urinary symptoms in approximately 80–90% of patients. It also leads to meaningful reduction in prostate volume over time.",
      },
      {
        q: "How is PAE different from TURP (surgery)? ",
        a: "TURP is a surgical procedure that requires general or spinal anesthesia, hospital admission, and carries risks of bleeding, infection, and sexual dysfunction. PAE requires none of these; it is performed under conscious sedation, requires only a tiny nick in the skin, and patients go home the same day with minimal recovery time.",
      },
      {
        q: "Can PAE be performed if I have prostate cancer?",
        a: (
        <>
            No. PAE is specifically for BPH a noncancerous enlargement of the prostate. If prostate cancer is suspected or confirmed, a different treatment pathway is required. All candidates are screened with a PSA test before PAE. For cancer-related concerns, our{" "}
            <Link href="/Interventional-Oncology"
              className="font-semibold text-[#0E58A8] underline underline-offset-4 transition hover:text-[#0B3F78]" >
              Interventional Oncology
            </Link>{" "}
            team can help.
          </>
        ),
      },
      {
        q: "Is PAE covered by insurance in Pakistan?",
        a: "Insurance coverage varies depending on your provider and plan. We recommend contacting your insurance provider directly to confirm coverage. Our IRCC team can also assist with documentation required for insurance claims.",
      },
      {
        q: "Is Prostate Artery Embolization available in Pakistan?",
        a: (
        <>
            Yes. IRCC Pakistan offers PAE performed by expert interventional radiologists.{" "}
            <Link href="/get-consultation"
              className="font-semibold text-[#0E58A8] underline underline-offset-4 transition hover:text-[#0B3F78]" >
              Book an appointment
            </Link>{" "}
            today to determine if PAE is the right treatment option for you.
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
