import { ConnectorProps } from "@/components/converter/types";
import Button from "@mui/material/Button";

const Connector = ({
  primaryTitle = "connect",
  secondaryTitle = "cancel",
  handleClick,
  handleCancel,
}: ConnectorProps) => (
  <div className="flex relative">
    <Button
      fullWidth
      className="bg-[#0d162e]"
      variant="contained"
      color="primary"
      onClick={handleClick}
    >
      {primaryTitle}
    </Button>
    <div className="m-1" />
    <Button fullWidth variant="outlined" color="primary" onClick={handleCancel}>
      {secondaryTitle}
    </Button>
  </div>
);

export default Connector;
