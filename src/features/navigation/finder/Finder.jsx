import { Suspense } from "react";

import { SearchInput } from "@/shared/ui";
import Suggestions from "../suggestions/ui";

export default function Finder() {
  return (
    <div className="flex-1 relative bg-stone-900  rounded-3xl px-8 py-6 lg:rounded-2xl lg:px-6 lg:py-4 ">
      <Suspense>
        <SearchInput />
        <Suggestions />
      </Suspense>
    </div>
  );
}
