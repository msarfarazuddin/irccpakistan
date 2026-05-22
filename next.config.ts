import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // "standalone" is needed for self-hosted environments (cPanel / Docker)
  // but breaks Vercel, which uses its own serverless runtime.
  // Set NEXT_OUTPUT=standalone in cPanel; leave unset for Vercel.
  ...(process.env.NEXT_OUTPUT === "standalone" ? { output: "standalone" } : {}),
  
  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
    formats: ["image/webp", "image/avif"],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Compression and performance
  compress: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,

  async redirects() {
    return [
      {
        source: "/radiofrequency-ablation-of-osteoid-osteoma/contact",
        destination: "/Radiofrequency-Ablation-of-Osteoid-Osteoma",
        permanent: true,
      },
      {
        source: "/radiofrequency-ablation-of-osteoid-osteoma/contact/",
        destination: "/Radiofrequency-Ablation-of-Osteoid-Osteoma",
        permanent: true,
      },
      {
        source: "/varicocele-and-male-infertility-is-there-any-link/contact",
        destination: "/blog/varicocele-and-male-infertility-is-there-any-link",
        permanent: true,
      },
      {
        source: "/varicocele-and-male-infertility-is-there-any-link/contact/",
        destination: "/blog/varicocele-and-male-infertility-is-there-any-link",
        permanent: true,
      },
      {
        source: "/varicocele-and-male-infertility-is-there-any-link",
        destination: "/blog/varicocele-and-male-infertility-is-there-any-link",
        permanent: true,
      },
      {
        source: "/varicocele-and-male-infertility-is-there-any-link/",
        destination: "/blog/varicocele-and-male-infertility-is-there-any-link",
        permanent: true,
      },
      {
        source: "/am-i-in-danger-if-i-dont-treat-my-varicose-veins/contact",
        destination: "/blog/am-i-in-danger-if-i-dont-treat-my-varicose-veins",
        permanent: true,
      },
      {
        source: "/am-i-in-danger-if-i-dont-treat-my-varicose-veins/contact/",
        destination: "/blog/am-i-in-danger-if-i-dont-treat-my-varicose-veins",
        permanent: true,
      },
      {
        source: "/get-free-consultation/contact",
        destination: "/get-consultation",
        permanent: true,
      },
      {
        source: "/get-free-consultation/contact/",
        destination: "/get-consultation",
        permanent: true,
      },
      {
        source: "/get-free-consultation",
        destination: "/get-consultation",
        permanent: true,
      },
      {
        source: "/get-free-consultation/",
        destination: "/get-consultation",
        permanent: true,
      },
       
      
    ];
  },

  // Headers for caching
  async headers() {
    return [
      {
        source: "/public/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
