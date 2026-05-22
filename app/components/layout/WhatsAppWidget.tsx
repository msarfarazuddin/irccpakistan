"use client";

import { useEffect, useRef, useState } from "react";

type WhatsAppContact = {
  id: string;
  displayNumber: string;
  phoneNumber: string;
};

const contacts: WhatsAppContact[] = [
  {
    id: "lahore",
    displayNumber: "0332 4520052",
    phoneNumber: "923324520052",
  },
  {
    id: "support-1",
    displayNumber: "0331 0232883",
    phoneNumber: "923310232883",
  },
  {
    id: "support-2",
    displayNumber: "0334 0005020",
    phoneNumber: "923340005020",
  },
];

const defaultMessage = encodeURIComponent(
  "Hi IRCC Pakistan, I want to book a consultation."
);

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (!widgetRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      ref={widgetRef}
      className="fixed bottom-4 right-4 z-[70] flex items-end sm:bottom-6 sm:right-6"
    >
      <div className="flex flex-col items-end gap-3">
        {isOpen && (
          <div
            id="whatsapp-widget-panel"
            className="w-[calc(100vw-2rem)] max-w-sm overflow-hidden rounded-[28px] border border-[#D9F2DF] bg-white/95 shadow-[0_24px_60px_rgba(11,27,43,0.18)] backdrop-blur"
          >
            <div className="bg-[linear-gradient(135deg,#128C7E,#25D366)] px-5 py-4 text-white">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-white/80">
                    WhatsApp
                  </p>
                  <h3 className="mt-2 text-xl font-semibold">
                    Chat with IRCC Pakistan
                  </h3>
                  <p className="mt-1 text-sm text-white/90">
                    Choose a number and start your conversation.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/14 text-white transition hover:bg-white/22"
                  aria-label="Close WhatsApp widget"
                >
                  <CloseIcon />
                </button>
              </div>
            </div>

            <div className="space-y-3 p-3 sm:p-4">
              {contacts.map((contact) => (
                <a
                  key={contact.id}
                  href={`https://wa.me/${contact.phoneNumber}?text=${defaultMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-2xl border border-[#E3F4E8] bg-[#F7FCF8] p-3 transition hover:-translate-y-0.5 hover:border-[#25D366] hover:bg-white"
                  aria-label={`Chat on WhatsApp at ${contact.displayNumber}`}
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[#25D366] text-white shadow-[0_10px_20px_rgba(37,211,102,0.28)]">
                    <WhatsAppIcon />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-[#128C7E]">
                      WhatsApp
                    </span>
                    <span className="mt-1 block text-base font-semibold text-[#0B1B2B]">
                      {contact.displayNumber}
                    </span>
                  </span>

                  <span className="hidden text-xs font-semibold uppercase tracking-[0.2em] text-[#128C7E] sm:inline">
                    Chat
                  </span>
                </a>
              ))}
            </div>
          </div>
        )}

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="whatsapp-widget-panel"
          className="inline-flex items-center gap-3 rounded-full bg-[#25D366] px-3 py-3 text-white shadow-[0_18px_40px_rgba(37,211,102,0.35)] transition hover:-translate-y-0.5 hover:bg-[#1fb85a] sm:px-4"
        >
          <span className="grid h-11 w-11 place-items-center rounded-full bg-white/16">
            <WhatsAppIcon />
          </span>
          <span className="hidden pr-1 text-sm font-semibold sm:inline">
            {isOpen ? "Close WhatsApp" : "WhatsApp Us"}
          </span>
        </button>
      </div>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M20.5 3.5A11.7 11.7 0 0 0 12.1 0 11.8 11.8 0 0 0 1.9 17.7L0 24l6.4-1.7A11.8 11.8 0 0 0 24 11.8a11.7 11.7 0 0 0-3.5-8.3zM12.1 21.8c-1.8 0-3.6-.5-5.1-1.5l-.4-.2-3.8 1 1-3.7-.2-.4a9.7 9.7 0 1 1 8.5 4.8zm5.3-7.2c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.8.2l-.6.8c-.2.2-.3.3-.6.1a8 8 0 0 1-2.3-1.4 8.8 8.8 0 0 1-1.6-2c-.2-.3 0-.4.1-.6l.4-.4.3-.5c.1-.2.1-.4 0-.6l-1-2.4c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.6.1-.9.4s-1.1 1.1-1.1 2.7 1.2 3.1 1.4 3.3c.2.3 2.4 3.8 5.8 5.1.8.4 1.5.6 2 .8.8.2 1.6.2 2.1.1.7-.1 1.8-.7 2.1-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.2-.6-.4z" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 6l12 12" />
      <path d="M18 6L6 18" />
    </svg>
  );
}
