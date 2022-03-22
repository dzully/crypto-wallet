import { ConnectorProps } from "@/components/converter/types";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

const Connector = ({
  primaryTitle = "connect",
  secondaryTitle = "cancel",
  handleClick,
  handleCancel,
  loading = false,
}: ConnectorProps) => (
  <div className="flex relative w-full">
    {!loading ? (
      <>
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
        <Button
          fullWidth
          variant="outlined"
          color="primary"
          onClick={handleCancel}
        >
          {secondaryTitle}
        </Button>
      </>
    ) : (
      <div className="flex relative justify-center w-full">
        <CircularProgress />
      </div>
    )}
  </div>
);

export default Connector;
