"use client";

import basePath from "@/app/lib/basePath";

import { useState } from "react";
import { usePathname } from "next/navigation";

type FormState = {
  fullName: string;
  phone: string;
  message: string;
};

type SubmitStatus = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
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
      const res = await fetch(`${basePath}/api/consultation`, {
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
    <div className="bg-white min-h-screen pt-40 mt-[-100px] pb-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <h1 className="text-4xl sm:text-5xl font-semibold text-[#0B1220]">
            Contact Us
          </h1>
          <p className="mt-4 text-[#5B6577] text-base sm:text-lg">
            Have questions or need an appointment? Our team is here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <div className="rounded-2xl  bg-white p-6 sm:p-8 lg:p-10 ">
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#0B1220]">
                  IRCC Pakistan – Interventional Radiology Clinic
                </h2>

                <p className="mt-3 text-[#5B6577] leading-7">
                  We provide minimally invasive image-guided procedures with a
                  patient-first approach. Book a visit for expert evaluation and
                  care.
                </p>

                {/* Info Cards */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="rounded-xl bg-gray-50 p-5">
                    <p className="text-sm font-semibold text-[#0E58A8]">Address</p>
                    <p className="mt-2 text-sm text-[#4B5563] leading-6">
                      123 Main Boulevard <br />
                      Lahore, Pakistan
                    </p>
                  </div>

                  <div className="rounded-xl bg-gray-50 p-5">
                    <p className="text-sm font-semibold text-[#0E58A8]">Phone</p>
                    <p className="mt-2 text-sm text-[#4B5563]">+92 300 1234567</p>
                  </div>

                  <div className="rounded-xl bg-gray-50 p-5">
                    <p className="text-sm font-semibold text-[#0E58A8]">Email</p>
                    <p className="mt-2 text-sm text-[#4B5563]">info@ircc.pk</p>
                  </div>

                  <div className="rounded-xl bg-gray-50 p-5">
                    <p className="text-sm font-semibold text-[#0E58A8]">
                      Working Hours
                    </p>
                    <p className="mt-2 text-sm text-[#4B5563] leading-6">
                      Mon – Sat: 9:00 AM – 6:00 PM <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-sm">
            <form className="space-y-6" onSubmit={onSubmit}>

              <div>
                <label className="block text-sm font-medium mb-2 text-black" >
                  Full Name
                </label>
                <input
                  required
                  value={form.fullName}
                  onChange={onChange("fullName")}
                  className="w-full bg-gray-200 text-black rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-black">
                  Phone
                </label>
                <input
                  required
                  value={form.phone}
                  onChange={onChange("phone")}
                  className="w-full bg-gray-200 text-black rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-black">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={onChange("message")}
                  className="w-full bg-gray-200 rounded-xl text-black px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="bg-[#0E58A8] text-white px-8 py-3 rounded-full"
              >
                {status === "loading" ? "Submitting..." : "Book Appointment"}
              </button>

              {status === "success" && (
                <p className="text-green-600 mt-4">
                  Thanks! Your request has been submitted.
                </p>
              )}

              {status === "error" && (
                <p className="text-red-600 mt-4">{error}</p>
              )}

            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
