"use client";

import DesignerCard from "../../components/DesignerCard";
import {
  CategoriesDeepGreenLeftIcon,
  CategoriesDeepGreenRightIcon,
} from "../../components/icons";

// Why: 디자이너 데이터를 상수로 분리하여 재사용성과 유지보수성 향상
// What: 디자이너 목록 데이터 정의
// How: 배열 형태로 디자이너 정보들을 구조화
const designersData = [
  {
    name: "홍길동",
    nameEn: "Hong Gil Dong",
    workTitle: "작품명",
    email: "email@gmail.com",
  },
  {
    name: "김철수",
    nameEn: "Kim Chul Soo",
    workTitle: "작품명",
    email: "kim@gmail.com",
  },
  {
    name: "이영희",
    nameEn: "Lee Young Hee",
    workTitle: "작품명",
    email: "lee@gmail.com",
  },
  {
    name: "박민수",
    nameEn: "Park Min Soo",
    workTitle: "작품명",
    email: "park@gmail.com",
  },
  {
    name: "정수진",
    nameEn: "Jung Soo Jin",
    workTitle: "작품명",
    email: "jung@gmail.com",
  },
  {
    name: "최현우",
    nameEn: "Choi Hyun Woo",
    workTitle: "작품명",
    email: "choi@gmail.com",
  },
  {
    name: "한지은",
    nameEn: "Han Ji Eun",
    workTitle: "작품명",
    email: "han@gmail.com",
  },
  {
    name: "윤태호",
    nameEn: "Yoon Tae Ho",
    workTitle: "작품명",
    email: "yoon@gmail.com",
  },
];

export default function Designers() {
  return (
    <>
      <img
        src="/images/common/background-image.png"
        alt="background"
        className="fixed w-full h-full object-cover opacity-20"
      />

      <main className="py-6 min-h-screen mt-18 relative">
        {/* Why: 디자이너 프로필 섹션의 부제목을 시각적으로 강조 */}
        {/* What: CategoriesDeepGreenLeftIcon과 CategoriesDeepGreenRightIcon을 사용한 부제목 */}
        {/* How: flex 레이아웃으로 아이콘들과 텍스트를 중앙 정렬하여 배치 */}
        <div className="flex items-center justify-center mb-6">
          <CategoriesDeepGreenLeftIcon className="text-[#00A78E]" />
          <span className="mx-4 text-[16px] font-extrabold text-[#00A78E]">
            디자이너 프로필
          </span>
          <CategoriesDeepGreenRightIcon className="text-[#00A78E]" />
        </div>

        {/* Why: 디자이너 카드들을 그리드 레이아웃으로 배치하여 일관된 간격 유지 */}
        {/* What: 4열 그리드로 디자이너 카드들을 배치하는 섹션 */}
        {/* How: CSS Grid를 사용하여 240px 너비의 카드들을 20px 간격으로 배치 */}
        <section className="w-full mx-auto grid [grid-template-columns:repeat(4,auto)] gap-x-[20px] gap-y-[24px] justify-center">
          {designersData.map((designer) => (
            <DesignerCard
              key={designer.email}
              name={designer.name}
              nameEn={designer.nameEn}
              workTitle={designer.workTitle}
              email={designer.email}
            />
          ))}
        </section>
      </main>
    </>
  );
}
