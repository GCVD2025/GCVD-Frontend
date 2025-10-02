// Why: 방명록 API 호출을 위한 서비스 함수들을 제공
// What: 방명록 조회 및 생성 API 호출 함수들
// How: apiClient를 사용하여 구체적인 API 호출 함수 구현

import { apiClient } from "../lib/api";
import { API_ENDPOINTS } from "../lib/api-endpoints";
import type { GuestbookInput, GuestbookOutput } from "../lib/api-endpoints";

// 방명록 관련 API 서비스
export const guestbookService = {
  // 방명록 목록 조회 (최신순)
  async getGuestbooks(): Promise<GuestbookOutput[]> {
    return apiClient.get<GuestbookOutput[]>(API_ENDPOINTS.GUESTBOOK.LIST);
  },

  // 방명록 작성
  async createGuestbook(data: GuestbookInput): Promise<void> {
    return apiClient.post<void>(API_ENDPOINTS.GUESTBOOK.CREATE, data);
  },
};
