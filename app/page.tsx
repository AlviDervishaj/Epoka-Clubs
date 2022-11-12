'use client';

// React & Next
import { useRef, useState } from "react";
import Link from "next/link";

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
    <div className="w-full h-screen backdrop-blur-sm">
      <div className="homeBackground" />
      <main className="w-full h-full backdrop-blur-[6px]">
        <header className="h-[40%] grid place-items-center">
          <h1 className="text-3xl md:text-5xl bg-clip-text from-blue-500 to-green-500 font-bold bg-gradient-to-br lg:text-6xl text-transparent">Epoka Clubs</h1>
        </header>
        <section className="h-[40%] flex flex-row items-center content-center justify-center">
          <button onClick={() => signInWrapper()}
            className="w-1/3 bg-sky-500 text-slate-800 px-1 py-3 rounded-md shadow shadow-slate-800 tracking-wider text-md md:text-lg">Sign In</button>
        </section>

        <div className="h-1/5 grid place-items-center w-full py-3">

          {error && <h2 className="text-red-500 font-bold text-2xl">{error}</h2>}
        </div>
        <Link href="/auth" className="hidden" ref={linkRef}>Proceed</Link>
        {/* <footer className="h-1/5 grid place-items-center w-full py-3 bg-slate-800">
          <h2 className="text-lg text-slate-200">Footer section here.</h2>
        </footer> */}
      </main>
    </div>
  );
}
