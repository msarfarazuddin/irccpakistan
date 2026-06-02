"use client";

export default function FooterBottom() {
  return (
    <div className="bg-[#1e76bd] text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-2 py-2 md:flex-row">
        <p className="text-center text-sm tracking-wide md:text-left">
          Copyright © 2026. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://twitter.com/irccpakistan?lang=en"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-black transition hover:scale-110"
            aria-label="Twitter"
          >
            <XIcon />
          </a>
          <a
            href="https://www.facebook.com/irccpakistan"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-black transition hover:scale-110"
            aria-label="Facebook"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://youtu.be/Ppfrn80dfzs"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-black transition hover:scale-110"
            aria-label="YouTube"
          >
            <YouTubeIcon />
          </a>
          <a
            href="https://instagram.com/irccpakistan?igshid=i7fclbk4863y"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-black transition hover:scale-110"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://www.tiktok.com/@drshahbazqazi"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-black transition hover:scale-110"
            aria-label="TikTok"
          >
            <TikTokIcon />
          </a>
          <a
            href="https://www.snapchat.com/add/irccpakistan"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-black transition hover:scale-110"
            aria-label="Snapchat"
          >
            <SnapchatIcon />
          </a>
        </div>

        <p className="text-center text-sm tracking-wide md:text-right">
          Powered by <a href="https://aspiredigital.pk/">Aspire Digital</a>
        </p>
      </div>
    </div>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M18.3 2H21l-6.6 7.6L22 22h-6l-4.7-6.1L6 22H3l7.1-8.2L2 2h6.1l4.2 5.6L18.3 2zm-1 18h1.7L7.7 4H6L17.3 20z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H8v-3h2.4V9.7c0-2.4 1.4-3.7 3.6-3.7 1 0 2 .2 2 .2v2.2h-1.1c-1.1 0-1.4.7-1.4 1.4V12H16l-.5 3h-2.5v7A10 10 0 0 0 22 12z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M23 12s0-3.6-.5-5.3a3 3 0 0 0-2.1-2.1C18.7 4 12 4 12 4s-6.7 0-8.4.6A3 3 0 0 0 1.5 6.7C1 8.4 1 12 1 12s0 3.6.5 5.3a3 3 0 0 0 2.1 2.1c1.7.6 8.4.6 8.4.6s6.7 0 8.4-.6a3 3 0 0 0 2.1-2.1C23 15.6 23 12 23 12z" />
      <path d="M10 15.5V8.5L16 12l-6 3.5z" fill="#ffffff" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="M17.5 6.5h.01" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M14.5 3c.4 1.4 1.2 2.4 2.4 3.1 1 .6 2 .9 3.1.9V10c-1.6 0-3.1-.5-4.4-1.4v6.1a5.6 5.6 0 1 1-4.5-5.5v3c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5V3h2.9z" />
    </svg>
  );
}

function SnapchatIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M12 2c3.3 0 5.3 2.3 5.3 5.7v2c0 .4.2.8.5 1l1.2.8c.4.3.3.9-.2 1.1l-1.1.5c-.2.1-.4.4-.4.6.1 1.4 1 1.9 1 1.9-.5.8-1.7 1.2-2.9 1.3-.5 1.1-1.7 1.8-3.4 1.8s-2.9-.7-3.4-1.8c-1.2-.1-2.4-.5-2.9-1.3 0 0 .9-.5 1-1.9 0-.2-.1-.5-.4-.6l-1.1-.5c-.5-.2-.6-.8-.2-1.1l1.2-.8c.3-.2.5-.6.5-1v-2C6.7 4.3 8.7 2 12 2z" />
    </svg>
  );
}
