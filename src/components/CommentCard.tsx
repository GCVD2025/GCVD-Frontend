"use client";

// Why: 방명록(댓글) 아이템을 카드 형태로 재사용하기 위해 분리
// What: 이름, 본문, 날짜, 우측 상단 메타(댓글 번호 등)를 보여주는 카드 컴포넌트
// How: Designers의 카드와 동일한 레이아웃 토큰(라운드, 블러, 쉐도우)을 적용하고 텍스트 위계만 조정
interface CommentCardProps {
  name: string;
  content: string;
  dateText: string;
}

export default function CommentCard({
  name,
  content,
  dateText,
}: CommentCardProps) {
  // Why: 전달받은 문자열에서 날짜와 시간을 구분해 표시하기 위함
  // What: "YYYY.MM.DD   HH:MM" 같은 입력에서 날짜/시간만 추출
  // How: 정규식을 사용해 그룹 캡처 후, 실패 시 폴백으로 공백 분리 사용
  const extractDateTime = (raw: string) => {
    const match = raw.match(/(\d{4}\.\d{2}\.\d{2}).*?(\d{1,2}:\d{2})/);
    if (match) {
      return { date: match[1], time: match[2] } as const;
    }
    const compact = raw.replace(/\s+/g, " ").trim();
    const parts = compact.split(" ");
    const date = parts[0] ?? raw;
    const time = parts[parts.length - 1] ?? "";
    return { date, time } as const;
  };
  const { date, time } = extractDateTime(dateText);
  return (
    <article className="backdrop-blur-[16px] w-full max-w-180 rounded-[12px] bg-white/60 shadow-[0_0_24px_rgba(0,0,0,0.05)] overflow-hidden">
      {/* Why: 내부 여백 확보 및 카드 콘텐츠 배치 */}
      {/* What: 상단 정보행, 본문, 하단 날짜로 구성 */}
      {/* How: flex/typography 유틸 클래스로 위계와 간격을 명시 */}
      <div className="px-8 py-7 flex flex-col gap-4">
        <header className="flex items-start justify-between">
          <h3 className="text-[14px] font-semibold text-[#202020] leading-none">
            {name}
          </h3>
        </header>

        <p className="text-[12px] leading-[18px] text-[#202020B2]">{content}</p>

        <footer className="text-[9px] text-[#20202080] flex gap-2">
          <span>{date}</span>
          <span>{time}</span>
        </footer>
      </div>
    </article>
  );
}
