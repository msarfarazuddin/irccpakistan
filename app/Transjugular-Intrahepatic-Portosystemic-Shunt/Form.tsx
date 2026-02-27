"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

type FormState = {
  fullName: string;
  phone: string;
  message: string;
};

type SubmitStatus = "idle" | "loading" | "success" | "error";

export default function ConsultationSection() {
  const pathname = usePathname();
  const [form, setForm] = useState<FormState>({
    fullName: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [error, setError] = useState("");

  const onChange =
    (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [key]: e.target.value }));
    };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
          message: form.message.trim(),
          page: pathname,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Unable to submit right now.");
      }

      setStatus("success");
      setForm({ fullName: "", phone: "", message: "" });
    } catch (err: any) {
      setStatus("error");
      setError(err?.message || "Unable to submit right now.");
    }
  };

  return (
    <section id="form" className="bg-gradient-to-b from-[#FFFFFF] to-[#E6F6FE] py-20 pt-3 px-4">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Badge */}
        <div className="inline-flex w-fit items-center gap-2 rounded-full shadow-lg border border-[#dce6ff] bg-white px-4 py-2 text-sm font-semibold">
          <h2 className="flex h-6 w-6 items-center justify-center rounded-full text-[26px] font-bold text-[#0E58A8]">
            +
          </h2>
          <span className="text-[#111111] font-normal">Get In Touch</span>
        </div>

        {/* Heading */}
        <h4 className="mt-6 text-3xl lg:text-4xl md:text-5xl text-gray-900">
          If you’re facing{" "}
          <span className="text-[#0E58A8] font-bold">Transjugular Intrahepatic
Portosystemic Shunt,</span>{" "}
          contact us now for 
           online consultation
        </h4>

        {/* Form */}
        <form className="mt-14 space-y-6 text-left" onSubmit={onSubmit}>
          
          {/* Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-2">
                Full Name
              </label>
              <input
                type="text"
                required
                autoComplete="name"
                placeholder="John David"
                value={form.fullName}
                onChange={onChange("fullName")}
                className="w-full bg-gray-200 rounded-xl px-5 py-4 outline-none text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-2">
                Phone
              </label>
              <input
                type="tel"
                required
                autoComplete="tel"
                placeholder="+008 654 231"
                value={form.phone}
                onChange={onChange("phone")}
                className="w-full bg-gray-200 rounded-xl px-5 py-4 outline-none text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-2">
              Message
            </label>
            <textarea
              rows={5}
              required
              placeholder="Briefly tell us about your project and your current goals. How can we help you?"
              value={form.message}
              onChange={onChange("message")}
              className="w-full bg-gray-200 rounded-xl px-5 py-4 outline-none text-gray-900 placeholder:text-gray-500 resize-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Button */}
          <div className="text-center pt-6">
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-[#0E58A8] hover:bg-[#0E58A8] disabled:opacity-60 text-white px-10 py-3 rounded-full shadow-xl transition duration-300"
            >
              {status === "loading" ? "Submitting..." : "Book Appointment"}
            </button>

            {status === "success" && (
              <p className="mt-4 text-sm font-medium text-green-700">
                Thanks! Your request has been submitted.
              </p>
            )}

            {status === "error" && (
              <p className="mt-4 text-sm font-medium text-red-600">
                {error}
              </p>
            )}
          </div>

        </form>
      </div>
    </section>
  );
}
