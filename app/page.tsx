"use client";
// React & Next
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

// Axios
import axios, { AxiosResponse } from "axios";

// Framer Motion
import { motion, Variants } from "framer-motion";
import { MouseEvent, TouchEvent, useState } from "react";

export default function Home() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const emailRegex = /([a-z]{4,}[1-9]{2}@epoka\.edu\.al)/;
  const router: AppRouterInstance = useRouter();

  const handleSignIn = async (event: TouchEvent | MouseEvent) => {
    event?.preventDefault();
    if (!emailRegex.test(email)) return setError("Not a valid Epoka email.");
    // make request to backend with axios
    const response: AxiosResponse = await axios.post("/api/auth", {
      email,
      password,
    });
    console.log({ response });
    if (response.data.info.acknowledged && response.data.info.insertedId) {
      // save to localstorage
      localStorage.setItem("token", response.data.info.insertedId);
      return router.push("/auth");
    }
    else {
      setError("Please try again.");
    }
  };

  // animation options
  const framerVariants: Variants = { shown: { opacity: 2 } };

  return (
    <motion.div
      className="w-full min-h-screen bg-home-dark "
      animate={"shown"}
      variants={framerVariants}>
      <Image
        src={"/static/images/EpokaLogo.jpg"}
        priority
        alt={"Epoka"}
        width={200}
        height={110}
        className={"w-auto h-auto"}
      />
      <motion.main className="w-full h-full pt-20 grid place-items-center">
        <motion.form className="w-fit h-full grid place-items-center content-evenly \
          gap-8 md:gap-10 bg-white/80 p-5 rounded-md shadow-lg shadow-black/50">
          <motion.header className="h-full grid place-items-center">
            <motion.h1 className="text-5xl  md:text-5xl font-bold lg:text-6xl text-header-dark">
              Epoka Clubs
            </motion.h1>
          </motion.header>
          <motion.input
            type={"email"}
            value={email}
            onChange={(event: any) => setEmail(event.target.value)}
            placeholder="Epoka Email"
            className="w-80 h-12 px-4 text-lg text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
          <motion.input
            type={"password"}
            value={password}
            onChange={(event: any) => setPassword(event.target.value)}
            placeholder="********"
            className="w-80 h-12 px-4 text-lg text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: [null, 0.9] }}
            transition={{ type: "tween", ease: "easeInOut", duration: 0.001 }}
            onClick={(event: TouchEvent | MouseEvent) => handleSignIn(event)}
            className={"w-80 h-12 px-4 text-lg text-white bg-blue-500 rounded-lg hover:bg-home-dark focus:outline-none focus:bg-home-dark"}
          >
            <p className={"text-lg"}>Log In</p>
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
        className={"bg-home-light absolute bottom-0 left-0 w-full h-fit py-4 px-2 text-center"}
      >
        <h2 className={"text-base text-slate-900"}>
          © 2013 - present Epoka University
        </h2>
      </footer>
    </motion.div>
  );
}
