import { getImageSrc } from "@/utils/getImageSrc";

// Why: 반응형 이미지 컴포넌트의 props 타입 정의
// What: 이미지 경로, 대체 텍스트, 크기 옵션 등을 받는 인터페이스
// How: TypeScript 인터페이스로 props 타입을 명확히 정의
interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
  sizes?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
    largeDesktop?: number;
  };
}

// Why: 반응형 이미지 컴포넌트를 만들어 재사용성 향상
// What: 3개 브레이크포인트에 따라 다른 크기의 이미지를 제공하는 컴포넌트
// How: picture 요소와 source 요소를 사용하여 반응형 이미지 구현
export default function ResponsiveImage({
  src,
  alt,
  className = "w-full object-contain shadow-lg",
  loading = "lazy",
  sizes = {
    mobile: 100,
    tablet: 800,
    desktop: 1200,
    largeDesktop: 1600,
  },
}: ResponsiveImageProps) {
  return (
    <picture className="w-full">
      {/* Why: 모바일 브레이크포인트 (768px 미만) - 작은 이미지 */}
      {/* What: 작은 화면에서 최적화된 이미지 크기 */}
      {/* How: w=100으로 설정하여 모바일에서 빠른 로딩 */}
      <source
        media="(max-width: 767px)"
        srcSet={getImageSrc(src, { width: sizes.mobile })}
      />

      {/* Why: 태블릿 브레이크포인트 (768px-1279px) - 중간 이미지 */}
      {/* What: 태블릿 화면에서 최적화된 이미지 크기 */}
      {/* How: w=800으로 설정하여 태블릿에서 적절한 품질과 성능 */}
      <source
        media="(min-width: 768px) and (max-width: 1279px)"
        srcSet={getImageSrc(src, { width: sizes.tablet })}
      />

      {/* Why: 데스크톱 브레이크포인트 (1280px-1919px) - 큰 이미지 */}
      {/* What: 데스크톱 화면에서 최적화된 이미지 크기 */}
      {/* How: w=1200으로 설정하여 데스크톱에서 적절한 품질과 성능 */}
      <source
        media="(min-width: 1280px) and (max-width: 1919px)"
        srcSet={getImageSrc(src, { width: sizes.desktop })}
      />

      {/* Why: 대형 데스크톱 브레이크포인트 (1920px 이상) - 최대 이미지 */}
      {/* What: 대형 화면에서 최고 품질의 이미지 */}
      {/* How: w=1600으로 설정하여 대형 데스크톱에서 최고 품질 표시 */}
      <img
        src={getImageSrc(src, { width: sizes.largeDesktop })}
        alt={alt}
        className={className}
        loading={loading}
      />
    </picture>
  );
}
