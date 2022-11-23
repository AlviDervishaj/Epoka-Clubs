'use client';
// import global css to load Tailwind
import './globals.css'

// Helpers
import { LayoutProps } from '../helpers/LayoutHelpers';

// Next Fonts
import { Inter } from "@next/font/google";

// Framer Motion
import { motion } from "framer-motion";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

// Layout default export can have any name.
export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head />
      <body className={`w-full h-full ${inter.className} bg-home-light`}>
        <motion.main>
          {children}
        </motion.main>
      </body>
    </html>
  )
}
