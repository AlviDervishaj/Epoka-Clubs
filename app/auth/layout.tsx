'use client';

// Helpers
import { LayoutProps } from '../../helpers/LayoutHelpers';
import { Navigation } from "../components";

// Layout default export can have any name.
export default function RootLayout({ children }: LayoutProps) {
  return (
    <section>
      <Navigation />
      {children}
    </section>
  )
}
