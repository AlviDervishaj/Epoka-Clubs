'use client';

// React & Next
import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Helpers
import { signInWithGoogle, ReturnType } from "./utils";

export default function Home() {
  const [error, setError] = useState<string>();
  const linkRef = useRef<HTMLAnchorElement>(null);

  const signInWrapper = async (): Promise<void> => {
    const response: ReturnType = await signInWithGoogle();
    // Error handling
    if (response.error && (response.code === 400 || response.code === 500) && (linkRef.current)) {
      setError("Please try again later");
      if (response.error.code === "auth/popup-closed-by-user") return;
      console.log({ error: response.error });
    }
    return linkRef.current?.click();
  }

  return (
    <div className="w-full h-full bg-slate-100">
      <Image src={"/static/images/EpokaLogoTransparent.png"} priority alt={"Epoka"} width={144} height={96} className={"p-2"} />
      <main className="w-full h-full">
        <header className="h-full grid place-items-center">
          <h1 className="text-5xl  md:text-5xl bg-clip-text from-blue-900 to-blue-600 font-bold bg-gradient-to-br lg:text-6xl text-transparent">Epoka Clubs</h1>
        </header>
        <section className="h-full flex flex-row items-center content-center justify-center">
          <button onClick={() => signInWrapper()}
            className="w-1/3 bg-sky-500 text-slate-800 px-1 py-3 rounded-md shadow shadow-slate-800">
            <p className={"tracking-wider text-lg"}>Sign In</p>
          </button>
        </section>

        <div className="h-full grid place-items-center w-full py-3">
          {error && <h2 className="text-red-500 font-bold text-2xl">{error}</h2>}
        </div>
        <Link href="/auth" className="hidden" ref={linkRef}>Proceed</Link>
      </main>
    </div>
  );
}
