"use client";

import { Suspense } from "react";
import FilterSidebar from "./FilterSidebar";
import WorkCard from "../../components/WorkCard";

// Why: 작품 데이터를 상수로 분리하여 재사용성과 유지보수성 향상
// What: 작품 목록 데이터 정의
// How: 배열 형태로 작품 정보들을 구조화
const worksData = [
  {
    id: "1",
    title: "프로젝트 제목",
    author: "홍길동",
    categories: ["branding", "illust"],
  },
  {
    id: "2",
    title: "프로젝트 제목",
    author: "홍길동",
    categories: ["branding", "illust"],
  },
  {
    id: "3",
    title: "프로젝트 제목",
    author: "홍길동",
    categories: ["branding", "illust"],
  },
  {
    id: "4",
    title: "프로젝트 제목",
    author: "홍길동",
    categories: ["branding", "illust"],
  },
  {
    id: "5",
    title: "프로젝트 제목",
    author: "홍길동",
    categories: ["branding", "illust"],
  },
  {
    id: "6",
    title: "프로젝트 제목",
    author: "홍길동",
    categories: ["branding", "illust"],
  },
  {
    id: "7",
    title: "프로젝트 제목",
    author: "홍길동",
    categories: ["branding", "illust"],
  },
  {
    id: "8",
    title: "프로젝트 제목",
    author: "홍길동",
    categories: ["branding", "illust"],
  },
  {
    id: "9",
    title: "프로젝트 제목",
    author: "홍길동",
    categories: ["branding", "illust"],
  },
  {
    id: "10",
    title: "프로젝트 제목",
    author: "홍길동",
    categories: ["branding", "illust"],
  },
  {
    id: "11",
    title: "프로젝트 제목",
    author: "홍길동",
    categories: ["branding", "illust"],
  },
  {
    id: "12",
    title: "프로젝트 제목",
    author: "홍길동",
    categories: ["branding", "illust"],
  },
  {
    id: "13",
    title: "프로젝트 제목",
    author: "홍길동",
    categories: ["branding", "illust"],
  },
  {
    id: "14",
    title: "프로젝트 제목",
    author: "홍길동",
    categories: ["branding", "illust"],
  },
  {
    id: "15",
    title: "프로젝트 제목",
    author: "홍길동",
    categories: ["branding", "illust"],
  },
];

export default function Works() {
  return (
    <>
      <img
        src="/images/common/background-image.png"
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
              key={work.id}
              id={work.id}
              title={work.title}
              author={work.author}
              categories={work.categories}
            />
          ))}
        </section>
      </main>
    </>
  );
}
