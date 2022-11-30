// React & Next
import { NextComponentType } from "next";
import { redirect } from "next/navigation";
import { MouseEvent, TouchEvent } from "react";

export const NavigationLogOutLink: NextComponentType = () => {
  const handleSignOut = (event: MouseEvent | TouchEvent): void => {
    event.preventDefault();
    // remove token from localstorage
    localStorage.removeItem("token");
    // redirect to login page
    redirect("/");
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
