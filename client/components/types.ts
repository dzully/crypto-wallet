import { AlertColor } from "@mui/material";

export interface popupProps {
  severity: AlertColor;
  status: boolean;
  message: string;
}

export interface PopperProps {
  popup: popupProps;
  handlePopup: () => void;
}
