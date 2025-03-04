import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config) => {
    config.cache = {
      type: "filesystem",
      compression: "brotli",
      cacheDirectory: "/.next/cache/webpack",
      store: "pack"
    };
    config.optimization = {
      ...config.optimization,
      realContentHash: false
    }
    return config;
  }
};

export default nextConfig;
