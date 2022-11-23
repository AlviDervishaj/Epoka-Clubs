// React
import { FC } from "react";
import Link from "next/link";

// Framer Motion
import { motion } from "framer-motion";

// Helpers
import { NavigationLinkHelpers } from "./NavigationHelpers";
import { linksVariants } from "../../framerMotion";

export const NavigationLink: FC<NavigationLinkHelpers> = ({ text, href }) => {
  return (
    <motion.li whileHover={{ borderBottomColor: "#000" }}
      transition={{ type: "tween", ease: "easeInOut", duration: 0.001 }}
      className="w-fit border-b-2 border-transparent"
      variants={linksVariants}>
      <Link href={href} className={"navigation-link"}>
        <motion.p className="navigation-text">{text}</motion.p>
      </Link>
    </motion.li>
  )
}
