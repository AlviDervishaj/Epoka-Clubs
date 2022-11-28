// Framer Motion
import { AnimateSharedLayout, motion } from "framer-motion";

// Helpers
import { linksVariants } from "../../framerMotion";
import { ReactElement } from 'react';

export const NavigationWrapperLink = ({ children }: { children: Array<ReactElement> }) => {
  return (
    <AnimateSharedLayout>
      {children && children.map((child, index) => (
        <motion.li
          key={index}
          variants={linksVariants}
          transition={{ duration: 0.25 }}
          whileHover={{ scale: [null, 1.3, 1.2] }}
          whileTap={{ scale: [null, 0.95] }}
          className={`w-fit`}
        >
          {child}
        </motion.li>
      ))}
    </AnimateSharedLayout>
  )
}
