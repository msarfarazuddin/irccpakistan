import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import ConditionalLayout from "@/app/components/layout/ConditionalLayout";
import GlobalSchema from "@/app/components/seo/GlobalSchema";
import RouteSchema from "@/app/components/seo/RouteSchema";
import { resolveSiteUrl } from "@/app/lib/siteUrl";
import "./globals.css";

const GA_TRACKING_ID = "G-TDHYHQRKC9";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const neueMontreal = localFont({
  src: [
    {
      path: "../public/font/Neue Montreal/NeueMontreal-Regular.otf",
      weight: "400",
    },
    {
      path: "../public/font/Neue Montreal/NeueMontreal-Bold.otf",
      weight: "700",
    },
  ],
  variable: "--font-neue-montreal",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(resolveSiteUrl()),
  title: "IRCC Pakistan - Interventional Radiology & Vascular Treatment Center",
  description:
    "Pakistan's leading interventional radiology and vascular treatment center offering minimally invasive procedures including UFE, varicocele embolization, thyroid RFA, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `}
        </Script>

        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),
              dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5H23TMB');
          `}
        </Script>
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} ${neueMontreal.variable} antialiased`}
        suppressHydrationWarning
      >
        <GlobalSchema />
        <RouteSchema />

        {/* GTM Noscript */}
        <div
          dangerouslySetInnerHTML={{
            __html: `
              <noscript>
                <iframe
                  src="https://www.googletagmanager.com/ns.html?id=GTM-5H23TMB"
                  height="0"
                  width="0"
                  style="display:none;visibility:hidden"
                ></iframe>
              </noscript>
            `,
          }}
        />

        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  );
}
