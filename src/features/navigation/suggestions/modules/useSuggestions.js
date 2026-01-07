import { useMemo } from "react";

export const useSuggestions = (searchQuery, cryptos) =>
  useMemo(() => {
    if (!searchQuery) return [];

    const name = searchQuery.toLowerCase();
    const base = searchQuery.toUpperCase();

    return cryptos.filter(
      (elem) => elem.base.includes(base) || elem.coin_id.includes(name)
    );
  }, [searchQuery, cryptos]);
