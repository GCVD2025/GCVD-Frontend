import React from "react";

export interface EditorialIconProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
  className?: string;
}

const EditorialIcon: React.FC<EditorialIconProps> = ({
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
      d="M33 8.85538L17.6172 14.8985H33V20.7538L17.6266 26.7938H33V32.5385H3V26.7938L18.6609 20.64H3V14.8985L18.6546 8.74461H3V3H33V8.85538Z"
      fill="currentColor"
      fillOpacity="0.2"
    />
  </svg>
);

export default EditorialIcon;
