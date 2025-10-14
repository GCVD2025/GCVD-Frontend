"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import FilterSidebar from "./FilterSidebar";
import WorkCard from "../../components/WorkCard";
import { getImageSrc } from "../../utils/getImageSrc";
import { worksData } from "../../data/works";
import { designersData } from "../../data/designers";
import { filterWorksByQuery } from "../../utils/filterWorks";

// Why: designer_id 배열을 기반으로 디자이너 정보들을 찾는 헬퍼 함수
// What: works 데이터와 designers 데이터를 연결하는 함수
// How: designer_id 배열로 매칭하여 모든 디자이너 이름을 쉼표로 구분하여 반환
const getDesignerName = (designerIds: string[]): string => {
  const designers = designersData.filter((d) =>
    designerIds.includes(d.designer_id)
  );
  return designers.length > 0
    ? designers.map((d) => d.designer_name).join(", ")
    : "Unknown";
};

// Why: useSearchParams를 사용하는 컴포넌트를 분리하여 Suspense boundary로 감싸기 위함
// What: 쿼리 파라미터를 읽어서 필터링된 작품 목록을 렌더링하는 컴포넌트
// How: useSearchParams 훅을 사용하여 필터링된 작품들을 렌더링
function WorksContent() {
  // Why: URL 쿼리스트링을 읽어서 필터링 조건을 파악
  // What: 현재 활성화된 필터 정보를 가져오는 훅
  // How: useSearchParams 훅을 사용하여 쿼리스트링 파라미터 접근
  const searchParams = useSearchParams();

  // Why: 쿼리스트링 기반으로 작품 데이터를 필터링
  // What: 현재 선택된 필터에 맞는 작품들만 추출
  // How: filterWorksByQuery 유틸리티 함수를 사용하여 필터링 수행
  const filteredWorks = filterWorksByQuery(worksData, searchParams);

  return (
    <section className="w-full mx-auto grid [grid-template-columns:repeat(3,240px)] gap-x-[20px] gap-y-[24px] justify-center">
      {filteredWorks.map((work) => (
        <WorkCard
          key={work.work_id}
          id={work.work_id}
          title={work.work_title}
          author={getDesignerName(work.designer_id)}
          categories={work.work_categories.map((category) =>
            category.toLowerCase()
          )}
          imageUrl={work.work_thumbnail}
          designerId={work.designer_id}
        />
      ))}
    </section>
  );
}

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

        {/* Why: useSearchParams를 사용하는 컴포넌트를 Suspense로 감싸서 SSG 빌드 에러 방지 */}
        {/* What: 쿼리 파라미터 기반 필터링된 작품 목록을 렌더링하는 섹션 */}
        {/* How: Suspense boundary로 감싸서 서버 사이드 렌더링 중 안전하게 처리 */}
        <Suspense
          fallback={
            <div className="w-full flex justify-center items-center">
              로딩 중...
            </div>
          }
        >
          <WorksContent />
        </Suspense>
      </main>
    </>
  );
}
