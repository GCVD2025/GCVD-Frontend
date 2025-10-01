"use client";

import { PartnersCarousel } from "@/components";
import { useEffect, useRef } from "react";
import AboutSection from "@/components/AboutSection";
import AboutSection2 from "@/components/AboutSection2";
import HeroSection from "@/components/HeroSection";

export default function About() {
  // Why: 비디오가 화면에 완전히 나타났을 때만 한 번 재생하도록 제어하기 위함
  // What: 비디오 컨테이너와 비디오 요소를 참조하고, 재생 상태를 추적하여 한 번만 실행
  // How: threshold 0.35 이상일 때 video.play() 호출하고, 재생 후 observer 해제
  const videoContainerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const hasPlayedRef = useRef(false);

  useEffect(() => {
    const containerEl = videoContainerRef.current;
    const videoEl = videoRef.current;
    if (!containerEl || !videoEl) return;

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      const entry = entries[0];
      const isFullyVisible =
        entry.isIntersecting && entry.intersectionRatio >= 0.35;

      if (isFullyVisible && !hasPlayedRef.current) {
        hasPlayedRef.current = true;
        // iOS/Safari에서도 muted일 때 자동 재생 가능. 에러는 무시
        void videoEl.play().catch(() => undefined);
        // 한 번 재생했으므로 observer 해제
        observer.disconnect();
      }
    };

    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      threshold: [0, 0.5, 0.95, 1],
    });
    observer.observe(containerEl);

    return () => observer.disconnect();
  }, []);
  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      <main className="container mx-auto px-8 py-8">
        <HeroSection />
        <AboutSection />

        <AboutSection2 />
      </main>

      {/* Why: thirdcard.mp4 비디오로 화면을 꽉 채우는 섹션 */}
      {/* What: 전체 화면 크기의 비디오 배경으로 시각적 임팩트 제공 */}
      {/* How: sticky positioning으로 스크롤해도 고정되도록 설정하고, 완전 가시 시 재생 */}
      <section className="w-screen h-[200vh] sticky top-0 z-10 mb-240">
        <div ref={videoContainerRef} className="w-screen h-screen sticky top-0">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            src="/images/about/thirdcard.mp4"
            muted
            playsInline
          />
        </div>
      </section>

      <main className="container mx-auto px-8 py-8">
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
