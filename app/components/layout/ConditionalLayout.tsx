"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import WhatsAppWidget from "@/app/components/layout/WhatsAppWidget";

type ConditionalLayoutProps = {
  children: ReactNode;
};

export default function ConditionalLayout({ children }: ConditionalLayoutProps) {
  const pathname = usePathname();
  const isPageWithoutChrome =
    pathname === "/female-clinic" || pathname === "/get-consultation";

  return (
    <>
      {isPageWithoutChrome ? (
        <main className="min-h-screen">{children}</main>
      ) : (
        <>
          <Header />
          <main className="min-h-[calc(100vh-160px)]">{children}</main>
          <Footer />
        </>
      )}
      <WhatsAppWidget key={pathname} />
    </>
  );
}
