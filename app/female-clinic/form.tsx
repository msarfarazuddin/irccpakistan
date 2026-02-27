"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { usePathname } from "next/navigation";

type FormState = {
  fullName: string;
  phone: string;
  disease: string;
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
    disease: "",
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
          disease: form.disease.trim(),
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
        disease: "",
        email: "",
        message: "",
      });
    } catch (err: unknown) {
      setStatus("error");
      setError(getErrorMessage(err));
    }
  };

  return (
    <div id="form" className="mx-auto w-full max-w-xl">
      <form className="space-y-6" onSubmit={onSubmit}>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <input
              type="text"
              required
              autoComplete="name"
              placeholder="Name:"
              value={form.fullName}
              onChange={onChange("fullName")}
              className="h-11 w-full rounded-2xl border-2 border-white/90 bg-transparent px-5 text-[16px] text-white placeholder:text-white/95 outline-none"
            />

            <input
              type="tel"
              required
              autoComplete="tel"
              placeholder="Phone:"
              value={form.phone}
              onChange={onChange("phone")}
              className="h-11 w-full rounded-2xl border-2 border-white/90 bg-transparent px-5 text-[16px] text-white placeholder:text-white/95 outline-none"
            />

            <input
              type="text"
              required
              placeholder="Disease:"
              value={form.disease}
              onChange={onChange("disease")}
              className="h-11 w-full rounded-2xl border-2 border-white/90 bg-transparent px-5 text-[16px] text-white placeholder:text-white/95 outline-none"
            />

            <input
              type="email"
              required
              autoComplete="email"
              placeholder="Email:"
              value={form.email}
              onChange={onChange("email")}
              className="h-11 w-full rounded-2xl border-2 border-white/90 bg-transparent px-5 text-[16px] text-white placeholder:text-white/95 outline-none"
            />
          </div>

          <textarea
            rows={3}
            required
            placeholder="Message:"
            value={form.message}
            onChange={onChange("message")}
            className="w-full rounded-2xl border-2 border-white/90 bg-transparent px-5 py-4 text-[16px] text-white placeholder:text-white/95 outline-none resize-y"
          />

          <div className="pt-2 text-center">
            <button
              type="submit"
              disabled={status === "loading"}
              className="rounded-full bg-white px-5 py-2 text-lg font-bold text-[#1D42D8] transition hover:bg-white/90 disabled:opacity-70 sm:px-6 sm:text-[20px]"
            >
              {status === "loading" ? "Submitting..." : "Submit"}
            </button>

            {status === "success" && (
              <p className="mt-4 text-sm font-medium text-white">
                Thanks! Your request has been submitted.
              </p>
            )}
            {status === "error" && (
              <p className="mt-4 text-sm font-medium text-red-200">{error}</p>
            )}
          </div>
      </form>
    </div>
  );
}
