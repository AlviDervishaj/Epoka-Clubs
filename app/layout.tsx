'use client';
// import global css to load Tailwind
import './globals.css'

// Helpers
import { LayoutProps } from '../helpers/LayoutHelpers';

// Layout default export can have any name.
export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head />
      <body className={"w-screen h-screen"}>
        {children}
      </body>
    </html>
  )
}
