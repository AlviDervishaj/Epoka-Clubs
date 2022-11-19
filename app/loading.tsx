import Image from "next/image";

export default function Loading() {
  return (
    <section className={"w-screen h-screen bg-blue-500 grid place-items-center"}>
      <div className={"w-fit h-fit relative"}>

        <Image src={"/static/images/EpokaLogoTransparent.png"} alt={"Epoka"} width={400} height={500} />
      </div>
    </section>
  );
};
