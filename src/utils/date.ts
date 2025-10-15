// Why: 날짜 포맷팅을 위한 유틸리티 함수 제공
// What: ISO 8601 형식의 날짜를 한국어 형식으로 변환
// How: Date 객체와 toLocaleString을 사용한 포맷팅

/**
 * ISO 8601 형식의 날짜 문자열을 한국어 형식으로 변환
 * @param isoString - ISO 8601 형식의 날짜 문자열
 * @returns 한국어 형식의 날짜 문자열 (예: "2025.01.02 15:30")
 */
export function formatKoreanDate(isoString: string): string {
  // Why: UTC 시간을 KST(UTC+9)로 변환하여 표시
  // What: ISO 8601 형식의 UTC 시간을 KST로 변환
  // How: new Date()는 이미 ISO 문자열을 UTC로 인식하므로 직접 +9시간만 적용
  const date = new Date(isoString);
  const kstDate = new Date(date.getTime() + 9 * 60 * 60 * 1000);

  const year = kstDate.getFullYear();
  const month = String(kstDate.getMonth() + 1).padStart(2, "0");
  const day = String(kstDate.getDate()).padStart(2, "0");
  const hours = String(kstDate.getHours()).padStart(2, "0");
  const minutes = String(kstDate.getMinutes()).padStart(2, "0");

  return `${year}.${month}.${day} ${hours}:${minutes}`;
}

/**
 * 현재 시간을 ISO 8601 형식으로 반환
 * @returns ISO 8601 형식의 현재 시간 문자열
 */
export function getCurrentISOTime(): string {
  return new Date().toISOString();
}
