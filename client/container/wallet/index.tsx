import ListDetails from "@/components/ListDetails";
import NoData from "@/components/NoData";
import Connector from "@/container/wallet/Connector";
import { MenuProps } from "@/container/wallet/types";
import { RootState } from "@/redux/store";
import { DialogActions } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { startCase } from "lodash";
import { useState } from "react";
import { useSelector } from "react-redux";

const Wallet = ({
  buttonTitle = "check wallet details",
  dialogTitle = "wallet details",
}: MenuProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [open, setOpen] = useState(false);

  const walletState = useSelector((state: RootState) => state?.wallet);
  const provider = walletState?.provider;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLoading = (param: boolean) => setLoading(param);

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
          {provider && !loading ? <ListDetails /> : <NoData />}
        </DialogContent>
        <DialogActions>
          <Connector
            handleCancel={handleClose}
            handleLoading={handleLoading}
            loading={loading}
          />
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Wallet;
