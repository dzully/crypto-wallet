import type { NextPage } from "next";
import Head from "next/head";
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { globalTheme } from "../utils/theme";
import CssBaseline from "@mui/material/CssBaseline";
import Home from "./home";

const theme = createTheme({
  palette: {
    primary: {
      light: globalTheme.light,
      main: globalTheme.primary,
      dark: globalTheme.dark,
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

const cache = createCache({
  key: "css",
  prepend: true,
});

const App: NextPage = () => {
  return (
    <div className="absolute flex top-0 bottom-0 right-0 left-0 overflow-hidden bg-primary-normal">
      <Head>
        <title>Neptune Mutual</title>
        <meta name="description" content="Crypto wallet connector" />
      </Head>

      <StyledEngineProvider injectFirst>
        <CacheProvider value={cache}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Home />
          </ThemeProvider>
        </CacheProvider>
      </StyledEngineProvider>
    </div>
  );
};

export default App;
