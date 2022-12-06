"use client";
// import global css to load Tailwind
import "./styles/globals.css";

// Helpers
import { LayoutProps } from "../helpers";

// React & Next
import { Inter } from "@next/font/google";
import { useEffect, useState } from "react";

// Next Auth
import { SessionProvider, useSession } from "next-auth/react";

// Components
import { Loading } from "./components";
import { AnimatePresence } from "framer-motion";

// Inter Font
const inter = Inter({
  subsets: ["latin"],
});

// Layout default export can have any name.
export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head />
      <body className={`w-full h-full ${inter.className} bg-home-light`}>
        <AnimatePresence mode="wait">
          <SessionProvider refetchOnWindowFocus={true}>
            {children}
          </SessionProvider>
        </AnimatePresence>
      </body>
    </html>
  );
}
