import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  compress: true,
  poweredByHeader: false,
  reactCompiler: true,
  experimental: {
    optimizePackageImports: ["react-icons", "swiper"],
  },
};

export default nextConfig;
