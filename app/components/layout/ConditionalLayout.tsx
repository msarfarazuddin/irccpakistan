"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";

type ConditionalLayoutProps = {
  children: ReactNode;
};

export default function ConditionalLayout({ children }: ConditionalLayoutProps) {
  const pathname = usePathname();
  const isPageWithoutChrome =
    pathname === "/female-clinic" || pathname === "/get-consultation";

  if (isPageWithoutChrome) {
    return <main className="min-h-screen">{children}</main>;
  }

  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-160px)]">{children}</main>
      <Footer />
    </>
  );
}
