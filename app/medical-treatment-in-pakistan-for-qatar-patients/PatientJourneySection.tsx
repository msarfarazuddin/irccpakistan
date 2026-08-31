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
      "Contact the IRCC team from Qatar by WhatsApp, phone or the online form and tell us about your condition.",
    detail:
      "A straightforward process for patients travelling from Qatar to Pakistan for specialist care begins with your first enquiry.",
    label: "Start Remotely",
  },
  {
    number: "02",
    title: "Share Reports",
    icon: FiFileText,
    preview:
      "Send relevant scans, laboratory results, previous treatment records and prescriptions securely for review.",
    detail:
      "Sharing clear medical records helps the team assess whether the requested treatment may be appropriate.",
    label: "Reports & Records",
  },
  {
    number: "03",
    title: "Specialist Review",
    icon: FiUsers,
    preview:
      "An interventional radiologist reviews the available information and determines whether an IRCC procedure may be appropriate.",
    detail:
      "Treatment suitability depends on diagnosis, imaging, clinical details and the procedure being considered.",
    label: "Clinical Review",
  },
  {
    number: "04",
    title: "Treatment Plan",
    icon: FiClipboard,
    preview:
      "You receive guidance on the proposed procedure, investigations, expected stay and treatment planning.",
    detail:
      "The team explains the likely pathway and the next practical steps before travel.",
    label: "Case Planning",
  },
  {
    number: "05",
    title: "Travel to Pakistan",
    icon: FiMapPin,
    preview:
      "Once treatment is planned, our team helps you understand appointment timing and practical pre-travel steps.",
    detail:
      "Travel documents, timing and logistics should be confirmed once the treatment pathway is clear.",
    label: "Travel Ready",
  },
  {
    number: "06",
    title: "Treatment",
    icon: FiPlusSquare,
    preview:
      "Your procedure is performed using appropriate image-guidance and minimally invasive techniques when clinically suitable.",
    detail:
      "The treatment location depends on the procedure and the clinical requirements of your case.",
    label: "Procedure Day",
  },
  {
    number: "07",
    title: "Follow-Up Care",
    icon: FiHeart,
    preview:
      "After treatment, follow-up instructions are provided and continuity of care can be coordinated after you return to Qatar.",
    detail:
      "Recovery guidance, review and follow-up planning depend on the treatment performed and your clinical needs.",
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
            How Qatar Patients Can Get Treatment at{" "}
            <span className="text-[#0e58a8]">IRCC Pakistan</span>
          </h2>
          <div className="mx-auto mt-5 h-px w-24 bg-[#93c5fd]" />
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#49607a] sm:text-lg">
            A straightforward process for patients travelling from Qatar to
            Pakistan for specialist care.
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
                  <p className="w-full text-[13px] font-normal leading-6 text-white/85 lg:max-w-[18ch]">
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
                      <p className="w-full text-[13px] font-normal leading-6 text-white/85 lg:max-w-[18ch]">
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
            Request a Case Review
          </Link>
        </div>
      </div>
    </section>
  );
}
