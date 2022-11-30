"use client";
// React & Next
import { MouseEvent, TouchEvent, useCallback, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

// Axios
import axios, { AxiosResponse } from "axios";

// Framer Motion
import { motion, Variants } from "framer-motion";

// Helpers
import { APIReturnType } from "../helpers/Types";

// Components
import { LoadingSpinner } from "./components";

export default function Home() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const displayError = useCallback((error: string) => {
    setError(error);
    setTimeout(() => setError(''), 2200)
    return;
  }, [])

  const router: AppRouterInstance = useRouter();

  // ^ -> match beginning of string;
  // $ -> Matches end of string;
  const emailRegex = /^([a-z]{4,}[1-9]{2}@epoka\.edu\.al)$/;

  const handleSignIn = async (event: TouchEvent | MouseEvent) => {
    event?.preventDefault();
    setError('');
    if (!emailRegex.test(email)) return displayError("Not a valid Epoka email.");
    setIsLoading(true);
    // make request to backend with axios
    const authenticateResponse: AxiosResponse<APIReturnType> = await axios.post("/api/auth", {
      email,
      password,
    });

    const { insertedResult, getUser, info, error } = authenticateResponse.data;


    if (error) {
      setIsLoading(false);
      return displayError(info);
    }

    // check if student does not have an account
    if (insertedResult) {
      if (insertedResult.acknowledged && insertedResult.insertedId) {
        setIsLoading(false);
        // save to localstorage
        localStorage.setItem("token", `${insertedResult.insertedId}`);
        return router.push("/auth");
      }
    }
    // student already has an account before
    else if (getUser) {
      setIsLoading(false);
      // save to localstorage
      localStorage.setItem("token", `${getUser._id}`);
      return router.push("/auth");
    }
  }

  // animation options
  const framerVariants: Variants = { shown: { opacity: 2 } };

  return (
    <motion.div
      className="w-full h-screen bg-home-dark "
      animate={"shown"}
      variants={framerVariants}>
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
        <motion.form className="w-fit h-fit grid place-items-center content-evenly \
          gap-8 md:gap-10 bg-white/80 p-5 rounded-md shadow-lg shadow-black/50">
          <motion.header className="h-full grid place-items-center">
            <motion.h1 className="text-3xl  md:text-5xl font-bold lg:text-6xl text-home-dark">
              Epoka Clubs
            </motion.h1>
          </motion.header>
          <motion.input
            type={"email"}
            value={email}
            onChange={(event: any) => setEmail(event.target.value)}
            placeholder="Epoka Email"
            className="input"
          />
          <motion.input
            type={"password"}
            value={password}
            onChange={(event: any) => setPassword(event.target.value)}
            placeholder="********"
            className="input"
          />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: [null, 0.9] }}
            transition={{ type: "tween", ease: "easeInOut", duration: 0.25 }}
            onClick={(event: TouchEvent | MouseEvent) => handleSignIn(event)}
            className={"w-60 md:w-80 h-12 px-4 text-lg text-white bg-blue-500 rounded-lg hover:bg-home-dark focus:outline-none focus:bg-home-dark"}
          >
            <p className={"text-lg"}>Log In</p>
          </motion.button>
          {isLoading && <LoadingSpinner />}
          <motion.span>
            {error && <p className="text-lg text-red-500">{error}</p>}
          </motion.span>
        </motion.form>
        <Link href="/auth" className="hidden">
          Proceed
        </Link>
      </motion.main>
      <footer
        className={"bg-home-light absolute bottom-0 left-0 w-full py-4 px-2 text-center"}
      >
        <h2 className={"text-base text-slate-900"}>
          © 2013 - present Epoka University
        </h2>
      </footer>
    </motion.div>
  );
}
