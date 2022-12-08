import { ObjectId } from "mongodb"

export type ClubProps = {
  id: ObjectId | string,
  name: string,
  description: string,
  image: string,
  members: number,
  admins: number,
  events: number,
  tags: string[],
  verified: boolean,
  dateCreated: string,
  readableDate: string,
  lastEvent: string,
  rating: number,
}
