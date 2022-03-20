import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material/styles";
import type { NextPage } from "next";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { globalTheme } from "../utils/theme";
import red from "@mui/material/colors/red";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    primary: {
      light: globalTheme.light,
      main: globalTheme.primary,
      dark: globalTheme.dark,
    },
    secondary: {
      light: red[300],
      main: red[500],
      dark: red[700],
    },
  },
});

const cache = createCache({
  key: "css",
  prepend: true,
});

const Home: NextPage = () => {
  return (
    <StyledEngineProvider injectFirst>
      <CacheProvider value={cache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {/* <Main /> */}
        </ThemeProvider>
      </CacheProvider>
    </StyledEngineProvider>
  );
};

export default Home;
