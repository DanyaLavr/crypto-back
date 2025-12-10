import { createSelector } from "@reduxjs/toolkit";
import { selectCryptos } from "../crypto/selectors";

export const selectQuery = (state) => state.finder.query;

export const selectSuggestions = createSelector(
  [selectCryptos, selectQuery],
  (cryptos, query) => {
    if (!query) return [];

    const name = query.toLowerCase().trim();
    const base = query.toUpperCase().trim();
    return cryptos.filter(
      (elem) => elem.base.includes(base) || elem.coin_id.includes(name)
    );
  }
);
