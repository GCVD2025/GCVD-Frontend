// Why: 에러 상태를 사용자에게 친화적으로 표시하는 컴포넌트 제공
// What: 에러 메시지와 재시도 버튼이 포함된 에러 컴포넌트
// How: 일관된 에러 UI 패턴 구현

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
  className?: string;
}

export function ErrorMessage({
  message,
  onRetry,
  className = "",
}: ErrorMessageProps) {
  return (
    <div className={`text-center py-8 ${className}`}>
      <div className="text-red-500 mb-4">{message}</div>
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
        >
          다시 시도
        </button>
      )}
    </div>
  );
}
