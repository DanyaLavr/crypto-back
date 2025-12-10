"use client";

import { selectCryptos } from "@/lib/redux/crypto/selectors";
import { useSelector } from "react-redux";

export default function BackpackItem({
  base,
  price,
  coin_id,
  count,
  invested,
}) {
  const allCryptos = useSelector(selectCryptos);
  const currentCrypto = allCryptos.find((elem) => elem.coin_id === coin_id);
  const getGrowthPercent = ((currentCrypto.last - price) / price) * 100;
  const isBiggestThenZero = getGrowthPercent > 0;
  const profit = invested * (getGrowthPercent / 100);
  return (
    <li className="grid gap-2 px-4 py-3 bg-stone-950 text-stone-50 rounded-2xl ">
      <h2 className="text-2xl ">{base}/USDT</h2>
      <p>Current count - {count}</p>
      <p>Average price - {price}</p>
      <p className="">
        Current price - {currentCrypto.last}
        <span
          className={`${
            isBiggestThenZero ? "bg-green-600" : "bg-red-700"
          } px-2 py-1 text-[10px] rounded-2xl ml-5`}
        >
          {getGrowthPercent.toFixed(2)}%
        </span>
      </p>
      <p className="">
        Invested - {invested}$
        <span
          className={`${
            isBiggestThenZero ? "bg-green-600" : "bg-red-700"
          } px-2 py-1 text-[10px] rounded-2xl ml-5`}
        >
          {profit.toFixed(2)}
        </span>
      </p>

      <button className="bg-emerald-500" data-id={coin_id}>
        purchase
      </button>
    </li>
  );
}
