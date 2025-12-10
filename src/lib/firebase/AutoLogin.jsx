"use client";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase/auth";
import { useDispatch } from "react-redux";
import { getBackpack, loginUser } from "../redux/user/operations";

export default function AutoLogin() {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          loginUser.fulfilled({
            uid: user.uid,
            email: user.email,
            login: user.displayName,
          })
        );

        dispatch(getBackpack(user.uid));
      }
    });
  }, []);

  return null;
}
