'use client';
// React & Next
import { FC, ReactElement } from "react";

// Components
import { NavigationLink } from "./NavigationLink";
import { NavigationProfileLink } from "./NavigationProfileLink";
import { NavigationWrapperLink } from "./NavigationWrapperLink";

export const Navigation: FC = (): ReactElement => {
  return (
    <nav className="w-full h-fit z-50">
      <ul
        className={"flex flex-row justify-evenly align-items-center w-full md:p-2 bg-white/80"} >
        <NavigationWrapperLink>
          <NavigationLink href="/auth" text={"Home"} />
          <NavigationLink href="/auth/clubs" text={"Clubs"} />
          <NavigationProfileLink />
        </NavigationWrapperLink>
      </ul>
    </nav>
  )
}
