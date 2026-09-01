"use client";

import Link from "next/link";
import { useState } from "react";
import {
  FiClipboard,
  FiFileText,
  FiHeart,
  FiMapPin,
  FiMessageCircle,
  FiPlusSquare,
  FiUsers,
} from "react-icons/fi";

const patientJourneySteps = [
  {
    number: "01",
    title: "Initial Inquiry",
    icon: FiMessageCircle,
    preview:
      "Tell the IRCC team about your condition, previous treatment and the procedure you are considering.",
    detail:
      "You can contact IRCC from Saudi Arabia and begin your treatment assessment before planning travel.",
    label: "Start Remotely",
  },
  {
    number: "02",
    title: "Share Medical Reports",
    icon: FiFileText,
    preview:
      "Provide relevant reports, scans, prescriptions or previous treatment records for review.",
    detail:
      "Sharing clear, recent reports helps the team understand your case and advise on the next step.",
    label: "Reports & Records",
  },
  {
    number: "03",
    title: "Clinical Review",
    icon: FiUsers,
    preview:
      "The case is reviewed to determine whether an IRCC procedure may be suitable.",
    detail:
      "Treatment suitability depends on the clinical details, investigations and the procedure being considered.",
    label: "Clinical Review",
  },
  {
    number: "04",
    title: "Treatment Plan",
    icon: FiClipboard,
    preview:
      "If appropriate, the recommended procedure, investigations and treatment location are discussed.",
    detail:
      "The team can help outline the likely treatment pathway and what preparation may be needed.",
    label: "Case Planning",
  },
  {
    number: "05",
    title: "Travel Planning",
    icon: FiMapPin,
    preview:
      "Once your appointment and treatment plan are confirmed, arrange your travel to Pakistan.",
    detail:
      "Patients should confirm travel documents, timing and logistics after the treatment pathway is clear.",
    label: "Travel Ready",
  },
  {
    number: "06",
    title: "Treatment",
    icon: FiPlusSquare,
    preview:
      "The procedure is performed at the appropriate IRCC treatment location.",
    detail:
      "The exact location depends on the procedure and the clinical requirements of the case.",
    label: "Procedure Day",
  },
  {
    number: "07",
    title: "Follow-Up",
    icon: FiHeart,
    preview:
      "Follow-up instructions are provided according to your procedure and clinical needs.",
    detail:
      "The team can explain what recovery guidance, review or monitoring is recommended after treatment.",
    label: "Aftercare",
  },
] as const;

export default function PatientJourneySection() {
  const [expandedStep, setExpandedStep] = useState<string | null>(null);

  return (
    <section className="bg-[linear-gradient(180deg,#f7fbfc_0%,#ffffff_100%)] py-14 [font-family:var(--font-neue-montreal),var(--font-geist-sans),Arial,Helvetica,sans-serif] sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#0e58a8]">
            Patient Journey
          </span>
          <h2 className="mt-4 text-[28px] leading-tight text-[#0d1728] sm:text-4xl lg:text-[52px]">
            How Patients from Saudi Arabia Can Get Treatment at{" "}
            <span className="text-[#0e58a8]">IRCC Pakistan</span>
          </h2>
          <div className="mx-auto mt-5 h-px w-24 bg-[#93c5fd]" />
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#49607a] sm:text-lg">
            A planned medical visit starts with a review of your condition. You
            can contact IRCC from Saudi Arabia, provide relevant reports and
            discuss whether an in-person procedure in Pakistan is appropriate.
          </p>
        </div>

        <div className="-mx-4 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 pt-6 sm:-mx-6 sm:px-6 lg:mx-0 lg:grid lg:overflow-visible lg:px-0 lg:pb-0 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-7">
          {patientJourneySteps.map((step) => {
            const Icon = step.icon;
            const isExpanded = expandedStep === step.number;

            return (
              <article
                key={step.number}
                className="relative flex min-h-[344px] w-[88vw] min-w-[88vw] snap-center flex-col items-start rounded-[24px] border border-[#0e58a8] bg-[#0e58a8] px-5 pb-4 pt-10 text-left text-white shadow-[0_12px_30px_rgba(14,88,168,0.16)] sm:w-[420px] sm:min-w-[420px] lg:min-w-0 lg:w-auto"
              >
                <div className="absolute left-1/2 top-0 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-[#f7fbfc] bg-[#0b4a8d] text-lg font-semibold text-white shadow-sm">
                  {step.number.replace(/^0/, "")}
                </div>

                <div className="mt-1 flex h-[65px] w-[65px] items-center justify-center rounded-full bg-white/15 text-white">
                  <Icon className="h-9 w-9" />
                </div>

                <h3 className="mt-5 text-[16px] font-medium leading-7 text-white">
                  {step.title}
                </h3>
                <div className="mt-3 h-0.5 w-11 rounded-full bg-[#94cdc7]" />

                <div className="mt-4 flex w-full flex-1 flex-col items-start">
                  <p className="w-full text-[13px] font-normal leading-6 text-white/85 ">
                    {step.preview}
                  </p>

                  <div
                    className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ${
                      isExpanded
                        ? "mt-3 grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="w-full text-[13px] font-normal leading-6 text-white/85 ">
                        {step.detail}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      setExpandedStep((current) =>
                        current === step.number ? null : step.number
                      )
                    }
                    className="mt-3 text-[13px] font-semibold text-white underline-offset-4 transition hover:text-[#dbeafe] hover:underline"
                  >
                    {isExpanded ? "Read less" : "Read more"}
                  </button>
                </div>

                <div className="mt-4 flex w-full items-center justify-start gap-2 rounded-[16px] bg-white/15 px-3 py-3 text-[12px] font-semibold text-white">
                  <Icon className="h-4 w-4 shrink-0" />
                  <span>{step.label}</span>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-4 text-center text-[13px] leading-6 text-[#5b6f88] lg:hidden">
          Swipe left or right to view all steps.
        </p>

        <div className="mt-8 flex justify-center">
          <Link
            href="/get-consultation"
            className="inline-flex items-center justify-center rounded-[18px] bg-[linear-gradient(90deg,#0e58a8_0%,#0b4a8d_100%)] px-7 py-4 text-base font-semibold text-white transition hover:opacity-95"
          >
            Start My Treatment Assessment
          </Link>
        </div>
      </div>
    </section>
  );
}
