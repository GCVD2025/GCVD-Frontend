// Why: 작품 데이터를 별도 파일로 분리하여 재사용성과 유지보수성 향상
// What: 작품 목록 데이터를 상수로 정의
// How: Work 타입을 사용하여 배열로 구조화

import { Work } from "./types";

export const worksData: Work[] = [
  {
    work_id: "work-1",
    work_title: "ZeroLab",
    work_sub_title: "제로의 기준을 다시 묻다",
    designer_id: "user-1",
    work_thumbnail: "work1_thumbnail.png",
    work_categories: ["UIUX", "BRANDING"],
    work_detail_images: ["work1_detail1.png", "work1_detail2.png"],
    work_description:
      "제로랩은 '제로 슈거'라는 표기 속에 숨겨진 당류와 감미료 정보를 해독해, 혈당에 안전한 식품을 쉽게 선택할 수 있도록 돕는 헬스케어 앱입니다. 스캔 한 번으로 성분을 분석하고, 혈당 기록과 대시보드로 나의 반응을 시각적으로 확인할 수 있으며, 제로랩이 검증한 안전한 식품도 앱에서 직접 구매할 수 있습니다. 당신의 건강, 숫자가 아닌 '당신만의 기준'으로 지키세요.",
  },
  {
    work_id: "work-2",
    work_title: "Brand Identity",
    work_sub_title: "브랜드 아이덴티티 디자인",
    designer_id: "user-2",
    work_thumbnail: "work2_thumbnail.png",
    work_categories: ["BRANDING", "GRAPHIC"],
    work_detail_images: ["work2_detail1.png", "work2_detail2.png"],
    work_description:
      "브랜드의 핵심 가치와 정체성을 시각적으로 표현한 브랜드 아이덴티티 디자인입니다.",
  },
  {
    work_id: "work-3",
    work_title: "Mobile App Design",
    work_sub_title: "모바일 앱 UI/UX 디자인",
    designer_id: "user-3",
    work_thumbnail: "work3_thumbnail.png",
    work_categories: ["UIUX", "MEDIA"],
    work_detail_images: ["work3_detail1.png", "work3_detail2.png"],
    work_description:
      "사용자 경험을 중심으로 한 모바일 앱 인터페이스 디자인입니다.",
  },
  {
    work_id: "work-4",
    work_title: "Editorial Design",
    work_sub_title: "편집 디자인",
    designer_id: "user-4",
    work_thumbnail: "work4_thumbnail.png",
    work_categories: ["EDITORIAL", "GRAPHIC"],
    work_detail_images: ["work4_detail1.png", "work4_detail2.png"],
    work_description:
      "타이포그래피와 레이아웃을 중심으로 한 편집 디자인 작품입니다.",
  },
];
