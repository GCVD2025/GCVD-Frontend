import React from "react";

export interface GameIconProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
  className?: string;
}

const GameIcon: React.FC<GameIconProps> = ({
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
      d="M34.3077 12.7765V23.5281H25.0698L22.6591 21.1174L21.1174 22.6591L21.9864 23.5281L23.5281 25.0698V34.3077H12.7765V25.0729L15.1903 22.6591L13.6486 21.1174L11.2379 23.5281H2V12.7765H11.2348L12.7765 14.3182L13.6486 15.1903L15.1903 13.6486L12.7765 11.2348V2H23.5281V11.2379L21.9895 12.7765L21.1174 13.6486L22.6591 15.1903L25.0729 12.7765H34.3077Z"
      fill="currentColor"
    />
  </svg>
);

export default GameIcon;
