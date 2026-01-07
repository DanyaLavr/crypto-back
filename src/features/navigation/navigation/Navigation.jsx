"use client";
import Link from "next/link";
import { useSelector } from "react-redux";

import { selectUser } from "@/entities/user/modules/redux/selectors";

export default function Navigation() {
  const user = useSelector(selectUser);
  return (
    <nav className="text-white font-bold text-3xl ">
      <ul className="grid gap-5">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href={`/backpack`}>Backpack</Link>
        </li>
        {!user && (
          <li>
            <Link href="/registration">Log in</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
