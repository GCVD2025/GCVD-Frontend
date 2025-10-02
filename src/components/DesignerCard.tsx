"use client";

import { useRouter } from "next/navigation";
import EmailIcon from "./icons/EmailIcon";
import { Designer } from "../data/designers";
import { worksData } from "../data/works";
import { getImageSrc } from "../utils/getImageSrc";

interface DesignerCardProps {
  designer: Designer;
}

// Why: 디자이너 정보를 카드 형태로 표시하기 위한 컴포넌트
// What: WorkCard와 유사한 스타일의 디자이너 카드 컴포넌트
// How: img 태그를 사용하여 이미지 영역 크기만 설정하고, 디자이너 정보를 표시
export default function DesignerCard({ designer }: DesignerCardProps) {
  const router = useRouter();
  const {
    designer_name,
    designer_english_name,
    designer_email,
    designer_profile_image,
    work_id,
  } = designer;

  // Why: 해당 디자이너의 작품 정보를 찾는 함수
  // What: work_id를 사용하여 작품 데이터에서 해당 작품을 찾음
  // How: worksData에서 work_id와 일치하는 작품을 찾아서 작품명을 반환
  const work = worksData.find((w) => w.work_id === work_id);
  const workTitle = work ? work.work_title : "작품 보기";

  // Why: 작품 보러가기 버튼 클릭 시 해당 작품 페이지로 이동
  // What: work_id를 사용하여 작품 상세 페이지로 라우팅
  // How: Next.js의 useRouter를 사용하여 동적 라우팅 구현
  const handleViewWork = () => {
    router.push(`/works/${work_id}`);
  };
  return (
    <div className="backdrop-blur-[16px] w-[192px] h-[336px] rounded-[12px] bg-gradient(180deg, rgb(255, 255, 255) 60%, rgb(255, 255, 255) 40%) shadow-[0_0_24px_rgba(0,0,0,0.05)] overflow-hidden">
      {/* Why: 이미지 영역을 위한 공간 확보 및 hover 효과 구현 */}
      {/* What: 192px 높이의 이미지 영역과 hover 시 오버레이 */}
      {/* How: img 태그를 사용하여 크기만 설정하고, group hover로 오버레이 효과 구현 */}
      <div
        className="p-4 cursor-pointer relative group"
        onClick={handleViewWork}
      >
        <img
          src={getImageSrc(`/images/designers/${designer_profile_image}`)}
          alt={designer_name}
          className="w-full h-45 object-cover rounded-[10px_10px_10px_10px] "
        />
        {/* Why: hover 시 나타나는 오버레이 콘텐츠 */}
        {/* What: #808080 70% 투명도 배경과 8px 블러 효과가 적용된 오버레이 */}
        {/* How: absolute positioning과 backdrop-blur, bg-[#808080]/70을 사용하여 hover 시에만 표시 */}
        <div className="absolute inset-4 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#808080]/70 backdrop-blur-[8px] rounded-[10px_10px_10px_10px]">
          <div className="text-white text-center flex flex-col items-center">
            <div className="text-[14px] font-bold">{workTitle}</div>
            <div className="text-[12px] flex items-center gap-1">
              보러가기 <span className="text-[14px]">→</span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4">
        <div className="flex items-center gap-2 mb-2">
          <h3 className="text-[16px] font-extrabold text-[#202020]">
            {designer_name}
          </h3>
          <span className="text-[12px] text-[#202020B2]">
            {designer_english_name}
          </span>
        </div>

        <div
          className="flex items-center gap-2 mb-4 cursor-pointer"
          onClick={handleViewWork}
        >
          <div className="w-0 h-0 border-l-[5px] border-l-[#4CAF50] border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent"></div>
          <span className="text-[14px] text-[#4CAF50] font-medium underline">
            {workTitle}
          </span>
        </div>

        <div className="flex items-center gap-2 mb-5">
          <EmailIcon size={10} className="text-[#20202080]" />
          <span className="text-[10px] text-[#20202080]">{designer_email}</span>
        </div>
      </div>
    </div>
  );
}
