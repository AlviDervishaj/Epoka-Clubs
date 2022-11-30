'use client';
// React & Next
import { FC, ReactElement, useRef } from "react";

// Framer Motion
import { motion, useCycle } from "framer-motion";

// Helpers
import { variants, sidebar } from "../../framerMotion"

// Components
import { NavigationLink } from "./NavigationLink";
import { NavigationLogOutLink } from "./NavigationLogOutLink";
import { ToggleNavigation } from "./ToggleNavigation";
import { NavigationWrapperLink } from "./NavigationWrapperLink";

export const Navigation: FC = (): ReactElement => {
  const [isOpened, setIsOpened] = useCycle<boolean>(false, true);

  const navRef = useRef<HTMLUListElement>(null);

  return (
    <motion.div className="relative z-50">
      <motion.nav
        className="w-full h-full z-50"
        initial={false}
        animate={isOpened ? "open" : "closed"}>
        <motion.div className="navigationBackground" variants={sidebar} />
        <ToggleNavigation toggle={setIsOpened} />
        <motion.div
          className={`${isOpened ? 'pointer-events-auto' : 'pointer-events-none'} 
            px-4 pt-20 absolute w-full md:w-1/3 flex gap-2 flex-col items-end justify-center`}>
          <motion.ul
            ref={navRef}
            variants={variants}
            className={"flex flex-col gap-2 justify-start align-items-center w-full"} >
            <NavigationWrapperLink>
              <NavigationLink href="/auth" text={"Home"} />
              <NavigationLink href="/" text={"Clubs"} />
              <NavigationLink href="/" text={"Profile"} />
              <NavigationLogOutLink />
            </NavigationWrapperLink>
          </motion.ul>
        </motion.div>
      </motion.nav>
    </motion.div>
  )
}
