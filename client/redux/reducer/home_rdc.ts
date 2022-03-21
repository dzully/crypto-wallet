import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface HomeState {
  primaryField: string;
  secondaryField: string;
}

const initialState: HomeState = {
  primaryField: "",
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
  },
});

export const { handlePrimaryField, handleSecondaryField } = homeSlice.actions;
export default homeSlice.reducer;
