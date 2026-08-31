"use client";

import Link from "next/link";

export default function FinalCtaSection() {
  return (
    <section className="bg-[linear-gradient(180deg,#f7fbfc_0%,#edf6fb_100%)] py-14 [font-family:var(--font-neue-montreal),var(--font-geist-sans),Arial,Helvetica,sans-serif] sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-10">
        <div className="overflow-hidden rounded-[34px] border border-[#dbeafe] bg-[linear-gradient(135deg,#0e58a8_0%,#0b4a8d_100%)] px-6 py-10 text-white shadow-[0_24px_60px_rgba(14,88,168,0.18)] sm:px-8 lg:px-10 lg:py-12">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-[30px] leading-tight sm:text-4xl lg:text-[52px]">
              Ready to Begin Your Treatment Journey?
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-[16px] leading-8 text-white/88 sm:text-lg">
              If you are in Qatar and considering treatment in Pakistan, start
              with a case review. Share your medical reports and contact
              details so the IRCC team can guide you on the appropriate next
              step.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/get-consultation"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-4 text-base font-semibold text-[#0e58a8] transition hover:bg-[#eff6ff]"
              >
                Request a Case Review
              </Link>
              <Link
                href="/Contact"
                className="inline-flex items-center justify-center rounded-2xl border border-white/30 bg-white/10 px-6 py-4 text-base font-semibold text-white transition hover:bg-white/16"
              >
                Send Medical Reports
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
