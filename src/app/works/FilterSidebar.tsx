"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
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
  // URL 쿼리스트링 및 라우팅 관리
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // 사이드바 자동 숨김 상태 관리
  const [isHidden, setIsHidden] = useState(false);

  // 3초 후 사이드바 자동 숨김
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

  // 필터 아이템 정의
  const items: {
    label: string;
    Icon: React.FC<React.SVGProps<SVGSVGElement>>;
    icon_color: string;
    queryKey: string;
  }[] = [
    { label: "ALL", Icon: ALLIcon, icon_color: "#FF66A4", queryKey: "all" },
    {
      label: "Branding",
      Icon: BrandingIcon,
      icon_color: "#FFB297",
      queryKey: "branding",
    },
    {
      label: "Graphic",
      Icon: GraphicIcon,
      icon_color: "#FF66A4",
      queryKey: "graphic",
    },
    {
      label: "UI/UX",
      Icon: UiuxIcon,
      icon_color: "#8EA6F4",
      queryKey: "uiux",
    },
    {
      label: "Illust",
      Icon: IllustIcon,
      icon_color: "#FF8585",
      queryKey: "illust",
    },
    {
      label: "Editorial",
      Icon: EditorialIcon,
      icon_color: "#667CFF",
      queryKey: "editorial",
    },
    {
      label: "Media",
      Icon: MediaIcon,
      icon_color: "#FF92C4",
      queryKey: "media",
    },
    { label: "3D", Icon: ThreeDIcon, icon_color: "#70D8CE", queryKey: "3d" },
    { label: "Game", Icon: GameIcon, icon_color: "#8DC9F7", queryKey: "game" },
  ];

  /**
   * 필터 선택 정책
   *
   * 1. 기본 상태: 쿼리스트링이 없을 때 "ALL" 필터가 활성화됨
   * 2. 단일 선택: 한 번에 하나의 필터만 선택 가능
   * 3. 선택된 필터 클릭: 아무 일도 일어나지 않음 (해제되지 않음)
   * 4. 다른 필터 클릭: 기존 선택 해제 후 새로운 필터 선택
   * 5. 쿼리스트링 관리: 선택된 필터는 ?filterKey=true 형태로 URL에 반영
   */
  const handleFilterClick = (queryKey: string) => {
    // 현재 선택된 필터인지 확인 (기본값 all 고려)
    const isCurrentlyActive =
      searchParams.toString() === ""
        ? queryKey === "all"
        : searchParams.get(queryKey) !== null;

    // 선택된 필터를 다시 클릭하면 아무 일도 일어나지 않음
    if (isCurrentlyActive) {
      return;
    }

    // 다른 필터를 클릭하면 해당 필터만 선택
    const params = new URLSearchParams();
    params.set(queryKey, "true");
    router.push(`${pathname}?${params.toString()}`);
  };

  // hover 효과를 위한 색상 변환 유틸리티 사용

  return (
    <aside
      className={`w-60 left-[-10px] flex-shrink-0 relative z-50 transition-transform duration-500 ease-in-out ${
        isHidden ? "-translate-x-[80px]" : "translate-x-0"
      }`}
      onMouseEnter={() => setIsHidden(false)}
      onMouseLeave={() => {
        // 마우스가 벗어나면 3초 후 다시 숨김
        setTimeout(() => {
          setIsHidden(true);
        }, 3000);
      }}
    >
      <ul className={CONTAINER_CLASS}>
        {items.map(({ label, Icon, icon_color, queryKey }) => {
          const { r, g, b } = hexToRgb(icon_color);

          // 현재 필터가 활성화되어 있는지 확인 (기본값 all 고려)
          const isActive =
            searchParams.toString() === ""
              ? queryKey === "all"
              : searchParams.get(queryKey) !== null;

          return (
            <li
              key={label}
              className={ITEM_CLASS}
              onClick={() => handleFilterClick(queryKey)}
              style={
                {
                  "--icon-shadow-color": `rgba(${r},${g},${b},0.6)`,
                  "--icon-color": isActive ? icon_color : "#00A78E33",
                } as React.CSSProperties
              }
            >
              {/* 필터 텍스트 */}
              <span className="relative inline-block">
                <span
                  className={`font-medium transition-[font-weight,color,filter] filter group-hover:drop-shadow-[0_0_5px_var(--icon-shadow-color)] ${
                    isHidden ? "blur-sm" : "blur-0"
                  }`}
                >
                  {label}
                </span>
              </span>

              {/* 필터 아이콘 */}
              <span className="relative cursor-pointer">
                <Icon
                  width={ICON_SIZE}
                  height={ICON_SIZE}
                  fill="currentColor"
                  className={`transition-colors text-[var(--icon-color)] group-hover:text-[${icon_color}] filter group-hover:drop-shadow-[0_0_5px_var(--icon-shadow-color)]`}
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
