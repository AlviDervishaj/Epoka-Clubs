'use client';
// React & Next
import { NextComponentType } from "next";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { useRouter } from "next/navigation";
import { MouseEvent, TouchEvent } from "react";

export const NavigationLogOutLink: NextComponentType = () => {
  const router: AppRouterInstance = useRouter();
  const handleSignOut = (event: MouseEvent | TouchEvent): void => {
    event.preventDefault();
    // remove token from localstorage
    localStorage.removeItem("token");
    return router.push('/');
  };
  return (
    <button
      className={"navigation-link"}
      onClick={(event: TouchEvent | MouseEvent) => handleSignOut(event)}
    >
      <p className="navigation-text">Log Out</p>
    </button>
  );
};
