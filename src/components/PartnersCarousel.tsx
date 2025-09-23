// Why: 파트너사 로고를 가로 스크롤 캐러셀로 노출해 브랜드 협업을 강조하기 위함.
// What: Swiper를 이용한 무한 루프 캐러셀. 좌우 끝단에는 페이드 블러 오버레이를 추가해 잘림을 자연스럽게 처리.
// How: Swiper 'freeMode' + 'autoplay' 조합으로 느린 자동 스크롤 구현. 더미 이미지(src) 사용, 1280px 이상만 고려.

"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";

const DUMMY_LOGOS = Array.from({ length: 10 }).map(
  (_, i) => `https://placehold.co/200x64?text=Logo+${i + 1}`
);

function PartnersCarousel(): React.ReactElement {
  return (
    <section className="w-full mb-35">
      <div className="mx-auto w-full max-w-[980px]">
        <h3 className="text-[24px] leading-8 font-bold text-[#00A78E] mb-16">
          Partners
        </h3>

        {/* 상위 래퍼에 마스크 적용: 좌/우 가장자리 페이드 */}
        <div
          className="relative"
          style={{
            maskImage:
              "linear-gradient(90deg, transparent 0, #000 6%, #000 94%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(90deg, transparent 0, #000 6%, #000 94%, transparent 100%)",
          }}
        >
          <Swiper
            slidesPerView={5}
            spaceBetween={32}
            loop
            freeMode
            speed={4000}
            autoplay={{ delay: 0 }}
            modules={[Autoplay, FreeMode]}
            className="py-4"
          >
            {DUMMY_LOGOS.map((src) => (
              <SwiperSlide key={src}>
                <div className="flex h-[72px] items-center justify-center">
                  <img
                    src={src}
                    alt="파트너 로고 더미"
                    className="h-[64px] w-auto object-contain"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default PartnersCarousel;
