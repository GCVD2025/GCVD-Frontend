// Why: 로딩 상태를 시각적으로 표시하는 컴포넌트 제공
// What: 회전하는 스피너 애니메이션
// How: CSS 애니메이션을 사용한 스피너 구현

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8",
};

export function LoadingSpinner({
  size = "md",
  className = "",
}: LoadingSpinnerProps) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div
        className={`${sizeClasses[size]} border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin`}
        role="status"
        aria-label="로딩 중"
      />
    </div>
  );
}
