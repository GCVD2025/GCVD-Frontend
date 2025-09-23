// Why: GitHub Pages 배포 시 basePath가 자동으로 적용되지 않는 문제 해결
// What: 이미지 경로에 basePath를 동적으로 추가하는 유틸리티 함수
// How: 환경변수를 이용하여 basePath 분기 처리

export function getImageSrc(src: string): string {
  // Why: 환경변수로 basePath 설정을 통일하여 관리
  // What: NEXT_PUBLIC_BASE_PATH 환경변수 값을 사용
  // How: 환경변수가 있으면 추가, 없으면 빈 문자열 사용

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return basePath + src;
}
