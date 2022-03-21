import { listTextFieldProps } from "@/pages/Home/types";
import { ChangeEvent } from "react";

export interface ConverterProps {
  cardHeaderTitle?: string;
  cardHeaderSubheader?: string;
  displayProps: displayProps;
}

export interface displayProps {
  handleChange: (
    label: "primary" | "secondary"
  ) => (event: ChangeEvent<HTMLInputElement>) => void;
  primaryField: string;
  secondaryField: string;
  primaryCurrency: string;
  secondaryCurrency: string;
  listTextField: listTextFieldProps[];
}

export interface DisplayProps {
  displayProps: displayProps;
}
