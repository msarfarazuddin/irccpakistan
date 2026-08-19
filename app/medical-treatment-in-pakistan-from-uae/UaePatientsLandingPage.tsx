"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import CostComparisonSection from "@/app/medical-treatment-in-pakistan-from-uae/CostComparisonSection";
import ForPatientsInSection from "@/app/medical-treatment-in-pakistan-from-uae/ForPatientsInSection";
import LocationsFaqSection from "@/app/medical-treatment-in-pakistan-from-uae/LocationsFaqSection";
import PatientJourneySection from "@/app/medical-treatment-in-pakistan-from-uae/PatientJourneySection";
import WhyChooseIrccSection from "@/app/medical-treatment-in-pakistan-from-uae/WhyChooseIrccSection";
import Services from "@/app/components/sections/ServicesSection";
import {
  FiActivity,
  FiArrowUpRight,
  FiCompass,
  FiGlobe,
  FiSend,
  FiShield,
} from "react-icons/fi";

type FormState = {
  fullName: string;
  phone: string;
  email: string;
  city: string;
  concern: string;
};

type SubmitStatus = "idle" | "loading" | "error";

const highlights = [
  {
    title: "Minimally Invasive Treatment",
    icon: FiActivity,
  },
  {
    title: "Image-Guided Procedures",
    icon: FiCompass,
  },
  {
    title: "Specialist Interventional Radiology",
    icon: FiShield,
  },
  {
    title: "International Patient Support",
    icon: FiGlobe,
  },
] as const;

const uaeCities = [
  "Dubai",
  "Abu Dhabi",
  "Sharjah",
  "Ajman",
  "Ras Al Khaimah",
  "Fujairah",
  "Umm Al Quwain",
  "Al Ain",
  "Other",
];

