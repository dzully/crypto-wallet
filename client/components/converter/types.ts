import { listTextFieldProps } from "@/pages/Home/types";
import { ChangeEvent } from "react";

export interface ConverterProps {
  cardHeaderSubheader?: string;
  cardHeaderTitle?: string;
  cardWidth?: number;
  displayProps: displayProps;
}

export interface displayProps {
  handleChange: (
    label: string,
    key: number
  ) => (event: ChangeEvent<HTMLInputElement>) => void;
  listTextField: listTextFieldProps[];
  primaryCurrency: string;
  primaryField: string;
  secondaryCurrency: string;
  secondaryField: string;
}

export interface DisplayProps {
  displayProps: displayProps;
}
