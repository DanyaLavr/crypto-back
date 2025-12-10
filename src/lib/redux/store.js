import { finderReducer } from "./finder/finderSlice";
import { userReducer } from "./user/userSlice";

const { configureStore } = require("@reduxjs/toolkit");
const { cryptosReducer } = require("./crypto/cryptosSlice");

export const store = configureStore({
  reducer: {
    user: userReducer,
    cryptos: cryptosReducer,
    finder: finderReducer,
  },
});