export default function UaePatientsLandingPage() {
  const pathname = usePathname();
  const [form, setForm] = useState<FormState>({
    fullName: "",
    phone: "",
    email: "",
    city: "",
    concern: "",
  });
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
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: form.fullName.trim(),
          phone: form.phone.trim(),
          email: form.email.trim(),
          city: form.city.trim(),
          conditionConcern: form.concern.trim(),
          message: form.concern.trim(),
          page: pathname,
        }),
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
            src="/dubai-city.jpg"
            alt="Modern skyline background for UAE patient treatment page"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(243,248,251,0.88)_0%,rgba(243,248,251,0.72)_16%,rgba(243,248,251,0.40)_32%,rgba(243,248,251,0.20)_48%,rgba(16,84,82,0.16)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(243,248,251,0.96)_0%,rgba(243,248,251,0.90)_35%,rgba(243,248,251,0.54)_58%,rgba(243,248,251,0.10)_100%)]" />
        </div>

        <div className="relative mx-auto flex min-h-screen w-full max-w-[1500px] items-center px-4 sm:px-6 lg:px-10">
          <div className="grid w-full gap-6 lg:grid-cols-[minmax(0,1.08fr)_450px] lg:items-center xl:gap-5">
            <div className="min-w-0 p-4 sm:p-7 lg:max-w-[900px] lg:p-8 lg:pt-0">
              <h1 className="mt-4 max-w-[18ch] text-[34px] font-normal leading-[1.02] text-[#091223] sm:text-5xl lg:text-[55px] xl:text-[55px]">
                Medical Treatment in Pakistan for{" "}
                <span className="text-[#0e58a8]">UAE Patients</span>
              </h1>

              <div className="mt-4 max-w-[66ch] space-y-3 text-[15px] leading-7 text-[#30465f] sm:text-base sm:leading-7 lg:text-[16px] lg:leading-7">
                <p>
                  UAE residents, including Overseas Pakistanis and other
                  international residents, can explore specialist medical
                  treatment in Pakistan through IRCC. Our interventional
                  radiology team provides minimally invasive, image-guided
                  treatment options for a range of vascular, women&apos;s
                  health, men&apos;s health, thyroid, musculoskeletal and
                  oncology-related conditions.
                </p>
                <p className="max-w-[56ch]">
                  If you are considering treatment in Pakistan from the UAE,
                  you can begin your case review remotely by sharing your
                  medical reports and relevant clinical information with our
                  team.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3 xl:grid-cols-4">
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
                      <p className="max-w-[14ch] text-sm leading-6 text-[#18304b] sm:text-[15px]">
                        {item.title}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="#uae-case-review-form"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#0e58a8] px-6 py-4 text-base font-semibold text-white transition hover:bg-[#0b4a8d]"
                >
                  Request a Case Review
                  <FiArrowUpRight className="h-5 w-5" />
                </Link>
                <Link
                  href="mailto:irccpakistan@gmail.com?subject=Medical%20Reports%20from%20UAE"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#bfdbfe] bg-white/92 px-6 py-4 text-base font-semibold text-[#0e58a8] transition hover:border-[#0e58a8] hover:text-[#0b4a8d]"
                >
                  Send Medical Reports
                  <FiSend className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div
              id="uae-case-review-form"
              className="rounded-[30px] border border-white/35 bg-[linear-gradient(180deg,rgba(14,88,168,0.94)_0%,rgba(11,74,141,0.92)_100%)] p-5 text-white backdrop-blur-sm sm:p-6 lg:p-6"
            >
              <h2 className="text-[25px] font-medium leading-tight">
                Start Your Consultation from UAE
              </h2>
              <p className="mt-3 text-sm font-normal leading-6 text-white/82 sm:text-[15px]">
                Share your details and reports. Our specialist will review your
                case.
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
                  autoComplete="tel"
                  value={form.phone}
                  onChange={onChange("phone")}
                  placeholder="Phone / WhatsApp"
                  className="w-full rounded-[18px] border border-white/35 bg-white px-4 py-3 text-[#0b1320] outline-none transition placeholder:text-[#5e6b7d] focus:border-[#93c5fd] focus:ring-2 focus:ring-[#93c5fd]/40"
                />

                <input
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={onChange("email")}
                  placeholder="Email"
                  className="w-full rounded-[18px] border border-white/35 bg-white px-4 py-3 text-[#0b1320] outline-none transition placeholder:text-[#5e6b7d] focus:border-[#93c5fd] focus:ring-2 focus:ring-[#93c5fd]/40"
                />

                <select
                  value={form.city}
                  onChange={onChange("city")}
                  className="w-full rounded-[18px] border border-white/35 bg-white px-4 py-3 text-[#0b1320] outline-none transition focus:border-[#93c5fd] focus:ring-2 focus:ring-[#93c5fd]/40"
                >
                  <option value="">City in UAE</option>
                  {uaeCities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>

                <textarea
                  rows={3}
                  required
                  value={form.concern}
                  onChange={onChange("concern")}
                  placeholder="Your Concern / Treatment"
                  className="w-full rounded-[18px] border border-white/35 bg-white px-4 py-3 text-[#0b1320] outline-none transition placeholder:text-[#5e6b7d] focus:border-[#93c5fd] focus:ring-2 focus:ring-[#93c5fd]/40"
                />

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-[18px] bg-white px-5 py-4 text-base font-semibold text-[#0e58a8] transition hover:bg-[#eff6ff] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "loading" ? "Sending..." : "Book Appointment"}
                  <FiSend className="h-5 w-5" />
                </button>

                {status === "error" ? (
                  <p className="text-sm leading-6 text-[#ffd7d7]">{error}</p>
                ) : null}
              </form>

              <p className="mt-4 text-center text-sm text-white/75">
                Your information is secure and confidential.
              </p>
            </div>
          </div>
        </div>
      </section>

      <PatientJourneySection />
      <ForPatientsInSection />
      <Services/>      
      <CostComparisonSection />
      <WhyChooseIrccSection />
      <LocationsFaqSection />
    </>
  );
}
