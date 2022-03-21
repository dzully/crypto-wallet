import Image from "next/image";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import startCase from "lodash/startCase";

interface HeaderProps {
  title?: string;
}

const Header = ({ title = "neptune mutual" }: HeaderProps) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar elevation={0} position="static">
        <Toolbar>
          <div className="mr-2 flex">
            <Image
              src="/images/neptune.png"
              alt="Picture of the author"
              width={50}
              height={48}
            />
          </div>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {startCase(title?.toLowerCase())}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
