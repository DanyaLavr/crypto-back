import { Suspense } from "react";

import { SearchInput } from "@/shared/ui";
import Suggestions from "../suggestions/ui";

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
