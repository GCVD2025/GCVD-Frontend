"use client";

import Link from "next/link";
import { getCategoriesByQueryKeys } from "@/utils/categories";
import { getImageSrc, getWorkThumbnailSrc } from "../utils/getImageSrc";
import { designersData } from "../data/designers";

interface WorkCardProps {
  id: string;
  title: string;
  author: string;
  imageUrl?: string;
  categories?: string[];
  designerId?: string[];
}

export default function WorkCard({
  id,
  title,
  author,
  imageUrl,
  categories = [],
  designerId = [],
}: WorkCardProps) {
  const categoryItems = getCategoriesByQueryKeys(categories);

  // Why: 디자이너 ID를 기반으로 디자이너 정보를 찾아서 이미지 경로 생성
  // What: 첫 번째 디자이너의 영어 이름을 사용하여 썸네일 이미지 경로 생성
  // How: designersData에서 매칭되는 디자이너를 찾아서 영어 이름으로 새로운 폴더 구조에 맞는 경로 생성
  const getThumbnailSrc = () => {
    if (designerId.length > 0 && imageUrl) {
      const designer = designersData.find(
        (d) => d.designer_id === designerId[0]
      );
      if (designer) {
        const thumbnailPath = getWorkThumbnailSrc(
          designer.designer_english_name,
          designer.designer_id,
          id,
          imageUrl
        );
        // Why: WorkCard에서는 일반 img 태그를 사용하므로 getImageSrc로 최적화 처리
        // What: 썸네일 이미지에 적절한 크기 파라미터 적용
        // How: getImageSrc 함수를 사용하여 반응형 최적화 적용
        return getImageSrc(thumbnailPath, { width: 240, height: 192 });
      }
    }
    return getImageSrc("/images/works/sample.png", { width: 240, height: 192 });
  };

  return (
    <Link href={`/works/${id}`} className="block">
      <div className="backdrop-blur-[16px] w-[240px] h-[308px] rounded-[12px] bg-gradient(180deg, rgb(255, 255, 255) 80%, rgb(255, 255, 255) 40%) shadow-[0_0_24px_rgba(0,0,0,0.05)] overflow-hidden cursor-pointer hover:shadow-[0_0_32px_rgba(0,0,0,0.1)] hover:scale-102 transition-all duration-300 ease-in-out">
        <div className="w-full h-[192px]">
          <img
            src={getThumbnailSrc()}
            alt={title}
            className="w-full h-full object-cover rounded-[0_0_12px_12px]"
          />
        </div>

        <div className="p-4">
          <h3 className="text-[16px] font-extrabold text-[#202020] mb-[6px]">
            {title}
          </h3>
          <p className="text-[14px] text-[#202020B2] mb-[12px]">{author}</p>
          <div className="flex items-center gap-2 text-[9px]">
            {categoryItems.map(({ label, Icon, icon_color, queryKey }) => (
              <div key={queryKey} className="flex items-center gap-1">
                <Icon className="w-4 h-4" style={{ color: icon_color }} />
                <span className="text-[#20202080]">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
