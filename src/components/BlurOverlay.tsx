// Why: mask-image를 사용한 blur 오버레이 컴포넌트로 더 정확한 그라디언트 마스킹 구현
// What: CSS mask-image와 backdrop-filter를 조합한 blur 효과
// How: linear-gradient 마스크로 하단에서 상단으로 갈수록 투명해지는 효과

interface BlurOverlayProps {
  className?: string;
  blurRadius?: number;
  scrollShadowSize?: number;
}

export default function BlurOverlay({
  className = "",
  blurRadius = 12,
  scrollShadowSize = 35,
}: BlurOverlayProps) {
  return (
    <div
      className={className}
      style={{
        backdropFilter: `blur(${blurRadius}px)`,
        background: `linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0) ${scrollShadowSize}px)`,
      }}
    />
  );
}
