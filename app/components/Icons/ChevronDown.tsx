// React
import { FC } from "react";

// Helpers
import { IconProps } from "./helpers";

export const ChevronDown: FC<IconProps> = ({ className, fill, stroke }) => {
  return (

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5}
      stroke={stroke ? stroke : "#000"} fill={fill ? fill : "#000"} className={className ? className : "w-6 h-6"}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  )
}
