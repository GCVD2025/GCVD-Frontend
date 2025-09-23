"use client";

import React from "react";
import { MotionValue, useTransform, motion } from "framer-motion";

interface PerCharProps {
  char: string;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}

function PerChar({ char, index, total, scrollYProgress }: PerCharProps) {
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);

  return (
    <motion.span
      data-index={index}
      data-char={char}
      style={{
        display: "inline-block",
        whiteSpace: "pre",
        opacity,
      }}
    >
      {char}
    </motion.span>
  );
}

export interface PerCharTextProps {
  text: string[]; // 여러 줄
  scrollYProgress: MotionValue<number>;
}

export default function PerCharText({
  text,
  scrollYProgress,
}: PerCharTextProps) {
  // 전체 글자 수 합 구하기
  const totalChars = React.useMemo(
    () => text.reduce((sum, line) => sum + line.length, 0),
    [text]
  );

  return (
    <>
      {text.map((line, lineIndex) => (
        <React.Fragment key={lineIndex}>
          {line.split("").map((ch, charIndex) => {
            const globalIndex =
              text.slice(0, lineIndex).reduce((sum, l) => sum + l.length, 0) +
              charIndex;

            return (
              <PerChar
                key={`${lineIndex}-${charIndex}`}
                char={ch}
                index={globalIndex}
                total={totalChars}
                scrollYProgress={scrollYProgress}
              />
            );
          })}
          <br />
        </React.Fragment>
      ))}
    </>
  );
}
