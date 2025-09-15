import React from "react";

export interface IllustIconProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
  className?: string;
}

const IllustIcon: React.FC<IllustIconProps> = ({
  width = 36,
  height = 36,
  className,
  ...rest
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...rest}
  >
    <path
      d="M26.6714 28.3139L3.58298 33.8461L17.2824 20.2209L15.7492 18.6776L2 32.3464L7.54509 9.17511C12.238 10.8833 17.5748 9.32446 24.0435 2L33.8461 11.8074C26.5253 18.2793 24.9672 23.6187 26.6714 28.3139Z"
      fill="currentColor"
      fillOpacity="0.2"
    />
  </svg>
);

export default IllustIcon;
