'use client';
// import global css to load Tailwind
import './globals.css'

// Components
import { Footer } from "./components";

// Helpers
import { LayoutProps } from '../helpers/LayoutHelpers';

// Next Fonts
import { Inter } from "@next/font/google";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

// Layout default export can have any name.
export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head />
      <body className={`w-full h-full ${inter.className}`}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
