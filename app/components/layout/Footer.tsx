"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const quickLinks = [
    { label: "HOME", href: "/" },
    { label: "ABOUT US", href: "/About" },
    { label: "BLOGS", href: "/blog" },
    { label: "CLINICS", href: "/Clinic" },
    { label: "CONTACT US", href: "/Contact" },
  ];

  return (
    <footer className="relative border-t border-[#BFDBEA] bg-[#ffffff]">
      <div className="absolute inset-0" />

      <div className="relative mx-auto max-w-full px-4 py-10 pb-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:items-start">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative h-30 w-40">
                <Image
                  src="/logo.png"
                  alt="IRCC Pakistan"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            <h4 className="text-2xl lg:text-3xl text-[#0B1B2B]">
              Your Health, Our Priority Anytime, Anywhere
            </h4>
            <p className="max-w-sm text-sm text-[#5B6B7A]">
              Reach out to us for all your healthcare needs.
            </p>
          </div>

          <div className="md:justify-self-center z-30">
            <h4 className="text-[20px] font-semibold text-[#0E58A8]">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm font-medium text-[#0B1B2B] hover:text-[#0E58A8] hover:underline underline-offset-4"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <h4 className="text-[20px] font-semibold text-[#0E58A8]">Join Our Newsletter</h4>

            <form
              className="mt-4 flex w-full max-w-sm items-center gap-2 rounded-full bg-white px-3 py-2 shadow-[0_10px_30px_rgba(14,88,168,0.10)] ring-1 ring-[#E4F0FF]"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your Email Address"
                className="h-10 w-full bg-transparent px-2 text-sm text-[#0B1B2B] outline-none placeholder:text-[#9AA9B7]"
              />
              <button
                type="submit"
                className="grid h-10 w-12 place-items-center rounded-full bg-[#0E58A8] text-white shadow-md transition hover:opacity-90"
                aria-label="Subscribe"
              >
                <SendIcon />
              </button>
            </form>

            <div className="absolute -right-8 top-40 hidden md:block">
              <div className="relative h-40 w-50 ">
                <Image
                  src="/fot2.png"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="absolute -top-[166px] right-[140%] hidden md:block">
              <div className="relative h-60 w-70 ">
                <Image
                  src="/fot1.png"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Pill href="/Contact" icon={<PhoneIcon />}>
            Contact Us
          </Pill>
          <Pill href="mailto:irccpakistan@gmail.com" icon={<MailIcon />}>
            irccpakistan@gmail.com
          </Pill>
          <Pill href="tel:+923324520052" icon={<CallIcon />}>
            +92-3324520052
          </Pill>
          <Pill href="tel:+923310232883" icon={<CallIcon />}>
            +92-3310232883
          </Pill>
          <Pill
            href="https://maps.google.com/?q=153/1%20F%20Block%20Phase%205%20D.H.A,%20Lahore%20Pakistan"
            icon={<PinIcon />}
          >
            153/1, F Block Phase 5 D.H.A, Lahore Pakistan
          </Pill>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-[#E4F0FF] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <SocialIcon href="https://youtu.be/Ppfrn80dfzs" label="YouTube">
              <YouTubeIcon />
            </SocialIcon>
            <SocialIcon href="https://www.facebook.com/irccpakistan" label="Facebook">
              <FacebookIcon />
            </SocialIcon>
            <SocialIcon href="https://instagram.com/irccpakistan?igshid=i7fclbk4863y" label="Instagram">
              <InstagramIcon />
            </SocialIcon>
            <SocialIcon href="https://twitter.com/irccpakistan?lang=en" label="Twitter/X">
              <XIcon />
            </SocialIcon>

            <div className="flex flex-wrap items-left gap-x-6 gap-y-2 text-sm text-[#5B6577]">
              <Link className="hover:text-[#0E58A8] hover:underline underline-offset-4" href="/privacy">
                Privacy Policy
              </Link>
              <Link className="hover:text-[#0E58A8] hover:underline underline-offset-4" href="/terms">
                Terms &amp; Condition
              </Link>
            </div>
          </div>

          <div className="text-sm text-[#0E58A8]">
            2026 © <span className="font-semibold">IRCC Pakistan</span>. All Rights Reserved.
          </div>

          <div className="text-sm text-[#0E58A8]">
            powered by{" "}
            <a href="https://aspiredigital.pk/">
              <span className="font-semibold">Aspiredigital</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Pill({
  href,
  icon,
  children,
}: {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 rounded-full bg-[#0E58A8] px-4 py-2 text-xs font-semibold text-white transition hover:opacity-90"
    >
      <span className="grid h-6 w-6 place-items-center rounded-full bg-white/15">
        {icon}
      </span>
      <span className="whitespace-nowrap">{children}</span>
    </Link>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid h-9 w-9 place-items-center rounded-full bg-white text-[#0E58A8] ring-1 ring-[#E4F0FF] transition hover:-translate-y-0.5"
    >
      <span className="h-4 w-4">{children}</span>
    </a>
  );
}

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 2L11 13" />
      <path d="M22 2l-7 20-4-9-9-4 20-7z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6.1 6.1l1.5-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6A2 2 0 0 1 22 16.9z" />
    </svg>
  );
}

function CallIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 2h4l2 5-3 2c1.5 3.5 4.5 6.5 8 8l2-3 5 2v4c0 1.1-.9 2-2 2C11.4 22 2 12.6 2 2c0-1.1.9-2 2-2h2z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h16v16H4z" />
      <path d="M22 6l-10 7L2 6" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 21s7-4.4 7-11a7 7 0 1 0-14 0c0 6.6 7 11 7 11z" />
      <path d="M12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-full w-full" fill="currentColor">
      <path d="M23 12s0-3.6-.5-5.3a3 3 0 0 0-2.1-2.1C18.7 4 12 4 12 4s-6.7 0-8.4.6A3 3 0 0 0 1.5 6.7C1 8.4 1 12 1 12s0 3.6.5 5.3a3 3 0 0 0 2.1 2.1c1.7.6 8.4.6 8.4.6s6.7 0 8.4-.6a3 3 0 0 0 2.1-2.1C23 15.6 23 12 23 12z" />
      <path d="M10 15.5V8.5L16 12l-6 3.5z" fill="#F6FBFF" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-full w-full" fill="currentColor">
      <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H8v-3h2.4V9.7c0-2.4 1.4-3.7 3.6-3.7 1 0 2 .2 2 .2v2.2h-1.1c-1.1 0-1.4.7-1.4 1.4V12H16l-.5 3h-2.5v7A10 10 0 0 0 22 12z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-full w-full" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="M17.5 6.5h.01" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-full w-full" fill="currentColor">
      <path d="M18.3 2H21l-6.6 7.6L22 22h-6l-4.7-6.1L6 22H3l7.1-8.2L2 2h6.1l4.2 5.6L18.3 2zm-1 18h1.7L7.7 4H6L17.3 20z" />
    </svg>
  );
}
