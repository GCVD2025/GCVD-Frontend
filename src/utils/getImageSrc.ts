// Why: 로컬 개발 환경과 프로덕션 환경에서 다른 이미지 경로 사용
// What: 환경에 따라 로컬 파일 또는 imgix CDN 사용
// How: NODE_ENV 환경변수를 이용하여 basePath 분기 처리

interface ImageSize {
  width?: number;
  height?: number;
}

// Why: 환경에 따른 basePath 설정을 통일하여 관리
// What: 로컬 환경에서는 빈 문자열, 프로덕션에서는 imgix CDN 사용
// How: NODE_ENV 환경변수로 분기 처리
function getBasePath(): string {
  const isLocal = process.env.NODE_ENV === "development";
  return isLocal ? "" : "https://gcvd-frontend.imgix.net";
}

// Why: 작품 썸네일 이미지 경로를 생성하는 함수
// What: 디자이너 영어 이름, 디자이너 ID, 작품 ID를 기반으로 썸네일 이미지 상대 경로 생성
// How: 단순히 상대 경로만 반환하여 책임 분리
export function getWorkThumbnailSrc(
  designerEnglishName: string,
  designerId: string,
  workId: string,
  thumbnailFileName: string
): string {
  // Why: 단순히 상대 경로만 반환하여 책임 분리
  // What: basePath와 최적화는 getImageSrc에서 처리
  // How: 폴더 구조만 반환
  return `/images/works/${designerEnglishName}_${workId}_${designerId}/${thumbnailFileName}`;
}

// Why: 작품 상세 이미지 경로를 생성하는 함수
// What: 디자이너 영어 이름, 디자이너 ID, 작품 ID를 기반으로 상세 이미지 상대 경로 생성
// How: 단순히 상대 경로만 반환하여 책임 분리
export function getWorkDetailImageSrc(
  designerEnglishName: string,
  designerId: string,
  workId: string,
  detailImageFileName: string
): string {
  // Why: 단순히 상대 경로만 반환하여 책임 분리
  // What: basePath와 최적화는 getImageSrc에서 처리
  // How: 폴더 구조만 반환
  return `/images/works/${designerEnglishName}_${workId}_${designerId}/${detailImageFileName}`;
}

// Why: 일반적인 이미지 경로를 생성하는 함수
// What: 환경에 따라 로컬 파일 또는 imgix CDN 사용
// How: 환경변수와 크기 파라미터를 조합하여 최적화된 이미지 URL 생성
export function getImageSrc(src: string, size?: ImageSize): string {
  const basePath = getBasePath();
  const fullPath = basePath + src;

  // Why: 프로덕션 환경에서만 imgix 최적화 파라미터 추가
  // What: 로컬에서는 원본 파일, 프로덕션에서는 반응형 최적화된 이미지 제공
  // How: basePath가 있을 때만 쿼리 파라미터 추가
  if (!basePath) {
    return fullPath;
  }

  // Why: 반응형 이미지를 위한 크기 파라미터 추가
  // What: width와 height가 제공되면 w, h 쿼리 파라미터 추가
  // How: size 객체의 width, height 값을 쿼리스트링에 추가
  const sizeParams = size?.width ? `&w=${size.width * 1.2}` : "";
  const heightParam = size?.height ? `&h=${size.height * 1.2}` : "";

  return `${fullPath}?auto=compress&auto=format${sizeParams}${heightParam}`;
}
