import { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import { createMuiTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";

import { DarkModeProvider, DarkModeContext } from "../context/themeContext";
import DarkModeIcon from "../components/DarkModeIcon";
interface Props {
  children: React.ReactElement;
}

function ScrollTop(props: Props) {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        position: "fixed",
        bottom: theme.spacing(2),
        right: theme.spacing(2),
      },
    })
  );
  const { children } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector("#back-to-top-anchor");

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

export default function MyAppWithTheme(props: AppProps) {
  return (
    <DarkModeProvider>
      <MyApp {...props} />;
    </DarkModeProvider>
  );
}

export function MyApp({ Component, pageProps }: AppProps) {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      navbarRight: {
        marginLeft: "auto",
        marginRight: theme.spacing(0),
      },
    })
  );
  const classes = useStyles();
  const darkMode = useContext(DarkModeContext);
  const paletteType = darkMode ? "dark" : "light";
  const theme = createMuiTheme({
    palette: {
      // primary: {
      //   main: "#556cd6",
      // },
      // secondary: {
      //   main: "#19857b",
      // },
      // error: {
      //   main: red.A400,
      // },
      // background: {
      //   default: "#fff",
      // },
      type: paletteType,
    },
  });
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar>
          <Toolbar>
            <Typography variant="h6">Scroll to see button</Typography>
            <div className={classes.navbarRight}>
              <DarkModeIcon />
            </div>
          </Toolbar>
        </AppBar>
        <Component {...pageProps} />
        <ScrollTop>
          <Fab color="secondary" size="medium" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </ThemeProvider>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
