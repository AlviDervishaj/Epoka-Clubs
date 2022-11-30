// React & Next
import { NextComponentType } from "next";

// Components
import { LoadingSpinner, ImageWrapper } from "../index";

export const Loading: NextComponentType = () => {
  return (
    <main className={"w-screen h-screen flex flex-col items-center content-center justify-center overflow-hidden bg-slate-100"}>
      <section className={"w-40 h-20 relative"}>
        <ImageWrapper alt={"Epoka"}
          fill
          className={"!w-auto !h-auto !relative"}
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
