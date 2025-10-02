"use client";

// Why: About 페이지 첫 화면에서 전시 브랜딩(좌측 이미지), 핵심 비주얼(중앙 카드), 정보(우측 텍스트)를 동시에 전달해 의도와 맥락을 명확히 보여주기 위함.
// What: 좌-중-우 3열 고정 레이아웃(1280px 이상만 지원). 중앙은 단순한 흰색 카드 박스, 좌측은 제공된 3개 이미지 배치, 우측은 기간/운영 시간/전시장소 텍스트.
// How: Tailwind로 고정 폭 컨테이너와 컬럼 간격을 구성. 표준 <img>만 사용(next/image 금지 규칙 준수). 타이포는 14px/20px과 #202020 적용.

import { useState, useEffect, useRef } from "react";
import { getImageSrc } from "../utils/getImageSrc";

const HeroSection = () => {
  // Why: 비디오가 로딩된 뒤 3초 후 텍스트가 좌/우에서 슬라이드 인 되도록 제어 상태가 필요
  const [reveal, setReveal] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Why: 비디오가 이미 로드된 상태로 렌더될 수 있어 onLoaded 핸들러가 건너뛰어질 수 있음
  // What: readyState를 즉시 확인하고, 미준비면 once 리스너로 보강
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleReady = () => setReveal(true);

    if (video.readyState >= 2 /* HAVE_CURRENT_DATA */) {
      handleReady();
      return;
    }

    video.addEventListener("canplay", handleReady, { once: true });

    return () => {
      video.removeEventListener("canplay", handleReady);
    };
  }, []);

  return (
    <section className=" w-full min-h-[1200px]">
      {/* 배경 이미지: 섹션 전체에 깔림 */}
      <div className="absolute inset-0 ">
        <img
          src={getImageSrc("/images/about/hero_section_background.png")}
          alt="About 섹션 배경 그래픽"
          className="w-full object-cover opacity-0 fade-in-up-background delay-1s"
        />
      </div>
      {/* 고정 컨테이너: 3열 레이아웃 */}
      <div className="relative z-10 mx-auto max-w-[1200px] px-0 py-14">
        <div className="mx-auto flex justify-center items-stretch gap-9 h-[720px]">
          {/* 좌측: 브랜딩 이미지 묶음 */}
          <div className="shrink-0 h-full ml-auto radial-right">
            <figure
              className="h-full mt-[80%] ml-13 mr-3"
              aria-label="전시 브랜딩"
            >
              {/* 로고 */}
              <img
                src={getImageSrc("/images/about/hero_section_Jubilee.png")}
                alt="Jubilee 로고"
                className={`block w-[200px] h-auto mb-5 opacity-0 ${
                  reveal ? "slide-in-left delay-3_2s" : ""
                }`}
              />
              {/* 서브 타이틀 */}
              <img
                src={getImageSrc(
                  "/images/about/hero_section_sub_title_everything.png"
                )}
                alt="everything all at once 서브 타이틀"
                className={`block w-[220px] h-auto mb-13 opacity-0 ${
                  reveal ? "slide-in-left delay-3_4s" : ""
                }`}
              />
              {/* 학교/전시 문구 */}
              <figcaption
                className={`text-[14px] leading-5 text-right text-[#202020] opacity-0 ${
                  reveal ? "slide-in-left delay-3_6s" : ""
                }`}
              >
                <p className="mb-1">2025 가천대학교 시각디자인학과</p>
                <p>40회 졸업전시</p>
              </figcaption>
            </figure>
          </div>

          {/* 중앙: 단순 흰색 카드 */}

          <video
            className="w-[520px] h-[720px] rounded-[16px] opacity-0 fade-in-up-video delay-0_5s"
            src={getImageSrc("/images/about/hero_section_video.mp4")}
            autoPlay
            muted
            playsInline
            preload="auto"
            ref={videoRef}
          />

          {/* 우측: 전시 정보 텍스트 */}
          <div className="shrink-0 h-full mr-auto radial-left">
            <aside
              className="h-full w-full mt-[80%] mr-13 ml-3"
              aria-label="전시 정보"
            >
              <dl className="space-y-12 text-[14px] leading-5 text-[#202020]">
                <div
                  className={`opacity-0 ${
                    reveal ? "slide-in-right delay-4_4s" : ""
                  }`}
                >
                  <dt className="mb-3 text-[#7A7A7A]">기간</dt>
                  <dd>
                    <p>2025. 10. 20. - 2025. 10. 28.</p>
                  </dd>
                </div>
                <div
                  className={`opacity-0 ${
                    reveal ? "slide-in-right delay-4_6s" : ""
                  }`}
                >
                  <dt className="mb-3 text-[#7A7A7A]">운영 시간</dt>
                  <dd>
                    <p>월-금: 10AM - 8PM</p>
                    <p>토-일: 10AM - 6PM</p>
                  </dd>
                </div>
                <div
                  className={`opacity-0 ${
                    reveal ? "slide-in-right delay-4_8s" : ""
                  }`}
                >
                  <dt className="mb-3 text-[#7A7A7A]">전시 장소</dt>
                  <dd>
                    <p>경기도 성남시 수정구 성남대로 1342</p>
                    <p>가천대학교 비전타워 B1</p>
                  </dd>
                </div>
              </dl>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
