import { configureStore } from "@reduxjs/toolkit";
import converterReducers from "./reducer/converter";
import walletReducers from "./reducer/wallet";

export const store = configureStore({
  reducer: {
    converter: converterReducers,
    wallet: walletReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
