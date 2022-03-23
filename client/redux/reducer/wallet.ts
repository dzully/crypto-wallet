import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ConverterProps {
  provider: any;
  account: string;
  chainId: string;
  balance: string;
}

const initialState: ConverterProps = {
  provider: null,
  account: "",
  chainId: "",
  balance: "",
};

export const converterSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    handleProvider: (state, action: PayloadAction<any>) => {
      state.provider = action.payload;
    },
    handleAccount: (state, action: PayloadAction<string>) => {
      state.account = action.payload;
    },
    handleChainId: (state, action: PayloadAction<string>) => {
      state.chainId = action.payload;
    },
    handleBalance: (state, action: PayloadAction<string>) => {
      state.balance = action.payload;
    },
    handleDisconnect: (state) => {
      state.provider = null;
      state.account = "";
      state.chainId = "";
      state.balance = "";
    },
  },
});

export const {
  handleAccount,
  handleChainId,
  handleBalance,
  handleProvider,
  handleDisconnect,
} = converterSlice.actions;
export default converterSlice.reducer;
