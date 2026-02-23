"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import basePath from "@/app/lib/basePath";

type Suggestion = {
  id: string;
  title: string;
  subtitle?: string;
};

type ApiResponse = {
  results: Suggestion[];
};

export default function SearchSection() {
  const [q, setQ] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState<Suggestion[]>([]);
  const [active, setActive] = useState<number>(-1);
  const abortRef = useRef<AbortController | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  // ✅ CHANGE THIS when your API is ready
  const MIN_QUERY_LENGTH = 2;
  const API_URL = `${basePath}/api/search`;

  const canSearch = q.trim().length >= MIN_QUERY_LENGTH;

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  useEffect(() => {
    if (!canSearch) {
      setItems([]);
      setLoading(false);
      setActive(-1);
      return;
    }

    const t = setTimeout(async () => {
      setLoading(true);
      setOpen(true);

      // cancel previous request
      abortRef.current?.abort();
      const controller = new AbortController();
      abortRef.current = controller;

      try {
        const res = await fetch(`${API_URL}?q=${encodeURIComponent(q.trim())}`, {
          method: "GET",
          signal: controller.signal,
          headers: { "Content-Type": "application/json" },
        });

        if (!res.ok) throw new Error("API error");

        const data = (await res.json()) as ApiResponse;

        setItems(Array.isArray(data?.results) ? data.results : []);
        setActive(-1);
      } catch (err: any) {
        if (err?.name !== "AbortError") {
          setItems([]); // fail silently for now
        }
      } finally {
        setLoading(false);
      }
    }, 350); // debounce

    return () => clearTimeout(t);
  }, [q, canSearch]);

  const hint = useMemo(
    () =>
      '(e.g., "Varicocele", "Uterine Fibroid", "Prostate Artery Embolisation")',
    []
  );

  const onSubmit = (value?: string) => {
    const finalQ = (value ?? q).trim();
    if (!finalQ) return;

    // ✅ You can navigate to results page later
    // router.push(`/search?q=${encodeURIComponent(finalQ)}`);

    setOpen(false);
    console.log("Search submit:", finalQ);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!open && e.key === "ArrowDown") setOpen(true);

    if (e.key === "Enter") {
      e.preventDefault();
      if (active >= 0 && items[active]) onSubmit(items[active].title);
      else onSubmit();
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((p) => Math.min(p + 1, items.length - 1));
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((p) => Math.max(p - 1, 0));
    }

    if (e.key === "Escape") setOpen(false);
  };

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-[#0E58A8] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/irccpakistan/bg.png')" }}
      />
      <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.25),transparent_40%),radial-gradient(circle_at_80%_50%,rgba(255,255,255,0.18),transparent_45%),radial-gradient(circle_at_50%_90%,rgba(255,255,255,0.16),transparent_45%)]" />
      <div className="absolute inset-0 opacity-15 bg-[linear-gradient(115deg,transparent_0%,rgba(255,255,255,0.25)_20%,transparent_40%,rgba(255,255,255,0.18)_60%,transparent_80%)]" />

      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h4 className="text-3xl leading-tight tracking-tight text-white sm:text-4xl lg:text-4xl">
            Pakistan’s {" "}
            <span className="text-[#BFDBEA] font-semibold">
              First AI-Powered
              <br />
              Interventional Radiology Assistant
            </span>
          </h4>

          <p className="mt-4 leading-6 text-white">
            Experience the future of minimally invasive care — where artificial
            intelligence meets medical precision.
            <br />
            Get instant access to smarter diagnostics, personalised treatment
            guidance, and real-time procedure insights.
          </p>
        </div>

        {/* Search box */}
        <div
          ref={wrapRef}
          className="relative mx-auto mt-10 max-w-3xl rounded-2xl border border-white/25 bg-white p-3 shadow-[0_25px_70px_rgba(0,0,0,0.25)]"
        >
          <div className="flex items-start gap-3 rounded-xl bg-white px-3 py-3">
            {/* Search Icon */}
            <div className="pt-1 text-[#0B1220]">
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="7" />
                <line x1="16.5" y1="16.5" x2="21" y2="21" />
              </svg>
            </div>

            {/* Input */}
            <div className="flex-1">
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                onFocus={() => setOpen(true)}
                onKeyDown={onKeyDown}
                placeholder="Search for a condition or procedure..."
                className="w-full border-0 bg-transparent text-base font-medium text-[#0B1220] outline-none placeholder:text-[#8B95A7]"
              />
              <p className="mt-1 text-xs text-[#8B95A7]">{hint}</p>
            </div>

            {/* Submit button */}
            <button
              type="button"
              onClick={() => onSubmit()}
              className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#F3F5F8] text-[#0B1220] transition hover:bg-[#E8ECF2]"
              aria-label="Search"
            >
              {loading ? (
                <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    stroke="currentColor"
                    strokeWidth="2"
                    opacity="0.25"
                  />
                  <path
                    d="M21 12a9 9 0 0 0-9-9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h12" />
                  <path d="M13 6l6 6-6 6" />
                </svg>
              )}
            </button>
          </div>

          {/* ✅ Suggestions (INSIDE the search box, container grows automatically) */}
          {open && (canSearch || items.length > 0) && (
            <div className="mt-3 overflow-hidden rounded-xl border border-[#E8ECF2] bg-white">
              {!canSearch ? (
                <div className="px-4 py-3 text-sm text-[#5B6577]">
                  Type at least 2 characters to search.
                </div>
              ) : loading ? (
                <div className="px-4 py-3 text-sm text-[#5B6577]">
                  Searching…
                </div>
              ) : items.length === 0 ? (
                <div className="px-4 py-3 text-sm text-[#5B6577]">
                  No results found.
                </div>
              ) : (
                <ul className="max-h-72 overflow-auto py-2">
                  {items.map((it, idx) => (
                    <li key={it.id}>
                      <button
                        type="button"
                        onMouseEnter={() => setActive(idx)}
                        onClick={() => onSubmit(it.title)}
                        className={[
                          "w-full px-4 py-3 text-left transition",
                          "whitespace-normal break-words", // ✅ long text wrap
                          idx === active ? "bg-[#F2F6FF]" : "bg-white",
                        ].join(" ")}
                      >
                        <div className="text-sm font-semibold text-[#0B1220] whitespace-normal break-words">
                          {it.title}
                        </div>
                        {it.subtitle && (
                          <div className="mt-1 text-xs text-[#5B6577] whitespace-normal break-words">
                            {it.subtitle}
                          </div>
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>

        {/* dotted container hint like screenshot */}
      </div>
    </section>
  );
}
