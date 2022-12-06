"use client";

// React & Next
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

// Next Auth
import { signIn, useSession } from "next-auth/react";

// Framer Motion
import { motion, Variants } from "framer-motion";

// Components
import { Loading } from "./components";

export default function Home() {
  const [error, setError] = useState<string>("");
  const router: AppRouterInstance = useRouter();
  const searchParams: URLSearchParams = useSearchParams();
  const { status } = useSession();

  useEffect(() => {
    if (searchParams.get("error") === "AccessDenied") {
      setError("Please enter a valid Epoka email.");
    }
  }, []);
  // animation options
  const framerVariants: Variants = { shown: { opacity: 2 } };

  if (status === "loading") {
    return <Loading />;
  }

  if (status === "authenticated") return router.push("/auth");

  return (
    <motion.div
      className="w-full h-screen bg-home-dark "
      animate={"shown"}
      variants={framerVariants}
    >
      <section className={"relative w-full h-auto"}>
        <Image
          src={"/static/images/EpokaLogo.jpg"}
          priority
          alt={"Epoka"}
          width={200}
          height={110}
          className={"w-auto md:w-auto h-auto mx-auto"}
        />
      </section>
      <motion.main className="w-full h-fit pt-20 grid place-items-center">
        <motion.form
          className="w-fit h-fit grid place-items-center content-evenly \
          gap-8 md:gap-10 bg-white/80 p-5 rounded-md shadow-lg shadow-black/50"
        >
          <motion.header className="h-full grid place-items-center">
            <motion.h1 className="text-3xl  md:text-5xl font-bold lg:text-6xl text-home-dark">
              Epoka Clubs
            </motion.h1>
          </motion.header>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: [null, 0.9] }}
            transition={{ type: "tween", ease: "easeInOut", duration: 0.25 }}
            onClick={() =>
              signIn("google", { callbackUrl: "/auth", redirect: true })
            }
            className={
              "w-60 md:w-80 h-12 px-4 text-lg text-white bg-blue-500 rounded-lg hover:bg-home-dark focus:outline-none focus:bg-home-dark"
            }
          >
            <p className={"text-lg"}>Sign In With Google </p>
          </motion.button>
          <motion.span>
            {error && <p className="text-lg text-red-500">{error}</p>}
          </motion.span>
        </motion.form>
        <Link href="/auth" className="hidden">
          Proceed
        </Link>
      </motion.main>
      <footer
        className={
          "bg-home-light absolute bottom-0 left-0 w-full py-4 px-2 text-center"
        }
      >
        <h2 className={"text-base text-slate-900"}>
          © 2013 - present Epoka University
        </h2>
      </footer>
    </motion.div>
  );
}
