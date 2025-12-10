"use client";
import dynamic from "next/dynamic";

const SearchInput = dynamic(() => import("@/shared/search-input/SearchInput"), {
  ssr: false,
});
const Suggestions = dynamic(() => import("@/shared/suggestions/Suggestions"), {
  ssr: false,
});
export default function Finder() {
  return (
    <div className="flex-1 relative px-6 py-4 rounded-2xl bg-stone-900 ">
      <SearchInput />
      <Suggestions />
    </div>
  );
}
