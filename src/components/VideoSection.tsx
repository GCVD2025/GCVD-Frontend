"use client";

import { useEffect, useRef } from "react";
import { getImageSrc } from "../utils/getImageSrc";

// Why: 비디오 자동 재생 로직을 별도 클라이언트 컴포넌트로 분리
// What: Intersection Observer를 사용한 비디오 자동 재생 기능
// How: useEffect와 useRef를 사용하여 화면에 35% 이상 보일 때 자동 재생

const VideoSection = () => {
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
    <section className="w-screen h-[200vh] sticky top-0 z-10 mb-240">
      <div ref={videoContainerRef} className="w-screen h-screen sticky top-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src={getImageSrc("/images/about/thirdcard.mp4")}
          muted
          playsInline
        />
      </div>
    </section>
  );
};

export default VideoSection;
