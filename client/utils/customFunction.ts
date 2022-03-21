import { useCaseProps } from "@/utils/types";
import { get } from "lodash";

export const validate = (param: string) => {
  return param.includes(".")
    ? param.substr(0, param.indexOf(".")) + param.substr(param.indexOf("."), 3)
    : param;
};

export const formula = (label: string, currency: string, value: number) => {
  const whichCase = get(useCase, label);
  const position = whichCase.position as string[];
  const getPosition = position.indexOf(currency);

  let getValue = value * Number(whichCase.calculate);
  if (getPosition === 0) {
    getValue = value / Number(whichCase.calculate);
  }

  return getValue ? validate(getValue?.toFixed(2)) : "";
};

export const useCase: useCaseProps = {
  NEP_BUSD: {
    NEP: 1,
    BUSD: 3,
    calculate: 3,
    position: ["NEP", "BUSD"],
    note: "1 NEP = 3 BUSD",
  },
};
