import { FC } from "react";
import { ImageWrapper } from "../index";

export const LoadingSpinner: FC = () => {
  return (
    <section className={"w-fit h-fit p-2"}>
      <ImageWrapper src={"spinner.svg"}
        alt={"Loading"}
        className={"animate-spin w-10 h-10"}
        width={24} height={24}
      />
    </section>
  )
}
