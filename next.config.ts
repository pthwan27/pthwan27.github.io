import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoName = "pthwan27.github.io";
/**
 * @type {import('next').NextConfig}
 */
const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,

  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  basePath: "",
  images: {
    domains: ["picsum.photos"],
    unoptimized: true,
  },
  assetPrefix: isProd ? `/${repoName}/` : "",
  sassOptions: {
    silenceDeprecations: ["legacy-js-api"],
  },
};

export default nextConfig;
