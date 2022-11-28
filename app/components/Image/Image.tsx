// React
import { FC } from "react";

// Helpers
import Image from "next/image";
import { ImageProps } from "next/image";

export const ImageWrapper: FC<ImageProps> = ({ alt, src, width, height, className, priority, ...props }) => {
  return (
    <Image alt={alt} src={`/static/images/${src}`} width={width} height={height} className={className} priority={priority} {...props} />
  )
}
