import React from "react";

export interface BrandingIconProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
  className?: string;
}

const BrandingIcon: React.FC<BrandingIconProps> = ({
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
      d="M36 17.9984L28.5913 13.6144L30.7286 5.27142L22.3856 7.40873L18.0016 0L13.6144 7.40873L5.27454 5.27142L7.40873 13.6144L0 17.9984L7.40873 22.3856L5.27454 30.7286L13.6144 28.5913L18.0016 36L22.3856 28.5913L30.7286 30.7286L28.5913 22.3856L36 17.9984ZM21.2732 19.7233L19.7264 21.27L18.0016 19.5452L16.2767 21.27L14.73 19.7233L16.4548 17.9984L14.73 16.2736L16.2767 14.7268L18.0016 16.4517L19.7264 14.7268L21.2732 16.2736L19.5483 17.9984L21.2732 19.7233Z"
      fill="currentColor"
    />
  </svg>
);

export default BrandingIcon;
