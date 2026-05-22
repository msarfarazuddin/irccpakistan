"use client";

import { FaTwitter, FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";

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
            <FaTwitter size={14} />
          </a>
          <a
            href="https://www.facebook.com/irccpakistan"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-black transition hover:scale-110"
            aria-label="Facebook"
          >
            <FaFacebookF size={14} />
          </a>
          <a
            href="https://youtu.be/Ppfrn80dfzs"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-black transition hover:scale-110"
            aria-label="YouTube"
          >
            <FaYoutube size={14} />
          </a>
          <a
            href="https://instagram.com/irccpakistan?igshid=i7fclbk4863y"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-black transition hover:scale-110"
            aria-label="Instagram"
          >
            <FaInstagram size={14} />
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
