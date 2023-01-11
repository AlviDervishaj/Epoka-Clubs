// React
import { FC } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

// Types  
import { NavigationLinkHelpers } from "@types";

// Icons
import {RenderIcon} from "@icons";

export const NavigationLink: FC<NavigationLinkHelpers> = ({ text, href }) => {
  const path = usePathname();
  return (
    <section>
      <Link href={href} className={`navigation-link ${path === href && 'text-blue-500'}`}>
        <RenderIcon width={25} path={href} height={25} className={`${path === href ? 'fill-blue-500' : 'black'}`} />
        <p className="navigation-text">{text}</p>
      </Link>
    </section>
  );
};
