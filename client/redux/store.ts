import { configureStore } from "@reduxjs/toolkit";
import homeReducers from "./reducer/home_rdc";

export const store = configureStore({
  reducer: {
    home: homeReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
