// Why: React Query 클라이언트 설정을 중앙화하여 일관된 캐싱과 에러 처리 제공
// What: QueryClient 인스턴스 생성 및 기본 설정
// How: @tanstack/react-query의 QueryClient를 사용하여 설정

import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // 캐시 시간: 5분
      staleTime: 5 * 60 * 1000,
      // 백그라운드에서 데이터 갱신 시간: 10분
      gcTime: 10 * 60 * 1000,
      // 재시도 횟수: 3회
      retry: 3,
      // 네트워크 오류 시 재시도 간격: 1초
      retryDelay: 1000,
      // 윈도우 포커스 시 자동 갱신 비활성화
      refetchOnWindowFocus: false,
    },
    mutations: {
      // 뮤테이션 재시도 횟수: 1회
      retry: 1,
    },
  },
});
