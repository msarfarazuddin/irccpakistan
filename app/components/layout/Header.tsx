"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type DropdownLink = { label: string; href: string };

type NavLink =
  | { label: string; href: string; hasDropdown?: false }
  | { label: string; hasDropdown: true; dropdownLinks: DropdownLink[] };

const navLinks: NavLink[] = [
  { label: "Home", href: "/home" },
  { label: "About Us", href: "/About" },
  {
    label: "Services",
    hasDropdown: true,
    dropdownLinks: [
      { label: "Uterine Fibroid Embolization", href: "/Uterine-Fibroid-Embolization" },
      { label: "Varicocele Embolization", href: "/Varicocele-Embolization" },
      { label: "Varicose Vein Ablation", href: "/Varicose-Vein-Ablation" },
      { label: "Fallopian Tube Recanalization", href: "/Fallopian-Tube-Recanalization" },
      { label: "Prostate Artery Embolization for Benign Prostatic Hyperplasia", href: "/Prostate-Artery-Embolization-for-Benign-Prostatic-Hyperplasia" },
      { label: "Transjugular Intrahepatic Portosystemic Shunt", href: "/Transjugular-Intrahepatic-Portosystemic-Shunt" },
      { label: "Radiofrequency Ablation of Osteoid Osteoma", href: "/Radiofrequency-Ablation-of-Osteoid-Osteoma" },
      { label: "Pelvic Congestion Syndrome Treatment", href: "/Pelvic-Congestion-Syndrome-Treatment" },
      { label: "Thyroid Radiofrequency Ablation", href: "/Thyroid-Radiofrequency-Ablation" },
      { label: "Interventional Oncology", href: "/Interventional-Oncology" },
      { label: "Vascular Malformation Treatment", href: "/Vascular-Malformation-Treatment" },
      { label: "Peripheral Vascular Disease", href: "/Peripheral-Vascular-Disease" },
      { label: "Dialysis Access Care and Management", href: "/Dialysis-Access-Care-and-Management" },
    ],
  },
  { label: "Blogs", href: "/blog" },
  { label: "Clinics", href: "/Clinic" },
  { label: "Contact Us", href: "/Contact" },
];

const contactNumbers = ["03324520052", "03310232883", "03340005020"];

const chunk = <T,>(arr: T[], size: number) => {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
};

