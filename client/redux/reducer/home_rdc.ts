import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface HomeState {
  primaryCurrency: string;
  primaryField: string;
  secondaryCurrency: string;
  secondaryField: string;
}

const initialState: HomeState = {
  primaryCurrency: "NEP",
  primaryField: "",
  secondaryCurrency: "BUSD",
  secondaryField: "",
};

export const homeSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    handleConverter: (
      state,
      action: PayloadAction<{ [key: string]: string }>
    ) => {
      state.primaryField = action.payload?.initial;
      state.secondaryField = action.payload?.next;
    },
    handlePrimaryCurrency: (state, action: PayloadAction<string>) => {
      state.primaryCurrency = action.payload;
    },
    handleSecondaryCurrency: (state, action: PayloadAction<string>) => {
      state.secondaryCurrency = action.payload;
    },
  },
});

export const {
  handleConverter,
  handlePrimaryCurrency,
  handleSecondaryCurrency,
} = homeSlice.actions;
export default homeSlice.reducer;
