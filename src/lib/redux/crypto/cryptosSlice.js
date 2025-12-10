import { createSlice } from "@reduxjs/toolkit";
import { CRYPTOS } from "./constants";
import { fetchAllCryptos } from "./operations";

const cryptosSlice = createSlice({
  name: "cryptos",
  initialState: CRYPTOS,
  reducers: {
    addLoading: (state) => {
      state.isLoading = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCryptos.pending, (state) => {
        if (state.items.length) return;
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAllCryptos.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchAllCryptos.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const { addLoading } = cryptosSlice.actions;
export const cryptosReducer = cryptosSlice.reducer;
