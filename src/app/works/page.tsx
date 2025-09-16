"use client";

import FilterSidebar from "./FilterSidebar";
import WorkCard from "../../components/WorkCard";

// Why: 작품 데이터를 상수로 분리하여 재사용성과 유지보수성 향상
// What: 작품 목록 데이터 정의
// How: 배열 형태로 작품 정보들을 구조화
const worksData = [
  {
    title: "프로젝트 제목",
    author: "홍길동",
    categories: ["branding", "illust"],
  },
  {
    title: "프로젝트 제목",
    author: "홍길동",
    categories: ["branding", "illust"],
  },
  {
    title: "프로젝트 제목",
    author: "홍길동",
    categories: ["branding", "illust"],
  },
  {
    title: "프로젝트 제목",
    author: "홍길동",
    categories: ["branding", "illust"],
  },
  {
    title: "프로젝트 제목",
    author: "홍길동",
    categories: ["branding", "illust"],
  },
  {
    title: "프로젝트 제목",
    author: "홍길동",
    categories: ["branding", "illust"],
  },
  {
    title: "프로젝트 제목",
    author: "홍길동",
    categories: ["branding", "illust"],
  },
  {
    title: "프로젝트 제목",
    author: "홍길동",
    categories: ["branding", "illust"],
  },
  {
    title: "프로젝트 제목",
    author: "홍길동",
    categories: ["branding", "illust"],
  },
  {
    title: "프로젝트 제목",
    author: "홍길동",
    categories: ["branding", "illust"],
  },
  {
    title: "프로젝트 제목",
    author: "홍길동",
    categories: ["branding", "illust"],
  },
  {
    title: "프로젝트 제목",
    author: "홍길동",
    categories: ["branding", "illust"],
  },
  {
    title: "프로젝트 제목",
    author: "홍길동",
    categories: ["branding", "illust"],
  },
  {
    title: "프로젝트 제목",
    author: "홍길동",
    categories: ["branding", "illust"],
  },
  {
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
      <main className="py-6 flex min-h-screen bg-[#f9f9f9]">
        {/* 좌측 필터 사이드바 */}
        <FilterSidebar />

        {/* Why: 작품 카드들을 그리드 레이아웃으로 배치하여 일관된 간격 유지 */}
        {/* What: 3열 그리드로 작품 카드들을 배치하는 섹션 */}
        {/* How: CSS Grid를 사용하여 240px 너비의 카드들을 20px 간격으로 배치 */}
        <section className="w-full absolute left-[50%] translate-x-[-50%] mx-auto grid [grid-template-columns:repeat(3,240px)] gap-x-[20px] gap-y-[24px] justify-center">
          {worksData.map((work, index) => (
            <WorkCard
              key={index}
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
