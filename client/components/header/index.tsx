import Image from "next/image";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import startCase from "lodash/startCase";
import { HeaderProps } from "@/components/header/types";
import { memo } from "react";

const Header = ({
  imageSrc = "/images/neptune.png",
  title = "neptune mutual",
}: HeaderProps) => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar
      elevation={0}
      position="static"
      className="flex justify-center items-center"
    >
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

export default memo(Header);
