// React & Next
import { NextComponentType } from "next";
import Image from "next/image";

export const Loading: NextComponentType = () => {
  return (
    <main className={"w-screen h-screen flex flex-row items-center content-center justify-center overflow-hidden bg-slate-100"}>
      <section className={"w-32"}>
        <Image alt={"Epoka"}
          width={128}
          height={128}
          className={"w-auto h-auto"}
          priority={true}
          src={"/static/images/EpokaLogoTransparent.png"}
        />
      </section>
    </main>
  )
}
