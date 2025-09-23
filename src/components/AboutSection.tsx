import { useScroll } from "framer-motion";
import PerCharText from "./PerCharText";
import { useRef } from "react";

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  console.log(scrollYProgress);

  return (
    <section ref={sectionRef} className="h-[400vh] text-center my-100">
      <div className="sticky top-[40%] translate-y-[-40%] flex flex-col justify-center items-center">
        <h3 className="font-bold text-[#00A78E] text-[28px] mb-11 z-10">
          About
        </h3>
        <div className="z-10">
          <PerCharText
            scrollYProgress={scrollYProgress}
            text={[
              "컨페티들은 펑-! 축포가 터지는 순간 반짝이며 하늘을 수놓습니다.",
              "Jubilee는 오랜 시간 끝에 맞이한 기쁨과 축하로 특정 주기를 나타내는 용어로서 사용됩니다.",
              "컨페티들이 가장 돋보일 수 있는 순간, 우리는 서로를 축하하고 스스로를 축복하며 새로운 출발점에 서고자 합니다.",
            ]}
          />
        </div>

        <img
          className="absolute translate-y-[-20%] z-0"
          src="/images/about/about_section_confetti.png"
          alt="confetti"
        />

        <img
          className="absolute translate-y-[100%] z-0"
          src="/images/about/about_section_green_light.png"
          alt="green light"
        />
        <img
          className="absolute translate-y-[68%] z-0"
          src="/images/about/about_section_hand.png"
          alt="hand"
        />
      </div>
      {/*
        Why: 세 개의 이미지를 섹션 스크롤 동안 하단에 고정하고, 서로 겹쳐 하나의 레이어처럼 보이게 하기 위함
        What: 바깥 래퍼는 sticky(bottom:0)로 섹션 내에서만 고정, 내부를 relative로 두고 각 이미지는 absolute bottom-0 중앙 정렬로 겹침
        How: sticky bottom-0 z-10(pointer-events-none) + 내부 relative 컨테이너 + 각 img에 absolute bottom-0 left-1/2 -translate-x-1/2 적용
      */}
      {/*
        Why: 하단 이미지를 섹션 범위 내에서만 뷰포트 하단에 고정하고, 서로 겹친 상태로 유지하기 위함
        What: sticky(bottom:0) + h-screen로 하단 기준을 고정, 내부 relative h-full에서 각 이미지를 absolute bottom-0로 중앙 정렬해 겹침
        How: 래퍼에 sticky bottom-0 z-10 pointer-events-none h-screen, 내부에 relative w-full h-full, 각 img에 absolute bottom-0 left-1/2 -translate-x-1/2 적용
      */}
    </section>
  );
};

export default AboutSection;
