// React
import { FC } from "react";

// Types
import { IconProps } from "@types"

export const ProfileIcon: FC<IconProps> = ({ width, height, className, fill, stroke, strokeWidth }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      className={className}
      id="Outline"
      viewBox="0 0 24 24"
      width={width}
      height={height}
    >
      <path d="M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z" />
      <path d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z" />
    </svg>
  )
}
