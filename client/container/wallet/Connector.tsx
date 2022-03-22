import ConnectorComponent from "@/components/converter/Connector";
import { useCallback, useEffect, useState } from "react";
import { ethers } from "ethers";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import {
  handleAccount,
  handleBalance,
  handleChainId,
  handleProvider,
} from "@/redux/reducer/wallet";
import Popper from "@/components/Popper";
import { popupProps } from "@/components/types";
import { ConnectorProps } from "@/container/wallet/types";

const Connector = ({
  handleCancel,
  handleLoading,
  loading,
}: ConnectorProps) => {
  const [popup, setPopup] = useState<popupProps>({
    message: "",
    severity: "info",
    status: false,
  });

  const dispatch = useDispatch();
  const walletState = useSelector((state: RootState) => state?.wallet);
  const account = walletState?.account;
  const balance = walletState?.balance;
  const chainId = walletState?.chainId;
  const provider = walletState?.provider;

  const [errorMessage, setErrorMessage] = useState<any>(null);
  console.log({ account });
  console.log({ balance });
  console.log({ chainId });
  console.log({ provider });

  const connectWalletHandler = useCallback(() => {
    handleLoading(true);
    // @ts-ignore
    if (window.ethereum && !account) {
      // @ts-ignore
      const getProvider = new ethers.providers.Web3Provider(window.ethereum);
      dispatch(handleProvider(getProvider));

      // @ts-ignore
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result: any) => {
          dispatch(handleAccount(result.at(0)));
          setPopup({
            severity: "success",
            status: true,
            message: "Successfully connected to Wallet",
          });
        })
        .catch((error: any) => {
          setPopup({
            severity: "error",
            status: true,
            message: error.message,
          });
        });

      // @ts-ignore
      window.ethereum
        .request({ method: "net_version" })
        .then((result: any) => {
          dispatch(handleChainId(result));
        })
        .catch((error: any) => {
          setPopup({
            severity: "error",
            status: true,
            message: error.message,
          });
        });

      setTimeout(() => {
        handleLoading(false);
      }, 1000);

      // @ts-ignore
    } else if (!window.ethereum) {
      setPopup({
        severity: "error",
        status: true,
        message: "Please install MetaMask browser extension to interact",
      });
    }
  }, [account, dispatch, handleLoading]);

  useEffect(() => {
    if (account && provider) {
      provider.getBalance(account).then((balanceResult: any) => {
        const accountBalance: any = ethers.utils.formatEther(balanceResult);
        return dispatch(handleBalance(accountBalance));
      });
    }
  }, [account, dispatch, provider]);

  const handlePopup = () => {
    setPopup({ ...popup, status: false });
  };

  return (
    <>
      <ConnectorComponent
        handleClick={connectWalletHandler}
        handleCancel={handleCancel}
        loading={loading}
      />
      <Popper popup={popup} handlePopup={handlePopup} />
    </>
  );
};

export default Connector;
