"use client";

// Why: Works 페이지에서만 사용하는 좌측 필터 사이드바를 컴포넌트로 분리해 재사용성과 가독성을 높이기 위함
// What: 고정 위치의 유리효과 배경과 타이포 그래피가 적용된 필터 리스트 UI 컴포넌트 구현
// How: Tailwind 유틸리티 클래스를 사용하여 디자인 스펙(14px, 20px line-height, Medium 500, 우측 정렬) 적용

import ALLIcon from "@/components/icons/ALLIcon";
import BrandingIcon from "@/components/icons/BrandingIcon";
import GraphicIcon from "@/components/icons/GraphicIcon";
import UiuxIcon from "@/components/icons/UiuxIcon";
import IllustIcon from "@/components/icons/IllustIcon";
import EditorialIcon from "@/components/icons/EditorialIcon";
import MediaIcon from "@/components/icons/MediaIcon";
import ThreeDIcon from "@/components/icons/ThreeDIcon";
import GameIcon from "@/components/icons/GameIcon";

export function FilterSidebar() {
  const CONTAINER_CLASS =
    "flex flex-col gap-[20px] sticky top-12 bg-blur-sm space-y-4 text-[14px] leading-[20px] tracking-normal text-[#20202099] font-medium py-[54px] pr-[38px] rounded-[12px] w-[200px] bg-white/40 shadow-[0px_0px_32px_0px_rgba(0,0,0,0.05)] text-right";
  const ITEM_CLASS = "flex justify-end items-center gap-2 cursor-pointer";
  const LABEL_CLASS = "hover:font-semibold hover:text-[#202020]";
  const ICON_SIZE = 36;

  const items: {
    label: string;
    Icon: React.FC<React.SVGProps<SVGSVGElement>>;
    color?: string; // hover 시 적용할 색상 (예: 'text-teal-500' 또는 '#00A78E')
  }[] = [
    { label: "ALL", Icon: ALLIcon, color: "#FF66A4" },
    { label: "Branding", Icon: BrandingIcon, color: "#FFB297" },
    { label: "Graphic", Icon: GraphicIcon, color: "#FF66A4" },
    { label: "UI/UX", Icon: UiuxIcon, color: "#8EA6F4" },
    { label: "Illust", Icon: IllustIcon, color: "#FF8585" },
    { label: "Editorial", Icon: EditorialIcon, color: "#667CFF" },
    { label: "Media", Icon: MediaIcon, color: "#FF92C4" },
    { label: "3D", Icon: ThreeDIcon, color: "#70D8CE" },
    { label: "Game", Icon: GameIcon, color: "#8DC9F7" },
  ];

  return (
    <aside className="w-[220px] flex-shrink-0 ">
      <ul className={CONTAINER_CLASS}>
        {items.map(({ label, Icon, color }) => {
          // hover 색상 클래스 혹은 인라인 색상 스타일 지원
          const iconClass =
            color && color.startsWith("text-") ? `${color}` : undefined;
          const iconStyle =
            color && !color.startsWith("text-") ? { color } : undefined;
          return (
            <li key={label} className={ITEM_CLASS}>
              <span className={LABEL_CLASS}>{label}</span>
              <span className={iconClass} style={iconStyle}>
                <Icon width={ICON_SIZE} height={ICON_SIZE} />
              </span>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default FilterSidebar;
