// Why: 디자이너와 작품 데이터의 타입을 정의하여 타입 안정성 확보
// What: Designer와 Work 인터페이스 정의
// How: TypeScript 인터페이스를 사용하여 데이터 구조 명시

export interface Designer {
  designer_id: string;
  designer_name: string;
  designer_english_name: string;
  designer_email: string;
  designer_insta_id: string;
  designer_profile_image: string;
  work_id: string;
}

export interface Work {
  work_id: string;
  work_title: string;
  work_sub_title: string;
  designer_id: string;
  work_thumbnail: string;
  work_categories: string[];
  work_detail_images: string[];
  work_description: string;
}
