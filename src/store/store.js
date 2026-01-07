import { configureStore } from "@reduxjs/toolkit";
import { cryptosReducer } from "../entities/crypto/modules/redux/cryptosSlice";
import { userReducer } from "../entities/user/modules/redux/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    cryptos: cryptosReducer,
  },
});
