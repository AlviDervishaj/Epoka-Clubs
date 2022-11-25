// React & Next
import { MouseEvent, TouchEvent } from "react";
import { NextComponentType } from "next";
import { useRouter } from "next/navigation";

// Framer Motion
import { motion } from "framer-motion";

// Helpers
import { linksVariants } from "../../framerMotion";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

export const NavigationLogOutLink: NextComponentType = () => {
  const router: AppRouterInstance = useRouter();

  const logOut = (event: TouchEvent | MouseEvent) => {
    event.preventDefault();
    // remove token from localstorage
    localStorage.removeItem("token");
    // redirect to home
    return router.push("/");
  }
  return (
    <motion.li
      whileHover={{ borderBottomColor: "#000" }}
      transition={{ type: "tween", ease: "easeInOut", duration: 0.001 }}
      className="w-fit border-b-2 border-transparent mb-auto"
      variants={linksVariants}>
      <motion.button
        onClick={(event: TouchEvent | MouseEvent) => logOut(event)}
        className={"navigation-link"}>
        <motion.p className="navigation-text">
          Log Out
        </motion.p>
      </motion.button>
    </motion.li>
  )
}
