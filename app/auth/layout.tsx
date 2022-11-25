'use client';
// Helpers
import { LayoutProps } from '../../helpers/LayoutHelpers';
import { Navigation, Footer } from "../components";

// Layout default export can have any name.
export default function RootLayout({ children }: LayoutProps) {
  return (
    <section className='w-full h-full bg-gradient-to-br from-sky-500 to-blue-500'>
      <Navigation />
      {children}
      <Footer />
    </section>
  )
}
