"use client";

import { PartnersCarousel } from "@/components";
import AboutSection from "@/components/AboutSection";
import AboutSection2 from "@/components/AboutSection2";
import HeroSection from "@/components/HeroSection";

export default function About() {
  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      <main className="container mx-auto px-8 py-8">
        <HeroSection />
        <AboutSection />

        <AboutSection2 />

        {/* 파트너스 캐러셀 */}
        <PartnersCarousel />

        {/*
          Why: 페이지 하단(푸터 바로 위)에 운영 위원회와 협력자 정보를 고정 레이아웃으로 제공해 신뢰성과 공로 표기를 명확히 하기 위함.
          What: 1280px 고정 최대 폭의 2열 섹션. 좌측은 "2025 졸업 준비 위원회" 타이틀과 역할/명단, 우측은 "도움을 주신 분들" 명단을 표시.
          How: Tailwind CSS로 그리드(2cols)와 타이포를 구성. 페이지 안쪽에 위치시키고, 레이아웃의 Footer는 수정하지 않으며 이 섹션이 Footer 직전에 렌더링되도록 배치.
        */}
        <section className="w-full mt-16 mb-38">
          <div className="mx-auto max-w-[980px]">
            {/* 좌/우 두 묶음: 각 묶음 내부에 타이틀 + 본문 포함 */}
            <div className="flex justify-between gap-10">
              {/* 좌측 묶음: 졸업 준비 위원회 */}
              <div className="text-[#202020]">
                <h3 className="text-[24px] leading-8 font-bold text-[#00A78E] mb-16">
                  2025 졸업 준비 위원회
                </h3>
                <div className="grid grid-cols-5 gap-x-18">
                  {/* 각 컬럼 */}
                  <div>
                    <p className="text-[16px] font-semibold mb-6">위원장</p>
                    <div className="text-[16px] font-normal space-y-6">
                      <p>김선우</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-[16px] font-semibold mb-6">부위원장</p>
                    <div className="text-[16px] font-normal space-y-6">
                      <p>최병헌</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-[16px] font-semibold mb-6">기획</p>
                    <div className="text-[16px] font-normal space-y-2">
                      <p>박경은</p>
                      <p>권하연</p>
                      <p>배주현</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-[16px] font-semibold mb-6">홍보</p>
                    <div className="text-[16px] font-normal space-y-6">
                      <p>이시영</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-[16px] font-semibold mb-6">디자인</p>
                    <div className="text-[16px] font-normal space-y-2">
                      <p>한지윤</p>
                      <p>고보경</p>
                      <p>김세은</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 우측 묶음: 도움을 주신 분들 */}
              <div className="text-[#202020]">
                <h3 className="text-[24px] leading-8 font-bold text-[#00A78E] mb-16">
                  도움을 주신 분들
                </h3>
                <div className="grid grid-cols-3 gap-x-10">
                  <div>
                    <p className="text-[16px] font-semibold mb-6">개발</p>
                    <div className="col-span-2 text-[16px] font-normal space-y-2">
                      <p>윤해민</p>
                      <p>조상범</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
