import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoName = "pthwan27.github.io";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? `/${repoName}/` : "",
  // basePath: isProd ? `/${repoName}` : "",
};

module.exports = nextConfig;
