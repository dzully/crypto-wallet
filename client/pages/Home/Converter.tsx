import type { NextPage } from "next";
import { handlePrimaryField, handleSecondaryField } from "@/reducer/home_rdc";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import Converter from "../../components/converter";
import { ChangeEvent, useCallback } from "react";
import { listTextField } from "@/pages/Home/utils";

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const homeState = useSelector((state: RootState) => state?.home);
  const primaryCurrency = homeState?.primaryCurrency;
  const primaryField = homeState?.primaryField;
  const secondaryCurrency = homeState?.secondaryCurrency;
  const secondaryField = homeState?.secondaryField;

  const handleChange = useCallback(
    (label: "primary" | "secondary") =>
      (event: ChangeEvent<HTMLInputElement>) => {
        const value: string = event.target.value;
        if (label === "primary") {
          dispatch(handlePrimaryField(value));
        } else if (label === "secondary") {
          dispatch(handleSecondaryField(value));
        }
      },
    [dispatch]
  );

  const displayProps = {
    handleChange,
    listTextField,
    primaryCurrency,
    primaryField,
    secondaryCurrency,
    secondaryField,
  };

  return <Converter displayProps={displayProps} />;
};

export default Home;
