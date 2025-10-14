// Why: GitHub Pages 배포 시 basePath가 자동으로 적용되지 않는 문제 해결
// What: 이미지 경로에 basePath를 동적으로 추가하는 유틸리티 함수
// How: 환경변수를 이용하여 basePath 분기 처리

interface ImageSize {
  width?: number;
  height?: number;
}

// Why: 작품 썸네일 이미지 경로를 생성하는 함수
// What: 디자이너 영어 이름, 디자이너 ID, 작품 ID를 기반으로 썸네일 이미지 경로 생성
// How: 새로운 폴더 구조 {designer_english_name}_{designer_id}_{work_id}에 맞춰 경로 생성
export function getWorkThumbnailSrc(
  designerEnglishName: string,
  designerId: string,
  workId: string,
  thumbnailFileName: string
): string {
  const basePath = "https://gcvd-frontend.imgix.net";
  const folderPath = `/images/works/${designerEnglishName}_${workId}_${designerId}`;
  return `${basePath}${folderPath}/${thumbnailFileName}?auto=compress&auto=format`;
}

// Why: 작품 상세 이미지 경로를 생성하는 함수
// What: 디자이너 영어 이름, 디자이너 ID, 작품 ID를 기반으로 상세 이미지 경로 생성
// How: 새로운 폴더 구조에 맞춰 상세 이미지 경로 생성
export function getWorkDetailImageSrc(
  designerEnglishName: string,
  designerId: string,
  workId: string,
  detailImageFileName: string
): string {
  const basePath = "https://gcvd-frontend.imgix.net";
  const folderPath = `/images/works/${designerEnglishName}_${designerId}_${workId}`;
  return `${basePath}${folderPath}/${detailImageFileName}?auto=compress&auto=format`;
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
