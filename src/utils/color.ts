// Why: 색상을 다루는 공용 유틸이 여러 곳에서 재사용될 수 있어 중복을 방지한다
// What: HEX 문자열("#RGB" | "#RRGGBB")을 RGB 숫자 객체로 변환한다
// How: 짧은 표기(#RGB)는 각 문자를 두 번 반복해 확장한 뒤 16진수 파싱

export interface RgbColor {
  r: number;
  g: number;
  b: number;
}

export function hexToRgb(hex: string): RgbColor {
  const normalized = hex.replace("#", "");
  const full =
    normalized.length === 3
      ? normalized
          .split("")
          .map((c) => c + c)
          .join("")
      : normalized;
  const r = parseInt(full.slice(0, 2), 16);
  const g = parseInt(full.slice(2, 4), 16);
  const b = parseInt(full.slice(4, 6), 16);
  return { r, g, b };
}
