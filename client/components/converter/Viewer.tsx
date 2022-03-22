import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import startCase from "lodash/startCase";
import { ViewerProps } from "@/components/converter/types";
import Display from "@/components/converter/Display";

export const capitalizeFirstLetter = (param: string) => {
  return param.charAt(0).toUpperCase() + param.slice(1);
};

const Viewer = ({
  cardHeaderSubheader = "convert prices online between two currencies in real-time",
  cardHeaderTitle = "crypto converter",
  cardWidth = 500,
  children,
}: ViewerProps) => (
  <div className="relative flex h-full items-center justify-center">
    <Card sx={{ width: cardWidth }}>
      <CardHeader
        title={startCase(cardHeaderTitle?.toLowerCase())}
        subheader={capitalizeFirstLetter(cardHeaderSubheader)}
      />
      <CardContent>{children}</CardContent>
    </Card>
  </div>
);

export default Viewer;
