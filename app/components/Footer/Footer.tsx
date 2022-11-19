// React
import Link from "next/link";
import { FC } from "react";

export const Footer: FC = () => {
  return (
    <footer className="h-fit grid place-items-center w-full py-3 px-2 bg-slate-800">
      {/* Table UI */}
      <div className="w-full h-full flex flex-row justify-evenly items-start content-center gap-2">
        <Link href={"https://epoka.edu.al/"} className={"footer-link"} prefetch={false}>Epoka Home</Link>
        <Link href={"https://eis.epoka.edu.al/"} className={"footer-link"} prefetch={false}>EIS</Link>
        <Link href={"https://epoka.edu.al/timetable"} className={"footer-link"} prefetch={false}>Timetables</Link>
        <Link href={"https://epoka.edu.al/home-students-transport-timetable-7-35.html"} className={"footer-link"} prefetch={false}>Transport Timetables</Link>
        <Link href={"https://registrar.epoka.edu.al/cat-registrar-s-office-487.html"} className={"footer-link"} prefetch={false}>Registrar&apos;s Office</Link>
      </div>
    </footer>
  )
}
