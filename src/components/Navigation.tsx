"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavigationProps {
  className?: string;
}

export default function Navigation({ className = "" }: NavigationProps) {
  const pathname = usePathname();

  // Why: 링크 스타일을 한 곳에서 관리해 유지보수성을 높이기 위함
  // What: 활성/비활성 공통 클래스와 클래스 생성 헬퍼를 정의
  // How: 상수로 스타일을 선언하고, 현재 경로와 비교해 클래스 문자열을 조합
  const LINK_BASE_CLASS = "w-[160px] text-center";
  const ACTIVE_LINK_CLASS =
    "bg-[radial-gradient(circle_at_50%_130%,rgba(255,102,164,1),rgba(255,102,164,0.8)_45%,transparent_100%)] text-white px-6 py-2 rounded-full font-extrabold";
  const INACTIVE_LINK_CLASS = "text-gray-700";

  const getLinkClass = (targetPath: string) => {
    // Why: works 상세 페이지에서도 Works 네비게이션이 active되도록 하기 위함
    // What: 정확한 경로 매칭 또는 works 상세 페이지 경로 매칭
    // How: startsWith를 사용하여 /works로 시작하는 모든 경로를 매칭
    const isActive = pathname.includes(targetPath);
    return `${LINK_BASE_CLASS} ${
      isActive ? ACTIVE_LINK_CLASS : INACTIVE_LINK_CLASS
    }`;
  };

  // Why: 라벨/경로를 한 곳에서 정의해 링크 추가/변경을 단순화
  // What: 네비게이션 링크 메타데이터 배열
  // How: map 렌더링으로 반복 JSX 제거
  const links: { href: string; label: string }[] = [
    { href: "/about", label: "About" },
    { href: "/works", label: "Works" },
    { href: "/designers", label: "Designers" },
    { href: "/guest", label: "Guest" },
  ];

  return (
    <header
      className={`fixed top-0 z-50 w-full flex items-center justify-center ${className}`}
    >
      <nav
        className="mt-[20px] p-[6px] flex items-center justify-center gap-[6px] bg-white/60 rounded-[100px] backdrop-blur-[20px] drop-shadow-[0_0_32px_0_rgba(0,0,0,0.05)]"
        style={{
          boxShadow: "0 0 32px 0 rgba(0, 0, 0, 0.05)",
        }}
      >
        {links.map(({ href, label }) => (
          <Link key={href} href={href} className={getLinkClass(href)}>
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
