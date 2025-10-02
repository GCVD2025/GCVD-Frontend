// Why: 날짜 포맷팅을 위한 유틸리티 함수 제공
// What: ISO 8601 형식의 날짜를 한국어 형식으로 변환
// How: Date 객체와 toLocaleString을 사용한 포맷팅

/**
 * ISO 8601 형식의 날짜 문자열을 한국어 형식으로 변환
 * @param isoString - ISO 8601 형식의 날짜 문자열
 * @returns 한국어 형식의 날짜 문자열 (예: "2025.01.02 15:30")
 */
export function formatKoreanDate(isoString: string): string {
  const date = new Date(isoString);

  return date
    .toLocaleString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })
    .replace(/\./g, ".")
    .replace(/,/g, "");
}

/**
 * 현재 시간을 ISO 8601 형식으로 반환
 * @returns ISO 8601 형식의 현재 시간 문자열
 */
export function getCurrentISOTime(): string {
  return new Date().toISOString();
}
