// Why: 전 페이지 하단에 고정적인 전시 정보(학과, 주소, 저작권)를 제공해 신뢰성과 일관성을 확보하기 위함.
// What: 1280px 이상 데스크톱 해상도만 지원하는 단일 푸터 UI 컴포넌트. Pretendard 12px/16px, Regular(400) 타이포를 사용하고 그리드로 3영역(좌/중/우)을 배치한다.
// How: Tailwind CSS 유틸리티 클래스로 타이포와 레이아웃을 구성. App Router의 레이아웃에 포함되어 항상 렌더링되도록 한다.

import React from "react";

function Footer(): React.ReactElement {
  return (
    <footer className="w-full border-t border-[#20202026] bg-white">
      <div
        className={[
          "mx-auto w-full max-w-[1280px]",
          "grid grid-cols-3",
          "px-8 py-10",
          "text-[12px] leading-4 font-normal text-[#20202099]",
        ].join(" ")}
      >
        {/* 좌측: 학과 표기 (국/영) */}
        <div className="text-left space-y-1">
          <p>가천대학교 시각디자인학과</p>
          <p>Gachon University Visual Design</p>
        </div>

        {/* 중앙: 전시 장소 주소 */}
        <div className="text-center space-y-1">
          <p>경기도 성남시 수정구 성남대로 1342</p>
          <p>가천대학교 비전타워 B1</p>
        </div>

        {/* 우측: 저작권 표기 */}
        <div className="text-right">
          <p>© 2025. GCVD all rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
