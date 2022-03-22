import Connector from "@/container/wallet/Connector";
import Details from "@/container/wallet/Details";
import { MenuProps } from "@/container/wallet/types";
import { DialogActions } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { startCase } from "lodash";
import { useState } from "react";

const Wallet = ({
  buttonTitle = "check wallet details",
  dialogTitle = "wallet details",
}: MenuProps) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button fullWidth variant="outlined" onClick={handleClickOpen}>
        {buttonTitle}
      </Button>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {startCase(dialogTitle?.toLowerCase())}
        </DialogTitle>
        <DialogContent>
          <Details />
        </DialogContent>
        <DialogActions>
          <Connector handleCancel={handleClose} />
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Wallet;
