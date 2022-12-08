'use client';
import { Club } from "@components";
import { ClubProps } from "@types";

export default function Authentication() {
  const data: ClubProps = {
    id: "asd",
    name: "Programming Club",
    description: "A club for programming",
    tags: ["programming", "coding"],
    image: "https://i.imgur.com/1Q9ZQ9r.png",
    dateCreated: "2020-10-10",
    readableDate: "October 10, 2020",
    members: 1,
    admins: 1,
    events: 0,
    verified: false,
    lastEvent: "",
    rating: 2.5
  }
  return (
    <main className={"pt-20 w-full h-full flex flex-col items-center content-center justify-center"}>
      <Club {...data} />
    </main>
  );
}
