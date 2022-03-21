import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import CardHeader from "@mui/material/CardHeader";
import startCase from "lodash/startCase";
import Display from "./display";
import { ConverterProps } from "@/components/converter/types";

export const capitalizeFirstLetter = (param: string) => {
  return param.charAt(0).toUpperCase() + param.slice(1);
};

const Converter = ({
  cardHeaderTitle = "crypto converter",
  cardHeaderSubheader = "convert prices online between two currencies in real-time",
  displayProps,
  cardWidth = 500,
}: ConverterProps) => {
  return (
    <div className="relative flex h-full items-center justify-center">
      <Card sx={{ width: cardWidth }}>
        <CardHeader
          title={startCase(cardHeaderTitle?.toLowerCase())}
          subheader={capitalizeFirstLetter(cardHeaderSubheader)}
        />
        <CardContent>
          <Display displayProps={displayProps} />
        </CardContent>
      </Card>
    </div>
  );
};

export default Converter;
