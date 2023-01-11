"use client";
// import global css to load Tailwind
import "@styles";

// Helpers
import { LayoutProps } from "@types";

// React & Next
import { Inter } from "@next/font/google";

// Next Auth
import { SessionProvider } from "next-auth/react";

// Components
import { AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

// Inter Font
const inter = Inter({
  subsets: ["latin"],
});

// Layout default export can have any name.
export default function RootLayout({
  children,
}: LayoutProps): ReactNode | Promise<ReactNode> {
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
