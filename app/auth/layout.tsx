'use client';

import { Auth, getAuth, onAuthStateChanged, Unsubscribe, User } from 'firebase/auth';
import { NextRouter, useRouter } from 'next/router';
import { useEffect } from 'react';
// Helpers
import { LayoutProps } from '../../helpers/LayoutHelpers';
import { Navigation, Footer } from "../components";

// Layout default export can have any name.
export default function RootLayout({ children }: LayoutProps) {
  const auth: Auth = getAuth();
  const router: NextRouter = useRouter();
  // check if user is logged in
  useEffect(() => {
    const unsub: Unsubscribe = onAuthStateChanged(auth, (_user: User | null) => {
      if (_user === null) return router.push("/");
      else return router.push("/auth");
    });
    return () => unsub();
  }, [auth, router])

  return (
    <section className='w-full h-full bg-gradient-to-br from-sky-500 to-blue-500'>
      <Navigation />
      {children}
      <Footer />
    </section>
  )
}
