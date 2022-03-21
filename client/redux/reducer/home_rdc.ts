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
    handlePrimaryField: (state, action: PayloadAction<string>) => {
      state.primaryField = action.payload;
    },
    handleSecondaryField: (state, action: PayloadAction<string>) => {
      state.secondaryField = action.payload;
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
  handlePrimaryCurrency,
  handlePrimaryField,
  handleSecondaryCurrency,
  handleSecondaryField,
} = homeSlice.actions;
export default homeSlice.reducer;
