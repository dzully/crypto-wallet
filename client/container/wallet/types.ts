import { MouseEventHandler } from "react";

export interface MenuProps {
  buttonTitle?: string;
  dialogTitle?: string;
}

export interface DetailsProps {
  nullMessage?: string;
}

export interface ConnectorProps {
  handleCancel: MouseEventHandler<HTMLButtonElement>;
  handleLoading: (param: boolean) => void;
  loading: boolean;
}
