// Helpers
import { ReactElement } from 'react';

export const NavigationWrapperLink = ({ children }: { children: Array<ReactElement> }) => {
  return (
    <>
      {children && children.map((child, index) => (
        <li
          key={index}
        >
          {child}
        </li>
      ))}
    </>
  )
}
