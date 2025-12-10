"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Search from "../Search.svg";
export default function SearchInput() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const query = searchParams.get("query") ?? "";
  const [value, setValue] = useState(query);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());

      if (!value.trim()) {
        params.delete("query");
      } else {
        params.set("query", value);
      }

      router.push(`?${params.toString()}`, { scroll: false });
    }, 300);

    return () => clearTimeout(timeout);
  }, [value, router, query]);

  return (
    <form
      className="flex w-full items-center gap-2 "
      action=""
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        className="outline-0 w-full text-stone-50 placeholder:text-stone-50"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search…"
      />
      <button>
        <Search className="fill-stone-50" />
      </button>
    </form>
  );
}
