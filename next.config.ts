import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Why: 커스텀 도메인 사용 시 루트 경로에서 서빙
  // What: 커스텀 도메인에서는 basePath와 assetPrefix가 필요 없음
  // How: 환경변수가 있을 때만 basePath 설정, 없으면 루트 경로 사용
  ...(process.env.NEXT_PUBLIC_BASE_PATH && {
    basePath: process.env.NEXT_PUBLIC_BASE_PATH,
    assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  }),
};

export default nextConfig;
