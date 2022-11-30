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
import { isEmpty, Loading } from "./components";
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
  const { data: user }: { data: APIReturnType } = useValidate();
  const router: AppRouterInstance = useRouter();
  const pathName: string | null = usePathname();

  const runChecks = useCallback(() => {
    if (isEmpty(user)) {
      if (pathName !== '/') {
        return router.push('/');
      }
      setLoading(false);
    }
    else if (user.code !== 200) {
      setLoading(false);
      // remove token from localstorage
      localStorage.removeItem('token');
      // re-render page
      router.push('/');
    }
    else if (user.code === 200) {
      setLoading(false);
      router.push('/auth');
    }
  }, [router, pathName, user]);

  useEffect(() => {
    runChecks();
  }, [runChecks])

  return (
    <html lang="en">
      <head />
      <body className={`w-full h-full ${inter.className} bg-home-light`}>
        {loading ? <Loading /> : (
          <SessionContext.Provider value={user}>
            {children}
          </SessionContext.Provider>
        )}
      </body>
    </html>
  );
}
