// React
import { FC } from "react";
import Link from "next/link";

// Helpers
import { NavigationLinkHelpers } from "./NavigationHelpers";
import { usePathname } from "next/navigation";

export const NavigationLink: FC<NavigationLinkHelpers> = ({ text, href }) => {
  const path = usePathname();
  return (
    <section>
      <Link href={href} className={"navigation-link flex flex-row items-center content-center gap-3"}>
        {/*{href === path && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className={"fill-router-active"}
          >
            <path d="M9 17.879V6.707A1 1 0 0110.707 6l5.586 5.586a1 1 0 010 1.414l-5.586 5.586A1 1 0 019 17.879z"></path>
          </svg>
        )}
        */}
        <p className="navigation-text">{text}</p>
      </Link>
      {href === path && <div className={"w-20 px-2 h-0.5 bg-black rounded-full"} />}
    </section>
  );
};
