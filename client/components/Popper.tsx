import Button from "@mui/material/Button";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { forwardRef, useState } from "react";
import { PopperProps } from "@/components/types";

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Popper = ({ popup, handlePopup }: PopperProps) => (
  <Snackbar
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    open={popup.status}
    autoHideDuration={6000}
    onClose={handlePopup}
  >
    <Alert
      onClose={handlePopup}
      severity={popup.severity}
      sx={{ width: "100%" }}
    >
      {popup.message}
    </Alert>
  </Snackbar>
);

export default Popper;
