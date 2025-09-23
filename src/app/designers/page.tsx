"use client";

import DesignerCard from "../../components/DesignerCard";
import {
  CategoriesDeepGreenLeftIcon,
  CategoriesDeepGreenRightIcon,
} from "../../components/icons";
import { designersData } from "../../data/designers";

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
            <DesignerCard key={designer.designer_id} designer={designer} />
          ))}
        </section>
      </main>
    </>
  );
}
