import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // "standalone" is needed for self-hosted environments (cPanel / Docker)
  // but breaks Vercel, which uses its own serverless runtime.
  // Set NEXT_OUTPUT=standalone in cPanel; leave unset for Vercel.
  ...(process.env.NEXT_OUTPUT === "standalone" ? { output: "standalone" } : {}),
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

export default nextConfig;
