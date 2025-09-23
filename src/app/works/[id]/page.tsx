import { use } from "react";
import { EmailIcon, InstagramIcon } from "@/components/icons";
import { getCategoriesByQueryKeys } from "@/utils/categories";

// Why: 작품 상세 페이지의 props 타입 정의
// What: URL 파라미터로부터 받는 작품 ID 타입
// How: Next.js의 params를 통해 동적 라우팅 파라미터를 받음
interface WorkDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

// Why: 작품 상세 정보를 표시하는 페이지
// What: FilterSidebar와 동일한 스타일의 왼쪽 사이드바와 작품 이미지가 있는 페이지
// How: Next.js 동적 라우팅을 사용하여 작품 ID별로 페이지 생성
export default function WorkDetailPage({ params }: WorkDetailPageProps) {
  // Why: Next.js 15에서 params가 Promise로 변경되어 unwrap 필요
  // What: params Promise를 unwrap하여 실제 params 객체에 접근
  // How: React.use()를 사용하여 Promise를 unwrap
  const { id } = use(params);
  // Why: 작품 상세 정보 데이터 (실제로는 API에서 가져와야 함)
  // What: 작품의 제목, 부제목, 작가, 카테고리, 설명 등
  // How: 하드코딩된 데이터를 사용하여 UI 구성
  const workData = {
    title: "프로젝트 제목",
    subtitle: "프로젝트 부제",
    author: "홍길동",
    authorEn: "Hong Gil Dong",
    email: "email@gmail.com",
    instagram: "insta_id",
    categories: ["media", "graphic"],
    description: `'언어의 형상화'를 주제로 진행한 타이포그래피 실험 프로젝트입니다. 언어는 본래 소리로 존재하며, 시각적으로 기록될 때에는 획일화된 문자의 형태로 변환됩니다. 저는 이 과정에서 사라지는 '리듬과 뉘앙스'를 시각적으로 구현하고자 했습니다. 사람들의 발화를 녹음하여 리듬, 강약, 높낮이 같은 음성 데이터를 추출하고, 이를 기반한 그래픽 모듈을 설계했습니다. 각각의 모듈은 특정한 소리적 특징을 반영하며, 조합될 때 언어의 리듬감을 형상화합니다. 결과물은 포스터, 모션그래픽, 아트북 형태로 확장되며, 문자 이상의 감각적 언어를 전달합니다. 이번 실험은 타이포그래피를 단순한 활자 디자인을 넘어, 언어와 인간 경험을 확장적으로 탐구하는 장르로 재해석한 시도입니다.`,
  };

  const categoryItems = getCategoriesByQueryKeys(workData.categories);

  return (
    <>
      <img
        src="images/common/background-image.png"
        alt="background"
        className="fixed w-full h-full object-cover opacity-20"
      />

      <main className="py-6 flex min-h-screen mt-18 relative">
        {/* Why: FilterSidebar와 동일한 스타일의 왼쪽 사이드바 */}
        {/* What: 작품 상세 정보를 표시하는 사이드바 */}
        {/* How: FilterSidebar의 스타일을 그대로 가져와서 작품 정보 표시 */}
        <aside className="fixed top-24 w-72 flex-shrink-0 z-50">
          <div className="flex flex-col backdrop-blur-[16px] text-[14px] leading-[20px] font-medium rounded-[12px] w-[260px] bg-white/40 shadow-[0_0_24px_rgba(0,0,0,0.05)] shadow-[inset_0_0_100px_rgba(255,255,255,1)] py-10 pl-9 pr-7">
            {/* 카테고리 태그들 - 상단 가로 배치, 28px 상단 여백 */}
            <div className="flex gap-4 mb-8">
              {categoryItems.map(({ label, Icon, icon_color, queryKey }) => (
                <div key={queryKey} className="flex items-center gap-1">
                  <Icon width={14} height={14} style={{ color: icon_color }} />
                  <span className="text-[11px] text-[#202020E5] font-medium">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* 작품 제목 및 부제목 - 8px 간격, 40px 하단 여백 */}
            <div className="flex flex-col gap-2 mb-10">
              <h1 className="text-[18px] font-extrabold text-[#202020]">
                {workData.title}
              </h1>
              <h2 className="text-[14px] text-[#202020B2]">
                {workData.subtitle}
              </h2>
            </div>

            {/* 작가 정보 - 8px, 16px 간격, 40px 하단 여백 */}
            <div className="flex flex-col mb-10">
              <div className="text-[14px] font-bold text-[#202020] mb-2">
                {workData.author}
              </div>
              <div className="text-[12px] text-[#20202099]">
                {workData.authorEn}
              </div>
              <div className="flex items-center gap-1 text-[9px] text-[#20202080] mt-4">
                <EmailIcon size={9} />
                <span>{workData.email}</span>
              </div>
              <div className="flex items-center gap-1 text-[9px] text-[#20202080]">
                <InstagramIcon size={9} />
                <span>{workData.instagram}</span>
              </div>
            </div>

            {/* 작품 설명 */}
            <div>
              <div className="text-[11px] text-[#202020E5] leading-relaxed">
                {workData.description}
              </div>
            </div>
          </div>
        </aside>

        {/* Why: 작품 상세 이미지를 중앙에 배치 */}
        {/* What: 작품 ID에 해당하는 이미지를 표시 */}
        {/* How: img 태그를 사용하여 이미지 표시 */}
        <section className="w-full mx-auto flex flex-col items-center justify-center gap-4 ml-72 mr-[51px]">
          <img
            src="images/works/detail/detail_sample1.png"
            alt={`작품 ${id}`}
            className="max-w-full object-contain rounded-lg shadow-lg"
          />
          <img
            src="images/works/detail/detail-sample2.png"
            alt={`작품 ${id}`}
            className="max-w-full  object-contain rounded-lg shadow-lg"
          />
        </section>
      </main>
    </>
  );
}

// Why: 정적 내보내기(output: export)에서 동적 라우트는 사전 생성이 필요함
// What: 빌드 타임에 생성할 works 상세 페이지의 id 목록을 반환
// How: 데모 데이터 기준으로 1~15까지의 id를 정적으로 생성
export async function generateStaticParams() {
  const ids = Array.from({ length: 15 }, (_, i) => String(i + 1));
  return ids.map((id) => ({ id }));
}
