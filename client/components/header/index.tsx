import Image from "next/image";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import startCase from "lodash/startCase";
import { HeaderProps } from "@/components/header/types";

const Header = ({
  title = "neptune mutual",
  imageSrc = "/images/neptune.png",
}: HeaderProps) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar elevation={0} position="static">
        <Toolbar>
          {imageSrc ? (
            <div className="mr-2 flex">
              <Image src={imageSrc} alt="company" width={50} height={48} />
            </div>
          ) : null}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {startCase(title?.toLowerCase())}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
