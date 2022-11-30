// React
import { FC } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

// Helpers
import { NavigationLinkHelpers } from "./NavigationHelpers";

export const NavigationLink: FC<NavigationLinkHelpers> = ({ text, href }) => {
  const path = usePathname();
  return (
    <section>
      <Link href={href} className={"navigation-link flex flex-row items-center content-center gap-3"}>
        <p className="navigation-text">{text}</p>
      </Link>
      {href === path && <div className={"w-20 px-2 h-0.5 bg-black rounded-full"} />}
    </section>
  );
};
