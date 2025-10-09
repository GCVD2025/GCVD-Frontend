// Why: GitHub Pages 배포 시 basePath가 자동으로 적용되지 않는 문제 해결
// What: 이미지 경로에 basePath를 동적으로 추가하는 유틸리티 함수
// How: 환경변수를 이용하여 basePath 분기 처리

interface ImageSize {
  width?: number;
  height?: number;
}

export function getImageSrc(src: string, size?: ImageSize): string {
  // Why: 환경변수로 basePath 설정을 통일하여 관리
  // What: NEXT_PUBLIC_BASE_PATH 환경변수 값을 사용
  // How: 환경변수가 있으면 추가, 없으면 빈 문자열 사용

  const basePath = "https://gcvd-frontend.imgix.net";
  // https://gcvd2025.github.io/GCVD-Frontend
  // https://gcvd-frontend.imgix.net

  // Why: 반응형 이미지를 위한 크기 파라미터 추가
  // What: width와 height가 제공되면 w, h 쿼리 파라미터 추가
  // How: size 객체의 width, height 값을 쿼리스트링에 추가
  const sizeParams = size?.width ? `&w=${size.width * 1.2}` : "";
  const heightParam = size?.height ? `&h=${size.height * 1.2}` : "";

  return (
    basePath + src + "?auto=compress&auto=format" + sizeParams + heightParam
  );
}
