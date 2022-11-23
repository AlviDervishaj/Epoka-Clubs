'use client';

// React & Next
import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Framer Motion
import { motion, Variants } from "framer-motion";

// Helpers
import { signInWithGoogle, ReturnType } from "./utils";

export default function Home() {
  const [error, setError] = useState<string>();
  const linkRef = useRef<HTMLAnchorElement>(null);


  // animation options
  const framerVariants: Variants = { shown: { opacity: 1 } };

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
    <motion.div className="w-full h-full grid grid-cols-1 grid-rows-4" animate={"shown"} variants={framerVariants}>
      <Image src={"/static/images/EpokaLogoTransparent.png"} priority alt={"Epoka"} width={144} height={96} className={"p-2"} />
      <motion.main className="w-full h-full" >
        <motion.header className="h-full grid place-items-center">
          <motion.h1 className="text-5xl  md:text-5xl bg-clip-text from-blue-900 to-blue-600 font-bold bg-gradient-to-br lg:text-6xl text-transparent">
            Epoka Clubs
          </motion.h1>
        </motion.header>
        <motion.section className="h-full flex flex-row items-center content-center justify-center">
          <motion.button onClick={() => signInWrapper()}
            className="w-1/3 bg-sky-500 text-slate-800 px-1 py-3 rounded-md shadow shadow-slate-800">
            <motion.p className={"tracking-wider text-lg"}>Sign In</motion.p>
          </motion.button>
        </motion.section>
        <motion.div className="h-full grid place-items-center w-full py-3">
          {error && <h2 className="text-red-500 font-bold text-2xl">{error}</h2>}
        </motion.div>
        <Link href="/auth" className="hidden" ref={linkRef}>Proceed</Link>
      </motion.main>
      <footer className={"bg-home-dark absolute bottom-0 left-0 w-full h-fit py-4 px-2"}>
        <h2 className={"text-xl text-slate-50"}>© 2013 - present Epoka University</h2>
      </footer>
    </motion.div>
  );
}
