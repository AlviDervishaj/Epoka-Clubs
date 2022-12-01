'use client';
// Helpers
import { LayoutProps } from "../../helpers";

// Components
import { Navigation, Footer } from "../components";

export default function RootLayout({ children }: LayoutProps) {
  return (
    <section className="w-full h-full bg-gradient-to-br from-sky-500 to-blue-500">
      <Navigation />
      {children}
      <Footer />
    </section>
  );
}
