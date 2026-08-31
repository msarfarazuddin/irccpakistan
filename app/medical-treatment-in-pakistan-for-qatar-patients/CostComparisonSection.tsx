"use client";

import Link from "next/link";
import {
  FiBarChart2,
  FiCheckCircle,
  FiClipboard,
  FiDollarSign,
  FiInfo,
  FiShield,
} from "react-icons/fi";
import { TbMapDollar, TbStethoscope } from "react-icons/tb";
import { GiFemale, GiMale } from "react-icons/gi";

function PakistanFlagBadge() {
  return (
    <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border border-white/15 bg-[#01411c]">
      <span className="absolute inset-y-0 left-0 w-[30%] bg-white" />
      <span className="absolute left-[44%] top-[24%] h-4 w-4 rounded-full bg-white" />
      <span className="absolute left-[48%] top-[24%] h-4 w-4 rounded-full bg-[#01411c]" />
      <span
        className="absolute left-[70%] top-[32%] h-1.5 w-1.5 bg-white"
        style={{
          clipPath:
            "polygon(50% 0%, 61% 36%, 98% 36%, 68% 57%, 79% 92%, 50% 70%, 21% 92%, 32% 57%, 2% 36%, 39% 36%)",
        }}
      />
    </span>
  );
}

function QatarFlagBadge() {
  return (
    <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border border-white/15">
      <span className="absolute inset-0 bg-[#8a1538]" />
      <span
        className="absolute inset-y-0 left-0 w-[42%] bg-white"
        style={{
          clipPath:
            "polygon(0 0, 78% 0, 100% 10%, 78% 20%, 100% 30%, 78% 40%, 100% 50%, 78% 60%, 100% 70%, 78% 80%, 100% 90%, 78% 100%, 0 100%)",
        }}
      />
    </span>
  );
}

function PercentageBadge() {
  return (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/12 text-[18px] font-semibold leading-none text-white">
      %
    </span>
  );
}

const comparisonRows = [
  {
    title: "Uterine Fibroid Embolization (UFE)",
    pakistanCost: "IRCC-verified range",
    qatarCost: "Qatar-verified range",
    difference: "Calculate after verification",
    icon: GiFemale,
  },
  {
    title: "Varicocele Embolization",
    pakistanCost: "IRCC-verified range",
    qatarCost: "Qatar-verified range",
    difference: "Calculate after verification",
    icon: GiMale,
  },
  {
    title: "Thyroid Radiofrequency Ablation (RFA)",
    pakistanCost: "IRCC-verified range",
    qatarCost: "Qatar-verified range",
    difference: "Calculate after verification",
    icon: FiClipboard,
  },
  {
    title: "Varicose Vein Ablation",
    pakistanCost: "IRCC-verified range",
    qatarCost: "Qatar-verified range",
    difference: "Calculate after verification",
    icon: FiShield,
  },
  {
    title: "Prostate Artery Embolization (PAE)",
    pakistanCost: "IRCC-verified range",
    qatarCost: "Qatar-verified range",
    difference: "Calculate after verification",
    icon: FiDollarSign,
  },
] as const;

const quickPoints = [
  {
    label: "Verification Pending",
    icon: TbMapDollar,
  },
  {
    label: "Case-Specific Fees",
    icon: FiShield,
  },
  {
    label: "Planning Support",
    icon: TbStethoscope,
  },
] as const;

export default function CostComparisonSection() {
  return (
    <section className="bg-[linear-gradient(180deg,#ffffff_0%,#f7fbfc_100%)] py-14 [font-family:var(--font-neue-montreal),var(--font-geist-sans),Arial,Helvetica,sans-serif] sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-5xl text-center">
          <span className="inline-flex items-center gap-3 rounded-full border border-[#bfdbfe] bg-[#f5f9ff] px-5 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#0e58a8] sm:text-sm">
            <FiBarChart2 className="h-5 w-5" />
            Cost Comparison
          </span>

          <h2 className="mt-6 text-[28px] leading-tight text-[#0d1728] sm:text-4xl lg:text-[54px]">
            Medical Treatment Cost in Pakistan vs Qatar
          </h2>

          <p className="mt-5 text-[18px] font-medium leading-8 text-[#0e58a8]">
            Compare Treatment Costs Before You Travel
          </p>

          <p className="mx-auto mt-5 max-w-4xl text-base leading-8 text-[#4c6179] sm:text-lg">
            The cost of a procedure depends on the diagnosis, clinical
            complexity, investigations, facility requirements, physician
            assessment and treatment plan. A comparison can help with initial
            planning, but the final fee should always be confirmed after case
            review.
          </p>
        </div>

        <div className="mt-10 grid gap-5 xl:grid-cols-[370px_minmax(0,1fr)]">
          <aside className="rounded-[28px] border border-[#dbeafe] bg-white p-5 shadow-[0_20px_50px_rgba(14,72,92,0.05)] sm:p-6">
            <div className="mx-auto flex h-25 w-25 items-center justify-center rounded-full border-2 border-dashed border-[#93c5fd] bg-[#f5f9ff] text-[#0e58a8]">
              <FiClipboard className="h-16 w-16" />
            </div>

            <h3 className="mt-8 text-center text-[26px] leading-tight text-[#0d1728]">
              Estimated Cost Comparison (QAR)
            </h3>
            <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-[#0e58a8]" />

            <p className="mx-auto mt-6 max-w-[35ch] text-center text-[15px] leading-6 text-[#4c6179]">
              Request a case-specific estimate after your medical reports have
              been reviewed.
            </p>

            <div className="mt-6 flex items-start gap-3 rounded-[18px] border border-[#dbeafe] bg-[#f5f9ff] px-4 py-4 text-[#0e58a8]">
              <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white">
                <FiCheckCircle className="h-5 w-5" />
              </span>
              <p className="text-[15px] leading-5">
                Do not publish invented or unverified Qatar price ranges.
                Verify Pakistan and Qatar figures before launch.
              </p>
            </div>

            <Link
              href="#qatar-case-review-form"
              className="mt-5 inline-flex w-full items-center justify-center gap-3 rounded-[18px] bg-[linear-gradient(90deg,#0e58a8_0%,#0b4a8d_100%)] px-5 py-4 text-base font-semibold text-white transition hover:opacity-95"
            >
              <FiDollarSign className="h-5 w-5" />
              Get My Estimated Treatment Cost
            </Link>

            <div className="mt-6 grid grid-cols-3 gap-3 border-t border-[#dbeafe] pt-6">
              {quickPoints.map((point) => {
                const Icon = point.icon;

                return (
                  <div key={point.label} className="text-center">
                    <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#f5f9ff] text-[#0e58a8]">
                      <Icon className="h-6 w-6" />
                    </span>
                    <p className="mt-3 text-[13px] leading-6 text-[#0d1728]">
                      {point.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </aside>

          <div className="overflow-hidden rounded-[28px] border border-[#dbeafe] bg-white shadow-[0_20px_50px_rgba(14,72,92,0.05)]">
            <div className="hidden grid-cols-[1.3fr_0.9fr_0.9fr_0.8fr] bg-[linear-gradient(90deg,#0e58a8_0%,#0d5aa3_50%,#0b4a8d_100%)] text-white md:grid">
              <div className="flex items-center gap-3 border-r border-white/10 px-6 py-5 text-lg font-medium">
                <FiClipboard className="h-6 w-6" />
                <span>Treatment / Procedure</span>
              </div>
              <div className="flex items-center gap-3 border-r border-white/10 px-6 py-5 text-lg font-medium">
                <PakistanFlagBadge />
                <span>Estimated Cost in Pakistan</span>
              </div>
              <div className="flex items-center gap-3 border-r border-white/10 px-6 py-5 text-lg font-medium">
                <QatarFlagBadge />
                <span>Estimated Cost in Qatar</span>
              </div>
              <div className="flex items-center gap-3 px-6 py-5 text-lg font-medium">
                <PercentageBadge />
                <span>Estimated Difference</span>
              </div>
            </div>

            <div className="divide-y divide-[#dbeafe]">
              {comparisonRows.map((row) => {
                const Icon = row.icon;

                return (
                  <div
                    key={row.title}
                    className="grid gap-4 px-4 py-5 sm:px-5 md:grid-cols-[1.3fr_0.9fr_0.9fr_0.8fr] md:items-center md:gap-0 md:px-0 md:py-0"
                  >
                    <div className="flex items-center gap-4 md:border-r md:border-[#dbeafe] md:px-6 md:py-[30px]">
                      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#eff6ff] text-[#0e58a8]">
                        <Icon className="h-7 w-7" />
                      </span>
                      <h3 className="text-[17px] font-medium leading-8 text-[#0d1728]">
                        {row.title}
                      </h3>
                    </div>

                    <div className="md:border-r md:border-[#dbeafe] md:px-6 md:py-[10px] md:text-center">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#678090] md:hidden">
                        Pakistan Cost
                      </p>
                      <p className="mt-1 text-[17px] leading-8 text-[#0d1728] md:mt-0">
                        {row.pakistanCost}
                      </p>
                    </div>

                    <div className="md:border-r md:border-[#dbeafe] md:px-6 md:py-[10px] md:text-center">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#678090] md:hidden">
                        Qatar Cost
                      </p>
                      <p className="mt-1 text-[17px] leading-8 text-[#0d1728] md:mt-0">
                        {row.qatarCost}
                      </p>
                    </div>

                    <div className="md:px-6 md:py-[10px] md:text-center">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#678090] md:hidden">
                        Difference
                      </p>
                      <p className="mt-1 text-[17px] font-semibold leading-6 text-[#147733] md:mt-0">
                        {row.difference}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-6xl rounded-[24px] border border-[#dbeafe] bg-white px-5 py-4 sm:px-6">
          <div className="flex flex-col gap-3 text-center sm:flex-row sm:items-center sm:justify-center sm:text-left">
            <span className="mx-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f5f9ff] text-[#0e58a8] sm:mx-0">
              <FiInfo className="h-5 w-5" />
            </span>
            <p className="text-[15px] leading-7 text-[#4c6179]">
              <span className="font-semibold text-[#0d1728]">Note:</span> The
              figures above are indicative placeholders until verified by IRCC.
              Final costs vary according to clinical complexity, diagnostic
              investigations, facility requirements, physician assessment and
              individual treatment needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
