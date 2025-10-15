"use client";

import { useState } from "react";
import {
  CategoriesDeepGreenLeftIcon,
  CategoriesDeepGreenRightIcon,
} from "../../components/icons";
import CommentCard from "../../components/CommentCard";
import { BlurOverlay, LoadingSpinner, ErrorMessage } from "@/components";
import { getImageSrc } from "../../utils/getImageSrc";
import { useGuestbooks, useCreateGuestbook } from "../../hooks/useGuestbook";
import { formatKoreanDate } from "../../utils/date";

// Why: 게스트 페이지를 Designers의 서브타이틀/카드 레이아웃과 동일한 톤으로 구현
// What: 상단 서브타이틀(초록) + 입력 박스 영역 + 댓글 카드 그리드
// How: 재사용 가능한 아이콘/카드 토큰과 Tailwind 유틸을 그대로 활용
export default function Guest() {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  // API에서 방명록 데이터 가져오기
  const { data: guestbooks, isLoading, error } = useGuestbooks();
  const createGuestbookMutation = useCreateGuestbook();

  // 방명록 작성 핸들러
  const handleSubmit = async () => {
    try {
      await createGuestbookMutation.mutateAsync({ author, content });
      setAuthor("");
      setContent("");
      alert("방명록이 작성되었습니다!");
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "방명록 작성에 실패했습니다.";
      alert(errorMessage);
    }
  };

  return (
    <>
      <img
        src={getImageSrc("/images/common/background-image.png")}
        alt="background"
        className="fixed w-full h-full object-cover opacity-20"
      />

      <main className="py-6 min-h-screen mt-18 relative">
        {/* Why: 서브타이틀도 입력 섹션과 함께 고정되어야 함 */}
        {/* What: sticky 컨테이너 안쪽에서 서브타이틀 렌더 */}
        {/* How: 아래 입력 섹션과 동일 컨테이너에 포함 */}
        <div className="sticky top-24 z-100 flex items-center justify-center mb-6">
          <CategoriesDeepGreenLeftIcon className="text-[#00A78E]" />
          <span className="mx-4 text-[16px] font-extrabold text-[#00A78E]">
            방명록을 작성해주세요!
          </span>
          <CategoriesDeepGreenRightIcon className="text-[#00A78E]" />
        </div>

        {/* 입력 영역: 네비게이션과 함께 스크롤되어도 상단에 고정 */}
        <section className="sticky top-36 z-40 w-full flex items-center justify-center mb-8 relative">
          {/* Why: 하나의 오버레이로 섀도우+그라디언트+상단 블러를 모두 처리 */}
          {/* What: 뷰포트 상단(-96px)부터 현재 섹션 하단까지 덮는 단일 레이어 */}
          {/* How: absolute top-[-96px] + h-[calc(100%+96px)] + w-screen */}
          {/* <div className="pointer-events-none h-80 fixed top-0 w-screen -z-10 bg-[linear-gradient(0deg,rgba(249,249,249,0.20)_0%,rgba(255, 255, 255, 0)_100%)] backdrop-blur-[12px]"></div> */}
          <BlurOverlay
            blurRadius={12}
            className="fixed top-0 left-0 w-screen h-75 -z-10"
          />
          <div className="w-[764px] h-[152px] rounded-[16px] bg-white/60 backdrop-blur-[20px] drop-shadow-[0_0_24px_rgba(0,0,0,0.05)] p-4 flex items-end border-[1.5px] border-[#00A78E]/30 opacity-80">
            <div className="flex-1 flex flex-col gap-2">
              <input
                type="text"
                placeholder="이름을 입력하세요."
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                maxLength={50}
                className="w-full p-3 outline-none placeholder:text-[#20202066] text-[14px] rounded-[8px] text-semibold bg-[linear-gradient(90deg,rgba(0,0,0,0.03),rgba(0,0,0,0.01))]"
              />
              <textarea
                placeholder="내용을 입력하세요. 한 번 작성한 내용은 수정 및 삭제할 수 없습니다."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                maxLength={300}
                className="w-full p-3 resize-none outline-none placeholder:text-[#20202066] rounded-[8px] text-[12px] bg-[linear-gradient(90deg,rgba(0,0,0,0.013),rgba(0,0,0,0.009))]"
              />
            </div>
            <button
              aria-label="submit"
              onClick={handleSubmit}
              disabled={
                createGuestbookMutation.isPending ||
                !author.trim() ||
                !content.trim()
              }
              className="disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <img
                src={getImageSrc("/images/common/send_button.png")}
                alt="send"
                className="w-[60px] h-[60px]"
              />
            </button>
          </div>
        </section>

        {/* Why: 댓글 카드는 이미지처럼 단일 열로 세로 스택 배치 */}
        {/* What: 732px 컨테이너 폭에 맞춘 full-width 카드, 간격 24px */}
        {/* How: flex-col 스택 구성 */}
        <section className="w-full flex items-center justify-center">
          <div className="w-[732px] flex flex-col gap-[24px]">
            {isLoading ? (
              <LoadingSpinner size="lg" className="py-8" />
            ) : error ? (
              <ErrorMessage
                message="방명록을 불러오는데 실패했습니다."
                onRetry={() => window.location.reload()}
              />
            ) : guestbooks && guestbooks.length > 0 ? (
              guestbooks.map((guestbook, idx) => (
                <CommentCard
                  key={`${guestbook.author}-${guestbook.createdAt}-${idx}`}
                  name={guestbook.author}
                  content={guestbook.content}
                  dateText={formatKoreanDate(guestbook.createdAt)}
                />
              ))
            ) : (
              <div className="text-center py-8 text-gray-500">
                아직 작성된 방명록이 없습니다.
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
