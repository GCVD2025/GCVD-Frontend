"use client";

import { useState, useEffect } from "react";
import ALLIcon from "@/components/icons/ALLIcon";
import BrandingIcon from "@/components/icons/BrandingIcon";
import GraphicIcon from "@/components/icons/GraphicIcon";
import UiuxIcon from "@/components/icons/UiuxIcon";
import IllustIcon from "@/components/icons/IllustIcon";
import EditorialIcon from "@/components/icons/EditorialIcon";
import MediaIcon from "@/components/icons/MediaIcon";
import ThreeDIcon from "@/components/icons/ThreeDIcon";
import GameIcon from "@/components/icons/GameIcon";
import { hexToRgb } from "@/utils/color";

export function FilterSidebar() {
  // Why: 3초 후 사이드바를 숨기고 hover 시 다시 보이게 하기 위한 상태 관리
  // What: isHidden 상태로 사이드바의 표시/숨김을 제어한다
  // How: useState와 useEffect를 사용해 3초 후 자동으로 숨김 처리한다
  const [isHidden, setIsHidden] = useState(false);

  // Why: 컴포넌트 마운트 후 3초 뒤에 사이드바를 숨기기 위한 타이머 설정
  // What: useEffect로 3초 후 isHidden을 true로 변경한다
  // How: setTimeout을 사용해 3000ms 후 상태를 업데이트한다
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHidden(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const CONTAINER_CLASS =
    "flex flex-col gap-[26px] sticky top-12 backdrop-blur-sm text-[14px] leading-[20px] font-medium py-[54px] pr-[38px] rounded-[12px] w-[200px] bg-white shadow-[0_0_32px_0_rgba(0,0,0,0.05)] text-right";
  const ITEM_CLASS =
    "flex justify-end items-center gap-2 cursor-pointer group relative";
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

  // Why: hover 시 아이콘 컬러를 기반으로 옅은 gradient/glow 생성 시 HEX→RGB 변환이 필요
  // What: 공용 유틸 `hexToRgb`를 사용해 rgba(...) 값을 계산한다
  // How: 동적 임의값 클래스 대신 인라인 스타일에만 색/알파를 주입하고, 표시 토글은 group-hover로 담당

  return (
    <aside
      className={`w-60 left-[-10px] flex-shrink-0 relative z-50 transition-transform duration-500 ease-in-out ${
        isHidden ? "-translate-x-[80px]" : "translate-x-0"
      }`}
      onMouseEnter={() => setIsHidden(false)}
      onMouseLeave={() => {
        // Why: 마우스가 벗어나면 다시 3초 후에 숨김 처리하기 위한 타이머 재설정
        // What: hover가 끝나면 3초 후 다시 숨김 상태로 변경한다
        // How: setTimeout을 사용해 3초 후 isHidden을 true로 설정한다
        setTimeout(() => {
          setIsHidden(true);
        }, 3000);
      }}
    >
      <ul className={CONTAINER_CLASS}>
        {items.map(({ label, Icon, icon_color }) => {
          const { r, g, b } = hexToRgb(icon_color);

          return (
            <li
              key={label}
              className={ITEM_CLASS}
              style={
                {
                  "--icon-shadow-color": `rgba(${r},${g},${b},0.6)`,
                } as React.CSSProperties
              }
            >
              {/* 텍스트: 기본 텍스트 + 같은 위치의 gradient 오버레이를 hover에만 노출 */}
              <span className="relative inline-block">
                <span
                  className={`font-medium text-[#20202099] group-hover:text-[#202020] transition-[font-weight,color,filter] filter group-hover:drop-shadow-[0_0_5px_var(--icon-shadow-color)] ${
                    isHidden ? "blur-sm" : "blur-0"
                  }`}
                >
                  {label}
                </span>
              </span>

              {/* 아이콘: 기존 컬러 전환 + drop-shadow 오버레이 (hover 시만) */}
              <span
                style={{
                  color: icon_color,
                }}
                className={`relative cursor-pointer`}
              >
                <Icon
                  width={ICON_SIZE}
                  height={ICON_SIZE}
                  fill="currentColor"
                  className={`transition-colors text-[#00A78E33] group-hover:text-[${icon_color}] filter group-hover:drop-shadow-[0_0_5px_var(--icon-shadow-color)]`}
                />
              </span>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default FilterSidebar;
