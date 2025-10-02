// Why: 실제 Swagger 문서의 방명록 API 엔드포인트를 타입 안전하게 관리
// What: 방명록 API 엔드포인트 경로와 관련 타입 정의
// How: 상수와 타입을 사용하여 엔드포인트 관리

// API 엔드포인트 상수 정의
export const API_ENDPOINTS = {
  GUESTBOOK: {
    LIST: "/guestbook",
    CREATE: "/guestbook",
  },
} as const;

// 방명록 입력 데이터 타입 (POST 요청용)
export interface GuestbookInput {
  /** 작성자 이름 (1-50글자) */
  author: string;
  /** 방명록 내용 (1-300글자) */
  content: string;
}

// 방명록 응답 데이터 타입 (GET 응답용)
export interface GuestbookOutput {
  /** 작성자 이름 */
  author: string;
  /** 방명록 내용 */
  content: string;
  /** 작성 시간 (ISO 8601 형식) */
  createdAt: string;
}

// 방명록 유효성 검사 타입
export interface GuestbookValidation {
  isValid: boolean;
  errors: {
    author?: string;
    content?: string;
  };
}

// 방명록 작성 결과 타입
export interface GuestbookCreateResult {
  success: boolean;
  message: string;
}
