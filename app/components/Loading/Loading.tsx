// React & Next
import { NextComponentType } from "next";

// Components
import { LoadingSpinner, ImageWrapper } from "../index";

export const Loading: NextComponentType = () => {
  return (
    <main className={"w-screen h-screen flex flex-col items-center content-center justify-center gap-10 overflow-hidden bg-slate-100"}>
      <section className={"w-32"}>
        <ImageWrapper alt={"Epoka"}
          width={128}
          height={128}
          className={"w-auto h-auto"}
          priority={true}
          src={"EpokaLogoTransparent.png"}
        />
      </section>
      <section className={"w-40 grid place-items-center"}>
        <LoadingSpinner />
      </section>
    </main>
  )
}
