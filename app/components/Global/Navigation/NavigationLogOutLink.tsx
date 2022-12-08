"use client";

// React & Next
import { NextComponentType } from "next";
import { signOut } from "next-auth/react";

export const NavigationLogOutLink: NextComponentType = () => {
  return (
    <button
      className={"navigation-link"}
      onClick={() =>
        signOut({
          redirect: true,
          callbackUrl: "/",
        })
      }
    >
      <p className="navigation-text">Log Out</p>
    </button>
  );
};
