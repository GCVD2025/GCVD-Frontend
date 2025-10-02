"use client";

import { Suspense } from "react";
import FilterSidebar from "./FilterSidebar";
import WorkCard from "../../components/WorkCard";
import { getImageSrc } from "../../utils/getImageSrc";
import { worksData } from "../../data/works";
import { designersData } from "../../data/designers";

// Why: designer_id를 기반으로 디자이너 정보를 찾는 헬퍼 함수
// What: works 데이터와 designers 데이터를 연결하는 함수
// How: designer_id로 매칭하여 디자이너 이름을 반환
const getDesignerName = (designerId: string): string => {
  const designer = designersData.find((d) => d.designer_id === designerId);
  return designer ? designer.designer_name : "Unknown";
};

export default function Works() {
  return (
    <>
      <img
        src={getImageSrc("/images/common/background-image.png")}
        alt="background"
        className="fixed w-full h-full object-cover opacity-20"
      />

      <main className="py-6 flex min-h-screen mt-18 relative">
        {/* 좌측 필터 사이드바 */}
        <Suspense fallback={null}>
          <FilterSidebar />
        </Suspense>

        {/* Why: 작품 카드들을 그리드 레이아웃으로 배치하여 일관된 간격 유지 */}
        {/* What: 3열 그리드로 작품 카드들을 배치하는 섹션 */}
        {/* How: CSS Grid를 사용하여 240px 너비의 카드들을 20px 간격으로 배치 */}
        <section className="w-full mx-auto grid [grid-template-columns:repeat(3,240px)] gap-x-[20px] gap-y-[24px] justify-center">
          {worksData.map((work) => (
            <WorkCard
              key={work.work_id}
              id={work.work_id}
              title={work.work_title}
              author={getDesignerName(work.designer_id)}
              categories={[
                work.work_category_main.toLowerCase(),
                work.work_category_sub.toLowerCase(),
              ]}
            />
          ))}
        </section>
      </main>
    </>
  );
}