// ✅ Type guard: ensures dropdownLinks exists
const isServicesDropdown = (
  l: NavLink
): l is { label: string; hasDropdown: true; dropdownLinks: DropdownLink[] } => {
  return l.label === "Services" && "hasDropdown" in l && l.hasDropdown === true;
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  // ✅ mobile drawer
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  // ✅ desktop mega menu
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const desktopTriggerRef = useRef<HTMLDivElement | null>(null);
  const desktopMenuRef = useRef<HTMLDivElement | null>(null);

  const services = navLinks.find(isServicesDropdown);
  const serviceLinks = services?.dropdownLinks ?? [];
  const columns = useMemo(() => chunk(serviceLinks, 5), [serviceLinks]);

  // scroll bg
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ✅ close desktop on outside click + ESC
  useEffect(() => {
    const onMouseDown = (e: MouseEvent) => {
      if (!desktopServicesOpen) return;
      const target = e.target as Node;

      const clickedTrigger =
        desktopTriggerRef.current && desktopTriggerRef.current.contains(target);
      const clickedMenu =
        desktopMenuRef.current && desktopMenuRef.current.contains(target);

      if (!clickedTrigger && !clickedMenu) setDesktopServicesOpen(false);
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDesktopServicesOpen(false);
    };

    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [desktopServicesOpen]);

  // ✅ body scroll lock (mobile only)
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // reset accordion when mobile closes
  useEffect(() => {
    if (!mobileOpen) setMobileServicesOpen(false);
  }, [mobileOpen]);

  return (
    <header
      className={[
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-white shadow-sm" : "bg-transparent",
      ].join(" ")}
    >
      {/* TOP BAR */}
      <div className="mx-auto grid h-[72px] w-full max-w-full grid-cols-[auto_1fr_auto] items-center px-4 text-sm sm:px-6 lg:px-10">
        {/* Logo */}
        <div className="relative h-20 w-36">
          <Image
            src="/logo.png"
            alt="logo"
            fill
            className="object-contain object-left"
            priority
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden justify-center gap-7 text-[15px] font-semibold tracking-wide text-[#1d2a50] lg:flex">
          {navLinks.map((link) => {
            if ("hasDropdown" in link && link.hasDropdown) {
              return (
                <div key={link.label} className="relative" ref={desktopTriggerRef}>
                  <button
                    type="button"
                    className="flex items-center gap-1 rounded-full px-2 py-1 transition hover:text-[#111111]"
                    onClick={() => setDesktopServicesOpen((s) => !s)}
                    aria-haspopup="menu"
                    aria-expanded={desktopServicesOpen}
                  >
                    <span>{link.label}</span>
                    <svg
                      viewBox="0 0 24 24"
                      className={`h-4 w-4 text-[#0E58A8] transition ${
                        desktopServicesOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                </div>
              );
            }

            return (
              <a
                key={link.label}
                href={link.href}
                className="rounded-full px-2 py-1 transition hover:text-[#111111]"
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right */}
        <div className="flex items-center justify-end gap-3 sm:gap-4">
          {/* Numbers */}
          <div className="hidden items-center gap-2 text-[16px] font-semibold text-[#1d2a50] xl:flex">
            {contactNumbers.map((n, i) => (
              <span key={`${n}-${i}`} className="flex items-center">
                <a href={`tel:${n}`} className="hover:underline">
                  {n}
                </a>
                {i < contactNumbers.length - 1 && (
                  <span className="mx-2 text-[#111111]">|</span>
                )}
              </span>
            ))}
          </div>

          {/* Mobile button */}
          <button
            onClick={() => setMobileOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d2d7e4] text-[#0E58A8] transition hover:border-[#0E58A8] lg:hidden"
            aria-label="Open mobile menu"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 7h16" />
              <path d="M4 12h16" />
              <path d="M4 17h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* ✅ DESKTOP MEGA MENU */}
      {desktopServicesOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/20"
            onClick={() => setDesktopServicesOpen(false)}
          />

          <div
            ref={desktopMenuRef}
            className="
              fixed left-1/2 top-[72px] z-[60] mt-3
              w-[1200px] max-w-[95vw]
              -translate-x-1/2
              rounded-2xl border border-[#E6EAF3]
              bg-white shadow-2xl
            "
            role="menu"
          >
            <div className="grid grid-cols-12">
              <div className="col-span-12 md:col-span-4 rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none border-b md:border-b-0 md:border-r border-[#EEF2FA] bg-[#F7FAFF] p-6">
                <p className="text-xs font-semibold tracking-wide text-[#5B6577]">
                  Explore Services
                </p>
                <h3 className="mt-2 text-[28px] leading-[1.1] font-semibold text-[#0B1220]">
                  Interventional Radiology Treatments
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#5B6577]">
                  Minimally invasive, image-guided procedures designed to help patients recover faster with less pain.
                </p>
              </div>

              <div className="col-span-12 md:col-span-8 p-6">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {columns.map((col, idx) => (
                    <div key={idx} className="flex flex-col">
                      {col.map((d) => (
                        <a
                          key={d.label}
                          href={d.href}
                          onClick={() => setDesktopServicesOpen(false)}
                          className="group rounded-xl px-3 py-2 text-sm font-semibold text-[#1d2a50] transition hover:bg-[#F2F6FF]"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <span className="leading-5">{d.label}</span>
                            <span className="mt-[2px] opacity-0 transition group-hover:opacity-100">
                              <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#0E58A8]" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14" />
                                <path d="M12 5l7 7-7 7" />
                              </svg>
                            </span>
                          </div>
                        </a>
                      ))}
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-col gap-3 rounded-xl border border-[#EEF2FA] bg-white px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs font-semibold text-[#5B6577]">
                    Looking for a specific treatment?{" "}
                    <a
                      href="/Contact"
                      onClick={() => setDesktopServicesOpen(false)}
                      className="text-[#0E58A8] hover:underline"
                    >
                      Contact our team
                    </a>
                  </p>

                  <a
                    href="/blog"
                    onClick={() => setDesktopServicesOpen(false)}
                    className="text-xs font-semibold text-[#1d2a50] hover:underline"
                  >
                    Read Patient Guides →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* ✅ MOBILE DRAWER */}
      {mobileOpen && (
        <div className="lg:hidden">
          {/* backdrop */}
          <button
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 z-40 bg-black/30"
            aria-label="Close menu backdrop"
          />

          {/* drawer */}
          <div className="fixed right-0 top-0 z-50 h-full w-[86%] max-w-sm bg-white shadow-xl">
            <div className="flex items-center justify-between px-4 py-4">
              <div className="relative h-12 w-28">
                <Image src="/logo.png" alt="logo" fill className="object-contain object-left" />
              </div>

              <button
                onClick={() => setMobileOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d2d7e4] text-[#0E58A8]"
                aria-label="Close menu"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 6l12 12" />
                  <path d="M18 6l-12 12" />
                </svg>
              </button>
            </div>

            <div className="px-4 pb-6">
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => {
                  // services accordion
                  if ("hasDropdown" in link && link.hasDropdown) {
                    return (
                      <div key={link.label} className="rounded-xl">
                        <button
                          type="button"
                          onClick={() => setMobileServicesOpen((s) => !s)}
                          className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-[15px] font-semibold text-[#1d2a50] hover:bg-[#F2F6FF]"
                          aria-expanded={mobileServicesOpen}
                        >
                          <span>{link.label}</span>
                          <svg
                            viewBox="0 0 24 24"
                            className={`h-4 w-4 text-[#0E58A8] transition ${mobileServicesOpen ? "rotate-180" : ""}`}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M6 9l6 6 6-6" />
                          </svg>
                        </button>

                        {mobileServicesOpen && (
                          <div className="mt-1 ml-2 border-l border-[#E6EAF3] pl-3">
                            {link.dropdownLinks.map((d) => (
                              <a
                                key={d.label}
                                href={d.href}
                                onClick={() => setMobileOpen(false)}
                                className="block rounded-lg px-3 py-2 text-[14px] font-semibold text-[#1d2a50] hover:bg-[#F2F6FF]"
                              >
                                {d.label}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  }

                  // normal links
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-[15px] font-semibold text-[#1d2a50] hover:bg-[#F2F6FF]"
                    >
                      {link.label}
                    </a>
                  );
                })}
              </nav>

              <div className="mt-5 rounded-2xl border border-[#E6EAF3] p-4">
                <p className="text-xs font-semibold tracking-wide text-[#5B6577]">Call Us</p>
                <div className="mt-2 flex flex-col gap-2 text-[15px] font-semibold text-[#1d2a50]">
                  {contactNumbers.map((n, i) => (
                    <a key={`${n}-${i}`} href={`tel:${n}`} className="hover:underline">
                      {n}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
