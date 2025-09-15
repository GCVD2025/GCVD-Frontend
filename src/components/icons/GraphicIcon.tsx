import React from "react";

export interface GraphicIconProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
  className?: string;
}

const GraphicIcon: React.FC<GraphicIconProps> = ({
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
      d="M27.3578 16.7642V18.949H32.0769V32.5385H18.6138V27.8318H16.4631V32.5385H3V18.949H7.71918V16.7642H3V3H16.4631V7.88146H18.6138V3H32.0769V16.7642H27.3578Z"
      fill="currentColor"
      fillOpacity="0.2"
    />
  </svg>
);

export default GraphicIcon;
