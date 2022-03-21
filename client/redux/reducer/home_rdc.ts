import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface HomeState {
  primaryField: string;
  secondaryField: string;
  primaryCurrency: string;
  secondaryCurrency: string;
}

const initialState: HomeState = {
  primaryField: "",
  secondaryField: "",
  primaryCurrency: "NEP",
  secondaryCurrency: "BUSD",
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
  handlePrimaryField,
  handleSecondaryField,
  handlePrimaryCurrency,
  handleSecondaryCurrency,
} = homeSlice.actions;
export default homeSlice.reducer;
