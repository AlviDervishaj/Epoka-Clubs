'use client';
// React & Next
import Link from "next/link";
import { FC, ReactElement, useState } from "react";

// Utilites
import { logOut } from "../../utils";

// Custom Icons
import { Profile, AcademicCap, Home, LogOut, ChevronDown } from "../Icons";

export const Navigation: FC = (): ReactElement => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  return (
    <nav className={'h-fit bg-navigation-light flex gap-2 flex-col items-start justify-center'}>
      <button className="navigation-toggle" onClick={() => setIsOpened(!isOpened)}>
        <ChevronDown strokeWidth={1} className={`w-10 h-10 ${isOpened ? '-rotate-180' : '-rotate-0'}`} fill={"transparent"} />
      </button>
      <ul className={`${isOpened ? 'block opacity-100' : 'hidden opacity-0'} flex flex-col gap-2 justify-start align-items-center w-full`}>
        <Link href={"/"} className={"navigation-link"}>
          <p className="navigation-text">Home</p>
          <Home fill={"#111"} strokeWidth={1} />
        </Link>
        <Link href={"/"} className={"navigation-link"}>
          <p className="navigation-text">Clubs</p>
          <AcademicCap fill={"transparent"} strokeWidth={2} />
        </Link>
        <Link href={"/"} className={"navigation-link"}>
          <p className="navigation-text">My Profile</p>
          <Profile fill={"#111"} strokeWidth={1} />
        </Link>
        <button onClick={() => logOut()} className={"navigation-link"}>
          <p className="navigation-text">Log Out</p>
          <LogOut fill={"#111"} strokeWidth={1} />
        </button>
      </ul>
    </nav>
  )
}
