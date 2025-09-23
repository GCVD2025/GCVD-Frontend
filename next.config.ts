import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Why: 로컬(preview)과 GitHub Pages(배포)에서 서로 다른 베이스 경로 필요
  // What: 환경변수로 베이스 경로를 주입하여 유연하게 설정
  // How: 로컬은 빈 문자열, CI(GitHub Actions)에서는 "/GCVD-Frontend"로 설정
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/GCVD-Frontend" : "",
};

export default nextConfig;
