// Why: 파트너사 로고를 가로 스크롤 캐러셀로 노출해 브랜드 협업을 강조하기 위함.
// What: Swiper를 이용한 무한 루프 캐러셀. 좌우 끝단에는 페이드 블러 오버레이를 추가해 잘림을 자연스럽게 처리.
// How: Swiper 'freeMode' + 'autoplay' 조합으로 느린 자동 스크롤 구현. 더미 이미지(src) 사용, 1280px 이상만 고려.

"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import { getImageSrc } from "../utils/getImageSrc";

// Why: 실제 파트너사 로고 이미지를 사용하여 브랜드 협업을 실제로 보여주기 위함
// What: about 폴더에 추가된 파트너사 로고 이미지들을 배열로 정의
// How: 이미지 경로를 직접 지정하여 더미 이미지 대신 실제 로고 사용
const PARTNER_LOGOS = [
  "/images/about/Yoondesign.png",
  "/images/about/kinko_s.png",
  "/images/about/photo_mate.png",
  "/images/about/rixfont.png",
  "/images/about/vine_extra_color.png",
  "/images/about/오늘.png",
];

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
            {PARTNER_LOGOS.map((src, index) => (
              <SwiperSlide key={src}>
                <div className="flex h-[72px] items-center justify-center">
                  <img
                    src={getImageSrc(src)}
                    alt={`파트너 로고 ${index + 1}`}
                    className="h-[60px] w-auto object-contain"
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
