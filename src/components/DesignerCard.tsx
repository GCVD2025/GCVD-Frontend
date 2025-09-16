"use client";

import EmailIcon from "./icons/EmailIcon";

interface DesignerCardProps {
  name: string;
  nameEn: string;
  workTitle: string;
  email: string;
}

// Why: 디자이너 정보를 카드 형태로 표시하기 위한 컴포넌트
// What: WorkCard와 유사한 스타일의 디자이너 카드 컴포넌트
// How: img 태그를 사용하여 이미지 영역 크기만 설정하고, 디자이너 정보를 표시
export default function DesignerCard({
  name,
  nameEn,
  workTitle,
  email,
}: DesignerCardProps) {
  return (
    <div className="backdrop-blur-[16px] w-[176px] rounded-[12px] bg-gradient(180deg, rgb(255, 255, 255) 60%, rgb(255, 255, 255) 40%) shadow-[0_0_24px_rgba(0,0,0,0.05)] overflow-hidden">
      {/* Why: 이미지 영역을 위한 공간 확보 */}
      {/* What: 192px 높이의 이미지 영역 */}
      {/* How: img 태그를 사용하여 크기만 설정하고 실제 이미지는 넣지 않음 */}
      <div className="p-4">
        <img
          src="/images/designers/sample.png"
          alt={name}
          className="w-full h-45 object-cover rounded-[10px_10px_10px_10px]"
        />
      </div>

      <div className="px-4">
        <div className="flex items-center gap-3 mb-2">
          <h3 className="text-[16px] font-extrabold text-[#202020]">{name}</h3>
          <span className="text-[12px] text-[#202020B2]">{nameEn}</span>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <div className="w-0 h-0 border-l-[5px] border-l-[#4CAF50] border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent"></div>
          <span className="text-[14px] text-[#4CAF50] font-medium underline">
            {workTitle}
          </span>
        </div>

        <div className="flex items-center gap-2 mb-5">
          <EmailIcon size={9} className="text-[#20202080]" />
          <span className="text-[9px] text-[#20202080]">{email}</span>
        </div>
      </div>
    </div>
  );
}
