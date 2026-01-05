import SearchInput from "@/shared/search-input/SearchInput";
import Suggestions from "@/shared/suggestions/Suggestions";
import { Suspense } from "react";

export default function Finder() {
  return (
    <div className="finder flex-1 relative px-6 py-4 rounded-2xl bg-stone-900 ">
      <Suspense>
        <SearchInput />
        <Suggestions />
      </Suspense>
    </div>
  );
}
