"use client";
// import global css to load Tailwind
import "./globals.css";

// Helpers
import { APIReturnType, LayoutProps } from "../helpers";

// React & Next
import { Inter } from "@next/font/google";
import { useCallback, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

// Components
import { Loading, useToken } from "./components";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

// Context
import { SessionContext } from "./components";

// Hooks
import { useValidate } from "./components";

// Inter Font
const inter = Inter({
  subsets: ["latin"],
});

// Layout default export can have any name.
export default function RootLayout({ children }: LayoutProps) {
  const [loading, setLoading] = useState(true);
  const { token }: { token: string } = useToken();
  const { data }: { data: APIReturnType } = useValidate();
  const router: AppRouterInstance = useRouter();

  const runChecks = useCallback(async () => {
    console.log({ token, data });
    // token is empty
    if (token === '') {
      router.push('/');
      return setLoading(false);
    }
    // token is not empty
    else {
      // token is not valid
      if (data.error && data.code !== 200) {
        localStorage.removeItem('token');
        router.push('/');
        return setLoading(false);
      }
      // token is valid
      else if (data.code === 200) {
        // token is valid
        router.push('/auth');
        return setLoading(false);
      }
    }
  }, [router, token, data]);

  useEffect(() => {
    runChecks();
    return () => setLoading(true);
  }, [runChecks])

  return (
    <html lang="en">
      <head />
      <body className={`w-full h-full ${inter.className} bg-home-light`}>
        {loading ? <Loading /> : (
          <SessionContext.Provider value={data}>
            {children}
          </SessionContext.Provider>
        )}
      </body>
    </html>
  );
}
