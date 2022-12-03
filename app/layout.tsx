"use client";
// import global css to load Tailwind
import "./styles/globals.css";

// Helpers
import { APIReturnType, LayoutProps } from "../helpers";

// React & Next
import { Inter } from "@next/font/google";
import { useCallback, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

// Components
import { Loading } from "./components";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

// Context
import { SessionContext } from "./components";

// Hooks
import { useValidate } from "./components";
import { AnimatePresence } from "framer-motion";

// Inter Font
const inter = Inter({
  subsets: ["latin"],
});

// Layout default export can have any name.
export default function RootLayout({ children }: LayoutProps) {
  const [loading, setLoading] = useState(true);
  const { data }: { data: APIReturnType } = useValidate();
  const router: AppRouterInstance = useRouter();
  const pathname: string | null = usePathname();

  const validate = useCallback(async () => {
    // check routes
    if (pathname !== "/") {
      if (data.error === "auth/invalid-token") {
        router.push("/");
      }
    }
  }, [pathname, data, router]);

  useEffect(() => {
    validate();
    return () => setLoading(true);
  }, [validate]);


  return (
    <html lang="en">
      <head />
      <body className={`w-full h-full ${inter.className} bg-home-light`}>
        {loading ? <Loading /> : (
          <AnimatePresence exitBeforeEnter>
            <SessionContext.Provider value={data}>
              {children}
            </SessionContext.Provider>
          </AnimatePresence>
        )}
      </body>
    </html>
  );
}
