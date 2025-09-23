import { useScroll, useTransform, motion } from "framer-motion";
import PerCharText from "./PerCharText";
import { useRef } from "react";

const AboutSection2 = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Why: 각 이미지가 서로 다른 시점(0.4/0.5/0.6)에 서서히 나타나도록 연출
  // What: scrollYProgress 구간을 opacity 0→1로 매핑 (0.1 구간 동안 페이드인)
  // How: useTransform으로 [T, T+0.1] → [0, 1] 매핑, 필요 시 구간 폭(FADE_WINDOW)을 조정
  const FADE_WINDOW = 0.1;
  const wingsStart = 0.15;
  const pinkStart = 0.25;

  const confettiOpacity = useTransform(
    scrollYProgress,
    [wingsStart, wingsStart + FADE_WINDOW],
    [0, 1]
  );
  const greenOpacity = useTransform(
    scrollYProgress,
    [pinkStart, pinkStart + FADE_WINDOW],
    [0, 1]
  );
  // Why: 중앙을 기준으로 자연스럽게 커지는 연출이 요구됨
  // What: 각 이미지 시점에서 scale을 0.8 → 1.0으로 보간하여 확대
  // How: useTransform으로 [start, start+FADE_WINDOW] 구간을 [0.8, 1]로 매핑
  const wingsScale = useTransform(
    scrollYProgress,
    [wingsStart, wingsStart + FADE_WINDOW],
    [0.8, 1]
  );
  const pinkScale = useTransform(
    scrollYProgress,
    [pinkStart, pinkStart + FADE_WINDOW],
    [0.8, 1]
  );
  return (
    <section ref={sectionRef} className="h-[400vh] text-center my-400">
      <div className="sticky top-[50%] translate-y-[-50%] flex flex-col justify-center items-center">
        <div className="z-10">
          <PerCharText
            scrollYProgress={scrollYProgress}
            text={[
              "배움의 기간 동안 다듬어지면서 자신만의 색을 갖게 된 우리는,",
              "이제 스스로를 뽐내며 하늘로 날아오를 준비가 끝났습니다.",
              "",
              "하늘 위의 우리는 마치 별처럼 자신만의 가능성을 밝게 빛낼 것입니다.",
              "공중을 자유롭게 유영하며 축제의 순간을 더없이 즐기고, ",
              "그 기쁨을 날개 삼아 더 넓은 하늘로 나아갈 것입니다.",
            ]}
          />
        </div>

        <motion.img
          className="absolute top-[50%] translate-y-[-50%] z-0"
          style={{ opacity: confettiOpacity, scale: wingsScale }}
          src="/images/about/about_section_pink_light.png"
          alt="confetti"
        />

        <motion.img
          className="absolute top-[50%] translate-y-[-50%] z-0"
          style={{ opacity: greenOpacity, scale: pinkScale }}
          src="/images/about/about_section_wings.png"
          alt="green light"
        />
      </div>
    </section>
  );
};

export default AboutSection2;
