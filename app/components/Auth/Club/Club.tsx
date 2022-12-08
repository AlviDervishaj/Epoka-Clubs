import { NextComponentType } from "next";

import { ClubProps } from "@types";

export const Club: NextComponentType<ClubProps, ClubProps, ClubProps> = ({ name, description, tags, image, dateCreated, readableDate }: ClubProps) => {
  return (
    <h2>Club Component {name}</h2>
  )
}
