import { listTextFieldProps } from "@/pages/home/types";
import React, { ChangeEvent, MouseEventHandler } from "react";

export interface ConnectorProps {
  mainButtonColor?: any;
  primaryTitle?: string;
  secondaryTitle?: string;
  handleClick: MouseEventHandler<HTMLButtonElement>;
  handleCancel: MouseEventHandler<HTMLButtonElement>;
  loading?: boolean;
}

export interface ViewerProps {
  cardHeaderSubheader?: string;
  cardHeaderTitle?: string;
  cardWidth?: number;
  children?: React.ReactChild;
}

export interface DisplayProps {
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
