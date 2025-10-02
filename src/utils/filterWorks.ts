// Why: 쿼리스트링 기반으로 작품 데이터를 필터링하는 로직을 분리
// What: URL 쿼리스트링과 작품 데이터를 받아 필터링된 결과를 반환하는 함수
// How: 쿼리스트링의 필터 키를 확인하여 해당 카테고리의 작품만 반환

import { Work } from "@/data/types";

/**
 * 카테고리 매핑 테이블 - 작품 데이터의 카테고리와 쿼리 키를 매핑
 */
const CATEGORY_MAPPING: Record<string, string> = {
  uxui: "uiux",
  branding: "branding",
  graphic: "graphic",
  illust: "illust",
  editorial: "editorial",
  media: "media",
  "3d": "3d",
  game: "game",
};

/**
 * 쿼리스트링을 기반으로 작품 데이터를 필터링하는 함수
 * @param works - 필터링할 작품 데이터 배열
 * @param searchParams - URL 쿼리스트링 파라미터
 * @returns 필터링된 작품 데이터 배열
 */
export function filterWorksByQuery(
  works: Work[],
  searchParams: URLSearchParams
): Work[] {
  // 쿼리스트링이 없거나 'all' 필터가 선택된 경우 모든 작품 반환
  if (
    searchParams.toString() === "" ||
    searchParams.get("category") === "all"
  ) {
    return works;
  }

  // 현재 선택된 카테고리 가져오기
  const selectedCategory = searchParams.get("category");

  // 선택된 카테고리가 없으면 모든 작품 반환
  if (!selectedCategory) {
    return works;
  }

  // 필터링된 작품 반환
  return works.filter((work) => {
    // 작품의 카테고리들을 소문자로 변환하고 매핑
    const mappedCategories = work.work_categories.map(
      (category) =>
        CATEGORY_MAPPING[category.toLowerCase()] || category.toLowerCase()
    );

    // 선택된 카테고리가 작품의 카테고리 중 하나와 매칭되면 해당 작품 포함
    return mappedCategories.includes(selectedCategory);
  });
}
