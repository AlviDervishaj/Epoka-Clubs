// React
import { FC } from "react";

// Helpers
import Image from "next/image";
import { ImageProps } from "next/image";

export const ImageWrapper: FC<ImageProps> = ({ alt, src, width, height, className, priority, ...props }) => {
  return (
    <section className={"w-40 h-20 relative flex items-center contens-center justify-center"}>
      <Image alt={alt} src={`/static/images/${src}`} width={width} height={height} className={className} priority={priority} {...props} />
    </section>
  )
}
