"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import CostComparisonSection from "@/app/medical-treatment-in-pakistan-for-qatar-patients/CostComparisonSection";
import FinalCtaSection from "@/app/medical-treatment-in-pakistan-for-qatar-patients/FinalCtaSection";
import ForPatientsInSection from "@/app/medical-treatment-in-pakistan-for-qatar-patients/ForPatientsInSection";
import LocationsFaqSection from "@/app/medical-treatment-in-pakistan-for-qatar-patients/LocationsFaqSection";
import PatientJourneySection from "@/app/medical-treatment-in-pakistan-for-qatar-patients/PatientJourneySection";
import QatarServicesSection from "@/app/medical-treatment-in-pakistan-for-qatar-patients/QatarServicesSection";
import WhyChooseIrccSection from "@/app/medical-treatment-in-pakistan-for-qatar-patients/WhyChooseIrccSection";
import Services from "@/app/components/sections/ServicesSection";

import {
  FiActivity,
  FiArrowUpRight,
  FiCompass,
  FiFileText,
  FiMessageCircle,
  FiShield,
} from "react-icons/fi";

type FormState = {
  fullName: string;
  phoneCode: string;
  whatsappNumber: string;
  email: string;
  preferredTreatment: string;
};

type SubmitStatus = "idle" | "loading" | "error";

const highlights = [
  {
    title: "Minimally Invasive Treatment",
    icon: FiCompass,
  },
  {
    title: "Image-Guided Procedures",
    icon: FiActivity,
  },
  {
    title: "Experienced Interventional Radiology Team",
    icon: FiShield,
  },
  {
    title: "International Patient Support",
    icon: FiMessageCircle,
  },
] as const;

const treatmentOptions = [
  "Uterine Fibroid Embolization",
  "Varicocele Embolization",
  "Thyroid Radiofrequency Ablation",
  "Varicose Vein Ablation",
  "Prostate Artery Embolization",
  "Interventional Oncology",
  "Peripheral Vascular Disease",
  "Other / Need Guidance",
] as const;

