import { Provider } from "react-redux";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { store } from "@/redux/store";

function getLibrary(provider: any) {
  return new Web3(provider);
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Web3ReactProvider>
  );
}

export default MyApp;
