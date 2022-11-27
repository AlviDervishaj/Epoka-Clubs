import { FC } from "react";
import Image from "next/image";

export const LoadingSpinner: FC = () => {
  return (
    <section className={"w-fit h-fit p-2"}>
      <Image src={"/static/images/spinner.svg"} alt={"Loading"}
        className={"animate-spin w-10 h-10"} width={24} height={24}
      />
    </section>
  )
}
