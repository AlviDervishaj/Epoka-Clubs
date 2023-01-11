// React
import { useCallback, FC } from "react"
// Types
import { RenderIconProps } from "@types";
// Icons
import { HomeIcon, ClubsIcon } from "./"
export const RenderIcon: FC<RenderIconProps> = ({ path, width, strokeWidth, height, fill, className, stroke }) => {
  const props = {width, strokeWidth, height, fill, className, stroke};
  const renderIcons = useCallback(() => {
    switch (path) {
      case '/auth':
        return <HomeIcon {...props} />;
      case '/auth/clubs':
        return <ClubsIcon {...props} />;
    }
  }, [path]);
  return (
    <>
      {
        renderIcons()
      }
    </>
  )
}
