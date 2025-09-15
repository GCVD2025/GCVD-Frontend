import React from "react";

export interface ThreeDIconProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
  className?: string;
}

const ThreeDIcon: React.FC<ThreeDIconProps> = ({
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
      d="M32.6154 12.1721V26.5777L18.3061 34.7692L4 26.5777V12.2804L8.62726 14.9387L9.72245 13.0634L4.35882 9.98729L18.3061 2L32.163 9.93158L26.7057 13.0634L27.7978 14.9387L32.6154 12.1721Z"
      fill="currentColor"
    />
  </svg>
);

export default ThreeDIcon;
