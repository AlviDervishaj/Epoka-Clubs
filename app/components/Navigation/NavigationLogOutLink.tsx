// React & Next
import { NextComponentType } from "next";
// Framer Motion
import { motion } from "framer-motion";

// Helpers
import { linksVariants } from "../../framerMotion";

export const NavigationLogOutLink: NextComponentType = () => {
  return (
    <motion.li
      whileHover={{ borderBottomColor: "#000" }}
      transition={{ type: "tween", ease: "easeInOut", duration: 0.001 }}
      className="w-fit border-b-2 border-transparent"
      variants={linksVariants}>
      <motion.button className={"navigation-link"}>
        <motion.p className="navigation-text">
          Log Out
        </motion.p>
      </motion.button>
    </motion.li>
  )
}
