import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoName = "pthwan27.github.io";
/**
 * @type {import('next').NextConfig}
 */
const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? `/${repoName}/` : "",
  sassOptions: {
    silenceDeprecations: ["legacy-js-api"],
  },
};

export default nextConfig;
