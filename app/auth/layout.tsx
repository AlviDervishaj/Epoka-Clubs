"use client";

// Helpers
import { LayoutProps } from "@types";

// Components
import { Navigation, Footer, Loading } from "@components";

// React
import { useSession } from "next-auth/react";

export default function RootLayout({ children }: LayoutProps) {
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
