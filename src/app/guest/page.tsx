"use client";

import {
  CategoriesDeepGreenLeftIcon,
  CategoriesDeepGreenRightIcon,
} from "../../components/icons";
import CommentCard from "../../components/CommentCard";

// Why: 게스트 페이지를 Designers의 서브타이틀/카드 레이아웃과 동일한 톤으로 구현
// What: 상단 서브타이틀(초록) + 입력 박스 영역 + 댓글 카드 그리드
// How: 재사용 가능한 아이콘/카드 토큰과 Tailwind 유틸을 그대로 활용
export default function Guest() {
  const comments = Array.from({ length: 8 }, (_, i) => ({
    name: "홍길동",
    content:
      "임의 내용 입력 임의 내용 입력 임의 내용 입력 임의 내용 입력 임의 내용 입력 임의 내용 입력 임의 내용",
    dateText: "2023.10.20   17:02",
    metaRight: `댓글 ${i + 1}`,
  }));

  return (
    <>
      <img
        src="/images/common/background-image.png"
        alt="background"
        className="fixed w-full h-full object-cover opacity-20"
      />

      <main className="py-6 min-h-screen mt-18 relative">
        {/* Why: 상단 초록 서브 타이틀은 Designers와 동일, 텍스트만 변경 */}
        {/* What: Categories 아이콘 + 텍스트 중앙 정렬 */}
        {/* How: 동일 컬러/타이포/정렬 규칙 적용 */}
        <div className="flex items-center justify-center mb-6">
          <CategoriesDeepGreenLeftIcon className="text-[#00A78E]" />
          <span className="mx-4 text-[16px] font-extrabold text-[#00A78E]">
            방명록을 작성해주세요!
          </span>
          <CategoriesDeepGreenRightIcon className="text-[#00A78E]" />
        </div>

        {/* 입력 영역: 두꺼운 라운드 바와 우측 전송 버튼 형태 */}
        <section className="w-full flex items-center justify-center mb-8 shadow-[inset_0_0_24px_0_rgba(255,255,255,0.7)] ">
          <div className="w-[764px] h-[152px] rounded-[16px] bg-white/60 backdrop-blur-[24px] drop-shadow-[0_0_24px_rgba(0,0,0,0.05)] p-4 flex items-end border-[1.5px] border-[#00A78E]/30">
            <div className="flex-1 flex flex-col gap-2">
              <input
                type="text"
                placeholder="이름을 입력하세요."
                className="w-full p-3 outline-none placeholder:text-[#20202066] text-[14px] rounded-[8px] text-semibold bg-[linear-gradient(90deg,rgba(0,0,0,0.03),rgba(0,0,0,0.01))]"
              />
              <textarea
                placeholder="내용을 입력하세요. 한 번 작성한 내용은 수정 및 삭제할 수 없습니다."
                className="w-full p-3 resize-none outline-none placeholder:text-[#20202066] rounded-[8px] text-[12px] bg-[linear-gradient(90deg,rgba(0,0,0,0.013),rgba(0,0,0,0.009))]"
              />
            </div>
            <button aria-label="submit">
              <img
                src="/images/common/send_button.png"
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
            {comments.map((c, idx) => (
              <CommentCard
                key={idx}
                name={c.name}
                content={c.content}
                dateText={c.dateText}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
