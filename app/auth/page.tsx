'use client';
// React & Next
import { NextPage } from "next";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// Firebase
import { Auth, Unsubscribe, getAuth, onAuthStateChanged, User } from "firebase/auth";

// Helpers
import { init_firebase } from "../utils";

export default function Auth() {
  const [user, setUser] = useState<User>();
  init_firebase();

  const auth: Auth = getAuth();
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const unsubscribe: Unsubscribe = onAuthStateChanged(auth, (_user: User | null) => {
      if (!linkRef.current) return;
      if (_user === null) return linkRef.current.click();
      else return setUser(_user);
    });

    return () => unsubscribe();
  }, [auth])

  return (
    <>
      <h2 className="text-red-500">Hello World</h2>
      <Link href="/" className="hidden" ref={linkRef}>Proceed</Link>
    </>

  );
}

