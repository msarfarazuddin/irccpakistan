"use client";
import Image from "next/image";
import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { usePathname } from "next/navigation";

type FormState = {
  fullName: string;
  phone: string;
  email: string;
  message: string;
};

type SubmitStatus = "idle" | "loading" | "success" | "error";

function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message;
  return "Unable to submit right now.";
}

export default function FemaleClinicForm() {
  const pathname = usePathname();
  const [form, setForm] = useState<FormState>({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [error, setError] = useState("");

  const onChange =
    (key: keyof FormState) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [key]: e.target.value }));
    };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "loading") return;

    setStatus("loading");
    setError("");

    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.fullName.trim(),
          phone: form.phone.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
          page: pathname,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Unable to submit right now.");
      }

      setStatus("success");
      setForm({
        fullName: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (err: unknown) {
      setStatus("error");
      setError(getErrorMessage(err));
    }
  };

  return (
    <section className="relative h-screen min-h-[100svh] w-full overflow-hidden bg-[#0b3d5a]">
      {/* Background Image (Left area feel) */}
      <div className="absolute inset-0">
        <Image
          src="/get-consultant.jpg" // <-- change to your image path
          alt="IRCC Background"
          fill
          priority
          className="object-cover object-left"
        />
        {/* Blue overlay */}
        <div className="absolute inset-0 " />
        {/* Subtle darker right gradient like screenshot */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E58A8]/20 via-[#0E58A8]/20 to-[#063a57]/20" />
      </div>

      <div className="relative mx-auto flex h-full min-h-[100svh] w-full max-w-[1400px] flex-col px-4 pb-8 pt-6 lg:pb-10 lg:pt-8">
        {/* Top bar (logo left, contact right) */}
        <div className="flex items-start justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative h-14 w-40 sm:h-16 sm:w-44">
              <Image
                src="/logo.png" // <-- put your logo in /public/logo.png
                alt="IRCC Pakistan"
                fill
                className="object-contain object-left"
              />
            </div>
          </div>

          {/* Contact pills */}
          <div className="hidden items-start gap-4 md:flex">
            <a
              href="tel:+923340005020"
              className="inline-flex items-center gap-2 text-white/90 hover:text-white"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full bg-white/15">
                {/* phone icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6.6 10.8c1.3 2.6 3.4 4.7 6 6l2-2c.2-.2.6-.3.9-.2 1 .3 2 .5 3.1.5.5 0 .9.4.9.9V20c0 .5-.4.9-.9.9C10.4 20.9 3.1 13.6 3.1 4.9c0-.5.4-.9.9-.9H7c.5 0 .9.4.9.9 0 1.1.2 2.1.5 3.1.1.3 0 .7-.2.9l-1.6 1.9z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <span className="text-sm font-semibold">92-3340005020</span>
            </a>

            <a
              href="mailto:irccpakistan@gmail.com"
              className="inline-flex items-center gap-2 text-white/90 hover:text-white"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full bg-white/15">
                {/* mail icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M20 5H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 4-8 5-8-5V7l8 5 8-5v2z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <span className="text-sm font-semibold">irccpakistan@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Main grid */}
        <div className="mt-auto grid items-end gap-8 pt-8 lg:grid-cols-[1.25fr_0.9fr] lg:pt-10">
          {/* Left content */}
          <div className="text-white">
            <h1 className="max-w-[720px] text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              Minimal Invasive Vascular
              <br className="hidden sm:block" />
              Treatment Facility in Pakistan
            </h1>

            <p className="mt-4 max-w-[720px] text-sm leading-relaxed text-white/85 sm:text-base">
              A leader in interventional radiology treatments in Pakistan, IRCC Pakistan offers
              minimally invasive vein ablation, uterine fibroid or varicocele embolization, and more.
            </p>

            {/* Features icons */}
            <div className="mt-8 grid max-w-[760px] grid-cols-2 gap-4 sm:grid-cols-4">
              <FeatureCard title={"Day Care\nProcedure"} imageSrc="/Day-care-procedure.png" />
              <FeatureCard title={"Non-Surgical\nTreatment"} imageSrc="/Non-Surgical-Treatment.png" />
              <FeatureCard title={"No\nMedications"} imageSrc="/No-Heavy-Medications.png" />
              <FeatureCard
                title={"100% Patient\nSatisfaction\nGuaranteed"}
                imageSrc="/Patient-Satisfaction.png"
              />
            </div>
          </div>

          {/* Right form card */}
          <div className="mx-auto w-full max-w-[520px]">
            <div className="rounded-2xl bg-white p-6 shadow-xl sm:p-8">
              <h3 className="text-center text-xl font-extrabold text-[#0b0b0b] sm:text-2xl">
                Pakistan&apos;s #1 Interventional
                <br />
                Radiologist
              </h3>
              <form className="mt-[20px] space-y-6" onSubmit={onSubmit}>
                <div className="grid grid-cols-1 gap-5">
                  <input
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Name:"
                    value={form.fullName}
                    onChange={onChange("fullName")}
              className="h-11 w-full rounded-2xl border-2 border-[#dadbdd] bg-white px-5 text-[16px] text-black placeholder:text-black/70 outline-none focus:border-[#dadbdd]"
                  />

                  <input
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="Phone:"
                    value={form.phone}
                    onChange={onChange("phone")}
              className="h-11 w-full rounded-2xl border-2 border-[#dadbdd] bg-white px-5 text-[16px] text-black placeholder:text-black/70 outline-none focus:border-[#dadbdd]"
                  />

                  <input
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="Email:"
                    value={form.email}
                    onChange={onChange("email")}
              className="h-11 w-full rounded-2xl border-2 border-[#dadbdd] bg-white px-5 text-[16px] text-black placeholder:text-black/70 outline-none focus:border-[#dadbdd]"
                  />
                </div>

                <textarea
                  rows={3}
                  required
                  placeholder="Message:"
                  value={form.message}
                  onChange={onChange("message")}
            className="w-full rounded-2xl border-2 border-[#dadbdd] bg-white px-5 py-4 text-[16px] text-black placeholder:text-black/70 outline-none resize-y focus:border-[#dadbdd]"
                />

                <div className="pt-2 text-center">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="inline-flex rounded-2xl border border-[#0A3E82] bg-gradient-to-r from-[#0E58A8] to-[#0A3E82] px-5 py-3 text-base font-bold text-white shadow-md transition hover:brightness-110 disabled:opacity-70 sm:text-lg"
                  >
                    {status === "loading" ? "Submitting..." : "Make an Appointment"}
                  </button>

                  {status === "success" && (
                    <p className="mt-4 text-sm font-medium text-green-700">
                      Thanks! Your request has been submitted.
                    </p>
                  )}
                  {status === "error" && (
                    <p className="mt-4 text-sm font-medium text-red-600">{error}</p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  required,
  type = "text",
  value,
  onChange,
}: {
  label: string;
  required?: boolean;
  type?: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-[#111]">
        {label} {required ? <span className="text-red-500">*</span> : null}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none ring-0 focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20"
      />
    </div>
  );
}

function FeatureCard({ title, imageSrc }: { title: string; imageSrc: string }) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="grid h-[86px] w-[106px] place-items-center rounded-bl-none rounded-br-[24px] rounded-tl-[24px] rounded-tr-none bg-[#f1f3f5] shadow-[0_10px_20px_rgba(0,0,0,0.14)] sm:h-[92px] sm:w-[114px]">
        <div className="relative h-[52px] w-[52px] sm:h-[56px] sm:w-[56px]">
          <Image src={imageSrc} alt={title} fill className="object-contain" />
        </div>
      </div>
      <p className="mx-auto whitespace-pre-line text-center text-[18px] font-medium leading-[1.08] tracking-[-0.1px] text-white sm:text-[19px]">
        {title}
      </p>
    </div>
  );
}
