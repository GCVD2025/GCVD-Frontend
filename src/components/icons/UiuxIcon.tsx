import React from "react";

export interface UiuxIconProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
  className?: string;
}

const UiuxIcon: React.FC<UiuxIconProps> = ({
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
      d="M33 3L3.7968 10.3742L12.5334 15.5112L15.5956 13.3489L16.8954 15.1862L16.8673 15.205L16.7548 15.28L14.6207 16.7423H14.6238L3 24.704L11.2991 33L19.2577 21.3762L25.6258 32.2032L33 3Z"
      fill="currentColor"
      fillOpacity="0.2"
    />
  </svg>
);

export default UiuxIcon;
