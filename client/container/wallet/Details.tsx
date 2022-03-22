import { DetailsProps } from "@/container/wallet/types";
import { Typography } from "@mui/material";

const Details = ({
  nullMessage = 'Wallet not connected. Please click the "Connect" button to connect to wallet.',
}: DetailsProps) => {
  return (
    <div className="flex relative">
      <Typography variant="body1" color="secondary">
        {nullMessage}
      </Typography>
    </div>
  );
};

export default Details;
