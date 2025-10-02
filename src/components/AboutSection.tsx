import { useScroll, useTransform, motion } from "framer-motion";
import PerCharText from "./PerCharText";
import { useRef } from "react";
import { getImageSrc } from "../utils/getImageSrc";

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Why: 각 이미지가 서로 다른 시점(0.4/0.5/0.6)에 서서히 나타나도록 연출
  // What: scrollYProgress 구간을 opacity 0→1로 매핑 (0.1 구간 동안 페이드인)
  // How: useTransform으로 [T, T+0.1] → [0, 1] 매핑, 필요 시 구간 폭(FADE_WINDOW)을 조정
  const FADE_WINDOW = 0.1;
  const confettiStart = 0.4;
  const greenStart = 0.2;
  const handStart = 0.05;
  const confettiOpacity = useTransform(
    scrollYProgress,
    [confettiStart, confettiStart + FADE_WINDOW],
    [0, 1]
  );
  const greenOpacity = useTransform(
    scrollYProgress,
    [greenStart, greenStart + FADE_WINDOW],
    [0, 1]
  );
  const handOpacity = useTransform(
    scrollYProgress,
    [handStart, handStart + FADE_WINDOW],
    [0, 1]
  );

  // Why: 원래 CSS translate-y 위치로 수렴하도록 아래→위 슬라이드
  // What: 각 이미지 시점에서 y를 20%→0%로 보간 (CSS 클래스는 수정하지 않음)
  const confettiY = useTransform(
    scrollYProgress,
    [confettiStart, confettiStart + FADE_WINDOW],
    ["20%", "0%"]
  );
  const greenY = useTransform(
    scrollYProgress,
    [greenStart, greenStart + FADE_WINDOW],
    ["20%", "0%"]
  );
  const handY = useTransform(
    scrollYProgress,
    [handStart, handStart + FADE_WINDOW],
    ["20%", "0%"]
  );

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

        <motion.img
          className="absolute translate-y-[-20%] z-0"
          style={{ opacity: confettiOpacity, y: confettiY }}
          src={getImageSrc("/images/about/about_section_confetti.png")}
          alt="confetti"
        />

        <motion.img
          className="absolute translate-y-[100%] z-0"
          style={{ opacity: greenOpacity, y: greenY }}
          src={getImageSrc("/images/about/about_section_green_light.png")}
          alt="green light"
        />
        <motion.img
          className="absolute translate-y-[68%] z-0"
          style={{ opacity: handOpacity, y: handY }}
          src={getImageSrc("/images/about/about_section_hand.png")}
          alt="hand"
        />
      </div>
    </section>
  );
};

export default AboutSection;
