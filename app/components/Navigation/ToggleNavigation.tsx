// React
// Framer Motion
import { Cycle, motion } from "framer-motion";
import { FC } from "react";


const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="#3d405b"
    strokeLinecap="round"
    {...props}
  />
);

interface ToggleNavigationInterface {
  toggle: Cycle,
}

export const ToggleNavigation: FC<ToggleNavigationInterface> = ({ toggle }) => (
  <button
    className={"cursor-pointer z-50 grid place-items-center w-fit h-full absolute top-7.5 md:top-7 left-7.5 md:left-7"}
    onClick={() => { toggle() }}>
    <svg className={"w-5 h-5 md:w-6 md:h-6"} viewBox="0 0 20 20">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" }
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 }
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" }
        }}
      />
    </svg>
  </button>
);
