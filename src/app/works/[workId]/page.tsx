import { use } from "react";
import { EmailIcon, InstagramIcon } from "@/components/icons";
import { getCategoriesByQueryKeys } from "@/utils/categories";
import { getImageSrc } from "../../../utils/getImageSrc";
import { worksData } from "../../../data/works";
import { designersData } from "../../../data/designers";

// Why: 작품 상세 페이지의 props 타입 정의
// What: URL 파라미터로부터 받는 작품 ID 타입
// How: Next.js의 params를 통해 동적 라우팅 파라미터를 받음
interface WorkDetailPageProps {
  params: Promise<{
    workId: string;
  }>;
}

// Why: 작품 상세 정보를 표시하는 페이지
// What: FilterSidebar와 동일한 스타일의 왼쪽 사이드바와 작품 이미지가 있는 페이지
// How: Next.js 동적 라우팅을 사용하여 작품 ID별로 페이지 생성
export default function WorkDetailPage({ params }: WorkDetailPageProps) {
  // Why: Next.js 15에서 params가 Promise로 변경되어 unwrap 필요
  // What: params Promise를 unwrap하여 실제 params 객체에 접근
  // How: React.use()를 사용하여 Promise를 unwrap
  const { workId } = use(params);

  // Why: workId를 기반으로 실제 작품 데이터를 찾는 함수
  // What: worksData에서 해당 work_id와 일치하는 작품 정보를 반환
  // How: find 메서드를 사용하여 매칭되는 작품 데이터를 찾음
  const work = worksData.find((w) => w.work_id === workId);

  // Why: designer_id를 기반으로 디자이너 정보를 찾는 함수
  // What: designersData에서 해당 designer_id와 일치하는 디자이너 정보를 반환
  // How: find 메서드를 사용하여 매칭되는 디자이너 데이터를 찾음
  const designer = work
    ? designersData.find((d) => d.designer_id === work.designer_id)
    : null;

  // Why: 작품 데이터가 없을 경우 기본값 설정
  // What: work나 designer가 없을 경우 기본 데이터를 사용
  // How: 조건부 렌더링을 위해 기본값 객체 생성
  const workData = work
    ? {
        title: work.work_title,
        subtitle: work.work_sub_title,
        author: designer?.designer_name || "Unknown",
        authorEn: designer?.designer_english_name || "Unknown",
        email: designer?.designer_email || "",
        instagram: designer?.designer_insta_id,
        categories: [
          work.work_category_main.toLowerCase(),
          work.work_category_sub.toLowerCase(),
        ],
        description: work.work_description,
        thumbnail: work.work_thumbnail,
        detailImages: work.work_detail_images,
      }
    : {
        title: "작품을 찾을 수 없습니다",
        subtitle: "",
        author: "Unknown",
        authorEn: "Unknown",
        email: "",
        instagram: "",
        categories: [],
        description: "해당 작품을 찾을 수 없습니다.",
        thumbnail: "",
        detailImages: [],
      };

  const categoryItems = getCategoriesByQueryKeys(workData.categories);

  return (
    <>
      <img
        src={getImageSrc("/images/common/background-image.png")}
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
              {workData.instagram && (
                <div className="flex items-center gap-1 text-[9px] text-[#20202080]">
                  <InstagramIcon size={9} />
                  <span>{workData.instagram}</span>
                </div>
              )}
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
        {/* What: 작품의 실제 상세 이미지들을 표시 */}
        {/* How: workData.detailImages 배열을 순회하여 각 이미지를 표시 */}
        <section className="w-full mx-auto flex flex-col items-center justify-center gap-4 ml-72 mr-[51px]">
          {workData.detailImages.length > 0 ? (
            workData.detailImages.map((imageName, index) => (
              <img
                key={index}
                src={getImageSrc(`/images/works/detail/${imageName}`)}
                alt={`${workData.title} 상세 이미지 ${index + 1}`}
                className="max-w-full object-contain rounded-lg shadow-lg"
              />
            ))
          ) : (
            <img
              src={getImageSrc("/images/works/detail/detail_sample1.png")}
              alt={`작품 ${workId}`}
              className="max-w-full object-contain rounded-lg shadow-lg"
            />
          )}
        </section>
      </main>
    </>
  );
}

// Why: 정적 내보내기(output: export)에서 동적 라우트는 사전 생성이 필요함
// What: 빌드 타임에 생성할 works 상세 페이지의 workId 목록을 반환
// How: 실제 worksData의 work_id를 그대로 사용하여 정적 생성
export async function generateStaticParams() {
  return worksData.map((work) => {
    // work_id를 그대로 사용 (work-1, work-2 등)
    return { workId: work.work_id };
  });
}
