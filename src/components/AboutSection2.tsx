"use client";

import {
  useScroll,
  useTransform,
  motion,
  useAnimationControls,
} from "framer-motion";
import PerCharText from "./PerCharText";
import { useEffect, useRef } from "react";
import { getImageSrc } from "../utils/getImageSrc";

// Why: 기존 애니메이션을 유지하면서 클라이언트 컴포넌트로 분리
// What: Framer Motion 애니메이션과 PerCharText를 포함한 원래 구현 유지
// How: "use client" 지시어를 추가하여 클라이언트 컴포넌트로 동작

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
  const wingsStart = 0.1;
  const pinkStart = 0.2;

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

  const uiuxStart = 0.4;
  const graphicStart = 0.43;
  const mediaStart = 0.46;
  const threeDStart = 0.49;

  const uiuxOpacity = useTransform(
    scrollYProgress,
    [uiuxStart, uiuxStart + FADE_WINDOW],
    [0, 1]
  );

  const graphicOpacity = useTransform(
    scrollYProgress,
    [graphicStart, graphicStart + FADE_WINDOW],
    [0, 1]
  );

  const mediaOpacity = useTransform(
    scrollYProgress,
    [mediaStart, mediaStart + FADE_WINDOW],
    [0, 1]
  );

  const threeDOpacity = useTransform(
    scrollYProgress,
    [threeDStart, threeDStart + FADE_WINDOW],
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

  // Why: 요소별로 서로 다른 시점에 부유 애니메이션을 시작해야 함
  // What: 각 요소의 자신의 등장 완료 시점(start + FADE_WINDOW) 이후 y를 -8↔8 반복
  // How: 요소별 useAnimationControls를 만들고, 스크롤 진행도에 따라 개별적으로 시작/정지
  // 부유 애니메이션 파라미터는 useEffect 내부에 두어 의존성 변화를 막음

  const uiuxControls = useAnimationControls();
  const graphicControls = useAnimationControls();
  const mediaControls = useAnimationControls();
  const threeDControls = useAnimationControls();

  const gameControls = useAnimationControls();
  const illustControls = useAnimationControls();
  const editorialControls = useAnimationControls();
  const brandingControls = useAnimationControls();

  // Why: 보이기 전/후와 관계없이 항상 부유 애니메이션이 실행되어 생동감을 유지
  // What: 마운트 시점에 각 아이콘의 부유 애니메이션을 개별 파라미터로 즉시 시작

  useEffect(() => {
    // Why: 8개 아이콘이 서로 다른 위상/속도로 독립 부유
    // What: 각 아이콘마다 고유 keyframes/duration/지연을 설정
    const UIUX_KEYFRAMES: number[] = [-12, 5, -12];
    const UIUX_TRANSITION = { duration: 2.6, repeat: Infinity, delay: 0.0 };

    const GRAPHIC_KEYFRAMES: number[] = [-5, 12, -5];
    const GRAPHIC_TRANSITION = { duration: 3.0, repeat: Infinity, delay: 0.2 };

    const MEDIA_KEYFRAMES: number[] = [-11, 7, -11];
    const MEDIA_TRANSITION = { duration: 2.4, repeat: Infinity, delay: 0.35 };

    const THREE_D_KEYFRAMES: number[] = [-8, 10, -8];
    const THREE_D_TRANSITION = { duration: 3.4, repeat: Infinity, delay: 0.15 };

    const GAME_KEYFRAMES: number[] = [-9, 6, -9];
    const GAME_TRANSITION = { duration: 2.2, repeat: Infinity, delay: 0.1 };

    const ILLUST_KEYFRAMES: number[] = [-7, 13, -7];
    const ILLUST_TRANSITION = { duration: 3.3, repeat: Infinity, delay: 0.25 };

    const EDITORIAL_KEYFRAMES: number[] = [-10, 4, -10];
    const EDITORIAL_TRANSITION = {
      duration: 2.8,
      repeat: Infinity,
      delay: 0.05,
    };

    const BRANDING_KEYFRAMES: number[] = [-6, 9, -6];
    const BRANDING_TRANSITION = { duration: 3.1, repeat: Infinity, delay: 0.3 };

    // Left column
    uiuxControls.start({ y: UIUX_KEYFRAMES, transition: UIUX_TRANSITION });
    graphicControls.start({
      y: GRAPHIC_KEYFRAMES,
      transition: GRAPHIC_TRANSITION,
    });
    mediaControls.start({ y: MEDIA_KEYFRAMES, transition: MEDIA_TRANSITION });
    threeDControls.start({
      y: THREE_D_KEYFRAMES,
      transition: THREE_D_TRANSITION,
    });

    // Right column
    gameControls.start({ y: GAME_KEYFRAMES, transition: GAME_TRANSITION });
    illustControls.start({
      y: ILLUST_KEYFRAMES,
      transition: ILLUST_TRANSITION,
    });
    editorialControls.start({
      y: EDITORIAL_KEYFRAMES,
      transition: EDITORIAL_TRANSITION,
    });
    brandingControls.start({
      y: BRANDING_KEYFRAMES,
      transition: BRANDING_TRANSITION,
    });
  }, [
    uiuxControls,
    graphicControls,
    mediaControls,
    threeDControls,
    gameControls,
    illustControls,
    editorialControls,
    brandingControls,
  ]);

  return (
    <section ref={sectionRef} className="h-[400vh] text-center mt-400 mb-100">
      <div className="sticky top-[50%] translate-y-[-50%] flex flex-col justify-center items-center">
        <div className="z-10">
          <PerCharText
            scrollYProgress={scrollYProgress}
            text={[
              "배움의 기간 동안 다듬어지면서 자신만의 색을 갖게 된 우리는,",
              "이제 스스로를 뽐내며 하늘로 날아오를 준비가 끝났습니다.",
              "",
              "하늘 위의 우리는 마치 별처럼 자신만의 가능성을 밝게 빛낼 것입니다.",
              "공중을 자유롭게 유영하며 축제의 순간을 더없이 즐기고, ",
              "그 기쁨을 날개 삼아 더 넓은 하늘로 나아갈 것입니다.",
            ]}
          />
        </div>

        <motion.img
          className="absolute top-[50%] translate-y-[-50%] z-0"
          style={{ opacity: confettiOpacity, scale: wingsScale }}
          src={getImageSrc("/images/about/about_section_pink_light.png")}
          alt="confetti"
        />
        <motion.img
          className="absolute top-[50%] translate-y-[-50%] z-0"
          style={{ opacity: greenOpacity, scale: pinkScale }}
          src={getImageSrc("/images/about/about_section_wings.png")}
          alt="green light"
        />

        {/* 좌측에 있는 아이콘 */}
        <motion.img
          className="absolute top-[0%] translate-y-[-90%] left-[4%] z-0 w-[12%]"
          style={{ opacity: uiuxOpacity }}
          animate={uiuxControls}
          src={getImageSrc("/images/about/Uiux.png")}
          alt="green light"
        />
        <motion.img
          className="absolute top-[5%] translate-y-[-50%] left-[14%] z-0 w-[12%]"
          style={{ opacity: graphicOpacity }}
          animate={graphicControls}
          src={getImageSrc("/images/about/Graphic.png")}
          alt="green light"
        />
        <motion.img
          className="absolute top-[25%] left-[5%] z-0 w-[12%]"
          style={{ opacity: mediaOpacity }}
          animate={mediaControls}
          src={getImageSrc("/images/about/Media.png")}
          alt="green light"
        />
        <motion.img
          className="absolute top-[50%]  left-[18%] z-0 w-[12%]"
          style={{ opacity: threeDOpacity }}
          animate={threeDControls}
          src={getImageSrc("/images/about/3D.png")}
          alt="green light"
        />

        {/* 우측에 있는 아이콘 */}
        <motion.img
          className="absolute top-[0%] translate-y-[-90%] right-[6%] z-0 w-[12%]"
          style={{ opacity: uiuxOpacity }}
          animate={uiuxControls}
          src={getImageSrc("/images/about/Game.png")}
          alt="green light"
        />
        <motion.img
          className="absolute top-[5%] translate-y-[-50%] right-[14%] z-0 w-[12%]"
          style={{ opacity: graphicOpacity }}
          animate={graphicControls}
          src={getImageSrc("/images/about/Illust.png")}
          alt="green light"
        />
        <motion.img
          className="absolute top-[25%] right-[8%] z-0 w-[12%]"
          style={{ opacity: mediaOpacity }}
          animate={mediaControls}
          src={getImageSrc("/images/about/Editorial.png")}
          alt="green light"
        />
        <motion.img
          className="absolute top-[45%] right-[18%] z-0 w-[12%]"
          style={{ opacity: threeDOpacity }}
          animate={threeDControls}
          src={getImageSrc("/images/about/Branding.png")}
          alt="green light"
        />
      </div>
    </section>
  );
};

export default AboutSection2;
