"use client";

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
    "flex flex-col gap-[20px] sticky top-12 backdrop-blur-sm text-[14px] leading-[20px] font-medium py-[54px] pr-[38px] rounded-[12px] w-[200px] bg-white shadow-[0_0_32px_0_rgba(0,0,0,0.05)] text-right";
  const ITEM_CLASS = "flex justify-end items-center gap-2 cursor-pointer group";
  const ICON_SIZE = 36;

  // Why: hover 효과를 class로 제어하던 것을 제거하고, 아이콘 색상을 명시적으로 전달해 일관성을 높인다
  // What: items의 속성을 hoverClass -> icon_color로 변경하고, Icon에는 class 대신 color(style)만 전달한다
  // How: Icon 컴포넌트가 currentColor를 사용하므로 style.color를 넘겨 색상을 지정한다

  const items: {
    label: string;
    Icon: React.FC<React.SVGProps<SVGSVGElement>>;
    icon_color: string; // 예: "#FF66A4"
  }[] = [
    { label: "ALL", Icon: ALLIcon, icon_color: "#FF66A4" },
    {
      label: "Branding",
      Icon: BrandingIcon,
      icon_color: "#FFB297",
    },
    {
      label: "Graphic",
      Icon: GraphicIcon,
      icon_color: "#FF66A4",
    },
    {
      label: "UI/UX",
      Icon: UiuxIcon,
      icon_color: "#8EA6F4",
    },
    {
      label: "Illust",
      Icon: IllustIcon,
      icon_color: "#FF8585",
    },
    {
      label: "Editorial",
      Icon: EditorialIcon,
      icon_color: "#667CFF",
    },
    {
      label: "Media",
      Icon: MediaIcon,
      icon_color: "#FF92C4",
    },
    { label: "3D", Icon: ThreeDIcon, icon_color: "#70D8CE" },
    { label: "Game", Icon: GameIcon, icon_color: "#8DC9F7" },
  ];

  return (
    <aside className="w-[220px] flex-shrink-0 relative z-50">
      <ul className={CONTAINER_CLASS}>
        {items.map(({ label, Icon, icon_color }) => (
          <li key={label} className={ITEM_CLASS}>
            {/* 텍스트: 기본 medium, hover 시 extrabold + color 변경 */}
            <span
              className={`font-medium transition-[font-weight,color] group-hover:font-extrabold group-hover:text-[#202020] text-[#20202099] cursor-pointer`}
            >
              {label}
            </span>

            {/* 아이콘: 명시적 color(style) 전달 */}
            <span className={`cursor-pointer`}>
              <Icon
                width={ICON_SIZE}
                height={ICON_SIZE}
                className={`transition-colors text-[#00A78E33] group-hover:text-[${icon_color}]`}
              />
            </span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default FilterSidebar;
