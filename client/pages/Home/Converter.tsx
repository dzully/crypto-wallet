import type { NextPage } from "next";
import { handleConverter } from "@/reducer/home_rdc";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import Converter from "../../components/converter";
import { ChangeEvent, useCallback } from "react";
import { listTextField } from "@/pages/Home/utils";
import { formula, validate } from "@/utils/customFunction";
import debounce from "lodash/debounce";

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const homeState = useSelector((state: RootState) => state?.home);
  const primaryCurrency = homeState?.primaryCurrency;
  const primaryField = homeState?.primaryField;
  const secondaryCurrency = homeState?.secondaryCurrency;
  const secondaryField = homeState?.secondaryField;
  const currencyModel = `${primaryCurrency}_${secondaryCurrency}`;

  const handleChange = useCallback(
    (label: string, key: number) => (event: ChangeEvent<HTMLInputElement>) => {
      const value: string = event.target.value;
      const useCurrency =
        label === primaryCurrency ? secondaryCurrency : primaryCurrency;
      const useFormula = formula(currencyModel, useCurrency, Number(value));
      const useValidate = validate(value);

      const model =
        key === 0
          ? { initial: useValidate, next: useFormula }
          : { initial: useFormula, next: useValidate };

      dispatch(handleConverter(model));
    },
    [currencyModel, dispatch, primaryCurrency, secondaryCurrency]
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
