import ConnectorComponent from "@/components/converter/Connector";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import {
  handleAccount,
  handleBalance,
  handleChainId,
} from "@/redux/reducer/wallet";

const Connector = () => {
  const dispatch = useDispatch();
  const walletState = useSelector((state: RootState) => state?.wallet);
  const account = walletState?.account;
  const balance = walletState?.balance;
  const chainId = walletState?.chainId;

  const [errorMessage, setErrorMessage] = useState<any>(null);
  const [provider, setProvider] = useState<any>(null);
  console.log({ account });
  console.log({ balance });
  console.log({ chainId });

  const connectWalletHandler = () => {
    // @ts-ignore
    if (window.ethereum && !account) {
      // @ts-ignore
      setProvider(new ethers.providers.Web3Provider(window.ethereum));

      // @ts-ignore
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result: any) => {
          dispatch(handleAccount(result.at(0)));
        })
        .catch((error: any) => {
          setErrorMessage(error.message);
        });

      // @ts-ignore
      window.ethereum
        .request({ method: "net_version" })
        .then((result: any) => {
          dispatch(handleChainId(result));
        })
        .catch((error: any) => {
          setErrorMessage(error.message);
        });

      // @ts-ignore
    } else if (!window.ethereum) {
      console.log("Need to install MetaMask");
      setErrorMessage("Please install MetaMask browser extension to interact");
    }
  };

  useEffect(() => {
    if (account && provider) {
      provider.getBalance(account).then((balanceResult: any) => {
        const accountBalance: any = ethers.utils.formatEther(balanceResult);
        return dispatch(handleBalance(accountBalance));
      });
    }
  }, [account, dispatch, provider]);

  return <ConnectorComponent handleClick={connectWalletHandler} />;
};

export default Connector;
