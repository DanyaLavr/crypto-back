import { createSelector } from "@reduxjs/toolkit";

export const selectCryptos = (state) => state.cryptos.items;
export const selectCryptosIsLoading = (state) => state.cryptos.isLoading;
export const selectCryptosError = (state) => state.cryptos.error;

export const selectCryptoById = (id) =>
  createSelector([selectCryptos], (cryptos) =>
    cryptos.find((elem) => elem.coin_id === id)
  );