export default function QatarPatientsLandingPage() {
  const pathname = usePathname();
  const [form, setForm] = useState<FormState>({
    fullName: "",
    phoneCode: "+974",
    whatsappNumber: "",
    email: "",
    preferredTreatment: "",
  });
  const [selectedReports, setSelectedReports] = useState<File[]>([]);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [error, setError] = useState("");

  const onChange =
    (key: keyof FormState) =>
    (
      event: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >
    ) => {
      setForm((prev) => ({ ...prev, [key]: event.target.value }));
    };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "loading") return;

    setStatus("loading");
    setError("");

    try {
      const formData = new FormData();
      formData.append("fullName", form.fullName.trim());
      formData.append(
        "phone",
        `${form.phoneCode.trim()} ${form.whatsappNumber.trim()}`
      );
      formData.append("email", form.email.trim());
      formData.append("city", "Qatar");
      formData.append("conditionConcern", form.preferredTreatment.trim());
      formData.append(
        "message",
        `Preferred treatment: ${form.preferredTreatment.trim() || "Not specified"}`
      );
      formData.append("page", pathname);
      selectedReports.forEach((file) => {
        formData.append("medicalReports", file);
      });

      const response = await fetch("/api/consultation", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error || "Unable to submit your request.");
      }

      window.location.href = "/thank-you";
    } catch (submitError: unknown) {
      setStatus("error");
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Unable to submit your request."
      );
    }
  };

  return (
    <>
      <section className="relative -mt-[72px] overflow-hidden bg-[#f3f8fb] pb-10 pt-[88px] text-[#0b1320] [font-family:var(--font-neue-montreal),var(--font-geist-sans),Arial,Helvetica,sans-serif] sm:pb-12 sm:pt-[92px] lg:pb-14 lg:pt-[96px]">
        <div className="absolute inset-0">
          <Image
            src="/qatar.jpg"
            alt="Medical treatment in Pakistan for Qatar patients"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(243,248,251,0.90)_0%,rgba(243,248,251,0.76)_18%,rgba(243,248,251,0.42)_34%,rgba(243,248,251,0.18)_52%,rgba(16,84,82,0.16)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(243,248,251,0.97)_0%,rgba(243,248,251,0.92)_38%,rgba(243,248,251,0.55)_62%,rgba(243,248,251,0.08)_100%)]" />
        </div>

        <div className="relative mx-auto flex min-h-screen w-full max-w-[1500px] items-center px-4 sm:px-6 lg:px-10">
          <div className="grid w-full gap-6 lg:grid-cols-[minmax(0,1.08fr)_460px] lg:items-center xl:gap-5">
            <div className="min-w-0 p-4 sm:p-7 lg:max-w-[920px] lg:p-8 lg:pt-0">
              <h1 className="mt-4 max-w-[18ch] text-[34px] font-normal leading-[1.02] text-[#091223] sm:text-5xl lg:text-[55px] xl:text-[55px]">
                Medical Treatment in Pakistan for{" "}
                <span className="text-[#0e58a8]">Qatar Patients</span>
              </h1>

              <div className="mt-4 max-w-[68ch] space-y-3 text-[15px] leading-7 text-[#30465f] sm:text-base sm:leading-7 lg:text-[16px] lg:leading-7">
                <p>
                  Qatar residents can access specialist, image-guided and
                  minimally invasive treatment at IRCC Pakistan. Our team
                  reviews medical records before travel, explains suitable
                  treatment options and helps international patients plan
                  appointments in Karachi, Lahore or Islamabad.
                </p>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {highlights.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="flex h-full items-center gap-3 rounded-[22px] border border-white/85 bg-white/82 p-4 backdrop-blur-sm"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#eff6ff] text-[#0e58a8]">
                        <Icon className="h-5 w-5" />
                      </span>
                      <p className="text-sm leading-6 text-[#18304b] sm:text-[15px]">
                        {item.title}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/get-consultation"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#0e58a8] px-6 py-4 text-base font-semibold text-white transition hover:bg-[#0b4a8d]"
                >
                  Request a Case Review
                  <FiArrowUpRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/Contact"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#bfdbfe] bg-white/92 px-6 py-4 text-base font-semibold text-[#0e58a8] transition hover:border-[#0e58a8] hover:text-[#0b4a8d]"
                >
                  Talk to IRCC
                  <FiMessageCircle className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div
              id="qatar-case-review-form"
              className="rounded-[30px] border border-white/35 bg-[linear-gradient(180deg,rgba(14,88,168,0.94)_0%,rgba(11,74,141,0.92)_100%)] p-5 text-white backdrop-blur-sm sm:p-6 lg:p-6"
            >
              <h2 className="text-[25px] font-medium leading-tight">
                Start Your Consultation from Qatar
              </h2>
              <p className="mt-3 text-sm font-normal leading-6 text-white/82 sm:text-[15px]">
                Share your details and medical reports. Our team will review
                your case and guide you on the next step.
              </p>

              <form className="mt-6 space-y-3.5" onSubmit={onSubmit}>
                <input
                  type="text"
                  required
                  autoComplete="name"
                  value={form.fullName}
                  onChange={onChange("fullName")}
                  placeholder="Full Name"
                  className="w-full rounded-[18px] border border-white/35 bg-white px-4 py-3 text-[#0b1320] outline-none transition placeholder:text-[#5e6b7d] focus:border-[#93c5fd] focus:ring-2 focus:ring-[#93c5fd]/40"
                />

                <input
                  type="tel"
                  required
                  autoComplete="tel-country-code"
                  value={form.phoneCode}
                  onChange={onChange("phoneCode")}
                  placeholder="Qatar (+974)"
                  className="w-full rounded-[18px] border border-white/35 bg-white px-4 py-3 text-[#0b1320] outline-none transition placeholder:text-[#5e6b7d] focus:border-[#93c5fd] focus:ring-2 focus:ring-[#93c5fd]/40"
                />

                <input
                  type="tel"
                  required
                  autoComplete="tel-national"
                  value={form.whatsappNumber}
                  onChange={onChange("whatsappNumber")}
                  placeholder="WhatsApp Number"
                  className="w-full rounded-[18px] border border-white/35 bg-white px-4 py-3 text-[#0b1320] outline-none transition placeholder:text-[#5e6b7d] focus:border-[#93c5fd] focus:ring-2 focus:ring-[#93c5fd]/40"
                />

                <input
                  type="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={onChange("email")}
                  placeholder="Email Address"
                  className="w-full rounded-[18px] border border-white/35 bg-white px-4 py-3 text-[#0b1320] outline-none transition placeholder:text-[#5e6b7d] focus:border-[#93c5fd] focus:ring-2 focus:ring-[#93c5fd]/40"
                />

                <select
                  required
                  value={form.preferredTreatment}
                  onChange={onChange("preferredTreatment")}
                  className="w-full rounded-[18px] border border-white/35 bg-white px-4 py-3 text-[#0b1320] outline-none transition focus:border-[#93c5fd] focus:ring-2 focus:ring-[#93c5fd]/40"
                >
                  <option value="">Preferred Treatment</option>
                  {treatmentOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>

                <label className="block rounded-[18px] border border-dashed border-white/45 bg-white/10 p-4 text-left">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/12 text-white">
                      <FiFileText className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        Upload Medical Reports
                      </p>
                      <p className="mt-1 text-xs leading-5 text-white/78">
                        Attach PDF, JPG or PNG files with your request.
                      </p>
                    </div>
                  </div>
                  <input
                    type="file"
                    multiple
                    accept=".pdf,.jpg,.jpeg,.png,.webp"
                    onChange={(event) =>
                      setSelectedReports(Array.from(event.target.files ?? []))
                    }
                    className="mt-3 block w-full text-sm text-white file:mr-4 file:rounded-full file:border-0 file:bg-white file:px-4 file:py-2 file:font-semibold file:text-[#0e58a8] hover:file:bg-[#eff6ff]"
                  />
                  {selectedReports.length ? (
                    <p className="mt-3 text-xs leading-5 text-white/78">
                      {selectedReports.map((file) => file.name).join(", ")}
                    </p>
                  ) : null}
                </label>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-[18px] bg-white px-5 py-4 text-base font-semibold text-[#0e58a8] transition hover:bg-[#eff6ff] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "loading" ? "Sending..." : "Request a Case Review"}
                  <FiArrowUpRight className="h-5 w-5" />
                </button>

                {status === "error" ? (
                  <p className="text-sm leading-6 text-[#ffd7d7]">{error}</p>
                ) : null}
              </form>

              <p className="mt-4 text-center text-sm text-white/75">
                Your medical information is handled confidentially and used to
                assess your treatment request.
              </p>
            </div>
          </div>
        </div>
      </section>

      <PatientJourneySection />
      <ForPatientsInSection />
      {/* <QatarServicesSection /> */}
      <Services/>
      <CostComparisonSection />
      <WhyChooseIrccSection />
      <LocationsFaqSection />
      <FinalCtaSection />
    </>
  );
}
