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
    domains: ["picsum.photos"],
    unoptimized: true,
  },
  assetPrefix: isProd ? `/${repoName}/` : "",
  sassOptions: {
    silenceDeprecations: ["legacy-js-api"],
  },

  webpack(config) {
    // SVG 파일을 처리하는 기존 규칙 찾기
    const fileLoaderRule = config.module.rules.find((rule: any) => rule.test?.test?.(".svg"));

    config.module.rules.push(
      // url로 끝나는 SVG 임포트에 대해 기존 규칙 재적용
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // 다른 모든 *.svg 임포트를 React 컴포넌트로 변환
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
        use: ["@svgr/webpack"],
      }
    );

    // *.svg는 이제 처리되므로 파일 로더 규칙에서 제외
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

export default nextConfig;
