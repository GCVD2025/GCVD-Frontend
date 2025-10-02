// Why: 방명록 입력 데이터의 유효성 검사를 위한 유틸리티 함수 제공
// What: 방명록 작성자명과 내용의 유효성 검사 로직
// How: 타입 안전한 유효성 검사 함수 구현

import type { GuestbookInput, GuestbookValidation } from "../lib/api-endpoints";

// 방명록 입력 데이터 유효성 검사
export function validateGuestbookInput(
  input: GuestbookInput
): GuestbookValidation {
  const errors: GuestbookValidation["errors"] = {};

  // 작성자명 검사
  if (!input.author.trim()) {
    errors.author = "작성자명은 공백이 아니어야 합니다.";
  } else if (input.author.length > 50) {
    errors.author = "작성자명은 1 ~ 50 글자 사이로만 가능합니다.";
  }

  // 내용 검사
  if (!input.content.trim()) {
    errors.content = "내용은 공백이 아니어야 합니다.";
  } else if (input.content.length > 300) {
    errors.content = "내용은 1 ~ 300 글자 사이로만 가능합니다.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

// 방명록 입력 데이터 정규화
export function normalizeGuestbookInput(input: GuestbookInput): GuestbookInput {
  return {
    author: input.author.trim(),
    content: input.content.trim(),
  };
}
