"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import type { CityPageClinic } from "@/app/lib/cityPillarContent";

type CityConsultationFormProps = {
  city: string;
  title: string;
  description: string;
  clinic: CityPageClinic;
};

type FormState = {
  fullName: string;
  age: string;
  phone: string;
  city: string;
  conditionConcern: string;
  preferredDateTime: string;
  message: string;
};

type SubmitStatus = "idle" | "loading" | "error";

export default function CityConsultationForm({
  city,
  title,
  description,
  clinic,
}: CityConsultationFormProps) {
  const pathname = usePathname();
  const mapsUrl =
    clinic.mapShareUrl ??
    `https://maps.google.com/?q=${encodeURIComponent(clinic.address)}`;
  const [form, setForm] = useState<FormState>({
    fullName: "",
    age: "",
    phone: "",
    city,
    conditionConcern: "",
    preferredDateTime: "",
    message: "",
  });
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [error, setError] = useState("");

  const onChange =
    (key: keyof FormState) =>
    (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
      const value = event.target.value;
      setForm((current) => ({ ...current, [key]: value }));
    };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (status === "loading") {
      return;
    }

    setStatus("loading");
    setError("");

    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.fullName.trim(),
          age: form.age.trim(),
          phone: form.phone.trim(),
          city: form.city.trim(),
          conditionConcern: form.conditionConcern.trim(),
          disease: form.conditionConcern.trim(),
          preferredDateTime: form.preferredDateTime,
          message: form.message.trim(),
          page: pathname,
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error || "Unable to submit right now.");
      }

      window.location.href = "/thank-you";
    } catch (submitError) {
      setStatus("error");
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Unable to submit right now.",
      );
    }
  };

  return (
    <section
      id="consultation"
      className="relative overflow-hidden rounded-[32px] border border-[#CFE1F7] bg-white shadow-[0_30px_90px_rgba(11,31,63,0.12)]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,88,168,0.11),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(191,219,234,0.3),transparent_34%)]" />

      <div className="relative grid gap-8 px-5 py-6 sm:px-8 sm:py-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10 lg:px-10 lg:py-10">
        <div className="space-y-5">
          <span className="inline-flex rounded-full border border-[#D7E4F6] bg-[#F7FBFF] px-4 py-2 text-sm font-medium text-[#0E58A8]">
            Private Consultation Request
          </span>

          <div>
            <h3 className="text-3xl leading-tight text-[#0B1220] sm:text-4xl">
              {title}
            </h3>
            <p className="mt-4 text-sm leading-7 text-[#4F6178] sm:text-[15px]">
              {description}
            </p>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-[#D7E4F6] bg-white shadow-[0_18px_50px_rgba(13,56,113,0.06)]">
            <div className="border-b border-[#E6EEF8] bg-[linear-gradient(135deg,#F8FBFF_0%,#EEF7FF_100%)] p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0E58A8]">
                Clinic Location
              </p>
              <p className="mt-3 text-xl leading-tight text-[#0B1220]">
                {clinic.locationName}
              </p>
              <p className="mt-3 text-sm leading-7 text-[#4F6178] sm:text-[15px]">
                {clinic.address}
              </p>
            </div>

            <div className="space-y-5 p-5">
              <div className="grid gap-3 sm:grid-cols-2">
                <a
                  href={`tel:${clinic.phone.replace(/\s+/g, "")}`}
                  className="inline-flex w-full items-center justify-center rounded-full bg-[#0E58A8] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0A4A90]"
                >
                  Call {clinic.phone}
                </a>
                <a
                  href={`https://wa.me/${clinic.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-full border border-[#D7E4F6] px-5 py-3 text-sm font-semibold text-[#0E58A8] transition hover:bg-[#F4F9FF]"
                >
                  WhatsApp {clinic.whatsapp}
                </a>
              </div>

              <a
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#D7E4F6] bg-[#F8FBFF] px-5 py-3 text-sm font-semibold text-[#0E58A8] transition hover:bg-white sm:w-fit"
              >
                Open in Google Maps
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>

              <p className="break-words text-sm leading-7 text-[#4F6178] sm:text-[15px]">
                Email:{" "}
                <a
                  href={`mailto:${clinic.email}`}
                  className="font-medium text-[#0E58A8] break-all sm:break-normal"
                >
                  {clinic.email}
                </a>
              </p>
            </div>
          </div>
        </div>

        <form className="space-y-5" onSubmit={onSubmit}>
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-[#0B1220]">
                Full Name
              </label>
              <input
                type="text"
                required
                autoComplete="name"
                value={form.fullName}
                onChange={onChange("fullName")}
                placeholder="Your full name"
                className="w-full rounded-2xl border border-[#D7E4F6] bg-[#F8FBFF] px-4 py-3 text-[#0B1220] outline-none transition focus:border-[#0E58A8] focus:bg-white"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[#0B1220]">
                Age
              </label>
              <input
                type="number"
                required
                min="1"
                value={form.age}
                onChange={onChange("age")}
                placeholder="Age"
                className="w-full rounded-2xl border border-[#D7E4F6] bg-[#F8FBFF] px-4 py-3 text-[#0B1220] outline-none transition focus:border-[#0E58A8] focus:bg-white"
              />
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-[#0B1220]">
                Phone
              </label>
              <input
                type="tel"
                required
                autoComplete="tel"
                value={form.phone}
                onChange={onChange("phone")}
                placeholder="+92 3xx xxxxxxx"
                className="w-full rounded-2xl border border-[#D7E4F6] bg-[#F8FBFF] px-4 py-3 text-[#0B1220] outline-none transition focus:border-[#0E58A8] focus:bg-white"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[#0B1220]">
                City
              </label>
              <input
                type="text"
                required
                value={form.city}
                onChange={onChange("city")}
                placeholder="City"
                className="w-full rounded-2xl border border-[#D7E4F6] bg-[#F8FBFF] px-4 py-3 text-[#0B1220] outline-none transition focus:border-[#0E58A8] focus:bg-white"
              />
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-[#0B1220]">
                Condition or Concern
              </label>
              <input
                type="text"
                required
                value={form.conditionConcern}
                onChange={onChange("conditionConcern")}
                placeholder="Fibroids, varicocele, thyroid nodule..."
                className="w-full rounded-2xl border border-[#D7E4F6] bg-[#F8FBFF] px-4 py-3 text-[#0B1220] outline-none transition focus:border-[#0E58A8] focus:bg-white"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[#0B1220]">
                Preferred Date and Time
              </label>
              <input
                type="datetime-local"
                value={form.preferredDateTime}
                onChange={onChange("preferredDateTime")}
                className="w-full rounded-2xl border border-[#D7E4F6] bg-[#F8FBFF] px-4 py-3 text-[#0B1220] outline-none transition focus:border-[#0E58A8] focus:bg-white"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#0B1220]">
              Message
            </label>
            <textarea
              rows={6}
              required
              value={form.message}
              onChange={onChange("message")}
              placeholder="Tell us about your symptoms, reports, previous treatment, and what you want to avoid or improve."
              className="w-full resize-none rounded-2xl border border-[#D7E4F6] bg-[#F8FBFF] px-4 py-3 text-[#0B1220] outline-none transition focus:border-[#0E58A8] focus:bg-white"
            />
          </div>

          <div className="flex flex-col items-start gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex w-full items-center justify-center rounded-full bg-[#0E58A8] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#0A4A90] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
            >
              {status === "loading" ? "Submitting..." : "Request Consultation"}
            </button>

            <p className="max-w-md text-sm text-[#4F6178]">
              Need urgent help? Call or WhatsApp <span className="font-semibold text-[#0E58A8]">+92 331 0232883</span>
            </p>
          </div>

          {status === "error" && (
            <p className="text-sm font-medium text-red-600">{error}</p>
          )}
        </form>
      </div>
    </section>
  );
}
