import React from "react";

export interface ALLIconProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
  className?: string;
}

const ALLIcon: React.FC<ALLIconProps> = ({
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
      d="M11.7946 31H4L13.1189 4H22.9189L32 31H24.2432L22.5973 25.7044H13.4216L11.7946 31ZM15.0865 20.3343H20.9324L18.1135 11.2721H17.8865L15.0865 20.3343Z"
      fill="currentColor"
      fillOpacity="0.2"
    />
  </svg>
);

export default ALLIcon;
