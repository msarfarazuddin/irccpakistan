"use client";

import { FaTwitter, FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";

export default function FooterBottom() {
  return (
    <div className="bg-[#0E36E8] text-white">
      <div className="max-w-7xl mx-auto px-2 py-2 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Left */}
        <p className="text-sm tracking-wide text-center md:text-left">
          Copyright © 2026. All rights reserved.
        </p>

        {/* Center Social Icons */}
        <div className="flex items-center gap-4">
          <a href="https://twitter.com/irccpakistan?lang=en" className="w-9 h-9 flex items-center justify-center bg-black rounded-full hover:scale-110 transition">
            <FaTwitter size={14} />
          </a>
          <a href="https://www.facebook.com/irccpakistan" className="w-9 h-9 flex items-center justify-center bg-black rounded-full hover:scale-110 transition">
            <FaFacebookF size={14} />
          </a>
          <a href="https://youtu.be/Ppfrn80dfzs" className="w-9 h-9 flex items-center justify-center bg-black rounded-full hover:scale-110 transition">
            <FaYoutube size={14} />
          </a>
          <a href="https://instagram.com/irccpakistan?igshid=i7fclbk4863y" className="w-9 h-9 flex items-center justify-center bg-black rounded-full hover:scale-110 transition">
            <FaInstagram size={14} />
          </a>
        </div>

        {/* Right */}
        <p className="text-sm tracking-wide text-center md:text-right">
          Powered by <a href="https://aspiredigital.pk/"> Aspire Digital</a>
        </p>

      </div>
    </div>
  );
}