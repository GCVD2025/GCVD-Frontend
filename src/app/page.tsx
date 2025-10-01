import { redirect } from "next/navigation";

// Why: 메인페이지 접근 시 about 페이지로 자동 리다이렉트
// What: 서버 사이드에서 리다이렉트 처리
// How: Next.js의 redirect 함수를 사용하여 about 페이지로 이동
export default function Home() {
  redirect("/about");
}
