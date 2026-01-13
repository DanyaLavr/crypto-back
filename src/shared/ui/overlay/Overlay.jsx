"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Overlay({ children }) {
  const router = useRouter();
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div
      className="fixed grid items-end md:items-center md:justify-center top-0 bottom-0 left-0 right-0 bg-black/50 backdrop-blur-[2px]"
      onClick={() => {
        router.back();
      }}
    >
      {children}
    </div>
  );
}
