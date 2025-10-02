// Why: 방명록 데이터를 가져오는 커스텀 훅을 제공하여 컴포넌트에서 재사용 가능
// What: React Query를 사용한 방명록 데이터 페칭 훅
// How: guestbookService를 사용하여 API 호출하고 캐싱 및 에러 처리

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { guestbookService } from "../services/guestbook-service";
import {
  validateGuestbookInput,
  normalizeGuestbookInput,
} from "../utils/validation";
import type { GuestbookInput } from "../lib/api-endpoints";

// 쿼리 키 상수
const QUERY_KEYS = {
  guestbooks: ["guestbooks"] as const,
} as const;

// 방명록 목록 조회 훅
export function useGuestbooks() {
  return useQuery({
    queryKey: QUERY_KEYS.guestbooks,
    queryFn: () => guestbookService.getGuestbooks(),
    staleTime: 5 * 60 * 1000, // 5분간 데이터 신선도 유지
  });
}

// 방명록 작성 뮤테이션 훅
export function useCreateGuestbook() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: GuestbookInput) => {
      // 입력 데이터 유효성 검사
      const validation = validateGuestbookInput(data);
      if (!validation.isValid) {
        throw new Error(Object.values(validation.errors).join(", "));
      }

      // 데이터 정규화 후 API 호출
      const normalizedData = normalizeGuestbookInput(data);
      return guestbookService.createGuestbook(normalizedData);
    },
    onSuccess: () => {
      // 방명록 작성 후 목록 쿼리 무효화하여 데이터 갱신
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.guestbooks });
    },
    onError: (error) => {
      console.error("방명록 작성 실패:", error);
    },
  });
}
