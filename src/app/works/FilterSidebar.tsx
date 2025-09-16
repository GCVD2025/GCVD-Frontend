"use client";

import { useState, useEffect, useRef } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { categories } from "@/utils/categories";
import { hexToRgb } from "@/utils/color";

export function FilterSidebar() {
  // URL 쿼리스트링 및 라우팅 관리
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  /**
   * 사이드바 마우스 인터랙션 정책
   *
   * 1. 초기 상태: 컴포넌트 마운트 후 3초 뒤 자동 숨김
   * 2. 마우스 hover: 즉시 표시, hover 중에는 움직이지 않음
   * 3. 마우스 leave: hover 상태 해제 후 3초 뒤 숨김
   * 4. 상태 우선순위: hover > 자동 숨김 (hover 중에는 자동 숨김 무시)
   */

  // 사이드바 자동 숨김 상태 관리
  const [isHidden, setIsHidden] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // 타이머 참조를 위한 ref
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // 타이머 정리 함수
  const clearHideTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  // 3초 후 사이드바 자동 숨김 (hover 상태가 아닐 때만)
  useEffect(() => {
    // 기존 타이머 정리
    clearHideTimer();

    // hover 상태가 아닐 때만 타이머 설정
    if (!isHovered) {
      timerRef.current = setTimeout(() => {
        setIsHidden(true);
        timerRef.current = null;
      }, 3000);
    }

    return () => clearHideTimer();
  }, [isHovered]);

  const CONTAINER_CLASS =
    "flex flex-col gap-[26px] sticky top-12 backdrop-blur-sm text-[14px] leading-[20px] font-medium py-[54px] pr-[38px] rounded-[12px] w-[200px] bg-white shadow-[0_0_32px_0_rgba(0,0,0,0.05)] text-right";
  const ITEM_CLASS =
    "flex justify-end items-center gap-5 cursor-pointer group relative";
  const ICON_SIZE = 36;

  // 필터 아이템 정의
  const items = categories;

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
      onMouseEnter={() => {
        // 정책 2: 마우스 hover 시 즉시 표시, hover 상태 설정
        setIsHidden(false);
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        // 정책 3: 마우스 leave 시 hover 상태 해제 (useEffect에서 타이머 관리)
        setIsHovered(false);
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
                  "--icon-hover-color": icon_color,
                  "--text-color": isActive ? "#202020" : "#20202099",
                } as React.CSSProperties
              }
            >
              {/* 필터 텍스트 */}
              <span className="relative inline-block">
                <span
                  className={`font-medium text-[var(--text-color)] group-hover:text-[#202020] transition-[font-weight,color,filter] filter group-hover:drop-shadow-[0_0_5px_var(--icon-shadow-color)] ${
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
                  className={`transition-colors text-[var(--icon-color)] group-hover:text-[var(--icon-hover-color)] filter group-hover:drop-shadow-[0_0_5px_var(--icon-shadow-color)]`}
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
