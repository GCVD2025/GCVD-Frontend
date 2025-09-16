"use client";

import { getCategoriesByQueryKeys } from "@/utils/categories";

interface WorkCardProps {
  title: string;
  author: string;
  imageUrl?: string;
  categories?: string[];
}

export default function WorkCard({
  title,
  author,
  imageUrl,
  categories = [],
}: WorkCardProps) {
  const categoryItems = getCategoriesByQueryKeys(categories);

  return (
    <div className="backdrop-blur-[16px] w-[240px] h-[308px] rounded-[12px] bg-gradient(180deg, rgb(255, 255, 255) 80%, rgb(255, 255, 255) 40%) shadow-[0_0_24px_rgba(0,0,0,0.05)]  overflow-hidden">
      <div className="w-full h-[192px]">
        <img
          src={imageUrl || "/images/works/sample.png"}
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
  );
}
