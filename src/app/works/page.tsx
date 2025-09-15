"use client";

import FilterSidebar from "./FilterSidebar";

export default function Works() {
  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      <main className="py-6 flex">
        {/* 좌측 필터 사이드바 */}
        <FilterSidebar />

        {/* Why: 제공된 시안에 맞는 단일 마크업만 남기기 위함 */}
        {/* What: 240x308, radius 12, 흰색 그라데이션(80%→40%), 그림자 blur 24, 배경 블러 16 */}
        {/* How: grid 3열 레이아웃 + Tailwind 임의 값 클래스로 gradient/shadow/backdrop-blur 지정 */}
        <section className="w-full absolute left-[50%] translate-x-[-50%] mx-auto grid [grid-template-columns:repeat(3,240px)] gap-x-[20px] gap-y-[24px] justify-center">
          <div
            className="w-[240px] h-[308px] rounded-[12px] 
            bg-[linear-gradient(180deg,rgba(255,255,255,0.8)_0%,rgba(255,255,255,0.4)_100%)]
            shadow-[0_0_24px_rgba(0,0,0,0.05)] backdrop-blur-[16px]"
          />
          <div
            className="w-[240px] h-[308px] rounded-[12px] 
            bg-[linear-gradient(180deg,rgba(255,255,255,0.8)_0%,rgba(255,255,255,0.4)_100%)]
            shadow-[0_0_24px_rgba(0,0,0,0.05)] backdrop-blur-[16px]"
          />
          <div
            className="w-[240px] h-[308px] rounded-[12px] 
            bg-[linear-gradient(180deg,rgba(255,255,255,0.8)_0%,rgba(255,255,255,0.4)_100%)]
            shadow-[0_0_24px_rgba(0,0,0,0.05)] backdrop-blur-[16px]"
          />
          <div
            className="w-[240px] h-[308px] rounded-[12px] 
            bg-[linear-gradient(180deg,rgba(255,255,255,0.8)_0%,rgba(255,255,255,0.4)_100%)]
            shadow-[0_0_24px_rgba(0,0,0,0.05)] backdrop-blur-[16px]"
          />
        </section>
      </main>
    </div>
  );
}
