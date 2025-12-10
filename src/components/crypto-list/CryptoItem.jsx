"use client";

import { memo } from "react";

const CryptoItem = memo(function CryptoItem({ base, target, last, coin_id }) {
  return (
    <li className="grid gap-2 px-4 py-3 bg-stone-950 text-stone-50 rounded-2xl">
      <h2 className="text-2xl ">
        {base}/{target}
      </h2>
      <p>{last}</p>
      <button className="bg-emerald-500" data-id={coin_id}>
        purchase
      </button>
    </li>
  );
});
export default CryptoItem;
