import type { Metadata } from "next";
import { createPageMetadata } from "@/app/lib/metadata";
import SearchSection from "@/app/components/sections/SearchSection";

export const metadata: Metadata = createPageMetadata({
  canonicalPath: "/search",
  robots: {
    index: false,
    follow: false,
  },
});

export default function SearchPage() {
  return (
    <main>
      <h1 className="sr-only">Search IRCC Pakistan</h1>
      <SearchSection />
    </main>
  );
}
