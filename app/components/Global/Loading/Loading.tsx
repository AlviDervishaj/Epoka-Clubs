// React & Next
import { NextComponentType } from "next";

// Components
import { LoadingSpinner, ImageWrapper } from "../index";

export const Loading: NextComponentType = () => {
  return (
    <main className={"w-screen h-screen flex flex-col items-center content-center justify-center overflow-hidden bg-slate-100"}>
      <ImageWrapper alt={"Epoka"}
        fill
        sizes="(max-width: 640px) 100vw, 640px"
        className={"!w-auto !h-auto !relative"}
        priority={true}
        src={"EpokaLogoTransparent.png"}
      />
      <LoadingSpinner />
    </main>
  )
}
