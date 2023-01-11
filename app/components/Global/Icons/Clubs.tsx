// React
import { FC } from "react";

// Types
import { IconProps } from "@types"

export const ClubsIcon: FC<IconProps> = ({ className, width, height, fill, stroke, strokeWidth }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
      width={width}
      height={height}
    >
      <path
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        d="M19.5,2H4.5C2.02,2,0,4.02,0,6.5v11c0,2.48,2.02,4.5,4.5,4.5h15c2.48,0,4.5-2.02,4.5-4.5V6.5c0-2.48-2.02-4.5-4.5-4.5ZM4.5,3h15c1.93,0,3.5,1.57,3.5,3.5v.5H1v-.5c0-1.93,1.57-3.5,3.5-3.5Zm15,18H4.5c-1.93,0-3.5-1.57-3.5-3.5V8H23v9.5c0,1.93-1.57,3.5-3.5,3.5ZM11,11.5c0,.28-.22,.5-.5,.5h-2.5v5.5c0,.28-.22,.5-.5,.5s-.5-.22-.5-.5v-5.5h-2.5c-.28,0-.5-.22-.5-.5s.22-.5,.5-.5h6c.28,0,.5,.22,.5,.5Zm9,0c0,.28-.22,.5-.5,.5h-6c-.28,0-.5-.22-.5-.5s.22-.5,.5-.5h6c.28,0,.5,.22,.5,.5Zm0,4c0,.28-.22,.5-.5,.5h-6c-.28,0-.5-.22-.5-.5s.22-.5,.5-.5h6c.28,0,.5,.22,.5,.5Z" />
    </svg>
  )
}
