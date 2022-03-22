import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ConverterProps {
  primaryCurrency: string;
  primaryField: string;
  secondaryCurrency: string;
  secondaryField: string;
}

const initialState: ConverterProps = {
  primaryCurrency: "NEP",
  primaryField: "",
  secondaryCurrency: "BUSD",
  secondaryField: "",
};

export const converterSlice = createSlice({
  name: "converter",
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
} = converterSlice.actions;
export default converterSlice.reducer;
