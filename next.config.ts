import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  turbopack: { root: process.cwd() },
  images: { formats: ["image/avif", "image/webp"] },
  async redirects() {
    return [
      { source: "/contact-5", destination: "/contact", permanent: true },
      { source: "/online-ordering", destination: "/order-online", permanent: true },
      { source: "/ourstory", destination: "/about", permanent: true },
      { source: "/promociones-para-fiestas", destination: "/catering", permanent: true },
    ];
  },
};

export default nextConfig;
