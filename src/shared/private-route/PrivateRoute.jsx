"use client";
import { selectUser } from "@/lib/redux/user/selectors";
import { useRouter } from "next/navigation";

import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function PrivateRoute({ children }) {
  const user = useSelector(selectUser);
  const router = useRouter();
  useEffect(() => {
    if (!user) router.push("/");
  }, [user]);
  if (!user) return null;
  return <>{children}</>;
}
