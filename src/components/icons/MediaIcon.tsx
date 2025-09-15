import React from "react";

export interface MediaIconProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
  className?: string;
}

const MediaIcon: React.FC<MediaIconProps> = ({
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
      d="M23.513 3H23.4973V13.0909V15.6447H21.3053V12.0115L3 3V32.5385L21.2611 23.5488L21.2958 23.5332L23.4973 22.4476L25.0995 21.6575L26.0803 23.3808L23.4973 24.8086V32.5385H33V3H23.513Z"
      fill="currentColor"
      fillOpacity="0.2"
    />
  </svg>
);

export default MediaIcon;
