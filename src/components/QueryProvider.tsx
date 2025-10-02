// Why: React Query Provider를 앱 전체에 제공하여 API 상태 관리
// What: QueryClient를 사용한 Provider 컴포넌트
// How: @tanstack/react-query의 QueryClientProvider 사용

"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../lib/query-client";

interface QueryProviderProps {
  children: React.ReactNode;
}

export function QueryProvider({ children }: QueryProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
