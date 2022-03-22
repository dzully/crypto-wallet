import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ConverterProps {
  account: string;
  chainId: string;
  balance: string;
}

const initialState: ConverterProps = {
  account: "",
  chainId: "",
  balance: "",
};

export const converterSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    handleAccount: (state, action: PayloadAction<string>) => {
      state.account = action.payload;
    },
    handleChainId: (state, action: PayloadAction<string>) => {
      state.chainId = action.payload;
    },
    handleBalance: (state, action: PayloadAction<string>) => {
      state.balance = action.payload;
    },
  },
});

export const { handleAccount, handleChainId, handleBalance } =
  converterSlice.actions;
export default converterSlice.reducer;
