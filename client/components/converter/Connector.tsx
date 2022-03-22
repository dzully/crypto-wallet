import { ConnectorProps } from "@/components/converter/types";
import Button from "@mui/material/Button";

const Connector = ({
  title = "check wallet details",
  handleClick,
}: ConnectorProps) => (
  <div className="flex relative">
    <Button
      fullWidth
      className="bg-[#0d162e]"
      variant="contained"
      color="primary"
      onClick={handleClick}
    >
      {title}
    </Button>
  </div>
);

export default Connector;
