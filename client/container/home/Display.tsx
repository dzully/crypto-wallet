import type { NextPage } from "next";
import { handleConverter } from "@/redux/reducer/converter";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { ChangeEvent, useCallback } from "react";
import { formula, validate } from "@/utils/customFunction";
import { listTextField } from "@/container/home/utils";
import DisplayComponent from "@/components/converter/Display";

const Display: NextPage = () => {
  const dispatch = useDispatch();
  const converterState = useSelector((state: RootState) => state?.converter);
  const primaryCurrency = converterState?.primaryCurrency;
  const primaryField = converterState?.primaryField;
  const secondaryCurrency = converterState?.secondaryCurrency;
  const secondaryField = converterState?.secondaryField;
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

  return (
    <DisplayComponent
      handleChange={handleChange}
      listTextField={listTextField}
      primaryCurrency={primaryCurrency}
      primaryField={primaryField}
      secondaryCurrency={secondaryCurrency}
      secondaryField={secondaryField}
    />
  );
};

export default Display;
