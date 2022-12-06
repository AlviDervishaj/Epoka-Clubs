"use client";
// Helpers
import { LayoutProps } from "../../helpers";

// Components
import { Navigation, Footer, Loading } from "../components";

// React
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

export default function RootLayout({ children }: LayoutProps) {
  const router: AppRouterInstance = useRouter();
  const { data, status } = useSession({
    required: true,
  });

  if (status === "loading") {
    return <Loading />;
  }

  console.log({ data });
  return (
    <section className="w-full h-full bg-gradient-to-br from-sky-500 to-blue-500">
      <Navigation />
      {children}
      <Footer />
    </section>
  );
}
